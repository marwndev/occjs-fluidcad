let classRegistry = new Map();
export class BOPAlgo_CellsBuilder {
    constructor() {
        __determine_ctor_overload("BOPAlgo_CellsBuilder", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BOPAlgo_CellsBuilder_0() {
        const match = arguments.length === 0;
        return match ? "BOPAlgo_CellsBuilder_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BOPAlgo_CellsBuilder_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "BOPAlgo_CellsBuilder_2" : 0;
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddToResult(theLSToTake, theLSToAvoid, theMaterial, theUpdate) {
        const __result = this._overload.AddToResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddAllToResult(theMaterial, theUpdate) {
        const __result = this._overload.AddAllToResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    RemoveFromResult(theLSToTake, theLSToAvoid) {
        const __result = this._overload.RemoveFromResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    RemoveAllFromResult() {
        const __result = this._overload.RemoveAllFromResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    RemoveInternalBoundaries() {
        const __result = this._overload.RemoveInternalBoundaries.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetAllParts() {
        const __result = this._overload.GetAllParts.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    MakeContainers() {
        const __result = this._overload.MakeContainers.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BOPAlgo_Splitter {
    constructor() {
        __determine_ctor_overload("BOPAlgo_Splitter", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BOPAlgo_Splitter_0() {
        const match = arguments.length === 0;
        return match ? "BOPAlgo_Splitter_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BOPAlgo_Splitter_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "BOPAlgo_Splitter_2" : 0;
    }
    Perform(theRange) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRep_Builder {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRep_Builder(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_MakeFace_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "MakeFace_1" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeFace_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "MakeFace_2" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeFace_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "MakeFace_3" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeFace_3() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation));
        return match ? "MakeFace_4" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeFace_4() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Poly_ListOfTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation));
        return match ? "MakeFace_5" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateFace_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "UpdateFace_1" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateFace_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "UpdateFace_2" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateFace_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "UpdateFace_3" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "MakeEdge_1" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "MakeEdge_2" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "MakeEdge_3" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_3() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon3D));
        return match ? "MakeEdge_4" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_4() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation));
        return match ? "MakeEdge_5" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeEdge_5() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "MakeEdge_6" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "UpdateEdge_1" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "UpdateEdge_2" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "UpdateEdge_3" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_3() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "UpdateEdge_4" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_4() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "UpdateEdge_5" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_5() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (7 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[6]) instanceof (gp_Pnt2d));
        return match ? "UpdateEdge_6" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_6() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "UpdateEdge_7" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_7() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (8 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[5]) instanceof (Number) && _wrap_primitive_type(arguments[6]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[7]) instanceof (gp_Pnt2d));
        return match ? "UpdateEdge_8" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_8() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon3D));
        return match ? "UpdateEdge_9" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_9() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon3D) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "UpdateEdge_10" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_10() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation));
        return match ? "UpdateEdge_11" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_11() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "UpdateEdge_12" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_12() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Poly_Triangulation));
        return match ? "UpdateEdge_13" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_13() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location));
        return match ? "UpdateEdge_14" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_14() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face));
        return match ? "UpdateEdge_15" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_15() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "UpdateEdge_16" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_16() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Face));
        return match ? "UpdateEdge_17" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_17() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location));
        return match ? "UpdateEdge_18" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateEdge_18() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "UpdateEdge_19" : 0;
    }
    /** @internal */
    __determine_method_overload_Continuity_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[3]) instanceof (GeomAbs_Shape));
        return match ? "Continuity_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Continuity_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[5]) instanceof (GeomAbs_Shape));
        return match ? "Continuity_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Range_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "Range_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Range_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Range_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Range_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Range_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfert_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Transfert_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfert_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Vertex));
        return match ? "Transfert_2" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeVertex_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex));
        return match ? "MakeVertex_1" : 0;
    }
    /** @internal */
    __determine_method_overload_MakeVertex_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "MakeVertex_2" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_0() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "UpdateVertex_1" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_1() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "UpdateVertex_2" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_2() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "UpdateVertex_3" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_3() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[3]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "UpdateVertex_4" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_4() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "UpdateVertex_5" : 0;
    }
    /** @internal */
    __determine_method_overload_UpdateVertex_5() {
        const __oc = BRep_Builder.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "UpdateVertex_6" : 0;
    }
    NaturalRestriction(F, N) {
        const __result = this._overload.NaturalRestriction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SameParameter(E, S) {
        const __result = this._overload.SameParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SameRange(E, S) {
        const __result = this._overload.SameRange.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Degenerated(E, D) {
        const __result = this._overload.Degenerated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    MakeFace(F) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(5, "MakeFace", "", null, false).apply(this, arguments);
    }
    UpdateFace(F, S, L, Tol) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(3, "UpdateFace", "", null, false).apply(this, arguments);
    }
    MakeEdge(E) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(6, "MakeEdge", "", null, false).apply(this, arguments);
    }
    UpdateEdge(E, C, Tol) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(19, "UpdateEdge", "", null, false).apply(this, arguments);
    }
    Continuity(E, F1, F2, C) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(2, "Continuity", "", null, false).apply(this, arguments);
    }
    Range(E, First, Last, Only3d) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(3, "Range", "", null, false).apply(this, arguments);
    }
    Transfert(Ein, Eout) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(2, "Transfert", "", null, false).apply(this, arguments);
    }
    MakeVertex(V) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(2, "MakeVertex", "", null, false).apply(this, arguments);
    }
    UpdateVertex(V, P, Tol) {
        const __oc = BRep_Builder.prototype.getOC();
        return __determine_method_overload(6, "UpdateVertex", "", null, false).apply(this, arguments);
    }
}
export class BRep_Tool {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRep_Tool(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_IsClosed_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "IsClosed_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsClosed_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "IsClosed_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsClosed_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "IsClosed_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsClosed_3() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "IsClosed_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_Surface_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopLoc_Location));
        return match ? "Surface_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Surface_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Surface_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Tolerance_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Tolerance_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Tolerance_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Tolerance_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Tolerance_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex));
        return match ? "Tolerance_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsGeometric_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "IsGeometric_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsGeometric_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "IsGeometric_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Curve_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Curve_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Curve_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Curve_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_CurveOnSurface_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Boolean));
        return match ? "CurveOnSurface_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_CurveOnSurface_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Boolean));
        return match ? "CurveOnSurface_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_CurveOnSurface_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "CurveOnSurface_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_CurveOnSurface_3() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (7 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number) && _wrap_primitive_type(arguments[6]) instanceof (Number));
        return match ? "CurveOnSurface_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnSurface_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "PolygonOnSurface_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnSurface_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "PolygonOnSurface_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnSurface_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "PolygonOnSurface_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnSurface_3() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Polygon2D) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "PolygonOnSurface_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnTriangulation_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "PolygonOnTriangulation_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnTriangulation_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "PolygonOnTriangulation_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_PolygonOnTriangulation_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_PolygonOnTriangulation) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "PolygonOnTriangulation_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Range_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Range_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Range_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Range_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Range_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Range_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_UVPoints_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[4]) instanceof (gp_Pnt2d));
        return match ? "UVPoints_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_UVPoints_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt2d));
        return match ? "UVPoints_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_SetUVPoints_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[4]) instanceof (gp_Pnt2d));
        return match ? "SetUVPoints_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_SetUVPoints_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt2d));
        return match ? "SetUVPoints_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_HasContinuity_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face));
        return match ? "HasContinuity_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_HasContinuity_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location));
        return match ? "HasContinuity_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_HasContinuity_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "HasContinuity_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Continuity_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face));
        return match ? "Continuity_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Continuity_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[4]) instanceof (TopLoc_Location));
        return match ? "Continuity_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Parameter_0() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Parameter_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Parameter_1() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Parameter_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Parameter_2() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Face));
        return match ? "Parameter_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Parameter_3() {
        const __oc = BRep_Tool.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[3]) instanceof (TopLoc_Location));
        return match ? "Parameter_4" : 0;
    }
    static Triangulation(theFace, theLocation, theMeshPurpose) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Triangulation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Poly_Triangulation({ __from: __result });
    }
    static Triangulations(theFace, theLocation) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Triangulations.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Poly_ListOfTriangulation({ __from: __result });
    }
    static NaturalRestriction(F) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.NaturalRestriction.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Polygon3D(E, L) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Polygon3D.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Poly_Polygon3D({ __from: __result });
    }
    static CurveOnPlane(E, S, L, First, Last) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.CurveOnPlane.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_Curve({ __from: __result });
    }
    static SameParameter(E) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.SameParameter.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SameRange(E) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.SameRange.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Degenerated(E) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Degenerated.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static MaxContinuity(theEdge) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.MaxContinuity.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    static Pnt(V) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Pnt.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    static Parameters(V, F) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.Parameters.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    static MaxTolerance(theShape, theSubShape) {
        const __oc = BRep_Tool.prototype.getOC();
        const __result = __oc.BRep_Tool.MaxTolerance.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static IsClosed(S) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 4, "IsClosed", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static Surface(F, L) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "Surface", "Handle_Geom_Surface", Handle_Geom_Surface, false).apply(this, arguments);
    }
    static Tolerance(F) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 3, "Tolerance", "Standard_Real", Number, true).apply(this, arguments);
    }
    static IsGeometric(F) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "IsGeometric", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static Curve(E, L, First, Last) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "Curve", "Handle_Geom_Curve", Handle_Geom_Curve, false).apply(this, arguments);
    }
    static CurveOnSurface(E, F, First, Last, theIsStored) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 4, "CurveOnSurface", "Handle_Geom2d_Curve", Handle_Geom2d_Curve, false).apply(this, arguments);
    }
    static PolygonOnSurface(E, F) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 4, "PolygonOnSurface", "Handle_Poly_Polygon2D", Handle_Poly_Polygon2D, false).apply(this, arguments);
    }
    static PolygonOnTriangulation(E, T, L) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 3, "PolygonOnTriangulation", "Handle_Poly_PolygonOnTriangulation", Handle_Poly_PolygonOnTriangulation, false).apply(this, arguments);
    }
    static Range(E, First, Last) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 3, "Range", "", null, false).apply(this, arguments);
    }
    static UVPoints(E, S, L, PFirst, PLast) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "UVPoints", "", null, false).apply(this, arguments);
    }
    static SetUVPoints(E, S, L, PFirst, PLast) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "SetUVPoints", "", null, false).apply(this, arguments);
    }
    static HasContinuity(E, F1, F2) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 3, "HasContinuity", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static Continuity(E, F1, F2) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 2, "Continuity", "GeomAbs_Shape", GeomAbs_Shape, false).apply(this, arguments);
    }
    static Parameter(theV, theE, theParam) {
        const __oc = BRep_Tool.prototype.getOC();
        return __determine_method_overload_static(__oc, BRep_Tool, "BRep_Tool", 4, "Parameter", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class BRepAdaptor_CompCurve {
    constructor() {
        __determine_ctor_overload("BRepAdaptor_CompCurve", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_CompCurve_0() {
        const match = arguments.length === 0;
        return match ? "BRepAdaptor_CompCurve_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_CompCurve_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "BRepAdaptor_CompCurve_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_CompCurve_2() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepAdaptor_CompCurve_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Initialize_0() {
        const __oc = BRepAdaptor_CompCurve.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "Initialize_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Initialize_1() {
        const __oc = BRepAdaptor_CompCurve.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Initialize_2" : 0;
    }
    static get_type_name() {
        const __oc = BRepAdaptor_CompCurve.prototype.getOC();
        const __result = __oc.BRepAdaptor_CompCurve.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = BRepAdaptor_CompCurve.prototype.getOC();
        const __result = __oc.BRepAdaptor_CompCurve.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    ShallowCopy() {
        const __result = this._overload.ShallowCopy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Curve({ __from: __result });
    }
    Wire() {
        const __result = this._overload.Wire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    Edge(U, E, UonE) {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FirstParameter() {
        const __result = this._overload.FirstParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastParameter() {
        const __result = this._overload.LastParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Continuity() {
        const __result = this._overload.Continuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    NbIntervals(S) {
        const __result = this._overload.NbIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Intervals(T, S) {
        const __result = this._overload.Intervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Trim(First, Last, Tol) {
        const __result = this._overload.Trim.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Curve({ __from: __result });
    }
    IsClosed() {
        const __result = this._overload.IsClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsPeriodic() {
        const __result = this._overload.IsPeriodic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Period() {
        const __result = this._overload.Period.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Value(U) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    D0(U, P) {
        const __result = this._overload.D0.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D1(U, P, V) {
        const __result = this._overload.D1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D2(U, P, V1, V2) {
        const __result = this._overload.D2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D3(U, P, V1, V2, V3) {
        const __result = this._overload.D3.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DN(U, N) {
        const __result = this._overload.DN.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Resolution(R3d) {
        const __result = this._overload.Resolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetType() {
        const __result = this._overload.GetType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Line() {
        const __result = this._overload.Line.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    Circle() {
        const __result = this._overload.Circle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ({ __from: __result });
    }
    Ellipse() {
        const __result = this._overload.Ellipse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Elips({ __from: __result });
    }
    Hyperbola() {
        const __result = this._overload.Hyperbola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Hypr({ __from: __result });
    }
    Parabola() {
        const __result = this._overload.Parabola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Parab({ __from: __result });
    }
    Degree() {
        const __result = this._overload.Degree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsRational() {
        const __result = this._overload.IsRational.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbPoles() {
        const __result = this._overload.NbPoles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbKnots() {
        const __result = this._overload.NbKnots.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Bezier() {
        const __result = this._overload.Bezier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BezierCurve({ __from: __result });
    }
    BSpline() {
        const __result = this._overload.BSpline.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BSplineCurve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Initialize(W, KnotByCurvilinearAbcissa) {
        const __oc = BRepAdaptor_CompCurve.prototype.getOC();
        return __determine_method_overload(2, "Initialize", "", null, false).apply(this, arguments);
    }
}
export class BRepAdaptor_Curve {
    constructor() {
        __determine_ctor_overload("BRepAdaptor_Curve", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_Curve_0() {
        const match = arguments.length === 0;
        return match ? "BRepAdaptor_Curve_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_Curve_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "BRepAdaptor_Curve_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_Curve_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "BRepAdaptor_Curve_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Initialize_0() {
        const __oc = BRepAdaptor_Curve.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Initialize_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Initialize_1() {
        const __oc = BRepAdaptor_Curve.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "Initialize_2" : 0;
    }
    static get_type_name() {
        const __oc = BRepAdaptor_Curve.prototype.getOC();
        const __result = __oc.BRepAdaptor_Curve.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = BRepAdaptor_Curve.prototype.getOC();
        const __result = __oc.BRepAdaptor_Curve.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    ShallowCopy() {
        const __result = this._overload.ShallowCopy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Curve({ __from: __result });
    }
    Reset() {
        const __result = this._overload.Reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Trsf() {
        const __result = this._overload.Trsf.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    Is3DCurve() {
        const __result = this._overload.Is3DCurve.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsCurveOnSurface() {
        const __result = this._overload.IsCurveOnSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Curve() {
        const __result = this._overload.Curve.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAdaptor_Curve({ __from: __result });
    }
    CurveOnSurface() {
        const __result = this._overload.CurveOnSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Adaptor3d_CurveOnSurface({ __from: __result });
    }
    Edge() {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Tolerance() {
        const __result = this._overload.Tolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FirstParameter() {
        const __result = this._overload.FirstParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastParameter() {
        const __result = this._overload.LastParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Continuity() {
        const __result = this._overload.Continuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    NbIntervals(S) {
        const __result = this._overload.NbIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Intervals(T, S) {
        const __result = this._overload.Intervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Trim(First, Last, Tol) {
        const __result = this._overload.Trim.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Curve({ __from: __result });
    }
    IsClosed() {
        const __result = this._overload.IsClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsPeriodic() {
        const __result = this._overload.IsPeriodic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Period() {
        const __result = this._overload.Period.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Value(U) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    D0(U, P) {
        const __result = this._overload.D0.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D1(U, P, V) {
        const __result = this._overload.D1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D2(U, P, V1, V2) {
        const __result = this._overload.D2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D3(U, P, V1, V2, V3) {
        const __result = this._overload.D3.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DN(U, N) {
        const __result = this._overload.DN.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Resolution(R3d) {
        const __result = this._overload.Resolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetType() {
        const __result = this._overload.GetType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Line() {
        const __result = this._overload.Line.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    Circle() {
        const __result = this._overload.Circle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ({ __from: __result });
    }
    Ellipse() {
        const __result = this._overload.Ellipse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Elips({ __from: __result });
    }
    Hyperbola() {
        const __result = this._overload.Hyperbola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Hypr({ __from: __result });
    }
    Parabola() {
        const __result = this._overload.Parabola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Parab({ __from: __result });
    }
    Degree() {
        const __result = this._overload.Degree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsRational() {
        const __result = this._overload.IsRational.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbPoles() {
        const __result = this._overload.NbPoles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbKnots() {
        const __result = this._overload.NbKnots.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Bezier() {
        const __result = this._overload.Bezier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BezierCurve({ __from: __result });
    }
    BSpline() {
        const __result = this._overload.BSpline.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BSplineCurve({ __from: __result });
    }
    OffsetCurve() {
        const __result = this._overload.OffsetCurve.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_OffsetCurve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Initialize(E) {
        const __oc = BRepAdaptor_Curve.prototype.getOC();
        return __determine_method_overload(2, "Initialize", "", null, false).apply(this, arguments);
    }
}
export class BRepAdaptor_Surface {
    constructor() {
        __determine_ctor_overload("BRepAdaptor_Surface", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_Surface_0() {
        const match = arguments.length === 0;
        return match ? "BRepAdaptor_Surface_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAdaptor_Surface_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "BRepAdaptor_Surface_2" : 0;
    }
    static get_type_name() {
        const __oc = BRepAdaptor_Surface.prototype.getOC();
        const __result = __oc.BRepAdaptor_Surface.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = BRepAdaptor_Surface.prototype.getOC();
        const __result = __oc.BRepAdaptor_Surface.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    ShallowCopy() {
        const __result = this._overload.ShallowCopy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Surface({ __from: __result });
    }
    Initialize(F, Restriction) {
        const __result = this._overload.Initialize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Surface() {
        const __result = this._overload.Surface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAdaptor_Surface({ __from: __result });
    }
    ChangeSurface() {
        const __result = this._overload.ChangeSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAdaptor_Surface({ __from: __result });
    }
    Trsf() {
        const __result = this._overload.Trsf.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    Face() {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    Tolerance() {
        const __result = this._overload.Tolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FirstUParameter() {
        const __result = this._overload.FirstUParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastUParameter() {
        const __result = this._overload.LastUParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FirstVParameter() {
        const __result = this._overload.FirstVParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastVParameter() {
        const __result = this._overload.LastVParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    UContinuity() {
        const __result = this._overload.UContinuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    VContinuity() {
        const __result = this._overload.VContinuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    NbUIntervals(theSh) {
        const __result = this._overload.NbUIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbVIntervals(theSh) {
        const __result = this._overload.NbVIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    UIntervals(T, S) {
        const __result = this._overload.UIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    VIntervals(T, S) {
        const __result = this._overload.VIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    UTrim(First, Last, Tol) {
        const __result = this._overload.UTrim.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Surface({ __from: __result });
    }
    VTrim(First, Last, Tol) {
        const __result = this._overload.VTrim.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Surface({ __from: __result });
    }
    IsUClosed() {
        const __result = this._overload.IsUClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsVClosed() {
        const __result = this._overload.IsVClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsUPeriodic() {
        const __result = this._overload.IsUPeriodic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    UPeriod() {
        const __result = this._overload.UPeriod.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsVPeriodic() {
        const __result = this._overload.IsVPeriodic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    VPeriod() {
        const __result = this._overload.VPeriod.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Value(U, V) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    D0(U, V, P) {
        const __result = this._overload.D0.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D1(U, V, P, D1U, D1V) {
        const __result = this._overload.D1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D2(U, V, P, D1U, D1V, D2U, D2V, D2UV) {
        const __result = this._overload.D2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D3(U, V, P, D1U, D1V, D2U, D2V, D2UV, D3U, D3V, D3UUV, D3UVV) {
        const __result = this._overload.D3.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DN(U, V, Nu, Nv) {
        const __result = this._overload.DN.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    UResolution(theR3d) {
        const __result = this._overload.UResolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    VResolution(theR3d) {
        const __result = this._overload.VResolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetType() {
        const __result = this._overload.GetType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Plane() {
        const __result = this._overload.Plane.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pln({ __from: __result });
    }
    Cylinder() {
        const __result = this._overload.Cylinder.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Cylinder({ __from: __result });
    }
    Cone() {
        const __result = this._overload.Cone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Cone({ __from: __result });
    }
    Sphere() {
        const __result = this._overload.Sphere.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Sphere({ __from: __result });
    }
    Torus() {
        const __result = this._overload.Torus.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Torus({ __from: __result });
    }
    UDegree() {
        const __result = this._overload.UDegree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbUPoles() {
        const __result = this._overload.NbUPoles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    VDegree() {
        const __result = this._overload.VDegree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbVPoles() {
        const __result = this._overload.NbVPoles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbUKnots() {
        const __result = this._overload.NbUKnots.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbVKnots() {
        const __result = this._overload.NbVKnots.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsURational() {
        const __result = this._overload.IsURational.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsVRational() {
        const __result = this._overload.IsVRational.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Bezier() {
        const __result = this._overload.Bezier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BezierSurface({ __from: __result });
    }
    BSpline() {
        const __result = this._overload.BSpline.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_BSplineSurface({ __from: __result });
    }
    AxeOfRevolution() {
        const __result = this._overload.AxeOfRevolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    BasisCurve() {
        const __result = this._overload.BasisCurve.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Curve({ __from: __result });
    }
    BasisSurface() {
        const __result = this._overload.BasisSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor3d_Surface({ __from: __result });
    }
    OffsetValue() {
        const __result = this._overload.OffsetValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepAlgo_NormalProjection {
    constructor() {
        __determine_ctor_overload("BRepAlgo_NormalProjection", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgo_NormalProjection_0() {
        const match = arguments.length === 0;
        return match ? "BRepAlgo_NormalProjection_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgo_NormalProjection_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "BRepAlgo_NormalProjection_2" : 0;
    }
    Init(S) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(ToProj) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetParams(Tol3D, Tol2D, InternalContinuity, MaxDegree, MaxSeg) {
        const __result = this._overload.SetParams.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDefaultParams() {
        const __result = this._overload.SetDefaultParams.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxDistance(MaxDist) {
        const __result = this._overload.SetMaxDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Compute3d(With3d) {
        const __result = this._overload.Compute3d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLimit(FaceBoundaries) {
        const __result = this._overload.SetLimit.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Build() {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Projection() {
        const __result = this._overload.Projection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Ancestor(E) {
        const __result = this._overload.Ancestor.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Couple(E) {
        const __result = this._overload.Couple.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    IsElementary(C) {
        const __result = this._overload.IsElementary.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    BuildWire(Liste) {
        const __result = this._overload.BuildWire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepAlgoAPI_Common {
    constructor() {
        __determine_ctor_overload("BRepAlgoAPI_Common", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Common_0() {
        const match = arguments.length === 0;
        return match ? "BRepAlgoAPI_Common_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Common_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (BOPAlgo_PaveFiller));
        return match ? "BRepAlgoAPI_Common_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Common_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Common_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Common_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (BOPAlgo_PaveFiller) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Common_4" : 0;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepAlgoAPI_Cut {
    constructor() {
        __determine_ctor_overload("BRepAlgoAPI_Cut", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Cut_0() {
        const match = arguments.length === 0;
        return match ? "BRepAlgoAPI_Cut_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Cut_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (BOPAlgo_PaveFiller));
        return match ? "BRepAlgoAPI_Cut_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Cut_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Cut_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Cut_3() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (BOPAlgo_PaveFiller) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Cut_4" : 0;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepAlgoAPI_Fuse {
    constructor() {
        __determine_ctor_overload("BRepAlgoAPI_Fuse", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Fuse_0() {
        const match = arguments.length === 0;
        return match ? "BRepAlgoAPI_Fuse_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Fuse_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (BOPAlgo_PaveFiller));
        return match ? "BRepAlgoAPI_Fuse_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Fuse_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Fuse_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Fuse_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (BOPAlgo_PaveFiller) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "BRepAlgoAPI_Fuse_4" : 0;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepAlgoAPI_Splitter {
    constructor() {
        __determine_ctor_overload("BRepAlgoAPI_Splitter", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Splitter_0() {
        const match = arguments.length === 0;
        return match ? "BRepAlgoAPI_Splitter_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepAlgoAPI_Splitter_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (BOPAlgo_PaveFiller));
        return match ? "BRepAlgoAPI_Splitter_2" : 0;
    }
    SetTools(theLS) {
        const __result = this._overload.SetTools.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tools() {
        const __result = this._overload.Tools.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepBndLib {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepBndLib(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    static Add(S, B, useTriangulation) {
        const __oc = BRepBndLib.prototype.getOC();
        const __result = __oc.BRepBndLib.Add.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static AddClose(S, B) {
        const __oc = BRepBndLib.prototype.getOC();
        const __result = __oc.BRepBndLib.AddClose.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static AddOptimal(S, B, useTriangulation, useShapeTolerance) {
        const __oc = BRepBndLib.prototype.getOC();
        const __result = __oc.BRepBndLib.AddOptimal.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static AddOBB(theS, theOBB, theIsTriangulationUsed, theIsOptimal, theIsShapeToleranceUsed) {
        const __oc = BRepBndLib.prototype.getOC();
        const __result = __oc.BRepBndLib.AddOBB.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepBuilderAPI_FindPlane {
    constructor() {
        __determine_ctor_overload("BRepBuilderAPI_FindPlane", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_FindPlane_0() {
        const match = arguments.length === 0;
        return match ? "BRepBuilderAPI_FindPlane_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_FindPlane_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepBuilderAPI_FindPlane_2" : 0;
    }
    Init(S, Tol) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Found() {
        const __result = this._overload.Found.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Plane() {
        const __result = this._overload.Plane.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_Plane({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepBuilderAPI_MakeEdge {
    constructor() {
        __determine_ctor_overload("BRepBuilderAPI_MakeEdge", 35).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_0() {
        const match = arguments.length === 0;
        return match ? "BRepBuilderAPI_MakeEdge_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "BRepBuilderAPI_MakeEdge_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_4() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_5() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_6() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_7() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ));
        return match ? "BRepBuilderAPI_MakeEdge_8" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_8() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_9" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_9() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_10" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_10() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_11" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_11() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Elips));
        return match ? "BRepBuilderAPI_MakeEdge_12" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_12() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Elips) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_13" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_13() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Elips) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_14" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_14() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Elips) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_15" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_15() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Hypr));
        return match ? "BRepBuilderAPI_MakeEdge_16" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_16() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Hypr) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_17" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_17() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Hypr) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_18" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_18() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Hypr) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_19" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_19() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Parab));
        return match ? "BRepBuilderAPI_MakeEdge_20" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_20() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Parab) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_21" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_21() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Parab) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_22" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_22() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Parab) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_23" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_23() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve));
        return match ? "BRepBuilderAPI_MakeEdge_24" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_24() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_25" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_25() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_26" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_26() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_27" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_27() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_28" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_28() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_29" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_29() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface));
        return match ? "BRepBuilderAPI_MakeEdge_30" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_30() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_31" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_31() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt));
        return match ? "BRepBuilderAPI_MakeEdge_32" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_32() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Vertex));
        return match ? "BRepBuilderAPI_MakeEdge_33" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_33() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_34" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeEdge_34() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeEdge_35" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_2() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "Init_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_3() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "Init_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_4() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Init_5" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_5() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Init_6" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_6() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface));
        return match ? "Init_7" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_7() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Init_8" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_8() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt));
        return match ? "Init_9" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_9() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Vertex));
        return match ? "Init_10" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_10() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Init_11" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_11() {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Init_12" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Error() {
        const __result = this._overload.Error.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepBuilderAPI_EdgeError({ __from: __result });
    }
    Edge() {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Vertex1() {
        const __result = this._overload.Vertex1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    Vertex2() {
        const __result = this._overload.Vertex2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(C) {
        const __oc = BRepBuilderAPI_MakeEdge.prototype.getOC();
        return __determine_method_overload(12, "Init", "", null, false).apply(this, arguments);
    }
}
export class BRepBuilderAPI_MakeFace {
    constructor() {
        __determine_ctor_overload("BRepBuilderAPI_MakeFace", 22).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_0() {
        const match = arguments.length === 0;
        return match ? "BRepBuilderAPI_MakeFace_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "BRepBuilderAPI_MakeFace_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln));
        return match ? "BRepBuilderAPI_MakeFace_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder));
        return match ? "BRepBuilderAPI_MakeFace_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_4() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone));
        return match ? "BRepBuilderAPI_MakeFace_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere));
        return match ? "BRepBuilderAPI_MakeFace_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_6() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus));
        return match ? "BRepBuilderAPI_MakeFace_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_7() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_8" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_8() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_9" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_9() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_10" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_10() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_11" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_11() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_12" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_12() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_13" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_13() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "BRepBuilderAPI_MakeFace_14" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_14() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_15" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_15() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_16" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_16() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_17" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_17() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_18" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_18() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_19" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_19() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_20" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_20() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_MakeFace_21" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeFace_21() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire));
        return match ? "BRepBuilderAPI_MakeFace_22" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = BRepBuilderAPI_MakeFace.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = BRepBuilderAPI_MakeFace.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_2() {
        const __oc = BRepBuilderAPI_MakeFace.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Init_3" : 0;
    }
    Add(W) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Error() {
        const __result = this._overload.Error.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepBuilderAPI_FaceError({ __from: __result });
    }
    Face() {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(F) {
        const __oc = BRepBuilderAPI_MakeFace.prototype.getOC();
        return __determine_method_overload(3, "Init", "", null, false).apply(this, arguments);
    }
}
export class BRepBuilderAPI_MakeVertex {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepBuilderAPI_MakeVertex(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    Vertex() {
        const __result = this._overload.Vertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepBuilderAPI_MakeWire {
    constructor() {
        __determine_ctor_overload("BRepBuilderAPI_MakeWire", 7).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_0() {
        const match = arguments.length === 0;
        return match ? "BRepBuilderAPI_MakeWire_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "BRepBuilderAPI_MakeWire_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "BRepBuilderAPI_MakeWire_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge));
        return match ? "BRepBuilderAPI_MakeWire_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_4() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Edge));
        return match ? "BRepBuilderAPI_MakeWire_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "BRepBuilderAPI_MakeWire_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_MakeWire_6() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "BRepBuilderAPI_MakeWire_7" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_0() {
        const __oc = BRepBuilderAPI_MakeWire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Add_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_1() {
        const __oc = BRepBuilderAPI_MakeWire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "Add_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_2() {
        const __oc = BRepBuilderAPI_MakeWire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_ListOfShape));
        return match ? "Add_3" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Error() {
        const __result = this._overload.Error.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepBuilderAPI_WireError({ __from: __result });
    }
    Wire() {
        const __result = this._overload.Wire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    Edge() {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Vertex() {
        const __result = this._overload.Vertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(E) {
        const __oc = BRepBuilderAPI_MakeWire.prototype.getOC();
        return __determine_method_overload(3, "Add", "", null, false).apply(this, arguments);
    }
}
export class BRepBuilderAPI_Transform {
    constructor() {
        __determine_ctor_overload("BRepBuilderAPI_Transform", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_Transform_0() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Trsf));
        return match ? "BRepBuilderAPI_Transform_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepBuilderAPI_Transform_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Trsf) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepBuilderAPI_Transform_2" : 0;
    }
    Perform(S, Copy) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ModifiedShape(S) {
        const __result = this._overload.ModifiedShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Modified(S) {
        const __result = this._overload.Modified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepCheck_Analyzer {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepCheck_Analyzer(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_IsValid_0() {
        const __oc = BRepCheck_Analyzer.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "IsValid_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsValid_1() {
        const __oc = BRepCheck_Analyzer.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "IsValid_2" : 0;
    }
    Init(S, GeomControls, theIsParallel) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Result(theSubS) {
        const __result = this._overload.Result.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_BRepCheck_Result({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsValid(S) {
        const __oc = BRepCheck_Analyzer.prototype.getOC();
        return __determine_method_overload(2, "IsValid", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class BRepClass_FaceClassifier {
    constructor() {
        __determine_ctor_overload("BRepClass_FaceClassifier", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass_FaceClassifier_0() {
        const match = arguments.length === 0;
        return match ? "BRepClass_FaceClassifier_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass_FaceClassifier_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (BRepClass_FaceExplorer) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepClass_FaceClassifier_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass_FaceClassifier_2() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepClass_FaceClassifier_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass_FaceClassifier_3() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepClass_FaceClassifier_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_0() {
        const __oc = BRepClass_FaceClassifier.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Perform_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_1() {
        const __oc = BRepClass_FaceClassifier.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Perform_2" : 0;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(theF, theP, theTol, theUseBndBox, theGapCheckTol) {
        const __oc = BRepClass_FaceClassifier.prototype.getOC();
        return __determine_method_overload(2, "Perform", "", null, false).apply(this, arguments);
    }
}
export class BRepClass3d_SolidClassifier {
    constructor() {
        __determine_ctor_overload("BRepClass3d_SolidClassifier", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass3d_SolidClassifier_0() {
        const match = arguments.length === 0;
        return match ? "BRepClass3d_SolidClassifier_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass3d_SolidClassifier_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "BRepClass3d_SolidClassifier_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepClass3d_SolidClassifier_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepClass3d_SolidClassifier_3" : 0;
    }
    Load(S) {
        const __result = this._overload.Load.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(P, Tol) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    PerformInfinitePoint(Tol) {
        const __result = this._overload.PerformInfinitePoint.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Destroy() {
        const __result = this._overload.Destroy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepExtrema_DistShapeShape {
    constructor() {
        __determine_ctor_overload("BRepExtrema_DistShapeShape", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepExtrema_DistShapeShape_0() {
        const match = arguments.length === 0;
        return match ? "BRepExtrema_DistShapeShape_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepExtrema_DistShapeShape_1() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (__oc.Extrema_ExtFlag) && _wrap_primitive_type(arguments[3]) instanceof (__oc.Extrema_ExtAlgo) && _wrap_primitive_type(arguments[4]) instanceof (Message_ProgressRange));
        return match ? "BRepExtrema_DistShapeShape_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepExtrema_DistShapeShape_2() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (__oc.Extrema_ExtFlag) && _wrap_primitive_type(arguments[4]) instanceof (__oc.Extrema_ExtAlgo) && _wrap_primitive_type(arguments[5]) instanceof (Message_ProgressRange));
        return match ? "BRepExtrema_DistShapeShape_3" : 0;
    }
    SetDeflection(theDeflection) {
        const __result = this._overload.SetDeflection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    LoadS1(Shape1) {
        const __result = this._overload.LoadS1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    LoadS2(Shape1) {
        const __result = this._overload.LoadS2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(theRange) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSolution() {
        const __result = this._overload.NbSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    InnerSolution() {
        const __result = this._overload.InnerSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    PointOnShape1(N) {
        const __result = this._overload.PointOnShape1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    PointOnShape2(N) {
        const __result = this._overload.PointOnShape2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    SupportTypeShape1(N) {
        const __result = this._overload.SupportTypeShape1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepExtrema_SupportType({ __from: __result });
    }
    SupportTypeShape2(N) {
        const __result = this._overload.SupportTypeShape2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepExtrema_SupportType({ __from: __result });
    }
    SupportOnShape1(N) {
        const __result = this._overload.SupportOnShape1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    SupportOnShape2(N) {
        const __result = this._overload.SupportOnShape2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    ParOnEdgeS1(N, t) {
        const __result = this._overload.ParOnEdgeS1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ParOnEdgeS2(N, t) {
        const __result = this._overload.ParOnEdgeS2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ParOnFaceS1(N, u, v) {
        const __result = this._overload.ParOnFaceS1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ParOnFaceS2(N, u, v) {
        const __result = this._overload.ParOnFaceS2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Dump(o) {
        const __result = this._overload.Dump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetFlag(F) {
        const __result = this._overload.SetFlag.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetAlgo(A) {
        const __result = this._overload.SetAlgo.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMultiThread(theIsMultiThread) {
        const __result = this._overload.SetMultiThread.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsMultiThread() {
        const __result = this._overload.IsMultiThread.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepFilletAPI_MakeChamfer {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepFilletAPI_MakeChamfer(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_Add_0() {
        const __oc = BRepFilletAPI_MakeChamfer.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Add_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_1() {
        const __oc = BRepFilletAPI_MakeChamfer.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Add_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_2() {
        const __oc = BRepFilletAPI_MakeChamfer.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Face));
        return match ? "Add_3" : 0;
    }
    SetDist(Dis, IC, F) {
        const __result = this._overload.SetDist.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetDist(IC, Dis) {
        const __result = this._overload.GetDist.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDists(Dis1, Dis2, IC, F) {
        const __result = this._overload.SetDists.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Dists(IC, Dis1, Dis2) {
        const __result = this._overload.Dists.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddDA(Dis, Angle, E, F) {
        const __result = this._overload.AddDA.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDistAngle(Dis, Angle, IC, F) {
        const __result = this._overload.SetDistAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetDistAngle(IC, Dis, Angle) {
        const __result = this._overload.GetDistAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMode(theMode) {
        const __result = this._overload.SetMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsSymetric(IC) {
        const __result = this._overload.IsSymetric.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsTwoDistances(IC) {
        const __result = this._overload.IsTwoDistances.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDistanceAngle(IC) {
        const __result = this._overload.IsDistanceAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ResetContour(IC) {
        const __result = this._overload.ResetContour.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NbContours() {
        const __result = this._overload.NbContours.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Contour(E) {
        const __result = this._overload.Contour.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbEdges(I) {
        const __result = this._overload.NbEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Edge(I, J) {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Remove(E) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Length(IC) {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FirstVertex(IC) {
        const __result = this._overload.FirstVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    LastVertex(IC) {
        const __result = this._overload.LastVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    Abscissa(IC, V) {
        const __result = this._overload.Abscissa.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    RelativeAbscissa(IC, V) {
        const __result = this._overload.RelativeAbscissa.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ClosedAndTangent(IC) {
        const __result = this._overload.ClosedAndTangent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Closed(IC) {
        const __result = this._overload.Closed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reset() {
        const __result = this._overload.Reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Builder() {
        const __result = this._overload.Builder.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TopOpeBRepBuild_HBuilder({ __from: __result });
    }
    Generated(EorV) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Modified(F) {
        const __result = this._overload.Modified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    IsDeleted(F) {
        const __result = this._overload.IsDeleted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Simulate(IC) {
        const __result = this._overload.Simulate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NbSurf(IC) {
        const __result = this._overload.NbSurf.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Sect(IC, IS) {
        const __result = this._overload.Sect.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ChFiDS_SecHArray1({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(E) {
        const __oc = BRepFilletAPI_MakeChamfer.prototype.getOC();
        return __determine_method_overload(3, "Add", "", null, false).apply(this, arguments);
    }
}
export class BRepFilletAPI_MakeFillet {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepFilletAPI_MakeFillet(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_Add_0() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Add_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_1() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Add_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_2() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge));
        return match ? "Add_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_3() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Law_Function) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Add_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_4() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TColgp_Array1OfPnt2d) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Add_5" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_0() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetRadius_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_1() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "SetRadius_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_2() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Law_Function) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetRadius_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_3() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TColgp_Array1OfPnt2d) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetRadius_4" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_4() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Edge));
        return match ? "SetRadius_5" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRadius_5() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "SetRadius_6" : 0;
    }
    /** @internal */
    __determine_method_overload_IsConstant_0() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "IsConstant_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsConstant_1() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "IsConstant_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Radius_0() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Radius_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Radius_1() {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Radius_2" : 0;
    }
    SetParams(Tang, Tesp, T2d, TApp3d, TolApp2d, Fleche) {
        const __result = this._overload.SetParams.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetContinuity(InternalContinuity, AngularTolerance) {
        const __result = this._overload.SetContinuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ResetContour(IC) {
        const __result = this._overload.ResetContour.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetBounds(IC, E, F, L) {
        const __result = this._overload.GetBounds.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetLaw(IC, E) {
        const __result = this._overload.GetLaw.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Law_Function({ __from: __result });
    }
    SetLaw(IC, E, L) {
        const __result = this._overload.SetLaw.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetFilletShape(FShape) {
        const __result = this._overload.SetFilletShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetFilletShape() {
        const __result = this._overload.GetFilletShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbContours() {
        const __result = this._overload.NbContours.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Contour(E) {
        const __result = this._overload.Contour.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbEdges(I) {
        const __result = this._overload.NbEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Edge(I, J) {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Remove(E) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Length(IC) {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FirstVertex(IC) {
        const __result = this._overload.FirstVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    LastVertex(IC) {
        const __result = this._overload.LastVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    Abscissa(IC, V) {
        const __result = this._overload.Abscissa.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    RelativeAbscissa(IC, V) {
        const __result = this._overload.RelativeAbscissa.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ClosedAndTangent(IC) {
        const __result = this._overload.ClosedAndTangent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Closed(IC) {
        const __result = this._overload.Closed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reset() {
        const __result = this._overload.Reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Builder() {
        const __result = this._overload.Builder.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TopOpeBRepBuild_HBuilder({ __from: __result });
    }
    Generated(EorV) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Modified(F) {
        const __result = this._overload.Modified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    IsDeleted(F) {
        const __result = this._overload.IsDeleted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSurfaces() {
        const __result = this._overload.NbSurfaces.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NewFaces(I) {
        const __result = this._overload.NewFaces.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Simulate(IC) {
        const __result = this._overload.Simulate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NbSurf(IC) {
        const __result = this._overload.NbSurf.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Sect(IC, IS) {
        const __result = this._overload.Sect.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ChFiDS_SecHArray1({ __from: __result });
    }
    NbFaultyContours() {
        const __result = this._overload.NbFaultyContours.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FaultyContour(I) {
        const __result = this._overload.FaultyContour.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbComputedSurfaces(IC) {
        const __result = this._overload.NbComputedSurfaces.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ComputedSurface(IC, IS) {
        const __result = this._overload.ComputedSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_Surface({ __from: __result });
    }
    NbFaultyVertices() {
        const __result = this._overload.NbFaultyVertices.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FaultyVertex(IV) {
        const __result = this._overload.FaultyVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    HasResult() {
        const __result = this._overload.HasResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    BadShape() {
        const __result = this._overload.BadShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    StripeStatus(IC) {
        const __result = this._overload.StripeStatus.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new ChFiDS_ErrorStatus({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(E) {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        return __determine_method_overload(5, "Add", "", null, false).apply(this, arguments);
    }
    SetRadius(Radius, IC, IinC) {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        return __determine_method_overload(6, "SetRadius", "", null, false).apply(this, arguments);
    }
    IsConstant(IC) {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        return __determine_method_overload(2, "IsConstant", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Radius(IC) {
        const __oc = BRepFilletAPI_MakeFillet.prototype.getOC();
        return __determine_method_overload(2, "Radius", "Standard_Real", Number, true).apply(this, arguments);
    }
}
export class BRepGProp {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepGProp(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_SurfaceProperties_0() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "SurfaceProperties_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_SurfaceProperties_1() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "SurfaceProperties_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_VolumeProperties_0() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Boolean));
        return match ? "VolumeProperties_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_VolumeProperties_1() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Boolean));
        return match ? "VolumeProperties_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_VolumePropertiesGK_0() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (8 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Boolean) && _wrap_primitive_type(arguments[5]) instanceof (Boolean) && _wrap_primitive_type(arguments[6]) instanceof (Boolean) && _wrap_primitive_type(arguments[7]) instanceof (Boolean));
        return match ? "VolumePropertiesGK_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_VolumePropertiesGK_1() {
        const __oc = BRepGProp.prototype.getOC();
        const match = (9 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (GProp_GProps) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Boolean) && _wrap_primitive_type(arguments[5]) instanceof (Boolean) && _wrap_primitive_type(arguments[6]) instanceof (Boolean) && _wrap_primitive_type(arguments[7]) instanceof (Boolean) && _wrap_primitive_type(arguments[8]) instanceof (Boolean));
        return match ? "VolumePropertiesGK_2" : 0;
    }
    static LinearProperties(S, LProps, SkipShared, UseTriangulation) {
        const __oc = BRepGProp.prototype.getOC();
        const __result = __oc.BRepGProp.LinearProperties.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static SurfaceProperties(S, SProps, SkipShared, UseTriangulation) {
        const __oc = BRepGProp.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepGProp, "BRepGProp", 2, "SurfaceProperties", "", null, false).apply(this, arguments);
    }
    static VolumeProperties(S, VProps, OnlyClosed, SkipShared, UseTriangulation) {
        const __oc = BRepGProp.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepGProp, "BRepGProp", 2, "VolumeProperties", "", null, false).apply(this, arguments);
    }
    static VolumePropertiesGK(S, VProps, Eps, OnlyClosed, IsUseSpan, CGFlag, IFlag, SkipShared) {
        const __oc = BRepGProp.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepGProp, "BRepGProp", 2, "VolumePropertiesGK", "Standard_Real", Number, true).apply(this, arguments);
    }
}
export class BRepLib_MakeFace {
    constructor() {
        __determine_ctor_overload("BRepLib_MakeFace", 22).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_0() {
        const match = arguments.length === 0;
        return match ? "BRepLib_MakeFace_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "BRepLib_MakeFace_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln));
        return match ? "BRepLib_MakeFace_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder));
        return match ? "BRepLib_MakeFace_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_4() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone));
        return match ? "BRepLib_MakeFace_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere));
        return match ? "BRepLib_MakeFace_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_6() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus));
        return match ? "BRepLib_MakeFace_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_7() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepLib_MakeFace_8" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_8() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepLib_MakeFace_9" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_9() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepLib_MakeFace_10" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_10() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepLib_MakeFace_11" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_11() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepLib_MakeFace_12" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_12() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepLib_MakeFace_13" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_13() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "BRepLib_MakeFace_14" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_14() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_15" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_15() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_16" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_16() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_17" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_17() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_18" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_18() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_19" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_19() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_20" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_20() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepLib_MakeFace_21" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepLib_MakeFace_21() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire));
        return match ? "BRepLib_MakeFace_22" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = BRepLib_MakeFace.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = BRepLib_MakeFace.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_2() {
        const __oc = BRepLib_MakeFace.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Init_3" : 0;
    }
    Add(W) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Error() {
        const __result = this._overload.Error.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepLib_FaceError({ __from: __result });
    }
    Face() {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    static IsDegenerated(theCurve, theMaxTol, theActTol) {
        const __oc = BRepLib_MakeFace.prototype.getOC();
        const __result = __oc.BRepLib_MakeFace.IsDegenerated.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(F) {
        const __oc = BRepLib_MakeFace.prototype.getOC();
        return __determine_method_overload(3, "Init", "", null, false).apply(this, arguments);
    }
}
export class BRepMesh_IncrementalMesh {
    constructor() {
        __determine_ctor_overload("BRepMesh_IncrementalMesh", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepMesh_IncrementalMesh_0() {
        const match = arguments.length === 0;
        return match ? "BRepMesh_IncrementalMesh_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepMesh_IncrementalMesh_1() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Boolean));
        return match ? "BRepMesh_IncrementalMesh_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepMesh_IncrementalMesh_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (IMeshTools_Parameters) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "BRepMesh_IncrementalMesh_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_0() {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Message_ProgressRange));
        return match ? "Perform_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_1() {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (any) && _wrap_primitive_type(arguments[1]) instanceof (Message_ProgressRange));
        return match ? "Perform_2" : 0;
    }
    Parameters() {
        const __result = this._overload.Parameters.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new IMeshTools_Parameters({ __from: __result });
    }
    ChangeParameters() {
        const __result = this._overload.ChangeParameters.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new IMeshTools_Parameters({ __from: __result });
    }
    IsModified() {
        const __result = this._overload.IsModified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetStatusFlags() {
        const __result = this._overload.GetStatusFlags.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Discret(theShape, theLinDeflection, theAngDeflection, theAlgo) {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const __result = __oc.BRepMesh_IncrementalMesh.Discret.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsParallelDefault() {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const __result = __oc.BRepMesh_IncrementalMesh.IsParallelDefault.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SetParallelDefault(isInParallel) {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const __result = __oc.BRepMesh_IncrementalMesh.SetParallelDefault.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static get_type_name() {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const __result = __oc.BRepMesh_IncrementalMesh.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        const __result = __oc.BRepMesh_IncrementalMesh.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(theRange) {
        const __oc = BRepMesh_IncrementalMesh.prototype.getOC();
        return __determine_method_overload(2, "Perform", "", null, false).apply(this, arguments);
    }
}
export class BRepOffsetAPI_DraftAngle {
    constructor() {
        __determine_ctor_overload("BRepOffsetAPI_DraftAngle", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepOffsetAPI_DraftAngle_0() {
        const match = arguments.length === 0;
        return match ? "BRepOffsetAPI_DraftAngle_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepOffsetAPI_DraftAngle_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "BRepOffsetAPI_DraftAngle_2" : 0;
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(S) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(F, Direction, Angle, NeutralPlane, Flag) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddDone() {
        const __result = this._overload.AddDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Remove(F) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ProblematicShape() {
        const __result = this._overload.ProblematicShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Status() {
        const __result = this._overload.Status.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Draft_ErrorStatus({ __from: __result });
    }
    ConnectedFaces(F) {
        const __result = this._overload.ConnectedFaces.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    ModifiedFaces() {
        const __result = this._overload.ModifiedFaces.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    CorrectWires() {
        const __result = this._overload.CorrectWires.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Modified(S) {
        const __result = this._overload.Modified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    ModifiedShape(S) {
        const __result = this._overload.ModifiedShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepOffsetAPI_MakeOffset {
    constructor() {
        __determine_ctor_overload("BRepOffsetAPI_MakeOffset", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepOffsetAPI_MakeOffset_0() {
        const match = arguments.length === 0;
        return match ? "BRepOffsetAPI_MakeOffset_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepOffsetAPI_MakeOffset_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (__oc.GeomAbs_JoinType) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepOffsetAPI_MakeOffset_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepOffsetAPI_MakeOffset_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (__oc.GeomAbs_JoinType) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepOffsetAPI_MakeOffset_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = BRepOffsetAPI_MakeOffset.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (__oc.GeomAbs_JoinType) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = BRepOffsetAPI_MakeOffset.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (__oc.GeomAbs_JoinType) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "Init_2" : 0;
    }
    AddWire(Spine) {
        const __result = this._overload.AddWire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(Offset, Alt) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(Spine, Join, IsOpenResult) {
        const __oc = BRepOffsetAPI_MakeOffset.prototype.getOC();
        return __determine_method_overload(2, "Init", "", null, false).apply(this, arguments);
    }
}
export class BRepOffsetAPI_MakeThickSolid {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepOffsetAPI_MakeThickSolid(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    MakeThickSolidBySimple(theS, theOffsetValue) {
        const __result = this._overload.MakeThickSolidBySimple.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    MakeThickSolidByJoin(S, ClosingFaces, Offset, Tol, Mode, Intersection, SelfInter, Join, RemoveIntEdges, theRange) {
        const __result = this._overload.MakeThickSolidByJoin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Modified(S) {
        const __result = this._overload.Modified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepOffsetAPI_ThruSections {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepOffsetAPI_ThruSections(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    Init(isSolid, ruled, pres3d) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddWire(wire) {
        const __result = this._overload.AddWire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddVertex(aVertex) {
        const __result = this._overload.AddVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    CheckCompatibility(check) {
        const __result = this._overload.CheckCompatibility.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetSmoothing(UseSmoothing) {
        const __result = this._overload.SetSmoothing.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetParType(ParType) {
        const __result = this._overload.SetParType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetContinuity(C) {
        const __result = this._overload.SetContinuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetCriteriumWeight(W1, W2, W3) {
        const __result = this._overload.SetCriteriumWeight.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxDegree(MaxDeg) {
        const __result = this._overload.SetMaxDegree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ParType() {
        const __result = this._overload.ParType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Approx_ParametrizationType({ __from: __result });
    }
    Continuity() {
        const __result = this._overload.Continuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    MaxDegree() {
        const __result = this._overload.MaxDegree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    UseSmoothing() {
        const __result = this._overload.UseSmoothing.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CriteriumWeight(W1, W2, W3) {
        const __result = this._overload.CriteriumWeight.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FirstShape() {
        const __result = this._overload.FirstShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    LastShape() {
        const __result = this._overload.LastShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    GeneratedFace(Edge) {
        const __result = this._overload.GeneratedFace.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Wires() {
        const __result = this._overload.Wires.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepPrimAPI_MakeCylinder {
    constructor() {
        __determine_ctor_overload("BRepPrimAPI_MakeCylinder", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeCylinder_0() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeCylinder_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeCylinder_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeCylinder_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeCylinder_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeCylinder_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeCylinder_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeCylinder_4" : 0;
    }
    OneAxis() {
        const __result = this._overload.OneAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Standard_Address({ __from: __result });
    }
    Cylinder() {
        const __result = this._overload.Cylinder.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepPrim_Cylinder({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepPrimAPI_MakePrism {
    constructor() {
        __determine_ctor_overload("BRepPrimAPI_MakePrism", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakePrism_0() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "BRepPrimAPI_MakePrism_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakePrism_1() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (Boolean));
        return match ? "BRepPrimAPI_MakePrism_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FirstShape_0() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "FirstShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FirstShape_1() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "FirstShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_LastShape_0() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "LastShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_LastShape_1() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "LastShape_2" : 0;
    }
    Prism() {
        const __result = this._overload.Prism.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepSweep_Prism({ __from: __result });
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    IsDeleted(S) {
        const __result = this._overload.IsDeleted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FirstShape() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        return __determine_method_overload(2, "FirstShape", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
    LastShape() {
        const __oc = BRepPrimAPI_MakePrism.prototype.getOC();
        return __determine_method_overload(2, "LastShape", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
}
export class BRepPrimAPI_MakeRevol {
    constructor() {
        __determine_ctor_overload("BRepPrimAPI_MakeRevol", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeRevol_0() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "BRepPrimAPI_MakeRevol_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeRevol_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "BRepPrimAPI_MakeRevol_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FirstShape_0() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "FirstShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FirstShape_1() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "FirstShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_LastShape_0() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "LastShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_LastShape_1() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "LastShape_2" : 0;
    }
    Revol() {
        const __result = this._overload.Revol.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepSweep_Revol({ __from: __result });
    }
    Build(theRange) {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Generated(S) {
        const __result = this._overload.Generated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    IsDeleted(S) {
        const __result = this._overload.IsDeleted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HasDegenerated() {
        const __result = this._overload.HasDegenerated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Degenerated() {
        const __result = this._overload.Degenerated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FirstShape() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        return __determine_method_overload(2, "FirstShape", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
    LastShape() {
        const __oc = BRepPrimAPI_MakeRevol.prototype.getOC();
        return __determine_method_overload(2, "LastShape", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
}
export class BRepPrimAPI_MakeSphere {
    constructor() {
        __determine_ctor_overload("BRepPrimAPI_MakeSphere", 12).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_0() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_4() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_5() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_6() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_7() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_8" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_8() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_9" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_9() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_10" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_10() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_11" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepPrimAPI_MakeSphere_11() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "BRepPrimAPI_MakeSphere_12" : 0;
    }
    OneAxis() {
        const __result = this._overload.OneAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Standard_Address({ __from: __result });
    }
    Sphere() {
        const __result = this._overload.Sphere.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new BRepPrim_Sphere({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class BRepTools {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.BRepTools(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_UVBounds_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "UVBounds_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_UVBounds_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "UVBounds_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_UVBounds_2() {
        const __oc = BRepTools.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "UVBounds_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_AddUVBounds_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Bnd_Box2d));
        return match ? "AddUVBounds_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_AddUVBounds_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[2]) instanceof (Bnd_Box2d));
        return match ? "AddUVBounds_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_AddUVBounds_2() {
        const __oc = BRepTools.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (Bnd_Box2d));
        return match ? "AddUVBounds_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex));
        return match ? "Update_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "Update_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_2() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "Update_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_3() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Update_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_4() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shell));
        return match ? "Update_5" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_5() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Solid));
        return match ? "Update_6" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_6() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_CompSolid));
        return match ? "Update_7" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_7() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Compound));
        return match ? "Update_8" : 0;
    }
    /** @internal */
    static __determine_method_overload_Update_8() {
        const __oc = BRepTools.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Update_9" : 0;
    }
    /** @internal */
    static __determine_method_overload_Compare_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex));
        return match ? "Compare_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Compare_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "Compare_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Write_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Write_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Write_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (TopTools_FormatVersion) && _wrap_primitive_type(arguments[5]) instanceof (Message_ProgressRange));
        return match ? "Write_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Write_2() {
        const __oc = BRepTools.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (String) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Write_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Write_3() {
        const __oc = BRepTools.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (String) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean) && _wrap_primitive_type(arguments[4]) instanceof (TopTools_FormatVersion) && _wrap_primitive_type(arguments[5]) instanceof (Message_ProgressRange));
        return match ? "Write_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_Read_0() {
        const __oc = BRepTools.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[2]) instanceof (BRep_Builder) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Read_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Read_1() {
        const __oc = BRepTools.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (String) && _wrap_primitive_type(arguments[2]) instanceof (BRep_Builder) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Read_2" : 0;
    }
    static UpdateFaceUVPoints(theF) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.UpdateFaceUVPoints.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static Clean(theShape, theForce) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.Clean.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static CleanGeometry(theShape) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.CleanGeometry.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static RemoveUnusedPCurves(S) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.RemoveUnusedPCurves.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static Triangulation(theShape, theLinDefl, theToCheckFreeEdges) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.Triangulation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static LoadTriangulation(theShape, theTriangulationIdx, theToSetAsActive, theFileSystem) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.LoadTriangulation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static UnloadTriangulation(theShape, theTriangulationIdx) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.UnloadTriangulation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ActivateTriangulation(theShape, theTriangulationIdx, theToActivateStrictly) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.ActivateTriangulation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static LoadAllTriangulations(theShape, theFileSystem) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.LoadAllTriangulations.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static UnloadAllTriangulations(theShape) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.UnloadAllTriangulations.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static OuterWire(F) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.OuterWire.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    static Map3DEdges(S, M) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.Map3DEdges.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static IsReallyClosed(E, F) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.IsReallyClosed.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static DetectClosedness(theFace, theUclosed, theVclosed) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.DetectClosedness.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static Dump(Sh, S) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.Dump.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static EvalAndUpdateTol(theE, theC3d, theC2d, theS, theF, theL) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.EvalAndUpdateTol.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static OriEdgeInFace(theEdge, theFace) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.OriEdgeInFace.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static RemoveInternals(theS, theForce) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.RemoveInternals.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static CheckLocations(theS, theProblemShapes) {
        const __oc = BRepTools.prototype.getOC();
        const __result = __oc.BRepTools.CheckLocations.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static UVBounds(F, UMin, UMax, VMin, VMax) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 3, "UVBounds", "", null, false).apply(this, arguments);
    }
    static AddUVBounds(F, B) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 3, "AddUVBounds", "", null, false).apply(this, arguments);
    }
    static Update(V) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 9, "Update", "", null, false).apply(this, arguments);
    }
    static Compare(V1, V2) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 2, "Compare", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static Write(theShape, theStream, theProgress) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 4, "Write", "", null, false).apply(this, arguments);
    }
    static Read(Sh, S, B, theProgress) {
        const __oc = BRepTools.prototype.getOC();
        return __determine_method_overload_static(__oc, BRepTools, "BRepTools", 2, "Read", "", null, false).apply(this, arguments);
    }
}
export class BRepTools_WireExplorer {
    constructor() {
        __determine_ctor_overload("BRepTools_WireExplorer", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_BRepTools_WireExplorer_0() {
        const match = arguments.length === 0;
        return match ? "BRepTools_WireExplorer_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepTools_WireExplorer_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "BRepTools_WireExplorer_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_BRepTools_WireExplorer_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "BRepTools_WireExplorer_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = BRepTools_WireExplorer.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = BRepTools_WireExplorer.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_2() {
        const __oc = BRepTools_WireExplorer.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Init_3" : 0;
    }
    More() {
        const __result = this._overload.More.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Next() {
        const __result = this._overload.Next.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Current() {
        const __result = this._overload.Current.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Orientation() {
        const __result = this._overload.Orientation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CurrentVertex() {
        const __result = this._overload.CurrentVertex.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(W) {
        const __oc = BRepTools_WireExplorer.prototype.getOC();
        return __determine_method_overload(3, "Init", "", null, false).apply(this, arguments);
    }
}
export class Bnd_Box {
    constructor() {
        __determine_ctor_overload("Bnd_Box", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Bnd_Box_0() {
        const match = arguments.length === 0;
        return match ? "Bnd_Box_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Bnd_Box_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Bnd_Box_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Set_0() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Set_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Set_1() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "Set_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Update_0() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "Update_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Update_1() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Update_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_0() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Bnd_Box));
        return match ? "Add_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_1() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Add_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_2() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "Add_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_3() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Dir));
        return match ? "Add_4" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_0() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "IsOut_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_1() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "IsOut_2" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_2() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln));
        return match ? "IsOut_3" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_3() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Bnd_Box));
        return match ? "IsOut_4" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_4() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Bnd_Box) && _wrap_primitive_type(arguments[1]) instanceof (gp_Trsf));
        return match ? "IsOut_5" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_5() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Trsf) && _wrap_primitive_type(arguments[1]) instanceof (Bnd_Box) && _wrap_primitive_type(arguments[2]) instanceof (gp_Trsf));
        return match ? "IsOut_6" : 0;
    }
    /** @internal */
    __determine_method_overload_IsOut_6() {
        const __oc = Bnd_Box.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Dir));
        return match ? "IsOut_7" : 0;
    }
    SetWhole() {
        const __result = this._overload.SetWhole.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetVoid() {
        const __result = this._overload.SetVoid.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetGap() {
        const __result = this._overload.GetGap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetGap(Tol) {
        const __result = this._overload.SetGap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Enlarge(Tol) {
        const __result = this._overload.Enlarge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Get(theXmin, theYmin, theZmin, theXmax, theYmax, theZmax) {
        const __result = this._overload.Get.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    CornerMin() {
        const __result = this._overload.CornerMin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    CornerMax() {
        const __result = this._overload.CornerMax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    OpenXmin() {
        const __result = this._overload.OpenXmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OpenXmax() {
        const __result = this._overload.OpenXmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OpenYmin() {
        const __result = this._overload.OpenYmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OpenYmax() {
        const __result = this._overload.OpenYmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OpenZmin() {
        const __result = this._overload.OpenZmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OpenZmax() {
        const __result = this._overload.OpenZmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsOpen() {
        const __result = this._overload.IsOpen.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenXmin() {
        const __result = this._overload.IsOpenXmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenXmax() {
        const __result = this._overload.IsOpenXmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenYmin() {
        const __result = this._overload.IsOpenYmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenYmax() {
        const __result = this._overload.IsOpenYmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenZmin() {
        const __result = this._overload.IsOpenZmin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpenZmax() {
        const __result = this._overload.IsOpenZmax.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsWhole() {
        const __result = this._overload.IsWhole.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsVoid() {
        const __result = this._overload.IsVoid.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsXThin(tol) {
        const __result = this._overload.IsXThin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsYThin(tol) {
        const __result = this._overload.IsYThin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsZThin(tol) {
        const __result = this._overload.IsZThin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsThin(tol) {
        const __result = this._overload.IsThin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Transformed(T) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Bnd_Box({ __from: __result });
    }
    Distance(Other) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Dump() {
        const __result = this._overload.Dump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SquareExtent() {
        const __result = this._overload.SquareExtent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FinitePart() {
        const __result = this._overload.FinitePart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Bnd_Box({ __from: __result });
    }
    HasFinitePart() {
        const __result = this._overload.HasFinitePart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Set(P) {
        const __oc = Bnd_Box.prototype.getOC();
        return __determine_method_overload(2, "Set", "", null, false).apply(this, arguments);
    }
    Update(aXmin, aYmin, aZmin, aXmax, aYmax, aZmax) {
        const __oc = Bnd_Box.prototype.getOC();
        return __determine_method_overload(2, "Update", "", null, false).apply(this, arguments);
    }
    Add(Other) {
        const __oc = Bnd_Box.prototype.getOC();
        return __determine_method_overload(4, "Add", "", null, false).apply(this, arguments);
    }
    IsOut(P) {
        const __oc = Bnd_Box.prototype.getOC();
        return __determine_method_overload(7, "IsOut", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class ChFi2d_FilletAPI {
    constructor() {
        __determine_ctor_overload("ChFi2d_FilletAPI", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ChFi2d_FilletAPI_0() {
        const match = arguments.length === 0;
        return match ? "ChFi2d_FilletAPI_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ChFi2d_FilletAPI_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pln));
        return match ? "ChFi2d_FilletAPI_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ChFi2d_FilletAPI_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pln));
        return match ? "ChFi2d_FilletAPI_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = ChFi2d_FilletAPI.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pln));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = ChFi2d_FilletAPI.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pln));
        return match ? "Init_2" : 0;
    }
    Perform(theRadius) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbResults(thePoint) {
        const __result = this._overload.NbResults.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Result(thePoint, theEdge1, theEdge2, iSolution) {
        const __result = this._overload.Result.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(theWire, thePlane) {
        const __oc = ChFi2d_FilletAPI.prototype.getOC();
        return __determine_method_overload(2, "Init", "", null, false).apply(this, arguments);
    }
}
export class GC_MakeArcOfCircle {
    constructor() {
        __determine_ctor_overload("GC_MakeArcOfCircle", 5).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeArcOfCircle_0() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "GC_MakeArcOfCircle_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeArcOfCircle_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "GC_MakeArcOfCircle_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeArcOfCircle_2() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "GC_MakeArcOfCircle_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeArcOfCircle_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "GC_MakeArcOfCircle_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeArcOfCircle_4() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "GC_MakeArcOfCircle_5" : 0;
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_TrimmedCurve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GC_MakeCircle {
    constructor() {
        __determine_ctor_overload("GC_MakeCircle", 8).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_0() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ));
        return match ? "GC_MakeCircle_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GC_MakeCircle_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GC_MakeCircle_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_3() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "GC_MakeCircle_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_4() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "GC_MakeCircle_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_5() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GC_MakeCircle_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_6() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GC_MakeCircle_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeCircle_7() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GC_MakeCircle_8" : 0;
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_Circle({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GC_MakeSegment {
    constructor() {
        __determine_ctor_overload("GC_MakeSegment", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeSegment_0() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "GC_MakeSegment_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeSegment_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GC_MakeSegment_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeSegment_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GC_MakeSegment_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GC_MakeSegment_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "GC_MakeSegment_4" : 0;
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_TrimmedCurve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GProp_GProps {
    constructor() {
        __determine_ctor_overload("GProp_GProps", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GProp_GProps_0() {
        const match = arguments.length === 0;
        return match ? "GProp_GProps_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GProp_GProps_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "GProp_GProps_2" : 0;
    }
    Add(Item, Density) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Mass() {
        const __result = this._overload.Mass.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CentreOfMass() {
        const __result = this._overload.CentreOfMass.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    MatrixOfInertia() {
        const __result = this._overload.MatrixOfInertia.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Mat({ __from: __result });
    }
    StaticMoments(Ix, Iy, Iz) {
        const __result = this._overload.StaticMoments.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    MomentOfInertia(A) {
        const __result = this._overload.MomentOfInertia.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    PrincipalProperties() {
        const __result = this._overload.PrincipalProperties.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GProp_PrincipalProps({ __from: __result });
    }
    RadiusOfGyration(A) {
        const __result = this._overload.RadiusOfGyration.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GccAna_Circ2d2TanRad {
    constructor() {
        __determine_ctor_overload("GccAna_Circ2d2TanRad", 6).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_0() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[1]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[1]) instanceof (GccEnt_QualifiedLin) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_2() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedLin) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_4() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedLin) && _wrap_primitive_type(arguments[1]) instanceof (GccEnt_QualifiedLin) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Circ2d2TanRad_5() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "GccAna_Circ2d2TanRad_6" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSolutions() {
        const __result = this._overload.NbSolutions.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ThisSolution(Index) {
        const __result = this._overload.ThisSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    WhichQualifier(Index, Qualif1, Qualif2) {
        const __result = this._overload.WhichQualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency1(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency2(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsTheSame1(Index) {
        const __result = this._overload.IsTheSame1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsTheSame2(Index) {
        const __result = this._overload.IsTheSame2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GccAna_Lin2d2Tan {
    constructor() {
        __determine_ctor_overload("GccAna_Lin2d2Tan", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Lin2d2Tan_0() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GccAna_Lin2d2Tan_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Lin2d2Tan_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GccAna_Lin2d2Tan_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GccAna_Lin2d2Tan_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[1]) instanceof (GccEnt_QualifiedCirc) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GccAna_Lin2d2Tan_3" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSolutions() {
        const __result = this._overload.NbSolutions.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ThisSolution(Index) {
        const __result = this._overload.ThisSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    WhichQualifier(Index, Qualif1, Qualif2) {
        const __result = this._overload.WhichQualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency1(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency2(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GccEnt_QualifiedCirc {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.GccEnt_QualifiedCirc(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    Qualified() {
        const __result = this._overload.Qualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    Qualifier() {
        const __result = this._overload.Qualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsUnqualified() {
        const __result = this._overload.IsUnqualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEnclosing() {
        const __result = this._overload.IsEnclosing.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEnclosed() {
        const __result = this._overload.IsEnclosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOutside() {
        const __result = this._overload.IsOutside.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GccEnt_QualifiedLin {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.GccEnt_QualifiedLin(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    Qualified() {
        const __result = this._overload.Qualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    Qualifier() {
        const __result = this._overload.Qualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsUnqualified() {
        const __result = this._overload.IsUnqualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEnclosed() {
        const __result = this._overload.IsEnclosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOutside() {
        const __result = this._overload.IsOutside.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Handle_Geom_Curve {
    constructor() {
        __determine_ctor_overload("Handle_Geom_Curve", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom_Curve_0() {
        const match = arguments.length === 0;
        return match ? "Handle_Geom_Curve_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom_Curve_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom_Curve));
        return match ? "Handle_Geom_Curve_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom_Curve_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve));
        return match ? "Handle_Geom_Curve_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom_Curve_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Curve));
        return match ? "Handle_Geom_Curve_4" : 0;
    }
    Nullify() {
        const __result = this._overload.Nullify.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsNull() {
        const __result = this._overload.IsNull.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    reset(thePtr) {
        const __result = this._overload.reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    get() {
        const __result = this._overload.get.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Geom_Curve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Geom2d_CartesianPoint {
    constructor() {
        __determine_ctor_overload("Geom2d_CartesianPoint", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Geom2d_CartesianPoint_0() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Geom2d_CartesianPoint_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2d_CartesianPoint_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Geom2d_CartesianPoint_2" : 0;
    }
    SetCoord(X, Y) {
        const __result = this._overload.SetCoord.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPnt2d(P) {
        const __result = this._overload.SetPnt2d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetX(X) {
        const __result = this._overload.SetX.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetY(Y) {
        const __result = this._overload.SetY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Coord(X, Y) {
        const __result = this._overload.Coord.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Pnt2d() {
        const __result = this._overload.Pnt2d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Transform(T) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Copy() {
        const __result = this._overload.Copy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_Geometry({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static get_type_name() {
        const __oc = Geom2d_CartesianPoint.prototype.getOC();
        const __result = __oc.Geom2d_CartesianPoint.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = Geom2d_CartesianPoint.prototype.getOC();
        const __result = __oc.Geom2d_CartesianPoint.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Handle_Geom2d_Point {
    constructor() {
        __determine_ctor_overload("Handle_Geom2d_Point", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom2d_Point_0() {
        const match = arguments.length === 0;
        return match ? "Handle_Geom2d_Point_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom2d_Point_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2d_Point));
        return match ? "Handle_Geom2d_Point_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom2d_Point_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Point));
        return match ? "Handle_Geom2d_Point_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_Geom2d_Point_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Point));
        return match ? "Handle_Geom2d_Point_4" : 0;
    }
    Nullify() {
        const __result = this._overload.Nullify.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsNull() {
        const __result = this._overload.IsNull.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    reset(thePtr) {
        const __result = this._overload.reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    get() {
        const __result = this._overload.get.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Geom2d_Point({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Geom2dAdaptor_Curve {
    constructor() {
        __determine_ctor_overload("Geom2dAdaptor_Curve", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dAdaptor_Curve_0() {
        const match = arguments.length === 0;
        return match ? "Geom2dAdaptor_Curve_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dAdaptor_Curve_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve));
        return match ? "Geom2dAdaptor_Curve_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dAdaptor_Curve_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Geom2dAdaptor_Curve_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Load_0() {
        const __oc = Geom2dAdaptor_Curve.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve));
        return match ? "Load_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Load_1() {
        const __oc = Geom2dAdaptor_Curve.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Load_2" : 0;
    }
    static get_type_name() {
        const __oc = Geom2dAdaptor_Curve.prototype.getOC();
        const __result = __oc.Geom2dAdaptor_Curve.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = Geom2dAdaptor_Curve.prototype.getOC();
        const __result = __oc.Geom2dAdaptor_Curve.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    ShallowCopy() {
        const __result = this._overload.ShallowCopy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor2d_Curve2d({ __from: __result });
    }
    Reset() {
        const __result = this._overload.Reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Curve() {
        const __result = this._overload.Curve.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_Curve({ __from: __result });
    }
    FirstParameter() {
        const __result = this._overload.FirstParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastParameter() {
        const __result = this._overload.LastParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Continuity() {
        const __result = this._overload.Continuity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new GeomAbs_Shape({ __from: __result });
    }
    NbIntervals(S) {
        const __result = this._overload.NbIntervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Intervals(T, S) {
        const __result = this._overload.Intervals.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Trim(First, Last, Tol) {
        const __result = this._overload.Trim.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Adaptor2d_Curve2d({ __from: __result });
    }
    IsClosed() {
        const __result = this._overload.IsClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsPeriodic() {
        const __result = this._overload.IsPeriodic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Period() {
        const __result = this._overload.Period.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Value(U) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    D0(U, P) {
        const __result = this._overload.D0.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D1(U, P, V) {
        const __result = this._overload.D1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D2(U, P, V1, V2) {
        const __result = this._overload.D2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    D3(U, P, V1, V2, V3) {
        const __result = this._overload.D3.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DN(U, N) {
        const __result = this._overload.DN.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec2d({ __from: __result });
    }
    Resolution(Ruv) {
        const __result = this._overload.Resolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetType() {
        const __result = this._overload.GetType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Line() {
        const __result = this._overload.Line.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    Circle() {
        const __result = this._overload.Circle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    Ellipse() {
        const __result = this._overload.Ellipse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Elips2d({ __from: __result });
    }
    Hyperbola() {
        const __result = this._overload.Hyperbola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Hypr2d({ __from: __result });
    }
    Parabola() {
        const __result = this._overload.Parabola.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Parab2d({ __from: __result });
    }
    Degree() {
        const __result = this._overload.Degree.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsRational() {
        const __result = this._overload.IsRational.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbPoles() {
        const __result = this._overload.NbPoles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbKnots() {
        const __result = this._overload.NbKnots.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSamples() {
        const __result = this._overload.NbSamples.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Bezier() {
        const __result = this._overload.Bezier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_BezierCurve({ __from: __result });
    }
    BSpline() {
        const __result = this._overload.BSpline.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_BSplineCurve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Load(theCurve) {
        const __oc = Geom2dAdaptor_Curve.prototype.getOC();
        return __determine_method_overload(2, "Load", "", null, false).apply(this, arguments);
    }
}
export class Geom2dGcc_Circ2d2TanRad {
    constructor() {
        __determine_ctor_overload("Geom2dGcc_Circ2d2TanRad", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Circ2d2TanRad_0() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Geom2dGcc_Circ2d2TanRad_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Circ2d2TanRad_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Point) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Geom2dGcc_Circ2d2TanRad_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Circ2d2TanRad_2() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom2d_Point) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Geom2d_Point) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Geom2dGcc_Circ2d2TanRad_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Results_0() {
        const __oc = Geom2dGcc_Circ2d2TanRad.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (GccAna_Circ2d2TanRad));
        return match ? "Results_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Results_1() {
        const __oc = Geom2dGcc_Circ2d2TanRad.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_Circ2d2TanRadGeo));
        return match ? "Results_2" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSolutions() {
        const __result = this._overload.NbSolutions.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ThisSolution(Index) {
        const __result = this._overload.ThisSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    WhichQualifier(Index, Qualif1, Qualif2) {
        const __result = this._overload.WhichQualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency1(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency2(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsTheSame1(Index) {
        const __result = this._overload.IsTheSame1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsTheSame2(Index) {
        const __result = this._overload.IsTheSame2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Results(Circ) {
        const __oc = Geom2dGcc_Circ2d2TanRad.prototype.getOC();
        return __determine_method_overload(2, "Results", "", null, false).apply(this, arguments);
    }
}
export class Geom2dGcc_Lin2d2Tan {
    constructor() {
        __determine_ctor_overload("Geom2dGcc_Lin2d2Tan", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Lin2d2Tan_0() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Geom2dGcc_Lin2d2Tan_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Lin2d2Tan_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Geom2dGcc_Lin2d2Tan_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Lin2d2Tan_2() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "Geom2dGcc_Lin2d2Tan_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Geom2dGcc_Lin2d2Tan_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Geom2dGcc_QualifiedCurve) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Geom2dGcc_Lin2d2Tan_4" : 0;
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbSolutions() {
        const __result = this._overload.NbSolutions.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ThisSolution(Index) {
        const __result = this._overload.ThisSolution.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    WhichQualifier(Index, Qualif1, Qualif2) {
        const __result = this._overload.WhichQualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency1(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency1.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Tangency2(Index, ParSol, ParArg, PntSol) {
        const __result = this._overload.Tangency2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Geom2dGcc_QualifiedCurve {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.Geom2dGcc_QualifiedCurve(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    Qualified() {
        const __result = this._overload.Qualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Geom2dAdaptor_Curve({ __from: __result });
    }
    Qualifier() {
        const __result = this._overload.Qualifier.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsUnqualified() {
        const __result = this._overload.IsUnqualified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEnclosing() {
        const __result = this._overload.IsEnclosing.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEnclosed() {
        const __result = this._overload.IsEnclosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOutside() {
        const __result = this._overload.IsOutside.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GeomAPI {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.GeomAPI(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    static To2d(C, P) {
        const __oc = GeomAPI.prototype.getOC();
        const __result = __oc.GeomAPI.To2d.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom2d_Curve({ __from: __result });
    }
    static To3d(C, P) {
        const __oc = GeomAPI.prototype.getOC();
        const __result = __oc.GeomAPI.To3d.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Geom_Curve({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class GeomLProp_SLProps {
    constructor() {
        __determine_ctor_overload("GeomLProp_SLProps", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_GeomLProp_SLProps_0() {
        const __oc = this.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number) && _wrap_primitive_type(arguments[4]) instanceof (Number));
        return match ? "GeomLProp_SLProps_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GeomLProp_SLProps_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "GeomLProp_SLProps_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_GeomLProp_SLProps_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GeomLProp_SLProps_3" : 0;
    }
    SetSurface(S) {
        const __result = this._overload.SetSurface.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetParameters(U, V) {
        const __result = this._overload.SetParameters.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    D1U() {
        const __result = this._overload.D1U.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    D1V() {
        const __result = this._overload.D1V.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    D2U() {
        const __result = this._overload.D2U.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    D2V() {
        const __result = this._overload.D2V.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    DUV() {
        const __result = this._overload.DUV.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    IsTangentUDefined() {
        const __result = this._overload.IsTangentUDefined.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    TangentU(D) {
        const __result = this._overload.TangentU.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsTangentVDefined() {
        const __result = this._overload.IsTangentVDefined.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    TangentV(D) {
        const __result = this._overload.TangentV.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsNormalDefined() {
        const __result = this._overload.IsNormalDefined.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Normal() {
        const __result = this._overload.Normal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    IsCurvatureDefined() {
        const __result = this._overload.IsCurvatureDefined.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsUmbilic() {
        const __result = this._overload.IsUmbilic.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    MaxCurvature() {
        const __result = this._overload.MaxCurvature.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    MinCurvature() {
        const __result = this._overload.MinCurvature.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CurvatureDirections(MaxD, MinD) {
        const __result = this._overload.CurvatureDirections.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    MeanCurvature() {
        const __result = this._overload.MeanCurvature.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GaussianCurvature() {
        const __result = this._overload.GaussianCurvature.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class IntCurvesFace_ShapeIntersector {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.IntCurvesFace_ShapeIntersector(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_Perform_0() {
        const __oc = IntCurvesFace_ShapeIntersector.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Perform_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_1() {
        const __oc = IntCurvesFace_ShapeIntersector.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Adaptor3d_Curve) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Perform_2" : 0;
    }
    Load(Sh, Tol) {
        const __result = this._overload.Load.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    PerformNearest(L, PInf, PSup) {
        const __result = this._overload.PerformNearest.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbPnt() {
        const __result = this._overload.NbPnt.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    UParameter(I) {
        const __result = this._overload.UParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    VParameter(I) {
        const __result = this._overload.VParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    WParameter(I) {
        const __result = this._overload.WParameter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Pnt(I) {
        const __result = this._overload.Pnt.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Transition(I) {
        const __result = this._overload.Transition.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new IntCurveSurface_TransitionOnCurve({ __from: __result });
    }
    State(I) {
        const __result = this._overload.State.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Face(I) {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    SortResult() {
        const __result = this._overload.SortResult.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Destroy() {
        const __result = this._overload.Destroy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(L, PInf, PSup) {
        const __oc = IntCurvesFace_ShapeIntersector.prototype.getOC();
        return __determine_method_overload(2, "Perform", "", null, false).apply(this, arguments);
    }
}
export class IntTools_EdgeEdge {
    constructor() {
        __determine_ctor_overload("IntTools_EdgeEdge", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_IntTools_EdgeEdge_0() {
        const match = arguments.length === 0;
        return match ? "IntTools_EdgeEdge_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_IntTools_EdgeEdge_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Edge));
        return match ? "IntTools_EdgeEdge_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_IntTools_EdgeEdge_2() {
        const __oc = this.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (Number));
        return match ? "IntTools_EdgeEdge_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetEdge1_0() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "SetEdge1_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetEdge1_1() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetEdge1_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRange1_0() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (IntTools_Range));
        return match ? "SetRange1_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRange1_1() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetRange1_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetEdge2_0() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge));
        return match ? "SetEdge2_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetEdge2_1() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetEdge2_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRange2_0() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (IntTools_Range));
        return match ? "SetRange2_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRange2_1() {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetRange2_2" : 0;
    }
    SetFuzzyValue(theFuzz) {
        const __result = this._overload.SetFuzzyValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform() {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsDone() {
        const __result = this._overload.IsDone.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FuzzyValue() {
        const __result = this._overload.FuzzyValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CommonParts() {
        const __result = this._overload.CommonParts.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new IntTools_SequenceOfCommonPrts({ __from: __result });
    }
    UseQuickCoincidenceCheck(bFlag) {
        const __result = this._overload.UseQuickCoincidenceCheck.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsCoincidenceCheckedQuickly() {
        const __result = this._overload.IsCoincidenceCheckedQuickly.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetEdge1(theEdge) {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        return __determine_method_overload(2, "SetEdge1", "", null, false).apply(this, arguments);
    }
    SetRange1(theRange1) {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        return __determine_method_overload(2, "SetRange1", "", null, false).apply(this, arguments);
    }
    SetEdge2(theEdge) {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        return __determine_method_overload(2, "SetEdge2", "", null, false).apply(this, arguments);
    }
    SetRange2(theRange) {
        const __oc = IntTools_EdgeEdge.prototype.getOC();
        return __determine_method_overload(2, "SetRange2", "", null, false).apply(this, arguments);
    }
}
export class Message_ProgressRange {
    constructor() {
        __determine_ctor_overload("Message_ProgressRange", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Message_ProgressRange_0() {
        const match = arguments.length === 0;
        return match ? "Message_ProgressRange_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Message_ProgressRange_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Message_ProgressRange));
        return match ? "Message_ProgressRange_2" : 0;
    }
    UserBreak() {
        const __result = this._overload.UserBreak.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    More() {
        const __result = this._overload.More.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsActive() {
        const __result = this._overload.IsActive.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Close() {
        const __result = this._overload.Close.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Poly_Connect {
    constructor() {
        __determine_ctor_overload("Poly_Connect", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Poly_Connect_0() {
        const match = arguments.length === 0;
        return match ? "Poly_Connect_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Poly_Connect_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Poly_Triangulation));
        return match ? "Poly_Connect_2" : 0;
    }
    Load(theTriangulation) {
        const __result = this._overload.Load.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Triangulation() {
        const __result = this._overload.Triangulation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Poly_Triangulation({ __from: __result });
    }
    Triangle(N) {
        const __result = this._overload.Triangle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Triangles(T, t1, t2, t3) {
        const __result = this._overload.Triangles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Nodes(T, n1, n2, n3) {
        const __result = this._overload.Nodes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Initialize(N) {
        const __result = this._overload.Initialize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    More() {
        const __result = this._overload.More.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Next() {
        const __result = this._overload.Next.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class Precision {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.Precision(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_Parametric_0() {
        const __oc = Precision.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Parametric_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Parametric_1() {
        const __oc = Precision.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Parametric_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_PConfusion_0() {
        const __oc = Precision.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "PConfusion_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_PConfusion_1() {
        const __oc = Precision.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "PConfusion_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_PIntersection_0() {
        const __oc = Precision.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "PIntersection_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_PIntersection_1() {
        const __oc = Precision.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "PIntersection_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_PApproximation_0() {
        const __oc = Precision.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "PApproximation_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_PApproximation_1() {
        const __oc = Precision.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "PApproximation_2" : 0;
    }
    static Angular() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.Angular.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Confusion() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.Confusion.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SquareConfusion() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.SquareConfusion.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Intersection() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.Intersection.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Approximation() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.Approximation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SquarePConfusion() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.SquarePConfusion.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsInfinite(R) {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.IsInfinite.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsPositiveInfinite(R) {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.IsPositiveInfinite.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsNegativeInfinite(R) {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.IsNegativeInfinite.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Infinite() {
        const __oc = Precision.prototype.getOC();
        const __result = __oc.Precision.Infinite.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static Parametric(P, T) {
        const __oc = Precision.prototype.getOC();
        return __determine_method_overload_static(__oc, Precision, "Precision", 2, "Parametric", "Standard_Real", Number, true).apply(this, arguments);
    }
    static PConfusion(T) {
        const __oc = Precision.prototype.getOC();
        return __determine_method_overload_static(__oc, Precision, "Precision", 2, "PConfusion", "Standard_Real", Number, true).apply(this, arguments);
    }
    static PIntersection(T) {
        const __oc = Precision.prototype.getOC();
        return __determine_method_overload_static(__oc, Precision, "Precision", 2, "PIntersection", "Standard_Real", Number, true).apply(this, arguments);
    }
    static PApproximation(T) {
        const __oc = Precision.prototype.getOC();
        return __determine_method_overload_static(__oc, Precision, "Precision", 2, "PApproximation", "Standard_Real", Number, true).apply(this, arguments);
    }
}
export class ProjLib {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.ProjLib(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_Project_0() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Project_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_1() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Lin));
        return match ? "Project_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_2() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Circ));
        return match ? "Project_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_3() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Elips));
        return match ? "Project_4" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_4() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Parab));
        return match ? "Project_5" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_5() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln) && _wrap_primitive_type(arguments[1]) instanceof (gp_Hypr));
        return match ? "Project_6" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_6() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Project_7" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_7() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (gp_Lin));
        return match ? "Project_8" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_8() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (gp_Circ));
        return match ? "Project_9" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_9() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Project_10" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_10() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (gp_Lin));
        return match ? "Project_11" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_11() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cone) && _wrap_primitive_type(arguments[1]) instanceof (gp_Circ));
        return match ? "Project_12" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_12() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Project_13" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_13() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Sphere) && _wrap_primitive_type(arguments[1]) instanceof (gp_Circ));
        return match ? "Project_14" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_14() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Project_15" : 0;
    }
    /** @internal */
    static __determine_method_overload_Project_15() {
        const __oc = ProjLib.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Torus) && _wrap_primitive_type(arguments[1]) instanceof (gp_Circ));
        return match ? "Project_16" : 0;
    }
    static MakePCurveOfType(PC, aC) {
        const __oc = ProjLib.prototype.getOC();
        const __result = __oc.ProjLib.MakePCurveOfType.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static IsAnaSurf(theAS) {
        const __oc = ProjLib.prototype.getOC();
        const __result = __oc.ProjLib.IsAnaSurf.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static Project(Pl, P) {
        const __oc = ProjLib.prototype.getOC();
        return __determine_method_overload_static(__oc, ProjLib, "ProjLib", 16, "Project", "gp_Pnt2d", gp_Pnt2d, false).apply(this, arguments);
    }
}
export class Quantity_Color {
    constructor() {
        __determine_ctor_overload("Quantity_Color", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Quantity_Color_0() {
        const match = arguments.length === 0;
        return match ? "Quantity_Color_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Quantity_Color_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Quantity_NameOfColor));
        return match ? "Quantity_Color_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Quantity_Color_2() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (__oc.Quantity_TypeOfColor));
        return match ? "Quantity_Color_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Quantity_Color_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (NCollection_Vec3));
        return match ? "Quantity_Color_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Name_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Name_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Name_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Name_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetValues_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Quantity_NameOfColor));
        return match ? "SetValues_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetValues_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (__oc.Quantity_TypeOfColor));
        return match ? "SetValues_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_ColorFromName_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (Quantity_NameOfColor));
        return match ? "ColorFromName_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_ColorFromName_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (Quantity_Color));
        return match ? "ColorFromName_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_LinearRGB_To_sRGB_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_LinearRGB_To_sRGB_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_LinearRGB_To_sRGB_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_LinearRGB_To_sRGB_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_sRGB_To_LinearRGB_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_sRGB_To_LinearRGB_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_sRGB_To_LinearRGB_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_sRGB_To_LinearRGB_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_LinearRGB_To_sRGB_approx22_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_LinearRGB_To_sRGB_approx22_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_LinearRGB_To_sRGB_approx22_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (NCollection_Vec3));
        return match ? "Convert_LinearRGB_To_sRGB_approx22_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_sRGB_To_LinearRGB_approx22_0() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Convert_sRGB_To_LinearRGB_approx22_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Convert_sRGB_To_LinearRGB_approx22_1() {
        const __oc = Quantity_Color.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (NCollection_Vec3));
        return match ? "Convert_sRGB_To_LinearRGB_approx22_2" : 0;
    }
    Rgb() {
        const __result = this._overload.Rgb.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    Values(theC1, theC2, theC3, theType) {
        const __result = this._overload.Values.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Red() {
        const __result = this._overload.Red.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Green() {
        const __result = this._overload.Green.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Blue() {
        const __result = this._overload.Blue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Hue() {
        const __result = this._overload.Hue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Light() {
        const __result = this._overload.Light.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ChangeIntensity(theDelta) {
        const __result = this._overload.ChangeIntensity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Saturation() {
        const __result = this._overload.Saturation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ChangeContrast(theDelta) {
        const __result = this._overload.ChangeContrast.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsDifferent(theOther) {
        const __result = this._overload.IsDifferent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEqual(theOther) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Distance(theColor) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareDistance(theColor) {
        const __result = this._overload.SquareDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Delta(theColor, DC, DI) {
        const __result = this._overload.Delta.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DeltaE2000(theOther) {
        const __result = this._overload.DeltaE2000.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static StringName(theColor) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.StringName.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ColorFromHex(theHexColorString, theColor) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.ColorFromHex.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ColorToHex(theColor, theToPrefixHash) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.ColorToHex.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new XCAFDoc_PartId({ __from: __result });
    }
    static Convert_sRGB_To_HLS(theRgb) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_sRGB_To_HLS.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_HLS_To_sRGB(theHls) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_HLS_To_sRGB.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_LinearRGB_To_HLS(theRgb) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_LinearRGB_To_HLS.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_HLS_To_LinearRGB(theHls) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_HLS_To_LinearRGB.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_LinearRGB_To_Lab(theRgb) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_LinearRGB_To_Lab.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_Lab_To_Lch(theLab) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_Lab_To_Lch.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_Lab_To_LinearRGB(theLab) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_Lab_To_LinearRGB.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Convert_Lch_To_Lab(theLch) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Convert_Lch_To_Lab.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    static Color2argb(theColor, theARGB) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Color2argb.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static Argb2color(theARGB, theColor) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Argb2color.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static HlsRgb(theH, theL, theS, theR, theG, theB) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.HlsRgb.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static RgbHls(theR, theG, theB, theH, theL, theS) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.RgbHls.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static Epsilon() {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.Epsilon.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SetEpsilon(theEpsilon) {
        const __oc = Quantity_Color.prototype.getOC();
        const __result = __oc.Quantity_Color.SetEpsilon.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Name() {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload(2, "Name", "Quantity_NameOfColor", Quantity_NameOfColor, false).apply(this, arguments);
    }
    SetValues(theName) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload(2, "SetValues", "", null, false).apply(this, arguments);
    }
    static ColorFromName(theName, theColor) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload_static(__oc, Quantity_Color, "Quantity_Color", 2, "ColorFromName", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static Convert_LinearRGB_To_sRGB(theLinearValue) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload_static(__oc, Quantity_Color, "Quantity_Color", 2, "Convert_LinearRGB_To_sRGB", "Standard_Real", Number, true).apply(this, arguments);
    }
    static Convert_sRGB_To_LinearRGB(thesRGBValue) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload_static(__oc, Quantity_Color, "Quantity_Color", 2, "Convert_sRGB_To_LinearRGB", "Standard_Real", Number, true).apply(this, arguments);
    }
    static Convert_LinearRGB_To_sRGB_approx22(theLinearValue) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload_static(__oc, Quantity_Color, "Quantity_Color", 2, "Convert_LinearRGB_To_sRGB_approx22", "Standard_ShortReal", Number, true).apply(this, arguments);
    }
    static Convert_sRGB_To_LinearRGB_approx22(thesRGBValue) {
        const __oc = Quantity_Color.prototype.getOC();
        return __determine_method_overload_static(__oc, Quantity_Color, "Quantity_Color", 2, "Convert_sRGB_To_LinearRGB_approx22", "Standard_ShortReal", Number, true).apply(this, arguments);
    }
}
export class STEPCAFControl_Reader {
    constructor() {
        __determine_ctor_overload("STEPCAFControl_Reader", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_STEPCAFControl_Reader_0() {
        const match = arguments.length === 0;
        return match ? "STEPCAFControl_Reader_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_STEPCAFControl_Reader_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_XSControl_WorkSession) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "STEPCAFControl_Reader_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfer_0() {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Message_ProgressRange));
        return match ? "Transfer_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_0() {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (XCAFDoc_PartId) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Perform_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_1() {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Perform_2" : 0;
    }
    Init(WS, scratch) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ReadFile(filename) {
        const __result = this._overload.ReadFile.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbRootsForTransfer() {
        const __result = this._overload.NbRootsForTransfer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    TransferOneRoot(num, doc, theProgress) {
        const __result = this._overload.TransferOneRoot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ExternFiles() {
        const __result = this._overload.ExternFiles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    ExternFile(name, ef) {
        const __result = this._overload.ExternFile.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ChangeReader() {
        const __result = this._overload.ChangeReader.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new STEPControl_Reader({ __from: __result });
    }
    Reader() {
        const __result = this._overload.Reader.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new STEPControl_Reader({ __from: __result });
    }
    static FindInstance(NAUO, STool, Tool, ShapeLabelMap) {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        const __result = __oc.STEPCAFControl_Reader.FindInstance.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    SetColorMode(colormode) {
        const __result = this._overload.SetColorMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetColorMode() {
        const __result = this._overload.GetColorMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetNameMode(namemode) {
        const __result = this._overload.SetNameMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetNameMode() {
        const __result = this._overload.GetNameMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetLayerMode(layermode) {
        const __result = this._overload.SetLayerMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetLayerMode() {
        const __result = this._overload.GetLayerMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetPropsMode(propsmode) {
        const __result = this._overload.SetPropsMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetPropsMode() {
        const __result = this._overload.GetPropsMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetSHUOMode(shuomode) {
        const __result = this._overload.SetSHUOMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetSHUOMode() {
        const __result = this._overload.GetSHUOMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetGDTMode(gdtmode) {
        const __result = this._overload.SetGDTMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetGDTMode() {
        const __result = this._overload.GetGDTMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetMatMode(matmode) {
        const __result = this._overload.SetMatMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetMatMode() {
        const __result = this._overload.GetMatMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetViewMode(viewmode) {
        const __result = this._overload.SetViewMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetViewMode() {
        const __result = this._overload.GetViewMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetShapeLabelMap() {
        const __result = this._overload.GetShapeLabelMap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new XCAFDoc_DataMapOfShapeLabel({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transfer(doc, theProgress) {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        return __determine_method_overload(1, "Transfer", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Perform(filename, doc, theProgress) {
        const __oc = STEPCAFControl_Reader.prototype.getOC();
        return __determine_method_overload(2, "Perform", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class STEPCAFControl_Writer {
    constructor() {
        __determine_ctor_overload("STEPCAFControl_Writer", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_STEPCAFControl_Writer_0() {
        const match = arguments.length === 0;
        return match ? "STEPCAFControl_Writer_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_STEPCAFControl_Writer_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_XSControl_WorkSession) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "STEPCAFControl_Writer_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfer_0() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (__oc.STEPControl_StepModelType) && _wrap_primitive_type(arguments[2]) instanceof (String) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Transfer_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfer_1() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (__oc.STEPControl_StepModelType) && _wrap_primitive_type(arguments[2]) instanceof (String) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Transfer_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Transfer_2() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_LabelSequence) && _wrap_primitive_type(arguments[1]) instanceof (__oc.STEPControl_StepModelType) && _wrap_primitive_type(arguments[2]) instanceof (String) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Transfer_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_0() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (XCAFDoc_PartId) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Perform_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Perform_1() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (String) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Perform_2" : 0;
    }
    /** @internal */
    __determine_method_overload_ExternFile_0() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (Handle_STEPCAFControl_ExternFile));
        return match ? "ExternFile_1" : 0;
    }
    /** @internal */
    __determine_method_overload_ExternFile_1() {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (Handle_STEPCAFControl_ExternFile));
        return match ? "ExternFile_2" : 0;
    }
    Init(WS, scratch) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Write(filename) {
        const __result = this._overload.Write.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ExternFiles() {
        const __result = this._overload.ExternFiles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    ChangeWriter() {
        const __result = this._overload.ChangeWriter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new STEPControl_Writer({ __from: __result });
    }
    Writer() {
        const __result = this._overload.Writer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new STEPControl_Writer({ __from: __result });
    }
    SetColorMode(colormode) {
        const __result = this._overload.SetColorMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetColorMode() {
        const __result = this._overload.GetColorMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetNameMode(namemode) {
        const __result = this._overload.SetNameMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetNameMode() {
        const __result = this._overload.GetNameMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetLayerMode(layermode) {
        const __result = this._overload.SetLayerMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetLayerMode() {
        const __result = this._overload.GetLayerMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetPropsMode(propsmode) {
        const __result = this._overload.SetPropsMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetPropsMode() {
        const __result = this._overload.GetPropsMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetSHUOMode(shuomode) {
        const __result = this._overload.SetSHUOMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetSHUOMode() {
        const __result = this._overload.GetSHUOMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetDimTolMode(dimtolmode) {
        const __result = this._overload.SetDimTolMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetDimTolMode() {
        const __result = this._overload.GetDimTolMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetMaterialMode(matmode) {
        const __result = this._overload.SetMaterialMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetMaterialMode() {
        const __result = this._overload.GetMaterialMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transfer(doc, mode, multi, theProgress) {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        return __determine_method_overload(3, "Transfer", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Perform(doc, filename, theProgress) {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        return __determine_method_overload(2, "Perform", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    ExternFile(L, ef) {
        const __oc = STEPCAFControl_Writer.prototype.getOC();
        return __determine_method_overload(2, "ExternFile", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class STEPControl_Reader {
    constructor() {
        __determine_ctor_overload("STEPControl_Reader", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_STEPControl_Reader_0() {
        const match = arguments.length === 0;
        return match ? "STEPControl_Reader_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_STEPControl_Reader_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_XSControl_WorkSession) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "STEPControl_Reader_2" : 0;
    }
    StepModel() {
        const __result = this._overload.StepModel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_StepData_StepModel({ __from: __result });
    }
    TransferRoot(num, theProgress) {
        const __result = this._overload.TransferRoot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbRootsForTransfer() {
        const __result = this._overload.NbRootsForTransfer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FileUnits(theUnitLengthNames, theUnitAngleNames, theUnitSolidAngleNames) {
        const __result = this._overload.FileUnits.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetSystemLengthUnit(theLengthUnit) {
        const __result = this._overload.SetSystemLengthUnit.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SystemLengthUnit() {
        const __result = this._overload.SystemLengthUnit.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class STEPControl_Writer {
    constructor() {
        __determine_ctor_overload("STEPControl_Writer", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_STEPControl_Writer_0() {
        const match = arguments.length === 0;
        return match ? "STEPControl_Writer_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_STEPControl_Writer_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_XSControl_WorkSession) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "STEPControl_Writer_2" : 0;
    }
    SetTolerance(Tol) {
        const __result = this._overload.SetTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    UnsetTolerance() {
        const __result = this._overload.UnsetTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetWS(WS, scratch) {
        const __result = this._overload.SetWS.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    WS() {
        const __result = this._overload.WS.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XSControl_WorkSession({ __from: __result });
    }
    Model(newone) {
        const __result = this._overload.Model.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_StepData_StepModel({ __from: __result });
    }
    Transfer(sh, mode, compgraph, theProgress) {
        const __result = this._overload.Transfer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Write(filename) {
        const __result = this._overload.Write.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    PrintStatsTransfer(what, mode) {
        const __result = this._overload.PrintStatsTransfer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class ShapeAnalysis_FreeBounds {
    constructor() {
        __determine_ctor_overload("ShapeAnalysis_FreeBounds", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeAnalysis_FreeBounds_0() {
        const match = arguments.length === 0;
        return match ? "ShapeAnalysis_FreeBounds_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeAnalysis_FreeBounds_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "ShapeAnalysis_FreeBounds_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeAnalysis_FreeBounds_2() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "ShapeAnalysis_FreeBounds_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_ConnectWiresToWires_0() {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TopTools_HSequenceOfShape) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Handle_TopTools_HSequenceOfShape));
        return match ? "ConnectWiresToWires_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_ConnectWiresToWires_1() {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TopTools_HSequenceOfShape) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Handle_TopTools_HSequenceOfShape) && _wrap_primitive_type(arguments[4]) instanceof (TopTools_DataMapOfShapeShape));
        return match ? "ConnectWiresToWires_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_SplitWires_0() {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TopTools_HSequenceOfShape) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Handle_TopTools_HSequenceOfShape) && _wrap_primitive_type(arguments[4]) instanceof (Handle_TopTools_HSequenceOfShape));
        return match ? "SplitWires_1" : 0;
    }
    GetClosedWires() {
        const __result = this._overload.GetClosedWires.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Compound({ __from: __result });
    }
    GetOpenWires() {
        const __result = this._overload.GetOpenWires.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Compound({ __from: __result });
    }
    static ConnectEdgesToWires(edges, toler, shared, wires) {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        const __result = __oc.ShapeAnalysis_FreeBounds.ConnectEdgesToWires.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static DispatchWires(wires, closed, open) {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        const __result = __oc.ShapeAnalysis_FreeBounds.DispatchWires.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static ConnectWiresToWires(iwires, toler, shared, owires) {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        return __determine_method_overload_static(__oc, ShapeAnalysis_FreeBounds, "ShapeAnalysis_FreeBounds", 2, "ConnectWiresToWires", "", null, false).apply(this, arguments);
    }
    static SplitWires(wires, toler, shared, closed, open) {
        const __oc = ShapeAnalysis_FreeBounds.prototype.getOC();
        return __determine_method_overload_static(__oc, ShapeAnalysis_FreeBounds, "ShapeAnalysis_FreeBounds", 1, "SplitWires", "", null, false).apply(this, arguments);
    }
}
export class ShapeExtend_WireData {
    constructor() {
        __determine_ctor_overload("ShapeExtend_WireData", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeExtend_WireData_0() {
        const match = arguments.length === 0;
        return match ? "ShapeExtend_WireData_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeExtend_WireData_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "ShapeExtend_WireData_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_ShapeExtend_WireData));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_0() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Add_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_1() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Add_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_2() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_ShapeExtend_WireData) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Add_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Add_3() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Add_4" : 0;
    }
    /** @internal */
    __determine_method_overload_AddOriented_0() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "AddOriented_1" : 0;
    }
    /** @internal */
    __determine_method_overload_AddOriented_1() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "AddOriented_2" : 0;
    }
    /** @internal */
    __determine_method_overload_AddOriented_2() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "AddOriented_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Reverse_0() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Reverse_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Reverse_1() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Reverse_2" : 0;
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ComputeSeams(enforce) {
        const __result = this._overload.ComputeSeams.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLast(num) {
        const __result = this._overload.SetLast.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDegeneratedLast() {
        const __result = this._overload.SetDegeneratedLast.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Remove(num) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Set(edge, num) {
        const __result = this._overload.Set.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NbEdges() {
        const __result = this._overload.NbEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbNonManifoldEdges() {
        const __result = this._overload.NbNonManifoldEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NonmanifoldEdge(num) {
        const __result = this._overload.NonmanifoldEdge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    NonmanifoldEdges() {
        const __result = this._overload.NonmanifoldEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TopTools_HSequenceOfShape({ __from: __result });
    }
    ManifoldMode() {
        const __result = this._overload.ManifoldMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Edge(num) {
        const __result = this._overload.Edge.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Edge({ __from: __result });
    }
    Index(edge) {
        const __result = this._overload.Index.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsSeam(num) {
        const __result = this._overload.IsSeam.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Wire() {
        const __result = this._overload.Wire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    WireAPIMake() {
        const __result = this._overload.WireAPIMake.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    static get_type_name() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const __result = __oc.ShapeExtend_WireData.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        const __result = __oc.ShapeExtend_WireData.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(other) {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        return __determine_method_overload(2, "Init", "", null, false).apply(this, arguments);
    }
    Add(edge, atnum) {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        return __determine_method_overload(4, "Add", "", null, false).apply(this, arguments);
    }
    AddOriented(edge, mode) {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        return __determine_method_overload(3, "AddOriented", "", null, false).apply(this, arguments);
    }
    Reverse() {
        const __oc = ShapeExtend_WireData.prototype.getOC();
        return __determine_method_overload(2, "Reverse", "", null, false).apply(this, arguments);
    }
}
export class ShapeFix_Face {
    constructor() {
        __determine_ctor_overload("ShapeFix_Face", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Face_0() {
        const match = arguments.length === 0;
        return match ? "ShapeFix_Face_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Face_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "ShapeFix_Face_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_2() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_ShapeAnalysis_Surface) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "Init_3" : 0;
    }
    /** @internal */
    __determine_method_overload_FixOrientation_0() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "FixOrientation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixOrientation_1() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_DataMapOfShapeListOfShape));
        return match ? "FixOrientation_2" : 0;
    }
    ClearModes() {
        const __result = this._overload.ClearModes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMsgRegistrator(msgreg) {
        const __result = this._overload.SetMsgRegistrator.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPrecision(preci) {
        const __result = this._overload.SetPrecision.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMinTolerance(mintol) {
        const __result = this._overload.SetMinTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxTolerance(maxtol) {
        const __result = this._overload.SetMaxTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FixWireMode() {
        const __result = this._overload.FixWireMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixOrientationMode() {
        const __result = this._overload.FixOrientationMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixAddNaturalBoundMode() {
        const __result = this._overload.FixAddNaturalBoundMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixMissingSeamMode() {
        const __result = this._overload.FixMissingSeamMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSmallAreaWireMode() {
        const __result = this._overload.FixSmallAreaWireMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    RemoveSmallAreaFaceMode() {
        const __result = this._overload.RemoveSmallAreaFaceMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixIntersectingWiresMode() {
        const __result = this._overload.FixIntersectingWiresMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixLoopWiresMode() {
        const __result = this._overload.FixLoopWiresMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSplitFaceMode() {
        const __result = this._overload.FixSplitFaceMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    AutoCorrectPrecisionMode() {
        const __result = this._overload.AutoCorrectPrecisionMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixPeriodicDegeneratedMode() {
        const __result = this._overload.FixPeriodicDegeneratedMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Face() {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    Result() {
        const __result = this._overload.Result.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Add(wire) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform() {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixAddNaturalBound() {
        const __result = this._overload.FixAddNaturalBound.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixMissingSeam() {
        const __result = this._overload.FixMissingSeam.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSmallAreaWire(theIsRemoveSmallFace) {
        const __result = this._overload.FixSmallAreaWire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixLoopWire(aResWires) {
        const __result = this._overload.FixLoopWire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixIntersectingWires() {
        const __result = this._overload.FixIntersectingWires.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixWiresTwoCoincEdges() {
        const __result = this._overload.FixWiresTwoCoincEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSplitFace(MapWires) {
        const __result = this._overload.FixSplitFace.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixPeriodicDegenerated() {
        const __result = this._overload.FixPeriodicDegenerated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Status(status) {
        const __result = this._overload.Status.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixWireTool() {
        const __result = this._overload.FixWireTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Wire({ __from: __result });
    }
    static get_type_name() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const __result = __oc.ShapeFix_Face.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = ShapeFix_Face.prototype.getOC();
        const __result = __oc.ShapeFix_Face.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(face) {
        const __oc = ShapeFix_Face.prototype.getOC();
        return __determine_method_overload(3, "Init", "", null, false).apply(this, arguments);
    }
    FixOrientation() {
        const __oc = ShapeFix_Face.prototype.getOC();
        return __determine_method_overload(2, "FixOrientation", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class ShapeFix_Shape {
    constructor() {
        __determine_ctor_overload("ShapeFix_Shape", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Shape_0() {
        const match = arguments.length === 0;
        return match ? "ShapeFix_Shape_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Shape_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "ShapeFix_Shape_2" : 0;
    }
    Init(shape) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Perform(theProgress) {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Shape() {
        const __result = this._overload.Shape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    FixSolidTool() {
        const __result = this._overload.FixSolidTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Solid({ __from: __result });
    }
    FixShellTool() {
        const __result = this._overload.FixShellTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Shell({ __from: __result });
    }
    FixFaceTool() {
        const __result = this._overload.FixFaceTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Face({ __from: __result });
    }
    FixWireTool() {
        const __result = this._overload.FixWireTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Wire({ __from: __result });
    }
    FixEdgeTool() {
        const __result = this._overload.FixEdgeTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Edge({ __from: __result });
    }
    Status(status) {
        const __result = this._overload.Status.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetMsgRegistrator(msgreg) {
        const __result = this._overload.SetMsgRegistrator.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPrecision(preci) {
        const __result = this._overload.SetPrecision.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMinTolerance(mintol) {
        const __result = this._overload.SetMinTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxTolerance(maxtol) {
        const __result = this._overload.SetMaxTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FixSolidMode() {
        const __result = this._overload.FixSolidMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixFreeShellMode() {
        const __result = this._overload.FixFreeShellMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixFreeFaceMode() {
        const __result = this._overload.FixFreeFaceMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixFreeWireMode() {
        const __result = this._overload.FixFreeWireMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSameParameterMode() {
        const __result = this._overload.FixSameParameterMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixVertexPositionMode() {
        const __result = this._overload.FixVertexPositionMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixVertexTolMode() {
        const __result = this._overload.FixVertexTolMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_name() {
        const __oc = ShapeFix_Shape.prototype.getOC();
        const __result = __oc.ShapeFix_Shape.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = ShapeFix_Shape.prototype.getOC();
        const __result = __oc.ShapeFix_Shape.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class ShapeFix_Wire {
    constructor() {
        __determine_ctor_overload("ShapeFix_Wire", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Wire_0() {
        const match = arguments.length === 0;
        return match ? "ShapeFix_Wire_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeFix_Wire_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "ShapeFix_Wire_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Init_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Init_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_ShapeAnalysis_Wire));
        return match ? "Init_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Load_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire));
        return match ? "Load_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Load_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_ShapeExtend_WireData));
        return match ? "Load_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetSurface_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface));
        return match ? "SetSurface_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetSurface_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_Geom_Surface) && _wrap_primitive_type(arguments[1]) instanceof (TopLoc_Location));
        return match ? "SetSurface_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FixReorder_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "FixReorder_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixReorder_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (ShapeAnalysis_WireOrder));
        return match ? "FixReorder_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FixSmall_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "FixSmall_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixSmall_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "FixSmall_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FixConnected_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "FixConnected_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixConnected_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "FixConnected_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FixDegenerated_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "FixDegenerated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixDegenerated_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "FixDegenerated_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FixLacking_0() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "FixLacking_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FixLacking_1() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "FixLacking_2" : 0;
    }
    ClearModes() {
        const __result = this._overload.ClearModes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ClearStatuses() {
        const __result = this._overload.ClearStatuses.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetFace(face) {
        const __result = this._overload.SetFace.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPrecision(prec) {
        const __result = this._overload.SetPrecision.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxTailAngle(theMaxTailAngle) {
        const __result = this._overload.SetMaxTailAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMaxTailWidth(theMaxTailWidth) {
        const __result = this._overload.SetMaxTailWidth.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsLoaded() {
        const __result = this._overload.IsLoaded.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsReady() {
        const __result = this._overload.IsReady.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbEdges() {
        const __result = this._overload.NbEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Wire() {
        const __result = this._overload.Wire.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    WireAPIMake() {
        const __result = this._overload.WireAPIMake.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Wire({ __from: __result });
    }
    Analyzer() {
        const __result = this._overload.Analyzer.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeAnalysis_Wire({ __from: __result });
    }
    WireData() {
        const __result = this._overload.WireData.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeExtend_WireData({ __from: __result });
    }
    Face() {
        const __result = this._overload.Face.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Face({ __from: __result });
    }
    ModifyTopologyMode() {
        const __result = this._overload.ModifyTopologyMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ModifyGeometryMode() {
        const __result = this._overload.ModifyGeometryMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ModifyRemoveLoopMode() {
        const __result = this._overload.ModifyRemoveLoopMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ClosedWireMode() {
        const __result = this._overload.ClosedWireMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    PreferencePCurveMode() {
        const __result = this._overload.PreferencePCurveMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGapsByRangesMode() {
        const __result = this._overload.FixGapsByRangesMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixReorderMode() {
        const __result = this._overload.FixReorderMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSmallMode() {
        const __result = this._overload.FixSmallMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixConnectedMode() {
        const __result = this._overload.FixConnectedMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixEdgeCurvesMode() {
        const __result = this._overload.FixEdgeCurvesMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixDegeneratedMode() {
        const __result = this._overload.FixDegeneratedMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSelfIntersectionMode() {
        const __result = this._overload.FixSelfIntersectionMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixLackingMode() {
        const __result = this._overload.FixLackingMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGaps3dMode() {
        const __result = this._overload.FixGaps3dMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGaps2dMode() {
        const __result = this._overload.FixGaps2dMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixReversed2dMode() {
        const __result = this._overload.FixReversed2dMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixRemovePCurveMode() {
        const __result = this._overload.FixRemovePCurveMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixAddPCurveMode() {
        const __result = this._overload.FixAddPCurveMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixRemoveCurve3dMode() {
        const __result = this._overload.FixRemoveCurve3dMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixAddCurve3dMode() {
        const __result = this._overload.FixAddCurve3dMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSeamMode() {
        const __result = this._overload.FixSeamMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixShiftedMode() {
        const __result = this._overload.FixShiftedMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSameParameterMode() {
        const __result = this._overload.FixSameParameterMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixVertexToleranceMode() {
        const __result = this._overload.FixVertexToleranceMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixNotchedEdgesMode() {
        const __result = this._overload.FixNotchedEdgesMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSelfIntersectingEdgeMode() {
        const __result = this._overload.FixSelfIntersectingEdgeMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixIntersectingEdgesMode() {
        const __result = this._overload.FixIntersectingEdgesMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixNonAdjacentIntersectingEdgesMode() {
        const __result = this._overload.FixNonAdjacentIntersectingEdgesMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixTailMode() {
        const __result = this._overload.FixTailMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Perform() {
        const __result = this._overload.Perform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixEdgeCurves() {
        const __result = this._overload.FixEdgeCurves.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSelfIntersection() {
        const __result = this._overload.FixSelfIntersection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixClosed(prec) {
        const __result = this._overload.FixClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGaps3d() {
        const __result = this._overload.FixGaps3d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGaps2d() {
        const __result = this._overload.FixGaps2d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixSeam(num) {
        const __result = this._overload.FixSeam.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixShifted() {
        const __result = this._overload.FixShifted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixNotchedEdges() {
        const __result = this._overload.FixNotchedEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGap3d(num, convert) {
        const __result = this._overload.FixGap3d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixGap2d(num, convert) {
        const __result = this._overload.FixGap2d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixTails() {
        const __result = this._overload.FixTails.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusReorder(status) {
        const __result = this._overload.StatusReorder.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusSmall(status) {
        const __result = this._overload.StatusSmall.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusConnected(status) {
        const __result = this._overload.StatusConnected.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusEdgeCurves(status) {
        const __result = this._overload.StatusEdgeCurves.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusDegenerated(status) {
        const __result = this._overload.StatusDegenerated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusSelfIntersection(status) {
        const __result = this._overload.StatusSelfIntersection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusLacking(status) {
        const __result = this._overload.StatusLacking.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusClosed(status) {
        const __result = this._overload.StatusClosed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusGaps3d(status) {
        const __result = this._overload.StatusGaps3d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusGaps2d(status) {
        const __result = this._overload.StatusGaps2d.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusNotches(status) {
        const __result = this._overload.StatusNotches.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusRemovedSegment() {
        const __result = this._overload.StatusRemovedSegment.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StatusFixTails(status) {
        const __result = this._overload.StatusFixTails.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LastFixStatus(status) {
        const __result = this._overload.LastFixStatus.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FixEdgeTool() {
        const __result = this._overload.FixEdgeTool.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_ShapeFix_Edge({ __from: __result });
    }
    static get_type_name() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const __result = __oc.ShapeFix_Wire.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        const __result = __oc.ShapeFix_Wire.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Init(wire, face, prec) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "Init", "", null, false).apply(this, arguments);
    }
    Load(wire) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "Load", "", null, false).apply(this, arguments);
    }
    SetSurface(surf) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "SetSurface", "", null, false).apply(this, arguments);
    }
    FixReorder() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "FixReorder", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    FixSmall(lockvtx, precsmall) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "FixSmall", "Graphic3d_ZLayerId", Number, true).apply(this, arguments);
    }
    FixConnected(prec) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "FixConnected", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    FixDegenerated() {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "FixDegenerated", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    FixLacking(force) {
        const __oc = ShapeFix_Wire.prototype.getOC();
        return __determine_method_overload(2, "FixLacking", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class ShapeUpgrade_UnifySameDomain {
    constructor() {
        __determine_ctor_overload("ShapeUpgrade_UnifySameDomain", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_ShapeUpgrade_UnifySameDomain_0() {
        const match = arguments.length === 0;
        return match ? "ShapeUpgrade_UnifySameDomain_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_ShapeUpgrade_UnifySameDomain_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "ShapeUpgrade_UnifySameDomain_2" : 0;
    }
    /** @internal */
    __determine_method_overload_History_0() {
        const __oc = ShapeUpgrade_UnifySameDomain.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "History_1" : 0;
    }
    /** @internal */
    __determine_method_overload_History_1() {
        const __oc = ShapeUpgrade_UnifySameDomain.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "History_2" : 0;
    }
    Initialize(aShape, UnifyEdges, UnifyFaces, ConcatBSplines) {
        const __result = this._overload.Initialize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AllowInternalEdges(theValue) {
        const __result = this._overload.AllowInternalEdges.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    KeepShape(theShape) {
        const __result = this._overload.KeepShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    KeepShapes(theShapes) {
        const __result = this._overload.KeepShapes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetSafeInputMode(theValue) {
        const __result = this._overload.SetSafeInputMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLinearTolerance(theValue) {
        const __result = this._overload.SetLinearTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetAngularTolerance(theValue) {
        const __result = this._overload.SetAngularTolerance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Build() {
        const __result = this._overload.Build.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Shape() {
        const __result = this._overload.Shape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    static get_type_name() {
        const __oc = ShapeUpgrade_UnifySameDomain.prototype.getOC();
        const __result = __oc.ShapeUpgrade_UnifySameDomain.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = ShapeUpgrade_UnifySameDomain.prototype.getOC();
        const __result = __oc.ShapeUpgrade_UnifySameDomain.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    History() {
        const __oc = ShapeUpgrade_UnifySameDomain.prototype.getOC();
        return __determine_method_overload(2, "History", "Handle_BRepTools_History", Handle_BRepTools_History, false).apply(this, arguments);
    }
}
export class Standard_Failure {
    constructor() {
        __determine_ctor_overload("Standard_Failure", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Standard_Failure_0() {
        const match = arguments.length === 0;
        return match ? "Standard_Failure_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Standard_Failure_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_Failure));
        return match ? "Standard_Failure_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Standard_Failure_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "Standard_Failure_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Standard_Failure_3() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (String));
        return match ? "Standard_Failure_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Reraise_0() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Reraise_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Reraise_1() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "Reraise_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Reraise_2() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_SStream));
        return match ? "Reraise_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Raise_0() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "Raise_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Raise_1() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_SStream));
        return match ? "Raise_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_NewInstance_0() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "NewInstance_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_NewInstance_1() {
        const __oc = Standard_Failure.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (String));
        return match ? "NewInstance_2" : 0;
    }
    Print(theStream) {
        const __result = this._overload.Print.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetMessageString() {
        const __result = this._overload.GetMessageString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetMessageString(theMessage) {
        const __result = this._overload.SetMessageString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetStackString() {
        const __result = this._overload.GetStackString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetStackString(theStack) {
        const __result = this._overload.SetStackString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static DefaultStackTraceLength() {
        const __oc = Standard_Failure.prototype.getOC();
        const __result = __oc.Standard_Failure.DefaultStackTraceLength.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static SetDefaultStackTraceLength(theNbStackTraces) {
        const __oc = Standard_Failure.prototype.getOC();
        const __result = __oc.Standard_Failure.SetDefaultStackTraceLength.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    Jump() {
        const __result = this._overload.Jump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static get_type_name() {
        const __oc = Standard_Failure.prototype.getOC();
        const __result = __oc.Standard_Failure.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = Standard_Failure.prototype.getOC();
        const __result = __oc.Standard_Failure.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reraise() {
        const __oc = Standard_Failure.prototype.getOC();
        return __determine_method_overload(3, "Reraise", "", null, false).apply(this, arguments);
    }
    static Raise(aMessage) {
        const __oc = Standard_Failure.prototype.getOC();
        return __determine_method_overload_static(__oc, Standard_Failure, "Standard_Failure", 2, "Raise", "", null, false).apply(this, arguments);
    }
    static NewInstance(theMessage) {
        const __oc = Standard_Failure.prototype.getOC();
        return __determine_method_overload_static(__oc, Standard_Failure, "Standard_Failure", 2, "NewInstance", "Handle_Standard_Failure", Handle_Standard_Failure, false).apply(this, arguments);
    }
}
export class StdPrs_ToolTriangulatedShape {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.StdPrs_ToolTriangulatedShape(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_ComputeNormals_0() {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation));
        return match ? "ComputeNormals_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_ComputeNormals_1() {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Face) && _wrap_primitive_type(arguments[1]) instanceof (Handle_Poly_Triangulation) && _wrap_primitive_type(arguments[2]) instanceof (Poly_Connect));
        return match ? "ComputeNormals_2" : 0;
    }
    static IsTriangulated(theShape) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.IsTriangulated.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsClosed(theShape) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.IsClosed.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Normal(theFace, thePolyConnect, theNormals) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.Normal.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static GetDeflection(theShape, theDrawer) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.GetDeflection.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsTessellated(theShape, theDrawer) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.IsTessellated.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static Tessellate(theShape, theDrawer) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.Tessellate.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ClearOnOwnDeflectionChange(theShape, theDrawer, theToResetCoeff) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        const __result = __oc.StdPrs_ToolTriangulatedShape.ClearOnOwnDeflectionChange.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static ComputeNormals(theFace, theTris) {
        const __oc = StdPrs_ToolTriangulatedShape.prototype.getOC();
        return __determine_method_overload_static(__oc, StdPrs_ToolTriangulatedShape, "StdPrs_ToolTriangulatedShape", 2, "ComputeNormals", "", null, false).apply(this, arguments);
    }
}
export class StlAPI_Writer {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.StlAPI_Writer(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    ASCIIMode() {
        const __result = this._overload.ASCIIMode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Write(theShape, theFileName, theProgress) {
        const __result = this._overload.Write.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TColgp_Array1OfDir {
    constructor() {
        __determine_ctor_overload("TColgp_Array1OfDir", 5).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TColgp_Array1OfDir_0() {
        const match = arguments.length === 0;
        return match ? "TColgp_Array1OfDir_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TColgp_Array1OfDir_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "TColgp_Array1OfDir_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TColgp_Array1OfDir_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TColgp_Array1OfDir));
        return match ? "TColgp_Array1OfDir_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TColgp_Array1OfDir_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TColgp_Array1OfDir));
        return match ? "TColgp_Array1OfDir_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TColgp_Array1OfDir_4() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Dir) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "TColgp_Array1OfDir_5" : 0;
    }
    begin() {
        const __result = this._overload.begin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    end() {
        const __result = this._overload.end.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cbegin() {
        const __result = this._overload.cbegin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cend() {
        const __result = this._overload.cend.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    Init(theValue) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Size() {
        const __result = this._overload.Size.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Length() {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEmpty() {
        const __result = this._overload.IsEmpty.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Lower() {
        const __result = this._overload.Lower.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Upper() {
        const __result = this._overload.Upper.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDeletable() {
        const __result = this._overload.IsDeletable.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsAllocated() {
        const __result = this._overload.IsAllocated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Assign(theOther) {
        const __result = this._overload.Assign.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TColgp_Array1OfDir({ __from: __result });
    }
    Move(theOther) {
        const __result = this._overload.Move.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TColgp_Array1OfDir({ __from: __result });
    }
    First() {
        const __result = this._overload.First.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    ChangeFirst() {
        const __result = this._overload.ChangeFirst.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Last() {
        const __result = this._overload.Last.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    ChangeLast() {
        const __result = this._overload.ChangeLast.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Value(theIndex) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    ChangeValue(theIndex) {
        const __result = this._overload.ChangeValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    SetValue(theIndex, theItem) {
        const __result = this._overload.SetValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Resize(theLower, theUpper, theToCopyData) {
        const __result = this._overload.Resize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TCollection_ExtendedString {
    constructor() {
        __determine_ctor_overload("TCollection_ExtendedString", 12).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_0() {
        const match = arguments.length === 0;
        return match ? "TCollection_ExtendedString_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "TCollection_ExtendedString_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "TCollection_ExtendedString_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "TCollection_ExtendedString_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_4() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "TCollection_ExtendedString_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "TCollection_ExtendedString_6" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_6() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (String));
        return match ? "TCollection_ExtendedString_7" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_7() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "TCollection_ExtendedString_8" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_8() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "TCollection_ExtendedString_9" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_9() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "TCollection_ExtendedString_10" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_10() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "TCollection_ExtendedString_11" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TCollection_ExtendedString_11() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (XCAFDoc_PartId) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "TCollection_ExtendedString_12" : 0;
    }
    /** @internal */
    __determine_method_overload_AssignCat_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "AssignCat_1" : 0;
    }
    /** @internal */
    __determine_method_overload_AssignCat_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_Utf16Char));
        return match ? "AssignCat_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Insert_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (String));
        return match ? "Insert_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Insert_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString));
        return match ? "Insert_2" : 0;
    }
    /** @internal */
    __determine_method_overload_IsEqual_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "IsEqual_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsEqual_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "IsEqual_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_IsEqual_2() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString));
        return match ? "IsEqual_3" : 0;
    }
    /** @internal */
    __determine_method_overload_IsDifferent_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "IsDifferent_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsDifferent_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "IsDifferent_2" : 0;
    }
    /** @internal */
    __determine_method_overload_IsLess_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "IsLess_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsLess_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "IsLess_2" : 0;
    }
    /** @internal */
    __determine_method_overload_IsGreater_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (String));
        return match ? "IsGreater_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsGreater_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString));
        return match ? "IsGreater_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetValue_0() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (String));
        return match ? "SetValue_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetValue_1() {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString));
        return match ? "SetValue_2" : 0;
    }
    Cat(other) {
        const __result = this._overload.Cat.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TCollection_ExtendedString({ __from: __result });
    }
    ChangeAll(aChar, NewChar) {
        const __result = this._overload.ChangeAll.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Copy(fromwhere) {
        const __result = this._overload.Copy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Swap(theOther) {
        const __result = this._overload.Swap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsEmpty() {
        const __result = this._overload.IsEmpty.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    StartsWith(theStartString) {
        const __result = this._overload.StartsWith.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    EndsWith(theEndString) {
        const __result = this._overload.EndsWith.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsAscii() {
        const __result = this._overload.IsAscii.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Length() {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Print(astream) {
        const __result = this._overload.Print.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    RemoveAll(what) {
        const __result = this._overload.RemoveAll.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Remove(where, ahowmany) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Search(what) {
        const __result = this._overload.Search.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SearchFromEnd(what) {
        const __result = this._overload.SearchFromEnd.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Split(where) {
        const __result = this._overload.Split.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TCollection_ExtendedString({ __from: __result });
    }
    Token(separators, whichone) {
        const __result = this._overload.Token.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TCollection_ExtendedString({ __from: __result });
    }
    ToExtString() {
        const __result = this._overload.ToExtString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Trunc(ahowmany) {
        const __result = this._overload.Trunc.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Value(where) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static HashCode(theString, theUpperBound) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        const __result = __oc.TCollection_ExtendedString.HashCode.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    LengthOfCString() {
        const __result = this._overload.LengthOfCString.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AssignCat(other) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "AssignCat", "", null, false).apply(this, arguments);
    }
    Insert(where, what) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "Insert", "", null, false).apply(this, arguments);
    }
    IsEqual(other) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(3, "IsEqual", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    IsDifferent(other) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "IsDifferent", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    IsLess(other) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "IsLess", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    IsGreater(other) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "IsGreater", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    SetValue(where, what) {
        const __oc = TCollection_ExtendedString.prototype.getOC();
        return __determine_method_overload(2, "SetValue", "", null, false).apply(this, arguments);
    }
}
export class TDF_Label {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TDF_Label(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_ForgetAttribute_0() {
        const __oc = TDF_Label.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDF_Attribute));
        return match ? "ForgetAttribute_1" : 0;
    }
    /** @internal */
    __determine_method_overload_ForgetAttribute_1() {
        const __oc = TDF_Label.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_GUID));
        return match ? "ForgetAttribute_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FindAttribute_0() {
        const __oc = TDF_Label.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_GUID) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDF_Attribute));
        return match ? "FindAttribute_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FindAttribute_1() {
        const __oc = TDF_Label.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Standard_GUID) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Handle_TDF_Attribute));
        return match ? "FindAttribute_3" : 0;
    }
    Nullify() {
        const __result = this._overload.Nullify.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Data() {
        const __result = this._overload.Data.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TDF_Data({ __from: __result });
    }
    Tag() {
        const __result = this._overload.Tag.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Father() {
        const __result = this._overload.Father.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    IsNull() {
        const __result = this._overload.IsNull.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Imported(aStatus) {
        const __result = this._overload.Imported.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsImported() {
        const __result = this._overload.IsImported.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEqual(aLabel) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDifferent(aLabel) {
        const __result = this._overload.IsDifferent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsRoot() {
        const __result = this._overload.IsRoot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsAttribute(anID) {
        const __result = this._overload.IsAttribute.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    AddAttribute(anAttribute, append) {
        const __result = this._overload.AddAttribute.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ForgetAllAttributes(clearChildren) {
        const __result = this._overload.ForgetAllAttributes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ResumeAttribute(anAttribute) {
        const __result = this._overload.ResumeAttribute.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    MayBeModified() {
        const __result = this._overload.MayBeModified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    AttributesModified() {
        const __result = this._overload.AttributesModified.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HasAttribute() {
        const __result = this._overload.HasAttribute.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbAttributes() {
        const __result = this._overload.NbAttributes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Depth() {
        const __result = this._overload.Depth.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDescendant(aLabel) {
        const __result = this._overload.IsDescendant.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Root() {
        const __result = this._overload.Root.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    HasChild() {
        const __result = this._overload.HasChild.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NbChildren() {
        const __result = this._overload.NbChildren.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FindChild(aTag, create) {
        const __result = this._overload.FindChild.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    NewChild() {
        const __result = this._overload.NewChild.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    Transaction() {
        const __result = this._overload.Transaction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HasLowerNode(otherLabel) {
        const __result = this._overload.HasLowerNode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HasGreaterNode(otherLabel) {
        const __result = this._overload.HasGreaterNode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ExtendedDump(anOS, aFilter, aMap) {
        const __result = this._overload.ExtendedDump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    EntryDump(anOS) {
        const __result = this._overload.EntryDump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ForgetAttribute(anAttribute) {
        const __oc = TDF_Label.prototype.getOC();
        return __determine_method_overload(2, "ForgetAttribute", "", null, false).apply(this, arguments);
    }
    FindAttribute(anID, anAttribute) {
        const __oc = TDF_Label.prototype.getOC();
        return __determine_method_overload(2, "FindAttribute", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class TDF_LabelSequence {
    constructor() {
        __determine_ctor_overload("TDF_LabelSequence", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TDF_LabelSequence_0() {
        const match = arguments.length === 0;
        return match ? "TDF_LabelSequence_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TDF_LabelSequence_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "TDF_LabelSequence_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TDF_LabelSequence_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_LabelSequence));
        return match ? "TDF_LabelSequence_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Remove_0() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Remove_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Remove_1() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Remove_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Append_0() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label));
        return match ? "Append_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Append_1() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_LabelSequence));
        return match ? "Append_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Prepend_0() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label));
        return match ? "Prepend_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Prepend_1() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_LabelSequence));
        return match ? "Prepend_2" : 0;
    }
    /** @internal */
    __determine_method_overload_InsertBefore_0() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TDF_Label));
        return match ? "InsertBefore_1" : 0;
    }
    /** @internal */
    __determine_method_overload_InsertBefore_1() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TDF_LabelSequence));
        return match ? "InsertBefore_2" : 0;
    }
    /** @internal */
    __determine_method_overload_InsertAfter_0() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TDF_LabelSequence));
        return match ? "InsertAfter_2" : 0;
    }
    /** @internal */
    __determine_method_overload_InsertAfter_1() {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (TDF_Label));
        return match ? "InsertAfter_3" : 0;
    }
    begin() {
        const __result = this._overload.begin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    end() {
        const __result = this._overload.end.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cbegin() {
        const __result = this._overload.cbegin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cend() {
        const __result = this._overload.cend.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    Size() {
        const __result = this._overload.Size.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Length() {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Lower() {
        const __result = this._overload.Lower.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Upper() {
        const __result = this._overload.Upper.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEmpty() {
        const __result = this._overload.IsEmpty.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Exchange(I, J) {
        const __result = this._overload.Exchange.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static delNode(theNode, theAl) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        const __result = __oc.TDF_LabelSequence.delNode.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    Clear(theAllocator) {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Assign(theOther) {
        const __result = this._overload.Assign.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_LabelSequence({ __from: __result });
    }
    Split(theIndex, theSeq) {
        const __result = this._overload.Split.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    First() {
        const __result = this._overload.First.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    ChangeFirst() {
        const __result = this._overload.ChangeFirst.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    Last() {
        const __result = this._overload.Last.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    ChangeLast() {
        const __result = this._overload.ChangeLast.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    Value(theIndex) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    ChangeValue(theIndex) {
        const __result = this._overload.ChangeValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    SetValue(theIndex, theItem) {
        const __result = this._overload.SetValue.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Remove(theIndex) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        return __determine_method_overload(2, "Remove", "", null, false).apply(this, arguments);
    }
    Append(theItem) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        return __determine_method_overload(2, "Append", "", null, false).apply(this, arguments);
    }
    Prepend(theItem) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        return __determine_method_overload(2, "Prepend", "", null, false).apply(this, arguments);
    }
    InsertBefore(theIndex, theItem) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        return __determine_method_overload(2, "InsertBefore", "", null, false).apply(this, arguments);
    }
    InsertAfter(theIndex, theSeq) {
        const __oc = TDF_LabelSequence.prototype.getOC();
        return __determine_method_overload(2, "InsertAfter", "", null, false).apply(this, arguments);
    }
}
export class TDocStd_Application {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TDocStd_Application(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_NewDocument_0() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[1]) instanceof (Handle_CDM_Document));
        return match ? "NewDocument_1" : 0;
    }
    /** @internal */
    __determine_method_overload_NewDocument_1() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document));
        return match ? "NewDocument_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Open_0() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Handle_PCDM_ReaderFilter) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Open_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Open_1() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Open_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Open_2() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Handle_PCDM_ReaderFilter) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "Open_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Open_3() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[1]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Open_4" : 0;
    }
    /** @internal */
    __determine_method_overload_SaveAs_0() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "SaveAs_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SaveAs_1() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "SaveAs_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SaveAs_2() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[2]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "SaveAs_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SaveAs_3() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (function Object() { [native, code]; }) && _wrap_primitive_type(arguments[2]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[3]) instanceof (Message_ProgressRange));
        return match ? "SaveAs_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Save_0() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Message_ProgressRange));
        return match ? "Save_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Save_1() {
        const __oc = TDocStd_Application.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (TCollection_ExtendedString) && _wrap_primitive_type(arguments[2]) instanceof (Message_ProgressRange));
        return match ? "Save_2" : 0;
    }
    IsDriverLoaded() {
        const __result = this._overload.IsDriverLoaded.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Resources() {
        const __result = this._overload.Resources.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Resource_Manager({ __from: __result });
    }
    ResourcesName() {
        const __result = this._overload.ResourcesName.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DefineFormat(theFormat, theDescription, theExtension, theReader, theWriter) {
        const __result = this._overload.DefineFormat.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ReadingFormats(theFormats) {
        const __result = this._overload.ReadingFormats.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    WritingFormats(theFormats) {
        const __result = this._overload.WritingFormats.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NbDocuments() {
        const __result = this._overload.NbDocuments.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetDocument(index, aDoc) {
        const __result = this._overload.GetDocument.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitDocument(aDoc) {
        const __result = this._overload.InitDocument.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Close(aDoc) {
        const __result = this._overload.Close.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsInSession(path) {
        const __result = this._overload.IsInSession.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    OnOpenTransaction(theDoc) {
        const __result = this._overload.OnOpenTransaction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OnCommitTransaction(theDoc) {
        const __result = this._overload.OnCommitTransaction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    OnAbortTransaction(theDoc) {
        const __result = this._overload.OnAbortTransaction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static get_type_name() {
        const __oc = TDocStd_Application.prototype.getOC();
        const __result = __oc.TDocStd_Application.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = TDocStd_Application.prototype.getOC();
        const __result = __oc.TDocStd_Application.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    NewDocument(format, aDoc) {
        const __oc = TDocStd_Application.prototype.getOC();
        return __determine_method_overload(2, "NewDocument", "", null, false).apply(this, arguments);
    }
    Open(thePath, theDoc, theFilter, theRange) {
        const __oc = TDocStd_Application.prototype.getOC();
        return __determine_method_overload(4, "Open", "PCDM_ReaderStatus", PCDM_ReaderStatus, false).apply(this, arguments);
    }
    SaveAs(theDoc, path, theRange) {
        const __oc = TDocStd_Application.prototype.getOC();
        return __determine_method_overload(4, "SaveAs", "PCDM_StoreStatus", PCDM_StoreStatus, false).apply(this, arguments);
    }
    Save(theDoc, theRange) {
        const __oc = TDocStd_Application.prototype.getOC();
        return __determine_method_overload(2, "Save", "PCDM_StoreStatus", PCDM_StoreStatus, false).apply(this, arguments);
    }
}
export class Handle_TDocStd_Document {
    constructor() {
        __determine_ctor_overload("Handle_TDocStd_Document", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_Handle_TDocStd_Document_0() {
        const match = arguments.length === 0;
        return match ? "Handle_TDocStd_Document_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_TDocStd_Document_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDocStd_Document));
        return match ? "Handle_TDocStd_Document_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_TDocStd_Document_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document));
        return match ? "Handle_TDocStd_Document_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_Handle_TDocStd_Document_3() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document));
        return match ? "Handle_TDocStd_Document_4" : 0;
    }
    Nullify() {
        const __result = this._overload.Nullify.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsNull() {
        const __result = this._overload.IsNull.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    reset(thePtr) {
        const __result = this._overload.reset.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    get() {
        const __result = this._overload.get.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDocStd_Document({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopExp {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopExp(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_MapShapes_0() {
        const __oc = TopExp.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (__oc.TopAbs_ShapeEnum) && _wrap_primitive_type(arguments[2]) instanceof (TopTools_IndexedMapOfShape));
        return match ? "MapShapes_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_MapShapes_1() {
        const __oc = TopExp.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopTools_IndexedMapOfShape) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "MapShapes_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_MapShapes_2() {
        const __oc = TopExp.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TopTools_MapOfShape) && _wrap_primitive_type(arguments[2]) instanceof (Boolean) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "MapShapes_3" : 0;
    }
    /** @internal */
    static __determine_method_overload_Vertices_0() {
        const __oc = TopExp.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Edge) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[3]) instanceof (Boolean));
        return match ? "Vertices_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Vertices_1() {
        const __oc = TopExp.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Wire) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Vertex) && _wrap_primitive_type(arguments[2]) instanceof (TopoDS_Vertex));
        return match ? "Vertices_2" : 0;
    }
    static MapShapesAndAncestors(S, TS, TA, M) {
        const __oc = TopExp.prototype.getOC();
        const __result = __oc.TopExp.MapShapesAndAncestors.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static MapShapesAndUniqueAncestors(S, TS, TA, M, useOrientation) {
        const __oc = TopExp.prototype.getOC();
        const __result = __oc.TopExp.MapShapesAndUniqueAncestors.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static FirstVertex(E, CumOri) {
        const __oc = TopExp.prototype.getOC();
        const __result = __oc.TopExp.FirstVertex.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    static LastVertex(E, CumOri) {
        const __oc = TopExp.prototype.getOC();
        const __result = __oc.TopExp.LastVertex.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Vertex({ __from: __result });
    }
    static CommonVertex(E1, E2, V) {
        const __oc = TopExp.prototype.getOC();
        const __result = __oc.TopExp.CommonVertex.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static MapShapes(S, T, M) {
        const __oc = TopExp.prototype.getOC();
        return __determine_method_overload_static(__oc, TopExp, "TopExp", 3, "MapShapes", "", null, false).apply(this, arguments);
    }
    static Vertices(E, Vfirst, Vlast, CumOri) {
        const __oc = TopExp.prototype.getOC();
        return __determine_method_overload_static(__oc, TopExp, "TopExp", 2, "Vertices", "", null, false).apply(this, arguments);
    }
}
export class TopExp_Explorer {
    constructor() {
        __determine_ctor_overload("TopExp_Explorer", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TopExp_Explorer_0() {
        const match = arguments.length === 0;
        return match ? "TopExp_Explorer_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopExp_Explorer_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (__oc.TopAbs_ShapeEnum) && _wrap_primitive_type(arguments[2]) instanceof (__oc.TopAbs_ShapeEnum));
        return match ? "TopExp_Explorer_2" : 0;
    }
    Init(S, ToFind, ToAvoid) {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    More() {
        const __result = this._overload.More.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Next() {
        const __result = this._overload.Next.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Current() {
        const __result = this._overload.Current.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    ReInit() {
        const __result = this._overload.ReInit.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ExploredShape() {
        const __result = this._overload.ExploredShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Depth() {
        const __result = this._overload.Depth.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopLoc_Location {
    constructor() {
        __determine_ctor_overload("TopLoc_Location", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TopLoc_Location_0() {
        const match = arguments.length === 0;
        return match ? "TopLoc_Location_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopLoc_Location_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Trsf));
        return match ? "TopLoc_Location_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopLoc_Location_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TopLoc_Datum3D));
        return match ? "TopLoc_Location_3" : 0;
    }
    IsIdentity() {
        const __result = this._overload.IsIdentity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Identity() {
        const __result = this._overload.Identity.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FirstDatum() {
        const __result = this._overload.FirstDatum.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TopLoc_Datum3D({ __from: __result });
    }
    FirstPower() {
        const __result = this._overload.FirstPower.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NextLocation() {
        const __result = this._overload.NextLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    Transformation() {
        const __result = this._overload.Transformation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    Inverted() {
        const __result = this._overload.Inverted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    Multiplied(Other) {
        const __result = this._overload.Multiplied.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    Divided(Other) {
        const __result = this._overload.Divided.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    Predivided(Other) {
        const __result = this._overload.Predivided.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    Powered(pwr) {
        const __result = this._overload.Powered.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    HashCode(theUpperBound) {
        const __result = this._overload.HashCode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEqual(Other) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsDifferent(Other) {
        const __result = this._overload.IsDifferent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ShallowDump(S) {
        const __result = this._overload.ShallowDump.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Clear() {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static ScalePrec() {
        const __oc = TopLoc_Location.prototype.getOC();
        const __result = __oc.TopLoc_Location.ScalePrec.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopTools_ListOfShape {
    constructor() {
        __determine_ctor_overload("TopTools_ListOfShape", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_ListOfShape_0() {
        const match = arguments.length === 0;
        return match ? "TopTools_ListOfShape_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_ListOfShape_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "TopTools_ListOfShape_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_ListOfShape_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_ListOfShape));
        return match ? "TopTools_ListOfShape_3" : 0;
    }
    /** @internal */
    __determine_method_overload_First_0() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "First_1" : 0;
    }
    /** @internal */
    __determine_method_overload_First_1() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "First_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Last_0() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Last_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Last_1() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Last_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Append_0() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Append_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Append_1() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_ListOfShape));
        return match ? "Append_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Prepend_0() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Prepend_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Prepend_1() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_ListOfShape));
        return match ? "Prepend_2" : 0;
    }
    begin() {
        const __result = this._overload.begin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    end() {
        const __result = this._overload.end.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cbegin() {
        const __result = this._overload.cbegin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cend() {
        const __result = this._overload.cend.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    Size() {
        const __result = this._overload.Size.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Assign(theOther) {
        const __result = this._overload.Assign.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_ListOfShape({ __from: __result });
    }
    Clear(theAllocator) {
        const __result = this._overload.Clear.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    RemoveFirst() {
        const __result = this._overload.RemoveFirst.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    First() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        return __determine_method_overload(2, "First", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
    Last() {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        return __determine_method_overload(2, "Last", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
    Append(theItem) {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        return __determine_method_overload(2, "Append", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
    Prepend(theItem) {
        const __oc = TopTools_ListOfShape.prototype.getOC();
        return __determine_method_overload(2, "Prepend", "TopoDS_Shape", TopoDS_Shape, false).apply(this, arguments);
    }
}
export class TopTools_MapOfShape {
    constructor() {
        __determine_ctor_overload("TopTools_MapOfShape", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_MapOfShape_0() {
        const match = arguments.length === 0;
        return match ? "TopTools_MapOfShape_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_MapOfShape_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "TopTools_MapOfShape_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopTools_MapOfShape_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_MapOfShape));
        return match ? "TopTools_MapOfShape_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Contains_0() {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Contains_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Contains_1() {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopTools_MapOfShape));
        return match ? "Contains_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Clear_0() {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Clear_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Clear_1() {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_NCollection_BaseAllocator));
        return match ? "Clear_2" : 0;
    }
    cbegin() {
        const __result = this._overload.cbegin.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    cend() {
        const __result = this._overload.cend.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new any({ __from: __result });
    }
    Exchange(theOther) {
        const __result = this._overload.Exchange.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Assign(theOther) {
        const __result = this._overload.Assign.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopTools_MapOfShape({ __from: __result });
    }
    ReSize(N) {
        const __result = this._overload.ReSize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Add(K) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Added(K) {
        const __result = this._overload.Added.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Remove(K) {
        const __result = this._overload.Remove.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Size() {
        const __result = this._overload.Size.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEqual(theOther) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Union(theLeft, theRight) {
        const __result = this._overload.Union.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Unite(theOther) {
        const __result = this._overload.Unite.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HasIntersection(theMap) {
        const __result = this._overload.HasIntersection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Intersection(theLeft, theRight) {
        const __result = this._overload.Intersection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Intersect(theOther) {
        const __result = this._overload.Intersect.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Subtraction(theLeft, theRight) {
        const __result = this._overload.Subtraction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Subtract(theOther) {
        const __result = this._overload.Subtract.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Difference(theLeft, theRight) {
        const __result = this._overload.Difference.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Differ(theOther) {
        const __result = this._overload.Differ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Contains(K) {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        return __determine_method_overload(2, "Contains", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Clear(doReleaseMemory) {
        const __oc = TopTools_MapOfShape.prototype.getOC();
        return __determine_method_overload(2, "Clear", "", null, false).apply(this, arguments);
    }
}
export class TopoDS {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_Vertex_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Vertex_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Vertex_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Vertex_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Edge_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Edge_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Edge_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Edge_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Wire_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Wire_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Wire_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Wire_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Face_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Face_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Face_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Face_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Shell_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Shell_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Shell_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Shell_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Solid_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Solid_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Solid_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Solid_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_CompSolid_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "CompSolid_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_CompSolid_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "CompSolid_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_Compound_0() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Compound_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_Compound_1() {
        const __oc = TopoDS.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape));
        return match ? "Compound_2" : 0;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static Vertex(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Vertex", "TopoDS_Vertex", TopoDS_Vertex, false).apply(this, arguments);
    }
    static Edge(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Edge", "TopoDS_Edge", TopoDS_Edge, false).apply(this, arguments);
    }
    static Wire(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Wire", "TopoDS_Wire", TopoDS_Wire, false).apply(this, arguments);
    }
    static Face(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Face", "TopoDS_Face", TopoDS_Face, false).apply(this, arguments);
    }
    static Shell(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Shell", "TopoDS_Shell", TopoDS_Shell, false).apply(this, arguments);
    }
    static Solid(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Solid", "TopoDS_Solid", TopoDS_Solid, false).apply(this, arguments);
    }
    static CompSolid(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "CompSolid", "TopoDS_CompSolid", TopoDS_CompSolid, false).apply(this, arguments);
    }
    static Compound(S) {
        const __oc = TopoDS.prototype.getOC();
        return __determine_method_overload_static(__oc, TopoDS, "TopoDS", 2, "Compound", "TopoDS_Compound", TopoDS_Compound, false).apply(this, arguments);
    }
}
export class TopoDS_Iterator {
    constructor() {
        __determine_ctor_overload("TopoDS_Iterator", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_TopoDS_Iterator_0() {
        const match = arguments.length === 0;
        return match ? "TopoDS_Iterator_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_TopoDS_Iterator_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Boolean) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "TopoDS_Iterator_2" : 0;
    }
    Initialize(S, cumOri, cumLoc) {
        const __result = this._overload.Initialize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    More() {
        const __result = this._overload.More.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Next() {
        const __result = this._overload.Next.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Shape {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Shape(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    __determine_method_overload_Location_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Location_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Location_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopLoc_Location) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "Location_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Orientation_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Orientation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Orientation_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (__oc.TopAbs_Orientation));
        return match ? "Orientation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_TShape_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "TShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_TShape_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TopoDS_TShape));
        return match ? "TShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Free_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Free_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Free_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Free_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Locked_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Locked_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Locked_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Locked_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Modified_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Modified_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Modified_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Modified_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Checked_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Checked_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Checked_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Checked_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Orientable_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Orientable_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Orientable_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Orientable_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Closed_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Closed_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Closed_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Closed_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Infinite_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Infinite_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Infinite_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Infinite_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Convex_0() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Convex_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Convex_1() {
        const __oc = TopoDS_Shape.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Boolean));
        return match ? "Convex_2" : 0;
    }
    IsNull() {
        const __result = this._overload.IsNull.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Nullify() {
        const __result = this._overload.Nullify.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Located(theLoc, theRaiseExc) {
        const __result = this._overload.Located.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Oriented(theOrient) {
        const __result = this._overload.Oriented.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    ShapeType() {
        const __result = this._overload.ShapeType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Move(thePosition, theRaiseExc) {
        const __result = this._overload.Move.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Moved(thePosition, theRaiseExc) {
        const __result = this._overload.Moved.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Complement() {
        const __result = this._overload.Complement.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Complemented() {
        const __result = this._overload.Complemented.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    Compose(theOrient) {
        const __result = this._overload.Compose.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Composed(theOrient) {
        const __result = this._overload.Composed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    NbChildren() {
        const __result = this._overload.NbChildren.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsPartner(theOther) {
        const __result = this._overload.IsPartner.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsSame(theOther) {
        const __result = this._overload.IsSame.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsEqual(theOther) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsNotEqual(theOther) {
        const __result = this._overload.IsNotEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    HashCode(theUpperBound) {
        const __result = this._overload.HashCode.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    EmptyCopy() {
        const __result = this._overload.EmptyCopy.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    EmptyCopied() {
        const __result = this._overload.EmptyCopied.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Location() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Location", "TopLoc_Location", TopLoc_Location, false).apply(this, arguments);
    }
    Orientation() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Orientation", "TopAbs_Orientation", __oc.TopAbs_Orientation, true).apply(this, arguments);
    }
    TShape() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "TShape", "Handle_TopoDS_TShape", Handle_TopoDS_TShape, false).apply(this, arguments);
    }
    Free() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Free", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Locked() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Locked", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Modified() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Modified", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Checked() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Checked", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Orientable() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Orientable", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Closed() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Closed", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Infinite() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Infinite", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Convex() {
        const __oc = TopoDS_Shape.prototype.getOC();
        return __determine_method_overload(2, "Convex", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
}
export class TopoDS_Compound extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Compound(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Edge extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Edge(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Face extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Face(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Solid extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Solid(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Vertex extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Vertex(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class TopoDS_Wire extends TopoDS_Shape {
    constructor() {
        super();
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.TopoDS_Wire(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class XCAFDoc_DocumentTool {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.XCAFDoc_DocumentTool(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_GetLengthUnit_0() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (UnitsMethods_LengthUnit));
        return match ? "GetLengthUnit_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_GetLengthUnit_1() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GetLengthUnit_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_SetLengthUnit_0() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetLengthUnit_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_SetLengthUnit_1() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Handle_TDocStd_Document) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (UnitsMethods_LengthUnit));
        return match ? "SetLengthUnit_2" : 0;
    }
    static GetID() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.GetID.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Standard_GUID({ __from: __result });
    }
    static Set(L, IsAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.Set.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_DocumentTool({ __from: __result });
    }
    static IsXCAFDocument(Doc) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.IsXCAFDocument.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static DocLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.DocLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static ShapesLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ShapesLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static ColorsLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ColorsLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static LayersLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.LayersLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static DGTsLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.DGTsLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static MaterialsLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.MaterialsLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static ViewsLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ViewsLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static ClippingPlanesLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ClippingPlanesLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static NotesLabel(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.NotesLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static VisMaterialLabel(theLabel) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.VisMaterialLabel.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static ShapeTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ShapeTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_ShapeTool({ __from: __result });
    }
    static CheckShapeTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckShapeTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ColorTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ColorTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_ColorTool({ __from: __result });
    }
    static CheckColorTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckColorTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static VisMaterialTool(theLabel) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.VisMaterialTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_VisMaterialTool({ __from: __result });
    }
    static CheckVisMaterialTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckVisMaterialTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static LayerTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.LayerTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_LayerTool({ __from: __result });
    }
    static CheckLayerTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckLayerTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static DimTolTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.DimTolTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_DimTolTool({ __from: __result });
    }
    static CheckDimTolTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckDimTolTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static MaterialTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.MaterialTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_MaterialTool({ __from: __result });
    }
    static CheckMaterialTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckMaterialTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ViewTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ViewTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_ViewTool({ __from: __result });
    }
    static CheckViewTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckViewTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static ClippingPlaneTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.ClippingPlaneTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_ClippingPlaneTool({ __from: __result });
    }
    static CheckClippingPlaneTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckClippingPlaneTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static NotesTool(acces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.NotesTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_NotesTool({ __from: __result });
    }
    static CheckNotesTool(theAcces) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.CheckNotesTool.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Init() {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ID() {
        const __result = this._overload.ID.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Standard_GUID({ __from: __result });
    }
    AfterRetrieval(forceIt) {
        const __result = this._overload.AfterRetrieval.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_name() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        const __result = __oc.XCAFDoc_DocumentTool.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    NewEmpty() {
        const __result = this._overload.NewEmpty.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TDF_Attribute({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static GetLengthUnit(theDoc, theResut, theBaseUnit) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        return __determine_method_overload_static(__oc, XCAFDoc_DocumentTool, "XCAFDoc_DocumentTool", 2, "GetLengthUnit", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static SetLengthUnit(theDoc, theUnitValue) {
        const __oc = XCAFDoc_DocumentTool.prototype.getOC();
        return __determine_method_overload_static(__oc, XCAFDoc_DocumentTool, "XCAFDoc_DocumentTool", 2, "SetLengthUnit", "", null, false).apply(this, arguments);
    }
}
export class XCAFDoc_ShapeTool {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.XCAFDoc_ShapeTool(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    /** @internal */
    static __determine_method_overload_IsSubShape_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label));
        return match ? "IsSubShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsSubShape_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape));
        return match ? "IsSubShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_FindShape_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "FindShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_FindShape_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "FindShape_2" : 0;
    }
    /** @internal */
    static __determine_method_overload_GetShape_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape));
        return match ? "GetShape_1" : 0;
    }
    /** @internal */
    static __determine_method_overload_GetShape_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label));
        return match ? "GetShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_AddComponent_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[2]) instanceof (TopLoc_Location));
        return match ? "AddComponent_1" : 0;
    }
    /** @internal */
    __determine_method_overload_AddComponent_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "AddComponent_2" : 0;
    }
    /** @internal */
    __determine_method_overload_AddSubShape_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape));
        return match ? "AddSubShape_1" : 0;
    }
    /** @internal */
    __determine_method_overload_AddSubShape_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[2]) instanceof (TDF_Label));
        return match ? "AddSubShape_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetExternRefs_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TColStd_SequenceOfHAsciiString));
        return match ? "SetExternRefs_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetExternRefs_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (TColStd_SequenceOfHAsciiString));
        return match ? "SetExternRefs_2" : 0;
    }
    /** @internal */
    __determine_method_overload_GetNamedProperties_0() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TDF_Label) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "GetNamedProperties_1" : 0;
    }
    /** @internal */
    __determine_method_overload_GetNamedProperties_1() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (TopoDS_Shape) && _wrap_primitive_type(arguments[1]) instanceof (Boolean));
        return match ? "GetNamedProperties_2" : 0;
    }
    static GetID() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetID.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Standard_GUID({ __from: __result });
    }
    static Set(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.Set.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_ShapeTool({ __from: __result });
    }
    IsTopLevel(L) {
        const __result = this._overload.IsTopLevel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsFree(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsFree.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsShape(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsShape.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsSimpleShape(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsSimpleShape.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsReference(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsReference.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsAssembly(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsAssembly.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsComponent(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsComponent.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static IsCompound(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsCompound.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SearchUsingMap(S, L, findWithoutLoc, findSubshape) {
        const __result = this._overload.SearchUsingMap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Search(S, L, findInstance, findComponent, findSubshape) {
        const __result = this._overload.Search.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    NewShape() {
        const __result = this._overload.NewShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    SetShape(L, S) {
        const __result = this._overload.SetShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    AddShape(S, makeAssembly, makePrepare) {
        const __result = this._overload.AddShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    RemoveShape(L, removeCompletely) {
        const __result = this._overload.RemoveShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Init() {
        const __result = this._overload.Init.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static SetAutoNaming(V) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.SetAutoNaming.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    static AutoNaming() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.AutoNaming.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    ComputeShapes(L) {
        const __result = this._overload.ComputeShapes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ComputeSimpleShapes() {
        const __result = this._overload.ComputeSimpleShapes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetShapes(Labels) {
        const __result = this._overload.GetShapes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetFreeShapes(FreeLabels) {
        const __result = this._overload.GetFreeShapes.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static GetUsers(L, Labels, getsubchilds) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetUsers.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetLocation(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetLocation.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new TopLoc_Location({ __from: __result });
    }
    static GetReferredShape(L, Label) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetReferredShape.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static NbComponents(L, getsubchilds) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.NbComponents.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetComponents(L, Labels, getsubchilds) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetComponents.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    RemoveComponent(comp) {
        const __result = this._overload.RemoveComponent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    UpdateAssemblies() {
        const __result = this._overload.UpdateAssemblies.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    FindSubShape(shapeL, sub, L) {
        const __result = this._overload.FindSubShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FindMainShapeUsingMap(sub) {
        const __result = this._overload.FindMainShapeUsingMap.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    FindMainShape(sub) {
        const __result = this._overload.FindMainShape.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static GetSubShapes(L, Labels) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetSubShapes.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    BaseLabel() {
        const __result = this._overload.BaseLabel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TDF_Label({ __from: __result });
    }
    static DumpShape(theDumpLog, L, level, deep) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.DumpShape.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    ID() {
        const __result = this._overload.ID.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Standard_GUID({ __from: __result });
    }
    static IsExternRef(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.IsExternRef.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetExternRefs(L, SHAS) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetExternRefs.apply(__oc, Array.from(arguments).map(a => a._overload || a));
    }
    SetSHUO(Labels, MainSHUOAttr) {
        const __result = this._overload.SetSHUO.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetSHUO(SHUOLabel, aSHUOAttr) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetSHUO.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetAllComponentSHUO(CompLabel, SHUOAttrs) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetAllComponentSHUO.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetSHUOUpperUsage(NextUsageL, Labels) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetSHUOUpperUsage.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static GetSHUONextUsage(UpperUsageL, Labels) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.GetSHUONextUsage.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    RemoveSHUO(SHUOLabel) {
        const __result = this._overload.RemoveSHUO.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    FindComponent(theShape, Labels) {
        const __result = this._overload.FindComponent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetSHUOInstance(theSHUO) {
        const __result = this._overload.GetSHUOInstance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new TopoDS_Shape({ __from: __result });
    }
    SetInstanceSHUO(theShape) {
        const __result = this._overload.SetInstanceSHUO.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_XCAFDoc_GraphNode({ __from: __result });
    }
    GetAllSHUOInstances(theSHUO, theSHUOShapeSeq) {
        const __result = this._overload.GetAllSHUOInstances.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static FindSHUO(Labels, theSHUOAttr) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.FindSHUO.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Expand(Shape) {
        const __result = this._overload.Expand.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static get_type_name() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.get_type_name.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    static get_type_descriptor() {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        const __result = __oc.XCAFDoc_ShapeTool.get_type_descriptor.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    DynamicType() {
        const __result = this._overload.DynamicType.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_Standard_Type({ __from: __result });
    }
    NewEmpty() {
        const __result = this._overload.NewEmpty.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new Handle_TDF_Attribute({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    static IsSubShape(L) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload_static(__oc, XCAFDoc_ShapeTool, "XCAFDoc_ShapeTool", 2, "IsSubShape", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    FindShape(S, L, findInstance) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload(2, "FindShape", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    static GetShape(L, S) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload_static(__oc, XCAFDoc_ShapeTool, "XCAFDoc_ShapeTool", 2, "GetShape", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    AddComponent(assembly, comp, Loc) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload(2, "AddComponent", "TDF_Label", TDF_Label, false).apply(this, arguments);
    }
    AddSubShape(shapeL, sub) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload(2, "AddSubShape", "TDF_Label", TDF_Label, false).apply(this, arguments);
    }
    SetExternRefs(SHAS) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload(2, "SetExternRefs", "TDF_Label", TDF_Label, false).apply(this, arguments);
    }
    GetNamedProperties(theLabel, theToCreate) {
        const __oc = XCAFDoc_ShapeTool.prototype.getOC();
        return __determine_method_overload(2, "GetNamedProperties", "Handle_TDataStd_NamedData", Handle_TDataStd_NamedData, false).apply(this, arguments);
    }
}
export class gce_MakeCylinder {
    constructor() {
        __determine_ctor_overload("gce_MakeCylinder", 6).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_0() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gce_MakeCylinder_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "gce_MakeCylinder_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Cylinder) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gce_MakeCylinder_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[2]) instanceof (gp_Pnt));
        return match ? "gce_MakeCylinder_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_4() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gce_MakeCylinder_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gce_MakeCylinder_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Circ));
        return match ? "gce_MakeCylinder_6" : 0;
    }
    Value() {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Cylinder({ __from: __result });
    }
    Operator() {
        const __result = this._overload.Operator.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Cylinder({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class gp_Ax1 {
    constructor() {
        __determine_ctor_overload("gp_Ax1", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax1_0() {
        const match = arguments.length === 0;
        return match ? "gp_Ax1_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax1_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "gp_Ax1_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Ax1.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    SetDirection(theV) {
        const __result = this._overload.SetDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    IsCoaxial(Other, AngularTolerance, LinearTolerance) {
        const __result = this._overload.IsCoaxial.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsNormal(theOther, theAngularTolerance) {
        const __result = this._overload.IsNormal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpposite(theOther, theAngularTolerance) {
        const __result = this._overload.IsOpposite.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsParallel(theOther, theAngularTolerance) {
        const __result = this._overload.IsParallel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Rotate(theA1, theAngRad) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAngRad) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Mirror(P) {
        const __oc = gp_Ax1.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(P) {
        const __oc = gp_Ax1.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Ax1", gp_Ax1, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Ax1.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Ax1.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Ax1", gp_Ax1, false).apply(this, arguments);
    }
}
export class gp_Ax2 {
    constructor() {
        __determine_ctor_overload("gp_Ax2", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax2_0() {
        const match = arguments.length === 0;
        return match ? "gp_Ax2_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax2_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir) && _wrap_primitive_type(arguments[2]) instanceof (gp_Dir));
        return match ? "gp_Ax2_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax2_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "gp_Ax2_3" : 0;
    }
    /** @internal */
    __determine_method_overload_IsCoplanar_0() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "IsCoplanar_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsCoplanar_1() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "IsCoplanar_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Ax2.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    SetAxis(A1) {
        const __result = this._overload.SetAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDirection(V) {
        const __result = this._overload.SetDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXDirection(theVx) {
        const __result = this._overload.SetXDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetYDirection(theVy) {
        const __result = this._overload.SetYDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Axis() {
        const __result = this._overload.Axis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    XDirection() {
        const __result = this._overload.XDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    YDirection() {
        const __result = this._overload.YDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsCoplanar(Other, LinearTolerance, AngularTolerance) {
        const __oc = gp_Ax2.prototype.getOC();
        return __determine_method_overload(2, "IsCoplanar", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Mirror(P) {
        const __oc = gp_Ax2.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(P) {
        const __oc = gp_Ax2.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Ax2", gp_Ax2, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Ax2.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Ax2.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Ax2", gp_Ax2, false).apply(this, arguments);
    }
}
export class gp_Ax3 {
    constructor() {
        __determine_ctor_overload("gp_Ax3", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax3_0() {
        const match = arguments.length === 0;
        return match ? "gp_Ax3_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax3_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "gp_Ax3_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax3_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir) && _wrap_primitive_type(arguments[2]) instanceof (gp_Dir));
        return match ? "gp_Ax3_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Ax3_3() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "gp_Ax3_4" : 0;
    }
    /** @internal */
    __determine_method_overload_IsCoplanar_0() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax3) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "IsCoplanar_1" : 0;
    }
    /** @internal */
    __determine_method_overload_IsCoplanar_1() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "IsCoplanar_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Ax3.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    XReverse() {
        const __result = this._overload.XReverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    YReverse() {
        const __result = this._overload.YReverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    ZReverse() {
        const __result = this._overload.ZReverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetAxis(theA1) {
        const __result = this._overload.SetAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDirection(theV) {
        const __result = this._overload.SetDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXDirection(theVx) {
        const __result = this._overload.SetXDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetYDirection(theVy) {
        const __result = this._overload.SetYDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Axis() {
        const __result = this._overload.Axis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Ax2() {
        const __result = this._overload.Ax2.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2({ __from: __result });
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    XDirection() {
        const __result = this._overload.XDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    YDirection() {
        const __result = this._overload.YDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Direct() {
        const __result = this._overload.Direct.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax3({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax3({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax3({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsCoplanar(theOther, theLinearTolerance, theAngularTolerance) {
        const __oc = gp_Ax3.prototype.getOC();
        return __determine_method_overload(2, "IsCoplanar", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Ax3.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Ax3.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Ax3", gp_Ax3, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Ax3.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Ax3.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Ax3", gp_Ax3, false).apply(this, arguments);
    }
}
export class gp_Circ {
    constructor() {
        __determine_ctor_overload("gp_Circ", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Circ_0() {
        const match = arguments.length === 0;
        return match ? "gp_Circ_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Circ_1() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gp_Circ_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Circ.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    SetAxis(theA1) {
        const __result = this._overload.SetAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPosition(theA2) {
        const __result = this._overload.SetPosition.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetRadius(theRadius) {
        const __result = this._overload.SetRadius.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Area() {
        const __result = this._overload.Area.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Axis() {
        const __result = this._overload.Axis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Length() {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Position() {
        const __result = this._overload.Position.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2({ __from: __result });
    }
    Radius() {
        const __result = this._overload.Radius.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    XAxis() {
        const __result = this._overload.XAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    YAxis() {
        const __result = this._overload.YAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Distance(theP) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareDistance(theP) {
        const __result = this._overload.SquareDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Contains(theP, theLinearTolerance) {
        const __result = this._overload.Contains.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Mirror(theP) {
        const __oc = gp_Circ.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Circ.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Circ", gp_Circ, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Circ.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Circ.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Circ", gp_Circ, false).apply(this, arguments);
    }
}
export class gp_Circ2d {
    constructor() {
        __determine_ctor_overload("gp_Circ2d", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Circ2d_0() {
        const match = arguments.length === 0;
        return match ? "gp_Circ2d_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Circ2d_1() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Boolean));
        return match ? "gp_Circ2d_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Circ2d_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax22d) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gp_Circ2d_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Circ2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translated_2" : 0;
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXAxis(theA) {
        const __result = this._overload.SetXAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetAxis(theA) {
        const __result = this._overload.SetAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetYAxis(theA) {
        const __result = this._overload.SetYAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetRadius(theRadius) {
        const __result = this._overload.SetRadius.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Area() {
        const __result = this._overload.Area.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Coefficients(theA, theB, theC, theD, theE, theF) {
        const __result = this._overload.Coefficients.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Contains(theP, theLinearTolerance) {
        const __result = this._overload.Contains.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Distance(theP) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareDistance(theP) {
        const __result = this._overload.SquareDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Length() {
        const __result = this._overload.Length.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    Radius() {
        const __result = this._overload.Radius.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Axis() {
        const __result = this._overload.Axis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax22d({ __from: __result });
    }
    Position() {
        const __result = this._overload.Position.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax22d({ __from: __result });
    }
    XAxis() {
        const __result = this._overload.XAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2d({ __from: __result });
    }
    YAxis() {
        const __result = this._overload.YAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2d({ __from: __result });
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    IsDirect() {
        const __result = this._overload.IsDirect.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Rotate(theP, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theP, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Circ2d({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Mirror(theP) {
        const __oc = gp_Circ2d.prototype.getOC();
        return __determine_method_overload(2, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Circ2d.prototype.getOC();
        return __determine_method_overload(2, "Mirrored", "gp_Circ2d", gp_Circ2d, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Circ2d.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Circ2d.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Circ2d", gp_Circ2d, false).apply(this, arguments);
    }
}
export class gp_Dir {
    constructor() {
        __determine_ctor_overload("gp_Dir", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Dir_0() {
        const match = arguments.length === 0;
        return match ? "gp_Dir_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Dir_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "gp_Dir_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Dir_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XYZ));
        return match ? "gp_Dir_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Dir_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "gp_Dir_4" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_0() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetCoord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_1() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetCoord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_0() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Coord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_1() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Coord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Dir));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Dir));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Dir.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    SetX(theX) {
        const __result = this._overload.SetX.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetY(theY) {
        const __result = this._overload.SetY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetZ(theZ) {
        const __result = this._overload.SetZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXYZ(theCoord) {
        const __result = this._overload.SetXYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Z() {
        const __result = this._overload.Z.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    XYZ() {
        const __result = this._overload.XYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XYZ({ __from: __result });
    }
    IsEqual(theOther, theAngularTolerance) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsNormal(theOther, theAngularTolerance) {
        const __result = this._overload.IsNormal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpposite(theOther, theAngularTolerance) {
        const __result = this._overload.IsOpposite.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsParallel(theOther, theAngularTolerance) {
        const __result = this._overload.IsParallel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    AngleWithRef(theOther, theVRef) {
        const __result = this._overload.AngleWithRef.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Cross(theRight) {
        const __result = this._overload.Cross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Crossed(theRight) {
        const __result = this._overload.Crossed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    CrossCross(theV1, theV2) {
        const __result = this._overload.CrossCross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    CrossCrossed(theV1, theV2) {
        const __result = this._overload.CrossCrossed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Dot(theOther) {
        const __result = this._overload.Dot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DotCross(theV1, theV2) {
        const __result = this._overload.DotCross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetCoord(theIndex, theXi) {
        const __oc = gp_Dir.prototype.getOC();
        return __determine_method_overload(2, "SetCoord", "", null, false).apply(this, arguments);
    }
    Coord(theIndex) {
        const __oc = gp_Dir.prototype.getOC();
        return __determine_method_overload(2, "Coord", "Standard_Real", Number, true).apply(this, arguments);
    }
    Mirror(theV) {
        const __oc = gp_Dir.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theV) {
        const __oc = gp_Dir.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Dir", gp_Dir, false).apply(this, arguments);
    }
}
export class gp_Lin {
    constructor() {
        __determine_ctor_overload("gp_Lin", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin_0() {
        const match = arguments.length === 0;
        return match ? "gp_Lin_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "gp_Lin_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "gp_Lin_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Distance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "Distance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "SquareDistance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "SquareDistance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Lin.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    SetDirection(theV) {
        const __result = this._overload.SetDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPosition(theA1) {
        const __result = this._overload.SetPosition.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Position() {
        const __result = this._overload.Position.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Contains(theP, theLinearTolerance) {
        const __result = this._overload.Contains.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Normal(theP) {
        const __result = this._overload.Normal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Distance(theP) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(2, "Distance", "Standard_Real", Number, true).apply(this, arguments);
    }
    SquareDistance(theP) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(2, "SquareDistance", "Standard_Real", Number, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Lin", gp_Lin, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Lin.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Lin", gp_Lin, false).apply(this, arguments);
    }
}
export class gp_Lin2d {
    constructor() {
        __determine_ctor_overload("gp_Lin2d", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin2d_0() {
        const match = arguments.length === 0;
        return match ? "gp_Lin2d_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin2d_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "gp_Lin2d_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin2d_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir2d));
        return match ? "gp_Lin2d_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Lin2d_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "gp_Lin2d_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Distance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin2d));
        return match ? "Distance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "SquareDistance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin2d));
        return match ? "SquareDistance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Lin2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translated_2" : 0;
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    SetDirection(theV) {
        const __result = this._overload.SetDirection.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theP) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPosition(theA) {
        const __result = this._overload.SetPosition.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Coefficients(theA, theB, theC) {
        const __result = this._overload.Coefficients.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Direction() {
        const __result = this._overload.Direction.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Dir2d({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    Position() {
        const __result = this._overload.Position.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax2d({ __from: __result });
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Contains(theP, theLinearTolerance) {
        const __result = this._overload.Contains.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Normal(theP) {
        const __result = this._overload.Normal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    Rotate(theP, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theP, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Lin2d({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Distance(theP) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "Distance", "Standard_Real", Number, true).apply(this, arguments);
    }
    SquareDistance(theP) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "SquareDistance", "Standard_Real", Number, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "Mirrored", "gp_Lin2d", gp_Lin2d, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Lin2d.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Lin2d", gp_Lin2d, false).apply(this, arguments);
    }
}
export class gp_Pln {
    constructor() {
        __determine_ctor_overload("gp_Pln", 4).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pln_0() {
        const match = arguments.length === 0;
        return match ? "gp_Pln_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pln_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax3));
        return match ? "gp_Pln_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pln_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Dir));
        return match ? "gp_Pln_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pln_3() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "gp_Pln_4" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Distance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "Distance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Distance_2() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln));
        return match ? "Distance_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "SquareDistance_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin));
        return match ? "SquareDistance_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SquareDistance_2() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pln));
        return match ? "SquareDistance_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Contains_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Contains_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Contains_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Lin) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Contains_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Pln.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    Coefficients(theA, theB, theC, theD) {
        const __result = this._overload.Coefficients.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetAxis(theA1) {
        const __result = this._overload.SetAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetLocation(theLoc) {
        const __result = this._overload.SetLocation.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetPosition(theA3) {
        const __result = this._overload.SetPosition.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    UReverse() {
        const __result = this._overload.UReverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    VReverse() {
        const __result = this._overload.VReverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Direct() {
        const __result = this._overload.Direct.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Axis() {
        const __result = this._overload.Axis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Location() {
        const __result = this._overload.Location.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Position() {
        const __result = this._overload.Position.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax3({ __from: __result });
    }
    XAxis() {
        const __result = this._overload.XAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    YAxis() {
        const __result = this._overload.YAxis.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Ax1({ __from: __result });
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pln({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pln({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pln({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Distance(theP) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(3, "Distance", "Standard_Real", Number, true).apply(this, arguments);
    }
    SquareDistance(theP) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(3, "SquareDistance", "Standard_Real", Number, true).apply(this, arguments);
    }
    Contains(theP, theLinearTolerance) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(2, "Contains", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Pln", gp_Pln, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Pln.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Pln", gp_Pln, false).apply(this, arguments);
    }
}
export class gp_Pnt {
    constructor() {
        __determine_ctor_overload("gp_Pnt", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt_0() {
        const match = arguments.length === 0;
        return match ? "gp_Pnt_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XYZ));
        return match ? "gp_Pnt_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt_2() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "gp_Pnt_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetCoord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetCoord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Coord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Coord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_2() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Coord_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Pnt.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "Translated_2" : 0;
    }
    SetX(theX) {
        const __result = this._overload.SetX.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetY(theY) {
        const __result = this._overload.SetY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetZ(theZ) {
        const __result = this._overload.SetZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXYZ(theCoord) {
        const __result = this._overload.SetXYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Z() {
        const __result = this._overload.Z.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    XYZ() {
        const __result = this._overload.XYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XYZ({ __from: __result });
    }
    ChangeCoord() {
        const __result = this._overload.ChangeCoord.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XYZ({ __from: __result });
    }
    BaryCenter(theAlpha, theP, theBeta) {
        const __result = this._overload.BaryCenter.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsEqual(theOther, theLinearTolerance) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Distance(theOther) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareDistance(theOther) {
        const __result = this._overload.SquareDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetCoord(theIndex, theXi) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(2, "SetCoord", "", null, false).apply(this, arguments);
    }
    Coord(theIndex) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(3, "Coord", "Standard_Real", Number, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Pnt", gp_Pnt, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Pnt.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Pnt", gp_Pnt, false).apply(this, arguments);
    }
}
export class gp_Pnt2d {
    constructor() {
        __determine_ctor_overload("gp_Pnt2d", 3).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt2d_0() {
        const match = arguments.length === 0;
        return match ? "gp_Pnt2d_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt2d_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XY));
        return match ? "gp_Pnt2d_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Pnt2d_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gp_Pnt2d_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetCoord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetCoord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Coord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "Coord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_2() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "Coord_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2d));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translate_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translate_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translate_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_0() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec2d));
        return match ? "Translated_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Translated_1() {
        const __oc = gp_Pnt2d.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt2d) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt2d));
        return match ? "Translated_2" : 0;
    }
    SetX(theX) {
        const __result = this._overload.SetX.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetY(theY) {
        const __result = this._overload.SetY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXY(theCoord) {
        const __result = this._overload.SetXY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    XY() {
        const __result = this._overload.XY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XY({ __from: __result });
    }
    ChangeCoord() {
        const __result = this._overload.ChangeCoord.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XY({ __from: __result });
    }
    IsEqual(theOther, theLinearTolerance) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Distance(theOther) {
        const __result = this._overload.Distance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareDistance(theOther) {
        const __result = this._overload.SquareDistance.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Rotate(theP, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theP, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    Scale(theP, theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theP, theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Pnt2d({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetCoord(theIndex, theXi) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(2, "SetCoord", "", null, false).apply(this, arguments);
    }
    Coord(theIndex) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(3, "Coord", "Standard_Real", Number, true).apply(this, arguments);
    }
    Mirror(theP) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(2, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theP) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(2, "Mirrored", "gp_Pnt2d", gp_Pnt2d, false).apply(this, arguments);
    }
    Translate(theV) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(2, "Translate", "", null, false).apply(this, arguments);
    }
    Translated(theV) {
        const __oc = gp_Pnt2d.prototype.getOC();
        return __determine_method_overload(2, "Translated", "gp_Pnt2d", gp_Pnt2d, false).apply(this, arguments);
    }
}
export class gp_Quaternion {
    constructor() {
        __determine_ctor_overload("gp_Quaternion", 6).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_0() {
        const match = arguments.length === 0;
        return match ? "gp_Quaternion_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_1() {
        const __oc = this.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "gp_Quaternion_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_2() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec));
        return match ? "gp_Quaternion_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (gp_Vec));
        return match ? "gp_Quaternion_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_4() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "gp_Quaternion_5" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Quaternion_5() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Mat));
        return match ? "gp_Quaternion_6" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRotation_0() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec));
        return match ? "SetRotation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRotation_1() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (gp_Vec));
        return match ? "SetRotation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Set_0() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (Number));
        return match ? "Set_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Set_1() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Quaternion));
        return match ? "Set_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Multiply_0() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Quaternion));
        return match ? "Multiply_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Multiply_1() {
        const __oc = gp_Quaternion.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Multiply_2" : 0;
    }
    IsEqual(theOther) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetVectorAndAngle(theAxis, theAngle) {
        const __result = this._overload.SetVectorAndAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetVectorAndAngle(theAxis, theAngle) {
        const __result = this._overload.GetVectorAndAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMatrix(theMat) {
        const __result = this._overload.SetMatrix.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetMatrix() {
        const __result = this._overload.GetMatrix.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Mat({ __from: __result });
    }
    SetEulerAngles(theOrder, theAlpha, theBeta, theGamma) {
        const __result = this._overload.SetEulerAngles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    GetEulerAngles(theOrder, theAlpha, theBeta, theGamma) {
        const __result = this._overload.GetEulerAngles.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Z() {
        const __result = this._overload.Z.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    W() {
        const __result = this._overload.W.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SetIdent() {
        const __result = this._overload.SetIdent.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Invert() {
        const __result = this._overload.Invert.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Inverted() {
        const __result = this._overload.Inverted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    SquareNorm() {
        const __result = this._overload.SquareNorm.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Norm() {
        const __result = this._overload.Norm.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Scale(theScale) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theScale) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    StabilizeLength() {
        const __result = this._overload.StabilizeLength.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Normalize() {
        const __result = this._overload.Normalize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Normalized() {
        const __result = this._overload.Normalized.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Negated() {
        const __result = this._overload.Negated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Added(theOther) {
        const __result = this._overload.Added.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Subtracted(theOther) {
        const __result = this._overload.Subtracted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Multiplied(theOther) {
        const __result = this._overload.Multiplied.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Quaternion({ __from: __result });
    }
    Add(theOther) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Subtract(theOther) {
        const __result = this._overload.Subtract.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Dot(theOther) {
        const __result = this._overload.Dot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    GetRotationAngle() {
        const __result = this._overload.GetRotationAngle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetRotation(theVecFrom, theVecTo) {
        const __oc = gp_Quaternion.prototype.getOC();
        return __determine_method_overload(2, "SetRotation", "", null, false).apply(this, arguments);
    }
    Set(theX, theY, theZ, theW) {
        const __oc = gp_Quaternion.prototype.getOC();
        return __determine_method_overload(2, "Set", "", null, false).apply(this, arguments);
    }
    Multiply(theOther) {
        const __oc = gp_Quaternion.prototype.getOC();
        return __determine_method_overload(2, "Multiply", "", null, false).apply(this, arguments);
    }
}
export class gp_Trsf {
    constructor() {
        __determine_ctor_overload("gp_Trsf", 2).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Trsf_0() {
        const match = arguments.length === 0;
        return match ? "gp_Trsf_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Trsf_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Trsf2d));
        return match ? "gp_Trsf_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetMirror_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt));
        return match ? "SetMirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetMirror_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "SetMirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetMirror_2() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "SetMirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRotation_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetRotation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetRotation_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Quaternion));
        return match ? "SetRotation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetTransformation_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax3) && _wrap_primitive_type(arguments[1]) instanceof (gp_Ax3));
        return match ? "SetTransformation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetTransformation_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax3));
        return match ? "SetTransformation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetTransformation_2() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Quaternion) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec));
        return match ? "SetTransformation_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetTranslation_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "SetTranslation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetTranslation_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "SetTranslation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_GetRotation_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XYZ) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "GetRotation_1" : 0;
    }
    /** @internal */
    __determine_method_overload_GetRotation_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = arguments.length === 0;
        return match ? "GetRotation_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Transforms_0() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Transforms_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Transforms_1() {
        const __oc = gp_Trsf.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XYZ));
        return match ? "Transforms_2" : 0;
    }
    SetRotationPart(theR) {
        const __result = this._overload.SetRotationPart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetScale(theP, theS) {
        const __result = this._overload.SetScale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetDisplacement(theFromSystem1, theToSystem2) {
        const __result = this._overload.SetDisplacement.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetTranslationPart(theV) {
        const __result = this._overload.SetTranslationPart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetScaleFactor(theS) {
        const __result = this._overload.SetScaleFactor.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetForm(theP) {
        const __result = this._overload.SetForm.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetValues(a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34) {
        const __result = this._overload.SetValues.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    IsNegative() {
        const __result = this._overload.IsNegative.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Form() {
        const __result = this._overload.Form.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_TrsfForm({ __from: __result });
    }
    ScaleFactor() {
        const __result = this._overload.ScaleFactor.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    TranslationPart() {
        const __result = this._overload.TranslationPart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XYZ({ __from: __result });
    }
    VectorialPart() {
        const __result = this._overload.VectorialPart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Mat({ __from: __result });
    }
    HVectorialPart() {
        const __result = this._overload.HVectorialPart.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Mat({ __from: __result });
    }
    Value(theRow, theCol) {
        const __result = this._overload.Value.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Invert() {
        const __result = this._overload.Invert.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Inverted() {
        const __result = this._overload.Inverted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    Multiplied(theT) {
        const __result = this._overload.Multiplied.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    Multiply(theT) {
        const __result = this._overload.Multiply.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    PreMultiply(theT) {
        const __result = this._overload.PreMultiply.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Power(theN) {
        const __result = this._overload.Power.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Powered(theN) {
        const __result = this._overload.Powered.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Trsf({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    InitFromJson(theSStream, theStreamPos) {
        const __result = this._overload.InitFromJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetMirror(theP) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(3, "SetMirror", "", null, false).apply(this, arguments);
    }
    SetRotation(theA1, theAng) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(2, "SetRotation", "", null, false).apply(this, arguments);
    }
    SetTransformation(theFromSystem1, theToSystem2) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(3, "SetTransformation", "", null, false).apply(this, arguments);
    }
    SetTranslation(theV) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(2, "SetTranslation", "", null, false).apply(this, arguments);
    }
    GetRotation(theAxis, theAngle) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(2, "GetRotation", "Standard_Boolean", Boolean, true).apply(this, arguments);
    }
    Transforms(theX, theY, theZ) {
        const __oc = gp_Trsf.prototype.getOC();
        return __determine_method_overload(2, "Transforms", "", null, false).apply(this, arguments);
    }
}
export class gp_Vec {
    constructor() {
        __determine_ctor_overload("gp_Vec", 5).apply(this, arguments);
        const proxy = __create_proxy(this);
        return proxy;
    }
    /** @internal */
    __determine_ctor_overload_gp_Vec_0() {
        const match = arguments.length === 0;
        return match ? "gp_Vec_1" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Vec_1() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Dir));
        return match ? "gp_Vec_2" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Vec_2() {
        const __oc = this.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_XYZ));
        return match ? "gp_Vec_3" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Vec_3() {
        const __oc = this.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "gp_Vec_4" : 0;
    }
    /** @internal */
    __determine_ctor_overload_gp_Vec_4() {
        const __oc = this.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Pnt) && _wrap_primitive_type(arguments[1]) instanceof (gp_Pnt));
        return match ? "gp_Vec_5" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_0() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number));
        return match ? "SetCoord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetCoord_1() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "SetCoord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_0() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number));
        return match ? "Coord_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Coord_1() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (Number) && _wrap_primitive_type(arguments[2]) instanceof (Number));
        return match ? "Coord_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_0() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (7 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[6]) instanceof (gp_Vec));
        return match ? "SetLinearForm_1" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_1() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (6 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[4]) instanceof (Number) && _wrap_primitive_type(arguments[5]) instanceof (gp_Vec));
        return match ? "SetLinearForm_2" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_2() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (5 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[4]) instanceof (gp_Vec));
        return match ? "SetLinearForm_3" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_3() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (4 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (Number) && _wrap_primitive_type(arguments[3]) instanceof (gp_Vec));
        return match ? "SetLinearForm_4" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_4() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (3 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (Number) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[2]) instanceof (gp_Vec));
        return match ? "SetLinearForm_5" : 0;
    }
    /** @internal */
    __determine_method_overload_SetLinearForm_5() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (2 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec) && _wrap_primitive_type(arguments[1]) instanceof (gp_Vec));
        return match ? "SetLinearForm_6" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_0() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Mirror_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_1() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirror_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirror_2() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirror_3" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_0() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Vec));
        return match ? "Mirrored_1" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_1() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax1));
        return match ? "Mirrored_2" : 0;
    }
    /** @internal */
    __determine_method_overload_Mirrored_2() {
        const __oc = gp_Vec.prototype.getOC();
        const match = (1 === arguments.length) && (_wrap_primitive_type(arguments[0]) instanceof (gp_Ax2));
        return match ? "Mirrored_3" : 0;
    }
    SetX(theX) {
        const __result = this._overload.SetX.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetY(theY) {
        const __result = this._overload.SetY.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetZ(theZ) {
        const __result = this._overload.SetZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetXYZ(theCoord) {
        const __result = this._overload.SetXYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    X() {
        const __result = this._overload.X.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Y() {
        const __result = this._overload.Y.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Z() {
        const __result = this._overload.Z.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    XYZ() {
        const __result = this._overload.XYZ.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_XYZ({ __from: __result });
    }
    IsEqual(theOther, theLinearTolerance, theAngularTolerance) {
        const __result = this._overload.IsEqual.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsNormal(theOther, theAngularTolerance) {
        const __result = this._overload.IsNormal.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsOpposite(theOther, theAngularTolerance) {
        const __result = this._overload.IsOpposite.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    IsParallel(theOther, theAngularTolerance) {
        const __result = this._overload.IsParallel.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Angle(theOther) {
        const __result = this._overload.Angle.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    AngleWithRef(theOther, theVRef) {
        const __result = this._overload.AngleWithRef.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Magnitude() {
        const __result = this._overload.Magnitude.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    SquareMagnitude() {
        const __result = this._overload.SquareMagnitude.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Add(theOther) {
        const __result = this._overload.Add.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Added(theOther) {
        const __result = this._overload.Added.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Subtract(theRight) {
        const __result = this._overload.Subtract.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Subtracted(theRight) {
        const __result = this._overload.Subtracted.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Multiply(theScalar) {
        const __result = this._overload.Multiply.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Multiplied(theScalar) {
        const __result = this._overload.Multiplied.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Divide(theScalar) {
        const __result = this._overload.Divide.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Divided(theScalar) {
        const __result = this._overload.Divided.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Cross(theRight) {
        const __result = this._overload.Cross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Crossed(theRight) {
        const __result = this._overload.Crossed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    CrossMagnitude(theRight) {
        const __result = this._overload.CrossMagnitude.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CrossSquareMagnitude(theRight) {
        const __result = this._overload.CrossSquareMagnitude.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    CrossCross(theV1, theV2) {
        const __result = this._overload.CrossCross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    CrossCrossed(theV1, theV2) {
        const __result = this._overload.CrossCrossed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Dot(theOther) {
        const __result = this._overload.Dot.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    DotCross(theV1, theV2) {
        const __result = this._overload.DotCross.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return __result;
    }
    Normalize() {
        const __result = this._overload.Normalize.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Normalized() {
        const __result = this._overload.Normalized.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Reverse() {
        const __result = this._overload.Reverse.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Reversed() {
        const __result = this._overload.Reversed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Rotate(theA1, theAng) {
        const __result = this._overload.Rotate.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Rotated(theA1, theAng) {
        const __result = this._overload.Rotated.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Scale(theS) {
        const __result = this._overload.Scale.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Scaled(theS) {
        const __result = this._overload.Scaled.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    Transform(theT) {
        const __result = this._overload.Transform.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    Transformed(theT) {
        const __result = this._overload.Transformed.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
        return new gp_Vec({ __from: __result });
    }
    DumpJson(theOStream, theDepth) {
        const __result = this._overload.DumpJson.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
    SetCoord(theIndex, theXi) {
        const __oc = gp_Vec.prototype.getOC();
        return __determine_method_overload(2, "SetCoord", "", null, false).apply(this, arguments);
    }
    Coord(theIndex) {
        const __oc = gp_Vec.prototype.getOC();
        return __determine_method_overload(2, "Coord", "Standard_Real", Number, true).apply(this, arguments);
    }
    SetLinearForm(theA1, theV1, theA2, theV2, theA3, theV3, theV4) {
        const __oc = gp_Vec.prototype.getOC();
        return __determine_method_overload(6, "SetLinearForm", "", null, false).apply(this, arguments);
    }
    Mirror(theV) {
        const __oc = gp_Vec.prototype.getOC();
        return __determine_method_overload(3, "Mirror", "", null, false).apply(this, arguments);
    }
    Mirrored(theV) {
        const __oc = gp_Vec.prototype.getOC();
        return __determine_method_overload(3, "Mirrored", "gp_Vec", gp_Vec, false).apply(this, arguments);
    }
}
export class OCJS {
    constructor() {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        else {
            // class may be abstract so an error may be thrown
            try {
                const oc = this.getOC();
                this._overload = new oc.OCJS(...Array.from(arguments).map(a => a._overload || a));
            }
            catch (e) {
            }
        }
    }
    static getStandard_FailureData(exceptionPtr) {
        const __oc = OCJS.prototype.getOC();
        const __result = __oc.OCJS.getStandard_FailureData.apply(__oc, Array.from(arguments).map(a => a._overload || a));
        return new Standard_Failure({ __from: __result });
    }
    delete() {
        const __result = this._overload.delete.apply(this._overload, Array.from(arguments).map(a => a._overload || a));
    }
}
export class FSType {
    constructor(fs) {
        this._fs = fs;
        this.ignorePermissions = fs.ignorePermissions;
        this.trackingDelegate = fs.trackingDelegate;
        this.tracking = fs.tracking;
        this.genericErrors = fs.genericErrors;
    }
    lookupPath(path, opts) {
        return this._fs.lookupPath(path, opts);
    }
    getPath(node) {
        return this._fs.getPath(node);
    }
    isFile(mode) {
        return this._fs.isFile(mode);
    }
    isDir(mode) {
        return this._fs.isDir(mode);
    }
    isLink(mode) {
        return this._fs.isLink(mode);
    }
    isChrdev(mode) {
        return this._fs.isChrdev(mode);
    }
    isBlkdev(mode) {
        return this._fs.isBlkdev(mode);
    }
    isFIFO(mode) {
        return this._fs.isFIFO(mode);
    }
    isSocket(mode) {
        return this._fs.isSocket(mode);
    }
    major(dev) {
        return this._fs.major(dev);
    }
    minor(dev) {
        return this._fs.minor(dev);
    }
    makedev(ma, mi) {
        return this._fs.makedev(ma, mi);
    }
    registerDevice(dev, ops) {
        return this._fs.registerDevice(dev, ops);
    }
    syncfs(...args) {
        return this._fs.syncfs(...args);
    }
    mount(type, opts, mountpoint) {
        return this._fs.mount(type, opts, mountpoint);
    }
    unmount(mountpoint) {
        return this._fs.unmount(mountpoint);
    }
    mkdir(path, mode) {
        return this._fs.mkdir(path, mode);
    }
    mkdev(path, mode, dev) {
        return this._fs.mkdev(path, mode, dev);
    }
    symlink(oldpath, newpath) {
        return this._fs.symlink(oldpath, newpath);
    }
    rename(old_path, new_path) {
        return this._fs.rename(old_path, new_path);
    }
    rmdir(path) {
        return this._fs.rmdir(path);
    }
    readdir(path) {
        return this._fs.readdir(path);
    }
    unlink(path) {
        return this._fs.unlink(path);
    }
    readlink(path) {
        return this._fs.readlink(path);
    }
    stat(path, dontFollow) {
        return this._fs.stat(path, dontFollow);
    }
    lstat(path) {
        return this._fs.lstat(path);
    }
    chmod(path, mode, dontFollow) {
        return this._fs.chmod(path, mode, dontFollow);
    }
    lchmod(path, mode) {
        return this._fs.lchmod(path, mode);
    }
    fchmod(fd, mode) {
        return this._fs.fchmod(fd, mode);
    }
    chown(path, uid, gid, dontFollow) {
        return this._fs.chown(path, uid, gid, dontFollow);
    }
    lchown(path, uid, gid) {
        return this._fs.lchown(path, uid, gid);
    }
    fchown(fd, uid, gid) {
        return this._fs.fchown(fd, uid, gid);
    }
    truncate(path, len) {
        return this._fs.truncate(path, len);
    }
    ftruncate(fd, len) {
        return this._fs.ftruncate(fd, len);
    }
    utime(path, atime, mtime) {
        return this._fs.utime(path, atime, mtime);
    }
    open(path, flags, mode, fd_start, fd_end) {
        return this._fs.open(path, flags, mode, fd_start, fd_end);
    }
    close(stream) {
        return this._fs.close(stream);
    }
    llseek(stream, offset, whence) {
        return this._fs.llseek(stream, offset, whence);
    }
    read(stream, buffer, offset, length, position) {
        return this._fs.read(stream, buffer, offset, length, position);
    }
    write(stream, buffer, offset, length, position, canOwn) {
        return this._fs.write(stream, buffer, offset, length, position, canOwn);
    }
    allocate(stream, offset, length) {
        return this._fs.allocate(stream, offset, length);
    }
    mmap(stream, buffer, offset, length, position, prot, flags) {
        return this._fs.mmap(stream, buffer, offset, length, position, prot, flags);
    }
    ioctl(stream, cmd, arg) {
        return this._fs.ioctl(stream, cmd, arg);
    }
    readFile(...args) {
        return this._fs.readFile(...args);
    }
    writeFile(path, data, opts) {
        return this._fs.writeFile(path, data, opts);
    }
    cwd() {
        return this._fs.cwd();
    }
    chdir(path) {
        return this._fs.chdir(path);
    }
    init(input, output, error) {
        return this._fs.init(input, output, error);
    }
    createLazyFile(parent, name, url, canRead, canWrite) {
        return this._fs.createLazyFile(parent, name, url, canRead, canWrite);
    }
    createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        return this._fs.createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn);
    }
    createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        return this._fs.createDataFile(parent, name, data, canRead, canWrite, canOwn);
    }
    analyzePath(path) {
        return this._fs.analyzePath(path);
    }
}
export class OpenCascadeInstance {
    constructor(origin) {
        this.origin = origin;
        this.BOPAlgo_CellsBuilder = BOPAlgo_CellsBuilder;
        this.BOPAlgo_Splitter = BOPAlgo_Splitter;
        this.BRep_Builder = BRep_Builder;
        this.BRep_Tool = BRep_Tool;
        this.BRepAdaptor_CompCurve = BRepAdaptor_CompCurve;
        this.BRepAdaptor_Curve = BRepAdaptor_Curve;
        this.BRepAdaptor_Surface = BRepAdaptor_Surface;
        this.BRepAlgo_NormalProjection = BRepAlgo_NormalProjection;
        this.BRepAlgoAPI_Common = BRepAlgoAPI_Common;
        this.BRepAlgoAPI_Cut = BRepAlgoAPI_Cut;
        this.BRepAlgoAPI_Fuse = BRepAlgoAPI_Fuse;
        this.BRepAlgoAPI_Splitter = BRepAlgoAPI_Splitter;
        this.BRepBndLib = BRepBndLib;
        this.BRepBuilderAPI_FindPlane = BRepBuilderAPI_FindPlane;
        this.BRepBuilderAPI_MakeEdge = BRepBuilderAPI_MakeEdge;
        this.BRepBuilderAPI_MakeFace = BRepBuilderAPI_MakeFace;
        this.BRepBuilderAPI_MakeVertex = BRepBuilderAPI_MakeVertex;
        this.BRepBuilderAPI_MakeWire = BRepBuilderAPI_MakeWire;
        this.BRepBuilderAPI_Transform = BRepBuilderAPI_Transform;
        this.BRepCheck_Analyzer = BRepCheck_Analyzer;
        this.BRepClass_FaceClassifier = BRepClass_FaceClassifier;
        this.BRepClass3d_SolidClassifier = BRepClass3d_SolidClassifier;
        this.BRepExtrema_DistShapeShape = BRepExtrema_DistShapeShape;
        this.BRepFilletAPI_MakeChamfer = BRepFilletAPI_MakeChamfer;
        this.BRepFilletAPI_MakeFillet = BRepFilletAPI_MakeFillet;
        this.BRepGProp = BRepGProp;
        this.BRepLib_MakeFace = BRepLib_MakeFace;
        this.BRepMesh_IncrementalMesh = BRepMesh_IncrementalMesh;
        this.BRepOffset_Mode = this.origin.BRepOffset_Mode;
        this.BRepOffsetAPI_DraftAngle = BRepOffsetAPI_DraftAngle;
        this.BRepOffsetAPI_MakeOffset = BRepOffsetAPI_MakeOffset;
        this.BRepOffsetAPI_MakeThickSolid = BRepOffsetAPI_MakeThickSolid;
        this.BRepOffsetAPI_ThruSections = BRepOffsetAPI_ThruSections;
        this.BRepPrimAPI_MakeCylinder = BRepPrimAPI_MakeCylinder;
        this.BRepPrimAPI_MakePrism = BRepPrimAPI_MakePrism;
        this.BRepPrimAPI_MakeRevol = BRepPrimAPI_MakeRevol;
        this.BRepPrimAPI_MakeSphere = BRepPrimAPI_MakeSphere;
        this.BRepTools = BRepTools;
        this.BRepTools_WireExplorer = BRepTools_WireExplorer;
        this.Bnd_Box = Bnd_Box;
        this.ChFi2d_FilletAPI = ChFi2d_FilletAPI;
        this.ChFi3d_FilletShape = this.origin.ChFi3d_FilletShape;
        this.Extrema_ExtAlgo = this.origin.Extrema_ExtAlgo;
        this.Extrema_ExtFlag = this.origin.Extrema_ExtFlag;
        this.GC_MakeArcOfCircle = GC_MakeArcOfCircle;
        this.GC_MakeCircle = GC_MakeCircle;
        this.GC_MakeSegment = GC_MakeSegment;
        this.GProp_GProps = GProp_GProps;
        this.GccAna_Circ2d2TanRad = GccAna_Circ2d2TanRad;
        this.GccAna_Lin2d2Tan = GccAna_Lin2d2Tan;
        this.GccEnt_Position = this.origin.GccEnt_Position;
        this.GccEnt_QualifiedCirc = GccEnt_QualifiedCirc;
        this.GccEnt_QualifiedLin = GccEnt_QualifiedLin;
        this.Handle_Geom_Curve = Handle_Geom_Curve;
        this.Geom2d_CartesianPoint = Geom2d_CartesianPoint;
        this.Handle_Geom2d_Point = Handle_Geom2d_Point;
        this.Geom2dAdaptor_Curve = Geom2dAdaptor_Curve;
        this.Geom2dGcc_Circ2d2TanRad = Geom2dGcc_Circ2d2TanRad;
        this.Geom2dGcc_Lin2d2Tan = Geom2dGcc_Lin2d2Tan;
        this.Geom2dGcc_QualifiedCurve = Geom2dGcc_QualifiedCurve;
        this.GeomAPI = GeomAPI;
        this.GeomAbs_CurveType = this.origin.GeomAbs_CurveType;
        this.GeomAbs_JoinType = this.origin.GeomAbs_JoinType;
        this.GeomAbs_SurfaceType = this.origin.GeomAbs_SurfaceType;
        this.GeomLProp_SLProps = GeomLProp_SLProps;
        this.IFSelect_ReturnStatus = this.origin.IFSelect_ReturnStatus;
        this.IntCurvesFace_ShapeIntersector = IntCurvesFace_ShapeIntersector;
        this.IntTools_EdgeEdge = IntTools_EdgeEdge;
        this.Message_ProgressRange = Message_ProgressRange;
        this.Poly_Connect = Poly_Connect;
        this.Precision = Precision;
        this.ProjLib = ProjLib;
        this.Quantity_Color = Quantity_Color;
        this.Quantity_TypeOfColor = this.origin.Quantity_TypeOfColor;
        this.STEPCAFControl_Reader = STEPCAFControl_Reader;
        this.STEPCAFControl_Writer = STEPCAFControl_Writer;
        this.STEPControl_Reader = STEPControl_Reader;
        this.STEPControl_StepModelType = this.origin.STEPControl_StepModelType;
        this.STEPControl_Writer = STEPControl_Writer;
        this.ShapeAnalysis_FreeBounds = ShapeAnalysis_FreeBounds;
        this.ShapeExtend_WireData = ShapeExtend_WireData;
        this.ShapeFix_Face = ShapeFix_Face;
        this.ShapeFix_Shape = ShapeFix_Shape;
        this.ShapeFix_Wire = ShapeFix_Wire;
        this.ShapeUpgrade_UnifySameDomain = ShapeUpgrade_UnifySameDomain;
        this.Standard_Failure = Standard_Failure;
        this.StdPrs_ToolTriangulatedShape = StdPrs_ToolTriangulatedShape;
        this.StlAPI_Writer = StlAPI_Writer;
        this.TColgp_Array1OfDir = TColgp_Array1OfDir;
        this.TCollection_ExtendedString = TCollection_ExtendedString;
        this.TDF_Label = TDF_Label;
        this.TDF_LabelSequence = TDF_LabelSequence;
        this.TDocStd_Application = TDocStd_Application;
        this.Handle_TDocStd_Document = Handle_TDocStd_Document;
        this.TopAbs_Orientation = this.origin.TopAbs_Orientation;
        this.TopAbs_ShapeEnum = this.origin.TopAbs_ShapeEnum;
        this.TopAbs_State = this.origin.TopAbs_State;
        this.TopExp = TopExp;
        this.TopExp_Explorer = TopExp_Explorer;
        this.TopLoc_Location = TopLoc_Location;
        this.TopTools_ListOfShape = TopTools_ListOfShape;
        this.TopTools_MapOfShape = TopTools_MapOfShape;
        this.TopoDS = TopoDS;
        this.TopoDS_Compound = TopoDS_Compound;
        this.TopoDS_Edge = TopoDS_Edge;
        this.TopoDS_Face = TopoDS_Face;
        this.TopoDS_Iterator = TopoDS_Iterator;
        this.TopoDS_Shape = TopoDS_Shape;
        this.TopoDS_Solid = TopoDS_Solid;
        this.TopoDS_Vertex = TopoDS_Vertex;
        this.TopoDS_Wire = TopoDS_Wire;
        this.XCAFDoc_ColorType = this.origin.XCAFDoc_ColorType;
        this.XCAFDoc_DocumentTool = XCAFDoc_DocumentTool;
        this.XCAFDoc_ShapeTool = XCAFDoc_ShapeTool;
        this.gce_MakeCylinder = gce_MakeCylinder;
        this.gp_Ax1 = gp_Ax1;
        this.gp_Ax2 = gp_Ax2;
        this.gp_Ax3 = gp_Ax3;
        this.gp_Circ = gp_Circ;
        this.gp_Circ2d = gp_Circ2d;
        this.gp_Dir = gp_Dir;
        this.gp_Lin = gp_Lin;
        this.gp_Lin2d = gp_Lin2d;
        this.gp_Pln = gp_Pln;
        this.gp_Pnt = gp_Pnt;
        this.gp_Pnt2d = gp_Pnt2d;
        this.gp_Quaternion = gp_Quaternion;
        this.gp_Trsf = gp_Trsf;
        this.gp_Vec = gp_Vec;
        this.OCJS = OCJS;
        this.origin = origin;
        this.FS = new FSType(this.origin.FS);
        const getOC = () => { return this.origin; };
        BOPAlgo_CellsBuilder.prototype['getOC'] = getOC;
        BOPAlgo_Splitter.prototype['getOC'] = getOC;
        BRep_Builder.prototype['getOC'] = getOC;
        BRep_Tool.prototype['getOC'] = getOC;
        BRepAdaptor_CompCurve.prototype['getOC'] = getOC;
        BRepAdaptor_Curve.prototype['getOC'] = getOC;
        BRepAdaptor_Surface.prototype['getOC'] = getOC;
        BRepAlgo_NormalProjection.prototype['getOC'] = getOC;
        BRepAlgoAPI_Common.prototype['getOC'] = getOC;
        BRepAlgoAPI_Cut.prototype['getOC'] = getOC;
        BRepAlgoAPI_Fuse.prototype['getOC'] = getOC;
        BRepAlgoAPI_Splitter.prototype['getOC'] = getOC;
        BRepBndLib.prototype['getOC'] = getOC;
        BRepBuilderAPI_FindPlane.prototype['getOC'] = getOC;
        BRepBuilderAPI_MakeEdge.prototype['getOC'] = getOC;
        BRepBuilderAPI_MakeFace.prototype['getOC'] = getOC;
        BRepBuilderAPI_MakeVertex.prototype['getOC'] = getOC;
        BRepBuilderAPI_MakeWire.prototype['getOC'] = getOC;
        BRepBuilderAPI_Transform.prototype['getOC'] = getOC;
        BRepCheck_Analyzer.prototype['getOC'] = getOC;
        BRepClass_FaceClassifier.prototype['getOC'] = getOC;
        BRepClass3d_SolidClassifier.prototype['getOC'] = getOC;
        BRepExtrema_DistShapeShape.prototype['getOC'] = getOC;
        BRepFilletAPI_MakeChamfer.prototype['getOC'] = getOC;
        BRepFilletAPI_MakeFillet.prototype['getOC'] = getOC;
        BRepGProp.prototype['getOC'] = getOC;
        BRepLib_MakeFace.prototype['getOC'] = getOC;
        BRepMesh_IncrementalMesh.prototype['getOC'] = getOC;
        BRepOffsetAPI_DraftAngle.prototype['getOC'] = getOC;
        BRepOffsetAPI_MakeOffset.prototype['getOC'] = getOC;
        BRepOffsetAPI_MakeThickSolid.prototype['getOC'] = getOC;
        BRepOffsetAPI_ThruSections.prototype['getOC'] = getOC;
        BRepPrimAPI_MakeCylinder.prototype['getOC'] = getOC;
        BRepPrimAPI_MakePrism.prototype['getOC'] = getOC;
        BRepPrimAPI_MakeRevol.prototype['getOC'] = getOC;
        BRepPrimAPI_MakeSphere.prototype['getOC'] = getOC;
        BRepTools.prototype['getOC'] = getOC;
        BRepTools_WireExplorer.prototype['getOC'] = getOC;
        Bnd_Box.prototype['getOC'] = getOC;
        ChFi2d_FilletAPI.prototype['getOC'] = getOC;
        GC_MakeArcOfCircle.prototype['getOC'] = getOC;
        GC_MakeCircle.prototype['getOC'] = getOC;
        GC_MakeSegment.prototype['getOC'] = getOC;
        GProp_GProps.prototype['getOC'] = getOC;
        GccAna_Circ2d2TanRad.prototype['getOC'] = getOC;
        GccAna_Lin2d2Tan.prototype['getOC'] = getOC;
        GccEnt_QualifiedCirc.prototype['getOC'] = getOC;
        GccEnt_QualifiedLin.prototype['getOC'] = getOC;
        Handle_Geom_Curve.prototype['getOC'] = getOC;
        Geom2d_CartesianPoint.prototype['getOC'] = getOC;
        Handle_Geom2d_Point.prototype['getOC'] = getOC;
        Geom2dAdaptor_Curve.prototype['getOC'] = getOC;
        Geom2dGcc_Circ2d2TanRad.prototype['getOC'] = getOC;
        Geom2dGcc_Lin2d2Tan.prototype['getOC'] = getOC;
        Geom2dGcc_QualifiedCurve.prototype['getOC'] = getOC;
        GeomAPI.prototype['getOC'] = getOC;
        GeomLProp_SLProps.prototype['getOC'] = getOC;
        IntCurvesFace_ShapeIntersector.prototype['getOC'] = getOC;
        IntTools_EdgeEdge.prototype['getOC'] = getOC;
        Message_ProgressRange.prototype['getOC'] = getOC;
        Poly_Connect.prototype['getOC'] = getOC;
        Precision.prototype['getOC'] = getOC;
        ProjLib.prototype['getOC'] = getOC;
        Quantity_Color.prototype['getOC'] = getOC;
        STEPCAFControl_Reader.prototype['getOC'] = getOC;
        STEPCAFControl_Writer.prototype['getOC'] = getOC;
        STEPControl_Reader.prototype['getOC'] = getOC;
        STEPControl_Writer.prototype['getOC'] = getOC;
        ShapeAnalysis_FreeBounds.prototype['getOC'] = getOC;
        ShapeExtend_WireData.prototype['getOC'] = getOC;
        ShapeFix_Face.prototype['getOC'] = getOC;
        ShapeFix_Shape.prototype['getOC'] = getOC;
        ShapeFix_Wire.prototype['getOC'] = getOC;
        ShapeUpgrade_UnifySameDomain.prototype['getOC'] = getOC;
        Standard_Failure.prototype['getOC'] = getOC;
        StdPrs_ToolTriangulatedShape.prototype['getOC'] = getOC;
        StlAPI_Writer.prototype['getOC'] = getOC;
        TColgp_Array1OfDir.prototype['getOC'] = getOC;
        TCollection_ExtendedString.prototype['getOC'] = getOC;
        TDF_Label.prototype['getOC'] = getOC;
        TDF_LabelSequence.prototype['getOC'] = getOC;
        TDocStd_Application.prototype['getOC'] = getOC;
        Handle_TDocStd_Document.prototype['getOC'] = getOC;
        TopExp.prototype['getOC'] = getOC;
        TopExp_Explorer.prototype['getOC'] = getOC;
        TopLoc_Location.prototype['getOC'] = getOC;
        TopTools_ListOfShape.prototype['getOC'] = getOC;
        TopTools_MapOfShape.prototype['getOC'] = getOC;
        TopoDS.prototype['getOC'] = getOC;
        TopoDS_Iterator.prototype['getOC'] = getOC;
        TopoDS_Shape.prototype['getOC'] = getOC;
        TopoDS_Compound.prototype['getOC'] = getOC;
        TopoDS_Edge.prototype['getOC'] = getOC;
        TopoDS_Face.prototype['getOC'] = getOC;
        TopoDS_Solid.prototype['getOC'] = getOC;
        TopoDS_Vertex.prototype['getOC'] = getOC;
        TopoDS_Wire.prototype['getOC'] = getOC;
        XCAFDoc_DocumentTool.prototype['getOC'] = getOC;
        XCAFDoc_ShapeTool.prototype['getOC'] = getOC;
        gce_MakeCylinder.prototype['getOC'] = getOC;
        gp_Ax1.prototype['getOC'] = getOC;
        gp_Ax2.prototype['getOC'] = getOC;
        gp_Ax3.prototype['getOC'] = getOC;
        gp_Circ.prototype['getOC'] = getOC;
        gp_Circ2d.prototype['getOC'] = getOC;
        gp_Dir.prototype['getOC'] = getOC;
        gp_Lin.prototype['getOC'] = getOC;
        gp_Lin2d.prototype['getOC'] = getOC;
        gp_Pln.prototype['getOC'] = getOC;
        gp_Pnt.prototype['getOC'] = getOC;
        gp_Pnt2d.prototype['getOC'] = getOC;
        gp_Quaternion.prototype['getOC'] = getOC;
        gp_Trsf.prototype['getOC'] = getOC;
        gp_Vec.prototype['getOC'] = getOC;
        OCJS.prototype['getOC'] = getOC;
    }
}
classRegistry.set("BOPAlgo_CellsBuilder", BOPAlgo_CellsBuilder);
classRegistry.set("BOPAlgo_Splitter", BOPAlgo_Splitter);
classRegistry.set("BRep_Builder", BRep_Builder);
classRegistry.set("BRep_Tool", BRep_Tool);
classRegistry.set("BRepAdaptor_CompCurve", BRepAdaptor_CompCurve);
classRegistry.set("BRepAdaptor_Curve", BRepAdaptor_Curve);
classRegistry.set("BRepAdaptor_Surface", BRepAdaptor_Surface);
classRegistry.set("BRepAlgo_NormalProjection", BRepAlgo_NormalProjection);
classRegistry.set("BRepAlgoAPI_Common", BRepAlgoAPI_Common);
classRegistry.set("BRepAlgoAPI_Cut", BRepAlgoAPI_Cut);
classRegistry.set("BRepAlgoAPI_Fuse", BRepAlgoAPI_Fuse);
classRegistry.set("BRepAlgoAPI_Splitter", BRepAlgoAPI_Splitter);
classRegistry.set("BRepBndLib", BRepBndLib);
classRegistry.set("BRepBuilderAPI_FindPlane", BRepBuilderAPI_FindPlane);
classRegistry.set("BRepBuilderAPI_MakeEdge", BRepBuilderAPI_MakeEdge);
classRegistry.set("BRepBuilderAPI_MakeFace", BRepBuilderAPI_MakeFace);
classRegistry.set("BRepBuilderAPI_MakeVertex", BRepBuilderAPI_MakeVertex);
classRegistry.set("BRepBuilderAPI_MakeWire", BRepBuilderAPI_MakeWire);
classRegistry.set("BRepBuilderAPI_Transform", BRepBuilderAPI_Transform);
classRegistry.set("BRepCheck_Analyzer", BRepCheck_Analyzer);
classRegistry.set("BRepClass_FaceClassifier", BRepClass_FaceClassifier);
classRegistry.set("BRepClass3d_SolidClassifier", BRepClass3d_SolidClassifier);
classRegistry.set("BRepExtrema_DistShapeShape", BRepExtrema_DistShapeShape);
classRegistry.set("BRepFilletAPI_MakeChamfer", BRepFilletAPI_MakeChamfer);
classRegistry.set("BRepFilletAPI_MakeFillet", BRepFilletAPI_MakeFillet);
classRegistry.set("BRepGProp", BRepGProp);
classRegistry.set("BRepLib_MakeFace", BRepLib_MakeFace);
classRegistry.set("BRepMesh_IncrementalMesh", BRepMesh_IncrementalMesh);
classRegistry.set("BRepOffsetAPI_DraftAngle", BRepOffsetAPI_DraftAngle);
classRegistry.set("BRepOffsetAPI_MakeOffset", BRepOffsetAPI_MakeOffset);
classRegistry.set("BRepOffsetAPI_MakeThickSolid", BRepOffsetAPI_MakeThickSolid);
classRegistry.set("BRepOffsetAPI_ThruSections", BRepOffsetAPI_ThruSections);
classRegistry.set("BRepPrimAPI_MakeCylinder", BRepPrimAPI_MakeCylinder);
classRegistry.set("BRepPrimAPI_MakePrism", BRepPrimAPI_MakePrism);
classRegistry.set("BRepPrimAPI_MakeRevol", BRepPrimAPI_MakeRevol);
classRegistry.set("BRepPrimAPI_MakeSphere", BRepPrimAPI_MakeSphere);
classRegistry.set("BRepTools", BRepTools);
classRegistry.set("BRepTools_WireExplorer", BRepTools_WireExplorer);
classRegistry.set("Bnd_Box", Bnd_Box);
classRegistry.set("ChFi2d_FilletAPI", ChFi2d_FilletAPI);
classRegistry.set("GC_MakeArcOfCircle", GC_MakeArcOfCircle);
classRegistry.set("GC_MakeCircle", GC_MakeCircle);
classRegistry.set("GC_MakeSegment", GC_MakeSegment);
classRegistry.set("GProp_GProps", GProp_GProps);
classRegistry.set("GccAna_Circ2d2TanRad", GccAna_Circ2d2TanRad);
classRegistry.set("GccAna_Lin2d2Tan", GccAna_Lin2d2Tan);
classRegistry.set("GccEnt_QualifiedCirc", GccEnt_QualifiedCirc);
classRegistry.set("GccEnt_QualifiedLin", GccEnt_QualifiedLin);
classRegistry.set("Handle_Geom_Curve", Handle_Geom_Curve);
classRegistry.set("Geom2d_CartesianPoint", Geom2d_CartesianPoint);
classRegistry.set("Handle_Geom2d_Point", Handle_Geom2d_Point);
classRegistry.set("Geom2dAdaptor_Curve", Geom2dAdaptor_Curve);
classRegistry.set("Geom2dGcc_Circ2d2TanRad", Geom2dGcc_Circ2d2TanRad);
classRegistry.set("Geom2dGcc_Lin2d2Tan", Geom2dGcc_Lin2d2Tan);
classRegistry.set("Geom2dGcc_QualifiedCurve", Geom2dGcc_QualifiedCurve);
classRegistry.set("GeomAPI", GeomAPI);
classRegistry.set("GeomLProp_SLProps", GeomLProp_SLProps);
classRegistry.set("IntCurvesFace_ShapeIntersector", IntCurvesFace_ShapeIntersector);
classRegistry.set("IntTools_EdgeEdge", IntTools_EdgeEdge);
classRegistry.set("Message_ProgressRange", Message_ProgressRange);
classRegistry.set("Poly_Connect", Poly_Connect);
classRegistry.set("Precision", Precision);
classRegistry.set("ProjLib", ProjLib);
classRegistry.set("Quantity_Color", Quantity_Color);
classRegistry.set("STEPCAFControl_Reader", STEPCAFControl_Reader);
classRegistry.set("STEPCAFControl_Writer", STEPCAFControl_Writer);
classRegistry.set("STEPControl_Reader", STEPControl_Reader);
classRegistry.set("STEPControl_Writer", STEPControl_Writer);
classRegistry.set("ShapeAnalysis_FreeBounds", ShapeAnalysis_FreeBounds);
classRegistry.set("ShapeExtend_WireData", ShapeExtend_WireData);
classRegistry.set("ShapeFix_Face", ShapeFix_Face);
classRegistry.set("ShapeFix_Shape", ShapeFix_Shape);
classRegistry.set("ShapeFix_Wire", ShapeFix_Wire);
classRegistry.set("ShapeUpgrade_UnifySameDomain", ShapeUpgrade_UnifySameDomain);
classRegistry.set("Standard_Failure", Standard_Failure);
classRegistry.set("StdPrs_ToolTriangulatedShape", StdPrs_ToolTriangulatedShape);
classRegistry.set("StlAPI_Writer", StlAPI_Writer);
classRegistry.set("TColgp_Array1OfDir", TColgp_Array1OfDir);
classRegistry.set("TCollection_ExtendedString", TCollection_ExtendedString);
classRegistry.set("TDF_Label", TDF_Label);
classRegistry.set("TDF_LabelSequence", TDF_LabelSequence);
classRegistry.set("TDocStd_Application", TDocStd_Application);
classRegistry.set("Handle_TDocStd_Document", Handle_TDocStd_Document);
classRegistry.set("TopExp", TopExp);
classRegistry.set("TopExp_Explorer", TopExp_Explorer);
classRegistry.set("TopLoc_Location", TopLoc_Location);
classRegistry.set("TopTools_ListOfShape", TopTools_ListOfShape);
classRegistry.set("TopTools_MapOfShape", TopTools_MapOfShape);
classRegistry.set("TopoDS", TopoDS);
classRegistry.set("TopoDS_Iterator", TopoDS_Iterator);
classRegistry.set("TopoDS_Shape", TopoDS_Shape);
classRegistry.set("TopoDS_Compound", TopoDS_Compound);
classRegistry.set("TopoDS_Edge", TopoDS_Edge);
classRegistry.set("TopoDS_Face", TopoDS_Face);
classRegistry.set("TopoDS_Solid", TopoDS_Solid);
classRegistry.set("TopoDS_Vertex", TopoDS_Vertex);
classRegistry.set("TopoDS_Wire", TopoDS_Wire);
classRegistry.set("XCAFDoc_DocumentTool", XCAFDoc_DocumentTool);
classRegistry.set("XCAFDoc_ShapeTool", XCAFDoc_ShapeTool);
classRegistry.set("gce_MakeCylinder", gce_MakeCylinder);
classRegistry.set("gp_Ax1", gp_Ax1);
classRegistry.set("gp_Ax2", gp_Ax2);
classRegistry.set("gp_Ax3", gp_Ax3);
classRegistry.set("gp_Circ", gp_Circ);
classRegistry.set("gp_Circ2d", gp_Circ2d);
classRegistry.set("gp_Dir", gp_Dir);
classRegistry.set("gp_Lin", gp_Lin);
classRegistry.set("gp_Lin2d", gp_Lin2d);
classRegistry.set("gp_Pln", gp_Pln);
classRegistry.set("gp_Pnt", gp_Pnt);
classRegistry.set("gp_Pnt2d", gp_Pnt2d);
classRegistry.set("gp_Quaternion", gp_Quaternion);
classRegistry.set("gp_Trsf", gp_Trsf);
classRegistry.set("gp_Vec", gp_Vec);
classRegistry.set("OCJS", OCJS);
function _wrap_primitive_type(value) {
    if (typeof (value) == "string") {
        return new String(value);
    }
    else if (typeof (value) == "number") {
        return new Number(value);
    }
    else if (typeof (value) == "boolean") {
        return new Boolean(value);
    }
    return value;
}
function __create_proxy(instance) {
    const proxy = new Proxy(instance, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            if (!target._overload) {
                return undefined;
            }
            if (typeof prop === 'string' && prop in target._overload) {
                return function (...args) {
                    var _a;
                    const result = target._overload[prop].apply(target._overload, args.map(a => a._overload || a));
                    if (!result) {
                        return undefined;
                    }
                    const returnType = (_a = result.constructor) === null || _a === void 0 ? void 0 : _a.name;
                    if (!returnType) {
                        return result;
                    }
                    const normalizedReturnType = returnType.replace(/_d+$/, "");
                    const clsType = classRegistry.get(normalizedReturnType);
                    if (clsType) {
                        return new clsType({ __from: result });
                    }
                    return result;
                };
            }
            return undefined;
        }
    });
    return proxy;
}
function __determine_ctor_overload(className, constructorsCount) {
    return function () {
        if (arguments.length === 1 && Object.keys(arguments[0])[0] === "__from") {
            this._overload = arguments[0].__from;
            return;
        }
        const oc = this.getOC();
        const args = Array.from(arguments);
        for (let i = 0; i < constructorsCount; i++) {
            const key = "__determine_ctor_overload_" + className + "_" + i;
            const overloadType = this[key].apply(this, args);
            if (overloadType) {
                const typeInializer = oc[overloadType];
                if (!typeInializer) {
                    continue;
                }
                try {
                    this._overload = new typeInializer(...args.map(arg => arg._overload || arg));
                    break;
                }
                catch (e) {
                    console.warn("Constructor overload " + overloadType + " failed:", e.message || e);
                    continue;
                }
            }
        }
        if (!this._overload) {
            for (let i = 1; i <= constructorsCount; i++) {
                const overloadName = className + "_" + i;
                const typeInializer = oc[overloadName];
                if (!typeInializer) {
                    continue;
                }
                try {
                    this._overload = new typeInializer(...args.map(arg => arg._overload || arg));
                    break;
                }
                catch (e) {
                    continue;
                }
            }
        }
        if (!this._overload) {
            throw new Error("No matching constructor overload found for class " + className);
        }
    };
}
function __determine_method_overload(methodsCount, methodName, returnTypeName, returnType, isPrimitiveOrStandardOrEnum) {
    return function () {
        var _a, _b;
        const args = Array.from(arguments);
        for (let i = 0; i < methodsCount; i++) {
            const key = "__determine_method_overload_" + methodName + "_" + i;
            if (!this[key])
                continue;
            const overloadType = this[key].apply(this, args);
            if (overloadType) {
                const fn = this._overload[overloadType];
                if (!fn) {
                    continue;
                }
                try {
                    const __result = fn.apply(this._overload, args.map(arg => arg._overload || arg));
                    if (returnTypeName && returnTypeName !== "void" && !isPrimitiveOrStandardOrEnum) {
                        const __actualName = (_b = (_a = __result === null || __result === void 0 ? void 0 : __result.constructor) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.replace(/_\d+$/, "");
                        const __clsType = __actualName && classRegistry.get(__actualName);
                        return __clsType ? new __clsType({ __from: __result }) : new returnType({ __from: __result });
                    }
                    else {
                        return __result;
                    }
                }
                catch (e) {
                    continue;
                }
            }
        }
        throw new Error("No matching overload found for method " + methodName);
    };
}
function __determine_method_overload_static(oc, classType, className, methodsCount, methodName, returnTypeName, returnType, isPrimitiveOrStandardOrEnum) {
    return function () {
        var _a, _b;
        const args = Array.from(arguments);
        for (let i = 0; i < methodsCount; i++) {
            const key = "__determine_method_overload_" + methodName + "_" + i;
            if (!classType[key])
                continue;
            const overloadType = classType[key].apply(this, args);
            if (overloadType) {
                const fn = oc[className] && oc[className][overloadType];
                if (!fn) {
                    continue;
                }
                try {
                    const __result = fn.apply(oc, args.map(arg => arg._overload || arg));
                    if (returnTypeName && returnTypeName !== "void" && !isPrimitiveOrStandardOrEnum) {
                        const __actualName = (_b = (_a = __result === null || __result === void 0 ? void 0 : __result.constructor) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.replace(/_\d+$/, "");
                        const __clsType = __actualName && classRegistry.get(__actualName);
                        return __clsType ? new __clsType({ __from: __result }) : new returnType({ __from: __result });
                    }
                    else {
                        return __result;
                    }
                }
                catch (e) {
                    continue;
                }
            }
        }
        throw new Error("No matching overload found for method " + methodName);
    };
}
