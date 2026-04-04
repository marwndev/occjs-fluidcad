# OCCJS-FluidCAD

A custom [occjs-wrapper](https://github.com/marwndev/occjs-wrapper) build for FluidCAD. This is a smaller, multi-threaded build of opencascade.js with only the modules needed by FluidCAD.

## Installation

```bash
npm install occjs-fluidcad
```

## Usage

### Browser

Requires `SharedArrayBuffer`, which needs COOP/COEP headers on your server.

```javascript
import initOpenCascade from 'occjs-fluidcad';

const oc = await initOpenCascade();
```

### Node.js

```javascript
import initOpenCascade from 'occjs-fluidcad/node';

const oc = await initOpenCascade();
```

### Importing types

```typescript
import initOpenCascade from 'occjs-fluidcad';
import { gp_Pnt } from 'occjs-fluidcad';
```
