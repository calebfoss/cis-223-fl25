import { Color } from "./color";
import { Vector2D } from "./vector2d";
export declare class Shadow {
    #private;
    constructor(options: Partial<Shadow>);
    addChangeListener(listener: (updatedValue: Shadow) => void): void;
    removeChangeListener(listener: ChangeListener<Shadow>): void;
    get blur(): number;
    set blur(value: number);
    get color(): Color;
    set color(value: Color);
    equals(other: Shadow): boolean;
    get offset(): Vector2D;
    set offset(value: Vector2D);
    render(context: CanvasRenderingContext2D): void;
}
