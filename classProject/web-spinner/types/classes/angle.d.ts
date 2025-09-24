import { State } from "./state";
export type AngleUnitLong = keyof (typeof Angle)["unit"];
export type AngleUnitShort = (typeof Angle)["unit"][keyof (typeof Angle)["unit"]];
type AngleConverter = {
    [U in keyof (typeof Angle)["unit"]]: number;
};
export declare class Angle extends State<number> implements AngleConverter {
    #private;
    constructor(unit: AngleUnitShort, value: number);
    get degrees(): number;
    set degrees(value: number);
    toString(): string;
    static convert(value: number, unitFrom: AngleUnitShort, unitTo: AngleUnitShort): number;
    static degrees(value: number): Angle;
    equals(other: Angle): boolean;
    get gradians(): number;
    set gradians(value: number);
    static radians(value: number): Angle;
    get radians(): number;
    set radians(value: number);
    get turn(): number;
    set turn(value: number);
    get unit(): AngleUnitLong;
    static unit: {
        readonly degrees: "deg";
        readonly radians: "rad";
        readonly gradians: "grad";
        readonly turn: "turn";
    };
    static get unitsInCircle(): {
        deg: number;
        rad: number;
        grad: number;
        turn: number;
    };
    get value(): number;
    set value(value: number);
    static get zero(): Angle;
}
export {};
