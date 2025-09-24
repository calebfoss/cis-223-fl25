import { State } from "./state";
declare class BorderRadiusBase {
    #private;
    constructor(all: number);
    constructor(topLeftAndBottomRight: number, toRightAndBottomLeft: number);
    constructor(topLeft: number, topRightAndBottomLeft: number, bottomRight: number);
    constructor(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
    get topLeft(): number;
    set topLeft(value: number);
    get topRight(): number;
    set topRight(value: number);
    get bottomLeft(): number;
    set bottomLeft(value: number);
    get bottomRight(): number;
    set bottomRight(value: number);
}
export declare class BorderRadius extends State<BorderRadiusBase> {
    constructor(all: number);
    constructor(topLeftAndBottomRight: number, toRightAndBottomLeft: number);
    constructor(topLeft: number, topRightAndBottomLeft: number, bottomRight: number);
    constructor(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
    get topLeft(): number;
    set topLeft(value: number);
    get topRight(): number;
    set topRight(value: number);
    get bottomRight(): number;
    set bottomRight(value: number);
    get bottomLeft(): number;
    set bottomLeft(value: number);
    equals(other: BorderRadius): boolean;
    toArray(): number[];
    toString(): string;
    get value(): BorderRadiusBase;
}
export {};
