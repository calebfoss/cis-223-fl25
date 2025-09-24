import { Vector2D } from "./vector2d";
export declare class ClickData extends Vector2D {
    #private;
    get clicked(): boolean;
    set clicked(value: boolean);
}
export declare class ClickTracker extends ClickData {
    #private;
    constructor(target: HTMLElement);
    advanceFrame(): void;
    get clicked(): boolean;
    get position(): Vector2D;
    get x(): number;
    get y(): number;
}
