export declare class Adaptor2d_Curve2d extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor2d_Curve2d;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor2d_Curve2d;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  NbSamples(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom2d_BezierCurve;
  BSpline(): Handle_Geom2d_BSplineCurve;
  delete(): void;
}

export declare class Handle_Adaptor2d_Curve2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor2d_Curve2d): void;
  get(): Adaptor2d_Curve2d;
  delete(): void;
}

  export declare class Handle_Adaptor2d_Curve2d_1 extends Handle_Adaptor2d_Curve2d {
    constructor();
  }

  export declare class Handle_Adaptor2d_Curve2d_2 extends Handle_Adaptor2d_Curve2d {
    constructor(thePtr: Adaptor2d_Curve2d);
  }

  export declare class Handle_Adaptor2d_Curve2d_3 extends Handle_Adaptor2d_Curve2d {
    constructor(theHandle: Handle_Adaptor2d_Curve2d);
  }

  export declare class Handle_Adaptor2d_Curve2d_4 extends Handle_Adaptor2d_Curve2d {
    constructor(theHandle: Handle_Adaptor2d_Curve2d);
  }

export declare class Adaptor3d_Curve extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Curve;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Curve;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom_BezierCurve;
  BSpline(): Handle_Geom_BSplineCurve;
  OffsetCurve(): Handle_Geom_OffsetCurve;
  delete(): void;
}

export declare class Handle_Adaptor3d_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_Curve): void;
  get(): Adaptor3d_Curve;
  delete(): void;
}

  export declare class Handle_Adaptor3d_Curve_1 extends Handle_Adaptor3d_Curve {
    constructor();
  }

  export declare class Handle_Adaptor3d_Curve_2 extends Handle_Adaptor3d_Curve {
    constructor(thePtr: Adaptor3d_Curve);
  }

  export declare class Handle_Adaptor3d_Curve_3 extends Handle_Adaptor3d_Curve {
    constructor(theHandle: Handle_Adaptor3d_Curve);
  }

  export declare class Handle_Adaptor3d_Curve_4 extends Handle_Adaptor3d_Curve {
    constructor(theHandle: Handle_Adaptor3d_Curve);
  }

export declare class Adaptor3d_CurveOnSurface extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Curve;
  Load_1(S: Handle_Adaptor3d_Surface): void;
  Load_2(C: Handle_Adaptor2d_Curve2d): void;
  Load_3(C: Handle_Adaptor2d_Curve2d, S: Handle_Adaptor3d_Surface): void;
  GetCurve(): Handle_Adaptor2d_Curve2d;
  GetSurface(): Handle_Adaptor3d_Surface;
  ChangeCurve(): Handle_Adaptor2d_Curve2d;
  ChangeSurface(): Handle_Adaptor3d_Surface;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Curve;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom_BezierCurve;
  BSpline(): Handle_Geom_BSplineCurve;
  delete(): void;
}

  export declare class Adaptor3d_CurveOnSurface_1 extends Adaptor3d_CurveOnSurface {
    constructor();
  }

  export declare class Adaptor3d_CurveOnSurface_2 extends Adaptor3d_CurveOnSurface {
    constructor(S: Handle_Adaptor3d_Surface);
  }

  export declare class Adaptor3d_CurveOnSurface_3 extends Adaptor3d_CurveOnSurface {
    constructor(C: Handle_Adaptor2d_Curve2d, S: Handle_Adaptor3d_Surface);
  }

export declare class Adaptor3d_Surface extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Surface;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  NbVIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  UIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Graphic3d_ZLayerId, Nv: Graphic3d_ZLayerId): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Graphic3d_ZLayerId;
  NbUPoles(): Graphic3d_ZLayerId;
  VDegree(): Graphic3d_ZLayerId;
  NbVPoles(): Graphic3d_ZLayerId;
  NbUKnots(): Graphic3d_ZLayerId;
  NbVKnots(): Graphic3d_ZLayerId;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): Handle_Geom_BezierSurface;
  BSpline(): Handle_Geom_BSplineSurface;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): Handle_Adaptor3d_Curve;
  BasisSurface(): Handle_Adaptor3d_Surface;
  OffsetValue(): Standard_Real;
  delete(): void;
}

export declare class Handle_Adaptor3d_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_Surface): void;
  get(): Adaptor3d_Surface;
  delete(): void;
}

  export declare class Handle_Adaptor3d_Surface_1 extends Handle_Adaptor3d_Surface {
    constructor();
  }

  export declare class Handle_Adaptor3d_Surface_2 extends Handle_Adaptor3d_Surface {
    constructor(thePtr: Adaptor3d_Surface);
  }

  export declare class Handle_Adaptor3d_Surface_3 extends Handle_Adaptor3d_Surface {
    constructor(theHandle: Handle_Adaptor3d_Surface);
  }

  export declare class Handle_Adaptor3d_Surface_4 extends Handle_Adaptor3d_Surface {
    constructor(theHandle: Handle_Adaptor3d_Surface);
  }

export declare class BOPAlgo_Algo extends BOPAlgo_Options {
  Perform(theRange: Message_ProgressRange): void;
  delete(): void;
}

export declare class BOPAlgo_Builder extends BOPAlgo_BuilderShape {
  Clear(): void;
  PPaveFiller(): BOPAlgo_PPaveFiller;
  PDS(): BOPDS_PDS;
  Context(): Handle_IntTools_Context;
  AddArgument(theShape: TopoDS_Shape): void;
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  PerformWithFiller(theFiller: BOPAlgo_PaveFiller, theRange: Message_ProgressRange): void;
  BuildBOP_1(theObjects: TopTools_ListOfShape, theObjState: TopAbs_State, theTools: TopTools_ListOfShape, theToolsState: TopAbs_State, theRange: Message_ProgressRange, theReport: Handle_Message_Report): void;
  BuildBOP_2(theObjects: TopTools_ListOfShape, theTools: TopTools_ListOfShape, theOperation: BOPAlgo_Operation, theRange: Message_ProgressRange, theReport: Handle_Message_Report): void;
  Images(): TopTools_DataMapOfShapeListOfShape;
  Origins(): TopTools_DataMapOfShapeListOfShape;
  ShapesSD(): TopTools_DataMapOfShapeShape;
  delete(): void;
}

  export declare class BOPAlgo_Builder_1 extends BOPAlgo_Builder {
    constructor();
  }

  export declare class BOPAlgo_Builder_2 extends BOPAlgo_Builder {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

export declare class BOPAlgo_BuilderShape extends BOPAlgo_Algo {
  Shape(): TopoDS_Shape;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(theS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  History(): Handle_BRepTools_History;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  delete(): void;
}

export declare class BOPAlgo_CellsBuilder extends BOPAlgo_Builder {
  Clear(): void;
  AddToResult(theLSToTake: TopTools_ListOfShape, theLSToAvoid: TopTools_ListOfShape, theMaterial: Graphic3d_ZLayerId, theUpdate: Standard_Boolean): void;
  AddAllToResult(theMaterial: Graphic3d_ZLayerId, theUpdate: Standard_Boolean): void;
  RemoveFromResult(theLSToTake: TopTools_ListOfShape, theLSToAvoid: TopTools_ListOfShape): void;
  RemoveAllFromResult(): void;
  RemoveInternalBoundaries(): void;
  GetAllParts(): TopoDS_Shape;
  MakeContainers(): void;
  delete(): void;
}

  export declare class BOPAlgo_CellsBuilder_1 extends BOPAlgo_CellsBuilder {
    constructor();
  }

  export declare class BOPAlgo_CellsBuilder_2 extends BOPAlgo_CellsBuilder {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

export declare class BOPAlgo_Options {
  Allocator(): Handle_NCollection_BaseAllocator;
  Clear(): void;
  AddError(theAlert: Handle_Message_Alert): void;
  AddWarning(theAlert: Handle_Message_Alert): void;
  HasErrors(): Standard_Boolean;
  HasError(theType: Handle_Standard_Type): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  HasWarning(theType: Handle_Standard_Type): Standard_Boolean;
  GetReport(): Handle_Message_Report;
  DumpErrors(theOS: Standard_OStream): void;
  DumpWarnings(theOS: Standard_OStream): void;
  ClearWarnings(): void;
  static GetParallelMode(): Standard_Boolean;
  static SetParallelMode(theNewMode: Standard_Boolean): void;
  SetRunParallel(theFlag: Standard_Boolean): void;
  RunParallel(): Standard_Boolean;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  SetUseOBB(theUseOBB: Standard_Boolean): void;
  UseOBB(): Standard_Boolean;
  delete(): void;
}

  export declare class BOPAlgo_Options_1 extends BOPAlgo_Options {
    constructor();
  }

  export declare class BOPAlgo_Options_2 extends BOPAlgo_Options {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

export declare class BOPAlgo_Splitter extends BOPAlgo_ToolsProvider {
  Perform(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BOPAlgo_Splitter_1 extends BOPAlgo_Splitter {
    constructor();
  }

  export declare class BOPAlgo_Splitter_2 extends BOPAlgo_Splitter {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

export declare class BOPAlgo_ToolsProvider extends BOPAlgo_Builder {
  Clear(): void;
  AddTool(theShape: TopoDS_Shape): void;
  SetTools(theShapes: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  delete(): void;
}

  export declare class BOPAlgo_ToolsProvider_1 extends BOPAlgo_ToolsProvider {
    constructor();
  }

  export declare class BOPAlgo_ToolsProvider_2 extends BOPAlgo_ToolsProvider {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

export declare class BRep_Builder extends TopoDS_Builder {
  constructor();
  MakeFace_1(F: TopoDS_Face): void;
  MakeFace_2(F: TopoDS_Face, S: Handle_Geom_Surface, Tol: Standard_Real): void;
  MakeFace_3(F: TopoDS_Face, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeFace_4(theFace: TopoDS_Face, theTriangulation: Handle_Poly_Triangulation): void;
  MakeFace_5(theFace: TopoDS_Face, theTriangulations: Poly_ListOfTriangulation, theActiveTriangulation: Handle_Poly_Triangulation): void;
  UpdateFace_1(F: TopoDS_Face, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateFace_2(theFace: TopoDS_Face, theTriangulation: Handle_Poly_Triangulation, theToReset: Standard_Boolean): void;
  UpdateFace_3(F: TopoDS_Face, Tol: Standard_Real): void;
  NaturalRestriction(F: TopoDS_Face, N: Standard_Boolean): void;
  MakeEdge_1(E: TopoDS_Edge): void;
  MakeEdge_2(E: TopoDS_Edge, C: Handle_Geom_Curve, Tol: Standard_Real): void;
  MakeEdge_3(E: TopoDS_Edge, C: Handle_Geom_Curve, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeEdge_4(E: TopoDS_Edge, P: Handle_Poly_Polygon3D): void;
  MakeEdge_5(E: TopoDS_Edge, N: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation): void;
  MakeEdge_6(E: TopoDS_Edge, N: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation, L: TopLoc_Location): void;
  UpdateEdge_1(E: TopoDS_Edge, C: Handle_Geom_Curve, Tol: Standard_Real): void;
  UpdateEdge_2(E: TopoDS_Edge, C: Handle_Geom_Curve, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_3(E: TopoDS_Edge, C: Handle_Geom2d_Curve, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_4(E: TopoDS_Edge, C1: Handle_Geom2d_Curve, C2: Handle_Geom2d_Curve, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_5(E: TopoDS_Edge, C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_6(E: TopoDS_Edge, C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_7(E: TopoDS_Edge, C1: Handle_Geom2d_Curve, C2: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_8(E: TopoDS_Edge, C1: Handle_Geom2d_Curve, C2: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_9(E: TopoDS_Edge, P: Handle_Poly_Polygon3D): void;
  UpdateEdge_10(E: TopoDS_Edge, P: Handle_Poly_Polygon3D, L: TopLoc_Location): void;
  UpdateEdge_11(E: TopoDS_Edge, N: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation): void;
  UpdateEdge_12(E: TopoDS_Edge, N: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation, L: TopLoc_Location): void;
  UpdateEdge_13(E: TopoDS_Edge, N1: Handle_Poly_PolygonOnTriangulation, N2: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation): void;
  UpdateEdge_14(E: TopoDS_Edge, N1: Handle_Poly_PolygonOnTriangulation, N2: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation, L: TopLoc_Location): void;
  UpdateEdge_15(E: TopoDS_Edge, P: Handle_Poly_Polygon2D, S: TopoDS_Face): void;
  UpdateEdge_16(E: TopoDS_Edge, P: Handle_Poly_Polygon2D, S: Handle_Geom_Surface, T: TopLoc_Location): void;
  UpdateEdge_17(E: TopoDS_Edge, P1: Handle_Poly_Polygon2D, P2: Handle_Poly_Polygon2D, S: TopoDS_Face): void;
  UpdateEdge_18(E: TopoDS_Edge, P1: Handle_Poly_Polygon2D, P2: Handle_Poly_Polygon2D, S: Handle_Geom_Surface, L: TopLoc_Location): void;
  UpdateEdge_19(E: TopoDS_Edge, Tol: Standard_Real): void;
  Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, C: GeomAbs_Shape): void;
  Continuity_2(E: TopoDS_Edge, S1: Handle_Geom_Surface, S2: Handle_Geom_Surface, L1: TopLoc_Location, L2: TopLoc_Location, C: GeomAbs_Shape): void;
  SameParameter(E: TopoDS_Edge, S: Standard_Boolean): void;
  SameRange(E: TopoDS_Edge, S: Standard_Boolean): void;
  Degenerated(E: TopoDS_Edge, D: Standard_Boolean): void;
  Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real, Only3d: Standard_Boolean): void;
  Range_2(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  Transfert_1(Ein: TopoDS_Edge, Eout: TopoDS_Edge): void;
  MakeVertex_1(V: TopoDS_Vertex): void;
  MakeVertex_2(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_1(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_2(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, Tol: Standard_Real): void;
  UpdateVertex_3(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_4(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateVertex_5(Ve: TopoDS_Vertex, U: Standard_Real, V: Standard_Real, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_6(V: TopoDS_Vertex, Tol: Standard_Real): void;
  Transfert_2(Ein: TopoDS_Edge, Eout: TopoDS_Edge, Vin: TopoDS_Vertex, Vout: TopoDS_Vertex): void;
  delete(): void;
}

export declare class BRep_Tool {
  constructor();
  static IsClosed_1(S: TopoDS_Shape): Standard_Boolean;
  static Surface_1(F: TopoDS_Face, L: TopLoc_Location): Handle_Geom_Surface;
  static Surface_2(F: TopoDS_Face): Handle_Geom_Surface;
  static Triangulation(theFace: TopoDS_Face, theLocation: TopLoc_Location, theMeshPurpose: Poly_MeshPurpose): Handle_Poly_Triangulation;
  static Triangulations(theFace: TopoDS_Face, theLocation: TopLoc_Location): Poly_ListOfTriangulation;
  static Tolerance_1(F: TopoDS_Face): Standard_Real;
  static NaturalRestriction(F: TopoDS_Face): Standard_Boolean;
  static IsGeometric_1(F: TopoDS_Face): Standard_Boolean;
  static IsGeometric_2(E: TopoDS_Edge): Standard_Boolean;
  static Curve_1(E: TopoDS_Edge, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): Handle_Geom_Curve;
  static Curve_2(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): Handle_Geom_Curve;
  static Polygon3D(E: TopoDS_Edge, L: TopLoc_Location): Handle_Poly_Polygon3D;
  static CurveOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): Handle_Geom2d_Curve;
  static CurveOnSurface_2(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): Handle_Geom2d_Curve;
  static CurveOnPlane(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): Handle_Geom2d_Curve;
  static CurveOnSurface_3(E: TopoDS_Edge, C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  static CurveOnSurface_4(E: TopoDS_Edge, C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, Index: Graphic3d_ZLayerId): void;
  static PolygonOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face): Handle_Poly_Polygon2D;
  static PolygonOnSurface_2(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location): Handle_Poly_Polygon2D;
  static PolygonOnSurface_3(E: TopoDS_Edge, C: Handle_Poly_Polygon2D, S: Handle_Geom_Surface, L: TopLoc_Location): void;
  static PolygonOnSurface_4(E: TopoDS_Edge, C: Handle_Poly_Polygon2D, S: Handle_Geom_Surface, L: TopLoc_Location, Index: Graphic3d_ZLayerId): void;
  static PolygonOnTriangulation_1(E: TopoDS_Edge, T: Handle_Poly_Triangulation, L: TopLoc_Location): Handle_Poly_PolygonOnTriangulation;
  static PolygonOnTriangulation_2(E: TopoDS_Edge, P: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation, L: TopLoc_Location): void;
  static PolygonOnTriangulation_3(E: TopoDS_Edge, P: Handle_Poly_PolygonOnTriangulation, T: Handle_Poly_Triangulation, L: TopLoc_Location, Index: Graphic3d_ZLayerId): void;
  static IsClosed_2(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  static IsClosed_3(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location): Standard_Boolean;
  static IsClosed_4(E: TopoDS_Edge, T: Handle_Poly_Triangulation, L: TopLoc_Location): Standard_Boolean;
  static Tolerance_2(E: TopoDS_Edge): Standard_Real;
  static SameParameter(E: TopoDS_Edge): Standard_Boolean;
  static SameRange(E: TopoDS_Edge): Standard_Boolean;
  static Degenerated(E: TopoDS_Edge): Standard_Boolean;
  static Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): void;
  static Range_2(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  static Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  static UVPoints_1(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static UVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static SetUVPoints_1(E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static SetUVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static HasContinuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
  static Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): GeomAbs_Shape;
  static HasContinuity_2(E: TopoDS_Edge, S1: Handle_Geom_Surface, S2: Handle_Geom_Surface, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  static Continuity_2(E: TopoDS_Edge, S1: Handle_Geom_Surface, S2: Handle_Geom_Surface, L1: TopLoc_Location, L2: TopLoc_Location): GeomAbs_Shape;
  static HasContinuity_3(E: TopoDS_Edge): Standard_Boolean;
  static MaxContinuity(theEdge: TopoDS_Edge): GeomAbs_Shape;
  static Pnt(V: TopoDS_Vertex): gp_Pnt;
  static Tolerance_3(V: TopoDS_Vertex): Standard_Real;
  static Parameter_1(theV: TopoDS_Vertex, theE: TopoDS_Edge, theParam: Standard_Real): Standard_Boolean;
  static Parameter_2(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Real;
  static Parameter_3(V: TopoDS_Vertex, E: TopoDS_Edge, F: TopoDS_Face): Standard_Real;
  static Parameter_4(V: TopoDS_Vertex, E: TopoDS_Edge, S: Handle_Geom_Surface, L: TopLoc_Location): Standard_Real;
  static Parameters(V: TopoDS_Vertex, F: TopoDS_Face): gp_Pnt2d;
  static MaxTolerance(theShape: TopoDS_Shape, theSubShape: TopAbs_ShapeEnum): Standard_Real;
  delete(): void;
}

export declare class BRepAdaptor_CompCurve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Curve;
  Initialize_1(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean): void;
  Initialize_2(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): void;
  Wire(): TopoDS_Wire;
  Edge(U: Standard_Real, E: TopoDS_Edge, UonE: Standard_Real): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Curve;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom_BezierCurve;
  BSpline(): Handle_Geom_BSplineCurve;
  delete(): void;
}

  export declare class BRepAdaptor_CompCurve_1 extends BRepAdaptor_CompCurve {
    constructor();
  }

  export declare class BRepAdaptor_CompCurve_2 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean);
  }

  export declare class BRepAdaptor_CompCurve_3 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real);
  }

export declare class BRepAdaptor_Curve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Curve;
  Reset(): void;
  Initialize_1(E: TopoDS_Edge): void;
  Initialize_2(E: TopoDS_Edge, F: TopoDS_Face): void;
  Trsf(): gp_Trsf;
  Is3DCurve(): Standard_Boolean;
  IsCurveOnSurface(): Standard_Boolean;
  Curve(): GeomAdaptor_Curve;
  CurveOnSurface(): Adaptor3d_CurveOnSurface;
  Edge(): TopoDS_Edge;
  Tolerance(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Curve;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom_BezierCurve;
  BSpline(): Handle_Geom_BSplineCurve;
  OffsetCurve(): Handle_Geom_OffsetCurve;
  delete(): void;
}

  export declare class BRepAdaptor_Curve_1 extends BRepAdaptor_Curve {
    constructor();
  }

  export declare class BRepAdaptor_Curve_2 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepAdaptor_Curve_3 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepAdaptor_Surface extends Adaptor3d_Surface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Surface;
  Initialize(F: TopoDS_Face, Restriction: Standard_Boolean): void;
  Surface(): GeomAdaptor_Surface;
  ChangeSurface(): GeomAdaptor_Surface;
  Trsf(): gp_Trsf;
  Face(): TopoDS_Face;
  Tolerance(): Standard_Real;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(theSh: GeomAbs_Shape): Graphic3d_ZLayerId;
  NbVIntervals(theSh: GeomAbs_Shape): Graphic3d_ZLayerId;
  UIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Graphic3d_ZLayerId, Nv: Graphic3d_ZLayerId): gp_Vec;
  UResolution(theR3d: Standard_Real): Standard_Real;
  VResolution(theR3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Graphic3d_ZLayerId;
  NbUPoles(): Graphic3d_ZLayerId;
  VDegree(): Graphic3d_ZLayerId;
  NbVPoles(): Graphic3d_ZLayerId;
  NbUKnots(): Graphic3d_ZLayerId;
  NbVKnots(): Graphic3d_ZLayerId;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): Handle_Geom_BezierSurface;
  BSpline(): Handle_Geom_BSplineSurface;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): Handle_Adaptor3d_Curve;
  BasisSurface(): Handle_Adaptor3d_Surface;
  OffsetValue(): Standard_Real;
  delete(): void;
}

  export declare class BRepAdaptor_Surface_1 extends BRepAdaptor_Surface {
    constructor();
  }

  export declare class BRepAdaptor_Surface_2 extends BRepAdaptor_Surface {
    constructor(F: TopoDS_Face, R: Standard_Boolean);
  }

export declare class BRepAlgo_NormalProjection {
  Init(S: TopoDS_Shape): void;
  Add(ToProj: TopoDS_Shape): void;
  SetParams(Tol3D: Standard_Real, Tol2D: Standard_Real, InternalContinuity: GeomAbs_Shape, MaxDegree: Graphic3d_ZLayerId, MaxSeg: Graphic3d_ZLayerId): void;
  SetDefaultParams(): void;
  SetMaxDistance(MaxDist: Standard_Real): void;
  Compute3d(With3d: Standard_Boolean): void;
  SetLimit(FaceBoundaries: Standard_Boolean): void;
  Build(): void;
  IsDone(): Standard_Boolean;
  Projection(): TopoDS_Shape;
  Ancestor(E: TopoDS_Edge): TopoDS_Shape;
  Couple(E: TopoDS_Edge): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsElementary(C: Adaptor3d_Curve): Standard_Boolean;
  BuildWire(Liste: TopTools_ListOfShape): Standard_Boolean;
  delete(): void;
}

  export declare class BRepAlgo_NormalProjection_1 extends BRepAlgo_NormalProjection {
    constructor();
  }

  export declare class BRepAlgo_NormalProjection_2 extends BRepAlgo_NormalProjection {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepAlgoAPI_Algo extends BRepBuilderAPI_MakeShape {
  Shape(): TopoDS_Shape;
  Clear(): void;
  SetRunParallel(theFlag: Standard_Boolean): void;
  RunParallel(): Standard_Boolean;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  HasErrors(): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  HasError(theType: Handle_Standard_Type): Standard_Boolean;
  HasWarning(theType: Handle_Standard_Type): Standard_Boolean;
  DumpErrors(theOS: Standard_OStream): void;
  DumpWarnings(theOS: Standard_OStream): void;
  ClearWarnings(): void;
  GetReport(): Handle_Message_Report;
  SetUseOBB(theUseOBB: Standard_Boolean): void;
  delete(): void;
}

export declare class BRepAlgoAPI_BooleanOperation extends BRepAlgoAPI_BuilderAlgo {
  Shape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  SetTools(theLS: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  SetOperation(theBOP: BOPAlgo_Operation): void;
  Operation(): BOPAlgo_Operation;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepAlgoAPI_BooleanOperation_1 extends BRepAlgoAPI_BooleanOperation {
    constructor();
  }

  export declare class BRepAlgoAPI_BooleanOperation_2 extends BRepAlgoAPI_BooleanOperation {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_BuilderAlgo extends BRepAlgoAPI_Algo {
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  SimplifyResult(theUnifyEdges: Standard_Boolean, theUnifyFaces: Standard_Boolean, theAngularTol: Standard_Real): void;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(aS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  SectionEdges(): TopTools_ListOfShape;
  DSFiller(): BOPAlgo_PPaveFiller;
  Builder(): BOPAlgo_PBuilder;
  History(): Handle_BRepTools_History;
  delete(): void;
}

  export declare class BRepAlgoAPI_BuilderAlgo_1 extends BRepAlgoAPI_BuilderAlgo {
    constructor();
  }

  export declare class BRepAlgoAPI_BuilderAlgo_2 extends BRepAlgoAPI_BuilderAlgo {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Common extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Common_1 extends BRepAlgoAPI_Common {
    constructor();
  }

  export declare class BRepAlgoAPI_Common_2 extends BRepAlgoAPI_Common {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Common_3 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Common_4 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, PF: BOPAlgo_PaveFiller, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Cut_1 extends BRepAlgoAPI_Cut {
    constructor();
  }

  export declare class BRepAlgoAPI_Cut_2 extends BRepAlgoAPI_Cut {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Cut_3 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Cut_4 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, bFWD: Standard_Boolean, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Fuse_1 extends BRepAlgoAPI_Fuse {
    constructor();
  }

  export declare class BRepAlgoAPI_Fuse_2 extends BRepAlgoAPI_Fuse {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Fuse_3 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Fuse_4 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Splitter extends BRepAlgoAPI_BuilderAlgo {
  SetTools(theLS: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepAlgoAPI_Splitter_1 extends BRepAlgoAPI_Splitter {
    constructor();
  }

  export declare class BRepAlgoAPI_Splitter_2 extends BRepAlgoAPI_Splitter {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepBndLib {
  constructor();
  static Add(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean): void;
  static AddClose(S: TopoDS_Shape, B: Bnd_Box): void;
  static AddOptimal(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean, useShapeTolerance: Standard_Boolean): void;
  static AddOBB(theS: TopoDS_Shape, theOBB: Bnd_OBB, theIsTriangulationUsed: Standard_Boolean, theIsOptimal: Standard_Boolean, theIsShapeToleranceUsed: Standard_Boolean): void;
  delete(): void;
}

export declare class BRepBuilderAPI_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
  delete(): void;
}

export declare class BRepBuilderAPI_FindPlane {
  Init(S: TopoDS_Shape, Tol: Standard_Real): void;
  Found(): Standard_Boolean;
  Plane(): Handle_Geom_Plane;
  delete(): void;
}

  export declare class BRepBuilderAPI_FindPlane_1 extends BRepBuilderAPI_FindPlane {
    constructor();
  }

  export declare class BRepBuilderAPI_FindPlane_2 extends BRepBuilderAPI_FindPlane {
    constructor(S: TopoDS_Shape, Tol: Standard_Real);
  }

export declare class BRepBuilderAPI_MakeEdge extends BRepBuilderAPI_MakeShape {
  Init_1(C: Handle_Geom_Curve): void;
  Init_2(C: Handle_Geom_Curve, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: Handle_Geom_Curve, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_4(C: Handle_Geom_Curve, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: Handle_Geom_Curve, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: Handle_Geom_Curve, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Init_7(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface): void;
  Init_8(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, p1: Standard_Real, p2: Standard_Real): void;
  Init_9(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_10(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_11(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_12(C: Handle_Geom2d_Curve, S: Handle_Geom_Surface, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeEdge_1 extends BRepBuilderAPI_MakeEdge {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeEdge_2 extends BRepBuilderAPI_MakeEdge {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_3 extends BRepBuilderAPI_MakeEdge {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_4 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin);
  }

  export declare class BRepBuilderAPI_MakeEdge_5 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_6 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_7 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_8 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ);
  }

  export declare class BRepBuilderAPI_MakeEdge_9 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_10 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_11 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_12 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips);
  }

  export declare class BRepBuilderAPI_MakeEdge_13 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_14 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_15 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_16 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr);
  }

  export declare class BRepBuilderAPI_MakeEdge_17 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_18 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_19 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_20 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab);
  }

  export declare class BRepBuilderAPI_MakeEdge_21 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_22 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_23 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_24 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve);
  }

  export declare class BRepBuilderAPI_MakeEdge_25 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_26 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_27 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_28 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_29 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom_Curve, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_30 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface);
  }

  export declare class BRepBuilderAPI_MakeEdge_31 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_32 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_33 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_34 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_35 extends BRepBuilderAPI_MakeEdge {
    constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepBuilderAPI_MakeFace extends BRepBuilderAPI_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(S: Handle_Geom_Surface, Bound: Standard_Boolean, TolDegen: Standard_Real): void;
  Init_3(S: Handle_Geom_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real): void;
  Add(W: TopoDS_Wire): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_FaceError;
  Face(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeFace_1 extends BRepBuilderAPI_MakeFace {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeFace_2 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face);
  }

  export declare class BRepBuilderAPI_MakeFace_3 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln);
  }

  export declare class BRepBuilderAPI_MakeFace_4 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder);
  }

  export declare class BRepBuilderAPI_MakeFace_5 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone);
  }

  export declare class BRepBuilderAPI_MakeFace_6 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere);
  }

  export declare class BRepBuilderAPI_MakeFace_7 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus);
  }

  export declare class BRepBuilderAPI_MakeFace_8 extends BRepBuilderAPI_MakeFace {
    constructor(S: Handle_Geom_Surface, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_9 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_10 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_11 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_12 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_13 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_14 extends BRepBuilderAPI_MakeFace {
    constructor(S: Handle_Geom_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_15 extends BRepBuilderAPI_MakeFace {
    constructor(W: TopoDS_Wire, OnlyPlane: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_16 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_17 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_18 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_19 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_20 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_21 extends BRepBuilderAPI_MakeFace {
    constructor(S: Handle_Geom_Surface, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_22 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face, W: TopoDS_Wire);
  }

export declare class BRepBuilderAPI_MakeShape extends BRepBuilderAPI_Command {
  Build(theRange: Message_ProgressRange): void;
  Shape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

export declare class BRepBuilderAPI_MakeVertex extends BRepBuilderAPI_MakeShape {
  constructor(P: gp_Pnt)
  Vertex(): TopoDS_Vertex;
  delete(): void;
}

export declare class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
  Add_1(E: TopoDS_Edge): void;
  Add_2(W: TopoDS_Wire): void;
  Add_3(L: TopTools_ListOfShape): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_WireError;
  Wire(): TopoDS_Wire;
  Edge(): TopoDS_Edge;
  Vertex(): TopoDS_Vertex;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeWire_1 extends BRepBuilderAPI_MakeWire {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeWire_2 extends BRepBuilderAPI_MakeWire {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_3 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_4 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_5 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge, E4: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_6 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepBuilderAPI_MakeWire_7 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire, E: TopoDS_Edge);
  }

export declare class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

export declare class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, Copy: Standard_Boolean): void;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  delete(): void;
}

  export declare class BRepBuilderAPI_Transform_1 extends BRepBuilderAPI_Transform {
    constructor(T: gp_Trsf);
  }

  export declare class BRepBuilderAPI_Transform_2 extends BRepBuilderAPI_Transform {
    constructor(S: TopoDS_Shape, T: gp_Trsf, Copy: Standard_Boolean);
  }

export declare type BRepBuilderAPI_TransitionMode = {
  BRepBuilderAPI_Transformed: {};
  BRepBuilderAPI_RightCorner: {};
  BRepBuilderAPI_RoundCorner: {};
}

export declare class BRepCheck_Analyzer {
  constructor(S: TopoDS_Shape, GeomControls: Standard_Boolean, theIsParallel: Standard_Boolean)
  Init(S: TopoDS_Shape, GeomControls: Standard_Boolean, theIsParallel: Standard_Boolean): void;
  IsValid_1(S: TopoDS_Shape): Standard_Boolean;
  IsValid_2(): Standard_Boolean;
  Result(theSubS: TopoDS_Shape): Handle_BRepCheck_Result;
  delete(): void;
}

export declare class Handle_BRepCheck_Result {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Result): void;
  get(): BRepCheck_Result;
  delete(): void;
}

  export declare class Handle_BRepCheck_Result_1 extends Handle_BRepCheck_Result {
    constructor();
  }

  export declare class Handle_BRepCheck_Result_2 extends Handle_BRepCheck_Result {
    constructor(thePtr: BRepCheck_Result);
  }

  export declare class Handle_BRepCheck_Result_3 extends Handle_BRepCheck_Result {
    constructor(theHandle: Handle_BRepCheck_Result);
  }

  export declare class Handle_BRepCheck_Result_4 extends Handle_BRepCheck_Result {
    constructor(theHandle: Handle_BRepCheck_Result);
  }

export declare class BRepClass_Edge {
  Edge_1(): TopoDS_Edge;
  Edge_2(): TopoDS_Edge;
  Face_1(): TopoDS_Face;
  Face_2(): TopoDS_Face;
  NextEdge(): TopoDS_Edge;
  SetNextEdge(theMapVE: TopTools_IndexedDataMapOfShapeListOfShape): void;
  MaxTolerance(): Standard_Real;
  SetMaxTolerance(theValue: Standard_Real): void;
  UseBndBox(): Standard_Boolean;
  SetUseBndBox(theValue: Standard_Boolean): void;
  delete(): void;
}

  export declare class BRepClass_Edge_1 extends BRepClass_Edge {
    constructor();
  }

  export declare class BRepClass_Edge_2 extends BRepClass_Edge {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepClass_FClassifier {
  Perform(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real): void;
  State(): TopAbs_State;
  Rejected(): Standard_Boolean;
  NoWires(): Standard_Boolean;
  Edge(): BRepClass_Edge;
  EdgeParameter(): Standard_Real;
  Position(): IntRes2d_Position;
  delete(): void;
}

  export declare class BRepClass_FClassifier_1 extends BRepClass_FClassifier {
    constructor();
  }

  export declare class BRepClass_FClassifier_2 extends BRepClass_FClassifier {
    constructor(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real);
  }

export declare class BRepClass_FaceClassifier extends BRepClass_FClassifier {
  Perform_1(theF: TopoDS_Face, theP: gp_Pnt2d, theTol: Standard_Real, theUseBndBox: Standard_Boolean, theGapCheckTol: Standard_Real): void;
  Perform_2(theF: TopoDS_Face, theP: gp_Pnt, theTol: Standard_Real, theUseBndBox: Standard_Boolean, theGapCheckTol: Standard_Real): void;
  delete(): void;
}

  export declare class BRepClass_FaceClassifier_1 extends BRepClass_FaceClassifier {
    constructor();
  }

  export declare class BRepClass_FaceClassifier_2 extends BRepClass_FaceClassifier {
    constructor(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real);
  }

  export declare class BRepClass_FaceClassifier_3 extends BRepClass_FaceClassifier {
    constructor(theF: TopoDS_Face, theP: gp_Pnt2d, theTol: Standard_Real, theUseBndBox: Standard_Boolean, theGapCheckTol: Standard_Real);
  }

  export declare class BRepClass_FaceClassifier_4 extends BRepClass_FaceClassifier {
    constructor(theF: TopoDS_Face, theP: gp_Pnt, theTol: Standard_Real, theUseBndBox: Standard_Boolean, theGapCheckTol: Standard_Real);
  }

export declare class BRepClass_FaceExplorer {
  constructor(F: TopoDS_Face)
  CheckPoint(thePoint: gp_Pnt2d): Standard_Boolean;
  Reject(P: gp_Pnt2d): Standard_Boolean;
  Segment(P: gp_Pnt2d, L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  OtherSegment(P: gp_Pnt2d, L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  InitWires(): void;
  MoreWires(): Standard_Boolean;
  NextWire(): void;
  RejectWire(L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  InitEdges(): void;
  MoreEdges(): Standard_Boolean;
  NextEdge(): void;
  RejectEdge(L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  CurrentEdge(E: BRepClass_Edge, Or: TopAbs_Orientation): void;
  MaxTolerance(): Standard_Real;
  SetMaxTolerance(theValue: Standard_Real): void;
  UseBndBox(): Standard_Boolean;
  SetUseBndBox(theValue: Standard_Boolean): void;
  delete(): void;
}

export declare class BRepClass3d_SClassifier {
  Perform(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(S: BRepClass3d_SolidExplorer, Tol: Standard_Real): void;
  Rejected(): Standard_Boolean;
  State(): TopAbs_State;
  IsOnAFace(): Standard_Boolean;
  Face(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepClass3d_SClassifier_1 extends BRepClass3d_SClassifier {
    constructor();
  }

  export declare class BRepClass3d_SClassifier_2 extends BRepClass3d_SClassifier {
    constructor(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass3d_SolidClassifier extends BRepClass3d_SClassifier {
  Load(S: TopoDS_Shape): void;
  Perform(P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(Tol: Standard_Real): void;
  Destroy(): void;
  delete(): void;
}

  export declare class BRepClass3d_SolidClassifier_1 extends BRepClass3d_SolidClassifier {
    constructor();
  }

  export declare class BRepClass3d_SolidClassifier_2 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape);
  }

  export declare class BRepClass3d_SolidClassifier_3 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass3d_SolidExplorer {
  InitShape(S: TopoDS_Shape): void;
  Reject(P: gp_Pnt): Standard_Boolean;
  static FindAPointInTheFace_1(F: TopoDS_Face, P: gp_Pnt, Param: Standard_Real): Standard_Boolean;
  static FindAPointInTheFace_2(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real): Standard_Boolean;
  static FindAPointInTheFace_3(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, theVecD1U: gp_Vec, theVecD1V: gp_Vec): Standard_Boolean;
  static FindAPointInTheFace_4(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real): Standard_Boolean;
  static FindAPointInTheFace_5(F: TopoDS_Face, P: gp_Pnt): Standard_Boolean;
  static FindAPointInTheFace_6(F: TopoDS_Face, u: Standard_Real, v: Standard_Real): Standard_Boolean;
  PointInTheFace_1(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Graphic3d_ZLayerId): Standard_Boolean;
  PointInTheFace_2(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Graphic3d_ZLayerId, surf: Handle_BRepAdaptor_Surface, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real): Standard_Boolean;
  PointInTheFace_3(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Graphic3d_ZLayerId, surf: Handle_BRepAdaptor_Surface, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, theVecD1U: gp_Vec, theVecD1V: gp_Vec): Standard_Boolean;
  InitShell(): void;
  MoreShell(): Standard_Boolean;
  NextShell(): void;
  CurrentShell(): TopoDS_Shell;
  RejectShell(L: gp_Lin): Standard_Boolean;
  InitFace(): void;
  MoreFace(): Standard_Boolean;
  NextFace(): void;
  CurrentFace(): TopoDS_Face;
  RejectFace(L: gp_Lin): Standard_Boolean;
  Segment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real): Graphic3d_ZLayerId;
  OtherSegment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real): Graphic3d_ZLayerId;
  GetFaceSegmentIndex(): Graphic3d_ZLayerId;
  DumpSegment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real, S: TopAbs_State): void;
  Box(): Bnd_Box;
  GetShape(): TopoDS_Shape;
  Intersector(F: TopoDS_Face): IntCurvesFace_Intersector;
  GetMapEV(): TopTools_IndexedMapOfShape;
  Destroy(): void;
  delete(): void;
}

  export declare class BRepClass3d_SolidExplorer_1 extends BRepClass3d_SolidExplorer {
    constructor();
  }

  export declare class BRepClass3d_SolidExplorer_2 extends BRepClass3d_SolidExplorer {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepExtrema_DistShapeShape {
  SetDeflection(theDeflection: Standard_Real): void;
  LoadS1(Shape1: TopoDS_Shape): void;
  LoadS2(Shape1: TopoDS_Shape): void;
  Perform(theRange: Message_ProgressRange): Standard_Boolean;
  IsDone(): Standard_Boolean;
  NbSolution(): Graphic3d_ZLayerId;
  Value(): Standard_Real;
  InnerSolution(): Standard_Boolean;
  PointOnShape1(N: Graphic3d_ZLayerId): gp_Pnt;
  PointOnShape2(N: Graphic3d_ZLayerId): gp_Pnt;
  SupportTypeShape1(N: Graphic3d_ZLayerId): BRepExtrema_SupportType;
  SupportTypeShape2(N: Graphic3d_ZLayerId): BRepExtrema_SupportType;
  SupportOnShape1(N: Graphic3d_ZLayerId): TopoDS_Shape;
  SupportOnShape2(N: Graphic3d_ZLayerId): TopoDS_Shape;
  ParOnEdgeS1(N: Graphic3d_ZLayerId, t: Standard_Real): void;
  ParOnEdgeS2(N: Graphic3d_ZLayerId, t: Standard_Real): void;
  ParOnFaceS1(N: Graphic3d_ZLayerId, u: Standard_Real, v: Standard_Real): void;
  ParOnFaceS2(N: Graphic3d_ZLayerId, u: Standard_Real, v: Standard_Real): void;
  Dump(o: Standard_OStream): void;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
  SetMultiThread(theIsMultiThread: Standard_Boolean): void;
  IsMultiThread(): Standard_Boolean;
  delete(): void;
}

  export declare class BRepExtrema_DistShapeShape_1 extends BRepExtrema_DistShapeShape {
    constructor();
  }

  export declare class BRepExtrema_DistShapeShape_2 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, F: Extrema_ExtFlag, A: Extrema_ExtAlgo, theRange: Message_ProgressRange);
  }

  export declare class BRepExtrema_DistShapeShape_3 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, theDeflection: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo, theRange: Message_ProgressRange);
  }

export declare type BRepFill_TypeOfContact = {
  BRepFill_NoContact: {};
  BRepFill_Contact: {};
  BRepFill_ContactOnBorder: {};
}

export declare class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
  Add(E: TopoDS_Edge): void;
  ResetContour(IC: Graphic3d_ZLayerId): void;
  NbContours(): Graphic3d_ZLayerId;
  Contour(E: TopoDS_Edge): Graphic3d_ZLayerId;
  NbEdges(I: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Edge(I: Graphic3d_ZLayerId, J: Graphic3d_ZLayerId): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Graphic3d_ZLayerId): Standard_Real;
  FirstVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  LastVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  Abscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Closed(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Reset(): void;
  Simulate(IC: Graphic3d_ZLayerId): void;
  NbSurf(IC: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Sect(IC: Graphic3d_ZLayerId, IS: Graphic3d_ZLayerId): Handle_ChFiDS_SecHArray1;
  delete(): void;
}

export declare class BRepFilletAPI_MakeChamfer extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape)
  Add_1(E: TopoDS_Edge): void;
  Add_2(Dis: Standard_Real, E: TopoDS_Edge): void;
  SetDist(Dis: Standard_Real, IC: Graphic3d_ZLayerId, F: TopoDS_Face): void;
  GetDist(IC: Graphic3d_ZLayerId, Dis: Standard_Real): void;
  Add_3(Dis1: Standard_Real, Dis2: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDists(Dis1: Standard_Real, Dis2: Standard_Real, IC: Graphic3d_ZLayerId, F: TopoDS_Face): void;
  Dists(IC: Graphic3d_ZLayerId, Dis1: Standard_Real, Dis2: Standard_Real): void;
  AddDA(Dis: Standard_Real, Angle: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDistAngle(Dis: Standard_Real, Angle: Standard_Real, IC: Graphic3d_ZLayerId, F: TopoDS_Face): void;
  GetDistAngle(IC: Graphic3d_ZLayerId, Dis: Standard_Real, Angle: Standard_Real): void;
  SetMode(theMode: ChFiDS_ChamfMode): void;
  IsSymetric(IC: Graphic3d_ZLayerId): Standard_Boolean;
  IsTwoDistances(IC: Graphic3d_ZLayerId): Standard_Boolean;
  IsDistanceAngle(IC: Graphic3d_ZLayerId): Standard_Boolean;
  ResetContour(IC: Graphic3d_ZLayerId): void;
  NbContours(): Graphic3d_ZLayerId;
  Contour(E: TopoDS_Edge): Graphic3d_ZLayerId;
  NbEdges(I: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Edge(I: Graphic3d_ZLayerId, J: Graphic3d_ZLayerId): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Graphic3d_ZLayerId): Standard_Real;
  FirstVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  LastVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  Abscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Closed(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  Reset(): void;
  Builder(): Handle_TopOpeBRepBuild_HBuilder;
  Generated(EorV: TopoDS_Shape): TopTools_ListOfShape;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  Simulate(IC: Graphic3d_ZLayerId): void;
  NbSurf(IC: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Sect(IC: Graphic3d_ZLayerId, IS: Graphic3d_ZLayerId): Handle_ChFiDS_SecHArray1;
  delete(): void;
}

export declare class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape, FShape: ChFi3d_FilletShape)
  SetParams(Tang: Standard_Real, Tesp: Standard_Real, T2d: Standard_Real, TApp3d: Standard_Real, TolApp2d: Standard_Real, Fleche: Standard_Real): void;
  SetContinuity(InternalContinuity: GeomAbs_Shape, AngularTolerance: Standard_Real): void;
  Add_1(E: TopoDS_Edge): void;
  Add_2(Radius: Standard_Real, E: TopoDS_Edge): void;
  Add_3(R1: Standard_Real, R2: Standard_Real, E: TopoDS_Edge): void;
  Add_4(L: Handle_Law_Function, E: TopoDS_Edge): void;
  Add_5(UandR: TColgp_Array1OfPnt2d, E: TopoDS_Edge): void;
  SetRadius_1(Radius: Standard_Real, IC: Graphic3d_ZLayerId, IinC: Graphic3d_ZLayerId): void;
  SetRadius_2(R1: Standard_Real, R2: Standard_Real, IC: Graphic3d_ZLayerId, IinC: Graphic3d_ZLayerId): void;
  SetRadius_3(L: Handle_Law_Function, IC: Graphic3d_ZLayerId, IinC: Graphic3d_ZLayerId): void;
  SetRadius_4(UandR: TColgp_Array1OfPnt2d, IC: Graphic3d_ZLayerId, IinC: Graphic3d_ZLayerId): void;
  ResetContour(IC: Graphic3d_ZLayerId): void;
  IsConstant_1(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Radius_1(IC: Graphic3d_ZLayerId): Standard_Real;
  IsConstant_2(IC: Graphic3d_ZLayerId, E: TopoDS_Edge): Standard_Boolean;
  Radius_2(IC: Graphic3d_ZLayerId, E: TopoDS_Edge): Standard_Real;
  SetRadius_5(Radius: Standard_Real, IC: Graphic3d_ZLayerId, E: TopoDS_Edge): void;
  SetRadius_6(Radius: Standard_Real, IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): void;
  GetBounds(IC: Graphic3d_ZLayerId, E: TopoDS_Edge, F: Standard_Real, L: Standard_Real): Standard_Boolean;
  GetLaw(IC: Graphic3d_ZLayerId, E: TopoDS_Edge): Handle_Law_Function;
  SetLaw(IC: Graphic3d_ZLayerId, E: TopoDS_Edge, L: Handle_Law_Function): void;
  SetFilletShape(FShape: ChFi3d_FilletShape): void;
  GetFilletShape(): ChFi3d_FilletShape;
  NbContours(): Graphic3d_ZLayerId;
  Contour(E: TopoDS_Edge): Graphic3d_ZLayerId;
  NbEdges(I: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Edge(I: Graphic3d_ZLayerId, J: Graphic3d_ZLayerId): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Graphic3d_ZLayerId): Standard_Real;
  FirstVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  LastVertex(IC: Graphic3d_ZLayerId): TopoDS_Vertex;
  Abscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Graphic3d_ZLayerId, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Closed(IC: Graphic3d_ZLayerId): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  Reset(): void;
  Builder(): Handle_TopOpeBRepBuild_HBuilder;
  Generated(EorV: TopoDS_Shape): TopTools_ListOfShape;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  NbSurfaces(): Graphic3d_ZLayerId;
  NewFaces(I: Graphic3d_ZLayerId): TopTools_ListOfShape;
  Simulate(IC: Graphic3d_ZLayerId): void;
  NbSurf(IC: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Sect(IC: Graphic3d_ZLayerId, IS: Graphic3d_ZLayerId): Handle_ChFiDS_SecHArray1;
  NbFaultyContours(): Graphic3d_ZLayerId;
  FaultyContour(I: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  NbComputedSurfaces(IC: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  ComputedSurface(IC: Graphic3d_ZLayerId, IS: Graphic3d_ZLayerId): Handle_Geom_Surface;
  NbFaultyVertices(): Graphic3d_ZLayerId;
  FaultyVertex(IV: Graphic3d_ZLayerId): TopoDS_Vertex;
  HasResult(): Standard_Boolean;
  BadShape(): TopoDS_Shape;
  StripeStatus(IC: Graphic3d_ZLayerId): ChFiDS_ErrorStatus;
  delete(): void;
}

export declare class BRepGProp {
  constructor();
  static LinearProperties(S: TopoDS_Shape, LProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static SurfaceProperties_1(S: TopoDS_Shape, SProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static SurfaceProperties_2(S: TopoDS_Shape, SProps: GProp_GProps, Eps: Standard_Real, SkipShared: Standard_Boolean): Standard_Real;
  static VolumeProperties_1(S: TopoDS_Shape, VProps: GProp_GProps, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static VolumeProperties_2(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  static VolumePropertiesGK_1(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  static VolumePropertiesGK_2(S: TopoDS_Shape, VProps: GProp_GProps, thePln: gp_Pln, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  delete(): void;
}

export declare class BRepLib_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
  delete(): void;
}

export declare class BRepLib_MakeFace extends BRepLib_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(S: Handle_Geom_Surface, Bound: Standard_Boolean, TolDegen: Standard_Real): void;
  Init_3(S: Handle_Geom_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real): void;
  Add(W: TopoDS_Wire): void;
  Error(): BRepLib_FaceError;
  Face(): TopoDS_Face;
  static IsDegenerated(theCurve: Handle_Geom_Curve, theMaxTol: Standard_Real, theActTol: Standard_Real): Standard_Boolean;
  delete(): void;
}

  export declare class BRepLib_MakeFace_1 extends BRepLib_MakeFace {
    constructor();
  }

  export declare class BRepLib_MakeFace_2 extends BRepLib_MakeFace {
    constructor(F: TopoDS_Face);
  }

  export declare class BRepLib_MakeFace_3 extends BRepLib_MakeFace {
    constructor(P: gp_Pln);
  }

  export declare class BRepLib_MakeFace_4 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder);
  }

  export declare class BRepLib_MakeFace_5 extends BRepLib_MakeFace {
    constructor(C: gp_Cone);
  }

  export declare class BRepLib_MakeFace_6 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere);
  }

  export declare class BRepLib_MakeFace_7 extends BRepLib_MakeFace {
    constructor(C: gp_Torus);
  }

  export declare class BRepLib_MakeFace_8 extends BRepLib_MakeFace {
    constructor(S: Handle_Geom_Surface, TolDegen: Standard_Real);
  }

  export declare class BRepLib_MakeFace_9 extends BRepLib_MakeFace {
    constructor(P: gp_Pln, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_10 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_11 extends BRepLib_MakeFace {
    constructor(C: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_12 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_13 extends BRepLib_MakeFace {
    constructor(C: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_14 extends BRepLib_MakeFace {
    constructor(S: Handle_Geom_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real);
  }

  export declare class BRepLib_MakeFace_15 extends BRepLib_MakeFace {
    constructor(W: TopoDS_Wire, OnlyPlane: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_16 extends BRepLib_MakeFace {
    constructor(P: gp_Pln, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_17 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_18 extends BRepLib_MakeFace {
    constructor(C: gp_Cone, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_19 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_20 extends BRepLib_MakeFace {
    constructor(C: gp_Torus, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_21 extends BRepLib_MakeFace {
    constructor(S: Handle_Geom_Surface, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_22 extends BRepLib_MakeFace {
    constructor(F: TopoDS_Face, W: TopoDS_Wire);
  }

export declare class BRepLib_MakeShape extends BRepLib_Command {
  Build(): void;
  Shape(): TopoDS_Shape;
  FaceStatus(F: TopoDS_Face): BRepLib_ShapeModification;
  HasDescendants(F: TopoDS_Face): Standard_Boolean;
  DescendantFaces(F: TopoDS_Face): TopTools_ListOfShape;
  NbSurfaces(): Graphic3d_ZLayerId;
  NewFaces(I: Graphic3d_ZLayerId): TopTools_ListOfShape;
  FacesFromEdges(E: TopoDS_Edge): TopTools_ListOfShape;
  delete(): void;
}

export declare class BRepMesh_DiscretRoot extends Standard_Transient {
  SetShape(theShape: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  IsDone(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class BRepMesh_IncrementalMesh extends BRepMesh_DiscretRoot {
  Perform_1(theRange: Message_ProgressRange): void;
  Perform_2(theContext: any, theRange: Message_ProgressRange): void;
  Parameters(): IMeshTools_Parameters;
  ChangeParameters(): IMeshTools_Parameters;
  IsModified(): Standard_Boolean;
  GetStatusFlags(): Graphic3d_ZLayerId;
  static Discret(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real, theAlgo: BRepMesh_DiscretRoot): Graphic3d_ZLayerId;
  static IsParallelDefault(): Standard_Boolean;
  static SetParallelDefault(isInParallel: Standard_Boolean): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class BRepMesh_IncrementalMesh_1 extends BRepMesh_IncrementalMesh {
    constructor();
  }

  export declare class BRepMesh_IncrementalMesh_2 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, isRelative: Standard_Boolean, theAngDeflection: Standard_Real, isInParallel: Standard_Boolean);
  }

  export declare class BRepMesh_IncrementalMesh_3 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange);
  }

export declare type BRepOffset_Mode = {
  BRepOffset_Skin: {};
  BRepOffset_Pipe: {};
  BRepOffset_RectoVerso: {};
}

export declare class BRepOffsetAPI_DraftAngle extends BRepBuilderAPI_ModifyShape {
  Clear(): void;
  Init(S: TopoDS_Shape): void;
  Add(F: TopoDS_Face, Direction: gp_Dir, Angle: Standard_Real, NeutralPlane: gp_Pln, Flag: Standard_Boolean): void;
  AddDone(): Standard_Boolean;
  Remove(F: TopoDS_Face): void;
  ProblematicShape(): TopoDS_Shape;
  Status(): Draft_ErrorStatus;
  ConnectedFaces(F: TopoDS_Face): TopTools_ListOfShape;
  ModifiedFaces(): TopTools_ListOfShape;
  Build(theRange: Message_ProgressRange): void;
  CorrectWires(): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

  export declare class BRepOffsetAPI_DraftAngle_1 extends BRepOffsetAPI_DraftAngle {
    constructor();
  }

  export declare class BRepOffsetAPI_DraftAngle_2 extends BRepOffsetAPI_DraftAngle {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepOffsetAPI_MakeOffset extends BRepBuilderAPI_MakeShape {
  Init_1(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  Init_2(Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  AddWire(Spine: TopoDS_Wire): void;
  Perform(Offset: Standard_Real, Alt: Standard_Real): void;
  Build(theRange: Message_ProgressRange): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  delete(): void;
}

  export declare class BRepOffsetAPI_MakeOffset_1 extends BRepOffsetAPI_MakeOffset {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeOffset_2 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

  export declare class BRepOffsetAPI_MakeOffset_3 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Wire, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
  constructor()
  PerformBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  PerformByJoin(S: TopoDS_Shape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean, theRange: Message_ProgressRange): void;
  MakeOffset(): BRepOffset_MakeOffset;
  Build(theRange: Message_ProgressRange): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  GetJoinType(): GeomAbs_JoinType;
  delete(): void;
}

export declare class BRepOffsetAPI_MakePipeShell extends BRepPrimAPI_MakeSweep {
  constructor(Spine: TopoDS_Wire)
  SetMode_1(IsFrenet: Standard_Boolean): void;
  SetDiscreteMode(): void;
  SetMode_2(Axe: gp_Ax2): void;
  SetMode_3(BiNormal: gp_Dir): void;
  SetMode_4(SpineSupport: TopoDS_Shape): Standard_Boolean;
  SetMode_5(AuxiliarySpine: TopoDS_Wire, CurvilinearEquivalence: Standard_Boolean, KeepContact: BRepFill_TypeOfContact): void;
  Add_1(Profile: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Add_2(Profile: TopoDS_Shape, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_1(Profile: TopoDS_Shape, L: Handle_Law_Function, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_2(Profile: TopoDS_Shape, L: Handle_Law_Function, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Delete(Profile: TopoDS_Shape): void;
  IsReady(): Standard_Boolean;
  GetStatus(): BRepBuilderAPI_PipeError;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, TolAngular: Standard_Real): void;
  SetMaxDegree(NewMaxDegree: Graphic3d_ZLayerId): void;
  SetMaxSegments(NewMaxSegments: Graphic3d_ZLayerId): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  SetTransitionMode(Mode: BRepBuilderAPI_TransitionMode): void;
  Simulate(NumberOfSection: Graphic3d_ZLayerId, Result: TopTools_ListOfShape): void;
  Build(theRange: Message_ProgressRange): void;
  MakeSolid(): Standard_Boolean;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  ErrorOnSurface(): Standard_Real;
  Profiles(theProfiles: TopTools_ListOfShape): void;
  Spine(): TopoDS_Wire;
  delete(): void;
}

export declare class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
  constructor()
  MakeThickSolidBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  MakeThickSolidByJoin(S: TopoDS_Shape, ClosingFaces: TopTools_ListOfShape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean, theRange: Message_ProgressRange): void;
  Build(theRange: Message_ProgressRange): void;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  delete(): void;
}

export declare class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
  constructor(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real)
  Init(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real): void;
  AddWire(wire: TopoDS_Wire): void;
  AddVertex(aVertex: TopoDS_Vertex): void;
  CheckCompatibility(check: Standard_Boolean): void;
  SetSmoothing(UseSmoothing: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  SetMaxDegree(MaxDeg: Graphic3d_ZLayerId): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  MaxDegree(): Graphic3d_ZLayerId;
  UseSmoothing(): Standard_Boolean;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Build(theRange: Message_ProgressRange): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  GeneratedFace(Edge: TopoDS_Shape): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Wires(): TopTools_ListOfShape;
  delete(): void;
}

export declare class BRepPrim_Cylinder extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepPrim_Cylinder_1 extends BRepPrim_Cylinder {
    constructor(Position: gp_Ax2, Radius: Standard_Real, Height: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_2 extends BRepPrim_Cylinder {
    constructor(Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_3 extends BRepPrim_Cylinder {
    constructor(Center: gp_Pnt, Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_4 extends BRepPrim_Cylinder {
    constructor(Axes: gp_Ax2, Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_5 extends BRepPrim_Cylinder {
    constructor(R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_6 extends BRepPrim_Cylinder {
    constructor(Center: gp_Pnt, R: Standard_Real, H: Standard_Real);
  }

export declare class BRepPrim_Sphere extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepPrim_Sphere_1 extends BRepPrim_Sphere {
    constructor(Radius: Standard_Real);
  }

  export declare class BRepPrim_Sphere_2 extends BRepPrim_Sphere {
    constructor(Center: gp_Pnt, Radius: Standard_Real);
  }

  export declare class BRepPrim_Sphere_3 extends BRepPrim_Sphere {
    constructor(Axes: gp_Ax2, Radius: Standard_Real);
  }

export declare class BRepPrimAPI_MakeCylinder extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Cylinder(): BRepPrim_Cylinder;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeCylinder_1 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_2 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_3 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_4 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
  OneAxis(): Standard_Address;
  Build(theRange: Message_ProgressRange): void;
  Face(): TopoDS_Face;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  delete(): void;
}

export declare class BRepPrimAPI_MakePrism extends BRepPrimAPI_MakeSweep {
  Prism(): BRepSweep_Prism;
  Build(theRange: Message_ProgressRange): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

  export declare class BRepPrimAPI_MakePrism_1 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, V: gp_Vec, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakePrism_2 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, D: gp_Dir, Inf: Standard_Boolean, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakeRevol extends BRepPrimAPI_MakeSweep {
  Revol(): BRepSweep_Revol;
  Build(theRange: Message_ProgressRange): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  HasDegenerated(): Standard_Boolean;
  Degenerated(): TopTools_ListOfShape;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeRevol_1 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, D: Standard_Real, Copy: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakeRevol_2 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, Copy: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Sphere(): BRepPrim_Sphere;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeSphere_1 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_2 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_3 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_4 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_5 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_6 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_7 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_8 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_9 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_10 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_11 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_12 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

export declare class BRepPrimAPI_MakeSweep extends BRepBuilderAPI_MakeShape {
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  delete(): void;
}

export declare class BRepSweep_Prism {
  Shape_1(): TopoDS_Shape;
  Shape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  FirstShape_1(): TopoDS_Shape;
  FirstShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  LastShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  Vec(): gp_Vec;
  IsUsed(aGenS: TopoDS_Shape): Standard_Boolean;
  GenIsUsed(theS: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

  export declare class BRepSweep_Prism_1 extends BRepSweep_Prism {
    constructor(S: TopoDS_Shape, V: gp_Vec, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

  export declare class BRepSweep_Prism_2 extends BRepSweep_Prism {
    constructor(S: TopoDS_Shape, D: gp_Dir, Inf: Standard_Boolean, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

export declare class BRepSweep_Revol {
  Shape_1(): TopoDS_Shape;
  Shape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  FirstShape_1(): TopoDS_Shape;
  FirstShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  LastShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  Axe_1(): gp_Ax1;
  Angle_1(): Standard_Real;
  IsUsed(aGenS: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

  export declare class BRepSweep_Revol_1 extends BRepSweep_Revol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, D: Standard_Real, C: Standard_Boolean);
  }

  export declare class BRepSweep_Revol_2 extends BRepSweep_Revol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, C: Standard_Boolean);
  }

export declare class BRepTools {
  constructor();
  static UVBounds_1(F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static AddUVBounds_1(F: TopoDS_Face, B: Bnd_Box2d): void;
  static AddUVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, B: Bnd_Box2d): void;
  static AddUVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, B: Bnd_Box2d): void;
  static Update_1(V: TopoDS_Vertex): void;
  static Update_2(E: TopoDS_Edge): void;
  static Update_3(W: TopoDS_Wire): void;
  static Update_4(F: TopoDS_Face): void;
  static Update_5(S: TopoDS_Shell): void;
  static Update_6(S: TopoDS_Solid): void;
  static Update_7(C: TopoDS_CompSolid): void;
  static Update_8(C: TopoDS_Compound): void;
  static Update_9(S: TopoDS_Shape): void;
  static UpdateFaceUVPoints(theF: TopoDS_Face): void;
  static Clean(theShape: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CleanGeometry(theShape: TopoDS_Shape): void;
  static RemoveUnusedPCurves(S: TopoDS_Shape): void;
  static Triangulation(theShape: TopoDS_Shape, theLinDefl: Standard_Real, theToCheckFreeEdges: Standard_Boolean): Standard_Boolean;
  static LoadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId, theToSetAsActive: Standard_Boolean, theFileSystem: any): Standard_Boolean;
  static UnloadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId): Standard_Boolean;
  static ActivateTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId, theToActivateStrictly: Standard_Boolean): Standard_Boolean;
  static LoadAllTriangulations(theShape: TopoDS_Shape, theFileSystem: any): Standard_Boolean;
  static UnloadAllTriangulations(theShape: TopoDS_Shape): Standard_Boolean;
  static Compare_1(V1: TopoDS_Vertex, V2: TopoDS_Vertex): Standard_Boolean;
  static Compare_2(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  static OuterWire(F: TopoDS_Face): TopoDS_Wire;
  static Map3DEdges(S: TopoDS_Shape, M: TopTools_IndexedMapOfShape): void;
  static IsReallyClosed(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  static DetectClosedness(theFace: TopoDS_Face, theUclosed: Standard_Boolean, theVclosed: Standard_Boolean): void;
  static Dump(Sh: TopoDS_Shape, S: Standard_OStream): void;
  static Write_1(theShape: TopoDS_Shape, theStream: Standard_OStream, theProgress: Message_ProgressRange): void;
  static Write_2(theShape: TopoDS_Shape, theStream: Standard_OStream, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: TopTools_FormatVersion, theProgress: Message_ProgressRange): void;
  static Read_1(Sh: TopoDS_Shape, S: Standard_IStream, B: BRep_Builder, theProgress: Message_ProgressRange): void;
  static Write_3(theShape: TopoDS_Shape, theFile: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  static Write_4(theShape: TopoDS_Shape, theFile: Standard_CString, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: TopTools_FormatVersion, theProgress: Message_ProgressRange): Standard_Boolean;
  static Read_2(Sh: TopoDS_Shape, File: Standard_CString, B: BRep_Builder, theProgress: Message_ProgressRange): Standard_Boolean;
  static EvalAndUpdateTol(theE: TopoDS_Edge, theC3d: Handle_Geom_Curve, theC2d: Handle_Geom2d_Curve, theS: Handle_Geom_Surface, theF: Standard_Real, theL: Standard_Real): Standard_Real;
  static OriEdgeInFace(theEdge: TopoDS_Edge, theFace: TopoDS_Face): TopAbs_Orientation;
  static RemoveInternals(theS: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CheckLocations(theS: TopoDS_Shape, theProblemShapes: TopTools_ListOfShape): void;
  delete(): void;
}

export declare class Handle_BRepTools_History {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_History): void;
  get(): BRepTools_History;
  delete(): void;
}

  export declare class Handle_BRepTools_History_1 extends Handle_BRepTools_History {
    constructor();
  }

  export declare class Handle_BRepTools_History_2 extends Handle_BRepTools_History {
    constructor(thePtr: BRepTools_History);
  }

  export declare class Handle_BRepTools_History_3 extends Handle_BRepTools_History {
    constructor(theHandle: Handle_BRepTools_History);
  }

  export declare class Handle_BRepTools_History_4 extends Handle_BRepTools_History {
    constructor(theHandle: Handle_BRepTools_History);
  }

export declare class BRepTools_WireExplorer {
  Init_1(W: TopoDS_Wire): void;
  Init_2(W: TopoDS_Wire, F: TopoDS_Face): void;
  Init_3(W: TopoDS_Wire, F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Edge;
  Orientation(): TopAbs_Orientation;
  CurrentVertex(): TopoDS_Vertex;
  Clear(): void;
  delete(): void;
}

  export declare class BRepTools_WireExplorer_1 extends BRepTools_WireExplorer {
    constructor();
  }

  export declare class BRepTools_WireExplorer_2 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepTools_WireExplorer_3 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire, F: TopoDS_Face);
  }

export declare class Bnd_Box {
  SetWhole(): void;
  SetVoid(): void;
  Set_1(P: gp_Pnt): void;
  Set_2(P: gp_Pnt, D: gp_Dir): void;
  Update_1(aXmin: Standard_Real, aYmin: Standard_Real, aZmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real, aZmax: Standard_Real): void;
  Update_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  GetGap(): Standard_Real;
  SetGap(Tol: Standard_Real): void;
  Enlarge(Tol: Standard_Real): void;
  Get(theXmin: Standard_Real, theYmin: Standard_Real, theZmin: Standard_Real, theXmax: Standard_Real, theYmax: Standard_Real, theZmax: Standard_Real): void;
  CornerMin(): gp_Pnt;
  CornerMax(): gp_Pnt;
  OpenXmin(): void;
  OpenXmax(): void;
  OpenYmin(): void;
  OpenYmax(): void;
  OpenZmin(): void;
  OpenZmax(): void;
  IsOpen(): Standard_Boolean;
  IsOpenXmin(): Standard_Boolean;
  IsOpenXmax(): Standard_Boolean;
  IsOpenYmin(): Standard_Boolean;
  IsOpenYmax(): Standard_Boolean;
  IsOpenZmin(): Standard_Boolean;
  IsOpenZmax(): Standard_Boolean;
  IsWhole(): Standard_Boolean;
  IsVoid(): Standard_Boolean;
  IsXThin(tol: Standard_Real): Standard_Boolean;
  IsYThin(tol: Standard_Real): Standard_Boolean;
  IsZThin(tol: Standard_Real): Standard_Boolean;
  IsThin(tol: Standard_Real): Standard_Boolean;
  Transformed(T: gp_Trsf): Bnd_Box;
  Add_1(Other: Bnd_Box): void;
  Add_2(P: gp_Pnt): void;
  Add_3(P: gp_Pnt, D: gp_Dir): void;
  Add_4(D: gp_Dir): void;
  IsOut_1(P: gp_Pnt): Standard_Boolean;
  IsOut_2(L: gp_Lin): Standard_Boolean;
  IsOut_3(P: gp_Pln): Standard_Boolean;
  IsOut_4(Other: Bnd_Box): Standard_Boolean;
  IsOut_5(Other: Bnd_Box, T: gp_Trsf): Standard_Boolean;
  IsOut_6(T1: gp_Trsf, Other: Bnd_Box, T2: gp_Trsf): Standard_Boolean;
  IsOut_7(P1: gp_Pnt, P2: gp_Pnt, D: gp_Dir): Standard_Boolean;
  Distance(Other: Bnd_Box): Standard_Real;
  Dump(): void;
  SquareExtent(): Standard_Real;
  FinitePart(): Bnd_Box;
  HasFinitePart(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class Bnd_Box_1 extends Bnd_Box {
    constructor();
  }

  export declare class Bnd_Box_2 extends Bnd_Box {
    constructor(theMin: gp_Pnt, theMax: gp_Pnt);
  }

export declare class Bnd_Box2d {
  constructor()
  SetWhole(): void;
  SetVoid(): void;
  Set_1(thePnt: gp_Pnt2d): void;
  Set_2(thePnt: gp_Pnt2d, theDir: gp_Dir2d): void;
  Update_1(aXmin: Standard_Real, aYmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real): void;
  Update_2(X: Standard_Real, Y: Standard_Real): void;
  GetGap(): Standard_Real;
  SetGap(Tol: Standard_Real): void;
  Enlarge(theTol: Standard_Real): void;
  Get(aXmin: Standard_Real, aYmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real): void;
  OpenXmin(): void;
  OpenXmax(): void;
  OpenYmin(): void;
  OpenYmax(): void;
  IsOpenXmin(): Standard_Boolean;
  IsOpenXmax(): Standard_Boolean;
  IsOpenYmin(): Standard_Boolean;
  IsOpenYmax(): Standard_Boolean;
  IsWhole(): Standard_Boolean;
  IsVoid(): Standard_Boolean;
  Transformed(T: gp_Trsf2d): Bnd_Box2d;
  Add_1(Other: Bnd_Box2d): void;
  Add_2(thePnt: gp_Pnt2d): void;
  Add_3(thePnt: gp_Pnt2d, theDir: gp_Dir2d): void;
  Add_4(D: gp_Dir2d): void;
  IsOut_1(P: gp_Pnt2d): Standard_Boolean;
  IsOut_2(theL: gp_Lin2d): Standard_Boolean;
  IsOut_3(theP0: gp_Pnt2d, theP1: gp_Pnt2d): Standard_Boolean;
  IsOut_4(Other: Bnd_Box2d): Standard_Boolean;
  IsOut_5(theOther: Bnd_Box2d, theTrsf: gp_Trsf2d): Standard_Boolean;
  IsOut_6(T1: gp_Trsf2d, Other: Bnd_Box2d, T2: gp_Trsf2d): Standard_Boolean;
  Dump(): void;
  SquareExtent(): Standard_Real;
  delete(): void;
}

export declare class Bnd_OBB {
  ReBuild(theListOfPoints: TColgp_Array1OfPnt, theListOfTolerances: IntTools_CArray1OfReal, theIsOptimal: Standard_Boolean): void;
  SetCenter(theCenter: gp_Pnt): void;
  SetXComponent(theXDirection: gp_Dir, theHXSize: Standard_Real): void;
  SetYComponent(theYDirection: gp_Dir, theHYSize: Standard_Real): void;
  SetZComponent(theZDirection: gp_Dir, theHZSize: Standard_Real): void;
  Position(): gp_Ax3;
  Center(): gp_XYZ;
  XDirection(): gp_XYZ;
  YDirection(): gp_XYZ;
  ZDirection(): gp_XYZ;
  XHSize(): Standard_Real;
  YHSize(): Standard_Real;
  ZHSize(): Standard_Real;
  IsVoid(): Standard_Boolean;
  SetVoid(): void;
  SetAABox(theFlag: Standard_Boolean): void;
  IsAABox(): Standard_Boolean;
  Enlarge(theGapAdd: Standard_Real): void;
  GetVertex(theP: gp_Pnt[8]): Standard_Boolean;
  SquareExtent(): Standard_Real;
  IsOut_1(theOther: Bnd_OBB): Standard_Boolean;
  IsOut_2(theP: gp_Pnt): Standard_Boolean;
  IsCompletelyInside(theOther: Bnd_OBB): Standard_Boolean;
  Add_1(theOther: Bnd_OBB): void;
  Add_2(theP: gp_Pnt): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class Bnd_OBB_1 extends Bnd_OBB {
    constructor();
  }

  export declare class Bnd_OBB_2 extends Bnd_OBB {
    constructor(theCenter: gp_Pnt, theXDirection: gp_Dir, theYDirection: gp_Dir, theZDirection: gp_Dir, theHXSize: Standard_Real, theHYSize: Standard_Real, theHZSize: Standard_Real);
  }

  export declare class Bnd_OBB_3 extends Bnd_OBB {
    constructor(theBox: Bnd_Box);
  }

export declare class CDF_Application extends CDM_Application {
  static Load(aGUID: Standard_GUID): Handle_CDF_Application;
  NewDocument(theFormat: TCollection_ExtendedString, theDoc: Handle_CDM_Document): void;
  InitDocument(theDoc: Handle_CDM_Document): void;
  Open(aDocument: Handle_CDM_Document): void;
  CanClose(aDocument: Handle_CDM_Document): CDM_CanCloseStatus;
  Close(aDocument: Handle_CDM_Document): void;
  Retrieve_1(aFolder: TCollection_ExtendedString, aName: TCollection_ExtendedString, UseStorageConfiguration: Standard_Boolean, theFilter: Handle_PCDM_ReaderFilter, theRange: Message_ProgressRange): Handle_CDM_Document;
  Retrieve_2(aFolder: TCollection_ExtendedString, aName: TCollection_ExtendedString, aVersion: TCollection_ExtendedString, UseStorageConfiguration: Standard_Boolean, theFilter: Handle_PCDM_ReaderFilter, theRange: Message_ProgressRange): Handle_CDM_Document;
  CanRetrieve_1(theFolder: TCollection_ExtendedString, theName: TCollection_ExtendedString, theAppendMode: Standard_Boolean): PCDM_ReaderStatus;
  CanRetrieve_2(theFolder: TCollection_ExtendedString, theName: TCollection_ExtendedString, theVersion: TCollection_ExtendedString, theAppendMode: Standard_Boolean): PCDM_ReaderStatus;
  GetRetrieveStatus(): PCDM_ReaderStatus;
  Read(theIStream: Standard_IStream, theDocument: Handle_CDM_Document, theFilter: Handle_PCDM_ReaderFilter, theRange: Message_ProgressRange): void;
  ReaderFromFormat(aFormat: TCollection_ExtendedString): Handle_PCDM_Reader;
  WriterFromFormat(aFormat: TCollection_ExtendedString): Handle_PCDM_StorageDriver;
  Format(aFileName: TCollection_ExtendedString, theFormat: TCollection_ExtendedString): Standard_Boolean;
  DefaultFolder(): Standard_ExtString;
  SetDefaultFolder(aFolder: Standard_ExtString): Standard_Boolean;
  MetaDataDriver(): Handle_CDF_MetaDataDriver;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_CDF_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDF_Application): void;
  get(): CDF_Application;
  delete(): void;
}

  export declare class Handle_CDF_Application_1 extends Handle_CDF_Application {
    constructor();
  }

  export declare class Handle_CDF_Application_2 extends Handle_CDF_Application {
    constructor(thePtr: CDF_Application);
  }

  export declare class Handle_CDF_Application_3 extends Handle_CDF_Application {
    constructor(theHandle: Handle_CDF_Application);
  }

  export declare class Handle_CDF_Application_4 extends Handle_CDF_Application {
    constructor(theHandle: Handle_CDF_Application);
  }

export declare class Handle_CDF_MetaDataDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDF_MetaDataDriver): void;
  get(): CDF_MetaDataDriver;
  delete(): void;
}

  export declare class Handle_CDF_MetaDataDriver_1 extends Handle_CDF_MetaDataDriver {
    constructor();
  }

  export declare class Handle_CDF_MetaDataDriver_2 extends Handle_CDF_MetaDataDriver {
    constructor(thePtr: CDF_MetaDataDriver);
  }

  export declare class Handle_CDF_MetaDataDriver_3 extends Handle_CDF_MetaDataDriver {
    constructor(theHandle: Handle_CDF_MetaDataDriver);
  }

  export declare class Handle_CDF_MetaDataDriver_4 extends Handle_CDF_MetaDataDriver {
    constructor(theHandle: Handle_CDF_MetaDataDriver);
  }

export declare class CDM_Application extends Standard_Transient {
  Resources(): Handle_Resource_Manager;
  MessageDriver(): Handle_Message_Messenger;
  BeginOfUpdate(aDocument: Handle_CDM_Document): void;
  EndOfUpdate(aDocument: Handle_CDM_Document, theStatus: Standard_Boolean, ErrorString: TCollection_ExtendedString): void;
  Write(aString: Standard_ExtString): void;
  Name(): TCollection_ExtendedString;
  Version(): XCAFDoc_PartId;
  MetaDataLookUpTable(): CDM_MetaDataLookUpTable;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class CDM_Document extends Standard_Transient {
  Update_1(aToDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId, aModifContext: Standard_Address): void;
  Update_2(ErrorString: TCollection_ExtendedString): Standard_Boolean;
  StorageFormat(): TCollection_ExtendedString;
  Extensions(Extensions: TColStd_SequenceOfExtendedString): void;
  GetAlternativeDocument(aFormat: TCollection_ExtendedString, anAlternativeDocument: Handle_CDM_Document): Standard_Boolean;
  CreateReference_1(anOtherDocument: Handle_CDM_Document): Graphic3d_ZLayerId;
  RemoveReference(aReferenceIdentifier: Graphic3d_ZLayerId): void;
  RemoveAllReferences(): void;
  Document(aReferenceIdentifier: Graphic3d_ZLayerId): Handle_CDM_Document;
  IsInSession(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  IsStored_1(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  Name(aReferenceIdentifier: Graphic3d_ZLayerId): TCollection_ExtendedString;
  UpdateFromDocuments(aModifContext: Standard_Address): void;
  ToReferencesNumber(): Graphic3d_ZLayerId;
  FromReferencesNumber(): Graphic3d_ZLayerId;
  ShallowReferences(aDocument: Handle_CDM_Document): Standard_Boolean;
  DeepReferences(aDocument: Handle_CDM_Document): Standard_Boolean;
  CopyReference(aFromDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  IsReadOnly_1(): Standard_Boolean;
  IsReadOnly_2(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  SetIsReadOnly(): void;
  UnsetIsReadOnly(): void;
  Modify(): void;
  Modifications(): Graphic3d_ZLayerId;
  UnModify(): void;
  IsUpToDate(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  SetIsUpToDate(aReferenceIdentifier: Graphic3d_ZLayerId): void;
  SetComment(aComment: TCollection_ExtendedString): void;
  AddComment(aComment: TCollection_ExtendedString): void;
  SetComments(aComments: TColStd_SequenceOfExtendedString): void;
  Comments(aComments: TColStd_SequenceOfExtendedString): void;
  Comment(): Standard_ExtString;
  IsStored_2(): Standard_Boolean;
  StorageVersion(): Graphic3d_ZLayerId;
  SetMetaData(aMetaData: Handle_CDM_MetaData): void;
  UnsetIsStored(): void;
  MetaData(): Handle_CDM_MetaData;
  Folder(): TCollection_ExtendedString;
  SetRequestedFolder(aFolder: TCollection_ExtendedString): void;
  RequestedFolder(): TCollection_ExtendedString;
  HasRequestedFolder(): Standard_Boolean;
  SetRequestedName(aName: TCollection_ExtendedString): void;
  RequestedName(): TCollection_ExtendedString;
  SetRequestedPreviousVersion(aPreviousVersion: TCollection_ExtendedString): void;
  UnsetRequestedPreviousVersion(): void;
  HasRequestedPreviousVersion(): Standard_Boolean;
  RequestedPreviousVersion(): TCollection_ExtendedString;
  SetRequestedComment(aComment: TCollection_ExtendedString): void;
  RequestedComment(): TCollection_ExtendedString;
  LoadResources(): void;
  FindFileExtension(): Standard_Boolean;
  FileExtension(): TCollection_ExtendedString;
  FindDescription(): Standard_Boolean;
  Description(): TCollection_ExtendedString;
  IsModified(): Standard_Boolean;
  IsOpened_1(): Standard_Boolean;
  Open(anApplication: Handle_CDM_Application): void;
  CanClose(): CDM_CanCloseStatus;
  Close(): void;
  Application(): Handle_CDM_Application;
  CanCloseReference(aDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  CloseReference(aDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): void;
  IsOpened_2(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  CreateReference_2(aMetaData: Handle_CDM_MetaData, aReferenceIdentifier: Graphic3d_ZLayerId, anApplication: Handle_CDM_Application, aToDocumentVersion: Graphic3d_ZLayerId, UseStorageConfiguration: Standard_Boolean): void;
  CreateReference_3(aMetaData: Handle_CDM_MetaData, anApplication: Handle_CDM_Application, aDocumentVersion: Graphic3d_ZLayerId, UseStorageConfiguration: Standard_Boolean): Graphic3d_ZLayerId;
  ReferenceCounter(): Graphic3d_ZLayerId;
  Update_3(): void;
  Reference(aReferenceIdentifier: Graphic3d_ZLayerId): Handle_CDM_Reference;
  SetModifications(Modifications: Graphic3d_ZLayerId): void;
  SetReferenceCounter(aReferenceCounter: Graphic3d_ZLayerId): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_CDM_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDM_Document): void;
  get(): CDM_Document;
  delete(): void;
}

  export declare class Handle_CDM_Document_1 extends Handle_CDM_Document {
    constructor();
  }

  export declare class Handle_CDM_Document_2 extends Handle_CDM_Document {
    constructor(thePtr: CDM_Document);
  }

  export declare class Handle_CDM_Document_3 extends Handle_CDM_Document {
    constructor(theHandle: Handle_CDM_Document);
  }

  export declare class Handle_CDM_Document_4 extends Handle_CDM_Document {
    constructor(theHandle: Handle_CDM_Document);
  }

export declare class ChFi2d_FilletAPI {
  Init_1(theWire: TopoDS_Wire, thePlane: gp_Pln): void;
  Init_2(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln): void;
  Perform(theRadius: Standard_Real): Standard_Boolean;
  NbResults(thePoint: gp_Pnt): Graphic3d_ZLayerId;
  Result(thePoint: gp_Pnt, theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, iSolution: Graphic3d_ZLayerId): TopoDS_Edge;
  delete(): void;
}

  export declare class ChFi2d_FilletAPI_1 extends ChFi2d_FilletAPI {
    constructor();
  }

  export declare class ChFi2d_FilletAPI_2 extends ChFi2d_FilletAPI {
    constructor(theWire: TopoDS_Wire, thePlane: gp_Pln);
  }

  export declare class ChFi2d_FilletAPI_3 extends ChFi2d_FilletAPI {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln);
  }

export declare type ChFi3d_FilletShape = {
  ChFi3d_Rational: {};
  ChFi3d_QuasiAngular: {};
  ChFi3d_Polynomial: {};
}

export declare class Handle_ChFiDS_SecHArray1 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_SecHArray1): void;
  get(): ChFiDS_SecHArray1;
  delete(): void;
}

  export declare class Handle_ChFiDS_SecHArray1_1 extends Handle_ChFiDS_SecHArray1 {
    constructor();
  }

  export declare class Handle_ChFiDS_SecHArray1_2 extends Handle_ChFiDS_SecHArray1 {
    constructor(thePtr: ChFiDS_SecHArray1);
  }

  export declare class Handle_ChFiDS_SecHArray1_3 extends Handle_ChFiDS_SecHArray1 {
    constructor(theHandle: Handle_ChFiDS_SecHArray1);
  }

  export declare class Handle_ChFiDS_SecHArray1_4 extends Handle_ChFiDS_SecHArray1 {
    constructor(theHandle: Handle_ChFiDS_SecHArray1);
  }

export declare type Extrema_ExtAlgo = {
  Extrema_ExtAlgo_Grad: {};
  Extrema_ExtAlgo_Tree: {};
}

export declare type Extrema_ExtFlag = {
  Extrema_ExtFlag_MIN: {};
  Extrema_ExtFlag_MAX: {};
  Extrema_ExtFlag_MINMAX: {};
}

export declare class GC_MakeArcOfCircle extends GC_Root {
  Value(): Handle_Geom_TrimmedCurve;
  delete(): void;
}

  export declare class GC_MakeArcOfCircle_1 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_2 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, P: gp_Pnt, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_3 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, P1: gp_Pnt, P2: gp_Pnt, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_4 extends GC_MakeArcOfCircle {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeArcOfCircle_5 extends GC_MakeArcOfCircle {
    constructor(P1: gp_Pnt, V: gp_Vec, P2: gp_Pnt);
  }

export declare class GC_MakeCircle extends GC_Root {
  Value(): Handle_Geom_Circle;
  delete(): void;
}

  export declare class GC_MakeCircle_1 extends GC_MakeCircle {
    constructor(C: gp_Circ);
  }

  export declare class GC_MakeCircle_2 extends GC_MakeCircle {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_3 extends GC_MakeCircle {
    constructor(Circ: gp_Circ, Dist: Standard_Real);
  }

  export declare class GC_MakeCircle_4 extends GC_MakeCircle {
    constructor(Circ: gp_Circ, Point: gp_Pnt);
  }

  export declare class GC_MakeCircle_5 extends GC_MakeCircle {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeCircle_6 extends GC_MakeCircle {
    constructor(Center: gp_Pnt, Norm: gp_Dir, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_7 extends GC_MakeCircle {
    constructor(Center: gp_Pnt, PtAxis: gp_Pnt, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_8 extends GC_MakeCircle {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

export declare class GC_MakeSegment extends GC_Root {
  Value(): Handle_Geom_TrimmedCurve;
  delete(): void;
}

  export declare class GC_MakeSegment_1 extends GC_MakeSegment {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class GC_MakeSegment_2 extends GC_MakeSegment {
    constructor(Line: gp_Lin, U1: Standard_Real, U2: Standard_Real);
  }

  export declare class GC_MakeSegment_3 extends GC_MakeSegment {
    constructor(Line: gp_Lin, Point: gp_Pnt, Ulast: Standard_Real);
  }

  export declare class GC_MakeSegment_4 extends GC_MakeSegment {
    constructor(Line: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class GC_Root {
  constructor();
  IsDone(): Standard_Boolean;
  Status(): gce_ErrorType;
  delete(): void;
}

export declare class GProp_GProps {
  Add(Item: GProp_GProps, Density: Standard_Real): void;
  Mass(): Standard_Real;
  CentreOfMass(): gp_Pnt;
  MatrixOfInertia(): gp_Mat;
  StaticMoments(Ix: Standard_Real, Iy: Standard_Real, Iz: Standard_Real): void;
  MomentOfInertia(A: gp_Ax1): Standard_Real;
  PrincipalProperties(): GProp_PrincipalProps;
  RadiusOfGyration(A: gp_Ax1): Standard_Real;
  delete(): void;
}

  export declare class GProp_GProps_1 extends GProp_GProps {
    constructor();
  }

  export declare class GProp_GProps_2 extends GProp_GProps {
    constructor(SystemLocation: gp_Pnt);
  }

export declare class GProp_PrincipalProps {
  constructor()
  HasSymmetryAxis_1(): Standard_Boolean;
  HasSymmetryAxis_2(aTol: Standard_Real): Standard_Boolean;
  HasSymmetryPoint_1(): Standard_Boolean;
  HasSymmetryPoint_2(aTol: Standard_Real): Standard_Boolean;
  Moments(Ixx: Standard_Real, Iyy: Standard_Real, Izz: Standard_Real): void;
  FirstAxisOfInertia(): gp_Vec;
  SecondAxisOfInertia(): gp_Vec;
  ThirdAxisOfInertia(): gp_Vec;
  RadiusOfGyration(Rxx: Standard_Real, Ryy: Standard_Real, Rzz: Standard_Real): void;
  delete(): void;
}

export declare class GccAna_Circ2d2TanRad {
  IsDone(): Standard_Boolean;
  NbSolutions(): Graphic3d_ZLayerId;
  ThisSolution(Index: Graphic3d_ZLayerId): gp_Circ2d;
  WhichQualifier(Index: Graphic3d_ZLayerId, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Graphic3d_ZLayerId): Standard_Boolean;
  IsTheSame2(Index: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class GccAna_Circ2d2TanRad_1 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_2 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_3 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_4 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedLin, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_5 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_6 extends GccAna_Circ2d2TanRad {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class GccAna_Lin2d2Tan {
  IsDone(): Standard_Boolean;
  NbSolutions(): Graphic3d_ZLayerId;
  ThisSolution(Index: Graphic3d_ZLayerId): gp_Lin2d;
  WhichQualifier(Index: Graphic3d_ZLayerId, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  delete(): void;
}

  export declare class GccAna_Lin2d2Tan_1 extends GccAna_Lin2d2Tan {
    constructor(ThePoint1: gp_Pnt2d, ThePoint2: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Lin2d2Tan_2 extends GccAna_Lin2d2Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, ThePoint: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Lin2d2Tan_3 extends GccAna_Lin2d2Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Tolerance: Standard_Real);
  }

export declare type GccEnt_Position = {
  GccEnt_unqualified: {};
  GccEnt_enclosing: {};
  GccEnt_enclosed: {};
  GccEnt_outside: {};
  GccEnt_noqualifier: {};
}

export declare class GccEnt_QualifiedCirc {
  constructor(Qualified: gp_Circ2d, Qualifier: GccEnt_Position)
  Qualified(): gp_Circ2d;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosing(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
  delete(): void;
}

export declare class GccEnt_QualifiedLin {
  constructor(Qualified: gp_Lin2d, Qualifier: GccEnt_Position)
  Qualified(): gp_Lin2d;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
  delete(): void;
}

export declare class Handle_Geom_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BSplineCurve): void;
  get(): Geom_BSplineCurve;
  delete(): void;
}

  export declare class Handle_Geom_BSplineCurve_1 extends Handle_Geom_BSplineCurve {
    constructor();
  }

  export declare class Handle_Geom_BSplineCurve_2 extends Handle_Geom_BSplineCurve {
    constructor(thePtr: Geom_BSplineCurve);
  }

  export declare class Handle_Geom_BSplineCurve_3 extends Handle_Geom_BSplineCurve {
    constructor(theHandle: Handle_Geom_BSplineCurve);
  }

  export declare class Handle_Geom_BSplineCurve_4 extends Handle_Geom_BSplineCurve {
    constructor(theHandle: Handle_Geom_BSplineCurve);
  }

export declare class Handle_Geom_BSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BSplineSurface): void;
  get(): Geom_BSplineSurface;
  delete(): void;
}

  export declare class Handle_Geom_BSplineSurface_1 extends Handle_Geom_BSplineSurface {
    constructor();
  }

  export declare class Handle_Geom_BSplineSurface_2 extends Handle_Geom_BSplineSurface {
    constructor(thePtr: Geom_BSplineSurface);
  }

  export declare class Handle_Geom_BSplineSurface_3 extends Handle_Geom_BSplineSurface {
    constructor(theHandle: Handle_Geom_BSplineSurface);
  }

  export declare class Handle_Geom_BSplineSurface_4 extends Handle_Geom_BSplineSurface {
    constructor(theHandle: Handle_Geom_BSplineSurface);
  }

export declare class Handle_Geom_BezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BezierCurve): void;
  get(): Geom_BezierCurve;
  delete(): void;
}

  export declare class Handle_Geom_BezierCurve_1 extends Handle_Geom_BezierCurve {
    constructor();
  }

  export declare class Handle_Geom_BezierCurve_2 extends Handle_Geom_BezierCurve {
    constructor(thePtr: Geom_BezierCurve);
  }

  export declare class Handle_Geom_BezierCurve_3 extends Handle_Geom_BezierCurve {
    constructor(theHandle: Handle_Geom_BezierCurve);
  }

  export declare class Handle_Geom_BezierCurve_4 extends Handle_Geom_BezierCurve {
    constructor(theHandle: Handle_Geom_BezierCurve);
  }

export declare class Handle_Geom_BezierSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BezierSurface): void;
  get(): Geom_BezierSurface;
  delete(): void;
}

  export declare class Handle_Geom_BezierSurface_1 extends Handle_Geom_BezierSurface {
    constructor();
  }

  export declare class Handle_Geom_BezierSurface_2 extends Handle_Geom_BezierSurface {
    constructor(thePtr: Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_3 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_4 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

export declare class Geom_BoundedCurve extends Geom_Curve {
  EndPoint(): gp_Pnt;
  StartPoint(): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Geom_Circle extends Geom_Conic {
  SetCirc(C: gp_Circ): void;
  SetRadius(R: Standard_Real): void;
  Circ(): gp_Circ;
  Radius(): Standard_Real;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Eccentricity(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): Handle_Geom_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class Geom_Circle_1 extends Geom_Circle {
    constructor(C: gp_Circ);
  }

  export declare class Geom_Circle_2 extends Geom_Circle {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

export declare class Handle_Geom_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Circle): void;
  get(): Geom_Circle;
  delete(): void;
}

  export declare class Handle_Geom_Circle_1 extends Handle_Geom_Circle {
    constructor();
  }

  export declare class Handle_Geom_Circle_2 extends Handle_Geom_Circle {
    constructor(thePtr: Geom_Circle);
  }

  export declare class Handle_Geom_Circle_3 extends Handle_Geom_Circle {
    constructor(theHandle: Handle_Geom_Circle);
  }

  export declare class Handle_Geom_Circle_4 extends Handle_Geom_Circle {
    constructor(theHandle: Handle_Geom_Circle);
  }

export declare class Geom_Conic extends Geom_Curve {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Eccentricity(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Graphic3d_ZLayerId): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Geom_Curve extends Geom_Geometry {
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Reversed(): Handle_Geom_Curve;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Graphic3d_ZLayerId): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Value(U: Standard_Real): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Curve): void;
  get(): Geom_Curve;
  delete(): void;
}

  export declare class Handle_Geom_Curve_1 extends Handle_Geom_Curve {
    constructor();
  }

  export declare class Handle_Geom_Curve_2 extends Handle_Geom_Curve {
    constructor(thePtr: Geom_Curve);
  }

  export declare class Handle_Geom_Curve_3 extends Handle_Geom_Curve {
    constructor(theHandle: Handle_Geom_Curve);
  }

  export declare class Handle_Geom_Curve_4 extends Handle_Geom_Curve {
    constructor(theHandle: Handle_Geom_Curve);
  }

export declare class Geom_ElementarySurface extends Geom_Surface {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theAx3: gp_Ax3): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Graphic3d_ZLayerId): Standard_Boolean;
  IsCNv(N: Graphic3d_ZLayerId): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Geom_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt): void;
  Mirror_2(A1: gp_Ax1): void;
  Mirror_3(A2: gp_Ax2): void;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Translate_1(V: gp_Vec): void;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Transform(T: gp_Trsf): void;
  Mirrored_1(P: gp_Pnt): Handle_Geom_Geometry;
  Mirrored_2(A1: gp_Ax1): Handle_Geom_Geometry;
  Mirrored_3(A2: gp_Ax2): Handle_Geom_Geometry;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): Handle_Geom_Geometry;
  Scaled(P: gp_Pnt, S: Standard_Real): Handle_Geom_Geometry;
  Transformed(T: gp_Trsf): Handle_Geom_Geometry;
  Translated_1(V: gp_Vec): Handle_Geom_Geometry;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): Handle_Geom_Geometry;
  Copy(): Handle_Geom_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Geometry): void;
  get(): Geom_Geometry;
  delete(): void;
}

  export declare class Handle_Geom_Geometry_1 extends Handle_Geom_Geometry {
    constructor();
  }

  export declare class Handle_Geom_Geometry_2 extends Handle_Geom_Geometry {
    constructor(thePtr: Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_3 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_4 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

export declare class Handle_Geom_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_OffsetCurve): void;
  get(): Geom_OffsetCurve;
  delete(): void;
}

  export declare class Handle_Geom_OffsetCurve_1 extends Handle_Geom_OffsetCurve {
    constructor();
  }

  export declare class Handle_Geom_OffsetCurve_2 extends Handle_Geom_OffsetCurve {
    constructor(thePtr: Geom_OffsetCurve);
  }

  export declare class Handle_Geom_OffsetCurve_3 extends Handle_Geom_OffsetCurve {
    constructor(theHandle: Handle_Geom_OffsetCurve);
  }

  export declare class Handle_Geom_OffsetCurve_4 extends Handle_Geom_OffsetCurve {
    constructor(theHandle: Handle_Geom_OffsetCurve);
  }

export declare class Geom_Plane extends Geom_ElementarySurface {
  SetPln(Pl: gp_Pln): void;
  Pln(): gp_Pln;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): Handle_Geom_Curve;
  VIso(V: Standard_Real): Handle_Geom_Curve;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Graphic3d_ZLayerId, Nv: Graphic3d_ZLayerId): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): Handle_Geom_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class Geom_Plane_1 extends Geom_Plane {
    constructor(A3: gp_Ax3);
  }

  export declare class Geom_Plane_2 extends Geom_Plane {
    constructor(Pl: gp_Pln);
  }

  export declare class Geom_Plane_3 extends Geom_Plane {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class Geom_Plane_4 extends Geom_Plane {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

export declare class Handle_Geom_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Plane): void;
  get(): Geom_Plane;
  delete(): void;
}

  export declare class Handle_Geom_Plane_1 extends Handle_Geom_Plane {
    constructor();
  }

  export declare class Handle_Geom_Plane_2 extends Handle_Geom_Plane {
    constructor(thePtr: Geom_Plane);
  }

  export declare class Handle_Geom_Plane_3 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

  export declare class Handle_Geom_Plane_4 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

export declare class Geom_Surface extends Geom_Geometry {
  UReverse(): void;
  UReversed(): Handle_Geom_Surface;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversed(): Handle_Geom_Surface;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): Handle_Geom_Curve;
  VIso(V: Standard_Real): Handle_Geom_Curve;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Graphic3d_ZLayerId): Standard_Boolean;
  IsCNv(N: Graphic3d_ZLayerId): Standard_Boolean;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Graphic3d_ZLayerId, Nv: Graphic3d_ZLayerId): gp_Vec;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Surface): void;
  get(): Geom_Surface;
  delete(): void;
}

  export declare class Handle_Geom_Surface_1 extends Handle_Geom_Surface {
    constructor();
  }

  export declare class Handle_Geom_Surface_2 extends Handle_Geom_Surface {
    constructor(thePtr: Geom_Surface);
  }

  export declare class Handle_Geom_Surface_3 extends Handle_Geom_Surface {
    constructor(theHandle: Handle_Geom_Surface);
  }

  export declare class Handle_Geom_Surface_4 extends Handle_Geom_Surface {
    constructor(theHandle: Handle_Geom_Surface);
  }

export declare class Geom_TrimmedCurve extends Geom_BoundedCurve {
  constructor(C: Handle_Geom_Curve, U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetTrim(U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean): void;
  BasisCurve(): Handle_Geom_Curve;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Graphic3d_ZLayerId): Standard_Boolean;
  EndPoint(): gp_Pnt;
  FirstParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  LastParameter(): Standard_Real;
  StartPoint(): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): Handle_Geom_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom_TrimmedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_TrimmedCurve): void;
  get(): Geom_TrimmedCurve;
  delete(): void;
}

  export declare class Handle_Geom_TrimmedCurve_1 extends Handle_Geom_TrimmedCurve {
    constructor();
  }

  export declare class Handle_Geom_TrimmedCurve_2 extends Handle_Geom_TrimmedCurve {
    constructor(thePtr: Geom_TrimmedCurve);
  }

  export declare class Handle_Geom_TrimmedCurve_3 extends Handle_Geom_TrimmedCurve {
    constructor(theHandle: Handle_Geom_TrimmedCurve);
  }

  export declare class Handle_Geom_TrimmedCurve_4 extends Handle_Geom_TrimmedCurve {
    constructor(theHandle: Handle_Geom_TrimmedCurve);
  }

export declare class Handle_Geom2d_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BSplineCurve): void;
  get(): Geom2d_BSplineCurve;
  delete(): void;
}

  export declare class Handle_Geom2d_BSplineCurve_1 extends Handle_Geom2d_BSplineCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BSplineCurve_2 extends Handle_Geom2d_BSplineCurve {
    constructor(thePtr: Geom2d_BSplineCurve);
  }

  export declare class Handle_Geom2d_BSplineCurve_3 extends Handle_Geom2d_BSplineCurve {
    constructor(theHandle: Handle_Geom2d_BSplineCurve);
  }

  export declare class Handle_Geom2d_BSplineCurve_4 extends Handle_Geom2d_BSplineCurve {
    constructor(theHandle: Handle_Geom2d_BSplineCurve);
  }

export declare class Handle_Geom2d_BezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BezierCurve): void;
  get(): Geom2d_BezierCurve;
  delete(): void;
}

  export declare class Handle_Geom2d_BezierCurve_1 extends Handle_Geom2d_BezierCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BezierCurve_2 extends Handle_Geom2d_BezierCurve {
    constructor(thePtr: Geom2d_BezierCurve);
  }

  export declare class Handle_Geom2d_BezierCurve_3 extends Handle_Geom2d_BezierCurve {
    constructor(theHandle: Handle_Geom2d_BezierCurve);
  }

  export declare class Handle_Geom2d_BezierCurve_4 extends Handle_Geom2d_BezierCurve {
    constructor(theHandle: Handle_Geom2d_BezierCurve);
  }

export declare class Geom2d_CartesianPoint extends Geom2d_Point {
  SetCoord(X: Standard_Real, Y: Standard_Real): void;
  SetPnt2d(P: gp_Pnt2d): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Transform(T: gp_Trsf2d): void;
  Copy(): Handle_Geom2d_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class Geom2d_CartesianPoint_1 extends Geom2d_CartesianPoint {
    constructor(P: gp_Pnt2d);
  }

  export declare class Geom2d_CartesianPoint_2 extends Geom2d_CartesianPoint {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

export declare class Handle_Geom2d_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Curve): void;
  get(): Geom2d_Curve;
  delete(): void;
}

  export declare class Handle_Geom2d_Curve_1 extends Handle_Geom2d_Curve {
    constructor();
  }

  export declare class Handle_Geom2d_Curve_2 extends Handle_Geom2d_Curve {
    constructor(thePtr: Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_3 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_4 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

export declare class Geom2d_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt2d): void;
  Mirror_2(A: gp_Ax2d): void;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Translate_1(V: gp_Vec2d): void;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Transform(T: gp_Trsf2d): void;
  Mirrored_1(P: gp_Pnt2d): Handle_Geom2d_Geometry;
  Mirrored_2(A: gp_Ax2d): Handle_Geom2d_Geometry;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): Handle_Geom2d_Geometry;
  Scaled(P: gp_Pnt2d, S: Standard_Real): Handle_Geom2d_Geometry;
  Transformed(T: gp_Trsf2d): Handle_Geom2d_Geometry;
  Translated_1(V: gp_Vec2d): Handle_Geom2d_Geometry;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): Handle_Geom2d_Geometry;
  Copy(): Handle_Geom2d_Geometry;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom2d_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Geometry): void;
  get(): Geom2d_Geometry;
  delete(): void;
}

  export declare class Handle_Geom2d_Geometry_1 extends Handle_Geom2d_Geometry {
    constructor();
  }

  export declare class Handle_Geom2d_Geometry_2 extends Handle_Geom2d_Geometry {
    constructor(thePtr: Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_3 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_4 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

export declare class Geom2d_Point extends Geom2d_Geometry {
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Distance(Other: Handle_Geom2d_Point): Standard_Real;
  SquareDistance(Other: Handle_Geom2d_Point): Standard_Real;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Geom2d_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Point): void;
  get(): Geom2d_Point;
  delete(): void;
}

  export declare class Handle_Geom2d_Point_1 extends Handle_Geom2d_Point {
    constructor();
  }

  export declare class Handle_Geom2d_Point_2 extends Handle_Geom2d_Point {
    constructor(thePtr: Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_3 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_4 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

export declare class Geom2dAdaptor_Curve extends Adaptor2d_Curve2d {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor2d_Curve2d;
  Reset(): void;
  Load_1(theCurve: Handle_Geom2d_Curve): void;
  Load_2(theCurve: Handle_Geom2d_Curve, theUFirst: Standard_Real, theULast: Standard_Real): void;
  Curve(): Handle_Geom2d_Curve;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor2d_Curve2d;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec2d;
  Resolution(Ruv: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  NbSamples(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom2d_BezierCurve;
  BSpline(): Handle_Geom2d_BSplineCurve;
  delete(): void;
}

  export declare class Geom2dAdaptor_Curve_1 extends Geom2dAdaptor_Curve {
    constructor();
  }

  export declare class Geom2dAdaptor_Curve_2 extends Geom2dAdaptor_Curve {
    constructor(C: Handle_Geom2d_Curve);
  }

  export declare class Geom2dAdaptor_Curve_3 extends Geom2dAdaptor_Curve {
    constructor(C: Handle_Geom2d_Curve, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Geom2dGcc_Circ2d2TanRad {
  Results_1(Circ: GccAna_Circ2d2TanRad): void;
  Results_2(Circ: Geom2dGcc_Circ2d2TanRadGeo): void;
  IsDone(): Standard_Boolean;
  NbSolutions(): Graphic3d_ZLayerId;
  ThisSolution(Index: Graphic3d_ZLayerId): gp_Circ2d;
  WhichQualifier(Index: Graphic3d_ZLayerId, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Graphic3d_ZLayerId): Standard_Boolean;
  IsTheSame2(Index: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2d2TanRad_1 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRad_2 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Point: Handle_Geom2d_Point, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRad_3 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Point1: Handle_Geom2d_Point, Point2: Handle_Geom2d_Point, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class Geom2dGcc_Circ2d2TanRadGeo {
  IsDone(): Standard_Boolean;
  NbSolutions(): Graphic3d_ZLayerId;
  ThisSolution(Index: Graphic3d_ZLayerId): gp_Circ2d;
  WhichQualifier(Index: Graphic3d_ZLayerId, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Graphic3d_ZLayerId): Standard_Boolean;
  IsTheSame2(Index: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2d2TanRadGeo_1 extends Geom2dGcc_Circ2d2TanRadGeo {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: Geom2dGcc_QCurve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRadGeo_2 extends Geom2dGcc_Circ2d2TanRadGeo {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: Geom2dGcc_QCurve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRadGeo_3 extends Geom2dGcc_Circ2d2TanRadGeo {
    constructor(Qualified1: Geom2dGcc_QCurve, Qualified2: Geom2dGcc_QCurve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRadGeo_4 extends Geom2dGcc_Circ2d2TanRadGeo {
    constructor(Qualified1: Geom2dGcc_QCurve, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class Geom2dGcc_Lin2d2Tan {
  IsDone(): Standard_Boolean;
  NbSolutions(): Graphic3d_ZLayerId;
  ThisSolution(Index: Graphic3d_ZLayerId): gp_Lin2d;
  WhichQualifier(Index: Graphic3d_ZLayerId, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Graphic3d_ZLayerId, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  delete(): void;
}

  export declare class Geom2dGcc_Lin2d2Tan_1 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Tolang: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_2 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, ThePoint: gp_Pnt2d, Tolang: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_3 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Tolang: Standard_Real, Param1: Standard_Real, Param2: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_4 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, ThePoint: gp_Pnt2d, Tolang: Standard_Real, Param1: Standard_Real);
  }

export declare class Geom2dGcc_QualifiedCurve {
  constructor(Curve: Geom2dAdaptor_Curve, Qualifier: GccEnt_Position)
  Qualified(): Geom2dAdaptor_Curve;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosing(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
  delete(): void;
}

export declare class GeomAPI {
  constructor();
  static To2d(C: Handle_Geom_Curve, P: gp_Pln): Handle_Geom2d_Curve;
  static To3d(C: Handle_Geom2d_Curve, P: gp_Pln): Handle_Geom_Curve;
  delete(): void;
}

export declare type GeomAbs_CurveType = {
  GeomAbs_Line: {};
  GeomAbs_Circle: {};
  GeomAbs_Ellipse: {};
  GeomAbs_Hyperbola: {};
  GeomAbs_Parabola: {};
  GeomAbs_BezierCurve: {};
  GeomAbs_BSplineCurve: {};
  GeomAbs_OffsetCurve: {};
  GeomAbs_OtherCurve: {};
}

export declare type GeomAbs_JoinType = {
  GeomAbs_Arc: {};
  GeomAbs_Tangent: {};
  GeomAbs_Intersection: {};
}

export declare type GeomAbs_SurfaceType = {
  GeomAbs_Plane: {};
  GeomAbs_Cylinder: {};
  GeomAbs_Cone: {};
  GeomAbs_Sphere: {};
  GeomAbs_Torus: {};
  GeomAbs_BezierSurface: {};
  GeomAbs_BSplineSurface: {};
  GeomAbs_SurfaceOfRevolution: {};
  GeomAbs_SurfaceOfExtrusion: {};
  GeomAbs_OffsetSurface: {};
  GeomAbs_OtherSurface: {};
}

export declare class GeomAdaptor_Curve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Curve;
  Reset(): void;
  Load_1(theCurve: Handle_Geom_Curve): void;
  Load_2(theCurve: Handle_Geom_Curve, theUFirst: Standard_Real, theULast: Standard_Real): void;
  Curve(): Handle_Geom_Curve;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Curve;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Graphic3d_ZLayerId): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Graphic3d_ZLayerId;
  IsRational(): Standard_Boolean;
  NbPoles(): Graphic3d_ZLayerId;
  NbKnots(): Graphic3d_ZLayerId;
  Bezier(): Handle_Geom_BezierCurve;
  BSpline(): Handle_Geom_BSplineCurve;
  OffsetCurve(): Handle_Geom_OffsetCurve;
  delete(): void;
}

  export declare class GeomAdaptor_Curve_1 extends GeomAdaptor_Curve {
    constructor();
  }

  export declare class GeomAdaptor_Curve_2 extends GeomAdaptor_Curve {
    constructor(theCurve: Handle_Geom_Curve);
  }

  export declare class GeomAdaptor_Curve_3 extends GeomAdaptor_Curve {
    constructor(theCurve: Handle_Geom_Curve, theUFirst: Standard_Real, theULast: Standard_Real);
  }

export declare class GeomAdaptor_Surface extends Adaptor3d_Surface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  ShallowCopy(): Handle_Adaptor3d_Surface;
  Load_1(theSurf: Handle_Geom_Surface): void;
  Load_2(theSurf: Handle_Geom_Surface, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTolU: Standard_Real, theTolV: Standard_Real): void;
  Surface(): Handle_Geom_Surface;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  NbVIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  UIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): Handle_Adaptor3d_Surface;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Graphic3d_ZLayerId, Nv: Graphic3d_ZLayerId): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Graphic3d_ZLayerId;
  NbUPoles(): Graphic3d_ZLayerId;
  VDegree(): Graphic3d_ZLayerId;
  NbVPoles(): Graphic3d_ZLayerId;
  NbUKnots(): Graphic3d_ZLayerId;
  NbVKnots(): Graphic3d_ZLayerId;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): Handle_Geom_BezierSurface;
  BSpline(): Handle_Geom_BSplineSurface;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): Handle_Adaptor3d_Curve;
  BasisSurface(): Handle_Adaptor3d_Surface;
  OffsetValue(): Standard_Real;
  delete(): void;
}

  export declare class GeomAdaptor_Surface_1 extends GeomAdaptor_Surface {
    constructor();
  }

  export declare class GeomAdaptor_Surface_2 extends GeomAdaptor_Surface {
    constructor(theSurf: Handle_Geom_Surface);
  }

  export declare class GeomAdaptor_Surface_3 extends GeomAdaptor_Surface {
    constructor(theSurf: Handle_Geom_Surface, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTolU: Standard_Real, theTolV: Standard_Real);
  }

export declare class GeomLProp_SLProps {
  SetSurface(S: Handle_Geom_Surface): void;
  SetParameters(U: Standard_Real, V: Standard_Real): void;
  Value(): gp_Pnt;
  D1U(): gp_Vec;
  D1V(): gp_Vec;
  D2U(): gp_Vec;
  D2V(): gp_Vec;
  DUV(): gp_Vec;
  IsTangentUDefined(): Standard_Boolean;
  TangentU(D: gp_Dir): void;
  IsTangentVDefined(): Standard_Boolean;
  TangentV(D: gp_Dir): void;
  IsNormalDefined(): Standard_Boolean;
  Normal(): gp_Dir;
  IsCurvatureDefined(): Standard_Boolean;
  IsUmbilic(): Standard_Boolean;
  MaxCurvature(): Standard_Real;
  MinCurvature(): Standard_Real;
  CurvatureDirections(MaxD: gp_Dir, MinD: gp_Dir): void;
  MeanCurvature(): Standard_Real;
  GaussianCurvature(): Standard_Real;
  delete(): void;
}

  export declare class GeomLProp_SLProps_1 extends GeomLProp_SLProps {
    constructor(S: Handle_Geom_Surface, U: Standard_Real, V: Standard_Real, N: Graphic3d_ZLayerId, Resolution: Standard_Real);
  }

  export declare class GeomLProp_SLProps_2 extends GeomLProp_SLProps {
    constructor(S: Handle_Geom_Surface, N: Graphic3d_ZLayerId, Resolution: Standard_Real);
  }

  export declare class GeomLProp_SLProps_3 extends GeomLProp_SLProps {
    constructor(N: Graphic3d_ZLayerId, Resolution: Standard_Real);
  }

export declare type IFSelect_ReturnStatus = {
  IFSelect_RetVoid: {};
  IFSelect_RetDone: {};
  IFSelect_RetError: {};
  IFSelect_RetFail: {};
  IFSelect_RetStop: {};
}

export declare class IMeshTools_Parameters {
  constructor()
  static RelMinSize(): Standard_Real;
  delete(): void;
}

export declare class IntCurvesFace_ShapeIntersector {
  constructor()
  Load(Sh: TopoDS_Shape, Tol: Standard_Real): void;
  Perform_1(L: gp_Lin, PInf: Standard_Real, PSup: Standard_Real): void;
  PerformNearest(L: gp_Lin, PInf: Standard_Real, PSup: Standard_Real): void;
  Perform_2(HCu: Handle_Adaptor3d_Curve, PInf: Standard_Real, PSup: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPnt(): Graphic3d_ZLayerId;
  UParameter(I: Graphic3d_ZLayerId): Standard_Real;
  VParameter(I: Graphic3d_ZLayerId): Standard_Real;
  WParameter(I: Graphic3d_ZLayerId): Standard_Real;
  Pnt(I: Graphic3d_ZLayerId): gp_Pnt;
  Transition(I: Graphic3d_ZLayerId): IntCurveSurface_TransitionOnCurve;
  State(I: Graphic3d_ZLayerId): TopAbs_State;
  Face(I: Graphic3d_ZLayerId): TopoDS_Face;
  SortResult(): void;
  Destroy(): void;
  delete(): void;
}

export declare class IntTools_CommonPrt {
  Assign(Other: IntTools_CommonPrt): IntTools_CommonPrt;
  SetEdge1(anE: TopoDS_Edge): void;
  SetEdge2(anE: TopoDS_Edge): void;
  SetType(aType: TopAbs_ShapeEnum): void;
  SetRange1_1(aR: IntTools_Range): void;
  SetRange1_2(tf: Standard_Real, tl: Standard_Real): void;
  AppendRange2_1(aR: IntTools_Range): void;
  AppendRange2_2(tf: Standard_Real, tl: Standard_Real): void;
  SetVertexParameter1(tV: Standard_Real): void;
  SetVertexParameter2(tV: Standard_Real): void;
  Edge1(): TopoDS_Edge;
  Edge2(): TopoDS_Edge;
  Type(): TopAbs_ShapeEnum;
  Range1_1(): IntTools_Range;
  Range1_2(tf: Standard_Real, tl: Standard_Real): void;
  Ranges2(): IntTools_SequenceOfRanges;
  ChangeRanges2(): IntTools_SequenceOfRanges;
  VertexParameter1(): Standard_Real;
  VertexParameter2(): Standard_Real;
  Copy(anOther: IntTools_CommonPrt): void;
  AllNullFlag(): Standard_Boolean;
  SetAllNullFlag(aFlag: Standard_Boolean): void;
  SetBoundingPoints(aP1: gp_Pnt, aP2: gp_Pnt): void;
  BoundingPoints(aP1: gp_Pnt, aP2: gp_Pnt): void;
  delete(): void;
}

  export declare class IntTools_CommonPrt_1 extends IntTools_CommonPrt {
    constructor();
  }

  export declare class IntTools_CommonPrt_2 extends IntTools_CommonPrt {
    constructor(aCPrt: IntTools_CommonPrt);
  }

export declare class Handle_IntTools_Context {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntTools_Context): void;
  get(): IntTools_Context;
  delete(): void;
}

  export declare class Handle_IntTools_Context_1 extends Handle_IntTools_Context {
    constructor();
  }

  export declare class Handle_IntTools_Context_2 extends Handle_IntTools_Context {
    constructor(thePtr: IntTools_Context);
  }

  export declare class Handle_IntTools_Context_3 extends Handle_IntTools_Context {
    constructor(theHandle: Handle_IntTools_Context);
  }

  export declare class Handle_IntTools_Context_4 extends Handle_IntTools_Context {
    constructor(theHandle: Handle_IntTools_Context);
  }

export declare class IntTools_EdgeEdge {
  SetEdge1_1(theEdge: TopoDS_Edge): void;
  SetEdge1_2(theEdge: TopoDS_Edge, aT1: Standard_Real, aT2: Standard_Real): void;
  SetRange1_1(theRange1: IntTools_Range): void;
  SetRange1_2(aT1: Standard_Real, aT2: Standard_Real): void;
  SetEdge2_1(theEdge: TopoDS_Edge): void;
  SetEdge2_2(theEdge: TopoDS_Edge, aT1: Standard_Real, aT2: Standard_Real): void;
  SetRange2_1(theRange: IntTools_Range): void;
  SetRange2_2(aT1: Standard_Real, aT2: Standard_Real): void;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  FuzzyValue(): Standard_Real;
  CommonParts(): IntTools_SequenceOfCommonPrts;
  UseQuickCoincidenceCheck(bFlag: Standard_Boolean): void;
  IsCoincidenceCheckedQuickly(): Standard_Boolean;
  delete(): void;
}

  export declare class IntTools_EdgeEdge_1 extends IntTools_EdgeEdge {
    constructor();
  }

  export declare class IntTools_EdgeEdge_2 extends IntTools_EdgeEdge {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge);
  }

  export declare class IntTools_EdgeEdge_3 extends IntTools_EdgeEdge {
    constructor(theEdge1: TopoDS_Edge, aT11: Standard_Real, aT12: Standard_Real, theEdge2: TopoDS_Edge, aT21: Standard_Real, aT22: Standard_Real);
  }

export declare class IntTools_Range {
  SetFirst(aFirst: Standard_Real): void;
  SetLast(aLast: Standard_Real): void;
  First(): Standard_Real;
  Last(): Standard_Real;
  Range(aFirst: Standard_Real, aLast: Standard_Real): void;
  delete(): void;
}

  export declare class IntTools_Range_1 extends IntTools_Range {
    constructor();
  }

  export declare class IntTools_Range_2 extends IntTools_Range {
    constructor(aFirst: Standard_Real, aLast: Standard_Real);
  }

export declare class IntTools_SequenceOfCommonPrts extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: IntTools_SequenceOfCommonPrts): IntTools_SequenceOfCommonPrts;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_CommonPrt): void;
  Append_2(theSeq: IntTools_SequenceOfCommonPrts): void;
  Prepend_1(theItem: IntTools_CommonPrt): void;
  Prepend_2(theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  First(): IntTools_CommonPrt;
  ChangeFirst(): IntTools_CommonPrt;
  Last(): IntTools_CommonPrt;
  ChangeLast(): IntTools_CommonPrt;
  Value(theIndex: Standard_Integer): IntTools_CommonPrt;
  ChangeValue(theIndex: Standard_Integer): IntTools_CommonPrt;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
  delete(): void;
}

  export declare class IntTools_SequenceOfCommonPrts_1 extends IntTools_SequenceOfCommonPrts {
    constructor();
  }

  export declare class IntTools_SequenceOfCommonPrts_2 extends IntTools_SequenceOfCommonPrts {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class IntTools_SequenceOfCommonPrts_3 extends IntTools_SequenceOfCommonPrts {
    constructor(theOther: IntTools_SequenceOfCommonPrts);
  }

export declare class IntTools_SequenceOfRanges extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: IntTools_SequenceOfRanges): IntTools_SequenceOfRanges;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_Range): void;
  Append_2(theSeq: IntTools_SequenceOfRanges): void;
  Prepend_1(theItem: IntTools_Range): void;
  Prepend_2(theSeq: IntTools_SequenceOfRanges): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  First(): IntTools_Range;
  ChangeFirst(): IntTools_Range;
  Last(): IntTools_Range;
  ChangeLast(): IntTools_Range;
  Value(theIndex: Standard_Integer): IntTools_Range;
  ChangeValue(theIndex: Standard_Integer): IntTools_Range;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  delete(): void;
}

  export declare class IntTools_SequenceOfRanges_1 extends IntTools_SequenceOfRanges {
    constructor();
  }

  export declare class IntTools_SequenceOfRanges_2 extends IntTools_SequenceOfRanges {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class IntTools_SequenceOfRanges_3 extends IntTools_SequenceOfRanges {
    constructor(theOther: IntTools_SequenceOfRanges);
  }

export declare class Handle_Interface_InterfaceModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_InterfaceModel): void;
  get(): Interface_InterfaceModel;
  delete(): void;
}

  export declare class Handle_Interface_InterfaceModel_1 extends Handle_Interface_InterfaceModel {
    constructor();
  }

  export declare class Handle_Interface_InterfaceModel_2 extends Handle_Interface_InterfaceModel {
    constructor(thePtr: Interface_InterfaceModel);
  }

  export declare class Handle_Interface_InterfaceModel_3 extends Handle_Interface_InterfaceModel {
    constructor(theHandle: Handle_Interface_InterfaceModel);
  }

  export declare class Handle_Interface_InterfaceModel_4 extends Handle_Interface_InterfaceModel {
    constructor(theHandle: Handle_Interface_InterfaceModel);
  }

export declare class Handle_Law_Function {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Function): void;
  get(): Law_Function;
  delete(): void;
}

  export declare class Handle_Law_Function_1 extends Handle_Law_Function {
    constructor();
  }

  export declare class Handle_Law_Function_2 extends Handle_Law_Function {
    constructor(thePtr: Law_Function);
  }

  export declare class Handle_Law_Function_3 extends Handle_Law_Function {
    constructor(theHandle: Handle_Law_Function);
  }

  export declare class Handle_Law_Function_4 extends Handle_Law_Function {
    constructor(theHandle: Handle_Law_Function);
  }

export declare class Law_Function extends Standard_Transient {
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Graphic3d_ZLayerId;
  Intervals(T: IntTools_CArray1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): Handle_Law_Function;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_Message_Alert {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Alert): void;
  get(): Message_Alert;
  delete(): void;
}

  export declare class Handle_Message_Alert_1 extends Handle_Message_Alert {
    constructor();
  }

  export declare class Handle_Message_Alert_2 extends Handle_Message_Alert {
    constructor(thePtr: Message_Alert);
  }

  export declare class Handle_Message_Alert_3 extends Handle_Message_Alert {
    constructor(theHandle: Handle_Message_Alert);
  }

  export declare class Handle_Message_Alert_4 extends Handle_Message_Alert {
    constructor(theHandle: Handle_Message_Alert);
  }

export declare class Handle_Message_Messenger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Messenger): void;
  get(): Message_Messenger;
  delete(): void;
}

  export declare class Handle_Message_Messenger_1 extends Handle_Message_Messenger {
    constructor();
  }

  export declare class Handle_Message_Messenger_2 extends Handle_Message_Messenger {
    constructor(thePtr: Message_Messenger);
  }

  export declare class Handle_Message_Messenger_3 extends Handle_Message_Messenger {
    constructor(theHandle: Handle_Message_Messenger);
  }

  export declare class Handle_Message_Messenger_4 extends Handle_Message_Messenger {
    constructor(theHandle: Handle_Message_Messenger);
  }

export declare class Message_Msg {
  Set_1(theMsg: Standard_CString): void;
  Set_2(theMsg: TCollection_ExtendedString): void;
  Arg_1(theString: Standard_CString): Message_Msg;
  Arg_2(theString: XCAFDoc_PartId): Message_Msg;
  Arg_3(theString: Handle_TCollection_HAsciiString): Message_Msg;
  Arg_4(theString: TCollection_ExtendedString): Message_Msg;
  Arg_5(theString: Handle_TCollection_HExtendedString): Message_Msg;
  Arg_6(theInt: Graphic3d_ZLayerId): Message_Msg;
  Arg_7(theReal: Standard_Real): Message_Msg;
  Original(): TCollection_ExtendedString;
  Value(): TCollection_ExtendedString;
  IsEdited(): Standard_Boolean;
  Get(): TCollection_ExtendedString;
  delete(): void;
}

  export declare class Message_Msg_1 extends Message_Msg {
    constructor();
  }

  export declare class Message_Msg_2 extends Message_Msg {
    constructor(theMsg: Message_Msg);
  }

  export declare class Message_Msg_3 extends Message_Msg {
    constructor(theKey: Standard_CString);
  }

  export declare class Message_Msg_4 extends Message_Msg {
    constructor(theKey: TCollection_ExtendedString);
  }

export declare class Message_ProgressRange {
  UserBreak(): Standard_Boolean;
  More(): Standard_Boolean;
  IsActive(): Standard_Boolean;
  Close(): void;
  delete(): void;
}

  export declare class Message_ProgressRange_1 extends Message_ProgressRange {
    constructor();
  }

  export declare class Message_ProgressRange_2 extends Message_ProgressRange {
    constructor(theOther: Message_ProgressRange);
  }

export declare class Handle_Message_Report {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Report): void;
  get(): Message_Report;
  delete(): void;
}

  export declare class Handle_Message_Report_1 extends Handle_Message_Report {
    constructor();
  }

  export declare class Handle_Message_Report_2 extends Handle_Message_Report {
    constructor(thePtr: Message_Report);
  }

  export declare class Handle_Message_Report_3 extends Handle_Message_Report {
    constructor(theHandle: Handle_Message_Report);
  }

  export declare class Handle_Message_Report_4 extends Handle_Message_Report {
    constructor(theHandle: Handle_Message_Report);
  }

export declare class Handle_NCollection_BaseAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_BaseAllocator): void;
  get(): NCollection_BaseAllocator;
  delete(): void;
}

  export declare class Handle_NCollection_BaseAllocator_1 extends Handle_NCollection_BaseAllocator {
    constructor();
  }

  export declare class Handle_NCollection_BaseAllocator_2 extends Handle_NCollection_BaseAllocator {
    constructor(thePtr: NCollection_BaseAllocator);
  }

  export declare class Handle_NCollection_BaseAllocator_3 extends Handle_NCollection_BaseAllocator {
    constructor(theHandle: Handle_NCollection_BaseAllocator);
  }

  export declare class Handle_NCollection_BaseAllocator_4 extends Handle_NCollection_BaseAllocator {
    constructor(theHandle: Handle_NCollection_BaseAllocator);
  }

export declare class NCollection_BaseList {
  Extent(): Graphic3d_ZLayerId;
  IsEmpty(): Standard_Boolean;
  Allocator(): Handle_NCollection_BaseAllocator;
  delete(): void;
}

export declare class NCollection_BaseMap {
  NbBuckets(): Graphic3d_ZLayerId;
  Extent(): Graphic3d_ZLayerId;
  IsEmpty(): Standard_Boolean;
  Statistics(S: Standard_OStream): void;
  Allocator(): Handle_NCollection_BaseAllocator;
  delete(): void;
}

export declare class NCollection_BaseSequence {
  IsEmpty(): Standard_Boolean;
  Length(): Graphic3d_ZLayerId;
  Allocator(): Handle_NCollection_BaseAllocator;
  delete(): void;
}

export declare class Handle_PCDM_ReaderFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PCDM_ReaderFilter): void;
  get(): PCDM_ReaderFilter;
  delete(): void;
}

  export declare class Handle_PCDM_ReaderFilter_1 extends Handle_PCDM_ReaderFilter {
    constructor();
  }

  export declare class Handle_PCDM_ReaderFilter_2 extends Handle_PCDM_ReaderFilter {
    constructor(thePtr: PCDM_ReaderFilter);
  }

  export declare class Handle_PCDM_ReaderFilter_3 extends Handle_PCDM_ReaderFilter {
    constructor(theHandle: Handle_PCDM_ReaderFilter);
  }

  export declare class Handle_PCDM_ReaderFilter_4 extends Handle_PCDM_ReaderFilter {
    constructor(theHandle: Handle_PCDM_ReaderFilter);
  }

export declare class Handle_PCDM_RetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PCDM_RetrievalDriver): void;
  get(): PCDM_RetrievalDriver;
  delete(): void;
}

  export declare class Handle_PCDM_RetrievalDriver_1 extends Handle_PCDM_RetrievalDriver {
    constructor();
  }

  export declare class Handle_PCDM_RetrievalDriver_2 extends Handle_PCDM_RetrievalDriver {
    constructor(thePtr: PCDM_RetrievalDriver);
  }

  export declare class Handle_PCDM_RetrievalDriver_3 extends Handle_PCDM_RetrievalDriver {
    constructor(theHandle: Handle_PCDM_RetrievalDriver);
  }

  export declare class Handle_PCDM_RetrievalDriver_4 extends Handle_PCDM_RetrievalDriver {
    constructor(theHandle: Handle_PCDM_RetrievalDriver);
  }

export declare class Handle_PCDM_StorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PCDM_StorageDriver): void;
  get(): PCDM_StorageDriver;
  delete(): void;
}

  export declare class Handle_PCDM_StorageDriver_1 extends Handle_PCDM_StorageDriver {
    constructor();
  }

  export declare class Handle_PCDM_StorageDriver_2 extends Handle_PCDM_StorageDriver {
    constructor(thePtr: PCDM_StorageDriver);
  }

  export declare class Handle_PCDM_StorageDriver_3 extends Handle_PCDM_StorageDriver {
    constructor(theHandle: Handle_PCDM_StorageDriver);
  }

  export declare class Handle_PCDM_StorageDriver_4 extends Handle_PCDM_StorageDriver {
    constructor(theHandle: Handle_PCDM_StorageDriver);
  }

export declare class Poly_Array1OfTriangle {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Poly_Triangle): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Poly_Array1OfTriangle): Poly_Array1OfTriangle;
  Move(theOther: Poly_Array1OfTriangle): Poly_Array1OfTriangle;
  First(): Poly_Triangle;
  ChangeFirst(): Poly_Triangle;
  Last(): Poly_Triangle;
  ChangeLast(): Poly_Triangle;
  Value(theIndex: Standard_Integer): Poly_Triangle;
  ChangeValue(theIndex: Standard_Integer): Poly_Triangle;
  SetValue(theIndex: Standard_Integer, theItem: Poly_Triangle): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
  delete(): void;
}

  export declare class Poly_Array1OfTriangle_1 extends Poly_Array1OfTriangle {
    constructor();
  }

  export declare class Poly_Array1OfTriangle_2 extends Poly_Array1OfTriangle {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Poly_Array1OfTriangle_3 extends Poly_Array1OfTriangle {
    constructor(theOther: Poly_Array1OfTriangle);
  }

  export declare class Poly_Array1OfTriangle_4 extends Poly_Array1OfTriangle {
    constructor(theOther: Poly_Array1OfTriangle);
  }

  export declare class Poly_Array1OfTriangle_5 extends Poly_Array1OfTriangle {
    constructor(theBegin: Poly_Triangle, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Poly_ArrayOfNodes {
  IsDoublePrecision(): Standard_Boolean;
  SetDoublePrecision(theIsDouble: Standard_Boolean): void;
  Assign(theOther: Poly_ArrayOfNodes): Poly_ArrayOfNodes;
  Move(theOther: Poly_ArrayOfNodes): Poly_ArrayOfNodes;
  Value(theIndex: Graphic3d_ZLayerId): gp_Pnt;
  SetValue(theIndex: Graphic3d_ZLayerId, theValue: gp_Pnt): void;
  delete(): void;
}

  export declare class Poly_ArrayOfNodes_1 extends Poly_ArrayOfNodes {
    constructor();
  }

  export declare class Poly_ArrayOfNodes_2 extends Poly_ArrayOfNodes {
    constructor(theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfNodes_3 extends Poly_ArrayOfNodes {
    constructor(theOther: Poly_ArrayOfNodes);
  }

  export declare class Poly_ArrayOfNodes_4 extends Poly_ArrayOfNodes {
    constructor(theBegin: gp_Pnt, theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfNodes_5 extends Poly_ArrayOfNodes {
    constructor(theBegin: gp_Vec3f, theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfNodes_6 extends Poly_ArrayOfNodes {
    constructor(theOther: Poly_ArrayOfNodes);
  }

export declare class Poly_ArrayOfUVNodes {
  IsDoublePrecision(): Standard_Boolean;
  SetDoublePrecision(theIsDouble: Standard_Boolean): void;
  Assign(theOther: Poly_ArrayOfUVNodes): Poly_ArrayOfUVNodes;
  Move(theOther: Poly_ArrayOfUVNodes): Poly_ArrayOfUVNodes;
  Value(theIndex: Graphic3d_ZLayerId): gp_Pnt2d;
  SetValue(theIndex: Graphic3d_ZLayerId, theValue: gp_Pnt2d): void;
  delete(): void;
}

  export declare class Poly_ArrayOfUVNodes_1 extends Poly_ArrayOfUVNodes {
    constructor();
  }

  export declare class Poly_ArrayOfUVNodes_2 extends Poly_ArrayOfUVNodes {
    constructor(theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfUVNodes_3 extends Poly_ArrayOfUVNodes {
    constructor(theOther: Poly_ArrayOfUVNodes);
  }

  export declare class Poly_ArrayOfUVNodes_4 extends Poly_ArrayOfUVNodes {
    constructor(theBegin: gp_Pnt2d, theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfUVNodes_5 extends Poly_ArrayOfUVNodes {
    constructor(theBegin: gp_Vec2f, theLength: Graphic3d_ZLayerId);
  }

  export declare class Poly_ArrayOfUVNodes_6 extends Poly_ArrayOfUVNodes {
    constructor(theOther: Poly_ArrayOfUVNodes);
  }

export declare class Poly_Connect {
  Load(theTriangulation: Handle_Poly_Triangulation): void;
  Triangulation(): Handle_Poly_Triangulation;
  Triangle(N: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Triangles(T: Graphic3d_ZLayerId, t1: Graphic3d_ZLayerId, t2: Graphic3d_ZLayerId, t3: Graphic3d_ZLayerId): void;
  Nodes(T: Graphic3d_ZLayerId, n1: Graphic3d_ZLayerId, n2: Graphic3d_ZLayerId, n3: Graphic3d_ZLayerId): void;
  Initialize(N: Graphic3d_ZLayerId): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class Poly_Connect_1 extends Poly_Connect {
    constructor();
  }

  export declare class Poly_Connect_2 extends Poly_Connect {
    constructor(theTriangulation: Handle_Poly_Triangulation);
  }

export declare class Handle_Poly_HArray1OfTriangle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_HArray1OfTriangle): void;
  get(): Poly_HArray1OfTriangle;
  delete(): void;
}

  export declare class Handle_Poly_HArray1OfTriangle_1 extends Handle_Poly_HArray1OfTriangle {
    constructor();
  }

  export declare class Handle_Poly_HArray1OfTriangle_2 extends Handle_Poly_HArray1OfTriangle {
    constructor(thePtr: Poly_HArray1OfTriangle);
  }

  export declare class Handle_Poly_HArray1OfTriangle_3 extends Handle_Poly_HArray1OfTriangle {
    constructor(theHandle: Handle_Poly_HArray1OfTriangle);
  }

  export declare class Handle_Poly_HArray1OfTriangle_4 extends Handle_Poly_HArray1OfTriangle {
    constructor(theHandle: Handle_Poly_HArray1OfTriangle);
  }

export declare class Handle_Poly_Polygon2D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Polygon2D): void;
  get(): Poly_Polygon2D;
  delete(): void;
}

  export declare class Handle_Poly_Polygon2D_1 extends Handle_Poly_Polygon2D {
    constructor();
  }

  export declare class Handle_Poly_Polygon2D_2 extends Handle_Poly_Polygon2D {
    constructor(thePtr: Poly_Polygon2D);
  }

  export declare class Handle_Poly_Polygon2D_3 extends Handle_Poly_Polygon2D {
    constructor(theHandle: Handle_Poly_Polygon2D);
  }

  export declare class Handle_Poly_Polygon2D_4 extends Handle_Poly_Polygon2D {
    constructor(theHandle: Handle_Poly_Polygon2D);
  }

export declare class Handle_Poly_Polygon3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Polygon3D): void;
  get(): Poly_Polygon3D;
  delete(): void;
}

  export declare class Handle_Poly_Polygon3D_1 extends Handle_Poly_Polygon3D {
    constructor();
  }

  export declare class Handle_Poly_Polygon3D_2 extends Handle_Poly_Polygon3D {
    constructor(thePtr: Poly_Polygon3D);
  }

  export declare class Handle_Poly_Polygon3D_3 extends Handle_Poly_Polygon3D {
    constructor(theHandle: Handle_Poly_Polygon3D);
  }

  export declare class Handle_Poly_Polygon3D_4 extends Handle_Poly_Polygon3D {
    constructor(theHandle: Handle_Poly_Polygon3D);
  }

export declare class Handle_Poly_PolygonOnTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_PolygonOnTriangulation): void;
  get(): Poly_PolygonOnTriangulation;
  delete(): void;
}

  export declare class Handle_Poly_PolygonOnTriangulation_1 extends Handle_Poly_PolygonOnTriangulation {
    constructor();
  }

  export declare class Handle_Poly_PolygonOnTriangulation_2 extends Handle_Poly_PolygonOnTriangulation {
    constructor(thePtr: Poly_PolygonOnTriangulation);
  }

  export declare class Handle_Poly_PolygonOnTriangulation_3 extends Handle_Poly_PolygonOnTriangulation {
    constructor(theHandle: Handle_Poly_PolygonOnTriangulation);
  }

  export declare class Handle_Poly_PolygonOnTriangulation_4 extends Handle_Poly_PolygonOnTriangulation {
    constructor(theHandle: Handle_Poly_PolygonOnTriangulation);
  }

export declare class Poly_Triangle {
  Set_1(theN1: Graphic3d_ZLayerId, theN2: Graphic3d_ZLayerId, theN3: Graphic3d_ZLayerId): void;
  Set_2(theIndex: Graphic3d_ZLayerId, theNode: Graphic3d_ZLayerId): void;
  Get(theN1: Graphic3d_ZLayerId, theN2: Graphic3d_ZLayerId, theN3: Graphic3d_ZLayerId): void;
  Value(theIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  ChangeValue(theIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class Poly_Triangle_1 extends Poly_Triangle {
    constructor();
  }

  export declare class Poly_Triangle_2 extends Poly_Triangle {
    constructor(theN1: Graphic3d_ZLayerId, theN2: Graphic3d_ZLayerId, theN3: Graphic3d_ZLayerId);
  }

export declare class Handle_Poly_Triangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Triangulation): void;
  get(): Poly_Triangulation;
  delete(): void;
}

  export declare class Handle_Poly_Triangulation_1 extends Handle_Poly_Triangulation {
    constructor();
  }

  export declare class Handle_Poly_Triangulation_2 extends Handle_Poly_Triangulation {
    constructor(thePtr: Poly_Triangulation);
  }

  export declare class Handle_Poly_Triangulation_3 extends Handle_Poly_Triangulation {
    constructor(theHandle: Handle_Poly_Triangulation);
  }

  export declare class Handle_Poly_Triangulation_4 extends Handle_Poly_Triangulation {
    constructor(theHandle: Handle_Poly_Triangulation);
  }

export declare class Poly_Triangulation extends Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  Copy(): Handle_Poly_Triangulation;
  Deflection_1(): Standard_Real;
  Deflection_2(theDeflection: Standard_Real): void;
  Parameters_1(): Handle_Poly_TriangulationParameters;
  Parameters_2(theParams: Handle_Poly_TriangulationParameters): void;
  Clear(): void;
  HasGeometry(): Standard_Boolean;
  NbNodes(): Graphic3d_ZLayerId;
  NbTriangles(): Graphic3d_ZLayerId;
  HasUVNodes(): Standard_Boolean;
  HasNormals(): Standard_Boolean;
  Node(theIndex: Graphic3d_ZLayerId): gp_Pnt;
  SetNode(theIndex: Graphic3d_ZLayerId, thePnt: gp_Pnt): void;
  UVNode(theIndex: Graphic3d_ZLayerId): gp_Pnt2d;
  SetUVNode(theIndex: Graphic3d_ZLayerId, thePnt: gp_Pnt2d): void;
  Triangle(theIndex: Graphic3d_ZLayerId): Poly_Triangle;
  SetTriangle(theIndex: Graphic3d_ZLayerId, theTriangle: Poly_Triangle): void;
  Normal_1(theIndex: Graphic3d_ZLayerId): gp_Dir;
  Normal_2(theIndex: Graphic3d_ZLayerId, theVec3: gp_Vec3f): void;
  SetNormal_1(theIndex: Graphic3d_ZLayerId, theNormal: gp_Vec3f): void;
  SetNormal_2(theIndex: Graphic3d_ZLayerId, theNormal: gp_Dir): void;
  MeshPurpose(): Poly_MeshPurpose;
  SetMeshPurpose(thePurpose: Poly_MeshPurpose): void;
  CachedMinMax(): Bnd_Box;
  SetCachedMinMax(theBox: Bnd_Box): void;
  HasCachedMinMax(): Standard_Boolean;
  UpdateCachedMinMax(): void;
  MinMax(theBox: Bnd_Box, theTrsf: gp_Trsf, theIsAccurate: Standard_Boolean): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  IsDoublePrecision(): Standard_Boolean;
  SetDoublePrecision(theIsDouble: Standard_Boolean): void;
  ResizeNodes(theNbNodes: Graphic3d_ZLayerId, theToCopyOld: Standard_Boolean): void;
  ResizeTriangles(theNbTriangles: Graphic3d_ZLayerId, theToCopyOld: Standard_Boolean): void;
  AddUVNodes(): void;
  RemoveUVNodes(): void;
  AddNormals(): void;
  RemoveNormals(): void;
  ComputeNormals(): void;
  MapNodeArray(): Handle_TColgp_HArray1OfPnt;
  MapTriangleArray(): Handle_Poly_HArray1OfTriangle;
  MapUVNodeArray(): Handle_TColgp_HArray1OfPnt2d;
  MapNormalArray(): Handle_TShort_HArray1OfShortReal;
  InternalTriangles(): Poly_Array1OfTriangle;
  InternalNodes(): Poly_ArrayOfNodes;
  InternalUVNodes(): Poly_ArrayOfUVNodes;
  InternalNormals(): any;
  SetNormals(theNormals: Handle_TShort_HArray1OfShortReal): void;
  Triangles(): Poly_Array1OfTriangle;
  ChangeTriangles(): Poly_Array1OfTriangle;
  ChangeTriangle(theIndex: Graphic3d_ZLayerId): Poly_Triangle;
  NbDeferredNodes(): Graphic3d_ZLayerId;
  NbDeferredTriangles(): Graphic3d_ZLayerId;
  HasDeferredData(): Standard_Boolean;
  LoadDeferredData(theFileSystem: any): Standard_Boolean;
  DetachedLoadDeferredData(theFileSystem: any): Handle_Poly_Triangulation;
  UnloadDeferredData(): Standard_Boolean;
  delete(): void;
}

  export declare class Poly_Triangulation_1 extends Poly_Triangulation {
    constructor();
  }

  export declare class Poly_Triangulation_2 extends Poly_Triangulation {
    constructor(theNbNodes: Graphic3d_ZLayerId, theNbTriangles: Graphic3d_ZLayerId, theHasUVNodes: Standard_Boolean, theHasNormals: Standard_Boolean);
  }

  export declare class Poly_Triangulation_3 extends Poly_Triangulation {
    constructor(Nodes: TColgp_Array1OfPnt, Triangles: Poly_Array1OfTriangle);
  }

  export declare class Poly_Triangulation_4 extends Poly_Triangulation {
    constructor(Nodes: TColgp_Array1OfPnt, UVNodes: TColgp_Array1OfPnt2d, Triangles: Poly_Array1OfTriangle);
  }

  export declare class Poly_Triangulation_5 extends Poly_Triangulation {
    constructor(theTriangulation: Handle_Poly_Triangulation);
  }

export declare class Handle_Poly_TriangulationParameters {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_TriangulationParameters): void;
  get(): Poly_TriangulationParameters;
  delete(): void;
}

  export declare class Handle_Poly_TriangulationParameters_1 extends Handle_Poly_TriangulationParameters {
    constructor();
  }

  export declare class Handle_Poly_TriangulationParameters_2 extends Handle_Poly_TriangulationParameters {
    constructor(thePtr: Poly_TriangulationParameters);
  }

  export declare class Handle_Poly_TriangulationParameters_3 extends Handle_Poly_TriangulationParameters {
    constructor(theHandle: Handle_Poly_TriangulationParameters);
  }

  export declare class Handle_Poly_TriangulationParameters_4 extends Handle_Poly_TriangulationParameters {
    constructor(theHandle: Handle_Poly_TriangulationParameters);
  }

export declare class Precision {
  constructor();
  static Angular(): Standard_Real;
  static Confusion(): Standard_Real;
  static SquareConfusion(): Standard_Real;
  static Intersection(): Standard_Real;
  static Approximation(): Standard_Real;
  static Parametric_1(P: Standard_Real, T: Standard_Real): Standard_Real;
  static PConfusion_1(T: Standard_Real): Standard_Real;
  static SquarePConfusion(): Standard_Real;
  static PIntersection_1(T: Standard_Real): Standard_Real;
  static PApproximation_1(T: Standard_Real): Standard_Real;
  static Parametric_2(P: Standard_Real): Standard_Real;
  static PConfusion_2(): Standard_Real;
  static PIntersection_2(): Standard_Real;
  static PApproximation_2(): Standard_Real;
  static IsInfinite(R: Standard_Real): Standard_Boolean;
  static IsPositiveInfinite(R: Standard_Real): Standard_Boolean;
  static IsNegativeInfinite(R: Standard_Real): Standard_Boolean;
  static Infinite(): Standard_Real;
  delete(): void;
}

export declare class ProjLib {
  constructor();
  static Project_1(Pl: gp_Pln, P: gp_Pnt): gp_Pnt2d;
  static Project_2(Pl: gp_Pln, L: gp_Lin): gp_Lin2d;
  static Project_3(Pl: gp_Pln, C: gp_Circ): gp_Circ2d;
  static Project_4(Pl: gp_Pln, E: gp_Elips): gp_Elips2d;
  static Project_5(Pl: gp_Pln, P: gp_Parab): gp_Parab2d;
  static Project_6(Pl: gp_Pln, H: gp_Hypr): gp_Hypr2d;
  static Project_7(Cy: gp_Cylinder, P: gp_Pnt): gp_Pnt2d;
  static Project_8(Cy: gp_Cylinder, L: gp_Lin): gp_Lin2d;
  static Project_9(Cy: gp_Cylinder, Ci: gp_Circ): gp_Lin2d;
  static Project_10(Co: gp_Cone, P: gp_Pnt): gp_Pnt2d;
  static Project_11(Co: gp_Cone, L: gp_Lin): gp_Lin2d;
  static Project_12(Co: gp_Cone, Ci: gp_Circ): gp_Lin2d;
  static Project_13(Sp: gp_Sphere, P: gp_Pnt): gp_Pnt2d;
  static Project_14(Sp: gp_Sphere, Ci: gp_Circ): gp_Lin2d;
  static Project_15(To: gp_Torus, P: gp_Pnt): gp_Pnt2d;
  static Project_16(To: gp_Torus, Ci: gp_Circ): gp_Lin2d;
  static MakePCurveOfType(PC: ProjLib_HProjectedCurve, aC: Handle_Geom2d_Curve): void;
  static IsAnaSurf(theAS: Handle_Adaptor3d_Surface): Standard_Boolean;
  delete(): void;
}

export declare class Handle_Prs3d_Drawer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_Drawer): void;
  get(): Prs3d_Drawer;
  delete(): void;
}

  export declare class Handle_Prs3d_Drawer_1 extends Handle_Prs3d_Drawer {
    constructor();
  }

  export declare class Handle_Prs3d_Drawer_2 extends Handle_Prs3d_Drawer {
    constructor(thePtr: Prs3d_Drawer);
  }

  export declare class Handle_Prs3d_Drawer_3 extends Handle_Prs3d_Drawer {
    constructor(theHandle: Handle_Prs3d_Drawer);
  }

  export declare class Handle_Prs3d_Drawer_4 extends Handle_Prs3d_Drawer {
    constructor(theHandle: Handle_Prs3d_Drawer);
  }

export declare class Quantity_Color {
  Name_1(): Quantity_NameOfColor;
  SetValues_1(theName: Quantity_NameOfColor): void;
  Rgb(): any;
  Values(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  SetValues_2(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  Red(): Standard_Real;
  Green(): Standard_Real;
  Blue(): Standard_Real;
  Hue(): Standard_Real;
  Light(): Standard_Real;
  ChangeIntensity(theDelta: Standard_Real): void;
  Saturation(): Standard_Real;
  ChangeContrast(theDelta: Standard_Real): void;
  IsDifferent(theOther: Quantity_Color): Standard_Boolean;
  IsEqual(theOther: Quantity_Color): Standard_Boolean;
  Distance(theColor: Quantity_Color): Standard_Real;
  SquareDistance(theColor: Quantity_Color): Standard_Real;
  Delta(theColor: Quantity_Color, DC: Standard_Real, DI: Standard_Real): void;
  DeltaE2000(theOther: Quantity_Color): Standard_Real;
  static Name_2(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): Quantity_NameOfColor;
  static StringName(theColor: Quantity_NameOfColor): Standard_CString;
  static ColorFromName_1(theName: Standard_CString, theColor: Quantity_NameOfColor): Standard_Boolean;
  static ColorFromName_2(theColorNameString: Standard_CString, theColor: Quantity_Color): Standard_Boolean;
  static ColorFromHex(theHexColorString: Standard_CString, theColor: Quantity_Color): Standard_Boolean;
  static ColorToHex(theColor: Quantity_Color, theToPrefixHash: Standard_Boolean): XCAFDoc_PartId;
  static Convert_sRGB_To_HLS(theRgb: NCollection_Vec3<float>): any;
  static Convert_HLS_To_sRGB(theHls: NCollection_Vec3<float>): any;
  static Convert_LinearRGB_To_HLS(theRgb: NCollection_Vec3<float>): any;
  static Convert_HLS_To_LinearRGB(theHls: NCollection_Vec3<float>): any;
  static Convert_LinearRGB_To_Lab(theRgb: NCollection_Vec3<float>): any;
  static Convert_Lab_To_Lch(theLab: NCollection_Vec3<float>): any;
  static Convert_Lab_To_LinearRGB(theLab: NCollection_Vec3<float>): any;
  static Convert_Lch_To_Lab(theLch: NCollection_Vec3<float>): any;
  static Color2argb(theColor: Quantity_Color, theARGB: Graphic3d_ZLayerId): void;
  static Argb2color(theARGB: Graphic3d_ZLayerId, theColor: Quantity_Color): void;
  static Convert_LinearRGB_To_sRGB_1(theLinearValue: Standard_Real): Standard_Real;
  static Convert_LinearRGB_To_sRGB_2(theLinearValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_sRGB_To_LinearRGB_1(thesRGBValue: Standard_Real): Standard_Real;
  static Convert_sRGB_To_LinearRGB_2(thesRGBValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_LinearRGB_To_sRGB_approx22_1(theLinearValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_sRGB_To_LinearRGB_approx22_1(thesRGBValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_LinearRGB_To_sRGB_approx22_2(theRGB: NCollection_Vec3<float>): any;
  static Convert_sRGB_To_LinearRGB_approx22_2(theRGB: NCollection_Vec3<float>): any;
  static HlsRgb(theH: Standard_Real, theL: Standard_Real, theS: Standard_Real, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  static RgbHls(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real, theH: Standard_Real, theL: Standard_Real, theS: Standard_Real): void;
  static Epsilon(): Standard_Real;
  static SetEpsilon(theEpsilon: Standard_Real): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class Quantity_Color_1 extends Quantity_Color {
    constructor();
  }

  export declare class Quantity_Color_2 extends Quantity_Color {
    constructor(theName: Quantity_NameOfColor);
  }

  export declare class Quantity_Color_3 extends Quantity_Color {
    constructor(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor);
  }

  export declare class Quantity_Color_4 extends Quantity_Color {
    constructor(theRgb: NCollection_Vec3<float>);
  }

export declare type Quantity_TypeOfColor = {
  Quantity_TOC_RGB: {};
  Quantity_TOC_sRGB: {};
  Quantity_TOC_HLS: {};
  Quantity_TOC_CIELab: {};
  Quantity_TOC_CIELch: {};
}

export declare class Handle_Resource_Manager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Resource_Manager): void;
  get(): Resource_Manager;
  delete(): void;
}

  export declare class Handle_Resource_Manager_1 extends Handle_Resource_Manager {
    constructor();
  }

  export declare class Handle_Resource_Manager_2 extends Handle_Resource_Manager {
    constructor(thePtr: Resource_Manager);
  }

  export declare class Handle_Resource_Manager_3 extends Handle_Resource_Manager {
    constructor(theHandle: Handle_Resource_Manager);
  }

  export declare class Handle_Resource_Manager_4 extends Handle_Resource_Manager {
    constructor(theHandle: Handle_Resource_Manager);
  }

export declare class Handle_STEPCAFControl_ExternFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPCAFControl_ExternFile): void;
  get(): STEPCAFControl_ExternFile;
  delete(): void;
}

  export declare class Handle_STEPCAFControl_ExternFile_1 extends Handle_STEPCAFControl_ExternFile {
    constructor();
  }

  export declare class Handle_STEPCAFControl_ExternFile_2 extends Handle_STEPCAFControl_ExternFile {
    constructor(thePtr: STEPCAFControl_ExternFile);
  }

  export declare class Handle_STEPCAFControl_ExternFile_3 extends Handle_STEPCAFControl_ExternFile {
    constructor(theHandle: Handle_STEPCAFControl_ExternFile);
  }

  export declare class Handle_STEPCAFControl_ExternFile_4 extends Handle_STEPCAFControl_ExternFile {
    constructor(theHandle: Handle_STEPCAFControl_ExternFile);
  }

export declare class STEPCAFControl_Reader {
  Init(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean): void;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  NbRootsForTransfer(): Graphic3d_ZLayerId;
  TransferOneRoot(num: Graphic3d_ZLayerId, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_1(doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(filename: XCAFDoc_PartId, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(filename: Standard_CString, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile(name: Standard_CString, ef: Handle_STEPCAFControl_ExternFile): Standard_Boolean;
  ChangeReader(): STEPControl_Reader;
  Reader(): STEPControl_Reader;
  static FindInstance(NAUO: Handle_StepRepr_NextAssemblyUsageOccurrence, STool: Handle_XCAFDoc_ShapeTool, Tool: STEPConstruct_Tool, ShapeLabelMap: XCAFDoc_DataMapOfShapeLabel): TDF_Label;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetGDTMode(gdtmode: Standard_Boolean): void;
  GetGDTMode(): Standard_Boolean;
  SetMatMode(matmode: Standard_Boolean): void;
  GetMatMode(): Standard_Boolean;
  SetViewMode(viewmode: Standard_Boolean): void;
  GetViewMode(): Standard_Boolean;
  GetShapeLabelMap(): XCAFDoc_DataMapOfShapeLabel;
  delete(): void;
}

  export declare class STEPCAFControl_Reader_1 extends STEPCAFControl_Reader {
    constructor();
  }

  export declare class STEPCAFControl_Reader_2 extends STEPCAFControl_Reader {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare class STEPCAFControl_Writer {
  Init(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean): void;
  Write(filename: Standard_CString): IFSelect_ReturnStatus;
  Transfer_1(doc: Handle_TDocStd_Document, mode: STEPControl_StepModelType, multi: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_2(L: TDF_Label, mode: STEPControl_StepModelType, multi: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_3(L: TDF_LabelSequence, mode: STEPControl_StepModelType, multi: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(doc: Handle_TDocStd_Document, filename: XCAFDoc_PartId, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(doc: Handle_TDocStd_Document, filename: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile_1(L: TDF_Label, ef: Handle_STEPCAFControl_ExternFile): Standard_Boolean;
  ExternFile_2(name: Standard_CString, ef: Handle_STEPCAFControl_ExternFile): Standard_Boolean;
  ChangeWriter(): STEPControl_Writer;
  Writer(): STEPControl_Writer;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetDimTolMode(dimtolmode: Standard_Boolean): void;
  GetDimTolMode(): Standard_Boolean;
  SetMaterialMode(matmode: Standard_Boolean): void;
  GetMaterialMode(): Standard_Boolean;
  delete(): void;
}

  export declare class STEPCAFControl_Writer_1 extends STEPCAFControl_Writer {
    constructor();
  }

  export declare class STEPCAFControl_Writer_2 extends STEPCAFControl_Writer {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare class STEPConstruct_Tool {
  WS(): Handle_XSControl_WorkSession;
  Model(): Handle_Interface_InterfaceModel;
  Graph(recompute: Standard_Boolean): Interface_Graph;
  TransientProcess(): Handle_Transfer_TransientProcess;
  FinderProcess(): Handle_Transfer_FinderProcess;
  delete(): void;
}

  export declare class STEPConstruct_Tool_1 extends STEPConstruct_Tool {
    constructor();
  }

  export declare class STEPConstruct_Tool_2 extends STEPConstruct_Tool {
    constructor(WS: Handle_XSControl_WorkSession);
  }

export declare class STEPControl_Reader extends XSControl_Reader {
  StepModel(): Handle_StepData_StepModel;
  TransferRoot(num: Graphic3d_ZLayerId, theProgress: Message_ProgressRange): Standard_Boolean;
  NbRootsForTransfer(): Graphic3d_ZLayerId;
  FileUnits(theUnitLengthNames: TColStd_SequenceOfAsciiString, theUnitAngleNames: TColStd_SequenceOfAsciiString, theUnitSolidAngleNames: TColStd_SequenceOfAsciiString): void;
  SetSystemLengthUnit(theLengthUnit: Standard_Real): void;
  SystemLengthUnit(): Standard_Real;
  delete(): void;
}

  export declare class STEPControl_Reader_1 extends STEPControl_Reader {
    constructor();
  }

  export declare class STEPControl_Reader_2 extends STEPControl_Reader {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare type STEPControl_StepModelType = {
  STEPControl_AsIs: {};
  STEPControl_ManifoldSolidBrep: {};
  STEPControl_BrepWithVoids: {};
  STEPControl_FacetedBrep: {};
  STEPControl_FacetedBrepAndBrepWithVoids: {};
  STEPControl_ShellBasedSurfaceModel: {};
  STEPControl_GeometricCurveSet: {};
  STEPControl_Hybrid: {};
}

export declare class STEPControl_Writer {
  SetTolerance(Tol: Standard_Real): void;
  UnsetTolerance(): void;
  SetWS(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean): void;
  WS(): Handle_XSControl_WorkSession;
  Model(newone: Standard_Boolean): Handle_StepData_StepModel;
  Transfer(sh: TopoDS_Shape, mode: STEPControl_StepModelType, compgraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Write(filename: Standard_CString): IFSelect_ReturnStatus;
  PrintStatsTransfer(what: Graphic3d_ZLayerId, mode: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class STEPControl_Writer_1 extends STEPControl_Writer {
    constructor();
  }

  export declare class STEPControl_Writer_2 extends STEPControl_Writer {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare class ShapeAnalysis_FreeBounds {
  GetClosedWires(): TopoDS_Compound;
  GetOpenWires(): TopoDS_Compound;
  static ConnectEdgesToWires(edges: Handle_TopTools_HSequenceOfShape, toler: Standard_Real, shared: Standard_Boolean, wires: Handle_TopTools_HSequenceOfShape): void;
  static ConnectWiresToWires_1(iwires: Handle_TopTools_HSequenceOfShape, toler: Standard_Real, shared: Standard_Boolean, owires: Handle_TopTools_HSequenceOfShape): void;
  static ConnectWiresToWires_2(iwires: Handle_TopTools_HSequenceOfShape, toler: Standard_Real, shared: Standard_Boolean, owires: Handle_TopTools_HSequenceOfShape, vertices: TopTools_DataMapOfShapeShape): void;
  static SplitWires_1(wires: Handle_TopTools_HSequenceOfShape, toler: Standard_Real, shared: Standard_Boolean, closed: Handle_TopTools_HSequenceOfShape, open: Handle_TopTools_HSequenceOfShape): void;
  static DispatchWires(wires: Handle_TopTools_HSequenceOfShape, closed: TopoDS_Compound, open: TopoDS_Compound): void;
  delete(): void;
}

  export declare class ShapeAnalysis_FreeBounds_1 extends ShapeAnalysis_FreeBounds {
    constructor();
  }

  export declare class ShapeAnalysis_FreeBounds_2 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, toler: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

  export declare class ShapeAnalysis_FreeBounds_3 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, splitclosed: Standard_Boolean, splitopen: Standard_Boolean, checkinternaledges: Standard_Boolean);
  }

export declare class Handle_ShapeAnalysis_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_Surface): void;
  get(): ShapeAnalysis_Surface;
  delete(): void;
}

  export declare class Handle_ShapeAnalysis_Surface_1 extends Handle_ShapeAnalysis_Surface {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_Surface_2 extends Handle_ShapeAnalysis_Surface {
    constructor(thePtr: ShapeAnalysis_Surface);
  }

  export declare class Handle_ShapeAnalysis_Surface_3 extends Handle_ShapeAnalysis_Surface {
    constructor(theHandle: Handle_ShapeAnalysis_Surface);
  }

  export declare class Handle_ShapeAnalysis_Surface_4 extends Handle_ShapeAnalysis_Surface {
    constructor(theHandle: Handle_ShapeAnalysis_Surface);
  }

export declare class Handle_ShapeAnalysis_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_Wire): void;
  get(): ShapeAnalysis_Wire;
  delete(): void;
}

  export declare class Handle_ShapeAnalysis_Wire_1 extends Handle_ShapeAnalysis_Wire {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_Wire_2 extends Handle_ShapeAnalysis_Wire {
    constructor(thePtr: ShapeAnalysis_Wire);
  }

  export declare class Handle_ShapeAnalysis_Wire_3 extends Handle_ShapeAnalysis_Wire {
    constructor(theHandle: Handle_ShapeAnalysis_Wire);
  }

  export declare class Handle_ShapeAnalysis_Wire_4 extends Handle_ShapeAnalysis_Wire {
    constructor(theHandle: Handle_ShapeAnalysis_Wire);
  }

export declare class ShapeAnalysis_WireOrder {
  SetMode(mode3d: Standard_Boolean, tol: Standard_Real): void;
  Tolerance(): Standard_Real;
  Clear(): void;
  Add_1(start3d: gp_XYZ, end3d: gp_XYZ): void;
  Add_2(start2d: gp_XY, end2d: gp_XY): void;
  NbEdges(): Graphic3d_ZLayerId;
  KeepLoopsMode(): Standard_Boolean;
  Perform(closed: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Status(): Graphic3d_ZLayerId;
  Ordered(n: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  XYZ(num: Graphic3d_ZLayerId, start3d: gp_XYZ, end3d: gp_XYZ): void;
  XY(num: Graphic3d_ZLayerId, start2d: gp_XY, end2d: gp_XY): void;
  Gap(num: Graphic3d_ZLayerId): Standard_Real;
  SetChains(gap: Standard_Real): void;
  NbChains(): Graphic3d_ZLayerId;
  Chain(num: Graphic3d_ZLayerId, n1: Graphic3d_ZLayerId, n2: Graphic3d_ZLayerId): void;
  SetCouples(gap: Standard_Real): void;
  NbCouples(): Graphic3d_ZLayerId;
  Couple(num: Graphic3d_ZLayerId, n1: Graphic3d_ZLayerId, n2: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class ShapeAnalysis_WireOrder_1 extends ShapeAnalysis_WireOrder {
    constructor();
  }

  export declare class ShapeAnalysis_WireOrder_2 extends ShapeAnalysis_WireOrder {
    constructor(mode3d: Standard_Boolean, tol: Standard_Real);
  }

export declare class Handle_ShapeBuild_ReShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeBuild_ReShape): void;
  get(): ShapeBuild_ReShape;
  delete(): void;
}

  export declare class Handle_ShapeBuild_ReShape_1 extends Handle_ShapeBuild_ReShape {
    constructor();
  }

  export declare class Handle_ShapeBuild_ReShape_2 extends Handle_ShapeBuild_ReShape {
    constructor(thePtr: ShapeBuild_ReShape);
  }

  export declare class Handle_ShapeBuild_ReShape_3 extends Handle_ShapeBuild_ReShape {
    constructor(theHandle: Handle_ShapeBuild_ReShape);
  }

  export declare class Handle_ShapeBuild_ReShape_4 extends Handle_ShapeBuild_ReShape {
    constructor(theHandle: Handle_ShapeBuild_ReShape);
  }

export declare class Handle_ShapeExtend_BasicMsgRegistrator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_BasicMsgRegistrator): void;
  get(): ShapeExtend_BasicMsgRegistrator;
  delete(): void;
}

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_1 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor();
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_2 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(thePtr: ShapeExtend_BasicMsgRegistrator);
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_3 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_BasicMsgRegistrator);
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_4 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_BasicMsgRegistrator);
  }

export declare class Handle_ShapeExtend_WireData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_WireData): void;
  get(): ShapeExtend_WireData;
  delete(): void;
}

  export declare class Handle_ShapeExtend_WireData_1 extends Handle_ShapeExtend_WireData {
    constructor();
  }

  export declare class Handle_ShapeExtend_WireData_2 extends Handle_ShapeExtend_WireData {
    constructor(thePtr: ShapeExtend_WireData);
  }

  export declare class Handle_ShapeExtend_WireData_3 extends Handle_ShapeExtend_WireData {
    constructor(theHandle: Handle_ShapeExtend_WireData);
  }

  export declare class Handle_ShapeExtend_WireData_4 extends Handle_ShapeExtend_WireData {
    constructor(theHandle: Handle_ShapeExtend_WireData);
  }

export declare class ShapeExtend_WireData extends Standard_Transient {
  Init_1(other: Handle_ShapeExtend_WireData): void;
  Init_2(wire: TopoDS_Wire, chained: Standard_Boolean, theManifoldMode: Standard_Boolean): Standard_Boolean;
  Clear(): void;
  ComputeSeams(enforce: Standard_Boolean): void;
  SetLast(num: Graphic3d_ZLayerId): void;
  SetDegeneratedLast(): void;
  Add_1(edge: TopoDS_Edge, atnum: Graphic3d_ZLayerId): void;
  Add_2(wire: TopoDS_Wire, atnum: Graphic3d_ZLayerId): void;
  Add_3(wire: Handle_ShapeExtend_WireData, atnum: Graphic3d_ZLayerId): void;
  Add_4(shape: TopoDS_Shape, atnum: Graphic3d_ZLayerId): void;
  AddOriented_1(edge: TopoDS_Edge, mode: Graphic3d_ZLayerId): void;
  AddOriented_2(wire: TopoDS_Wire, mode: Graphic3d_ZLayerId): void;
  AddOriented_3(shape: TopoDS_Shape, mode: Graphic3d_ZLayerId): void;
  Remove(num: Graphic3d_ZLayerId): void;
  Set(edge: TopoDS_Edge, num: Graphic3d_ZLayerId): void;
  Reverse_1(): void;
  Reverse_2(face: TopoDS_Face): void;
  NbEdges(): Graphic3d_ZLayerId;
  NbNonManifoldEdges(): Graphic3d_ZLayerId;
  NonmanifoldEdge(num: Graphic3d_ZLayerId): TopoDS_Edge;
  NonmanifoldEdges(): Handle_TopTools_HSequenceOfShape;
  ManifoldMode(): Standard_Boolean;
  Edge(num: Graphic3d_ZLayerId): TopoDS_Edge;
  Index(edge: TopoDS_Edge): Graphic3d_ZLayerId;
  IsSeam(num: Graphic3d_ZLayerId): Standard_Boolean;
  Wire(): TopoDS_Wire;
  WireAPIMake(): TopoDS_Wire;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class ShapeExtend_WireData_1 extends ShapeExtend_WireData {
    constructor();
  }

  export declare class ShapeExtend_WireData_2 extends ShapeExtend_WireData {
    constructor(wire: TopoDS_Wire, chained: Standard_Boolean, theManifoldMode: Standard_Boolean);
  }

export declare class Handle_ShapeFix_Edge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Edge): void;
  get(): ShapeFix_Edge;
  delete(): void;
}

  export declare class Handle_ShapeFix_Edge_1 extends Handle_ShapeFix_Edge {
    constructor();
  }

  export declare class Handle_ShapeFix_Edge_2 extends Handle_ShapeFix_Edge {
    constructor(thePtr: ShapeFix_Edge);
  }

  export declare class Handle_ShapeFix_Edge_3 extends Handle_ShapeFix_Edge {
    constructor(theHandle: Handle_ShapeFix_Edge);
  }

  export declare class Handle_ShapeFix_Edge_4 extends Handle_ShapeFix_Edge {
    constructor(theHandle: Handle_ShapeFix_Edge);
  }

export declare class Handle_ShapeFix_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Face): void;
  get(): ShapeFix_Face;
  delete(): void;
}

  export declare class Handle_ShapeFix_Face_1 extends Handle_ShapeFix_Face {
    constructor();
  }

  export declare class Handle_ShapeFix_Face_2 extends Handle_ShapeFix_Face {
    constructor(thePtr: ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_3 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_4 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

export declare class ShapeFix_Face extends ShapeFix_Root {
  ClearModes(): void;
  Init_1(face: TopoDS_Face): void;
  Init_2(surf: Handle_Geom_Surface, preci: Standard_Real, fwd: Standard_Boolean): void;
  Init_3(surf: Handle_ShapeAnalysis_Surface, preci: Standard_Real, fwd: Standard_Boolean): void;
  SetMsgRegistrator(msgreg: Handle_ShapeExtend_BasicMsgRegistrator): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixWireMode(): Graphic3d_ZLayerId;
  FixOrientationMode(): Graphic3d_ZLayerId;
  FixAddNaturalBoundMode(): Graphic3d_ZLayerId;
  FixMissingSeamMode(): Graphic3d_ZLayerId;
  FixSmallAreaWireMode(): Graphic3d_ZLayerId;
  RemoveSmallAreaFaceMode(): Graphic3d_ZLayerId;
  FixIntersectingWiresMode(): Graphic3d_ZLayerId;
  FixLoopWiresMode(): Graphic3d_ZLayerId;
  FixSplitFaceMode(): Graphic3d_ZLayerId;
  AutoCorrectPrecisionMode(): Graphic3d_ZLayerId;
  FixPeriodicDegeneratedMode(): Graphic3d_ZLayerId;
  Face(): TopoDS_Face;
  Result(): TopoDS_Shape;
  Add(wire: TopoDS_Wire): void;
  Perform(): Standard_Boolean;
  FixOrientation_1(): Standard_Boolean;
  FixOrientation_2(MapWires: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  FixAddNaturalBound(): Standard_Boolean;
  FixMissingSeam(): Standard_Boolean;
  FixSmallAreaWire(theIsRemoveSmallFace: Standard_Boolean): Standard_Boolean;
  FixLoopWire(aResWires: TopTools_SequenceOfShape): Standard_Boolean;
  FixIntersectingWires(): Standard_Boolean;
  FixWiresTwoCoincEdges(): Standard_Boolean;
  FixSplitFace(MapWires: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  FixPeriodicDegenerated(): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  FixWireTool(): Handle_ShapeFix_Wire;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class ShapeFix_Face_1 extends ShapeFix_Face {
    constructor();
  }

  export declare class ShapeFix_Face_2 extends ShapeFix_Face {
    constructor(face: TopoDS_Face);
  }

export declare class Handle_ShapeFix_Root {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Root): void;
  get(): ShapeFix_Root;
  delete(): void;
}

  export declare class Handle_ShapeFix_Root_1 extends Handle_ShapeFix_Root {
    constructor();
  }

  export declare class Handle_ShapeFix_Root_2 extends Handle_ShapeFix_Root {
    constructor(thePtr: ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_3 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_4 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

export declare class ShapeFix_Root extends Standard_Transient {
  constructor()
  Set(Root: Handle_ShapeFix_Root): void;
  SetContext(context: Handle_ShapeBuild_ReShape): void;
  Context(): Handle_ShapeBuild_ReShape;
  SetMsgRegistrator(msgreg: Handle_ShapeExtend_BasicMsgRegistrator): void;
  MsgRegistrator(): Handle_ShapeExtend_BasicMsgRegistrator;
  SetPrecision(preci: Standard_Real): void;
  Precision(): Standard_Real;
  SetMinTolerance(mintol: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMaxTolerance(maxtol: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  LimitTolerance(toler: Standard_Real): Standard_Real;
  SendMsg_1(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  SendMsg_2(message: Message_Msg, gravity: Message_Gravity): void;
  SendWarning_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendWarning_2(message: Message_Msg): void;
  SendFail_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendFail_2(message: Message_Msg): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class ShapeFix_Shape extends ShapeFix_Root {
  Init(shape: TopoDS_Shape): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  Shape(): TopoDS_Shape;
  FixSolidTool(): Handle_ShapeFix_Solid;
  FixShellTool(): Handle_ShapeFix_Shell;
  FixFaceTool(): Handle_ShapeFix_Face;
  FixWireTool(): Handle_ShapeFix_Wire;
  FixEdgeTool(): Handle_ShapeFix_Edge;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetMsgRegistrator(msgreg: Handle_ShapeExtend_BasicMsgRegistrator): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixSolidMode(): Graphic3d_ZLayerId;
  FixFreeShellMode(): Graphic3d_ZLayerId;
  FixFreeFaceMode(): Graphic3d_ZLayerId;
  FixFreeWireMode(): Graphic3d_ZLayerId;
  FixSameParameterMode(): Graphic3d_ZLayerId;
  FixVertexPositionMode(): Graphic3d_ZLayerId;
  FixVertexTolMode(): Graphic3d_ZLayerId;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class ShapeFix_Shape_1 extends ShapeFix_Shape {
    constructor();
  }

  export declare class ShapeFix_Shape_2 extends ShapeFix_Shape {
    constructor(shape: TopoDS_Shape);
  }

export declare class Handle_ShapeFix_Shell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Shell): void;
  get(): ShapeFix_Shell;
  delete(): void;
}

  export declare class Handle_ShapeFix_Shell_1 extends Handle_ShapeFix_Shell {
    constructor();
  }

  export declare class Handle_ShapeFix_Shell_2 extends Handle_ShapeFix_Shell {
    constructor(thePtr: ShapeFix_Shell);
  }

  export declare class Handle_ShapeFix_Shell_3 extends Handle_ShapeFix_Shell {
    constructor(theHandle: Handle_ShapeFix_Shell);
  }

  export declare class Handle_ShapeFix_Shell_4 extends Handle_ShapeFix_Shell {
    constructor(theHandle: Handle_ShapeFix_Shell);
  }

export declare class Handle_ShapeFix_Solid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Solid): void;
  get(): ShapeFix_Solid;
  delete(): void;
}

  export declare class Handle_ShapeFix_Solid_1 extends Handle_ShapeFix_Solid {
    constructor();
  }

  export declare class Handle_ShapeFix_Solid_2 extends Handle_ShapeFix_Solid {
    constructor(thePtr: ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_3 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_4 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

export declare class Handle_ShapeFix_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Wire): void;
  get(): ShapeFix_Wire;
  delete(): void;
}

  export declare class Handle_ShapeFix_Wire_1 extends Handle_ShapeFix_Wire {
    constructor();
  }

  export declare class Handle_ShapeFix_Wire_2 extends Handle_ShapeFix_Wire {
    constructor(thePtr: ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_3 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_4 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

export declare class ShapeFix_Wire extends ShapeFix_Root {
  ClearModes(): void;
  ClearStatuses(): void;
  Init_1(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real): void;
  Init_2(saw: Handle_ShapeAnalysis_Wire): void;
  Load_1(wire: TopoDS_Wire): void;
  Load_2(sbwd: Handle_ShapeExtend_WireData): void;
  SetFace(face: TopoDS_Face): void;
  SetSurface_1(surf: Handle_Geom_Surface): void;
  SetSurface_2(surf: Handle_Geom_Surface, loc: TopLoc_Location): void;
  SetPrecision(prec: Standard_Real): void;
  SetMaxTailAngle(theMaxTailAngle: Standard_Real): void;
  SetMaxTailWidth(theMaxTailWidth: Standard_Real): void;
  IsLoaded(): Standard_Boolean;
  IsReady(): Standard_Boolean;
  NbEdges(): Graphic3d_ZLayerId;
  Wire(): TopoDS_Wire;
  WireAPIMake(): TopoDS_Wire;
  Analyzer(): Handle_ShapeAnalysis_Wire;
  WireData(): Handle_ShapeExtend_WireData;
  Face(): TopoDS_Face;
  ModifyTopologyMode(): Standard_Boolean;
  ModifyGeometryMode(): Standard_Boolean;
  ModifyRemoveLoopMode(): Graphic3d_ZLayerId;
  ClosedWireMode(): Standard_Boolean;
  PreferencePCurveMode(): Standard_Boolean;
  FixGapsByRangesMode(): Standard_Boolean;
  FixReorderMode(): Graphic3d_ZLayerId;
  FixSmallMode(): Graphic3d_ZLayerId;
  FixConnectedMode(): Graphic3d_ZLayerId;
  FixEdgeCurvesMode(): Graphic3d_ZLayerId;
  FixDegeneratedMode(): Graphic3d_ZLayerId;
  FixSelfIntersectionMode(): Graphic3d_ZLayerId;
  FixLackingMode(): Graphic3d_ZLayerId;
  FixGaps3dMode(): Graphic3d_ZLayerId;
  FixGaps2dMode(): Graphic3d_ZLayerId;
  FixReversed2dMode(): Graphic3d_ZLayerId;
  FixRemovePCurveMode(): Graphic3d_ZLayerId;
  FixAddPCurveMode(): Graphic3d_ZLayerId;
  FixRemoveCurve3dMode(): Graphic3d_ZLayerId;
  FixAddCurve3dMode(): Graphic3d_ZLayerId;
  FixSeamMode(): Graphic3d_ZLayerId;
  FixShiftedMode(): Graphic3d_ZLayerId;
  FixSameParameterMode(): Graphic3d_ZLayerId;
  FixVertexToleranceMode(): Graphic3d_ZLayerId;
  FixNotchedEdgesMode(): Graphic3d_ZLayerId;
  FixSelfIntersectingEdgeMode(): Graphic3d_ZLayerId;
  FixIntersectingEdgesMode(): Graphic3d_ZLayerId;
  FixNonAdjacentIntersectingEdgesMode(): Graphic3d_ZLayerId;
  FixTailMode(): Graphic3d_ZLayerId;
  Perform(): Standard_Boolean;
  FixReorder_1(): Standard_Boolean;
  FixSmall_1(lockvtx: Standard_Boolean, precsmall: Standard_Real): Graphic3d_ZLayerId;
  FixConnected_1(prec: Standard_Real): Standard_Boolean;
  FixEdgeCurves(): Standard_Boolean;
  FixDegenerated_1(): Standard_Boolean;
  FixSelfIntersection(): Standard_Boolean;
  FixLacking_1(force: Standard_Boolean): Standard_Boolean;
  FixClosed(prec: Standard_Real): Standard_Boolean;
  FixGaps3d(): Standard_Boolean;
  FixGaps2d(): Standard_Boolean;
  FixReorder_2(wi: ShapeAnalysis_WireOrder): Standard_Boolean;
  FixSmall_2(num: Graphic3d_ZLayerId, lockvtx: Standard_Boolean, precsmall: Standard_Real): Standard_Boolean;
  FixConnected_2(num: Graphic3d_ZLayerId, prec: Standard_Real): Standard_Boolean;
  FixSeam(num: Graphic3d_ZLayerId): Standard_Boolean;
  FixShifted(): Standard_Boolean;
  FixDegenerated_2(num: Graphic3d_ZLayerId): Standard_Boolean;
  FixLacking_2(num: Graphic3d_ZLayerId, force: Standard_Boolean): Standard_Boolean;
  FixNotchedEdges(): Standard_Boolean;
  FixGap3d(num: Graphic3d_ZLayerId, convert: Standard_Boolean): Standard_Boolean;
  FixGap2d(num: Graphic3d_ZLayerId, convert: Standard_Boolean): Standard_Boolean;
  FixTails(): Standard_Boolean;
  StatusReorder(status: ShapeExtend_Status): Standard_Boolean;
  StatusSmall(status: ShapeExtend_Status): Standard_Boolean;
  StatusConnected(status: ShapeExtend_Status): Standard_Boolean;
  StatusEdgeCurves(status: ShapeExtend_Status): Standard_Boolean;
  StatusDegenerated(status: ShapeExtend_Status): Standard_Boolean;
  StatusSelfIntersection(status: ShapeExtend_Status): Standard_Boolean;
  StatusLacking(status: ShapeExtend_Status): Standard_Boolean;
  StatusClosed(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps3d(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps2d(status: ShapeExtend_Status): Standard_Boolean;
  StatusNotches(status: ShapeExtend_Status): Standard_Boolean;
  StatusRemovedSegment(): Standard_Boolean;
  StatusFixTails(status: ShapeExtend_Status): Standard_Boolean;
  LastFixStatus(status: ShapeExtend_Status): Standard_Boolean;
  FixEdgeTool(): Handle_ShapeFix_Edge;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class ShapeFix_Wire_1 extends ShapeFix_Wire {
    constructor();
  }

  export declare class ShapeFix_Wire_2 extends ShapeFix_Wire {
    constructor(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real);
  }

export declare class ShapeUpgrade_UnifySameDomain extends Standard_Transient {
  Initialize(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean): void;
  AllowInternalEdges(theValue: Standard_Boolean): void;
  KeepShape(theShape: TopoDS_Shape): void;
  KeepShapes(theShapes: TopTools_MapOfShape): void;
  SetSafeInputMode(theValue: Standard_Boolean): void;
  SetLinearTolerance(theValue: Standard_Real): void;
  SetAngularTolerance(theValue: Standard_Real): void;
  Build(): void;
  Shape(): TopoDS_Shape;
  History_1(): Handle_BRepTools_History;
  History_2(): Handle_BRepTools_History;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class ShapeUpgrade_UnifySameDomain_1 extends ShapeUpgrade_UnifySameDomain {
    constructor();
  }

  export declare class ShapeUpgrade_UnifySameDomain_2 extends ShapeUpgrade_UnifySameDomain {
    constructor(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean);
  }

export declare class Handle_Standard_Failure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Failure): void;
  get(): Standard_Failure;
  delete(): void;
}

  export declare class Handle_Standard_Failure_1 extends Handle_Standard_Failure {
    constructor();
  }

  export declare class Handle_Standard_Failure_2 extends Handle_Standard_Failure {
    constructor(thePtr: Standard_Failure);
  }

  export declare class Handle_Standard_Failure_3 extends Handle_Standard_Failure {
    constructor(theHandle: Handle_Standard_Failure);
  }

  export declare class Handle_Standard_Failure_4 extends Handle_Standard_Failure {
    constructor(theHandle: Handle_Standard_Failure);
  }

export declare class Standard_Failure extends Standard_Transient {
  Print(theStream: Standard_OStream): void;
  GetMessageString(): Standard_CString;
  SetMessageString(theMessage: Standard_CString): void;
  GetStackString(): Standard_CString;
  SetStackString(theStack: Standard_CString): void;
  Reraise_1(): void;
  Reraise_2(aMessage: Standard_CString): void;
  Reraise_3(aReason: Standard_SStream): void;
  static Raise_1(aMessage: Standard_CString): void;
  static Raise_2(aReason: Standard_SStream): void;
  static NewInstance_1(theMessage: Standard_CString): Handle_Standard_Failure;
  static NewInstance_2(theMessage: Standard_CString, theStackTrace: Standard_CString): Handle_Standard_Failure;
  static DefaultStackTraceLength(): Graphic3d_ZLayerId;
  static SetDefaultStackTraceLength(theNbStackTraces: Graphic3d_ZLayerId): void;
  Jump(): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class Standard_Failure_1 extends Standard_Failure {
    constructor();
  }

  export declare class Standard_Failure_2 extends Standard_Failure {
    constructor(f: Standard_Failure);
  }

  export declare class Standard_Failure_3 extends Standard_Failure {
    constructor(theDesc: Standard_CString);
  }

  export declare class Standard_Failure_4 extends Standard_Failure {
    constructor(theDesc: Standard_CString, theStackTrace: Standard_CString);
  }

export declare class Standard_GUID {
  ToUUID(): Standard_UUID;
  ToCString(aStrGuid: Standard_PCharacter): void;
  ToExtString(aStrGuid: Standard_PExtCharacter): void;
  IsSame(uid: Standard_GUID): Standard_Boolean;
  IsNotSame(uid: Standard_GUID): Standard_Boolean;
  Assign_1(uid: Standard_GUID): void;
  Assign_2(uid: Standard_UUID): void;
  ShallowDump(aStream: Standard_OStream): void;
  static CheckGUIDFormat(aGuid: Standard_CString): Standard_Boolean;
  Hash(Upper: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  static HashCode(theGUID: Standard_GUID, theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  static IsEqual(string1: Standard_GUID, string2: Standard_GUID): Standard_Boolean;
  delete(): void;
}

  export declare class Standard_GUID_1 extends Standard_GUID {
    constructor();
  }

  export declare class Standard_GUID_2 extends Standard_GUID {
    constructor(aGuid: Standard_CString);
  }

  export declare class Standard_GUID_3 extends Standard_GUID {
    constructor(aGuid: Standard_ExtString);
  }

  export declare class Standard_GUID_4 extends Standard_GUID {
    constructor(a32b: Graphic3d_ZLayerId, a16b1: Standard_ExtCharacter, a16b2: Standard_ExtCharacter, a16b3: Standard_ExtCharacter, a8b1: Standard_Byte, a8b2: Standard_Byte, a8b3: Standard_Byte, a8b4: Standard_Byte, a8b5: Standard_Byte, a8b6: Standard_Byte);
  }

  export declare class Standard_GUID_5 extends Standard_GUID {
    constructor(aGuid: Standard_UUID);
  }

  export declare class Standard_GUID_6 extends Standard_GUID {
    constructor(aGuid: Standard_GUID);
  }

export declare class Handle_Standard_Transient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Transient): void;
  get(): Standard_Transient;
  delete(): void;
}

  export declare class Handle_Standard_Transient_1 extends Handle_Standard_Transient {
    constructor();
  }

  export declare class Handle_Standard_Transient_2 extends Handle_Standard_Transient {
    constructor(thePtr: Standard_Transient);
  }

  export declare class Handle_Standard_Transient_3 extends Handle_Standard_Transient {
    constructor(theHandle: Handle_Standard_Transient);
  }

  export declare class Handle_Standard_Transient_4 extends Handle_Standard_Transient {
    constructor(theHandle: Handle_Standard_Transient);
  }

export declare class Standard_Transient {
  Delete(): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  IsInstance_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsInstance_2(theTypeName: Standard_CString): Standard_Boolean;
  IsKind_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsKind_2(theTypeName: Standard_CString): Standard_Boolean;
  This(): Standard_Transient;
  GetRefCount(): Graphic3d_ZLayerId;
  IncrementRefCounter(): void;
  DecrementRefCounter(): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class Standard_Transient_1 extends Standard_Transient {
    constructor();
  }

  export declare class Standard_Transient_2 extends Standard_Transient {
    constructor(a: Standard_Transient);
  }

export declare class Handle_Standard_Type {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Type): void;
  get(): Standard_Type;
  delete(): void;
}

  export declare class Handle_Standard_Type_1 extends Handle_Standard_Type {
    constructor();
  }

  export declare class Handle_Standard_Type_2 extends Handle_Standard_Type {
    constructor(thePtr: Standard_Type);
  }

  export declare class Handle_Standard_Type_3 extends Handle_Standard_Type {
    constructor(theHandle: Handle_Standard_Type);
  }

  export declare class Handle_Standard_Type_4 extends Handle_Standard_Type {
    constructor(theHandle: Handle_Standard_Type);
  }

export declare class StdPrs_ToolTriangulatedShape {
  constructor();
  static IsTriangulated(theShape: TopoDS_Shape): Standard_Boolean;
  static IsClosed(theShape: TopoDS_Shape): Standard_Boolean;
  static ComputeNormals_1(theFace: TopoDS_Face, theTris: Handle_Poly_Triangulation): void;
  static ComputeNormals_2(theFace: TopoDS_Face, theTris: Handle_Poly_Triangulation, thePolyConnect: Poly_Connect): void;
  static Normal(theFace: TopoDS_Face, thePolyConnect: Poly_Connect, theNormals: TColgp_Array1OfDir): void;
  static GetDeflection(theShape: TopoDS_Shape, theDrawer: Handle_Prs3d_Drawer): Standard_Real;
  static IsTessellated(theShape: TopoDS_Shape, theDrawer: Handle_Prs3d_Drawer): Standard_Boolean;
  static Tessellate(theShape: TopoDS_Shape, theDrawer: Handle_Prs3d_Drawer): Standard_Boolean;
  static ClearOnOwnDeflectionChange(theShape: TopoDS_Shape, theDrawer: Handle_Prs3d_Drawer, theToResetCoeff: Standard_Boolean): void;
  delete(): void;
}

export declare class Handle_StepData_StepModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_StepModel): void;
  get(): StepData_StepModel;
  delete(): void;
}

  export declare class Handle_StepData_StepModel_1 extends Handle_StepData_StepModel {
    constructor();
  }

  export declare class Handle_StepData_StepModel_2 extends Handle_StepData_StepModel {
    constructor(thePtr: StepData_StepModel);
  }

  export declare class Handle_StepData_StepModel_3 extends Handle_StepData_StepModel {
    constructor(theHandle: Handle_StepData_StepModel);
  }

  export declare class Handle_StepData_StepModel_4 extends Handle_StepData_StepModel {
    constructor(theHandle: Handle_StepData_StepModel);
  }

export declare class Handle_StepRepr_NextAssemblyUsageOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_NextAssemblyUsageOccurrence): void;
  get(): StepRepr_NextAssemblyUsageOccurrence;
  delete(): void;
}

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_1 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor();
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_2 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(thePtr: StepRepr_NextAssemblyUsageOccurrence);
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_3 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_NextAssemblyUsageOccurrence);
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_4 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_NextAssemblyUsageOccurrence);
  }

export declare class StlAPI_Writer {
  constructor()
  ASCIIMode(): Standard_Boolean;
  Write(theShape: TopoDS_Shape, theFileName: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  delete(): void;
}

export declare class Handle_TColStd_HSequenceOfTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfTransient): void;
  get(): TColStd_HSequenceOfTransient;
  delete(): void;
}

  export declare class Handle_TColStd_HSequenceOfTransient_1 extends Handle_TColStd_HSequenceOfTransient {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfTransient_2 extends Handle_TColStd_HSequenceOfTransient {
    constructor(thePtr: TColStd_HSequenceOfTransient);
  }

  export declare class Handle_TColStd_HSequenceOfTransient_3 extends Handle_TColStd_HSequenceOfTransient {
    constructor(theHandle: Handle_TColStd_HSequenceOfTransient);
  }

  export declare class Handle_TColStd_HSequenceOfTransient_4 extends Handle_TColStd_HSequenceOfTransient {
    constructor(theHandle: Handle_TColStd_HSequenceOfTransient);
  }

export declare class TColStd_SequenceOfAsciiString extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfAsciiString): TColStd_SequenceOfAsciiString;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TCollection_AsciiString): void;
  Append_2(theSeq: TColStd_SequenceOfAsciiString): void;
  Prepend_1(theItem: TCollection_AsciiString): void;
  Prepend_2(theSeq: TColStd_SequenceOfAsciiString): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  First(): TCollection_AsciiString;
  ChangeFirst(): TCollection_AsciiString;
  Last(): TCollection_AsciiString;
  ChangeLast(): TCollection_AsciiString;
  Value(theIndex: Standard_Integer): TCollection_AsciiString;
  ChangeValue(theIndex: Standard_Integer): TCollection_AsciiString;
  SetValue(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  delete(): void;
}

  export declare class TColStd_SequenceOfAsciiString_1 extends TColStd_SequenceOfAsciiString {
    constructor();
  }

  export declare class TColStd_SequenceOfAsciiString_2 extends TColStd_SequenceOfAsciiString {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfAsciiString_3 extends TColStd_SequenceOfAsciiString {
    constructor(theOther: TColStd_SequenceOfAsciiString);
  }

export declare class TColgp_Array1OfDir {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Dir): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfDir): TColgp_Array1OfDir;
  Move(theOther: TColgp_Array1OfDir): TColgp_Array1OfDir;
  First(): gp_Dir;
  ChangeFirst(): gp_Dir;
  Last(): gp_Dir;
  ChangeLast(): gp_Dir;
  Value(theIndex: Standard_Integer): gp_Dir;
  ChangeValue(theIndex: Standard_Integer): gp_Dir;
  SetValue(theIndex: Standard_Integer, theItem: gp_Dir): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
  delete(): void;
}

  export declare class TColgp_Array1OfDir_1 extends TColgp_Array1OfDir {
    constructor();
  }

  export declare class TColgp_Array1OfDir_2 extends TColgp_Array1OfDir {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfDir_3 extends TColgp_Array1OfDir {
    constructor(theOther: TColgp_Array1OfDir);
  }

  export declare class TColgp_Array1OfDir_4 extends TColgp_Array1OfDir {
    constructor(theOther: TColgp_Array1OfDir);
  }

  export declare class TColgp_Array1OfDir_5 extends TColgp_Array1OfDir {
    constructor(theBegin: gp_Dir, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_Array1OfPnt {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Pnt): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfPnt): TColgp_Array1OfPnt;
  Move(theOther: TColgp_Array1OfPnt): TColgp_Array1OfPnt;
  First(): gp_Pnt;
  ChangeFirst(): gp_Pnt;
  Last(): gp_Pnt;
  ChangeLast(): gp_Pnt;
  Value(theIndex: Standard_Integer): gp_Pnt;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
  delete(): void;
}

  export declare class TColgp_Array1OfPnt_1 extends TColgp_Array1OfPnt {
    constructor();
  }

  export declare class TColgp_Array1OfPnt_2 extends TColgp_Array1OfPnt {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfPnt_3 extends TColgp_Array1OfPnt {
    constructor(theOther: TColgp_Array1OfPnt);
  }

  export declare class TColgp_Array1OfPnt_4 extends TColgp_Array1OfPnt {
    constructor(theOther: TColgp_Array1OfPnt);
  }

  export declare class TColgp_Array1OfPnt_5 extends TColgp_Array1OfPnt {
    constructor(theBegin: gp_Pnt, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_Array1OfPnt2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Pnt2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfPnt2d): TColgp_Array1OfPnt2d;
  Move(theOther: TColgp_Array1OfPnt2d): TColgp_Array1OfPnt2d;
  First(): gp_Pnt2d;
  ChangeFirst(): gp_Pnt2d;
  Last(): gp_Pnt2d;
  ChangeLast(): gp_Pnt2d;
  Value(theIndex: Standard_Integer): gp_Pnt2d;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
  delete(): void;
}

  export declare class TColgp_Array1OfPnt2d_1 extends TColgp_Array1OfPnt2d {
    constructor();
  }

  export declare class TColgp_Array1OfPnt2d_2 extends TColgp_Array1OfPnt2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfPnt2d_3 extends TColgp_Array1OfPnt2d {
    constructor(theOther: TColgp_Array1OfPnt2d);
  }

  export declare class TColgp_Array1OfPnt2d_4 extends TColgp_Array1OfPnt2d {
    constructor(theOther: TColgp_Array1OfPnt2d);
  }

  export declare class TColgp_Array1OfPnt2d_5 extends TColgp_Array1OfPnt2d {
    constructor(theBegin: gp_Pnt2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfPnt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfPnt): void;
  get(): TColgp_HArray1OfPnt;
  delete(): void;
}

  export declare class Handle_TColgp_HArray1OfPnt_1 extends Handle_TColgp_HArray1OfPnt {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfPnt_2 extends Handle_TColgp_HArray1OfPnt {
    constructor(thePtr: TColgp_HArray1OfPnt);
  }

  export declare class Handle_TColgp_HArray1OfPnt_3 extends Handle_TColgp_HArray1OfPnt {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt);
  }

  export declare class Handle_TColgp_HArray1OfPnt_4 extends Handle_TColgp_HArray1OfPnt {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt);
  }

export declare class Handle_TColgp_HArray1OfPnt2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfPnt2d): void;
  get(): TColgp_HArray1OfPnt2d;
  delete(): void;
}

  export declare class Handle_TColgp_HArray1OfPnt2d_1 extends Handle_TColgp_HArray1OfPnt2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_2 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(thePtr: TColgp_HArray1OfPnt2d);
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_3 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt2d);
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_4 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt2d);
  }

export declare class TCollection_ExtendedString {
  AssignCat_1(other: TCollection_ExtendedString): void;
  AssignCat_2(theChar: Standard_Utf16Char): void;
  Cat(other: TCollection_ExtendedString): TCollection_ExtendedString;
  ChangeAll(aChar: Standard_ExtCharacter, NewChar: Standard_ExtCharacter): void;
  Clear(): void;
  Copy(fromwhere: TCollection_ExtendedString): void;
  Swap(theOther: TCollection_ExtendedString): void;
  Insert_1(where: Graphic3d_ZLayerId, what: Standard_ExtCharacter): void;
  Insert_2(where: Graphic3d_ZLayerId, what: TCollection_ExtendedString): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(other: Standard_ExtString): Standard_Boolean;
  IsEqual_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsDifferent_1(other: Standard_ExtString): Standard_Boolean;
  IsDifferent_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsLess_1(other: Standard_ExtString): Standard_Boolean;
  IsLess_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsGreater_1(other: Standard_ExtString): Standard_Boolean;
  IsGreater_2(other: TCollection_ExtendedString): Standard_Boolean;
  StartsWith(theStartString: TCollection_ExtendedString): Standard_Boolean;
  EndsWith(theEndString: TCollection_ExtendedString): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  Length(): Graphic3d_ZLayerId;
  Print(astream: Standard_OStream): void;
  RemoveAll(what: Standard_ExtCharacter): void;
  Remove(where: Graphic3d_ZLayerId, ahowmany: Graphic3d_ZLayerId): void;
  Search(what: TCollection_ExtendedString): Graphic3d_ZLayerId;
  SearchFromEnd(what: TCollection_ExtendedString): Graphic3d_ZLayerId;
  SetValue_1(where: Graphic3d_ZLayerId, what: Standard_ExtCharacter): void;
  SetValue_2(where: Graphic3d_ZLayerId, what: TCollection_ExtendedString): void;
  Split(where: Graphic3d_ZLayerId): TCollection_ExtendedString;
  Token(separators: Standard_ExtString, whichone: Graphic3d_ZLayerId): TCollection_ExtendedString;
  ToExtString(): Standard_ExtString;
  Trunc(ahowmany: Graphic3d_ZLayerId): void;
  Value(where: Graphic3d_ZLayerId): Standard_ExtCharacter;
  static HashCode(theString: TCollection_ExtendedString, theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  static IsEqual_3(theString1: TCollection_ExtendedString, theString2: TCollection_ExtendedString): Standard_Boolean;
  LengthOfCString(): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class TCollection_ExtendedString_1 extends TCollection_ExtendedString {
    constructor();
  }

  export declare class TCollection_ExtendedString_2 extends TCollection_ExtendedString {
    constructor(astring: Standard_CString, isMultiByte: Standard_Boolean);
  }

  export declare class TCollection_ExtendedString_3 extends TCollection_ExtendedString {
    constructor(astring: Standard_ExtString);
  }

  export declare class TCollection_ExtendedString_4 extends TCollection_ExtendedString {
    constructor(theStringUtf: Standard_WideChar);
  }

  export declare class TCollection_ExtendedString_5 extends TCollection_ExtendedString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_ExtendedString_6 extends TCollection_ExtendedString {
    constructor(aChar: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_7 extends TCollection_ExtendedString {
    constructor(length: Graphic3d_ZLayerId, filler: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_8 extends TCollection_ExtendedString {
    constructor(value: Graphic3d_ZLayerId);
  }

  export declare class TCollection_ExtendedString_9 extends TCollection_ExtendedString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_ExtendedString_10 extends TCollection_ExtendedString {
    constructor(astring: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_11 extends TCollection_ExtendedString {
    constructor(theOther: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_12 extends TCollection_ExtendedString {
    constructor(astring: XCAFDoc_PartId, isMultiByte: Standard_Boolean);
  }

export declare class Handle_TDF_Attribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Attribute): void;
  get(): TDF_Attribute;
  delete(): void;
}

  export declare class Handle_TDF_Attribute_1 extends Handle_TDF_Attribute {
    constructor();
  }

  export declare class Handle_TDF_Attribute_2 extends Handle_TDF_Attribute {
    constructor(thePtr: TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_3 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_4 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

export declare class TDF_Attribute extends Standard_Transient {
  ID(): Standard_GUID;
  SetID_1(a0: Standard_GUID): void;
  SetID_2(): void;
  Label(): TDF_Label;
  Transaction(): Graphic3d_ZLayerId;
  UntilTransaction(): Graphic3d_ZLayerId;
  IsValid(): Standard_Boolean;
  IsNew(): Standard_Boolean;
  IsForgotten(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  FindAttribute_1(anID: Standard_GUID, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  AddAttribute(other: Handle_TDF_Attribute): void;
  ForgetAttribute(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  AfterAddition(): void;
  BeforeRemoval(): void;
  BeforeForget(): void;
  AfterResume(): void;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  BeforeUndo(anAttDelta: Handle_TDF_AttributeDelta, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: Handle_TDF_AttributeDelta, forceIt: Standard_Boolean): Standard_Boolean;
  BeforeCommitTransaction(): void;
  Backup_1(): void;
  IsBackuped(): Standard_Boolean;
  BackupCopy(): Handle_TDF_Attribute;
  Restore(anAttribute: Handle_TDF_Attribute): void;
  DeltaOnAddition(): Handle_TDF_DeltaOnAddition;
  DeltaOnForget(): Handle_TDF_DeltaOnForget;
  DeltaOnResume(): Handle_TDF_DeltaOnResume;
  DeltaOnModification_1(anOldAttribute: Handle_TDF_Attribute): Handle_TDF_DeltaOnModification;
  DeltaOnModification_2(aDelta: Handle_TDF_DeltaOnModification): void;
  DeltaOnRemoval(): Handle_TDF_DeltaOnRemoval;
  NewEmpty(): Handle_TDF_Attribute;
  Paste(intoAttribute: Handle_TDF_Attribute, aRelocationTable: Handle_TDF_RelocationTable): void;
  References(aDataSet: Handle_TDF_DataSet): void;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  Forget(aTransaction: Graphic3d_ZLayerId): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_TDF_AttributeDelta {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_AttributeDelta): void;
  get(): TDF_AttributeDelta;
  delete(): void;
}

  export declare class Handle_TDF_AttributeDelta_1 extends Handle_TDF_AttributeDelta {
    constructor();
  }

  export declare class Handle_TDF_AttributeDelta_2 extends Handle_TDF_AttributeDelta {
    constructor(thePtr: TDF_AttributeDelta);
  }

  export declare class Handle_TDF_AttributeDelta_3 extends Handle_TDF_AttributeDelta {
    constructor(theHandle: Handle_TDF_AttributeDelta);
  }

  export declare class Handle_TDF_AttributeDelta_4 extends Handle_TDF_AttributeDelta {
    constructor(theHandle: Handle_TDF_AttributeDelta);
  }

export declare class Handle_TDF_Data {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Data): void;
  get(): TDF_Data;
  delete(): void;
}

  export declare class Handle_TDF_Data_1 extends Handle_TDF_Data {
    constructor();
  }

  export declare class Handle_TDF_Data_2 extends Handle_TDF_Data {
    constructor(thePtr: TDF_Data);
  }

  export declare class Handle_TDF_Data_3 extends Handle_TDF_Data {
    constructor(theHandle: Handle_TDF_Data);
  }

  export declare class Handle_TDF_Data_4 extends Handle_TDF_Data {
    constructor(theHandle: Handle_TDF_Data);
  }

export declare class Handle_TDF_DataSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DataSet): void;
  get(): TDF_DataSet;
  delete(): void;
}

  export declare class Handle_TDF_DataSet_1 extends Handle_TDF_DataSet {
    constructor();
  }

  export declare class Handle_TDF_DataSet_2 extends Handle_TDF_DataSet {
    constructor(thePtr: TDF_DataSet);
  }

  export declare class Handle_TDF_DataSet_3 extends Handle_TDF_DataSet {
    constructor(theHandle: Handle_TDF_DataSet);
  }

  export declare class Handle_TDF_DataSet_4 extends Handle_TDF_DataSet {
    constructor(theHandle: Handle_TDF_DataSet);
  }

export declare class Handle_TDF_DeltaOnAddition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnAddition): void;
  get(): TDF_DeltaOnAddition;
  delete(): void;
}

  export declare class Handle_TDF_DeltaOnAddition_1 extends Handle_TDF_DeltaOnAddition {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnAddition_2 extends Handle_TDF_DeltaOnAddition {
    constructor(thePtr: TDF_DeltaOnAddition);
  }

  export declare class Handle_TDF_DeltaOnAddition_3 extends Handle_TDF_DeltaOnAddition {
    constructor(theHandle: Handle_TDF_DeltaOnAddition);
  }

  export declare class Handle_TDF_DeltaOnAddition_4 extends Handle_TDF_DeltaOnAddition {
    constructor(theHandle: Handle_TDF_DeltaOnAddition);
  }

export declare class Handle_TDF_DeltaOnForget {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnForget): void;
  get(): TDF_DeltaOnForget;
  delete(): void;
}

  export declare class Handle_TDF_DeltaOnForget_1 extends Handle_TDF_DeltaOnForget {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnForget_2 extends Handle_TDF_DeltaOnForget {
    constructor(thePtr: TDF_DeltaOnForget);
  }

  export declare class Handle_TDF_DeltaOnForget_3 extends Handle_TDF_DeltaOnForget {
    constructor(theHandle: Handle_TDF_DeltaOnForget);
  }

  export declare class Handle_TDF_DeltaOnForget_4 extends Handle_TDF_DeltaOnForget {
    constructor(theHandle: Handle_TDF_DeltaOnForget);
  }

export declare class Handle_TDF_DeltaOnModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnModification): void;
  get(): TDF_DeltaOnModification;
  delete(): void;
}

  export declare class Handle_TDF_DeltaOnModification_1 extends Handle_TDF_DeltaOnModification {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnModification_2 extends Handle_TDF_DeltaOnModification {
    constructor(thePtr: TDF_DeltaOnModification);
  }

  export declare class Handle_TDF_DeltaOnModification_3 extends Handle_TDF_DeltaOnModification {
    constructor(theHandle: Handle_TDF_DeltaOnModification);
  }

  export declare class Handle_TDF_DeltaOnModification_4 extends Handle_TDF_DeltaOnModification {
    constructor(theHandle: Handle_TDF_DeltaOnModification);
  }

export declare class Handle_TDF_DeltaOnRemoval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnRemoval): void;
  get(): TDF_DeltaOnRemoval;
  delete(): void;
}

  export declare class Handle_TDF_DeltaOnRemoval_1 extends Handle_TDF_DeltaOnRemoval {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnRemoval_2 extends Handle_TDF_DeltaOnRemoval {
    constructor(thePtr: TDF_DeltaOnRemoval);
  }

  export declare class Handle_TDF_DeltaOnRemoval_3 extends Handle_TDF_DeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DeltaOnRemoval);
  }

  export declare class Handle_TDF_DeltaOnRemoval_4 extends Handle_TDF_DeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DeltaOnRemoval);
  }

export declare class Handle_TDF_DeltaOnResume {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnResume): void;
  get(): TDF_DeltaOnResume;
  delete(): void;
}

  export declare class Handle_TDF_DeltaOnResume_1 extends Handle_TDF_DeltaOnResume {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnResume_2 extends Handle_TDF_DeltaOnResume {
    constructor(thePtr: TDF_DeltaOnResume);
  }

  export declare class Handle_TDF_DeltaOnResume_3 extends Handle_TDF_DeltaOnResume {
    constructor(theHandle: Handle_TDF_DeltaOnResume);
  }

  export declare class Handle_TDF_DeltaOnResume_4 extends Handle_TDF_DeltaOnResume {
    constructor(theHandle: Handle_TDF_DeltaOnResume);
  }

export declare class TDF_IDFilter {
  constructor(ignoreMode: Standard_Boolean)
  IgnoreAll_1(ignore: Standard_Boolean): void;
  IgnoreAll_2(): Standard_Boolean;
  Keep_1(anID: Standard_GUID): void;
  Keep_2(anIDList: TDF_IDList): void;
  Ignore_1(anID: Standard_GUID): void;
  Ignore_2(anIDList: TDF_IDList): void;
  IsKept_1(anID: Standard_GUID): Standard_Boolean;
  IsKept_2(anAtt: Handle_TDF_Attribute): Standard_Boolean;
  IsIgnored_1(anID: Standard_GUID): Standard_Boolean;
  IsIgnored_2(anAtt: Handle_TDF_Attribute): Standard_Boolean;
  IDList(anIDList: TDF_IDList): void;
  Copy(fromFilter: TDF_IDFilter): void;
  Dump(anOS: Standard_OStream): void;
  Assign(theFilter: TDF_IDFilter): void;
  delete(): void;
}

export declare class TDF_Label {
  constructor()
  Nullify(): void;
  Data(): Handle_TDF_Data;
  Tag(): Graphic3d_ZLayerId;
  Father(): TDF_Label;
  IsNull(): Standard_Boolean;
  Imported(aStatus: Standard_Boolean): void;
  IsImported(): Standard_Boolean;
  IsEqual(aLabel: TDF_Label): Standard_Boolean;
  IsDifferent(aLabel: TDF_Label): Standard_Boolean;
  IsRoot(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  AddAttribute(anAttribute: Handle_TDF_Attribute, append: Standard_Boolean): void;
  ForgetAttribute_1(anAttribute: Handle_TDF_Attribute): void;
  ForgetAttribute_2(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  ResumeAttribute(anAttribute: Handle_TDF_Attribute): void;
  FindAttribute_1(anID: Standard_GUID, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  FindAttribute_3(anID: Standard_GUID, aTransaction: Graphic3d_ZLayerId, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  MayBeModified(): Standard_Boolean;
  AttributesModified(): Standard_Boolean;
  HasAttribute(): Standard_Boolean;
  NbAttributes(): Graphic3d_ZLayerId;
  Depth(): Graphic3d_ZLayerId;
  IsDescendant(aLabel: TDF_Label): Standard_Boolean;
  Root(): TDF_Label;
  HasChild(): Standard_Boolean;
  NbChildren(): Graphic3d_ZLayerId;
  FindChild(aTag: Graphic3d_ZLayerId, create: Standard_Boolean): TDF_Label;
  NewChild(): TDF_Label;
  Transaction(): Graphic3d_ZLayerId;
  HasLowerNode(otherLabel: TDF_Label): Standard_Boolean;
  HasGreaterNode(otherLabel: TDF_Label): Standard_Boolean;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  EntryDump(anOS: Standard_OStream): void;
  delete(): void;
}

export declare class TDF_LabelSequence extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TDF_LabelSequence): TDF_LabelSequence;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TDF_Label): void;
  Append_2(theSeq: TDF_LabelSequence): void;
  Prepend_1(theItem: TDF_Label): void;
  Prepend_2(theSeq: TDF_LabelSequence): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TDF_Label): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TDF_Label): void;
  Split(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  First(): TDF_Label;
  ChangeFirst(): TDF_Label;
  Last(): TDF_Label;
  ChangeLast(): TDF_Label;
  Value(theIndex: Standard_Integer): TDF_Label;
  ChangeValue(theIndex: Standard_Integer): TDF_Label;
  SetValue(theIndex: Standard_Integer, theItem: TDF_Label): void;
  delete(): void;
}

  export declare class TDF_LabelSequence_1 extends TDF_LabelSequence {
    constructor();
  }

  export declare class TDF_LabelSequence_2 extends TDF_LabelSequence {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TDF_LabelSequence_3 extends TDF_LabelSequence {
    constructor(theOther: TDF_LabelSequence);
  }

export declare class Handle_TDF_RelocationTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_RelocationTable): void;
  get(): TDF_RelocationTable;
  delete(): void;
}

  export declare class Handle_TDF_RelocationTable_1 extends Handle_TDF_RelocationTable {
    constructor();
  }

  export declare class Handle_TDF_RelocationTable_2 extends Handle_TDF_RelocationTable {
    constructor(thePtr: TDF_RelocationTable);
  }

  export declare class Handle_TDF_RelocationTable_3 extends Handle_TDF_RelocationTable {
    constructor(theHandle: Handle_TDF_RelocationTable);
  }

  export declare class Handle_TDF_RelocationTable_4 extends Handle_TDF_RelocationTable {
    constructor(theHandle: Handle_TDF_RelocationTable);
  }

export declare class TDataStd_GenericEmpty extends TDF_Attribute {
  Restore(a0: Handle_TDF_Attribute): void;
  Paste(a0: Handle_TDF_Attribute, a1: Handle_TDF_RelocationTable): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_TDataStd_NamedData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_NamedData): void;
  get(): TDataStd_NamedData;
  delete(): void;
}

  export declare class Handle_TDataStd_NamedData_1 extends Handle_TDataStd_NamedData {
    constructor();
  }

  export declare class Handle_TDataStd_NamedData_2 extends Handle_TDataStd_NamedData {
    constructor(thePtr: TDataStd_NamedData);
  }

  export declare class Handle_TDataStd_NamedData_3 extends Handle_TDataStd_NamedData {
    constructor(theHandle: Handle_TDataStd_NamedData);
  }

  export declare class Handle_TDataStd_NamedData_4 extends Handle_TDataStd_NamedData {
    constructor(theHandle: Handle_TDataStd_NamedData);
  }

export declare class TDocStd_Application extends CDF_Application {
  constructor()
  IsDriverLoaded(): Standard_Boolean;
  Resources(): Handle_Resource_Manager;
  ResourcesName(): Standard_CString;
  DefineFormat(theFormat: XCAFDoc_PartId, theDescription: XCAFDoc_PartId, theExtension: XCAFDoc_PartId, theReader: Handle_PCDM_RetrievalDriver, theWriter: Handle_PCDM_StorageDriver): void;
  ReadingFormats(theFormats: TColStd_SequenceOfAsciiString): void;
  WritingFormats(theFormats: TColStd_SequenceOfAsciiString): void;
  NbDocuments(): Graphic3d_ZLayerId;
  GetDocument(index: Graphic3d_ZLayerId, aDoc: Handle_TDocStd_Document): void;
  NewDocument_1(format: TCollection_ExtendedString, aDoc: Handle_CDM_Document): void;
  NewDocument_2(format: TCollection_ExtendedString, aDoc: Handle_TDocStd_Document): void;
  InitDocument(aDoc: Handle_CDM_Document): void;
  Close(aDoc: Handle_TDocStd_Document): void;
  IsInSession(path: TCollection_ExtendedString): Graphic3d_ZLayerId;
  Open_1(thePath: TCollection_ExtendedString, theDoc: Handle_TDocStd_Document, theFilter: Handle_PCDM_ReaderFilter, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  Open_2(thePath: TCollection_ExtendedString, theDoc: Handle_TDocStd_Document, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  Open_3(theIStream: Standard_IStream, theDoc: Handle_TDocStd_Document, theFilter: Handle_PCDM_ReaderFilter, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  Open_4(theIStream: Standard_IStream, theDoc: Handle_TDocStd_Document, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  SaveAs_1(theDoc: Handle_TDocStd_Document, path: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_2(theDoc: Handle_TDocStd_Document, theOStream: Standard_OStream, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_1(theDoc: Handle_TDocStd_Document, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_3(theDoc: Handle_TDocStd_Document, path: TCollection_ExtendedString, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_4(theDoc: Handle_TDocStd_Document, theOStream: Standard_OStream, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_2(theDoc: Handle_TDocStd_Document, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  OnOpenTransaction(theDoc: Handle_TDocStd_Document): void;
  OnCommitTransaction(theDoc: Handle_TDocStd_Document): void;
  OnAbortTransaction(theDoc: Handle_TDocStd_Document): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_TDocStd_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Document): void;
  get(): TDocStd_Document;
  delete(): void;
}

  export declare class Handle_TDocStd_Document_1 extends Handle_TDocStd_Document {
    constructor();
  }

  export declare class Handle_TDocStd_Document_2 extends Handle_TDocStd_Document {
    constructor(thePtr: TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_3 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_4 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

export declare class TDocStd_Document extends CDM_Document {
  constructor(astorageformat: TCollection_ExtendedString)
  static Get(L: TDF_Label): Handle_TDocStd_Document;
  IsSaved(): Standard_Boolean;
  IsChanged(): Standard_Boolean;
  SetSaved(): void;
  SetSavedTime(theTime: Graphic3d_ZLayerId): void;
  GetSavedTime(): Graphic3d_ZLayerId;
  GetName(): TCollection_ExtendedString;
  GetPath(): TCollection_ExtendedString;
  SetData(data: Handle_TDF_Data): void;
  GetData(): Handle_TDF_Data;
  Main(): TDF_Label;
  IsEmpty(): Standard_Boolean;
  IsValid(): Standard_Boolean;
  SetModified(L: TDF_Label): void;
  PurgeModified(): void;
  GetModified(): TDF_LabelMap;
  NewCommand(): void;
  HasOpenCommand(): Standard_Boolean;
  OpenCommand(): void;
  CommitCommand(): Standard_Boolean;
  AbortCommand(): void;
  GetUndoLimit(): Graphic3d_ZLayerId;
  SetUndoLimit(L: Graphic3d_ZLayerId): void;
  ClearUndos(): void;
  ClearRedos(): void;
  GetAvailableUndos(): Graphic3d_ZLayerId;
  Undo(): Standard_Boolean;
  GetAvailableRedos(): Graphic3d_ZLayerId;
  Redo(): Standard_Boolean;
  GetUndos(): TDF_DeltaList;
  GetRedos(): TDF_DeltaList;
  RemoveFirstUndo(): void;
  InitDeltaCompaction(): Standard_Boolean;
  PerformDeltaCompaction(): Standard_Boolean;
  UpdateReferences(aDocEntry: XCAFDoc_PartId): void;
  Recompute(): void;
  Update(aToDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId, aModifContext: Standard_Address): void;
  StorageFormat(): TCollection_ExtendedString;
  SetEmptyLabelsSavingMode(isAllowed: Standard_Boolean): void;
  EmptyLabelsSavingMode(): Standard_Boolean;
  ChangeStorageFormat(newStorageFormat: TCollection_ExtendedString): void;
  SetNestedTransactionMode(isAllowed: Standard_Boolean): void;
  IsNestedTransactionMode(): Standard_Boolean;
  SetModificationMode(theTransactionOnly: Standard_Boolean): void;
  ModificationMode(): Standard_Boolean;
  BeforeClose(): void;
  StorageFormatVersion(): TDocStd_FormatVersion;
  ChangeStorageFormatVersion(theVersion: TDocStd_FormatVersion): void;
  static CurrentStorageFormatVersion(): TDocStd_FormatVersion;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_TShort_HArray1OfShortReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TShort_HArray1OfShortReal): void;
  get(): TShort_HArray1OfShortReal;
  delete(): void;
}

  export declare class Handle_TShort_HArray1OfShortReal_1 extends Handle_TShort_HArray1OfShortReal {
    constructor();
  }

  export declare class Handle_TShort_HArray1OfShortReal_2 extends Handle_TShort_HArray1OfShortReal {
    constructor(thePtr: TShort_HArray1OfShortReal);
  }

  export declare class Handle_TShort_HArray1OfShortReal_3 extends Handle_TShort_HArray1OfShortReal {
    constructor(theHandle: Handle_TShort_HArray1OfShortReal);
  }

  export declare class Handle_TShort_HArray1OfShortReal_4 extends Handle_TShort_HArray1OfShortReal {
    constructor(theHandle: Handle_TShort_HArray1OfShortReal);
  }

export declare type TopAbs_Orientation = {
  TopAbs_FORWARD: {};
  TopAbs_REVERSED: {};
  TopAbs_INTERNAL: {};
  TopAbs_EXTERNAL: {};
}

export declare type TopAbs_ShapeEnum = {
  TopAbs_COMPOUND: {};
  TopAbs_COMPSOLID: {};
  TopAbs_SOLID: {};
  TopAbs_SHELL: {};
  TopAbs_FACE: {};
  TopAbs_WIRE: {};
  TopAbs_EDGE: {};
  TopAbs_VERTEX: {};
  TopAbs_SHAPE: {};
}

export declare type TopAbs_State = {
  TopAbs_IN: {};
  TopAbs_OUT: {};
  TopAbs_ON: {};
  TopAbs_UNKNOWN: {};
}

export declare class TopExp {
  constructor();
  static MapShapes_1(S: TopoDS_Shape, T: TopAbs_ShapeEnum, M: TopTools_IndexedMapOfShape): void;
  static MapShapes_2(S: TopoDS_Shape, M: TopTools_IndexedMapOfShape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  static MapShapes_3(S: TopoDS_Shape, M: TopTools_MapOfShape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  static MapShapesAndAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: TopTools_IndexedDataMapOfShapeListOfShape): void;
  static MapShapesAndUniqueAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: TopTools_IndexedDataMapOfShapeListOfShape, useOrientation: Standard_Boolean): void;
  static FirstVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  static LastVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  static Vertices_1(E: TopoDS_Edge, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex, CumOri: Standard_Boolean): void;
  static Vertices_2(W: TopoDS_Wire, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex): void;
  static CommonVertex(E1: TopoDS_Edge, E2: TopoDS_Edge, V: TopoDS_Vertex): Standard_Boolean;
  delete(): void;
}

export declare class TopExp_Explorer {
  Init(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  Current(): TopoDS_Shape;
  ReInit(): void;
  ExploredShape(): TopoDS_Shape;
  Depth(): Graphic3d_ZLayerId;
  Clear(): void;
  delete(): void;
}

  export declare class TopExp_Explorer_1 extends TopExp_Explorer {
    constructor();
  }

  export declare class TopExp_Explorer_2 extends TopExp_Explorer {
    constructor(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum);
  }

export declare class Handle_TopLoc_Datum3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopLoc_Datum3D): void;
  get(): TopLoc_Datum3D;
  delete(): void;
}

  export declare class Handle_TopLoc_Datum3D_1 extends Handle_TopLoc_Datum3D {
    constructor();
  }

  export declare class Handle_TopLoc_Datum3D_2 extends Handle_TopLoc_Datum3D {
    constructor(thePtr: TopLoc_Datum3D);
  }

  export declare class Handle_TopLoc_Datum3D_3 extends Handle_TopLoc_Datum3D {
    constructor(theHandle: Handle_TopLoc_Datum3D);
  }

  export declare class Handle_TopLoc_Datum3D_4 extends Handle_TopLoc_Datum3D {
    constructor(theHandle: Handle_TopLoc_Datum3D);
  }

export declare class TopLoc_Location {
  IsIdentity(): Standard_Boolean;
  Identity(): void;
  FirstDatum(): Handle_TopLoc_Datum3D;
  FirstPower(): Graphic3d_ZLayerId;
  NextLocation(): TopLoc_Location;
  Transformation(): gp_Trsf;
  Inverted(): TopLoc_Location;
  Multiplied(Other: TopLoc_Location): TopLoc_Location;
  Divided(Other: TopLoc_Location): TopLoc_Location;
  Predivided(Other: TopLoc_Location): TopLoc_Location;
  Powered(pwr: Graphic3d_ZLayerId): TopLoc_Location;
  HashCode(theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  IsEqual(Other: TopLoc_Location): Standard_Boolean;
  IsDifferent(Other: TopLoc_Location): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  ShallowDump(S: Standard_OStream): void;
  Clear(): void;
  static ScalePrec(): Standard_Real;
  delete(): void;
}

  export declare class TopLoc_Location_1 extends TopLoc_Location {
    constructor();
  }

  export declare class TopLoc_Location_2 extends TopLoc_Location {
    constructor(T: gp_Trsf);
  }

  export declare class TopLoc_Location_3 extends TopLoc_Location {
    constructor(D: Handle_TopLoc_Datum3D);
  }

export declare class Handle_TopOpeBRepBuild_HBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepBuild_HBuilder): void;
  get(): TopOpeBRepBuild_HBuilder;
  delete(): void;
}

  export declare class Handle_TopOpeBRepBuild_HBuilder_1 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor();
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_2 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(thePtr: TopOpeBRepBuild_HBuilder);
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_3 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(theHandle: Handle_TopOpeBRepBuild_HBuilder);
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_4 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(theHandle: Handle_TopOpeBRepBuild_HBuilder);
  }

export declare class TopTools_DataMapOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeListOfShape): void;
  Assign(theOther: TopTools_DataMapOfShapeListOfShape): TopTools_DataMapOfShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopTools_ListOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopTools_ListOfShape): TopTools_ListOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopTools_ListOfShape;
  ChangeSeek(theKey: TopoDS_Shape): TopTools_ListOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopTools_ListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class TopTools_DataMapOfShapeListOfShape_1 extends TopTools_DataMapOfShapeListOfShape {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeListOfShape_2 extends TopTools_DataMapOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_DataMapOfShapeListOfShape_3 extends TopTools_DataMapOfShapeListOfShape {
    constructor(theOther: TopTools_DataMapOfShapeListOfShape);
  }

export declare class TopTools_DataMapOfShapeShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeShape): void;
  Assign(theOther: TopTools_DataMapOfShapeShape): TopTools_DataMapOfShapeShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopoDS_Shape;
  ChangeSeek(theKey: TopoDS_Shape): TopoDS_Shape;
  ChangeFind(theKey: TopoDS_Shape): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class TopTools_DataMapOfShapeShape_1 extends TopTools_DataMapOfShapeShape {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeShape_2 extends TopTools_DataMapOfShapeShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_DataMapOfShapeShape_3 extends TopTools_DataMapOfShapeShape {
    constructor(theOther: TopTools_DataMapOfShapeShape);
  }

export declare class Handle_TopTools_HSequenceOfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopTools_HSequenceOfShape): void;
  get(): TopTools_HSequenceOfShape;
  delete(): void;
}

  export declare class Handle_TopTools_HSequenceOfShape_1 extends Handle_TopTools_HSequenceOfShape {
    constructor();
  }

  export declare class Handle_TopTools_HSequenceOfShape_2 extends Handle_TopTools_HSequenceOfShape {
    constructor(thePtr: TopTools_HSequenceOfShape);
  }

  export declare class Handle_TopTools_HSequenceOfShape_3 extends Handle_TopTools_HSequenceOfShape {
    constructor(theHandle: Handle_TopTools_HSequenceOfShape);
  }

  export declare class Handle_TopTools_HSequenceOfShape_4 extends Handle_TopTools_HSequenceOfShape {
    constructor(theHandle: Handle_TopTools_HSequenceOfShape);
  }

export declare class TopTools_IndexedDataMapOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedDataMapOfShapeListOfShape): void;
  Assign(theOther: TopTools_IndexedDataMapOfShapeListOfShape): TopTools_IndexedDataMapOfShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopTools_ListOfShape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopTools_ListOfShape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopTools_ListOfShape;
  ChangeFromIndex(theIndex: Standard_Integer): TopTools_ListOfShape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  ChangeFromKey(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  Seek(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  ChangeSeek(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_1 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor();
  }

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_2 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_3 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor(theOther: TopTools_IndexedDataMapOfShapeListOfShape);
  }

export declare class TopTools_IndexedMapOfShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedMapOfShape): void;
  Assign(theOther: TopTools_IndexedMapOfShape): TopTools_IndexedMapOfShape;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class TopTools_IndexedMapOfShape_1 extends TopTools_IndexedMapOfShape {
    constructor();
  }

  export declare class TopTools_IndexedMapOfShape_2 extends TopTools_IndexedMapOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_IndexedMapOfShape_3 extends TopTools_IndexedMapOfShape {
    constructor(theOther: TopTools_IndexedMapOfShape);
  }

export declare class TopTools_ListOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopTools_ListOfShape): TopTools_ListOfShape;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  First_1(): TopoDS_Shape;
  First_2(): TopoDS_Shape;
  Last_1(): TopoDS_Shape;
  Last_2(): TopoDS_Shape;
  Append_1(theItem: TopoDS_Shape): TopoDS_Shape;
  Append_3(theOther: TopTools_ListOfShape): void;
  Prepend_1(theItem: TopoDS_Shape): TopoDS_Shape;
  Prepend_2(theOther: TopTools_ListOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
  delete(): void;
}

  export declare class TopTools_ListOfShape_1 extends TopTools_ListOfShape {
    constructor();
  }

  export declare class TopTools_ListOfShape_2 extends TopTools_ListOfShape {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_ListOfShape_3 extends TopTools_ListOfShape {
    constructor(theOther: TopTools_ListOfShape);
  }

export declare class TopTools_MapOfShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_MapOfShape): void;
  Assign(theOther: TopTools_MapOfShape): TopTools_MapOfShape;
  ReSize(N: Standard_Integer): void;
  Add(K: TopoDS_Shape): Standard_Boolean;
  Added(K: TopoDS_Shape): TopoDS_Shape;
  Contains_1(K: TopoDS_Shape): Standard_Boolean;
  Remove(K: TopoDS_Shape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TopTools_MapOfShape): Standard_Boolean;
  Contains_2(theOther: TopTools_MapOfShape): Standard_Boolean;
  Union(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Unite(theOther: TopTools_MapOfShape): Standard_Boolean;
  HasIntersection(theMap: TopTools_MapOfShape): Standard_Boolean;
  Intersection(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Intersect(theOther: TopTools_MapOfShape): Standard_Boolean;
  Subtraction(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Subtract(theOther: TopTools_MapOfShape): Standard_Boolean;
  Difference(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Differ(theOther: TopTools_MapOfShape): Standard_Boolean;
  delete(): void;
}

  export declare class TopTools_MapOfShape_1 extends TopTools_MapOfShape {
    constructor();
  }

  export declare class TopTools_MapOfShape_2 extends TopTools_MapOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_MapOfShape_3 extends TopTools_MapOfShape {
    constructor(theOther: TopTools_MapOfShape);
  }

export declare class TopTools_SequenceOfShape extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TopTools_SequenceOfShape): TopTools_SequenceOfShape;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TopoDS_Shape): void;
  Append_2(theSeq: TopTools_SequenceOfShape): void;
  Prepend_1(theItem: TopoDS_Shape): void;
  Prepend_2(theSeq: TopTools_SequenceOfShape): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  Split(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  First(): TopoDS_Shape;
  ChangeFirst(): TopoDS_Shape;
  Last(): TopoDS_Shape;
  ChangeLast(): TopoDS_Shape;
  Value(theIndex: Standard_Integer): TopoDS_Shape;
  ChangeValue(theIndex: Standard_Integer): TopoDS_Shape;
  SetValue(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  delete(): void;
}

  export declare class TopTools_SequenceOfShape_1 extends TopTools_SequenceOfShape {
    constructor();
  }

  export declare class TopTools_SequenceOfShape_2 extends TopTools_SequenceOfShape {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TopTools_SequenceOfShape_3 extends TopTools_SequenceOfShape {
    constructor(theOther: TopTools_SequenceOfShape);
  }

export declare class TopoDS {
  constructor();
  static Vertex_1(S: TopoDS_Shape): TopoDS_Vertex;
  static Vertex_2(a0: TopoDS_Shape): TopoDS_Vertex;
  static Edge_1(S: TopoDS_Shape): TopoDS_Edge;
  static Edge_2(a0: TopoDS_Shape): TopoDS_Edge;
  static Wire_1(S: TopoDS_Shape): TopoDS_Wire;
  static Wire_2(a0: TopoDS_Shape): TopoDS_Wire;
  static Face_1(S: TopoDS_Shape): TopoDS_Face;
  static Face_2(a0: TopoDS_Shape): TopoDS_Face;
  static Shell_1(S: TopoDS_Shape): TopoDS_Shell;
  static Shell_2(a0: TopoDS_Shape): TopoDS_Shell;
  static Solid_1(S: TopoDS_Shape): TopoDS_Solid;
  static Solid_2(a0: TopoDS_Shape): TopoDS_Solid;
  static CompSolid_1(S: TopoDS_Shape): TopoDS_CompSolid;
  static CompSolid_2(a0: TopoDS_Shape): TopoDS_CompSolid;
  static Compound_1(S: TopoDS_Shape): TopoDS_Compound;
  static Compound_2(a0: TopoDS_Shape): TopoDS_Compound;
  delete(): void;
}

export declare class TopoDS_Builder {
  constructor();
  MakeWire(W: TopoDS_Wire): void;
  MakeShell(S: TopoDS_Shell): void;
  MakeSolid(S: TopoDS_Solid): void;
  MakeCompSolid(C: TopoDS_CompSolid): void;
  MakeCompound(C: TopoDS_Compound): void;
  Add(S: TopoDS_Shape, C: TopoDS_Shape): void;
  Remove(S: TopoDS_Shape, C: TopoDS_Shape): void;
  delete(): void;
}

export declare class TopoDS_CompSolid extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Compound extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Edge extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Face extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Iterator {
  Initialize(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  delete(): void;
}

  export declare class TopoDS_Iterator_1 extends TopoDS_Iterator {
    constructor();
  }

  export declare class TopoDS_Iterator_2 extends TopoDS_Iterator {
    constructor(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean);
  }

export declare class TopoDS_Shape {
  constructor()
  IsNull(): Standard_Boolean;
  Nullify(): void;
  Location_1(): TopLoc_Location;
  Location_2(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Located(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Orientation_1(): TopAbs_Orientation;
  Orientation_2(theOrient: TopAbs_Orientation): void;
  Oriented(theOrient: TopAbs_Orientation): TopoDS_Shape;
  TShape_1(): Handle_TopoDS_TShape;
  ShapeType(): TopAbs_ShapeEnum;
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  Move(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Moved(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Reverse(): void;
  Reversed(): TopoDS_Shape;
  Complement(): void;
  Complemented(): TopoDS_Shape;
  Compose(theOrient: TopAbs_Orientation): void;
  Composed(theOrient: TopAbs_Orientation): TopoDS_Shape;
  NbChildren(): Graphic3d_ZLayerId;
  IsPartner(theOther: TopoDS_Shape): Standard_Boolean;
  IsSame(theOther: TopoDS_Shape): Standard_Boolean;
  IsEqual(theOther: TopoDS_Shape): Standard_Boolean;
  IsNotEqual(theOther: TopoDS_Shape): Standard_Boolean;
  HashCode(theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  EmptyCopy(): void;
  EmptyCopied(): TopoDS_Shape;
  TShape_2(theTShape: Handle_TopoDS_TShape): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

export declare class TopoDS_Shell extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Solid extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class Handle_TopoDS_TShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TShape): void;
  get(): TopoDS_TShape;
  delete(): void;
}

  export declare class Handle_TopoDS_TShape_1 extends Handle_TopoDS_TShape {
    constructor();
  }

  export declare class Handle_TopoDS_TShape_2 extends Handle_TopoDS_TShape {
    constructor(thePtr: TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_3 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_4 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

export declare class TopoDS_Vertex extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Wire extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class Handle_XCAFDoc_ClippingPlaneTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ClippingPlaneTool): void;
  get(): XCAFDoc_ClippingPlaneTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_ClippingPlaneTool_1 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_2 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(thePtr: XCAFDoc_ClippingPlaneTool);
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_3 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(theHandle: Handle_XCAFDoc_ClippingPlaneTool);
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_4 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(theHandle: Handle_XCAFDoc_ClippingPlaneTool);
  }

export declare class XCAFDoc_ClippingPlaneTool extends TDataStd_GenericEmpty {
  constructor()
  static Set(theLabel: TDF_Label): Handle_XCAFDoc_ClippingPlaneTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  IsClippingPlane(theLabel: TDF_Label): Standard_Boolean;
  GetClippingPlane_1(theLabel: TDF_Label, thePlane: gp_Pln, theName: TCollection_ExtendedString, theCapping: Standard_Boolean): Standard_Boolean;
  GetClippingPlane_2(theLabel: TDF_Label, thePlane: gp_Pln, theName: Handle_TCollection_HAsciiString, theCapping: Standard_Boolean): Standard_Boolean;
  AddClippingPlane_1(thePlane: gp_Pln, theName: TCollection_ExtendedString, theCapping: Standard_Boolean): TDF_Label;
  AddClippingPlane_2(thePlane: gp_Pln, theName: Handle_TCollection_HAsciiString, theCapping: Standard_Boolean): TDF_Label;
  AddClippingPlane_3(thePlane: gp_Pln, theName: TCollection_ExtendedString): TDF_Label;
  AddClippingPlane_4(thePlane: gp_Pln, theName: Handle_TCollection_HAsciiString): TDF_Label;
  RemoveClippingPlane(theLabel: TDF_Label): Standard_Boolean;
  GetClippingPlanes(Labels: TDF_LabelSequence): void;
  UpdateClippingPlane(theLabelL: TDF_Label, thePlane: gp_Pln, theName: TCollection_ExtendedString): void;
  SetCapping(theClippingPlaneL: TDF_Label, theCapping: Standard_Boolean): void;
  GetCapping_1(theClippingPlaneL: TDF_Label): Standard_Boolean;
  GetCapping_2(theClippingPlaneL: TDF_Label, theCapping: Standard_Boolean): Standard_Boolean;
  ID(): Standard_GUID;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_ColorTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ColorTool): void;
  get(): XCAFDoc_ColorTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_ColorTool_1 extends Handle_XCAFDoc_ColorTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ColorTool_2 extends Handle_XCAFDoc_ColorTool {
    constructor(thePtr: XCAFDoc_ColorTool);
  }

  export declare class Handle_XCAFDoc_ColorTool_3 extends Handle_XCAFDoc_ColorTool {
    constructor(theHandle: Handle_XCAFDoc_ColorTool);
  }

  export declare class Handle_XCAFDoc_ColorTool_4 extends Handle_XCAFDoc_ColorTool {
    constructor(theHandle: Handle_XCAFDoc_ColorTool);
  }

export declare class XCAFDoc_ColorTool extends TDataStd_GenericEmpty {
  constructor()
  static AutoNaming(): Standard_Boolean;
  static SetAutoNaming(theIsAutoNaming: Standard_Boolean): void;
  static Set(L: TDF_Label): Handle_XCAFDoc_ColorTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): Handle_XCAFDoc_ShapeTool;
  IsColor(lab: TDF_Label): Standard_Boolean;
  GetColor_1(lab: TDF_Label, col: Quantity_Color): Standard_Boolean;
  GetColor_2(lab: TDF_Label, col: Quantity_ColorRGBA): Standard_Boolean;
  FindColor_1(col: Quantity_Color, lab: TDF_Label): Standard_Boolean;
  FindColor_2(col: Quantity_ColorRGBA, lab: TDF_Label): Standard_Boolean;
  FindColor_3(col: Quantity_Color): TDF_Label;
  FindColor_4(col: Quantity_ColorRGBA): TDF_Label;
  AddColor_1(col: Quantity_Color): TDF_Label;
  AddColor_2(col: Quantity_ColorRGBA): TDF_Label;
  RemoveColor(lab: TDF_Label): void;
  GetColors(Labels: TDF_LabelSequence): void;
  SetColor_1(L: TDF_Label, colorL: TDF_Label, type: XCAFDoc_ColorType): void;
  SetColor_2(L: TDF_Label, Color: Quantity_Color, type: XCAFDoc_ColorType): void;
  SetColor_3(L: TDF_Label, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): void;
  UnSetColor_1(L: TDF_Label, type: XCAFDoc_ColorType): void;
  IsSet_1(L: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  static GetColor_3(L: TDF_Label, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  GetColor_4(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetColor_5(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  SetColor_4(S: TopoDS_Shape, colorL: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_5(S: TopoDS_Shape, Color: Quantity_Color, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_6(S: TopoDS_Shape, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): Standard_Boolean;
  UnSetColor_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  IsSet_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  GetColor_6(S: TopoDS_Shape, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  GetColor_7(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetColor_8(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  IsVisible(L: TDF_Label): Standard_Boolean;
  SetVisibility(shapeLabel: TDF_Label, isvisible: Standard_Boolean): void;
  IsColorByLayer(L: TDF_Label): Standard_Boolean;
  SetColorByLayer(shapeLabel: TDF_Label, isColorByLayer: Standard_Boolean): void;
  SetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  SetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  GetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  IsInstanceVisible(theShape: TopoDS_Shape): Standard_Boolean;
  ReverseChainsOfTreeNodes(): Standard_Boolean;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare type XCAFDoc_ColorType = {
  XCAFDoc_ColorGen: {};
  XCAFDoc_ColorSurf: {};
  XCAFDoc_ColorCurv: {};
}

export declare class XCAFDoc_DataMapOfShapeLabel extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XCAFDoc_DataMapOfShapeLabel): void;
  Assign(theOther: XCAFDoc_DataMapOfShapeLabel): XCAFDoc_DataMapOfShapeLabel;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TDF_Label): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TDF_Label): TDF_Label;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TDF_Label;
  ChangeSeek(theKey: TopoDS_Shape): TDF_Label;
  ChangeFind(theKey: TopoDS_Shape): TDF_Label;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class XCAFDoc_DataMapOfShapeLabel_1 extends XCAFDoc_DataMapOfShapeLabel {
    constructor();
  }

  export declare class XCAFDoc_DataMapOfShapeLabel_2 extends XCAFDoc_DataMapOfShapeLabel {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class XCAFDoc_DataMapOfShapeLabel_3 extends XCAFDoc_DataMapOfShapeLabel {
    constructor(theOther: XCAFDoc_DataMapOfShapeLabel);
  }

export declare class Handle_XCAFDoc_DimTolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_DimTolTool): void;
  get(): XCAFDoc_DimTolTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_DimTolTool_1 extends Handle_XCAFDoc_DimTolTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_DimTolTool_2 extends Handle_XCAFDoc_DimTolTool {
    constructor(thePtr: XCAFDoc_DimTolTool);
  }

  export declare class Handle_XCAFDoc_DimTolTool_3 extends Handle_XCAFDoc_DimTolTool {
    constructor(theHandle: Handle_XCAFDoc_DimTolTool);
  }

  export declare class Handle_XCAFDoc_DimTolTool_4 extends Handle_XCAFDoc_DimTolTool {
    constructor(theHandle: Handle_XCAFDoc_DimTolTool);
  }

export declare class XCAFDoc_DimTolTool extends TDataStd_GenericEmpty {
  constructor()
  static Set(L: TDF_Label): Handle_XCAFDoc_DimTolTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): Handle_XCAFDoc_ShapeTool;
  IsDimension(theLab: TDF_Label): Standard_Boolean;
  GetDimensionLabels(theLabels: TDF_LabelSequence): void;
  SetDimension_1(theFirstLS: TDF_LabelSequence, theSecondLS: TDF_LabelSequence, theDimL: TDF_Label): void;
  SetDimension_2(theFirstL: TDF_Label, theSecondL: TDF_Label, theDimL: TDF_Label): void;
  SetDimension_3(theL: TDF_Label, theDimL: TDF_Label): void;
  GetRefDimensionLabels(theShapeL: TDF_Label, theDimensions: TDF_LabelSequence): Standard_Boolean;
  AddDimension(): TDF_Label;
  IsGeomTolerance(theLab: TDF_Label): Standard_Boolean;
  GetGeomToleranceLabels(theLabels: TDF_LabelSequence): void;
  SetGeomTolerance_1(theL: TDF_Label, theGeomTolL: TDF_Label): void;
  SetGeomTolerance_2(theL: TDF_LabelSequence, theGeomTolL: TDF_Label): void;
  GetRefGeomToleranceLabels(theShapeL: TDF_Label, theDimTols: TDF_LabelSequence): Standard_Boolean;
  AddGeomTolerance(): TDF_Label;
  IsDimTol(theLab: TDF_Label): Standard_Boolean;
  GetDimTolLabels(Labels: TDF_LabelSequence): void;
  FindDimTol_1(theKind: Graphic3d_ZLayerId, theVal: Handle_TColStd_HArray1OfReal, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString, lab: TDF_Label): Standard_Boolean;
  FindDimTol_2(theKind: Graphic3d_ZLayerId, theVal: Handle_TColStd_HArray1OfReal, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString): TDF_Label;
  AddDimTol(theKind: Graphic3d_ZLayerId, theVal: Handle_TColStd_HArray1OfReal, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString): TDF_Label;
  SetDimTol_1(theL: TDF_Label, theDimTolL: TDF_Label): void;
  SetDimTol_2(theL: TDF_Label, theKind: Graphic3d_ZLayerId, theVal: Handle_TColStd_HArray1OfReal, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString): TDF_Label;
  GetRefShapeLabel(theL: TDF_Label, theShapeLFirst: TDF_LabelSequence, theShapeLSecond: TDF_LabelSequence): Standard_Boolean;
  GetDimTol(theDimTolL: TDF_Label, theKind: Graphic3d_ZLayerId, theVal: Handle_TColStd_HArray1OfReal, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString): Standard_Boolean;
  IsDatum(lab: TDF_Label): Standard_Boolean;
  GetDatumLabels(Labels: TDF_LabelSequence): void;
  FindDatum(theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString, theIdentification: Handle_TCollection_HAsciiString, lab: TDF_Label): Standard_Boolean;
  AddDatum_1(theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString, theIdentification: Handle_TCollection_HAsciiString): TDF_Label;
  AddDatum_2(): TDF_Label;
  SetDatum_1(theShapeLabels: TDF_LabelSequence, theDatumL: TDF_Label): void;
  SetDatum_2(theL: TDF_Label, theTolerL: TDF_Label, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString, theIdentification: Handle_TCollection_HAsciiString): void;
  SetDatumToGeomTol(theDatumL: TDF_Label, theTolerL: TDF_Label): void;
  GetDatum(theDatumL: TDF_Label, theName: Handle_TCollection_HAsciiString, theDescription: Handle_TCollection_HAsciiString, theIdentification: Handle_TCollection_HAsciiString): Standard_Boolean;
  GetDatumOfTolerLabels(theDimTolL: TDF_Label, theDatums: TDF_LabelSequence): Standard_Boolean;
  GetDatumWithObjectOfTolerLabels(theDimTolL: TDF_Label, theDatums: TDF_LabelSequence): Standard_Boolean;
  GetTolerOfDatumLabels(theDatumL: TDF_Label, theTols: TDF_LabelSequence): Standard_Boolean;
  GetRefDatumLabel(theShapeL: TDF_Label, theDatum: TDF_LabelSequence): Standard_Boolean;
  IsLocked(theViewL: TDF_Label): Standard_Boolean;
  Lock(theViewL: TDF_Label): void;
  GetGDTPresentations(theGDTLabelToShape: NCollection_IndexedDataMap<TDF_Label, TopoDS_Shape, TDF_LabelMapHasher>): void;
  SetGDTPresentations(theGDTLabelToPrs: NCollection_IndexedDataMap<TDF_Label, TopoDS_Shape, TDF_LabelMapHasher>): void;
  Unlock(theViewL: TDF_Label): void;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_DocumentTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_DocumentTool): void;
  get(): XCAFDoc_DocumentTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_DocumentTool_1 extends Handle_XCAFDoc_DocumentTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_DocumentTool_2 extends Handle_XCAFDoc_DocumentTool {
    constructor(thePtr: XCAFDoc_DocumentTool);
  }

  export declare class Handle_XCAFDoc_DocumentTool_3 extends Handle_XCAFDoc_DocumentTool {
    constructor(theHandle: Handle_XCAFDoc_DocumentTool);
  }

  export declare class Handle_XCAFDoc_DocumentTool_4 extends Handle_XCAFDoc_DocumentTool {
    constructor(theHandle: Handle_XCAFDoc_DocumentTool);
  }

export declare class XCAFDoc_DocumentTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label, IsAcces: Standard_Boolean): Handle_XCAFDoc_DocumentTool;
  static IsXCAFDocument(Doc: Handle_TDocStd_Document): Standard_Boolean;
  static DocLabel(acces: TDF_Label): TDF_Label;
  static ShapesLabel(acces: TDF_Label): TDF_Label;
  static ColorsLabel(acces: TDF_Label): TDF_Label;
  static LayersLabel(acces: TDF_Label): TDF_Label;
  static DGTsLabel(acces: TDF_Label): TDF_Label;
  static MaterialsLabel(acces: TDF_Label): TDF_Label;
  static ViewsLabel(acces: TDF_Label): TDF_Label;
  static ClippingPlanesLabel(acces: TDF_Label): TDF_Label;
  static NotesLabel(acces: TDF_Label): TDF_Label;
  static VisMaterialLabel(theLabel: TDF_Label): TDF_Label;
  static ShapeTool(acces: TDF_Label): Handle_XCAFDoc_ShapeTool;
  static CheckShapeTool(theAcces: TDF_Label): Standard_Boolean;
  static ColorTool(acces: TDF_Label): Handle_XCAFDoc_ColorTool;
  static CheckColorTool(theAcces: TDF_Label): Standard_Boolean;
  static VisMaterialTool(theLabel: TDF_Label): Handle_XCAFDoc_VisMaterialTool;
  static CheckVisMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static LayerTool(acces: TDF_Label): Handle_XCAFDoc_LayerTool;
  static CheckLayerTool(theAcces: TDF_Label): Standard_Boolean;
  static DimTolTool(acces: TDF_Label): Handle_XCAFDoc_DimTolTool;
  static CheckDimTolTool(theAcces: TDF_Label): Standard_Boolean;
  static MaterialTool(acces: TDF_Label): Handle_XCAFDoc_MaterialTool;
  static CheckMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static ViewTool(acces: TDF_Label): Handle_XCAFDoc_ViewTool;
  static CheckViewTool(theAcces: TDF_Label): Standard_Boolean;
  static ClippingPlaneTool(acces: TDF_Label): Handle_XCAFDoc_ClippingPlaneTool;
  static CheckClippingPlaneTool(theAcces: TDF_Label): Standard_Boolean;
  static NotesTool(acces: TDF_Label): Handle_XCAFDoc_NotesTool;
  static CheckNotesTool(theAcces: TDF_Label): Standard_Boolean;
  static GetLengthUnit_1(theDoc: Handle_TDocStd_Document, theResut: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): Standard_Boolean;
  static GetLengthUnit_2(theDoc: Handle_TDocStd_Document, theResut: Standard_Real): Standard_Boolean;
  static SetLengthUnit_1(theDoc: Handle_TDocStd_Document, theUnitValue: Standard_Real): void;
  static SetLengthUnit_2(theDoc: Handle_TDocStd_Document, theUnitValue: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): void;
  Init(): void;
  ID(): Standard_GUID;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_GraphNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_GraphNode): void;
  get(): XCAFDoc_GraphNode;
  delete(): void;
}

  export declare class Handle_XCAFDoc_GraphNode_1 extends Handle_XCAFDoc_GraphNode {
    constructor();
  }

  export declare class Handle_XCAFDoc_GraphNode_2 extends Handle_XCAFDoc_GraphNode {
    constructor(thePtr: XCAFDoc_GraphNode);
  }

  export declare class Handle_XCAFDoc_GraphNode_3 extends Handle_XCAFDoc_GraphNode {
    constructor(theHandle: Handle_XCAFDoc_GraphNode);
  }

  export declare class Handle_XCAFDoc_GraphNode_4 extends Handle_XCAFDoc_GraphNode {
    constructor(theHandle: Handle_XCAFDoc_GraphNode);
  }

export declare class XCAFDoc_GraphNode extends TDF_Attribute {
  constructor()
  static Find(L: TDF_Label, G: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  static Set_1(L: TDF_Label): Handle_XCAFDoc_GraphNode;
  static Set_2(L: TDF_Label, ExplicitGraphID: Standard_GUID): Handle_XCAFDoc_GraphNode;
  static GetDefaultGraphID(): Standard_GUID;
  SetGraphID(explicitID: Standard_GUID): void;
  SetFather(F: Handle_XCAFDoc_GraphNode): Graphic3d_ZLayerId;
  SetChild(Ch: Handle_XCAFDoc_GraphNode): Graphic3d_ZLayerId;
  UnSetFather_1(F: Handle_XCAFDoc_GraphNode): void;
  UnSetFather_2(Findex: Graphic3d_ZLayerId): void;
  UnSetChild_1(Ch: Handle_XCAFDoc_GraphNode): void;
  UnSetChild_2(Chindex: Graphic3d_ZLayerId): void;
  GetFather(Findex: Graphic3d_ZLayerId): Handle_XCAFDoc_GraphNode;
  GetChild(Chindex: Graphic3d_ZLayerId): Handle_XCAFDoc_GraphNode;
  FatherIndex(F: Handle_XCAFDoc_GraphNode): Graphic3d_ZLayerId;
  ChildIndex(Ch: Handle_XCAFDoc_GraphNode): Graphic3d_ZLayerId;
  IsFather(Ch: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  IsChild(F: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  NbFathers(): Graphic3d_ZLayerId;
  NbChildren(): Graphic3d_ZLayerId;
  ID(): Standard_GUID;
  Restore(with_: Handle_TDF_Attribute): void;
  Paste(into: Handle_TDF_Attribute, RT: Handle_TDF_RelocationTable): void;
  NewEmpty(): Handle_TDF_Attribute;
  References(aDataSet: Handle_TDF_DataSet): void;
  BeforeForget(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_XCAFDoc_LayerTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_LayerTool): void;
  get(): XCAFDoc_LayerTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_LayerTool_1 extends Handle_XCAFDoc_LayerTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_LayerTool_2 extends Handle_XCAFDoc_LayerTool {
    constructor(thePtr: XCAFDoc_LayerTool);
  }

  export declare class Handle_XCAFDoc_LayerTool_3 extends Handle_XCAFDoc_LayerTool {
    constructor(theHandle: Handle_XCAFDoc_LayerTool);
  }

  export declare class Handle_XCAFDoc_LayerTool_4 extends Handle_XCAFDoc_LayerTool {
    constructor(theHandle: Handle_XCAFDoc_LayerTool);
  }

export declare class XCAFDoc_LayerTool extends TDataStd_GenericEmpty {
  constructor()
  static Set(L: TDF_Label): Handle_XCAFDoc_LayerTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): Handle_XCAFDoc_ShapeTool;
  IsLayer(lab: TDF_Label): Standard_Boolean;
  GetLayer(lab: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  FindLayer_1(aLayer: TCollection_ExtendedString, lab: TDF_Label): Standard_Boolean;
  FindLayer_2(aLayer: TCollection_ExtendedString, theToFindWithProperty: Standard_Boolean, theToFindVisible: Standard_Boolean): TDF_Label;
  AddLayer_1(theLayer: TCollection_ExtendedString): TDF_Label;
  AddLayer_2(theLayer: TCollection_ExtendedString, theToFindVisible: Standard_Boolean): TDF_Label;
  RemoveLayer(lab: TDF_Label): void;
  GetLayerLabels(Labels: TDF_LabelSequence): void;
  SetLayer_1(L: TDF_Label, LayerL: TDF_Label, shapeInOneLayer: Standard_Boolean): void;
  SetLayer_2(L: TDF_Label, aLayer: TCollection_ExtendedString, shapeInOneLayer: Standard_Boolean): void;
  UnSetLayers_1(L: TDF_Label): void;
  UnSetOneLayer_1(L: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  UnSetOneLayer_2(L: TDF_Label, aLayerL: TDF_Label): Standard_Boolean;
  IsSet_1(L: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  IsSet_2(L: TDF_Label, aLayerL: TDF_Label): Standard_Boolean;
  GetLayers_1(L: TDF_Label, aLayerS: Handle_TColStd_HSequenceOfExtendedString): Standard_Boolean;
  GetLayers_2(L: TDF_Label, aLayerLS: TDF_LabelSequence): Standard_Boolean;
  GetLayers_3(L: TDF_Label): Handle_TColStd_HSequenceOfExtendedString;
  GetShapesOfLayer(layerL: TDF_Label, ShLabels: TDF_LabelSequence): void;
  IsVisible(layerL: TDF_Label): Standard_Boolean;
  SetVisibility(layerL: TDF_Label, isvisible: Standard_Boolean): void;
  SetLayer_3(Sh: TopoDS_Shape, LayerL: TDF_Label, shapeInOneLayer: Standard_Boolean): Standard_Boolean;
  SetLayer_4(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString, shapeInOneLayer: Standard_Boolean): Standard_Boolean;
  UnSetLayers_2(Sh: TopoDS_Shape): Standard_Boolean;
  UnSetOneLayer_3(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString): Standard_Boolean;
  UnSetOneLayer_4(Sh: TopoDS_Shape, aLayerL: TDF_Label): Standard_Boolean;
  IsSet_3(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString): Standard_Boolean;
  IsSet_4(Sh: TopoDS_Shape, aLayerL: TDF_Label): Standard_Boolean;
  GetLayers_4(Sh: TopoDS_Shape, aLayerS: Handle_TColStd_HSequenceOfExtendedString): Standard_Boolean;
  GetLayers_5(Sh: TopoDS_Shape, aLayerLS: TDF_LabelSequence): Standard_Boolean;
  GetLayers_6(Sh: TopoDS_Shape): Handle_TColStd_HSequenceOfExtendedString;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_MaterialTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_MaterialTool): void;
  get(): XCAFDoc_MaterialTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_MaterialTool_1 extends Handle_XCAFDoc_MaterialTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_MaterialTool_2 extends Handle_XCAFDoc_MaterialTool {
    constructor(thePtr: XCAFDoc_MaterialTool);
  }

  export declare class Handle_XCAFDoc_MaterialTool_3 extends Handle_XCAFDoc_MaterialTool {
    constructor(theHandle: Handle_XCAFDoc_MaterialTool);
  }

  export declare class Handle_XCAFDoc_MaterialTool_4 extends Handle_XCAFDoc_MaterialTool {
    constructor(theHandle: Handle_XCAFDoc_MaterialTool);
  }

export declare class XCAFDoc_MaterialTool extends TDataStd_GenericEmpty {
  constructor()
  static Set(L: TDF_Label): Handle_XCAFDoc_MaterialTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): Handle_XCAFDoc_ShapeTool;
  IsMaterial(lab: TDF_Label): Standard_Boolean;
  GetMaterialLabels(Labels: TDF_LabelSequence): void;
  AddMaterial(aName: Handle_TCollection_HAsciiString, aDescription: Handle_TCollection_HAsciiString, aDensity: Standard_Real, aDensName: Handle_TCollection_HAsciiString, aDensValType: Handle_TCollection_HAsciiString): TDF_Label;
  SetMaterial_1(L: TDF_Label, MatL: TDF_Label): void;
  SetMaterial_2(L: TDF_Label, aName: Handle_TCollection_HAsciiString, aDescription: Handle_TCollection_HAsciiString, aDensity: Standard_Real, aDensName: Handle_TCollection_HAsciiString, aDensValType: Handle_TCollection_HAsciiString): void;
  GetMaterial(MatL: TDF_Label, aName: Handle_TCollection_HAsciiString, aDescription: Handle_TCollection_HAsciiString, aDensity: Standard_Real, aDensName: Handle_TCollection_HAsciiString, aDensValType: Handle_TCollection_HAsciiString): Standard_Boolean;
  static GetDensityForShape(ShapeL: TDF_Label): Standard_Real;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_NotesTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_NotesTool): void;
  get(): XCAFDoc_NotesTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_NotesTool_1 extends Handle_XCAFDoc_NotesTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_NotesTool_2 extends Handle_XCAFDoc_NotesTool {
    constructor(thePtr: XCAFDoc_NotesTool);
  }

  export declare class Handle_XCAFDoc_NotesTool_3 extends Handle_XCAFDoc_NotesTool {
    constructor(theHandle: Handle_XCAFDoc_NotesTool);
  }

  export declare class Handle_XCAFDoc_NotesTool_4 extends Handle_XCAFDoc_NotesTool {
    constructor(theHandle: Handle_XCAFDoc_NotesTool);
  }

export declare class XCAFDoc_NotesTool extends TDataStd_GenericEmpty {
  constructor()
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  static GetID(): Standard_GUID;
  static Set(theLabel: TDF_Label): Handle_XCAFDoc_NotesTool;
  GetNotesLabel(): TDF_Label;
  GetAnnotatedItemsLabel(): TDF_Label;
  NbNotes(): Graphic3d_ZLayerId;
  NbAnnotatedItems(): Graphic3d_ZLayerId;
  GetNotes_1(theNoteLabels: TDF_LabelSequence): void;
  GetAnnotatedItems(theLabels: TDF_LabelSequence): void;
  IsAnnotatedItem_1(theItemId: XCAFDoc_AssemblyItemId): Standard_Boolean;
  IsAnnotatedItem_2(theItemLabel: TDF_Label): Standard_Boolean;
  FindAnnotatedItem_1(theItemId: XCAFDoc_AssemblyItemId): TDF_Label;
  FindAnnotatedItem_2(theItemLabel: TDF_Label): TDF_Label;
  FindAnnotatedItemAttr_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID): TDF_Label;
  FindAnnotatedItemAttr_2(theItemLabel: TDF_Label, theGUID: Standard_GUID): TDF_Label;
  FindAnnotatedItemSubshape_1(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Graphic3d_ZLayerId): TDF_Label;
  FindAnnotatedItemSubshape_2(theItemLabel: TDF_Label, theSubshapeIndex: Graphic3d_ZLayerId): TDF_Label;
  CreateComment(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): Handle_XCAFDoc_Note;
  CreateBalloon(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): Handle_XCAFDoc_Note;
  CreateBinData_1(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: XCAFDoc_PartId, theFile: OSD_File): Handle_XCAFDoc_Note;
  CreateBinData_2(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: XCAFDoc_PartId, theData: Handle_TColStd_HArray1OfByte): Handle_XCAFDoc_Note;
  GetNotes_2(theItemId: XCAFDoc_AssemblyItemId, theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  GetNotes_3(theItemLabel: TDF_Label, theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  GetAttrNotes_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  GetAttrNotes_2(theItemLabel: TDF_Label, theGUID: Standard_GUID, theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  GetSubshapeNotes(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Graphic3d_ZLayerId, theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  AddNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId): Handle_XCAFDoc_AssemblyItemRef;
  AddNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label): Handle_XCAFDoc_AssemblyItemRef;
  AddNoteToAttr_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID): Handle_XCAFDoc_AssemblyItemRef;
  AddNoteToAttr_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theGUID: Standard_GUID): Handle_XCAFDoc_AssemblyItemRef;
  AddNoteToSubshape_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Graphic3d_ZLayerId): Handle_XCAFDoc_AssemblyItemRef;
  AddNoteToSubshape_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theSubshapeIndex: Graphic3d_ZLayerId): Handle_XCAFDoc_AssemblyItemRef;
  RemoveNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveSubshapeNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Graphic3d_ZLayerId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveSubshapeNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theSubshapeIndex: Graphic3d_ZLayerId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAttrNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAttrNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllNotes_1(theItemId: XCAFDoc_AssemblyItemId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllNotes_2(theItemLabel: TDF_Label, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllSubshapeNotes(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Graphic3d_ZLayerId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllAttrNotes_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllAttrNotes_2(theItemLabel: TDF_Label, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  DeleteNote(theNoteLabel: TDF_Label): Standard_Boolean;
  DeleteNotes(theNoteLabels: TDF_LabelSequence): Graphic3d_ZLayerId;
  DeleteAllNotes(): Graphic3d_ZLayerId;
  NbOrphanNotes(): Graphic3d_ZLayerId;
  GetOrphanNotes(theNoteLabels: TDF_LabelSequence): void;
  DeleteOrphanNotes(): Graphic3d_ZLayerId;
  ID(): Standard_GUID;
  delete(): void;
}

export declare class Handle_XCAFDoc_ShapeTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ShapeTool): void;
  get(): XCAFDoc_ShapeTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_ShapeTool_1 extends Handle_XCAFDoc_ShapeTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ShapeTool_2 extends Handle_XCAFDoc_ShapeTool {
    constructor(thePtr: XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_3 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_4 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

export declare class XCAFDoc_ShapeTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label): Handle_XCAFDoc_ShapeTool;
  IsTopLevel(L: TDF_Label): Standard_Boolean;
  static IsFree(L: TDF_Label): Standard_Boolean;
  static IsShape(L: TDF_Label): Standard_Boolean;
  static IsSimpleShape(L: TDF_Label): Standard_Boolean;
  static IsReference(L: TDF_Label): Standard_Boolean;
  static IsAssembly(L: TDF_Label): Standard_Boolean;
  static IsComponent(L: TDF_Label): Standard_Boolean;
  static IsCompound(L: TDF_Label): Standard_Boolean;
  static IsSubShape_1(L: TDF_Label): Standard_Boolean;
  IsSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape): Standard_Boolean;
  SearchUsingMap(S: TopoDS_Shape, L: TDF_Label, findWithoutLoc: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  Search(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean, findComponent: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  FindShape_1(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean): Standard_Boolean;
  FindShape_2(S: TopoDS_Shape, findInstance: Standard_Boolean): TDF_Label;
  static GetShape_1(L: TDF_Label, S: TopoDS_Shape): Standard_Boolean;
  static GetShape_2(L: TDF_Label): TopoDS_Shape;
  NewShape(): TDF_Label;
  SetShape(L: TDF_Label, S: TopoDS_Shape): void;
  AddShape(S: TopoDS_Shape, makeAssembly: Standard_Boolean, makePrepare: Standard_Boolean): TDF_Label;
  RemoveShape(L: TDF_Label, removeCompletely: Standard_Boolean): Standard_Boolean;
  Init(): void;
  static SetAutoNaming(V: Standard_Boolean): void;
  static AutoNaming(): Standard_Boolean;
  ComputeShapes(L: TDF_Label): void;
  ComputeSimpleShapes(): void;
  GetShapes(Labels: TDF_LabelSequence): void;
  GetFreeShapes(FreeLabels: TDF_LabelSequence): void;
  static GetUsers(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Graphic3d_ZLayerId;
  static GetLocation(L: TDF_Label): TopLoc_Location;
  static GetReferredShape(L: TDF_Label, Label: TDF_Label): Standard_Boolean;
  static NbComponents(L: TDF_Label, getsubchilds: Standard_Boolean): Graphic3d_ZLayerId;
  static GetComponents(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Standard_Boolean;
  AddComponent_1(assembly: TDF_Label, comp: TDF_Label, Loc: TopLoc_Location): TDF_Label;
  AddComponent_2(assembly: TDF_Label, comp: TopoDS_Shape, expand: Standard_Boolean): TDF_Label;
  RemoveComponent(comp: TDF_Label): void;
  UpdateAssemblies(): void;
  FindSubShape(shapeL: TDF_Label, sub: TopoDS_Shape, L: TDF_Label): Standard_Boolean;
  AddSubShape_1(shapeL: TDF_Label, sub: TopoDS_Shape): TDF_Label;
  AddSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape, addedSubShapeL: TDF_Label): Standard_Boolean;
  FindMainShapeUsingMap(sub: TopoDS_Shape): TDF_Label;
  FindMainShape(sub: TopoDS_Shape): TDF_Label;
  static GetSubShapes(L: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  BaseLabel(): TDF_Label;
  static DumpShape(theDumpLog: Standard_OStream, L: TDF_Label, level: Graphic3d_ZLayerId, deep: Standard_Boolean): void;
  ID(): Standard_GUID;
  static IsExternRef(L: TDF_Label): Standard_Boolean;
  SetExternRefs_1(SHAS: TColStd_SequenceOfHAsciiString): TDF_Label;
  SetExternRefs_2(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  static GetExternRefs(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  SetSHUO(Labels: TDF_LabelSequence, MainSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  static GetSHUO(SHUOLabel: TDF_Label, aSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  static GetAllComponentSHUO(CompLabel: TDF_Label, SHUOAttrs: TDF_AttributeSequence): Standard_Boolean;
  static GetSHUOUpperUsage(NextUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  static GetSHUONextUsage(UpperUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  RemoveSHUO(SHUOLabel: TDF_Label): Standard_Boolean;
  FindComponent(theShape: TopoDS_Shape, Labels: TDF_LabelSequence): Standard_Boolean;
  GetSHUOInstance(theSHUO: Handle_XCAFDoc_GraphNode): TopoDS_Shape;
  SetInstanceSHUO(theShape: TopoDS_Shape): Handle_XCAFDoc_GraphNode;
  GetAllSHUOInstances(theSHUO: Handle_XCAFDoc_GraphNode, theSHUOShapeSeq: TopTools_SequenceOfShape): Standard_Boolean;
  static FindSHUO(Labels: TDF_LabelSequence, theSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  Expand(Shape: TDF_Label): Standard_Boolean;
  GetNamedProperties_1(theLabel: TDF_Label, theToCreate: Standard_Boolean): Handle_TDataStd_NamedData;
  GetNamedProperties_2(theShape: TopoDS_Shape, theToCreate: Standard_Boolean): Handle_TDataStd_NamedData;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_ViewTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ViewTool): void;
  get(): XCAFDoc_ViewTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_ViewTool_1 extends Handle_XCAFDoc_ViewTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ViewTool_2 extends Handle_XCAFDoc_ViewTool {
    constructor(thePtr: XCAFDoc_ViewTool);
  }

  export declare class Handle_XCAFDoc_ViewTool_3 extends Handle_XCAFDoc_ViewTool {
    constructor(theHandle: Handle_XCAFDoc_ViewTool);
  }

  export declare class Handle_XCAFDoc_ViewTool_4 extends Handle_XCAFDoc_ViewTool {
    constructor(theHandle: Handle_XCAFDoc_ViewTool);
  }

export declare class XCAFDoc_ViewTool extends TDataStd_GenericEmpty {
  constructor()
  static Set(L: TDF_Label): Handle_XCAFDoc_ViewTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  IsView(theLabel: TDF_Label): Standard_Boolean;
  GetViewLabels(theLabels: TDF_LabelSequence): void;
  SetView_1(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theClippingPlanes: TDF_LabelSequence, theNotes: TDF_LabelSequence, theAnnotations: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetView_2(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theClippingPlanes: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetView_3(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetClippingPlanes(theClippingPlaneLabels: TDF_LabelSequence, theViewL: TDF_Label): void;
  RemoveView(theViewL: TDF_Label): void;
  GetViewLabelsForShape(theShapeL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForGDT(theGDTL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForClippingPlane(theClippingPlaneL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForNote(theNoteL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForAnnotation(theAnnotationL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  AddView(): TDF_Label;
  GetRefShapeLabel(theViewL: TDF_Label, theShapeLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefGDTLabel(theViewL: TDF_Label, theGDTLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefClippingPlaneLabel(theViewL: TDF_Label, theClippingPlaneLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefNoteLabel(theViewL: TDF_Label, theNoteLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefAnnotationLabel(theViewL: TDF_Label, theAnnotationLabels: TDF_LabelSequence): Standard_Boolean;
  IsLocked(theViewL: TDF_Label): Standard_Boolean;
  Lock(theViewL: TDF_Label): void;
  Unlock(theViewL: TDF_Label): void;
  ID(): Standard_GUID;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_VisMaterialTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_VisMaterialTool): void;
  get(): XCAFDoc_VisMaterialTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_VisMaterialTool_1 extends Handle_XCAFDoc_VisMaterialTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_2 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(thePtr: XCAFDoc_VisMaterialTool);
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_3 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(theHandle: Handle_XCAFDoc_VisMaterialTool);
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_4 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(theHandle: Handle_XCAFDoc_VisMaterialTool);
  }

export declare class XCAFDoc_VisMaterialTool extends TDF_Attribute {
  constructor()
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  static Set(L: TDF_Label): Handle_XCAFDoc_VisMaterialTool;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): Handle_XCAFDoc_ShapeTool;
  IsMaterial(theLabel: TDF_Label): Standard_Boolean;
  GetMaterial(theMatLabel: TDF_Label): Handle_XCAFDoc_VisMaterial;
  AddMaterial_1(theMat: Handle_XCAFDoc_VisMaterial, theName: XCAFDoc_PartId): TDF_Label;
  AddMaterial_2(theName: XCAFDoc_PartId): TDF_Label;
  RemoveMaterial(theLabel: TDF_Label): void;
  GetMaterials(Labels: TDF_LabelSequence): void;
  SetShapeMaterial_1(theShapeLabel: TDF_Label, theMaterialLabel: TDF_Label): void;
  UnSetShapeMaterial_1(theShapeLabel: TDF_Label): void;
  IsSetShapeMaterial_1(theLabel: TDF_Label): Standard_Boolean;
  static GetShapeMaterial_1(theShapeLabel: TDF_Label, theMaterialLabel: TDF_Label): Standard_Boolean;
  GetShapeMaterial_2(theShapeLabel: TDF_Label): Handle_XCAFDoc_VisMaterial;
  SetShapeMaterial_2(theShape: TopoDS_Shape, theMaterialLabel: TDF_Label): Standard_Boolean;
  UnSetShapeMaterial_2(theShape: TopoDS_Shape): Standard_Boolean;
  IsSetShapeMaterial_2(theShape: TopoDS_Shape): Standard_Boolean;
  GetShapeMaterial_3(theShape: TopoDS_Shape, theMaterialLabel: TDF_Label): Standard_Boolean;
  GetShapeMaterial_4(theShape: TopoDS_Shape): Handle_XCAFDoc_VisMaterial;
  ID(): Standard_GUID;
  Restore(a0: Handle_TDF_Attribute): void;
  NewEmpty(): Handle_TDF_Attribute;
  Paste(a0: Handle_TDF_Attribute, a1: Handle_TDF_RelocationTable): void;
  delete(): void;
}

export declare class XSControl_Reader {
  SetNorm(norm: Standard_CString): Standard_Boolean;
  SetWS(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean): void;
  WS(): Handle_XSControl_WorkSession;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  ReadStream(theName: Standard_CString, theIStream: Standard_IStream): IFSelect_ReturnStatus;
  Model(): Handle_Interface_InterfaceModel;
  GiveList_1(first: Standard_CString, second: Standard_CString): Handle_TColStd_HSequenceOfTransient;
  GiveList_2(first: Standard_CString, ent: Handle_Standard_Transient): Handle_TColStd_HSequenceOfTransient;
  NbRootsForTransfer(): Graphic3d_ZLayerId;
  RootForTransfer(num: Graphic3d_ZLayerId): Handle_Standard_Transient;
  TransferOneRoot(num: Graphic3d_ZLayerId, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferOne(num: Graphic3d_ZLayerId, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferEntity(start: Handle_Standard_Transient, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferList(list: Handle_TColStd_HSequenceOfTransient, theProgress: Message_ProgressRange): Graphic3d_ZLayerId;
  TransferRoots(theProgress: Message_ProgressRange): Graphic3d_ZLayerId;
  ClearShapes(): void;
  NbShapes(): Graphic3d_ZLayerId;
  Shape(num: Graphic3d_ZLayerId): TopoDS_Shape;
  OneShape(): TopoDS_Shape;
  PrintCheckLoad_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckLoad_2(theStream: Standard_OStream, failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckTransfer_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckTransfer_2(theStream: Standard_OStream, failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintStatsTransfer_1(what: Graphic3d_ZLayerId, mode: Graphic3d_ZLayerId): void;
  PrintStatsTransfer_2(theStream: Standard_OStream, what: Graphic3d_ZLayerId, mode: Graphic3d_ZLayerId): void;
  GetStatsTransfer(list: Handle_TColStd_HSequenceOfTransient, nbMapped: Graphic3d_ZLayerId, nbWithResult: Graphic3d_ZLayerId, nbWithFail: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class XSControl_Reader_1 extends XSControl_Reader {
    constructor();
  }

  export declare class XSControl_Reader_2 extends XSControl_Reader {
    constructor(norm: Standard_CString);
  }

  export declare class XSControl_Reader_3 extends XSControl_Reader {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare class Handle_XSControl_WorkSession {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_WorkSession): void;
  get(): XSControl_WorkSession;
  delete(): void;
}

  export declare class Handle_XSControl_WorkSession_1 extends Handle_XSControl_WorkSession {
    constructor();
  }

  export declare class Handle_XSControl_WorkSession_2 extends Handle_XSControl_WorkSession {
    constructor(thePtr: XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_3 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_4 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

export declare class XSControl_WorkSession extends IFSelect_WorkSession {
  constructor()
  ClearData(theMode: Graphic3d_ZLayerId): void;
  SelectNorm(theNormName: Standard_CString): Standard_Boolean;
  SetController(theCtl: Handle_XSControl_Controller): void;
  SelectedNorm(theRsc: Standard_Boolean): Standard_CString;
  NormAdaptor(): Handle_XSControl_Controller;
  Context(): any;
  SetAllContext(theContext: any): void;
  ClearContext(): void;
  PrintTransferStatus(theNum: Graphic3d_ZLayerId, theWri: Standard_Boolean, theS: Standard_OStream): Standard_Boolean;
  InitTransferReader(theMode: Graphic3d_ZLayerId): void;
  SetTransferReader(theTR: Handle_XSControl_TransferReader): void;
  TransferReader(): Handle_XSControl_TransferReader;
  MapReader(): Handle_Transfer_TransientProcess;
  SetMapReader(theTP: Handle_Transfer_TransientProcess): Standard_Boolean;
  Result(theEnt: Handle_Standard_Transient, theMode: Graphic3d_ZLayerId): Handle_Standard_Transient;
  TransferReadOne(theEnts: Handle_Standard_Transient, theProgress: Message_ProgressRange): Graphic3d_ZLayerId;
  TransferReadRoots(theProgress: Message_ProgressRange): Graphic3d_ZLayerId;
  NewModel(): Handle_Interface_InterfaceModel;
  TransferWriter(): Handle_XSControl_TransferWriter;
  SetMapWriter(theFP: Handle_Transfer_FinderProcess): Standard_Boolean;
  TransferWriteShape(theShape: TopoDS_Shape, theCompGraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  TransferWriteCheckList(): Interface_CheckIterator;
  Vars(): Handle_XSControl_Vars;
  SetVars(theVars: Handle_XSControl_Vars): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class gce_MakeCylinder extends gce_Root {
  Value(): gp_Cylinder;
  Operator(): gp_Cylinder;
  delete(): void;
}

  export declare class gce_MakeCylinder_1 extends gce_MakeCylinder {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class gce_MakeCylinder_2 extends gce_MakeCylinder {
    constructor(Cyl: gp_Cylinder, Point: gp_Pnt);
  }

  export declare class gce_MakeCylinder_3 extends gce_MakeCylinder {
    constructor(Cyl: gp_Cylinder, Dist: Standard_Real);
  }

  export declare class gce_MakeCylinder_4 extends gce_MakeCylinder {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class gce_MakeCylinder_5 extends gce_MakeCylinder {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

  export declare class gce_MakeCylinder_6 extends gce_MakeCylinder {
    constructor(Circ: gp_Circ);
  }

export declare class gce_Root {
  constructor();
  IsDone(): Standard_Boolean;
  Status(): gce_ErrorType;
  delete(): void;
}

export declare class gp_Ax1 {
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  IsCoaxial(Other: gp_Ax1, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Ax1): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax1;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax1;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax1;
  Rotate(theA1: gp_Ax1, theAngRad: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAngRad: Standard_Real): gp_Ax1;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax1;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax1;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax1;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax1;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax1_1 extends gp_Ax1 {
    constructor();
  }

  export declare class gp_Ax1_2 extends gp_Ax1 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Ax2 {
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax2): Standard_Real;
  Axis(): gp_Ax1;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  IsCoplanar_1(Other: gp_Ax2, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(A1: gp_Ax1, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax2;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax2;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax2;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax2;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax2;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax2;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax2;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax2;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax2_1 extends gp_Ax2 {
    constructor();
  }

  export declare class gp_Ax2_2 extends gp_Ax2 {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

  export declare class gp_Ax2_3 extends gp_Ax2 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class gp_Ax22d {
  SetAxis(theA1: gp_Ax22d): void;
  SetXAxis(theA1: gp_Ax2d): void;
  SetYAxis(theA1: gp_Ax2d): void;
  SetLocation(theP: gp_Pnt2d): void;
  SetXDirection(theVx: gp_Dir2d): void;
  SetYDirection(theVy: gp_Dir2d): void;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Location(): gp_Pnt2d;
  XDirection(): gp_Dir2d;
  YDirection(): gp_Dir2d;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Ax22d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Ax22d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Ax22d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Ax22d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Ax22d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Ax22d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Ax22d;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Ax22d_1 extends gp_Ax22d {
    constructor();
  }

  export declare class gp_Ax22d_2 extends gp_Ax22d {
    constructor(theP: gp_Pnt2d, theVx: gp_Dir2d, theVy: gp_Dir2d);
  }

  export declare class gp_Ax22d_3 extends gp_Ax22d {
    constructor(theP: gp_Pnt2d, theV: gp_Dir2d, theIsSense: Standard_Boolean);
  }

  export declare class gp_Ax22d_4 extends gp_Ax22d {
    constructor(theA: gp_Ax2d, theIsSense: Standard_Boolean);
  }

export declare class gp_Ax2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetDirection(theV: gp_Dir2d): void;
  Location(): gp_Pnt2d;
  Direction(): gp_Dir2d;
  IsCoaxial(Other: gp_Ax2d, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Ax2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax2d;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Ax2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Ax2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Ax2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Ax2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Ax2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Ax2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Ax2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Ax2d_1 extends gp_Ax2d {
    constructor();
  }

  export declare class gp_Ax2d_2 extends gp_Ax2d {
    constructor(theP: gp_Pnt2d, theV: gp_Dir2d);
  }

export declare class gp_Ax3 {
  XReverse(): void;
  YReverse(): void;
  ZReverse(): void;
  SetAxis(theA1: gp_Ax1): void;
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax3): Standard_Real;
  Axis(): gp_Ax1;
  Ax2(): gp_Ax2;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  Direct(): Standard_Boolean;
  IsCoplanar_1(theOther: gp_Ax3, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(theA1: gp_Ax1, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Ax3;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Ax3;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Ax3;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax3;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax3;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax3;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax3;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax3;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax3_1 extends gp_Ax3 {
    constructor();
  }

  export declare class gp_Ax3_2 extends gp_Ax3 {
    constructor(theA: gp_Ax2);
  }

  export declare class gp_Ax3_3 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theN: gp_Dir, theVx: gp_Dir);
  }

  export declare class gp_Ax3_4 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Circ {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  SetRadius(theRadius: Standard_Real): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Length(): Standard_Real;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Distance(theP: gp_Pnt): Standard_Real;
  SquareDistance(theP: gp_Pnt): Standard_Real;
  Contains(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Circ;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Circ;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Circ;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Circ;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Circ;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Circ;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Circ;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Circ;
  delete(): void;
}

  export declare class gp_Circ_1 extends gp_Circ {
    constructor();
  }

  export declare class gp_Circ_2 extends gp_Circ {
    constructor(theA2: gp_Ax2, theRadius: Standard_Real);
  }

export declare class gp_Circ2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetXAxis(theA: gp_Ax2d): void;
  SetAxis(theA: gp_Ax22d): void;
  SetYAxis(theA: gp_Ax2d): void;
  SetRadius(theRadius: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real, theE: Standard_Real, theF: Standard_Real): void;
  Contains(theP: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theP: gp_Pnt2d): Standard_Real;
  SquareDistance(theP: gp_Pnt2d): Standard_Real;
  Length(): Standard_Real;
  Location(): gp_Pnt2d;
  Radius(): Standard_Real;
  Axis(): gp_Ax22d;
  Position(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Circ2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Circ2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Circ2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Circ2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Circ2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Circ2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Circ2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Circ2d;
  delete(): void;
}

  export declare class gp_Circ2d_1 extends gp_Circ2d {
    constructor();
  }

  export declare class gp_Circ2d_2 extends gp_Circ2d {
    constructor(theXAxis: gp_Ax2d, theRadius: Standard_Real, theIsSense: Standard_Boolean);
  }

  export declare class gp_Circ2d_3 extends gp_Circ2d {
    constructor(theAxis: gp_Ax22d, theRadius: Standard_Real);
  }

export declare class gp_Cone {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  SetRadius(theR: Standard_Real): void;
  SetSemiAngle(theAng: Standard_Real): void;
  Apex(): gp_Pnt;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(theA1: Standard_Real, theA2: Standard_Real, theA3: Standard_Real, theB1: Standard_Real, theB2: Standard_Real, theB3: Standard_Real, theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theD: Standard_Real): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  RefRadius(): Standard_Real;
  SemiAngle(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Cone;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Cone;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Cone;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Cone;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Cone;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Cone;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Cone;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Cone;
  delete(): void;
}

  export declare class gp_Cone_1 extends gp_Cone {
    constructor();
  }

  export declare class gp_Cone_2 extends gp_Cone {
    constructor(theA3: gp_Ax3, theAng: Standard_Real, theRadius: Standard_Real);
  }

export declare class gp_Cylinder {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  SetRadius(theR: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(theA1: Standard_Real, theA2: Standard_Real, theA3: Standard_Real, theB1: Standard_Real, theB2: Standard_Real, theB3: Standard_Real, theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theD: Standard_Real): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Cylinder;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Cylinder;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Cylinder;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Cylinder;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Cylinder;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Cylinder;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Cylinder;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Cylinder;
  delete(): void;
}

  export declare class gp_Cylinder_1 extends gp_Cylinder {
    constructor();
  }

  export declare class gp_Cylinder_2 extends gp_Cylinder {
    constructor(theA3: gp_Ax3, theRadius: Standard_Real);
  }

export declare class gp_Dir {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Dir): Standard_Real;
  AngleWithRef(theOther: gp_Dir, theVRef: gp_Dir): Standard_Real;
  Cross(theRight: gp_Dir): void;
  Crossed(theRight: gp_Dir): gp_Dir;
  CrossCross(theV1: gp_Dir, theV2: gp_Dir): void;
  CrossCrossed(theV1: gp_Dir, theV2: gp_Dir): gp_Dir;
  Dot(theOther: gp_Dir): Standard_Real;
  DotCross(theV1: gp_Dir, theV2: gp_Dir): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir;
  Mirror_1(theV: gp_Dir): void;
  Mirrored_1(theV: gp_Dir): gp_Dir;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Dir;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Dir;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Dir;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Dir;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Dir_1 extends gp_Dir {
    constructor();
  }

  export declare class gp_Dir_2 extends gp_Dir {
    constructor(theV: gp_Vec);
  }

  export declare class gp_Dir_3 extends gp_Dir {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Dir_4 extends gp_Dir {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

export declare class gp_Dir2d {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Dir2d): Standard_Real;
  Crossed(theRight: gp_Dir2d): Standard_Real;
  Dot(theOther: gp_Dir2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir2d;
  Mirror_1(theV: gp_Dir2d): void;
  Mirrored_1(theV: gp_Dir2d): gp_Dir2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Dir2d;
  Rotate(Ang: Standard_Real): void;
  Rotated(theAng: Standard_Real): gp_Dir2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Dir2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Dir2d_1 extends gp_Dir2d {
    constructor();
  }

  export declare class gp_Dir2d_2 extends gp_Dir2d {
    constructor(theV: gp_Vec2d);
  }

  export declare class gp_Dir2d_3 extends gp_Dir2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Dir2d_4 extends gp_Dir2d {
    constructor(theXv: Standard_Real, theYv: Standard_Real);
  }

export declare class gp_Elips {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA2: gp_Ax2): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Elips;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Elips;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Elips;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Elips;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Elips;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Elips;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Elips;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Elips;
  delete(): void;
}

  export declare class gp_Elips_1 extends gp_Elips {
    constructor();
  }

  export declare class gp_Elips_2 extends gp_Elips {
    constructor(theA2: gp_Ax2, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Elips2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetAxis(theA: gp_Ax22d): void;
  SetXAxis(theA: gp_Ax2d): void;
  SetYAxis(theA: gp_Ax2d): void;
  Area(): Standard_Real;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real, theE: Standard_Real, theF: Standard_Real): void;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Axis(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Elips2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Elips2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Elips2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Elips2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Elips2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Elips2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Elips2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Elips2d;
  delete(): void;
}

  export declare class gp_Elips2d_1 extends gp_Elips2d {
    constructor();
  }

  export declare class gp_Elips2d_2 extends gp_Elips2d {
    constructor(theMajorAxis: gp_Ax2d, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real, theIsSense: Standard_Boolean);
  }

  export declare class gp_Elips2d_3 extends gp_Elips2d {
    constructor(theA: gp_Ax22d, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Hypr {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA2: gp_Ax2): void;
  Asymptote1(): gp_Ax1;
  Asymptote2(): gp_Ax1;
  Axis(): gp_Ax1;
  ConjugateBranch1(): gp_Hypr;
  ConjugateBranch2(): gp_Hypr;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Hypr;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Hypr;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Hypr;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Hypr;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Hypr;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Hypr;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Hypr;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Hypr;
  delete(): void;
}

  export declare class gp_Hypr_1 extends gp_Hypr {
    constructor();
  }

  export declare class gp_Hypr_2 extends gp_Hypr {
    constructor(theA2: gp_Ax2, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Hypr2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetAxis(theA: gp_Ax22d): void;
  SetXAxis(theA: gp_Ax2d): void;
  SetYAxis(theA: gp_Ax2d): void;
  Asymptote1(): gp_Ax2d;
  Asymptote2(): gp_Ax2d;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real, theE: Standard_Real, theF: Standard_Real): void;
  ConjugateBranch1(): gp_Hypr2d;
  ConjugateBranch2(): gp_Hypr2d;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr2d;
  Parameter(): Standard_Real;
  Axis(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Hypr2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Hypr2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Hypr2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Hypr2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Hypr2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Hypr2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Hypr2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Hypr2d;
  delete(): void;
}

  export declare class gp_Hypr2d_1 extends gp_Hypr2d {
    constructor();
  }

  export declare class gp_Hypr2d_2 extends gp_Hypr2d {
    constructor(theMajorAxis: gp_Ax2d, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real, theIsSense: Standard_Boolean);
  }

  export declare class gp_Hypr2d_3 extends gp_Hypr2d {
    constructor(theA: gp_Ax22d, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Lin {
  Reverse(): void;
  Reversed(): gp_Lin;
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA1: gp_Ax1): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  Position(): gp_Ax1;
  Angle(theOther: gp_Lin): Standard_Real;
  Contains(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(theP: gp_Pnt): Standard_Real;
  Distance_2(theOther: gp_Lin): Standard_Real;
  SquareDistance_1(theP: gp_Pnt): Standard_Real;
  SquareDistance_2(theOther: gp_Lin): Standard_Real;
  Normal(theP: gp_Pnt): gp_Lin;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Lin;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Lin;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Lin;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Lin;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Lin;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Lin;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Lin;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Lin;
  delete(): void;
}

  export declare class gp_Lin_1 extends gp_Lin {
    constructor();
  }

  export declare class gp_Lin_2 extends gp_Lin {
    constructor(theA1: gp_Ax1);
  }

  export declare class gp_Lin_3 extends gp_Lin {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Lin2d {
  Reverse(): void;
  Reversed(): gp_Lin2d;
  SetDirection(theV: gp_Dir2d): void;
  SetLocation(theP: gp_Pnt2d): void;
  SetPosition(theA: gp_Ax2d): void;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real): void;
  Direction(): gp_Dir2d;
  Location(): gp_Pnt2d;
  Position(): gp_Ax2d;
  Angle(theOther: gp_Lin2d): Standard_Real;
  Contains(theP: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(theP: gp_Pnt2d): Standard_Real;
  Distance_2(theOther: gp_Lin2d): Standard_Real;
  SquareDistance_1(theP: gp_Pnt2d): Standard_Real;
  SquareDistance_2(theOther: gp_Lin2d): Standard_Real;
  Normal(theP: gp_Pnt2d): gp_Lin2d;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Lin2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Lin2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Lin2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Lin2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Lin2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Lin2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Lin2d;
  delete(): void;
}

  export declare class gp_Lin2d_1 extends gp_Lin2d {
    constructor();
  }

  export declare class gp_Lin2d_2 extends gp_Lin2d {
    constructor(theA: gp_Ax2d);
  }

  export declare class gp_Lin2d_3 extends gp_Lin2d {
    constructor(theP: gp_Pnt2d, theV: gp_Dir2d);
  }

  export declare class gp_Lin2d_4 extends gp_Lin2d {
    constructor(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real);
  }

export declare class gp_Mat {
  SetCol(theCol: Graphic3d_ZLayerId, theValue: gp_XYZ): void;
  SetCols(theCol1: gp_XYZ, theCol2: gp_XYZ, theCol3: gp_XYZ): void;
  SetCross(theRef: gp_XYZ): void;
  SetDiagonal(theX1: Standard_Real, theX2: Standard_Real, theX3: Standard_Real): void;
  SetDot(theRef: gp_XYZ): void;
  SetIdentity(): void;
  SetRotation(theAxis: gp_XYZ, theAng: Standard_Real): void;
  SetRow(theRow: Graphic3d_ZLayerId, theValue: gp_XYZ): void;
  SetRows(theRow1: gp_XYZ, theRow2: gp_XYZ, theRow3: gp_XYZ): void;
  SetScale(theS: Standard_Real): void;
  SetValue(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId, theValue: Standard_Real): void;
  Column(theCol: Graphic3d_ZLayerId): gp_XYZ;
  Determinant(): Standard_Real;
  Diagonal(): gp_XYZ;
  Row(theRow: Graphic3d_ZLayerId): gp_XYZ;
  Value(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  ChangeValue(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  IsSingular(): Standard_Boolean;
  Add(theOther: gp_Mat): void;
  Added(theOther: gp_Mat): gp_Mat;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Mat;
  Invert(): void;
  Inverted(): gp_Mat;
  Multiplied_1(theOther: gp_Mat): gp_Mat;
  Multiply_1(theOther: gp_Mat): void;
  PreMultiply(theOther: gp_Mat): void;
  Multiplied_2(theScalar: Standard_Real): gp_Mat;
  Multiply_2(theScalar: Standard_Real): void;
  Power(N: Graphic3d_ZLayerId): void;
  Powered(theN: Graphic3d_ZLayerId): gp_Mat;
  Subtract(theOther: gp_Mat): void;
  Subtracted(theOther: gp_Mat): gp_Mat;
  Transpose(): void;
  Transposed(): gp_Mat;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Mat_1 extends gp_Mat {
    constructor();
  }

  export declare class gp_Mat_2 extends gp_Mat {
    constructor(theA11: Standard_Real, theA12: Standard_Real, theA13: Standard_Real, theA21: Standard_Real, theA22: Standard_Real, theA23: Standard_Real, theA31: Standard_Real, theA32: Standard_Real, theA33: Standard_Real);
  }

  export declare class gp_Mat_3 extends gp_Mat {
    constructor(theCol1: gp_XYZ, theCol2: gp_XYZ, theCol3: gp_XYZ);
  }

export declare class gp_Parab {
  SetAxis(theA1: gp_Ax1): void;
  SetFocal(theFocal: Standard_Real): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Directrix(): gp_Ax1;
  Focal(): Standard_Real;
  Focus(): gp_Pnt;
  Location(): gp_Pnt;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Parab;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Parab;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Parab;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Parab;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Parab;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Parab;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Parab;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Parab;
  delete(): void;
}

  export declare class gp_Parab_1 extends gp_Parab {
    constructor();
  }

  export declare class gp_Parab_2 extends gp_Parab {
    constructor(theA2: gp_Ax2, theFocal: Standard_Real);
  }

  export declare class gp_Parab_3 extends gp_Parab {
    constructor(theD: gp_Ax1, theF: gp_Pnt);
  }

export declare class gp_Parab2d {
  SetFocal(theFocal: Standard_Real): void;
  SetLocation(theP: gp_Pnt2d): void;
  SetMirrorAxis(theA: gp_Ax2d): void;
  SetAxis(theA: gp_Ax22d): void;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real, theE: Standard_Real, theF: Standard_Real): void;
  Directrix(): gp_Ax2d;
  Focal(): Standard_Real;
  Focus(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MirrorAxis(): gp_Ax2d;
  Axis(): gp_Ax22d;
  Parameter(): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Parab2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Parab2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Parab2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Parab2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Parab2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Parab2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Parab2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Parab2d;
  delete(): void;
}

  export declare class gp_Parab2d_1 extends gp_Parab2d {
    constructor();
  }

  export declare class gp_Parab2d_2 extends gp_Parab2d {
    constructor(theMirrorAxis: gp_Ax2d, theFocalLength: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class gp_Parab2d_3 extends gp_Parab2d {
    constructor(theAxes: gp_Ax22d, theFocalLength: Standard_Real);
  }

  export declare class gp_Parab2d_4 extends gp_Parab2d {
    constructor(theDirectrix: gp_Ax2d, theFocus: gp_Pnt2d, theSense: Standard_Boolean);
  }

export declare class gp_Pln {
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real): void;
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Distance_1(theP: gp_Pnt): Standard_Real;
  Distance_2(theL: gp_Lin): Standard_Real;
  Distance_3(theOther: gp_Pln): Standard_Real;
  SquareDistance_1(theP: gp_Pnt): Standard_Real;
  SquareDistance_2(theL: gp_Lin): Standard_Real;
  SquareDistance_3(theOther: gp_Pln): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Contains_1(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Contains_2(theL: gp_Lin, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Pln;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Pln;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Pln;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Pln;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Pln;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Pln;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Pln;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Pln;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Pln_1 extends gp_Pln {
    constructor();
  }

  export declare class gp_Pln_2 extends gp_Pln {
    constructor(theA3: gp_Ax3);
  }

  export declare class gp_Pln_3 extends gp_Pln {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

  export declare class gp_Pln_4 extends gp_Pln {
    constructor(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real);
  }

export declare class gp_Pnt {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  Coord_3(): gp_XYZ;
  ChangeCoord(): gp_XYZ;
  BaryCenter(theAlpha: Standard_Real, theP: gp_Pnt, theBeta: Standard_Real): void;
  IsEqual(theOther: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theOther: gp_Pnt): Standard_Real;
  SquareDistance(theOther: gp_Pnt): Standard_Real;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Pnt;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Pnt;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Pnt;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Pnt;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Pnt;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Pnt;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Pnt;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Pnt_1 extends gp_Pnt {
    constructor();
  }

  export declare class gp_Pnt_2 extends gp_Pnt {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Pnt_3 extends gp_Pnt {
    constructor(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real);
  }

export declare class gp_Pnt2d {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXp: Standard_Real, theYp: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXp: Standard_Real, theYp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  Coord_3(): gp_XY;
  ChangeCoord(): gp_XY;
  IsEqual(theOther: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theOther: gp_Pnt2d): Standard_Real;
  SquareDistance(theOther: gp_Pnt2d): Standard_Real;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Pnt2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Pnt2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Pnt2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Pnt2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Pnt2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Pnt2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Pnt2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Pnt2d_1 extends gp_Pnt2d {
    constructor();
  }

  export declare class gp_Pnt2d_2 extends gp_Pnt2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Pnt2d_3 extends gp_Pnt2d {
    constructor(theXp: Standard_Real, theYp: Standard_Real);
  }

export declare class gp_Quaternion {
  IsEqual(theOther: gp_Quaternion): Standard_Boolean;
  SetRotation_1(theVecFrom: gp_Vec, theVecTo: gp_Vec): void;
  SetRotation_2(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec): void;
  SetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  GetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  SetMatrix(theMat: gp_Mat): void;
  GetMatrix(): gp_Mat;
  SetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  GetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  Set_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theW: Standard_Real): void;
  Set_2(theQuaternion: gp_Quaternion): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  W(): Standard_Real;
  SetIdent(): void;
  Reverse(): void;
  Reversed(): gp_Quaternion;
  Invert(): void;
  Inverted(): gp_Quaternion;
  SquareNorm(): Standard_Real;
  Norm(): Standard_Real;
  Scale(theScale: Standard_Real): void;
  Scaled(theScale: Standard_Real): gp_Quaternion;
  StabilizeLength(): void;
  Normalize(): void;
  Normalized(): gp_Quaternion;
  Negated(): gp_Quaternion;
  Added(theOther: gp_Quaternion): gp_Quaternion;
  Subtracted(theOther: gp_Quaternion): gp_Quaternion;
  Multiplied(theOther: gp_Quaternion): gp_Quaternion;
  Add(theOther: gp_Quaternion): void;
  Subtract(theOther: gp_Quaternion): void;
  Multiply_1(theOther: gp_Quaternion): void;
  Dot(theOther: gp_Quaternion): Standard_Real;
  GetRotationAngle(): Standard_Real;
  Multiply_2(theVec: gp_Vec): gp_Vec;
  delete(): void;
}

  export declare class gp_Quaternion_1 extends gp_Quaternion {
    constructor();
  }

  export declare class gp_Quaternion_2 extends gp_Quaternion {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theW: Standard_Real);
  }

  export declare class gp_Quaternion_3 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec);
  }

  export declare class gp_Quaternion_4 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec);
  }

  export declare class gp_Quaternion_5 extends gp_Quaternion {
    constructor(theAxis: gp_Vec, theAngle: Standard_Real);
  }

  export declare class gp_Quaternion_6 extends gp_Quaternion {
    constructor(theMat: gp_Mat);
  }

export declare class gp_Sphere {
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  SetRadius(theR: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(theA1: Standard_Real, theA2: Standard_Real, theA3: Standard_Real, theB1: Standard_Real, theB2: Standard_Real, theB3: Standard_Real, theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theD: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  Volume(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Sphere;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Sphere;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Sphere;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Sphere;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Sphere;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Sphere;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Sphere;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Sphere;
  delete(): void;
}

  export declare class gp_Sphere_1 extends gp_Sphere {
    constructor();
  }

  export declare class gp_Sphere_2 extends gp_Sphere {
    constructor(theA3: gp_Ax3, theRadius: Standard_Real);
  }

export declare class gp_Torus {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA3: gp_Ax3): void;
  Area(): Standard_Real;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(theCoef: IntTools_CArray1OfReal): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Volume(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Torus;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Torus;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Torus;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Torus;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Torus;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Torus;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Torus;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Torus;
  delete(): void;
}

  export declare class gp_Torus_1 extends gp_Torus {
    constructor();
  }

  export declare class gp_Torus_2 extends gp_Torus {
    constructor(theA3: gp_Ax3, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Trsf {
  SetMirror_1(theP: gp_Pnt): void;
  SetMirror_2(theA1: gp_Ax1): void;
  SetMirror_3(theA2: gp_Ax2): void;
  SetRotation_1(theA1: gp_Ax1, theAng: Standard_Real): void;
  SetRotation_2(theR: gp_Quaternion): void;
  SetRotationPart(theR: gp_Quaternion): void;
  SetScale(theP: gp_Pnt, theS: Standard_Real): void;
  SetDisplacement(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_1(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_2(theToSystem: gp_Ax3): void;
  SetTransformation_3(R: gp_Quaternion, theT: gp_Vec): void;
  SetTranslation_1(theV: gp_Vec): void;
  SetTranslation_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  SetTranslationPart(theV: gp_Vec): void;
  SetScaleFactor(theS: Standard_Real): void;
  SetForm(theP: gp_TrsfForm): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a14: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real, a24: Standard_Real, a31: Standard_Real, a32: Standard_Real, a33: Standard_Real, a34: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XYZ;
  GetRotation_1(theAxis: gp_XYZ, theAngle: Standard_Real): Standard_Boolean;
  GetRotation_2(): gp_Quaternion;
  VectorialPart(): gp_Mat;
  HVectorialPart(): gp_Mat;
  Value(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf;
  Multiplied(theT: gp_Trsf): gp_Trsf;
  Multiply(theT: gp_Trsf): void;
  PreMultiply(theT: gp_Trsf): void;
  Power(theN: Graphic3d_ZLayerId): void;
  Powered(theN: Graphic3d_ZLayerId): gp_Trsf;
  Transforms_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Transforms_2(theCoord: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Trsf_1 extends gp_Trsf {
    constructor();
  }

  export declare class gp_Trsf_2 extends gp_Trsf {
    constructor(theT: gp_Trsf2d);
  }

export declare class gp_Trsf2d {
  SetMirror_1(theP: gp_Pnt2d): void;
  SetMirror_2(theA: gp_Ax2d): void;
  SetRotation(theP: gp_Pnt2d, theAng: Standard_Real): void;
  SetScale(theP: gp_Pnt2d, theS: Standard_Real): void;
  SetTransformation_1(theFromSystem1: gp_Ax2d, theToSystem2: gp_Ax2d): void;
  SetTransformation_2(theToSystem: gp_Ax2d): void;
  SetTranslation_1(theV: gp_Vec2d): void;
  SetTranslation_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  SetTranslationPart(theV: gp_Vec2d): void;
  SetScaleFactor(theS: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XY;
  VectorialPart(): gp_Mat2d;
  HVectorialPart(): gp_Mat2d;
  RotationPart(): Standard_Real;
  Value(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf2d;
  Multiplied(theT: gp_Trsf2d): gp_Trsf2d;
  Multiply(theT: gp_Trsf2d): void;
  PreMultiply(theT: gp_Trsf2d): void;
  Power(theN: Graphic3d_ZLayerId): void;
  Powered(theN: Graphic3d_ZLayerId): gp_Trsf2d;
  Transforms_1(theX: Standard_Real, theY: Standard_Real): void;
  Transforms_2(theCoord: gp_XY): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real): void;
  delete(): void;
}

  export declare class gp_Trsf2d_1 extends gp_Trsf2d {
    constructor();
  }

  export declare class gp_Trsf2d_2 extends gp_Trsf2d {
    constructor(theT: gp_Trsf);
  }

export declare class gp_Vec {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Vec, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Vec): Standard_Real;
  AngleWithRef(theOther: gp_Vec, theVRef: gp_Vec): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(theOther: gp_Vec): void;
  Added(theOther: gp_Vec): gp_Vec;
  Subtract(theRight: gp_Vec): void;
  Subtracted(theRight: gp_Vec): gp_Vec;
  Multiply(theScalar: Standard_Real): void;
  Multiplied(theScalar: Standard_Real): gp_Vec;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Vec;
  Cross(theRight: gp_Vec): void;
  Crossed(theRight: gp_Vec): gp_Vec;
  CrossMagnitude(theRight: gp_Vec): Standard_Real;
  CrossSquareMagnitude(theRight: gp_Vec): Standard_Real;
  CrossCross(theV1: gp_Vec, theV2: gp_Vec): void;
  CrossCrossed(theV1: gp_Vec, theV2: gp_Vec): gp_Vec;
  Dot(theOther: gp_Vec): Standard_Real;
  DotCross(theV1: gp_Vec, theV2: gp_Vec): Standard_Real;
  Normalize(): void;
  Normalized(): gp_Vec;
  Reverse(): void;
  Reversed(): gp_Vec;
  SetLinearForm_1(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec, theV4: gp_Vec): void;
  SetLinearForm_2(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec): void;
  SetLinearForm_3(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theV3: gp_Vec): void;
  SetLinearForm_4(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec): void;
  SetLinearForm_5(theA1: Standard_Real, theV1: gp_Vec, theV2: gp_Vec): void;
  SetLinearForm_6(theV1: gp_Vec, theV2: gp_Vec): void;
  Mirror_1(theV: gp_Vec): void;
  Mirrored_1(theV: gp_Vec): gp_Vec;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Vec;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Vec;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Vec;
  Scale(theS: Standard_Real): void;
  Scaled(theS: Standard_Real): gp_Vec;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Vec;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Vec_1 extends gp_Vec {
    constructor();
  }

  export declare class gp_Vec_2 extends gp_Vec {
    constructor(theV: gp_Dir);
  }

  export declare class gp_Vec_3 extends gp_Vec {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Vec_4 extends gp_Vec {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

  export declare class gp_Vec_5 extends gp_Vec {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt);
  }

export declare class gp_Vec2d {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(theOther: gp_Vec2d, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Vec2d): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(theOther: gp_Vec2d): void;
  Added(theOther: gp_Vec2d): gp_Vec2d;
  Crossed(theRight: gp_Vec2d): Standard_Real;
  CrossMagnitude(theRight: gp_Vec2d): Standard_Real;
  CrossSquareMagnitude(theRight: gp_Vec2d): Standard_Real;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Vec2d;
  Dot(theOther: gp_Vec2d): Standard_Real;
  GetNormal(): gp_Vec2d;
  Multiply(theScalar: Standard_Real): void;
  Multiplied(theScalar: Standard_Real): gp_Vec2d;
  Normalize(): void;
  Normalized(): gp_Vec2d;
  Reverse(): void;
  Reversed(): gp_Vec2d;
  Subtract(theRight: gp_Vec2d): void;
  Subtracted(theRight: gp_Vec2d): gp_Vec2d;
  SetLinearForm_1(theA1: Standard_Real, theV1: gp_Vec2d, theA2: Standard_Real, theV2: gp_Vec2d, theV3: gp_Vec2d): void;
  SetLinearForm_2(theA1: Standard_Real, theV1: gp_Vec2d, theA2: Standard_Real, theV2: gp_Vec2d): void;
  SetLinearForm_3(theA1: Standard_Real, theV1: gp_Vec2d, theV2: gp_Vec2d): void;
  SetLinearForm_4(theV1: gp_Vec2d, theV2: gp_Vec2d): void;
  Mirror_1(theV: gp_Vec2d): void;
  Mirrored_1(theV: gp_Vec2d): gp_Vec2d;
  Mirror_2(theA1: gp_Ax2d): void;
  Mirrored_2(theA1: gp_Ax2d): gp_Vec2d;
  Rotate(theAng: Standard_Real): void;
  Rotated(theAng: Standard_Real): gp_Vec2d;
  Scale(theS: Standard_Real): void;
  Scaled(theS: Standard_Real): gp_Vec2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Vec2d;
  delete(): void;
}

  export declare class gp_Vec2d_1 extends gp_Vec2d {
    constructor();
  }

  export declare class gp_Vec2d_2 extends gp_Vec2d {
    constructor(theV: gp_Dir2d);
  }

  export declare class gp_Vec2d_3 extends gp_Vec2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Vec2d_4 extends gp_Vec2d {
    constructor(theXv: Standard_Real, theYv: Standard_Real);
  }

  export declare class gp_Vec2d_5 extends gp_Vec2d {
    constructor(theP1: gp_Pnt2d, theP2: gp_Pnt2d);
  }

export declare class gp_Vec3f {
  static Length(): number;
  SetValues_1(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal): void;
  SetValues_2(theVec2: gp_Vec2f, theZ: Standard_ShortReal): void;
  x_1(): Standard_ShortReal;
  r_1(): Standard_ShortReal;
  y_1(): Standard_ShortReal;
  g_1(): Standard_ShortReal;
  z_1(): Standard_ShortReal;
  b_1(): Standard_ShortReal;
  xy(): gp_Vec2f;
  yx(): gp_Vec2f;
  xz(): gp_Vec2f;
  zx(): gp_Vec2f;
  yz(): gp_Vec2f;
  zy(): gp_Vec2f;
  xyz(): gp_Vec3f;
  xzy(): gp_Vec3f;
  yxz(): gp_Vec3f;
  yzx(): gp_Vec3f;
  zyx(): gp_Vec3f;
  zxy(): gp_Vec3f;
  x_2(): Standard_ShortReal;
  r_2(): Standard_ShortReal;
  y_2(): Standard_ShortReal;
  g_2(): Standard_ShortReal;
  z_2(): Standard_ShortReal;
  b_2(): Standard_ShortReal;
  IsEqual(theOther: gp_Vec3f): boolean;
  GetData(): Standard_ShortReal;
  ChangeData(): Standard_ShortReal;
  Multiply(theFactor: Standard_ShortReal): void;
  Multiplied(theFactor: Standard_ShortReal): gp_Vec3f;
  cwiseMin(theVec: gp_Vec3f): gp_Vec3f;
  cwiseMax(theVec: gp_Vec3f): gp_Vec3f;
  maxComp(): Standard_ShortReal;
  minComp(): Standard_ShortReal;
  Dot(theOther: gp_Vec3f): Standard_ShortReal;
  Modulus(): Standard_ShortReal;
  SquareModulus(): Standard_ShortReal;
  Normalize(): void;
  Normalized(): gp_Vec3f;
  static Cross(theVec1: gp_Vec3f, theVec2: gp_Vec3f): gp_Vec3f;
  static GetLERP(theFrom: gp_Vec3f, theTo: gp_Vec3f, theT: Standard_ShortReal): gp_Vec3f;
  static DX(): gp_Vec3f;
  static DY(): gp_Vec3f;
  static DZ(): gp_Vec3f;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  delete(): void;
}

  export declare class gp_Vec3f_1 extends gp_Vec3f {
    constructor();
  }

  export declare class gp_Vec3f_2 extends gp_Vec3f {
    constructor(theValue: Standard_ShortReal);
  }

  export declare class gp_Vec3f_3 extends gp_Vec3f {
    constructor(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal);
  }

  export declare class gp_Vec3f_4 extends gp_Vec3f {
    constructor(theVec2: gp_Vec2f, theZ: Standard_ShortReal);
  }

export declare class gp_XY {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theX: Standard_Real, theY: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  ChangeCoord(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theX: Standard_Real, theY: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(theOther: gp_XY, theTolerance: Standard_Real): Standard_Boolean;
  Add(theOther: gp_XY): void;
  Added(theOther: gp_XY): gp_XY;
  Crossed(theOther: gp_XY): Standard_Real;
  CrossMagnitude(theRight: gp_XY): Standard_Real;
  CrossSquareMagnitude(theRight: gp_XY): Standard_Real;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_XY;
  Dot(theOther: gp_XY): Standard_Real;
  Multiply_1(theScalar: Standard_Real): void;
  Multiply_2(theOther: gp_XY): void;
  Multiply_3(theMatrix: gp_Mat2d): void;
  Multiplied_1(theScalar: Standard_Real): gp_XY;
  Multiplied_2(theOther: gp_XY): gp_XY;
  Multiplied_3(theMatrix: gp_Mat2d): gp_XY;
  Normalize(): void;
  Normalized(): gp_XY;
  Reverse(): void;
  Reversed(): gp_XY;
  SetLinearForm_1(theA1: Standard_Real, theXY1: gp_XY, theA2: Standard_Real, theXY2: gp_XY): void;
  SetLinearForm_2(theA1: Standard_Real, theXY1: gp_XY, theA2: Standard_Real, theXY2: gp_XY, theXY3: gp_XY): void;
  SetLinearForm_3(theA1: Standard_Real, theXY1: gp_XY, theXY2: gp_XY): void;
  SetLinearForm_4(theXY1: gp_XY, theXY2: gp_XY): void;
  Subtract(theOther: gp_XY): void;
  Subtracted(theOther: gp_XY): gp_XY;
  delete(): void;
}

  export declare class gp_XY_1 extends gp_XY {
    constructor();
  }

  export declare class gp_XY_2 extends gp_XY {
    constructor(theX: Standard_Real, theY: Standard_Real);
  }

export declare class gp_XYZ {
  SetCoord_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  SetCoord_2(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  ChangeCoord(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  GetData(): Standard_Real;
  ChangeData(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(theOther: gp_XYZ, theTolerance: Standard_Real): Standard_Boolean;
  Add(theOther: gp_XYZ): void;
  Added(theOther: gp_XYZ): gp_XYZ;
  Cross(theOther: gp_XYZ): void;
  Crossed(theOther: gp_XYZ): gp_XYZ;
  CrossMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossSquareMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): void;
  CrossCrossed(theCoord1: gp_XYZ, theCoord2: gp_XYZ): gp_XYZ;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_XYZ;
  Dot(theOther: gp_XYZ): Standard_Real;
  DotCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): Standard_Real;
  Multiply_1(theScalar: Standard_Real): void;
  Multiply_2(theOther: gp_XYZ): void;
  Multiply_3(theMatrix: gp_Mat): void;
  Multiplied_1(theScalar: Standard_Real): gp_XYZ;
  Multiplied_2(theOther: gp_XYZ): gp_XYZ;
  Multiplied_3(theMatrix: gp_Mat): gp_XYZ;
  Normalize(): void;
  Normalized(): gp_XYZ;
  Reverse(): void;
  Reversed(): gp_XYZ;
  Subtract(theOther: gp_XYZ): void;
  Subtracted(theOther: gp_XYZ): gp_XYZ;
  SetLinearForm_1(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ, theXYZ4: gp_XYZ): void;
  SetLinearForm_2(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ): void;
  SetLinearForm_3(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theXYZ3: gp_XYZ): void;
  SetLinearForm_4(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ): void;
  SetLinearForm_5(theA1: Standard_Real, theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  SetLinearForm_6(theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_XYZ_1 extends gp_XYZ {
    constructor();
  }

  export declare class gp_XYZ_2 extends gp_XYZ {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real);
  }

export declare class OCJS {
  constructor();
  static getStandard_FailureData(exceptionPtr: intptr_t): Standard_Failure;
  delete(): void;
}

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = number;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

declare namespace FS {
  interface Lookup {
      path: string;
      node: FSNode;
  }

  interface FSStream {}
  interface FSNode {}
  interface ErrnoError {}

  let ignorePermissions: boolean;
  let trackingDelegate: any;
  let tracking: any;
  let genericErrors: any;

  //
  // paths
  //
  function lookupPath(path: string, opts: any): Lookup;
  function getPath(node: FSNode): string;

  //
  // nodes
  //
  function isFile(mode: number): boolean;
  function isDir(mode: number): boolean;
  function isLink(mode: number): boolean;
  function isChrdev(mode: number): boolean;
  function isBlkdev(mode: number): boolean;
  function isFIFO(mode: number): boolean;
  function isSocket(mode: number): boolean;

  //
  // devices
  //
  function major(dev: number): number;
  function minor(dev: number): number;
  function makedev(ma: number, mi: number): number;
  function registerDevice(dev: number, ops: any): void;

  //
  // core
  //
  function syncfs(populate: boolean, callback: (e: any) => any): void;
  function syncfs(callback: (e: any) => any, populate?: boolean): void;
  function mount(type: any, opts: any, mountpoint: string): any;
  function unmount(mountpoint: string): void;

  function mkdir(path: string, mode?: number): any;
  function mkdev(path: string, mode?: number, dev?: number): any;
  function symlink(oldpath: string, newpath: string): any;
  function rename(old_path: string, new_path: string): void;
  function rmdir(path: string): void;
  function readdir(path: string): any;
  function unlink(path: string): void;
  function readlink(path: string): string;
  function stat(path: string, dontFollow?: boolean): any;
  function lstat(path: string): any;
  function chmod(path: string, mode: number, dontFollow?: boolean): void;
  function lchmod(path: string, mode: number): void;
  function fchmod(fd: number, mode: number): void;
  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
  function lchown(path: string, uid: number, gid: number): void;
  function fchown(fd: number, uid: number, gid: number): void;
  function truncate(path: string, len: number): void;
  function ftruncate(fd: number, len: number): void;
  function utime(path: string, atime: number, mtime: number): void;
  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;
  function close(stream: FSStream): void;
  function llseek(stream: FSStream, offset: number, whence: number): any;
  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
  function write(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position?: number,
      canOwn?: boolean,
  ): number;
  function allocate(stream: FSStream, offset: number, length: number): void;
  function mmap(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position: number,
      prot: number,
      flags: number,
  ): any;
  function ioctl(stream: FSStream, cmd: any, arg: any): any;
  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;
  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;
  function readFile(path: string, opts?: { flags?: string }): Uint8Array;
  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

  //
  // module-level FS code
  //
  function cwd(): string;
  function chdir(path: string): void;
  function init(
      input: null | (() => number | null),
      output: null | ((c: number) => any),
      error: null | ((c: number) => any),
  ): void;

  function createLazyFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
  ): FSNode;
  function createPreloadedFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
      onload?: () => void,
      onerror?: () => void,
      dontCreateFile?: boolean,
      canOwn?: boolean,
  ): void;
  function createDataFile(
      parent: string | FSNode,
      name: string,
      data: ArrayBufferView | string,
      canRead: boolean,
      canWrite: boolean,
      canOwn: boolean,
  ): FSNode;
  interface AnalysisResults {
    isRoot: boolean,
    exists: boolean,
    error: Error,
    name: string,
    path: any,
    object: any,
    parentExists: boolean,
    parentPath: any,
    parentObject: any
  }
  function analyzePath(path: string): AnalysisResults;
}


export type OpenCascadeInstance = {FS: typeof FS} & {
  Adaptor2d_Curve2d: typeof Adaptor2d_Curve2d;
  Handle_Adaptor2d_Curve2d: typeof Handle_Adaptor2d_Curve2d;
  Handle_Adaptor2d_Curve2d_1: typeof Handle_Adaptor2d_Curve2d_1;
  Handle_Adaptor2d_Curve2d_2: typeof Handle_Adaptor2d_Curve2d_2;
  Handle_Adaptor2d_Curve2d_3: typeof Handle_Adaptor2d_Curve2d_3;
  Handle_Adaptor2d_Curve2d_4: typeof Handle_Adaptor2d_Curve2d_4;
  Adaptor3d_Curve: typeof Adaptor3d_Curve;
  Handle_Adaptor3d_Curve: typeof Handle_Adaptor3d_Curve;
  Handle_Adaptor3d_Curve_1: typeof Handle_Adaptor3d_Curve_1;
  Handle_Adaptor3d_Curve_2: typeof Handle_Adaptor3d_Curve_2;
  Handle_Adaptor3d_Curve_3: typeof Handle_Adaptor3d_Curve_3;
  Handle_Adaptor3d_Curve_4: typeof Handle_Adaptor3d_Curve_4;
  Adaptor3d_CurveOnSurface: typeof Adaptor3d_CurveOnSurface;
  Adaptor3d_CurveOnSurface_1: typeof Adaptor3d_CurveOnSurface_1;
  Adaptor3d_CurveOnSurface_2: typeof Adaptor3d_CurveOnSurface_2;
  Adaptor3d_CurveOnSurface_3: typeof Adaptor3d_CurveOnSurface_3;
  Adaptor3d_Surface: typeof Adaptor3d_Surface;
  Handle_Adaptor3d_Surface: typeof Handle_Adaptor3d_Surface;
  Handle_Adaptor3d_Surface_1: typeof Handle_Adaptor3d_Surface_1;
  Handle_Adaptor3d_Surface_2: typeof Handle_Adaptor3d_Surface_2;
  Handle_Adaptor3d_Surface_3: typeof Handle_Adaptor3d_Surface_3;
  Handle_Adaptor3d_Surface_4: typeof Handle_Adaptor3d_Surface_4;
  BOPAlgo_Algo: typeof BOPAlgo_Algo;
  BOPAlgo_Builder: typeof BOPAlgo_Builder;
  BOPAlgo_Builder_1: typeof BOPAlgo_Builder_1;
  BOPAlgo_Builder_2: typeof BOPAlgo_Builder_2;
  BOPAlgo_BuilderShape: typeof BOPAlgo_BuilderShape;
  BOPAlgo_CellsBuilder: typeof BOPAlgo_CellsBuilder;
  BOPAlgo_CellsBuilder_1: typeof BOPAlgo_CellsBuilder_1;
  BOPAlgo_CellsBuilder_2: typeof BOPAlgo_CellsBuilder_2;
  BOPAlgo_Options: typeof BOPAlgo_Options;
  BOPAlgo_Options_1: typeof BOPAlgo_Options_1;
  BOPAlgo_Options_2: typeof BOPAlgo_Options_2;
  BOPAlgo_Splitter: typeof BOPAlgo_Splitter;
  BOPAlgo_Splitter_1: typeof BOPAlgo_Splitter_1;
  BOPAlgo_Splitter_2: typeof BOPAlgo_Splitter_2;
  BOPAlgo_ToolsProvider: typeof BOPAlgo_ToolsProvider;
  BOPAlgo_ToolsProvider_1: typeof BOPAlgo_ToolsProvider_1;
  BOPAlgo_ToolsProvider_2: typeof BOPAlgo_ToolsProvider_2;
  BRep_Builder: typeof BRep_Builder;
  BRep_Tool: typeof BRep_Tool;
  BRepAdaptor_CompCurve: typeof BRepAdaptor_CompCurve;
  BRepAdaptor_CompCurve_1: typeof BRepAdaptor_CompCurve_1;
  BRepAdaptor_CompCurve_2: typeof BRepAdaptor_CompCurve_2;
  BRepAdaptor_CompCurve_3: typeof BRepAdaptor_CompCurve_3;
  BRepAdaptor_Curve: typeof BRepAdaptor_Curve;
  BRepAdaptor_Curve_1: typeof BRepAdaptor_Curve_1;
  BRepAdaptor_Curve_2: typeof BRepAdaptor_Curve_2;
  BRepAdaptor_Curve_3: typeof BRepAdaptor_Curve_3;
  BRepAdaptor_Surface: typeof BRepAdaptor_Surface;
  BRepAdaptor_Surface_1: typeof BRepAdaptor_Surface_1;
  BRepAdaptor_Surface_2: typeof BRepAdaptor_Surface_2;
  BRepAlgo_NormalProjection: typeof BRepAlgo_NormalProjection;
  BRepAlgo_NormalProjection_1: typeof BRepAlgo_NormalProjection_1;
  BRepAlgo_NormalProjection_2: typeof BRepAlgo_NormalProjection_2;
  BRepAlgoAPI_Algo: typeof BRepAlgoAPI_Algo;
  BRepAlgoAPI_BooleanOperation: typeof BRepAlgoAPI_BooleanOperation;
  BRepAlgoAPI_BooleanOperation_1: typeof BRepAlgoAPI_BooleanOperation_1;
  BRepAlgoAPI_BooleanOperation_2: typeof BRepAlgoAPI_BooleanOperation_2;
  BRepAlgoAPI_BuilderAlgo: typeof BRepAlgoAPI_BuilderAlgo;
  BRepAlgoAPI_BuilderAlgo_1: typeof BRepAlgoAPI_BuilderAlgo_1;
  BRepAlgoAPI_BuilderAlgo_2: typeof BRepAlgoAPI_BuilderAlgo_2;
  BRepAlgoAPI_Common: typeof BRepAlgoAPI_Common;
  BRepAlgoAPI_Common_1: typeof BRepAlgoAPI_Common_1;
  BRepAlgoAPI_Common_2: typeof BRepAlgoAPI_Common_2;
  BRepAlgoAPI_Common_3: typeof BRepAlgoAPI_Common_3;
  BRepAlgoAPI_Common_4: typeof BRepAlgoAPI_Common_4;
  BRepAlgoAPI_Cut: typeof BRepAlgoAPI_Cut;
  BRepAlgoAPI_Cut_1: typeof BRepAlgoAPI_Cut_1;
  BRepAlgoAPI_Cut_2: typeof BRepAlgoAPI_Cut_2;
  BRepAlgoAPI_Cut_3: typeof BRepAlgoAPI_Cut_3;
  BRepAlgoAPI_Cut_4: typeof BRepAlgoAPI_Cut_4;
  BRepAlgoAPI_Fuse: typeof BRepAlgoAPI_Fuse;
  BRepAlgoAPI_Fuse_1: typeof BRepAlgoAPI_Fuse_1;
  BRepAlgoAPI_Fuse_2: typeof BRepAlgoAPI_Fuse_2;
  BRepAlgoAPI_Fuse_3: typeof BRepAlgoAPI_Fuse_3;
  BRepAlgoAPI_Fuse_4: typeof BRepAlgoAPI_Fuse_4;
  BRepAlgoAPI_Splitter: typeof BRepAlgoAPI_Splitter;
  BRepAlgoAPI_Splitter_1: typeof BRepAlgoAPI_Splitter_1;
  BRepAlgoAPI_Splitter_2: typeof BRepAlgoAPI_Splitter_2;
  BRepBndLib: typeof BRepBndLib;
  BRepBuilderAPI_Command: typeof BRepBuilderAPI_Command;
  BRepBuilderAPI_FindPlane: typeof BRepBuilderAPI_FindPlane;
  BRepBuilderAPI_FindPlane_1: typeof BRepBuilderAPI_FindPlane_1;
  BRepBuilderAPI_FindPlane_2: typeof BRepBuilderAPI_FindPlane_2;
  BRepBuilderAPI_MakeEdge: typeof BRepBuilderAPI_MakeEdge;
  BRepBuilderAPI_MakeEdge_1: typeof BRepBuilderAPI_MakeEdge_1;
  BRepBuilderAPI_MakeEdge_2: typeof BRepBuilderAPI_MakeEdge_2;
  BRepBuilderAPI_MakeEdge_3: typeof BRepBuilderAPI_MakeEdge_3;
  BRepBuilderAPI_MakeEdge_4: typeof BRepBuilderAPI_MakeEdge_4;
  BRepBuilderAPI_MakeEdge_5: typeof BRepBuilderAPI_MakeEdge_5;
  BRepBuilderAPI_MakeEdge_6: typeof BRepBuilderAPI_MakeEdge_6;
  BRepBuilderAPI_MakeEdge_7: typeof BRepBuilderAPI_MakeEdge_7;
  BRepBuilderAPI_MakeEdge_8: typeof BRepBuilderAPI_MakeEdge_8;
  BRepBuilderAPI_MakeEdge_9: typeof BRepBuilderAPI_MakeEdge_9;
  BRepBuilderAPI_MakeEdge_10: typeof BRepBuilderAPI_MakeEdge_10;
  BRepBuilderAPI_MakeEdge_11: typeof BRepBuilderAPI_MakeEdge_11;
  BRepBuilderAPI_MakeEdge_12: typeof BRepBuilderAPI_MakeEdge_12;
  BRepBuilderAPI_MakeEdge_13: typeof BRepBuilderAPI_MakeEdge_13;
  BRepBuilderAPI_MakeEdge_14: typeof BRepBuilderAPI_MakeEdge_14;
  BRepBuilderAPI_MakeEdge_15: typeof BRepBuilderAPI_MakeEdge_15;
  BRepBuilderAPI_MakeEdge_16: typeof BRepBuilderAPI_MakeEdge_16;
  BRepBuilderAPI_MakeEdge_17: typeof BRepBuilderAPI_MakeEdge_17;
  BRepBuilderAPI_MakeEdge_18: typeof BRepBuilderAPI_MakeEdge_18;
  BRepBuilderAPI_MakeEdge_19: typeof BRepBuilderAPI_MakeEdge_19;
  BRepBuilderAPI_MakeEdge_20: typeof BRepBuilderAPI_MakeEdge_20;
  BRepBuilderAPI_MakeEdge_21: typeof BRepBuilderAPI_MakeEdge_21;
  BRepBuilderAPI_MakeEdge_22: typeof BRepBuilderAPI_MakeEdge_22;
  BRepBuilderAPI_MakeEdge_23: typeof BRepBuilderAPI_MakeEdge_23;
  BRepBuilderAPI_MakeEdge_24: typeof BRepBuilderAPI_MakeEdge_24;
  BRepBuilderAPI_MakeEdge_25: typeof BRepBuilderAPI_MakeEdge_25;
  BRepBuilderAPI_MakeEdge_26: typeof BRepBuilderAPI_MakeEdge_26;
  BRepBuilderAPI_MakeEdge_27: typeof BRepBuilderAPI_MakeEdge_27;
  BRepBuilderAPI_MakeEdge_28: typeof BRepBuilderAPI_MakeEdge_28;
  BRepBuilderAPI_MakeEdge_29: typeof BRepBuilderAPI_MakeEdge_29;
  BRepBuilderAPI_MakeEdge_30: typeof BRepBuilderAPI_MakeEdge_30;
  BRepBuilderAPI_MakeEdge_31: typeof BRepBuilderAPI_MakeEdge_31;
  BRepBuilderAPI_MakeEdge_32: typeof BRepBuilderAPI_MakeEdge_32;
  BRepBuilderAPI_MakeEdge_33: typeof BRepBuilderAPI_MakeEdge_33;
  BRepBuilderAPI_MakeEdge_34: typeof BRepBuilderAPI_MakeEdge_34;
  BRepBuilderAPI_MakeEdge_35: typeof BRepBuilderAPI_MakeEdge_35;
  BRepBuilderAPI_MakeFace: typeof BRepBuilderAPI_MakeFace;
  BRepBuilderAPI_MakeFace_1: typeof BRepBuilderAPI_MakeFace_1;
  BRepBuilderAPI_MakeFace_2: typeof BRepBuilderAPI_MakeFace_2;
  BRepBuilderAPI_MakeFace_3: typeof BRepBuilderAPI_MakeFace_3;
  BRepBuilderAPI_MakeFace_4: typeof BRepBuilderAPI_MakeFace_4;
  BRepBuilderAPI_MakeFace_5: typeof BRepBuilderAPI_MakeFace_5;
  BRepBuilderAPI_MakeFace_6: typeof BRepBuilderAPI_MakeFace_6;
  BRepBuilderAPI_MakeFace_7: typeof BRepBuilderAPI_MakeFace_7;
  BRepBuilderAPI_MakeFace_8: typeof BRepBuilderAPI_MakeFace_8;
  BRepBuilderAPI_MakeFace_9: typeof BRepBuilderAPI_MakeFace_9;
  BRepBuilderAPI_MakeFace_10: typeof BRepBuilderAPI_MakeFace_10;
  BRepBuilderAPI_MakeFace_11: typeof BRepBuilderAPI_MakeFace_11;
  BRepBuilderAPI_MakeFace_12: typeof BRepBuilderAPI_MakeFace_12;
  BRepBuilderAPI_MakeFace_13: typeof BRepBuilderAPI_MakeFace_13;
  BRepBuilderAPI_MakeFace_14: typeof BRepBuilderAPI_MakeFace_14;
  BRepBuilderAPI_MakeFace_15: typeof BRepBuilderAPI_MakeFace_15;
  BRepBuilderAPI_MakeFace_16: typeof BRepBuilderAPI_MakeFace_16;
  BRepBuilderAPI_MakeFace_17: typeof BRepBuilderAPI_MakeFace_17;
  BRepBuilderAPI_MakeFace_18: typeof BRepBuilderAPI_MakeFace_18;
  BRepBuilderAPI_MakeFace_19: typeof BRepBuilderAPI_MakeFace_19;
  BRepBuilderAPI_MakeFace_20: typeof BRepBuilderAPI_MakeFace_20;
  BRepBuilderAPI_MakeFace_21: typeof BRepBuilderAPI_MakeFace_21;
  BRepBuilderAPI_MakeFace_22: typeof BRepBuilderAPI_MakeFace_22;
  BRepBuilderAPI_MakeShape: typeof BRepBuilderAPI_MakeShape;
  BRepBuilderAPI_MakeVertex: typeof BRepBuilderAPI_MakeVertex;
  BRepBuilderAPI_MakeWire: typeof BRepBuilderAPI_MakeWire;
  BRepBuilderAPI_MakeWire_1: typeof BRepBuilderAPI_MakeWire_1;
  BRepBuilderAPI_MakeWire_2: typeof BRepBuilderAPI_MakeWire_2;
  BRepBuilderAPI_MakeWire_3: typeof BRepBuilderAPI_MakeWire_3;
  BRepBuilderAPI_MakeWire_4: typeof BRepBuilderAPI_MakeWire_4;
  BRepBuilderAPI_MakeWire_5: typeof BRepBuilderAPI_MakeWire_5;
  BRepBuilderAPI_MakeWire_6: typeof BRepBuilderAPI_MakeWire_6;
  BRepBuilderAPI_MakeWire_7: typeof BRepBuilderAPI_MakeWire_7;
  BRepBuilderAPI_ModifyShape: typeof BRepBuilderAPI_ModifyShape;
  BRepBuilderAPI_Transform: typeof BRepBuilderAPI_Transform;
  BRepBuilderAPI_Transform_1: typeof BRepBuilderAPI_Transform_1;
  BRepBuilderAPI_Transform_2: typeof BRepBuilderAPI_Transform_2;
  BRepBuilderAPI_TransitionMode: BRepBuilderAPI_TransitionMode;
  BRepCheck_Analyzer: typeof BRepCheck_Analyzer;
  Handle_BRepCheck_Result: typeof Handle_BRepCheck_Result;
  Handle_BRepCheck_Result_1: typeof Handle_BRepCheck_Result_1;
  Handle_BRepCheck_Result_2: typeof Handle_BRepCheck_Result_2;
  Handle_BRepCheck_Result_3: typeof Handle_BRepCheck_Result_3;
  Handle_BRepCheck_Result_4: typeof Handle_BRepCheck_Result_4;
  BRepClass_Edge: typeof BRepClass_Edge;
  BRepClass_Edge_1: typeof BRepClass_Edge_1;
  BRepClass_Edge_2: typeof BRepClass_Edge_2;
  BRepClass_FClassifier: typeof BRepClass_FClassifier;
  BRepClass_FClassifier_1: typeof BRepClass_FClassifier_1;
  BRepClass_FClassifier_2: typeof BRepClass_FClassifier_2;
  BRepClass_FaceClassifier: typeof BRepClass_FaceClassifier;
  BRepClass_FaceClassifier_1: typeof BRepClass_FaceClassifier_1;
  BRepClass_FaceClassifier_2: typeof BRepClass_FaceClassifier_2;
  BRepClass_FaceClassifier_3: typeof BRepClass_FaceClassifier_3;
  BRepClass_FaceClassifier_4: typeof BRepClass_FaceClassifier_4;
  BRepClass_FaceExplorer: typeof BRepClass_FaceExplorer;
  BRepClass3d_SClassifier: typeof BRepClass3d_SClassifier;
  BRepClass3d_SClassifier_1: typeof BRepClass3d_SClassifier_1;
  BRepClass3d_SClassifier_2: typeof BRepClass3d_SClassifier_2;
  BRepClass3d_SolidClassifier: typeof BRepClass3d_SolidClassifier;
  BRepClass3d_SolidClassifier_1: typeof BRepClass3d_SolidClassifier_1;
  BRepClass3d_SolidClassifier_2: typeof BRepClass3d_SolidClassifier_2;
  BRepClass3d_SolidClassifier_3: typeof BRepClass3d_SolidClassifier_3;
  BRepClass3d_SolidExplorer: typeof BRepClass3d_SolidExplorer;
  BRepClass3d_SolidExplorer_1: typeof BRepClass3d_SolidExplorer_1;
  BRepClass3d_SolidExplorer_2: typeof BRepClass3d_SolidExplorer_2;
  BRepExtrema_DistShapeShape: typeof BRepExtrema_DistShapeShape;
  BRepExtrema_DistShapeShape_1: typeof BRepExtrema_DistShapeShape_1;
  BRepExtrema_DistShapeShape_2: typeof BRepExtrema_DistShapeShape_2;
  BRepExtrema_DistShapeShape_3: typeof BRepExtrema_DistShapeShape_3;
  BRepFill_TypeOfContact: BRepFill_TypeOfContact;
  BRepFilletAPI_LocalOperation: typeof BRepFilletAPI_LocalOperation;
  BRepFilletAPI_MakeChamfer: typeof BRepFilletAPI_MakeChamfer;
  BRepFilletAPI_MakeFillet: typeof BRepFilletAPI_MakeFillet;
  BRepGProp: typeof BRepGProp;
  BRepLib_Command: typeof BRepLib_Command;
  BRepLib_MakeFace: typeof BRepLib_MakeFace;
  BRepLib_MakeFace_1: typeof BRepLib_MakeFace_1;
  BRepLib_MakeFace_2: typeof BRepLib_MakeFace_2;
  BRepLib_MakeFace_3: typeof BRepLib_MakeFace_3;
  BRepLib_MakeFace_4: typeof BRepLib_MakeFace_4;
  BRepLib_MakeFace_5: typeof BRepLib_MakeFace_5;
  BRepLib_MakeFace_6: typeof BRepLib_MakeFace_6;
  BRepLib_MakeFace_7: typeof BRepLib_MakeFace_7;
  BRepLib_MakeFace_8: typeof BRepLib_MakeFace_8;
  BRepLib_MakeFace_9: typeof BRepLib_MakeFace_9;
  BRepLib_MakeFace_10: typeof BRepLib_MakeFace_10;
  BRepLib_MakeFace_11: typeof BRepLib_MakeFace_11;
  BRepLib_MakeFace_12: typeof BRepLib_MakeFace_12;
  BRepLib_MakeFace_13: typeof BRepLib_MakeFace_13;
  BRepLib_MakeFace_14: typeof BRepLib_MakeFace_14;
  BRepLib_MakeFace_15: typeof BRepLib_MakeFace_15;
  BRepLib_MakeFace_16: typeof BRepLib_MakeFace_16;
  BRepLib_MakeFace_17: typeof BRepLib_MakeFace_17;
  BRepLib_MakeFace_18: typeof BRepLib_MakeFace_18;
  BRepLib_MakeFace_19: typeof BRepLib_MakeFace_19;
  BRepLib_MakeFace_20: typeof BRepLib_MakeFace_20;
  BRepLib_MakeFace_21: typeof BRepLib_MakeFace_21;
  BRepLib_MakeFace_22: typeof BRepLib_MakeFace_22;
  BRepLib_MakeShape: typeof BRepLib_MakeShape;
  BRepMesh_DiscretRoot: typeof BRepMesh_DiscretRoot;
  BRepMesh_IncrementalMesh: typeof BRepMesh_IncrementalMesh;
  BRepMesh_IncrementalMesh_1: typeof BRepMesh_IncrementalMesh_1;
  BRepMesh_IncrementalMesh_2: typeof BRepMesh_IncrementalMesh_2;
  BRepMesh_IncrementalMesh_3: typeof BRepMesh_IncrementalMesh_3;
  BRepOffset_Mode: BRepOffset_Mode;
  BRepOffsetAPI_DraftAngle: typeof BRepOffsetAPI_DraftAngle;
  BRepOffsetAPI_DraftAngle_1: typeof BRepOffsetAPI_DraftAngle_1;
  BRepOffsetAPI_DraftAngle_2: typeof BRepOffsetAPI_DraftAngle_2;
  BRepOffsetAPI_MakeOffset: typeof BRepOffsetAPI_MakeOffset;
  BRepOffsetAPI_MakeOffset_1: typeof BRepOffsetAPI_MakeOffset_1;
  BRepOffsetAPI_MakeOffset_2: typeof BRepOffsetAPI_MakeOffset_2;
  BRepOffsetAPI_MakeOffset_3: typeof BRepOffsetAPI_MakeOffset_3;
  BRepOffsetAPI_MakeOffsetShape: typeof BRepOffsetAPI_MakeOffsetShape;
  BRepOffsetAPI_MakePipeShell: typeof BRepOffsetAPI_MakePipeShell;
  BRepOffsetAPI_MakeThickSolid: typeof BRepOffsetAPI_MakeThickSolid;
  BRepOffsetAPI_ThruSections: typeof BRepOffsetAPI_ThruSections;
  BRepPrim_Cylinder: typeof BRepPrim_Cylinder;
  BRepPrim_Cylinder_1: typeof BRepPrim_Cylinder_1;
  BRepPrim_Cylinder_2: typeof BRepPrim_Cylinder_2;
  BRepPrim_Cylinder_3: typeof BRepPrim_Cylinder_3;
  BRepPrim_Cylinder_4: typeof BRepPrim_Cylinder_4;
  BRepPrim_Cylinder_5: typeof BRepPrim_Cylinder_5;
  BRepPrim_Cylinder_6: typeof BRepPrim_Cylinder_6;
  BRepPrim_Sphere: typeof BRepPrim_Sphere;
  BRepPrim_Sphere_1: typeof BRepPrim_Sphere_1;
  BRepPrim_Sphere_2: typeof BRepPrim_Sphere_2;
  BRepPrim_Sphere_3: typeof BRepPrim_Sphere_3;
  BRepPrimAPI_MakeCylinder: typeof BRepPrimAPI_MakeCylinder;
  BRepPrimAPI_MakeCylinder_1: typeof BRepPrimAPI_MakeCylinder_1;
  BRepPrimAPI_MakeCylinder_2: typeof BRepPrimAPI_MakeCylinder_2;
  BRepPrimAPI_MakeCylinder_3: typeof BRepPrimAPI_MakeCylinder_3;
  BRepPrimAPI_MakeCylinder_4: typeof BRepPrimAPI_MakeCylinder_4;
  BRepPrimAPI_MakeOneAxis: typeof BRepPrimAPI_MakeOneAxis;
  BRepPrimAPI_MakePrism: typeof BRepPrimAPI_MakePrism;
  BRepPrimAPI_MakePrism_1: typeof BRepPrimAPI_MakePrism_1;
  BRepPrimAPI_MakePrism_2: typeof BRepPrimAPI_MakePrism_2;
  BRepPrimAPI_MakeRevol: typeof BRepPrimAPI_MakeRevol;
  BRepPrimAPI_MakeRevol_1: typeof BRepPrimAPI_MakeRevol_1;
  BRepPrimAPI_MakeRevol_2: typeof BRepPrimAPI_MakeRevol_2;
  BRepPrimAPI_MakeSphere: typeof BRepPrimAPI_MakeSphere;
  BRepPrimAPI_MakeSphere_1: typeof BRepPrimAPI_MakeSphere_1;
  BRepPrimAPI_MakeSphere_2: typeof BRepPrimAPI_MakeSphere_2;
  BRepPrimAPI_MakeSphere_3: typeof BRepPrimAPI_MakeSphere_3;
  BRepPrimAPI_MakeSphere_4: typeof BRepPrimAPI_MakeSphere_4;
  BRepPrimAPI_MakeSphere_5: typeof BRepPrimAPI_MakeSphere_5;
  BRepPrimAPI_MakeSphere_6: typeof BRepPrimAPI_MakeSphere_6;
  BRepPrimAPI_MakeSphere_7: typeof BRepPrimAPI_MakeSphere_7;
  BRepPrimAPI_MakeSphere_8: typeof BRepPrimAPI_MakeSphere_8;
  BRepPrimAPI_MakeSphere_9: typeof BRepPrimAPI_MakeSphere_9;
  BRepPrimAPI_MakeSphere_10: typeof BRepPrimAPI_MakeSphere_10;
  BRepPrimAPI_MakeSphere_11: typeof BRepPrimAPI_MakeSphere_11;
  BRepPrimAPI_MakeSphere_12: typeof BRepPrimAPI_MakeSphere_12;
  BRepPrimAPI_MakeSweep: typeof BRepPrimAPI_MakeSweep;
  BRepSweep_Prism: typeof BRepSweep_Prism;
  BRepSweep_Prism_1: typeof BRepSweep_Prism_1;
  BRepSweep_Prism_2: typeof BRepSweep_Prism_2;
  BRepSweep_Revol: typeof BRepSweep_Revol;
  BRepSweep_Revol_1: typeof BRepSweep_Revol_1;
  BRepSweep_Revol_2: typeof BRepSweep_Revol_2;
  BRepTools: typeof BRepTools;
  Handle_BRepTools_History: typeof Handle_BRepTools_History;
  Handle_BRepTools_History_1: typeof Handle_BRepTools_History_1;
  Handle_BRepTools_History_2: typeof Handle_BRepTools_History_2;
  Handle_BRepTools_History_3: typeof Handle_BRepTools_History_3;
  Handle_BRepTools_History_4: typeof Handle_BRepTools_History_4;
  BRepTools_WireExplorer: typeof BRepTools_WireExplorer;
  BRepTools_WireExplorer_1: typeof BRepTools_WireExplorer_1;
  BRepTools_WireExplorer_2: typeof BRepTools_WireExplorer_2;
  BRepTools_WireExplorer_3: typeof BRepTools_WireExplorer_3;
  Bnd_Box: typeof Bnd_Box;
  Bnd_Box_1: typeof Bnd_Box_1;
  Bnd_Box_2: typeof Bnd_Box_2;
  Bnd_Box2d: typeof Bnd_Box2d;
  Bnd_OBB: typeof Bnd_OBB;
  Bnd_OBB_1: typeof Bnd_OBB_1;
  Bnd_OBB_2: typeof Bnd_OBB_2;
  Bnd_OBB_3: typeof Bnd_OBB_3;
  CDF_Application: typeof CDF_Application;
  Handle_CDF_Application: typeof Handle_CDF_Application;
  Handle_CDF_Application_1: typeof Handle_CDF_Application_1;
  Handle_CDF_Application_2: typeof Handle_CDF_Application_2;
  Handle_CDF_Application_3: typeof Handle_CDF_Application_3;
  Handle_CDF_Application_4: typeof Handle_CDF_Application_4;
  Handle_CDF_MetaDataDriver: typeof Handle_CDF_MetaDataDriver;
  Handle_CDF_MetaDataDriver_1: typeof Handle_CDF_MetaDataDriver_1;
  Handle_CDF_MetaDataDriver_2: typeof Handle_CDF_MetaDataDriver_2;
  Handle_CDF_MetaDataDriver_3: typeof Handle_CDF_MetaDataDriver_3;
  Handle_CDF_MetaDataDriver_4: typeof Handle_CDF_MetaDataDriver_4;
  CDM_Application: typeof CDM_Application;
  CDM_Document: typeof CDM_Document;
  Handle_CDM_Document: typeof Handle_CDM_Document;
  Handle_CDM_Document_1: typeof Handle_CDM_Document_1;
  Handle_CDM_Document_2: typeof Handle_CDM_Document_2;
  Handle_CDM_Document_3: typeof Handle_CDM_Document_3;
  Handle_CDM_Document_4: typeof Handle_CDM_Document_4;
  ChFi2d_FilletAPI: typeof ChFi2d_FilletAPI;
  ChFi2d_FilletAPI_1: typeof ChFi2d_FilletAPI_1;
  ChFi2d_FilletAPI_2: typeof ChFi2d_FilletAPI_2;
  ChFi2d_FilletAPI_3: typeof ChFi2d_FilletAPI_3;
  ChFi3d_FilletShape: ChFi3d_FilletShape;
  Handle_ChFiDS_SecHArray1: typeof Handle_ChFiDS_SecHArray1;
  Handle_ChFiDS_SecHArray1_1: typeof Handle_ChFiDS_SecHArray1_1;
  Handle_ChFiDS_SecHArray1_2: typeof Handle_ChFiDS_SecHArray1_2;
  Handle_ChFiDS_SecHArray1_3: typeof Handle_ChFiDS_SecHArray1_3;
  Handle_ChFiDS_SecHArray1_4: typeof Handle_ChFiDS_SecHArray1_4;
  Extrema_ExtAlgo: Extrema_ExtAlgo;
  Extrema_ExtFlag: Extrema_ExtFlag;
  GC_MakeArcOfCircle: typeof GC_MakeArcOfCircle;
  GC_MakeArcOfCircle_1: typeof GC_MakeArcOfCircle_1;
  GC_MakeArcOfCircle_2: typeof GC_MakeArcOfCircle_2;
  GC_MakeArcOfCircle_3: typeof GC_MakeArcOfCircle_3;
  GC_MakeArcOfCircle_4: typeof GC_MakeArcOfCircle_4;
  GC_MakeArcOfCircle_5: typeof GC_MakeArcOfCircle_5;
  GC_MakeCircle: typeof GC_MakeCircle;
  GC_MakeCircle_1: typeof GC_MakeCircle_1;
  GC_MakeCircle_2: typeof GC_MakeCircle_2;
  GC_MakeCircle_3: typeof GC_MakeCircle_3;
  GC_MakeCircle_4: typeof GC_MakeCircle_4;
  GC_MakeCircle_5: typeof GC_MakeCircle_5;
  GC_MakeCircle_6: typeof GC_MakeCircle_6;
  GC_MakeCircle_7: typeof GC_MakeCircle_7;
  GC_MakeCircle_8: typeof GC_MakeCircle_8;
  GC_MakeSegment: typeof GC_MakeSegment;
  GC_MakeSegment_1: typeof GC_MakeSegment_1;
  GC_MakeSegment_2: typeof GC_MakeSegment_2;
  GC_MakeSegment_3: typeof GC_MakeSegment_3;
  GC_MakeSegment_4: typeof GC_MakeSegment_4;
  GC_Root: typeof GC_Root;
  GProp_GProps: typeof GProp_GProps;
  GProp_GProps_1: typeof GProp_GProps_1;
  GProp_GProps_2: typeof GProp_GProps_2;
  GProp_PrincipalProps: typeof GProp_PrincipalProps;
  GccAna_Circ2d2TanRad: typeof GccAna_Circ2d2TanRad;
  GccAna_Circ2d2TanRad_1: typeof GccAna_Circ2d2TanRad_1;
  GccAna_Circ2d2TanRad_2: typeof GccAna_Circ2d2TanRad_2;
  GccAna_Circ2d2TanRad_3: typeof GccAna_Circ2d2TanRad_3;
  GccAna_Circ2d2TanRad_4: typeof GccAna_Circ2d2TanRad_4;
  GccAna_Circ2d2TanRad_5: typeof GccAna_Circ2d2TanRad_5;
  GccAna_Circ2d2TanRad_6: typeof GccAna_Circ2d2TanRad_6;
  GccAna_Lin2d2Tan: typeof GccAna_Lin2d2Tan;
  GccAna_Lin2d2Tan_1: typeof GccAna_Lin2d2Tan_1;
  GccAna_Lin2d2Tan_2: typeof GccAna_Lin2d2Tan_2;
  GccAna_Lin2d2Tan_3: typeof GccAna_Lin2d2Tan_3;
  GccEnt_Position: GccEnt_Position;
  GccEnt_QualifiedCirc: typeof GccEnt_QualifiedCirc;
  GccEnt_QualifiedLin: typeof GccEnt_QualifiedLin;
  Handle_Geom_BSplineCurve: typeof Handle_Geom_BSplineCurve;
  Handle_Geom_BSplineCurve_1: typeof Handle_Geom_BSplineCurve_1;
  Handle_Geom_BSplineCurve_2: typeof Handle_Geom_BSplineCurve_2;
  Handle_Geom_BSplineCurve_3: typeof Handle_Geom_BSplineCurve_3;
  Handle_Geom_BSplineCurve_4: typeof Handle_Geom_BSplineCurve_4;
  Handle_Geom_BSplineSurface: typeof Handle_Geom_BSplineSurface;
  Handle_Geom_BSplineSurface_1: typeof Handle_Geom_BSplineSurface_1;
  Handle_Geom_BSplineSurface_2: typeof Handle_Geom_BSplineSurface_2;
  Handle_Geom_BSplineSurface_3: typeof Handle_Geom_BSplineSurface_3;
  Handle_Geom_BSplineSurface_4: typeof Handle_Geom_BSplineSurface_4;
  Handle_Geom_BezierCurve: typeof Handle_Geom_BezierCurve;
  Handle_Geom_BezierCurve_1: typeof Handle_Geom_BezierCurve_1;
  Handle_Geom_BezierCurve_2: typeof Handle_Geom_BezierCurve_2;
  Handle_Geom_BezierCurve_3: typeof Handle_Geom_BezierCurve_3;
  Handle_Geom_BezierCurve_4: typeof Handle_Geom_BezierCurve_4;
  Handle_Geom_BezierSurface: typeof Handle_Geom_BezierSurface;
  Handle_Geom_BezierSurface_1: typeof Handle_Geom_BezierSurface_1;
  Handle_Geom_BezierSurface_2: typeof Handle_Geom_BezierSurface_2;
  Handle_Geom_BezierSurface_3: typeof Handle_Geom_BezierSurface_3;
  Handle_Geom_BezierSurface_4: typeof Handle_Geom_BezierSurface_4;
  Geom_BoundedCurve: typeof Geom_BoundedCurve;
  Geom_Circle: typeof Geom_Circle;
  Geom_Circle_1: typeof Geom_Circle_1;
  Geom_Circle_2: typeof Geom_Circle_2;
  Handle_Geom_Circle: typeof Handle_Geom_Circle;
  Handle_Geom_Circle_1: typeof Handle_Geom_Circle_1;
  Handle_Geom_Circle_2: typeof Handle_Geom_Circle_2;
  Handle_Geom_Circle_3: typeof Handle_Geom_Circle_3;
  Handle_Geom_Circle_4: typeof Handle_Geom_Circle_4;
  Geom_Conic: typeof Geom_Conic;
  Geom_Curve: typeof Geom_Curve;
  Handle_Geom_Curve: typeof Handle_Geom_Curve;
  Handle_Geom_Curve_1: typeof Handle_Geom_Curve_1;
  Handle_Geom_Curve_2: typeof Handle_Geom_Curve_2;
  Handle_Geom_Curve_3: typeof Handle_Geom_Curve_3;
  Handle_Geom_Curve_4: typeof Handle_Geom_Curve_4;
  Geom_ElementarySurface: typeof Geom_ElementarySurface;
  Geom_Geometry: typeof Geom_Geometry;
  Handle_Geom_Geometry: typeof Handle_Geom_Geometry;
  Handle_Geom_Geometry_1: typeof Handle_Geom_Geometry_1;
  Handle_Geom_Geometry_2: typeof Handle_Geom_Geometry_2;
  Handle_Geom_Geometry_3: typeof Handle_Geom_Geometry_3;
  Handle_Geom_Geometry_4: typeof Handle_Geom_Geometry_4;
  Handle_Geom_OffsetCurve: typeof Handle_Geom_OffsetCurve;
  Handle_Geom_OffsetCurve_1: typeof Handle_Geom_OffsetCurve_1;
  Handle_Geom_OffsetCurve_2: typeof Handle_Geom_OffsetCurve_2;
  Handle_Geom_OffsetCurve_3: typeof Handle_Geom_OffsetCurve_3;
  Handle_Geom_OffsetCurve_4: typeof Handle_Geom_OffsetCurve_4;
  Geom_Plane: typeof Geom_Plane;
  Geom_Plane_1: typeof Geom_Plane_1;
  Geom_Plane_2: typeof Geom_Plane_2;
  Geom_Plane_3: typeof Geom_Plane_3;
  Geom_Plane_4: typeof Geom_Plane_4;
  Handle_Geom_Plane: typeof Handle_Geom_Plane;
  Handle_Geom_Plane_1: typeof Handle_Geom_Plane_1;
  Handle_Geom_Plane_2: typeof Handle_Geom_Plane_2;
  Handle_Geom_Plane_3: typeof Handle_Geom_Plane_3;
  Handle_Geom_Plane_4: typeof Handle_Geom_Plane_4;
  Geom_Surface: typeof Geom_Surface;
  Handle_Geom_Surface: typeof Handle_Geom_Surface;
  Handle_Geom_Surface_1: typeof Handle_Geom_Surface_1;
  Handle_Geom_Surface_2: typeof Handle_Geom_Surface_2;
  Handle_Geom_Surface_3: typeof Handle_Geom_Surface_3;
  Handle_Geom_Surface_4: typeof Handle_Geom_Surface_4;
  Geom_TrimmedCurve: typeof Geom_TrimmedCurve;
  Handle_Geom_TrimmedCurve: typeof Handle_Geom_TrimmedCurve;
  Handle_Geom_TrimmedCurve_1: typeof Handle_Geom_TrimmedCurve_1;
  Handle_Geom_TrimmedCurve_2: typeof Handle_Geom_TrimmedCurve_2;
  Handle_Geom_TrimmedCurve_3: typeof Handle_Geom_TrimmedCurve_3;
  Handle_Geom_TrimmedCurve_4: typeof Handle_Geom_TrimmedCurve_4;
  Handle_Geom2d_BSplineCurve: typeof Handle_Geom2d_BSplineCurve;
  Handle_Geom2d_BSplineCurve_1: typeof Handle_Geom2d_BSplineCurve_1;
  Handle_Geom2d_BSplineCurve_2: typeof Handle_Geom2d_BSplineCurve_2;
  Handle_Geom2d_BSplineCurve_3: typeof Handle_Geom2d_BSplineCurve_3;
  Handle_Geom2d_BSplineCurve_4: typeof Handle_Geom2d_BSplineCurve_4;
  Handle_Geom2d_BezierCurve: typeof Handle_Geom2d_BezierCurve;
  Handle_Geom2d_BezierCurve_1: typeof Handle_Geom2d_BezierCurve_1;
  Handle_Geom2d_BezierCurve_2: typeof Handle_Geom2d_BezierCurve_2;
  Handle_Geom2d_BezierCurve_3: typeof Handle_Geom2d_BezierCurve_3;
  Handle_Geom2d_BezierCurve_4: typeof Handle_Geom2d_BezierCurve_4;
  Geom2d_CartesianPoint: typeof Geom2d_CartesianPoint;
  Geom2d_CartesianPoint_1: typeof Geom2d_CartesianPoint_1;
  Geom2d_CartesianPoint_2: typeof Geom2d_CartesianPoint_2;
  Handle_Geom2d_Curve: typeof Handle_Geom2d_Curve;
  Handle_Geom2d_Curve_1: typeof Handle_Geom2d_Curve_1;
  Handle_Geom2d_Curve_2: typeof Handle_Geom2d_Curve_2;
  Handle_Geom2d_Curve_3: typeof Handle_Geom2d_Curve_3;
  Handle_Geom2d_Curve_4: typeof Handle_Geom2d_Curve_4;
  Geom2d_Geometry: typeof Geom2d_Geometry;
  Handle_Geom2d_Geometry: typeof Handle_Geom2d_Geometry;
  Handle_Geom2d_Geometry_1: typeof Handle_Geom2d_Geometry_1;
  Handle_Geom2d_Geometry_2: typeof Handle_Geom2d_Geometry_2;
  Handle_Geom2d_Geometry_3: typeof Handle_Geom2d_Geometry_3;
  Handle_Geom2d_Geometry_4: typeof Handle_Geom2d_Geometry_4;
  Geom2d_Point: typeof Geom2d_Point;
  Handle_Geom2d_Point: typeof Handle_Geom2d_Point;
  Handle_Geom2d_Point_1: typeof Handle_Geom2d_Point_1;
  Handle_Geom2d_Point_2: typeof Handle_Geom2d_Point_2;
  Handle_Geom2d_Point_3: typeof Handle_Geom2d_Point_3;
  Handle_Geom2d_Point_4: typeof Handle_Geom2d_Point_4;
  Geom2dAdaptor_Curve: typeof Geom2dAdaptor_Curve;
  Geom2dAdaptor_Curve_1: typeof Geom2dAdaptor_Curve_1;
  Geom2dAdaptor_Curve_2: typeof Geom2dAdaptor_Curve_2;
  Geom2dAdaptor_Curve_3: typeof Geom2dAdaptor_Curve_3;
  Geom2dGcc_Circ2d2TanRad: typeof Geom2dGcc_Circ2d2TanRad;
  Geom2dGcc_Circ2d2TanRad_1: typeof Geom2dGcc_Circ2d2TanRad_1;
  Geom2dGcc_Circ2d2TanRad_2: typeof Geom2dGcc_Circ2d2TanRad_2;
  Geom2dGcc_Circ2d2TanRad_3: typeof Geom2dGcc_Circ2d2TanRad_3;
  Geom2dGcc_Circ2d2TanRadGeo: typeof Geom2dGcc_Circ2d2TanRadGeo;
  Geom2dGcc_Circ2d2TanRadGeo_1: typeof Geom2dGcc_Circ2d2TanRadGeo_1;
  Geom2dGcc_Circ2d2TanRadGeo_2: typeof Geom2dGcc_Circ2d2TanRadGeo_2;
  Geom2dGcc_Circ2d2TanRadGeo_3: typeof Geom2dGcc_Circ2d2TanRadGeo_3;
  Geom2dGcc_Circ2d2TanRadGeo_4: typeof Geom2dGcc_Circ2d2TanRadGeo_4;
  Geom2dGcc_Lin2d2Tan: typeof Geom2dGcc_Lin2d2Tan;
  Geom2dGcc_Lin2d2Tan_1: typeof Geom2dGcc_Lin2d2Tan_1;
  Geom2dGcc_Lin2d2Tan_2: typeof Geom2dGcc_Lin2d2Tan_2;
  Geom2dGcc_Lin2d2Tan_3: typeof Geom2dGcc_Lin2d2Tan_3;
  Geom2dGcc_Lin2d2Tan_4: typeof Geom2dGcc_Lin2d2Tan_4;
  Geom2dGcc_QualifiedCurve: typeof Geom2dGcc_QualifiedCurve;
  GeomAPI: typeof GeomAPI;
  GeomAbs_CurveType: GeomAbs_CurveType;
  GeomAbs_JoinType: GeomAbs_JoinType;
  GeomAbs_SurfaceType: GeomAbs_SurfaceType;
  GeomAdaptor_Curve: typeof GeomAdaptor_Curve;
  GeomAdaptor_Curve_1: typeof GeomAdaptor_Curve_1;
  GeomAdaptor_Curve_2: typeof GeomAdaptor_Curve_2;
  GeomAdaptor_Curve_3: typeof GeomAdaptor_Curve_3;
  GeomAdaptor_Surface: typeof GeomAdaptor_Surface;
  GeomAdaptor_Surface_1: typeof GeomAdaptor_Surface_1;
  GeomAdaptor_Surface_2: typeof GeomAdaptor_Surface_2;
  GeomAdaptor_Surface_3: typeof GeomAdaptor_Surface_3;
  GeomLProp_SLProps: typeof GeomLProp_SLProps;
  GeomLProp_SLProps_1: typeof GeomLProp_SLProps_1;
  GeomLProp_SLProps_2: typeof GeomLProp_SLProps_2;
  GeomLProp_SLProps_3: typeof GeomLProp_SLProps_3;
  IFSelect_ReturnStatus: IFSelect_ReturnStatus;
  IMeshTools_Parameters: typeof IMeshTools_Parameters;
  IntCurvesFace_ShapeIntersector: typeof IntCurvesFace_ShapeIntersector;
  IntTools_CommonPrt: typeof IntTools_CommonPrt;
  IntTools_CommonPrt_1: typeof IntTools_CommonPrt_1;
  IntTools_CommonPrt_2: typeof IntTools_CommonPrt_2;
  Handle_IntTools_Context: typeof Handle_IntTools_Context;
  Handle_IntTools_Context_1: typeof Handle_IntTools_Context_1;
  Handle_IntTools_Context_2: typeof Handle_IntTools_Context_2;
  Handle_IntTools_Context_3: typeof Handle_IntTools_Context_3;
  Handle_IntTools_Context_4: typeof Handle_IntTools_Context_4;
  IntTools_EdgeEdge: typeof IntTools_EdgeEdge;
  IntTools_EdgeEdge_1: typeof IntTools_EdgeEdge_1;
  IntTools_EdgeEdge_2: typeof IntTools_EdgeEdge_2;
  IntTools_EdgeEdge_3: typeof IntTools_EdgeEdge_3;
  IntTools_Range: typeof IntTools_Range;
  IntTools_Range_1: typeof IntTools_Range_1;
  IntTools_Range_2: typeof IntTools_Range_2;
  IntTools_SequenceOfCommonPrts: typeof IntTools_SequenceOfCommonPrts;
  IntTools_SequenceOfCommonPrts_1: typeof IntTools_SequenceOfCommonPrts_1;
  IntTools_SequenceOfCommonPrts_2: typeof IntTools_SequenceOfCommonPrts_2;
  IntTools_SequenceOfCommonPrts_3: typeof IntTools_SequenceOfCommonPrts_3;
  IntTools_SequenceOfRanges: typeof IntTools_SequenceOfRanges;
  IntTools_SequenceOfRanges_1: typeof IntTools_SequenceOfRanges_1;
  IntTools_SequenceOfRanges_2: typeof IntTools_SequenceOfRanges_2;
  IntTools_SequenceOfRanges_3: typeof IntTools_SequenceOfRanges_3;
  Handle_Interface_InterfaceModel: typeof Handle_Interface_InterfaceModel;
  Handle_Interface_InterfaceModel_1: typeof Handle_Interface_InterfaceModel_1;
  Handle_Interface_InterfaceModel_2: typeof Handle_Interface_InterfaceModel_2;
  Handle_Interface_InterfaceModel_3: typeof Handle_Interface_InterfaceModel_3;
  Handle_Interface_InterfaceModel_4: typeof Handle_Interface_InterfaceModel_4;
  Handle_Law_Function: typeof Handle_Law_Function;
  Handle_Law_Function_1: typeof Handle_Law_Function_1;
  Handle_Law_Function_2: typeof Handle_Law_Function_2;
  Handle_Law_Function_3: typeof Handle_Law_Function_3;
  Handle_Law_Function_4: typeof Handle_Law_Function_4;
  Law_Function: typeof Law_Function;
  Handle_Message_Alert: typeof Handle_Message_Alert;
  Handle_Message_Alert_1: typeof Handle_Message_Alert_1;
  Handle_Message_Alert_2: typeof Handle_Message_Alert_2;
  Handle_Message_Alert_3: typeof Handle_Message_Alert_3;
  Handle_Message_Alert_4: typeof Handle_Message_Alert_4;
  Handle_Message_Messenger: typeof Handle_Message_Messenger;
  Handle_Message_Messenger_1: typeof Handle_Message_Messenger_1;
  Handle_Message_Messenger_2: typeof Handle_Message_Messenger_2;
  Handle_Message_Messenger_3: typeof Handle_Message_Messenger_3;
  Handle_Message_Messenger_4: typeof Handle_Message_Messenger_4;
  Message_Msg: typeof Message_Msg;
  Message_Msg_1: typeof Message_Msg_1;
  Message_Msg_2: typeof Message_Msg_2;
  Message_Msg_3: typeof Message_Msg_3;
  Message_Msg_4: typeof Message_Msg_4;
  Message_ProgressRange: typeof Message_ProgressRange;
  Message_ProgressRange_1: typeof Message_ProgressRange_1;
  Message_ProgressRange_2: typeof Message_ProgressRange_2;
  Handle_Message_Report: typeof Handle_Message_Report;
  Handle_Message_Report_1: typeof Handle_Message_Report_1;
  Handle_Message_Report_2: typeof Handle_Message_Report_2;
  Handle_Message_Report_3: typeof Handle_Message_Report_3;
  Handle_Message_Report_4: typeof Handle_Message_Report_4;
  Handle_NCollection_BaseAllocator: typeof Handle_NCollection_BaseAllocator;
  Handle_NCollection_BaseAllocator_1: typeof Handle_NCollection_BaseAllocator_1;
  Handle_NCollection_BaseAllocator_2: typeof Handle_NCollection_BaseAllocator_2;
  Handle_NCollection_BaseAllocator_3: typeof Handle_NCollection_BaseAllocator_3;
  Handle_NCollection_BaseAllocator_4: typeof Handle_NCollection_BaseAllocator_4;
  NCollection_BaseList: typeof NCollection_BaseList;
  NCollection_BaseMap: typeof NCollection_BaseMap;
  NCollection_BaseSequence: typeof NCollection_BaseSequence;
  Handle_PCDM_ReaderFilter: typeof Handle_PCDM_ReaderFilter;
  Handle_PCDM_ReaderFilter_1: typeof Handle_PCDM_ReaderFilter_1;
  Handle_PCDM_ReaderFilter_2: typeof Handle_PCDM_ReaderFilter_2;
  Handle_PCDM_ReaderFilter_3: typeof Handle_PCDM_ReaderFilter_3;
  Handle_PCDM_ReaderFilter_4: typeof Handle_PCDM_ReaderFilter_4;
  Handle_PCDM_RetrievalDriver: typeof Handle_PCDM_RetrievalDriver;
  Handle_PCDM_RetrievalDriver_1: typeof Handle_PCDM_RetrievalDriver_1;
  Handle_PCDM_RetrievalDriver_2: typeof Handle_PCDM_RetrievalDriver_2;
  Handle_PCDM_RetrievalDriver_3: typeof Handle_PCDM_RetrievalDriver_3;
  Handle_PCDM_RetrievalDriver_4: typeof Handle_PCDM_RetrievalDriver_4;
  Handle_PCDM_StorageDriver: typeof Handle_PCDM_StorageDriver;
  Handle_PCDM_StorageDriver_1: typeof Handle_PCDM_StorageDriver_1;
  Handle_PCDM_StorageDriver_2: typeof Handle_PCDM_StorageDriver_2;
  Handle_PCDM_StorageDriver_3: typeof Handle_PCDM_StorageDriver_3;
  Handle_PCDM_StorageDriver_4: typeof Handle_PCDM_StorageDriver_4;
  Poly_Array1OfTriangle: typeof Poly_Array1OfTriangle;
  Poly_Array1OfTriangle_1: typeof Poly_Array1OfTriangle_1;
  Poly_Array1OfTriangle_2: typeof Poly_Array1OfTriangle_2;
  Poly_Array1OfTriangle_3: typeof Poly_Array1OfTriangle_3;
  Poly_Array1OfTriangle_4: typeof Poly_Array1OfTriangle_4;
  Poly_Array1OfTriangle_5: typeof Poly_Array1OfTriangle_5;
  Poly_ArrayOfNodes: typeof Poly_ArrayOfNodes;
  Poly_ArrayOfNodes_1: typeof Poly_ArrayOfNodes_1;
  Poly_ArrayOfNodes_2: typeof Poly_ArrayOfNodes_2;
  Poly_ArrayOfNodes_3: typeof Poly_ArrayOfNodes_3;
  Poly_ArrayOfNodes_4: typeof Poly_ArrayOfNodes_4;
  Poly_ArrayOfNodes_5: typeof Poly_ArrayOfNodes_5;
  Poly_ArrayOfNodes_6: typeof Poly_ArrayOfNodes_6;
  Poly_ArrayOfUVNodes: typeof Poly_ArrayOfUVNodes;
  Poly_ArrayOfUVNodes_1: typeof Poly_ArrayOfUVNodes_1;
  Poly_ArrayOfUVNodes_2: typeof Poly_ArrayOfUVNodes_2;
  Poly_ArrayOfUVNodes_3: typeof Poly_ArrayOfUVNodes_3;
  Poly_ArrayOfUVNodes_4: typeof Poly_ArrayOfUVNodes_4;
  Poly_ArrayOfUVNodes_5: typeof Poly_ArrayOfUVNodes_5;
  Poly_ArrayOfUVNodes_6: typeof Poly_ArrayOfUVNodes_6;
  Poly_Connect: typeof Poly_Connect;
  Poly_Connect_1: typeof Poly_Connect_1;
  Poly_Connect_2: typeof Poly_Connect_2;
  Handle_Poly_HArray1OfTriangle: typeof Handle_Poly_HArray1OfTriangle;
  Handle_Poly_HArray1OfTriangle_1: typeof Handle_Poly_HArray1OfTriangle_1;
  Handle_Poly_HArray1OfTriangle_2: typeof Handle_Poly_HArray1OfTriangle_2;
  Handle_Poly_HArray1OfTriangle_3: typeof Handle_Poly_HArray1OfTriangle_3;
  Handle_Poly_HArray1OfTriangle_4: typeof Handle_Poly_HArray1OfTriangle_4;
  Handle_Poly_Polygon2D: typeof Handle_Poly_Polygon2D;
  Handle_Poly_Polygon2D_1: typeof Handle_Poly_Polygon2D_1;
  Handle_Poly_Polygon2D_2: typeof Handle_Poly_Polygon2D_2;
  Handle_Poly_Polygon2D_3: typeof Handle_Poly_Polygon2D_3;
  Handle_Poly_Polygon2D_4: typeof Handle_Poly_Polygon2D_4;
  Handle_Poly_Polygon3D: typeof Handle_Poly_Polygon3D;
  Handle_Poly_Polygon3D_1: typeof Handle_Poly_Polygon3D_1;
  Handle_Poly_Polygon3D_2: typeof Handle_Poly_Polygon3D_2;
  Handle_Poly_Polygon3D_3: typeof Handle_Poly_Polygon3D_3;
  Handle_Poly_Polygon3D_4: typeof Handle_Poly_Polygon3D_4;
  Handle_Poly_PolygonOnTriangulation: typeof Handle_Poly_PolygonOnTriangulation;
  Handle_Poly_PolygonOnTriangulation_1: typeof Handle_Poly_PolygonOnTriangulation_1;
  Handle_Poly_PolygonOnTriangulation_2: typeof Handle_Poly_PolygonOnTriangulation_2;
  Handle_Poly_PolygonOnTriangulation_3: typeof Handle_Poly_PolygonOnTriangulation_3;
  Handle_Poly_PolygonOnTriangulation_4: typeof Handle_Poly_PolygonOnTriangulation_4;
  Poly_Triangle: typeof Poly_Triangle;
  Poly_Triangle_1: typeof Poly_Triangle_1;
  Poly_Triangle_2: typeof Poly_Triangle_2;
  Handle_Poly_Triangulation: typeof Handle_Poly_Triangulation;
  Handle_Poly_Triangulation_1: typeof Handle_Poly_Triangulation_1;
  Handle_Poly_Triangulation_2: typeof Handle_Poly_Triangulation_2;
  Handle_Poly_Triangulation_3: typeof Handle_Poly_Triangulation_3;
  Handle_Poly_Triangulation_4: typeof Handle_Poly_Triangulation_4;
  Poly_Triangulation: typeof Poly_Triangulation;
  Poly_Triangulation_1: typeof Poly_Triangulation_1;
  Poly_Triangulation_2: typeof Poly_Triangulation_2;
  Poly_Triangulation_3: typeof Poly_Triangulation_3;
  Poly_Triangulation_4: typeof Poly_Triangulation_4;
  Poly_Triangulation_5: typeof Poly_Triangulation_5;
  Handle_Poly_TriangulationParameters: typeof Handle_Poly_TriangulationParameters;
  Handle_Poly_TriangulationParameters_1: typeof Handle_Poly_TriangulationParameters_1;
  Handle_Poly_TriangulationParameters_2: typeof Handle_Poly_TriangulationParameters_2;
  Handle_Poly_TriangulationParameters_3: typeof Handle_Poly_TriangulationParameters_3;
  Handle_Poly_TriangulationParameters_4: typeof Handle_Poly_TriangulationParameters_4;
  Precision: typeof Precision;
  ProjLib: typeof ProjLib;
  Handle_Prs3d_Drawer: typeof Handle_Prs3d_Drawer;
  Handle_Prs3d_Drawer_1: typeof Handle_Prs3d_Drawer_1;
  Handle_Prs3d_Drawer_2: typeof Handle_Prs3d_Drawer_2;
  Handle_Prs3d_Drawer_3: typeof Handle_Prs3d_Drawer_3;
  Handle_Prs3d_Drawer_4: typeof Handle_Prs3d_Drawer_4;
  Quantity_Color: typeof Quantity_Color;
  Quantity_Color_1: typeof Quantity_Color_1;
  Quantity_Color_2: typeof Quantity_Color_2;
  Quantity_Color_3: typeof Quantity_Color_3;
  Quantity_Color_4: typeof Quantity_Color_4;
  Quantity_TypeOfColor: Quantity_TypeOfColor;
  Handle_Resource_Manager: typeof Handle_Resource_Manager;
  Handle_Resource_Manager_1: typeof Handle_Resource_Manager_1;
  Handle_Resource_Manager_2: typeof Handle_Resource_Manager_2;
  Handle_Resource_Manager_3: typeof Handle_Resource_Manager_3;
  Handle_Resource_Manager_4: typeof Handle_Resource_Manager_4;
  Handle_STEPCAFControl_ExternFile: typeof Handle_STEPCAFControl_ExternFile;
  Handle_STEPCAFControl_ExternFile_1: typeof Handle_STEPCAFControl_ExternFile_1;
  Handle_STEPCAFControl_ExternFile_2: typeof Handle_STEPCAFControl_ExternFile_2;
  Handle_STEPCAFControl_ExternFile_3: typeof Handle_STEPCAFControl_ExternFile_3;
  Handle_STEPCAFControl_ExternFile_4: typeof Handle_STEPCAFControl_ExternFile_4;
  STEPCAFControl_Reader: typeof STEPCAFControl_Reader;
  STEPCAFControl_Reader_1: typeof STEPCAFControl_Reader_1;
  STEPCAFControl_Reader_2: typeof STEPCAFControl_Reader_2;
  STEPCAFControl_Writer: typeof STEPCAFControl_Writer;
  STEPCAFControl_Writer_1: typeof STEPCAFControl_Writer_1;
  STEPCAFControl_Writer_2: typeof STEPCAFControl_Writer_2;
  STEPConstruct_Tool: typeof STEPConstruct_Tool;
  STEPConstruct_Tool_1: typeof STEPConstruct_Tool_1;
  STEPConstruct_Tool_2: typeof STEPConstruct_Tool_2;
  STEPControl_Reader: typeof STEPControl_Reader;
  STEPControl_Reader_1: typeof STEPControl_Reader_1;
  STEPControl_Reader_2: typeof STEPControl_Reader_2;
  STEPControl_StepModelType: STEPControl_StepModelType;
  STEPControl_Writer: typeof STEPControl_Writer;
  STEPControl_Writer_1: typeof STEPControl_Writer_1;
  STEPControl_Writer_2: typeof STEPControl_Writer_2;
  ShapeAnalysis_FreeBounds: typeof ShapeAnalysis_FreeBounds;
  ShapeAnalysis_FreeBounds_1: typeof ShapeAnalysis_FreeBounds_1;
  ShapeAnalysis_FreeBounds_2: typeof ShapeAnalysis_FreeBounds_2;
  ShapeAnalysis_FreeBounds_3: typeof ShapeAnalysis_FreeBounds_3;
  Handle_ShapeAnalysis_Surface: typeof Handle_ShapeAnalysis_Surface;
  Handle_ShapeAnalysis_Surface_1: typeof Handle_ShapeAnalysis_Surface_1;
  Handle_ShapeAnalysis_Surface_2: typeof Handle_ShapeAnalysis_Surface_2;
  Handle_ShapeAnalysis_Surface_3: typeof Handle_ShapeAnalysis_Surface_3;
  Handle_ShapeAnalysis_Surface_4: typeof Handle_ShapeAnalysis_Surface_4;
  Handle_ShapeAnalysis_Wire: typeof Handle_ShapeAnalysis_Wire;
  Handle_ShapeAnalysis_Wire_1: typeof Handle_ShapeAnalysis_Wire_1;
  Handle_ShapeAnalysis_Wire_2: typeof Handle_ShapeAnalysis_Wire_2;
  Handle_ShapeAnalysis_Wire_3: typeof Handle_ShapeAnalysis_Wire_3;
  Handle_ShapeAnalysis_Wire_4: typeof Handle_ShapeAnalysis_Wire_4;
  ShapeAnalysis_WireOrder: typeof ShapeAnalysis_WireOrder;
  ShapeAnalysis_WireOrder_1: typeof ShapeAnalysis_WireOrder_1;
  ShapeAnalysis_WireOrder_2: typeof ShapeAnalysis_WireOrder_2;
  Handle_ShapeBuild_ReShape: typeof Handle_ShapeBuild_ReShape;
  Handle_ShapeBuild_ReShape_1: typeof Handle_ShapeBuild_ReShape_1;
  Handle_ShapeBuild_ReShape_2: typeof Handle_ShapeBuild_ReShape_2;
  Handle_ShapeBuild_ReShape_3: typeof Handle_ShapeBuild_ReShape_3;
  Handle_ShapeBuild_ReShape_4: typeof Handle_ShapeBuild_ReShape_4;
  Handle_ShapeExtend_BasicMsgRegistrator: typeof Handle_ShapeExtend_BasicMsgRegistrator;
  Handle_ShapeExtend_BasicMsgRegistrator_1: typeof Handle_ShapeExtend_BasicMsgRegistrator_1;
  Handle_ShapeExtend_BasicMsgRegistrator_2: typeof Handle_ShapeExtend_BasicMsgRegistrator_2;
  Handle_ShapeExtend_BasicMsgRegistrator_3: typeof Handle_ShapeExtend_BasicMsgRegistrator_3;
  Handle_ShapeExtend_BasicMsgRegistrator_4: typeof Handle_ShapeExtend_BasicMsgRegistrator_4;
  Handle_ShapeExtend_WireData: typeof Handle_ShapeExtend_WireData;
  Handle_ShapeExtend_WireData_1: typeof Handle_ShapeExtend_WireData_1;
  Handle_ShapeExtend_WireData_2: typeof Handle_ShapeExtend_WireData_2;
  Handle_ShapeExtend_WireData_3: typeof Handle_ShapeExtend_WireData_3;
  Handle_ShapeExtend_WireData_4: typeof Handle_ShapeExtend_WireData_4;
  ShapeExtend_WireData: typeof ShapeExtend_WireData;
  ShapeExtend_WireData_1: typeof ShapeExtend_WireData_1;
  ShapeExtend_WireData_2: typeof ShapeExtend_WireData_2;
  Handle_ShapeFix_Edge: typeof Handle_ShapeFix_Edge;
  Handle_ShapeFix_Edge_1: typeof Handle_ShapeFix_Edge_1;
  Handle_ShapeFix_Edge_2: typeof Handle_ShapeFix_Edge_2;
  Handle_ShapeFix_Edge_3: typeof Handle_ShapeFix_Edge_3;
  Handle_ShapeFix_Edge_4: typeof Handle_ShapeFix_Edge_4;
  Handle_ShapeFix_Face: typeof Handle_ShapeFix_Face;
  Handle_ShapeFix_Face_1: typeof Handle_ShapeFix_Face_1;
  Handle_ShapeFix_Face_2: typeof Handle_ShapeFix_Face_2;
  Handle_ShapeFix_Face_3: typeof Handle_ShapeFix_Face_3;
  Handle_ShapeFix_Face_4: typeof Handle_ShapeFix_Face_4;
  ShapeFix_Face: typeof ShapeFix_Face;
  ShapeFix_Face_1: typeof ShapeFix_Face_1;
  ShapeFix_Face_2: typeof ShapeFix_Face_2;
  Handle_ShapeFix_Root: typeof Handle_ShapeFix_Root;
  Handle_ShapeFix_Root_1: typeof Handle_ShapeFix_Root_1;
  Handle_ShapeFix_Root_2: typeof Handle_ShapeFix_Root_2;
  Handle_ShapeFix_Root_3: typeof Handle_ShapeFix_Root_3;
  Handle_ShapeFix_Root_4: typeof Handle_ShapeFix_Root_4;
  ShapeFix_Root: typeof ShapeFix_Root;
  ShapeFix_Shape: typeof ShapeFix_Shape;
  ShapeFix_Shape_1: typeof ShapeFix_Shape_1;
  ShapeFix_Shape_2: typeof ShapeFix_Shape_2;
  Handle_ShapeFix_Shell: typeof Handle_ShapeFix_Shell;
  Handle_ShapeFix_Shell_1: typeof Handle_ShapeFix_Shell_1;
  Handle_ShapeFix_Shell_2: typeof Handle_ShapeFix_Shell_2;
  Handle_ShapeFix_Shell_3: typeof Handle_ShapeFix_Shell_3;
  Handle_ShapeFix_Shell_4: typeof Handle_ShapeFix_Shell_4;
  Handle_ShapeFix_Solid: typeof Handle_ShapeFix_Solid;
  Handle_ShapeFix_Solid_1: typeof Handle_ShapeFix_Solid_1;
  Handle_ShapeFix_Solid_2: typeof Handle_ShapeFix_Solid_2;
  Handle_ShapeFix_Solid_3: typeof Handle_ShapeFix_Solid_3;
  Handle_ShapeFix_Solid_4: typeof Handle_ShapeFix_Solid_4;
  Handle_ShapeFix_Wire: typeof Handle_ShapeFix_Wire;
  Handle_ShapeFix_Wire_1: typeof Handle_ShapeFix_Wire_1;
  Handle_ShapeFix_Wire_2: typeof Handle_ShapeFix_Wire_2;
  Handle_ShapeFix_Wire_3: typeof Handle_ShapeFix_Wire_3;
  Handle_ShapeFix_Wire_4: typeof Handle_ShapeFix_Wire_4;
  ShapeFix_Wire: typeof ShapeFix_Wire;
  ShapeFix_Wire_1: typeof ShapeFix_Wire_1;
  ShapeFix_Wire_2: typeof ShapeFix_Wire_2;
  ShapeUpgrade_UnifySameDomain: typeof ShapeUpgrade_UnifySameDomain;
  ShapeUpgrade_UnifySameDomain_1: typeof ShapeUpgrade_UnifySameDomain_1;
  ShapeUpgrade_UnifySameDomain_2: typeof ShapeUpgrade_UnifySameDomain_2;
  Handle_Standard_Failure: typeof Handle_Standard_Failure;
  Handle_Standard_Failure_1: typeof Handle_Standard_Failure_1;
  Handle_Standard_Failure_2: typeof Handle_Standard_Failure_2;
  Handle_Standard_Failure_3: typeof Handle_Standard_Failure_3;
  Handle_Standard_Failure_4: typeof Handle_Standard_Failure_4;
  Standard_Failure: typeof Standard_Failure;
  Standard_Failure_1: typeof Standard_Failure_1;
  Standard_Failure_2: typeof Standard_Failure_2;
  Standard_Failure_3: typeof Standard_Failure_3;
  Standard_Failure_4: typeof Standard_Failure_4;
  Standard_GUID: typeof Standard_GUID;
  Standard_GUID_1: typeof Standard_GUID_1;
  Standard_GUID_2: typeof Standard_GUID_2;
  Standard_GUID_3: typeof Standard_GUID_3;
  Standard_GUID_4: typeof Standard_GUID_4;
  Standard_GUID_5: typeof Standard_GUID_5;
  Standard_GUID_6: typeof Standard_GUID_6;
  Handle_Standard_Transient: typeof Handle_Standard_Transient;
  Handle_Standard_Transient_1: typeof Handle_Standard_Transient_1;
  Handle_Standard_Transient_2: typeof Handle_Standard_Transient_2;
  Handle_Standard_Transient_3: typeof Handle_Standard_Transient_3;
  Handle_Standard_Transient_4: typeof Handle_Standard_Transient_4;
  Standard_Transient: typeof Standard_Transient;
  Standard_Transient_1: typeof Standard_Transient_1;
  Standard_Transient_2: typeof Standard_Transient_2;
  Handle_Standard_Type: typeof Handle_Standard_Type;
  Handle_Standard_Type_1: typeof Handle_Standard_Type_1;
  Handle_Standard_Type_2: typeof Handle_Standard_Type_2;
  Handle_Standard_Type_3: typeof Handle_Standard_Type_3;
  Handle_Standard_Type_4: typeof Handle_Standard_Type_4;
  StdPrs_ToolTriangulatedShape: typeof StdPrs_ToolTriangulatedShape;
  Handle_StepData_StepModel: typeof Handle_StepData_StepModel;
  Handle_StepData_StepModel_1: typeof Handle_StepData_StepModel_1;
  Handle_StepData_StepModel_2: typeof Handle_StepData_StepModel_2;
  Handle_StepData_StepModel_3: typeof Handle_StepData_StepModel_3;
  Handle_StepData_StepModel_4: typeof Handle_StepData_StepModel_4;
  Handle_StepRepr_NextAssemblyUsageOccurrence: typeof Handle_StepRepr_NextAssemblyUsageOccurrence;
  Handle_StepRepr_NextAssemblyUsageOccurrence_1: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_1;
  Handle_StepRepr_NextAssemblyUsageOccurrence_2: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_2;
  Handle_StepRepr_NextAssemblyUsageOccurrence_3: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_3;
  Handle_StepRepr_NextAssemblyUsageOccurrence_4: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_4;
  StlAPI_Writer: typeof StlAPI_Writer;
  Handle_TColStd_HSequenceOfTransient: typeof Handle_TColStd_HSequenceOfTransient;
  Handle_TColStd_HSequenceOfTransient_1: typeof Handle_TColStd_HSequenceOfTransient_1;
  Handle_TColStd_HSequenceOfTransient_2: typeof Handle_TColStd_HSequenceOfTransient_2;
  Handle_TColStd_HSequenceOfTransient_3: typeof Handle_TColStd_HSequenceOfTransient_3;
  Handle_TColStd_HSequenceOfTransient_4: typeof Handle_TColStd_HSequenceOfTransient_4;
  TColStd_SequenceOfAsciiString: typeof TColStd_SequenceOfAsciiString;
  TColStd_SequenceOfAsciiString_1: typeof TColStd_SequenceOfAsciiString_1;
  TColStd_SequenceOfAsciiString_2: typeof TColStd_SequenceOfAsciiString_2;
  TColStd_SequenceOfAsciiString_3: typeof TColStd_SequenceOfAsciiString_3;
  TColgp_Array1OfDir: typeof TColgp_Array1OfDir;
  TColgp_Array1OfDir_1: typeof TColgp_Array1OfDir_1;
  TColgp_Array1OfDir_2: typeof TColgp_Array1OfDir_2;
  TColgp_Array1OfDir_3: typeof TColgp_Array1OfDir_3;
  TColgp_Array1OfDir_4: typeof TColgp_Array1OfDir_4;
  TColgp_Array1OfDir_5: typeof TColgp_Array1OfDir_5;
  TColgp_Array1OfPnt: typeof TColgp_Array1OfPnt;
  TColgp_Array1OfPnt_1: typeof TColgp_Array1OfPnt_1;
  TColgp_Array1OfPnt_2: typeof TColgp_Array1OfPnt_2;
  TColgp_Array1OfPnt_3: typeof TColgp_Array1OfPnt_3;
  TColgp_Array1OfPnt_4: typeof TColgp_Array1OfPnt_4;
  TColgp_Array1OfPnt_5: typeof TColgp_Array1OfPnt_5;
  TColgp_Array1OfPnt2d: typeof TColgp_Array1OfPnt2d;
  TColgp_Array1OfPnt2d_1: typeof TColgp_Array1OfPnt2d_1;
  TColgp_Array1OfPnt2d_2: typeof TColgp_Array1OfPnt2d_2;
  TColgp_Array1OfPnt2d_3: typeof TColgp_Array1OfPnt2d_3;
  TColgp_Array1OfPnt2d_4: typeof TColgp_Array1OfPnt2d_4;
  TColgp_Array1OfPnt2d_5: typeof TColgp_Array1OfPnt2d_5;
  Handle_TColgp_HArray1OfPnt: typeof Handle_TColgp_HArray1OfPnt;
  Handle_TColgp_HArray1OfPnt_1: typeof Handle_TColgp_HArray1OfPnt_1;
  Handle_TColgp_HArray1OfPnt_2: typeof Handle_TColgp_HArray1OfPnt_2;
  Handle_TColgp_HArray1OfPnt_3: typeof Handle_TColgp_HArray1OfPnt_3;
  Handle_TColgp_HArray1OfPnt_4: typeof Handle_TColgp_HArray1OfPnt_4;
  Handle_TColgp_HArray1OfPnt2d: typeof Handle_TColgp_HArray1OfPnt2d;
  Handle_TColgp_HArray1OfPnt2d_1: typeof Handle_TColgp_HArray1OfPnt2d_1;
  Handle_TColgp_HArray1OfPnt2d_2: typeof Handle_TColgp_HArray1OfPnt2d_2;
  Handle_TColgp_HArray1OfPnt2d_3: typeof Handle_TColgp_HArray1OfPnt2d_3;
  Handle_TColgp_HArray1OfPnt2d_4: typeof Handle_TColgp_HArray1OfPnt2d_4;
  TCollection_ExtendedString: typeof TCollection_ExtendedString;
  TCollection_ExtendedString_1: typeof TCollection_ExtendedString_1;
  TCollection_ExtendedString_2: typeof TCollection_ExtendedString_2;
  TCollection_ExtendedString_3: typeof TCollection_ExtendedString_3;
  TCollection_ExtendedString_4: typeof TCollection_ExtendedString_4;
  TCollection_ExtendedString_5: typeof TCollection_ExtendedString_5;
  TCollection_ExtendedString_6: typeof TCollection_ExtendedString_6;
  TCollection_ExtendedString_7: typeof TCollection_ExtendedString_7;
  TCollection_ExtendedString_8: typeof TCollection_ExtendedString_8;
  TCollection_ExtendedString_9: typeof TCollection_ExtendedString_9;
  TCollection_ExtendedString_10: typeof TCollection_ExtendedString_10;
  TCollection_ExtendedString_11: typeof TCollection_ExtendedString_11;
  TCollection_ExtendedString_12: typeof TCollection_ExtendedString_12;
  Handle_TDF_Attribute: typeof Handle_TDF_Attribute;
  Handle_TDF_Attribute_1: typeof Handle_TDF_Attribute_1;
  Handle_TDF_Attribute_2: typeof Handle_TDF_Attribute_2;
  Handle_TDF_Attribute_3: typeof Handle_TDF_Attribute_3;
  Handle_TDF_Attribute_4: typeof Handle_TDF_Attribute_4;
  TDF_Attribute: typeof TDF_Attribute;
  Handle_TDF_AttributeDelta: typeof Handle_TDF_AttributeDelta;
  Handle_TDF_AttributeDelta_1: typeof Handle_TDF_AttributeDelta_1;
  Handle_TDF_AttributeDelta_2: typeof Handle_TDF_AttributeDelta_2;
  Handle_TDF_AttributeDelta_3: typeof Handle_TDF_AttributeDelta_3;
  Handle_TDF_AttributeDelta_4: typeof Handle_TDF_AttributeDelta_4;
  Handle_TDF_Data: typeof Handle_TDF_Data;
  Handle_TDF_Data_1: typeof Handle_TDF_Data_1;
  Handle_TDF_Data_2: typeof Handle_TDF_Data_2;
  Handle_TDF_Data_3: typeof Handle_TDF_Data_3;
  Handle_TDF_Data_4: typeof Handle_TDF_Data_4;
  Handle_TDF_DataSet: typeof Handle_TDF_DataSet;
  Handle_TDF_DataSet_1: typeof Handle_TDF_DataSet_1;
  Handle_TDF_DataSet_2: typeof Handle_TDF_DataSet_2;
  Handle_TDF_DataSet_3: typeof Handle_TDF_DataSet_3;
  Handle_TDF_DataSet_4: typeof Handle_TDF_DataSet_4;
  Handle_TDF_DeltaOnAddition: typeof Handle_TDF_DeltaOnAddition;
  Handle_TDF_DeltaOnAddition_1: typeof Handle_TDF_DeltaOnAddition_1;
  Handle_TDF_DeltaOnAddition_2: typeof Handle_TDF_DeltaOnAddition_2;
  Handle_TDF_DeltaOnAddition_3: typeof Handle_TDF_DeltaOnAddition_3;
  Handle_TDF_DeltaOnAddition_4: typeof Handle_TDF_DeltaOnAddition_4;
  Handle_TDF_DeltaOnForget: typeof Handle_TDF_DeltaOnForget;
  Handle_TDF_DeltaOnForget_1: typeof Handle_TDF_DeltaOnForget_1;
  Handle_TDF_DeltaOnForget_2: typeof Handle_TDF_DeltaOnForget_2;
  Handle_TDF_DeltaOnForget_3: typeof Handle_TDF_DeltaOnForget_3;
  Handle_TDF_DeltaOnForget_4: typeof Handle_TDF_DeltaOnForget_4;
  Handle_TDF_DeltaOnModification: typeof Handle_TDF_DeltaOnModification;
  Handle_TDF_DeltaOnModification_1: typeof Handle_TDF_DeltaOnModification_1;
  Handle_TDF_DeltaOnModification_2: typeof Handle_TDF_DeltaOnModification_2;
  Handle_TDF_DeltaOnModification_3: typeof Handle_TDF_DeltaOnModification_3;
  Handle_TDF_DeltaOnModification_4: typeof Handle_TDF_DeltaOnModification_4;
  Handle_TDF_DeltaOnRemoval: typeof Handle_TDF_DeltaOnRemoval;
  Handle_TDF_DeltaOnRemoval_1: typeof Handle_TDF_DeltaOnRemoval_1;
  Handle_TDF_DeltaOnRemoval_2: typeof Handle_TDF_DeltaOnRemoval_2;
  Handle_TDF_DeltaOnRemoval_3: typeof Handle_TDF_DeltaOnRemoval_3;
  Handle_TDF_DeltaOnRemoval_4: typeof Handle_TDF_DeltaOnRemoval_4;
  Handle_TDF_DeltaOnResume: typeof Handle_TDF_DeltaOnResume;
  Handle_TDF_DeltaOnResume_1: typeof Handle_TDF_DeltaOnResume_1;
  Handle_TDF_DeltaOnResume_2: typeof Handle_TDF_DeltaOnResume_2;
  Handle_TDF_DeltaOnResume_3: typeof Handle_TDF_DeltaOnResume_3;
  Handle_TDF_DeltaOnResume_4: typeof Handle_TDF_DeltaOnResume_4;
  TDF_IDFilter: typeof TDF_IDFilter;
  TDF_Label: typeof TDF_Label;
  TDF_LabelSequence: typeof TDF_LabelSequence;
  TDF_LabelSequence_1: typeof TDF_LabelSequence_1;
  TDF_LabelSequence_2: typeof TDF_LabelSequence_2;
  TDF_LabelSequence_3: typeof TDF_LabelSequence_3;
  Handle_TDF_RelocationTable: typeof Handle_TDF_RelocationTable;
  Handle_TDF_RelocationTable_1: typeof Handle_TDF_RelocationTable_1;
  Handle_TDF_RelocationTable_2: typeof Handle_TDF_RelocationTable_2;
  Handle_TDF_RelocationTable_3: typeof Handle_TDF_RelocationTable_3;
  Handle_TDF_RelocationTable_4: typeof Handle_TDF_RelocationTable_4;
  TDataStd_GenericEmpty: typeof TDataStd_GenericEmpty;
  Handle_TDataStd_NamedData: typeof Handle_TDataStd_NamedData;
  Handle_TDataStd_NamedData_1: typeof Handle_TDataStd_NamedData_1;
  Handle_TDataStd_NamedData_2: typeof Handle_TDataStd_NamedData_2;
  Handle_TDataStd_NamedData_3: typeof Handle_TDataStd_NamedData_3;
  Handle_TDataStd_NamedData_4: typeof Handle_TDataStd_NamedData_4;
  TDocStd_Application: typeof TDocStd_Application;
  Handle_TDocStd_Document: typeof Handle_TDocStd_Document;
  Handle_TDocStd_Document_1: typeof Handle_TDocStd_Document_1;
  Handle_TDocStd_Document_2: typeof Handle_TDocStd_Document_2;
  Handle_TDocStd_Document_3: typeof Handle_TDocStd_Document_3;
  Handle_TDocStd_Document_4: typeof Handle_TDocStd_Document_4;
  TDocStd_Document: typeof TDocStd_Document;
  Handle_TShort_HArray1OfShortReal: typeof Handle_TShort_HArray1OfShortReal;
  Handle_TShort_HArray1OfShortReal_1: typeof Handle_TShort_HArray1OfShortReal_1;
  Handle_TShort_HArray1OfShortReal_2: typeof Handle_TShort_HArray1OfShortReal_2;
  Handle_TShort_HArray1OfShortReal_3: typeof Handle_TShort_HArray1OfShortReal_3;
  Handle_TShort_HArray1OfShortReal_4: typeof Handle_TShort_HArray1OfShortReal_4;
  TopAbs_Orientation: TopAbs_Orientation;
  TopAbs_ShapeEnum: TopAbs_ShapeEnum;
  TopAbs_State: TopAbs_State;
  TopExp: typeof TopExp;
  TopExp_Explorer: typeof TopExp_Explorer;
  TopExp_Explorer_1: typeof TopExp_Explorer_1;
  TopExp_Explorer_2: typeof TopExp_Explorer_2;
  Handle_TopLoc_Datum3D: typeof Handle_TopLoc_Datum3D;
  Handle_TopLoc_Datum3D_1: typeof Handle_TopLoc_Datum3D_1;
  Handle_TopLoc_Datum3D_2: typeof Handle_TopLoc_Datum3D_2;
  Handle_TopLoc_Datum3D_3: typeof Handle_TopLoc_Datum3D_3;
  Handle_TopLoc_Datum3D_4: typeof Handle_TopLoc_Datum3D_4;
  TopLoc_Location: typeof TopLoc_Location;
  TopLoc_Location_1: typeof TopLoc_Location_1;
  TopLoc_Location_2: typeof TopLoc_Location_2;
  TopLoc_Location_3: typeof TopLoc_Location_3;
  Handle_TopOpeBRepBuild_HBuilder: typeof Handle_TopOpeBRepBuild_HBuilder;
  Handle_TopOpeBRepBuild_HBuilder_1: typeof Handle_TopOpeBRepBuild_HBuilder_1;
  Handle_TopOpeBRepBuild_HBuilder_2: typeof Handle_TopOpeBRepBuild_HBuilder_2;
  Handle_TopOpeBRepBuild_HBuilder_3: typeof Handle_TopOpeBRepBuild_HBuilder_3;
  Handle_TopOpeBRepBuild_HBuilder_4: typeof Handle_TopOpeBRepBuild_HBuilder_4;
  TopTools_DataMapOfShapeListOfShape: typeof TopTools_DataMapOfShapeListOfShape;
  TopTools_DataMapOfShapeListOfShape_1: typeof TopTools_DataMapOfShapeListOfShape_1;
  TopTools_DataMapOfShapeListOfShape_2: typeof TopTools_DataMapOfShapeListOfShape_2;
  TopTools_DataMapOfShapeListOfShape_3: typeof TopTools_DataMapOfShapeListOfShape_3;
  TopTools_DataMapOfShapeShape: typeof TopTools_DataMapOfShapeShape;
  TopTools_DataMapOfShapeShape_1: typeof TopTools_DataMapOfShapeShape_1;
  TopTools_DataMapOfShapeShape_2: typeof TopTools_DataMapOfShapeShape_2;
  TopTools_DataMapOfShapeShape_3: typeof TopTools_DataMapOfShapeShape_3;
  Handle_TopTools_HSequenceOfShape: typeof Handle_TopTools_HSequenceOfShape;
  Handle_TopTools_HSequenceOfShape_1: typeof Handle_TopTools_HSequenceOfShape_1;
  Handle_TopTools_HSequenceOfShape_2: typeof Handle_TopTools_HSequenceOfShape_2;
  Handle_TopTools_HSequenceOfShape_3: typeof Handle_TopTools_HSequenceOfShape_3;
  Handle_TopTools_HSequenceOfShape_4: typeof Handle_TopTools_HSequenceOfShape_4;
  TopTools_IndexedDataMapOfShapeListOfShape: typeof TopTools_IndexedDataMapOfShapeListOfShape;
  TopTools_IndexedDataMapOfShapeListOfShape_1: typeof TopTools_IndexedDataMapOfShapeListOfShape_1;
  TopTools_IndexedDataMapOfShapeListOfShape_2: typeof TopTools_IndexedDataMapOfShapeListOfShape_2;
  TopTools_IndexedDataMapOfShapeListOfShape_3: typeof TopTools_IndexedDataMapOfShapeListOfShape_3;
  TopTools_IndexedMapOfShape: typeof TopTools_IndexedMapOfShape;
  TopTools_IndexedMapOfShape_1: typeof TopTools_IndexedMapOfShape_1;
  TopTools_IndexedMapOfShape_2: typeof TopTools_IndexedMapOfShape_2;
  TopTools_IndexedMapOfShape_3: typeof TopTools_IndexedMapOfShape_3;
  TopTools_ListOfShape: typeof TopTools_ListOfShape;
  TopTools_ListOfShape_1: typeof TopTools_ListOfShape_1;
  TopTools_ListOfShape_2: typeof TopTools_ListOfShape_2;
  TopTools_ListOfShape_3: typeof TopTools_ListOfShape_3;
  TopTools_MapOfShape: typeof TopTools_MapOfShape;
  TopTools_MapOfShape_1: typeof TopTools_MapOfShape_1;
  TopTools_MapOfShape_2: typeof TopTools_MapOfShape_2;
  TopTools_MapOfShape_3: typeof TopTools_MapOfShape_3;
  TopTools_SequenceOfShape: typeof TopTools_SequenceOfShape;
  TopTools_SequenceOfShape_1: typeof TopTools_SequenceOfShape_1;
  TopTools_SequenceOfShape_2: typeof TopTools_SequenceOfShape_2;
  TopTools_SequenceOfShape_3: typeof TopTools_SequenceOfShape_3;
  TopoDS: typeof TopoDS;
  TopoDS_Builder: typeof TopoDS_Builder;
  TopoDS_CompSolid: typeof TopoDS_CompSolid;
  TopoDS_Compound: typeof TopoDS_Compound;
  TopoDS_Edge: typeof TopoDS_Edge;
  TopoDS_Face: typeof TopoDS_Face;
  TopoDS_Iterator: typeof TopoDS_Iterator;
  TopoDS_Iterator_1: typeof TopoDS_Iterator_1;
  TopoDS_Iterator_2: typeof TopoDS_Iterator_2;
  TopoDS_Shape: typeof TopoDS_Shape;
  TopoDS_Shell: typeof TopoDS_Shell;
  TopoDS_Solid: typeof TopoDS_Solid;
  Handle_TopoDS_TShape: typeof Handle_TopoDS_TShape;
  Handle_TopoDS_TShape_1: typeof Handle_TopoDS_TShape_1;
  Handle_TopoDS_TShape_2: typeof Handle_TopoDS_TShape_2;
  Handle_TopoDS_TShape_3: typeof Handle_TopoDS_TShape_3;
  Handle_TopoDS_TShape_4: typeof Handle_TopoDS_TShape_4;
  TopoDS_Vertex: typeof TopoDS_Vertex;
  TopoDS_Wire: typeof TopoDS_Wire;
  Handle_XCAFDoc_ClippingPlaneTool: typeof Handle_XCAFDoc_ClippingPlaneTool;
  Handle_XCAFDoc_ClippingPlaneTool_1: typeof Handle_XCAFDoc_ClippingPlaneTool_1;
  Handle_XCAFDoc_ClippingPlaneTool_2: typeof Handle_XCAFDoc_ClippingPlaneTool_2;
  Handle_XCAFDoc_ClippingPlaneTool_3: typeof Handle_XCAFDoc_ClippingPlaneTool_3;
  Handle_XCAFDoc_ClippingPlaneTool_4: typeof Handle_XCAFDoc_ClippingPlaneTool_4;
  XCAFDoc_ClippingPlaneTool: typeof XCAFDoc_ClippingPlaneTool;
  Handle_XCAFDoc_ColorTool: typeof Handle_XCAFDoc_ColorTool;
  Handle_XCAFDoc_ColorTool_1: typeof Handle_XCAFDoc_ColorTool_1;
  Handle_XCAFDoc_ColorTool_2: typeof Handle_XCAFDoc_ColorTool_2;
  Handle_XCAFDoc_ColorTool_3: typeof Handle_XCAFDoc_ColorTool_3;
  Handle_XCAFDoc_ColorTool_4: typeof Handle_XCAFDoc_ColorTool_4;
  XCAFDoc_ColorTool: typeof XCAFDoc_ColorTool;
  XCAFDoc_ColorType: XCAFDoc_ColorType;
  XCAFDoc_DataMapOfShapeLabel: typeof XCAFDoc_DataMapOfShapeLabel;
  XCAFDoc_DataMapOfShapeLabel_1: typeof XCAFDoc_DataMapOfShapeLabel_1;
  XCAFDoc_DataMapOfShapeLabel_2: typeof XCAFDoc_DataMapOfShapeLabel_2;
  XCAFDoc_DataMapOfShapeLabel_3: typeof XCAFDoc_DataMapOfShapeLabel_3;
  Handle_XCAFDoc_DimTolTool: typeof Handle_XCAFDoc_DimTolTool;
  Handle_XCAFDoc_DimTolTool_1: typeof Handle_XCAFDoc_DimTolTool_1;
  Handle_XCAFDoc_DimTolTool_2: typeof Handle_XCAFDoc_DimTolTool_2;
  Handle_XCAFDoc_DimTolTool_3: typeof Handle_XCAFDoc_DimTolTool_3;
  Handle_XCAFDoc_DimTolTool_4: typeof Handle_XCAFDoc_DimTolTool_4;
  XCAFDoc_DimTolTool: typeof XCAFDoc_DimTolTool;
  Handle_XCAFDoc_DocumentTool: typeof Handle_XCAFDoc_DocumentTool;
  Handle_XCAFDoc_DocumentTool_1: typeof Handle_XCAFDoc_DocumentTool_1;
  Handle_XCAFDoc_DocumentTool_2: typeof Handle_XCAFDoc_DocumentTool_2;
  Handle_XCAFDoc_DocumentTool_3: typeof Handle_XCAFDoc_DocumentTool_3;
  Handle_XCAFDoc_DocumentTool_4: typeof Handle_XCAFDoc_DocumentTool_4;
  XCAFDoc_DocumentTool: typeof XCAFDoc_DocumentTool;
  Handle_XCAFDoc_GraphNode: typeof Handle_XCAFDoc_GraphNode;
  Handle_XCAFDoc_GraphNode_1: typeof Handle_XCAFDoc_GraphNode_1;
  Handle_XCAFDoc_GraphNode_2: typeof Handle_XCAFDoc_GraphNode_2;
  Handle_XCAFDoc_GraphNode_3: typeof Handle_XCAFDoc_GraphNode_3;
  Handle_XCAFDoc_GraphNode_4: typeof Handle_XCAFDoc_GraphNode_4;
  XCAFDoc_GraphNode: typeof XCAFDoc_GraphNode;
  Handle_XCAFDoc_LayerTool: typeof Handle_XCAFDoc_LayerTool;
  Handle_XCAFDoc_LayerTool_1: typeof Handle_XCAFDoc_LayerTool_1;
  Handle_XCAFDoc_LayerTool_2: typeof Handle_XCAFDoc_LayerTool_2;
  Handle_XCAFDoc_LayerTool_3: typeof Handle_XCAFDoc_LayerTool_3;
  Handle_XCAFDoc_LayerTool_4: typeof Handle_XCAFDoc_LayerTool_4;
  XCAFDoc_LayerTool: typeof XCAFDoc_LayerTool;
  Handle_XCAFDoc_MaterialTool: typeof Handle_XCAFDoc_MaterialTool;
  Handle_XCAFDoc_MaterialTool_1: typeof Handle_XCAFDoc_MaterialTool_1;
  Handle_XCAFDoc_MaterialTool_2: typeof Handle_XCAFDoc_MaterialTool_2;
  Handle_XCAFDoc_MaterialTool_3: typeof Handle_XCAFDoc_MaterialTool_3;
  Handle_XCAFDoc_MaterialTool_4: typeof Handle_XCAFDoc_MaterialTool_4;
  XCAFDoc_MaterialTool: typeof XCAFDoc_MaterialTool;
  Handle_XCAFDoc_NotesTool: typeof Handle_XCAFDoc_NotesTool;
  Handle_XCAFDoc_NotesTool_1: typeof Handle_XCAFDoc_NotesTool_1;
  Handle_XCAFDoc_NotesTool_2: typeof Handle_XCAFDoc_NotesTool_2;
  Handle_XCAFDoc_NotesTool_3: typeof Handle_XCAFDoc_NotesTool_3;
  Handle_XCAFDoc_NotesTool_4: typeof Handle_XCAFDoc_NotesTool_4;
  XCAFDoc_NotesTool: typeof XCAFDoc_NotesTool;
  Handle_XCAFDoc_ShapeTool: typeof Handle_XCAFDoc_ShapeTool;
  Handle_XCAFDoc_ShapeTool_1: typeof Handle_XCAFDoc_ShapeTool_1;
  Handle_XCAFDoc_ShapeTool_2: typeof Handle_XCAFDoc_ShapeTool_2;
  Handle_XCAFDoc_ShapeTool_3: typeof Handle_XCAFDoc_ShapeTool_3;
  Handle_XCAFDoc_ShapeTool_4: typeof Handle_XCAFDoc_ShapeTool_4;
  XCAFDoc_ShapeTool: typeof XCAFDoc_ShapeTool;
  Handle_XCAFDoc_ViewTool: typeof Handle_XCAFDoc_ViewTool;
  Handle_XCAFDoc_ViewTool_1: typeof Handle_XCAFDoc_ViewTool_1;
  Handle_XCAFDoc_ViewTool_2: typeof Handle_XCAFDoc_ViewTool_2;
  Handle_XCAFDoc_ViewTool_3: typeof Handle_XCAFDoc_ViewTool_3;
  Handle_XCAFDoc_ViewTool_4: typeof Handle_XCAFDoc_ViewTool_4;
  XCAFDoc_ViewTool: typeof XCAFDoc_ViewTool;
  Handle_XCAFDoc_VisMaterialTool: typeof Handle_XCAFDoc_VisMaterialTool;
  Handle_XCAFDoc_VisMaterialTool_1: typeof Handle_XCAFDoc_VisMaterialTool_1;
  Handle_XCAFDoc_VisMaterialTool_2: typeof Handle_XCAFDoc_VisMaterialTool_2;
  Handle_XCAFDoc_VisMaterialTool_3: typeof Handle_XCAFDoc_VisMaterialTool_3;
  Handle_XCAFDoc_VisMaterialTool_4: typeof Handle_XCAFDoc_VisMaterialTool_4;
  XCAFDoc_VisMaterialTool: typeof XCAFDoc_VisMaterialTool;
  XSControl_Reader: typeof XSControl_Reader;
  XSControl_Reader_1: typeof XSControl_Reader_1;
  XSControl_Reader_2: typeof XSControl_Reader_2;
  XSControl_Reader_3: typeof XSControl_Reader_3;
  Handle_XSControl_WorkSession: typeof Handle_XSControl_WorkSession;
  Handle_XSControl_WorkSession_1: typeof Handle_XSControl_WorkSession_1;
  Handle_XSControl_WorkSession_2: typeof Handle_XSControl_WorkSession_2;
  Handle_XSControl_WorkSession_3: typeof Handle_XSControl_WorkSession_3;
  Handle_XSControl_WorkSession_4: typeof Handle_XSControl_WorkSession_4;
  XSControl_WorkSession: typeof XSControl_WorkSession;
  gce_MakeCylinder: typeof gce_MakeCylinder;
  gce_MakeCylinder_1: typeof gce_MakeCylinder_1;
  gce_MakeCylinder_2: typeof gce_MakeCylinder_2;
  gce_MakeCylinder_3: typeof gce_MakeCylinder_3;
  gce_MakeCylinder_4: typeof gce_MakeCylinder_4;
  gce_MakeCylinder_5: typeof gce_MakeCylinder_5;
  gce_MakeCylinder_6: typeof gce_MakeCylinder_6;
  gce_Root: typeof gce_Root;
  gp_Ax1: typeof gp_Ax1;
  gp_Ax1_1: typeof gp_Ax1_1;
  gp_Ax1_2: typeof gp_Ax1_2;
  gp_Ax2: typeof gp_Ax2;
  gp_Ax2_1: typeof gp_Ax2_1;
  gp_Ax2_2: typeof gp_Ax2_2;
  gp_Ax2_3: typeof gp_Ax2_3;
  gp_Ax22d: typeof gp_Ax22d;
  gp_Ax22d_1: typeof gp_Ax22d_1;
  gp_Ax22d_2: typeof gp_Ax22d_2;
  gp_Ax22d_3: typeof gp_Ax22d_3;
  gp_Ax22d_4: typeof gp_Ax22d_4;
  gp_Ax2d: typeof gp_Ax2d;
  gp_Ax2d_1: typeof gp_Ax2d_1;
  gp_Ax2d_2: typeof gp_Ax2d_2;
  gp_Ax3: typeof gp_Ax3;
  gp_Ax3_1: typeof gp_Ax3_1;
  gp_Ax3_2: typeof gp_Ax3_2;
  gp_Ax3_3: typeof gp_Ax3_3;
  gp_Ax3_4: typeof gp_Ax3_4;
  gp_Circ: typeof gp_Circ;
  gp_Circ_1: typeof gp_Circ_1;
  gp_Circ_2: typeof gp_Circ_2;
  gp_Circ2d: typeof gp_Circ2d;
  gp_Circ2d_1: typeof gp_Circ2d_1;
  gp_Circ2d_2: typeof gp_Circ2d_2;
  gp_Circ2d_3: typeof gp_Circ2d_3;
  gp_Cone: typeof gp_Cone;
  gp_Cone_1: typeof gp_Cone_1;
  gp_Cone_2: typeof gp_Cone_2;
  gp_Cylinder: typeof gp_Cylinder;
  gp_Cylinder_1: typeof gp_Cylinder_1;
  gp_Cylinder_2: typeof gp_Cylinder_2;
  gp_Dir: typeof gp_Dir;
  gp_Dir_1: typeof gp_Dir_1;
  gp_Dir_2: typeof gp_Dir_2;
  gp_Dir_3: typeof gp_Dir_3;
  gp_Dir_4: typeof gp_Dir_4;
  gp_Dir2d: typeof gp_Dir2d;
  gp_Dir2d_1: typeof gp_Dir2d_1;
  gp_Dir2d_2: typeof gp_Dir2d_2;
  gp_Dir2d_3: typeof gp_Dir2d_3;
  gp_Dir2d_4: typeof gp_Dir2d_4;
  gp_Elips: typeof gp_Elips;
  gp_Elips_1: typeof gp_Elips_1;
  gp_Elips_2: typeof gp_Elips_2;
  gp_Elips2d: typeof gp_Elips2d;
  gp_Elips2d_1: typeof gp_Elips2d_1;
  gp_Elips2d_2: typeof gp_Elips2d_2;
  gp_Elips2d_3: typeof gp_Elips2d_3;
  gp_Hypr: typeof gp_Hypr;
  gp_Hypr_1: typeof gp_Hypr_1;
  gp_Hypr_2: typeof gp_Hypr_2;
  gp_Hypr2d: typeof gp_Hypr2d;
  gp_Hypr2d_1: typeof gp_Hypr2d_1;
  gp_Hypr2d_2: typeof gp_Hypr2d_2;
  gp_Hypr2d_3: typeof gp_Hypr2d_3;
  gp_Lin: typeof gp_Lin;
  gp_Lin_1: typeof gp_Lin_1;
  gp_Lin_2: typeof gp_Lin_2;
  gp_Lin_3: typeof gp_Lin_3;
  gp_Lin2d: typeof gp_Lin2d;
  gp_Lin2d_1: typeof gp_Lin2d_1;
  gp_Lin2d_2: typeof gp_Lin2d_2;
  gp_Lin2d_3: typeof gp_Lin2d_3;
  gp_Lin2d_4: typeof gp_Lin2d_4;
  gp_Mat: typeof gp_Mat;
  gp_Mat_1: typeof gp_Mat_1;
  gp_Mat_2: typeof gp_Mat_2;
  gp_Mat_3: typeof gp_Mat_3;
  gp_Parab: typeof gp_Parab;
  gp_Parab_1: typeof gp_Parab_1;
  gp_Parab_2: typeof gp_Parab_2;
  gp_Parab_3: typeof gp_Parab_3;
  gp_Parab2d: typeof gp_Parab2d;
  gp_Parab2d_1: typeof gp_Parab2d_1;
  gp_Parab2d_2: typeof gp_Parab2d_2;
  gp_Parab2d_3: typeof gp_Parab2d_3;
  gp_Parab2d_4: typeof gp_Parab2d_4;
  gp_Pln: typeof gp_Pln;
  gp_Pln_1: typeof gp_Pln_1;
  gp_Pln_2: typeof gp_Pln_2;
  gp_Pln_3: typeof gp_Pln_3;
  gp_Pln_4: typeof gp_Pln_4;
  gp_Pnt: typeof gp_Pnt;
  gp_Pnt_1: typeof gp_Pnt_1;
  gp_Pnt_2: typeof gp_Pnt_2;
  gp_Pnt_3: typeof gp_Pnt_3;
  gp_Pnt2d: typeof gp_Pnt2d;
  gp_Pnt2d_1: typeof gp_Pnt2d_1;
  gp_Pnt2d_2: typeof gp_Pnt2d_2;
  gp_Pnt2d_3: typeof gp_Pnt2d_3;
  gp_Quaternion: typeof gp_Quaternion;
  gp_Quaternion_1: typeof gp_Quaternion_1;
  gp_Quaternion_2: typeof gp_Quaternion_2;
  gp_Quaternion_3: typeof gp_Quaternion_3;
  gp_Quaternion_4: typeof gp_Quaternion_4;
  gp_Quaternion_5: typeof gp_Quaternion_5;
  gp_Quaternion_6: typeof gp_Quaternion_6;
  gp_Sphere: typeof gp_Sphere;
  gp_Sphere_1: typeof gp_Sphere_1;
  gp_Sphere_2: typeof gp_Sphere_2;
  gp_Torus: typeof gp_Torus;
  gp_Torus_1: typeof gp_Torus_1;
  gp_Torus_2: typeof gp_Torus_2;
  gp_Trsf: typeof gp_Trsf;
  gp_Trsf_1: typeof gp_Trsf_1;
  gp_Trsf_2: typeof gp_Trsf_2;
  gp_Trsf2d: typeof gp_Trsf2d;
  gp_Trsf2d_1: typeof gp_Trsf2d_1;
  gp_Trsf2d_2: typeof gp_Trsf2d_2;
  gp_Vec: typeof gp_Vec;
  gp_Vec_1: typeof gp_Vec_1;
  gp_Vec_2: typeof gp_Vec_2;
  gp_Vec_3: typeof gp_Vec_3;
  gp_Vec_4: typeof gp_Vec_4;
  gp_Vec_5: typeof gp_Vec_5;
  gp_Vec2d: typeof gp_Vec2d;
  gp_Vec2d_1: typeof gp_Vec2d_1;
  gp_Vec2d_2: typeof gp_Vec2d_2;
  gp_Vec2d_3: typeof gp_Vec2d_3;
  gp_Vec2d_4: typeof gp_Vec2d_4;
  gp_Vec2d_5: typeof gp_Vec2d_5;
  gp_Vec3f: typeof gp_Vec3f;
  gp_Vec3f_1: typeof gp_Vec3f_1;
  gp_Vec3f_2: typeof gp_Vec3f_2;
  gp_Vec3f_3: typeof gp_Vec3f_3;
  gp_Vec3f_4: typeof gp_Vec3f_4;
  gp_XY: typeof gp_XY;
  gp_XY_1: typeof gp_XY_1;
  gp_XY_2: typeof gp_XY_2;
  gp_XYZ: typeof gp_XYZ;
  gp_XYZ_1: typeof gp_XYZ_1;
  gp_XYZ_2: typeof gp_XYZ_2;
  OCJS: typeof OCJS;
};

declare function init(): Promise<OpenCascadeInstance>;

export default init;
