import { Vector2D } from "./vector2d";
export declare class MouseData extends Vector2D {
    #private;
    get buttonStates(): boolean[];
    set buttonStates(value: boolean[]);
    get over(): boolean;
    set over(value: boolean);
}
export declare class MouseTracker extends MouseData {
    #private;
    constructor(target?: HTMLElement | Window);
    advanceFrame(): void;
    get buttonStates(): boolean[];
    get over(): boolean;
    get previous(): MouseData;
    get x(): number;
    get y(): number;
}
