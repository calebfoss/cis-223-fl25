import { Color } from "./color";
type PropertyRanges<P extends string> = {
    [Key in P]?: {
        min?: number;
        max?: number;
    };
};
type GrayRanges = PropertyRanges<"value" | "alpha">;
type HSLRanges = PropertyRanges<"hue" | "saturation" | "lightness" | "alpha">;
type RGBRanges = PropertyRanges<"red" | "green" | "blue" | "alpha">;
export declare class Random {
    static colorGray(range: GrayRanges): Color;
    static colorGray(minValue: number, maxValue: number, minAlpha?: number, maxAlpha?: number): Color;
    static colorHSL(ranges: HSLRanges): Color;
    static colorHSL(minHue: number, maxHue: number, minSaturation: number, maxSaturation: number, minLightness: number, maxLightness: number, minAlpha?: number, maxAlpha?: number): Color;
    static colorRGB(ranges: RGBRanges): Color;
    static colorRGB(minRed: number, maxRed: number, minGreen: number, maxGreen: number, minBlue: number, maxBlue: number, minAlpha?: number, maxAlpha?: number): Color;
    static float(max: number): number;
    static float(min: number, max: number): number;
    static of<T extends any[]>(array: T): any;
    static int(max: number): number;
    static int(min: number, max: number): number;
}
export {};
