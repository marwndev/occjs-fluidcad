import ocFullJS from "../lib/opencascade.fluidcad.multi-threaded.js";
import ocFullWasm from "../lib/opencascade.fluidcad.multi-threaded.wasm?url";
import ocFullWorker from "../lib/opencascade.fluidcad.multi-threaded.worker.js?url";
import { OpenCascadeInstance } from './occjs'

// The multi-threaded Emscripten glue unconditionally calls
// require("os").cpus().length to size the pthread pool. Provide a
// browser shim backed by navigator.hardwareConcurrency.
if (typeof globalThis.require === 'undefined') {
    globalThis.require = (id) => {
        if (id === 'os') {
            return { cpus: () => new Array(navigator.hardwareConcurrency || 4) };
        }
        throw new Error(`occjs-fluidcad: unsupported require("${id}") in browser`);
    };
}

// The pthread worker is served by Vite after ESM transforms, so it must
// be loaded as a module worker. Emscripten's glue uses `new Worker(url)`
// (classic). Wrap Worker so that this specific URL is always spawned
// with `{ type: "module" }`, including late allocations via
// PThread.getNewWorker. All other Worker usage is untouched.
const pthreadWorkerUrls = new Set();
const OriginalWorker = globalThis.Worker;
globalThis.Worker = function PatchedWorker(scriptURL, options) {
    const isPthreadWorker = typeof scriptURL === 'string' && pthreadWorkerUrls.has(scriptURL);
    const finalOptions = isPthreadWorker
        ? { ...(options || {}), type: 'module' }
        : options;
    return new OriginalWorker(scriptURL, finalOptions);
};
globalThis.Worker.prototype = OriginalWorker.prototype;

const initOpenCascade = ({
    mainJS = ocFullJS,
    mainWasm = ocFullWasm,
    worker = ocFullWorker,
    libs = [],
    module = {},
} = {}) => {
    pthreadWorkerUrls.add(worker);
    return new Promise((resolve) => {
        new mainJS({
            locateFile(path) {
                if (path.endsWith('.wasm')) {
                    return mainWasm;
                }
                if (path.endsWith('.worker.js') && !!worker) {
                    return worker;
                }
                return path;
            },
            ...module
        }).then(async oc => {
            for (let lib of libs) {
                await oc.loadDynamicLibrary(lib, {
                    loadAsync: true,
                    global: true,
                    nodelete: true,
                    allowUndefined: false
                });
            }

            const instance = new OpenCascadeInstance(oc);
            resolve(instance);
        });
    });
};

export default initOpenCascade;
