export declare class Color {
    #private;
    constructor(gray: number, alpha?: number);
    constructor(red: number, green: number, blue: number, alpha?: number);
    constructor(colorString: string);
    static gray(value: number, alpha?: number): Color;
    static fromString(value: string): Color;
    equals(other: Color): boolean;
    toString(): string;
    static get random(): Color;
    static rgb(red: number, green: number, blue: number, alpha?: number): Color;
    static hsl(hue: number, saturation: number, lightness: number, alpha?: number): Color;
}
