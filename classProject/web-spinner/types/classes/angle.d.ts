import { State } from "./state";
export type AngleUnitLong = keyof (typeof Angle)["unit"];
export type AngleUnitShort = (typeof Angle)["unit"][keyof (typeof Angle)["unit"]];
type AngleConverter = {
    [U in keyof (typeof Angle)["unit"]]: number;
};
export declare class Angle extends State<number> implements AngleConverter {
    #private;
    constructor(unit: AngleUnitShort, value: number);
    /**
     * Current value in degrees. 360 degrees is a complete rotation.
     */
    get degrees(): number;
    set degrees(value: number);
    /**
     * @private
     */
    toString(): string;
    /**
     * Converts a number from one angle unit to another.
     *
     * @param value angle number to convert
     * @param unitFrom angle unit to convert from
     * @param unitTo unit to convert to
     * @returns converted value
     */
    static convert(value: number, unitFrom: AngleUnitShort, unitTo: AngleUnitShort): number;
    /**
     * Creates a new Angle from a value in degrees.
     *
     * @param value number of degrees
     * @returns
     */
    static degrees(value: number): Angle;
    /**
     * Checks if another angle represents the same value as this one.
     *
     * @param other Angle to compare
     * @returns True if the angles are equal.
     */
    equals(other: Angle): boolean;
    /**
     * Current value in gradians. 400 gradians is a complete rotation.
     */
    get gradians(): number;
    set gradians(value: number);
    /**
     * Creates a new Angle from value in radians.
     *
     * @param value number of radians
     * @returns
     */
    static radians(value: number): Angle;
    /**
     * Current value in radians. 2π radians is a complete rotation.
     */
    get radians(): number;
    set radians(value: number);
    /**
     * Current value in turns. 1 turn is a complete rotation.
     */
    get turn(): number;
    set turn(value: number);
    /**
     * Most recently used angle unit
     */
    get unit(): AngleUnitLong;
    /**
     * Map of angle units. The keys are the full names of units, and their
     * corresponding value is the abbreviation used in CSS and attribute values.
     */
    static unit: {
        readonly degrees: "deg";
        readonly radians: "rad";
        readonly gradians: "grad";
        readonly turn: "turn";
    };
    /**
     * Map of angle unit abbreviations and the corresponding number of units in
     * a complete rotation.
     */
    static get unitsInCircle(): {
        [unit in AngleUnitShort]: number;
    };
    /**
     * @private
     */
    get value(): number;
    set value(value: number);
    /**
     * Creates a new Angle with a value of 0.
     *
     * @returns
     */
    static zero(): Angle;
}
export {};
