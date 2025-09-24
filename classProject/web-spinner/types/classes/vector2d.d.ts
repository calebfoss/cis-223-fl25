import { State } from "./state";
export declare class Vector2DBase {
    #private;
    constructor(x: number, y: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
}
export declare class Vector2D extends State<Vector2DBase> {
    constructor(x?: number, y?: number);
    copy(): Vector2D;
    equals(x: number, y: number): boolean;
    equals(other: Vector2D): boolean;
    get inverse(): Vector2D;
    static get one(): Vector2D;
    minus(x: number, y: number): Vector2D;
    minus(other: Vector2D): Vector2D;
    plus(x: number, y: number): Vector2D;
    plus(other: Vector2D): Vector2D;
    toString(): string;
    static xy(x: number, y: number): Vector2D;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    static get zero(): Vector2D;
}
