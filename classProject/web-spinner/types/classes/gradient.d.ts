import { Angle } from "./angle";
import { Color } from "./color";
import { Vector2D } from "./vector2d";
declare class ColorStop {
    #private;
    constructor(offset: number, color: Color);
    get offset(): number;
    get color(): Color;
}
export declare class Gradient {
    #private;
    addColorStop(offset: number, color: Color): this;
    protected applyStops(gradient: CanvasGradient): void;
    protected defineSVGStops(definition: SVGGradientElement): void;
    render(context: CanvasRenderingContext2D, ...args: any[]): CanvasGradient;
    get stops(): ColorStop[];
    toString(): string;
    get svg(): SVGGradientElement;
}
export declare class LinearGradient extends Gradient {
    #private;
    constructor(startX?: number, startY?: number, endX?: number, endY?: number);
    render(context: CanvasRenderingContext2D, boundsX: number, boundsY: number, boundsWidth: number, boundsHeight: number): CanvasGradient;
    get svg(): SVGLinearGradientElement;
}
export declare class RadialGradient extends Gradient {
    #private;
    constructor(startX?: number, startY?: number, startRadius?: number, endX?: number, endY?: number, endRadius?: number);
    render(context: CanvasRenderingContext2D, boundsX: number, boundsY: number, boundsRadius: number): CanvasGradient;
    get svg(): SVGRadialGradientElement;
}
export declare class ConicalGradient extends Gradient {
    #private;
    constructor(startAngle?: Angle, offset?: Vector2D);
    render(context: CanvasRenderingContext2D, center: Vector2D): CanvasGradient;
}
export type DrawStyle = Color | string | Gradient | None;
export {};
