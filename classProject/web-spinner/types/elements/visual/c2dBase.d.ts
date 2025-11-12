import { Vector2D } from "../../classes/vector2d";
import { CustomHTMLElement } from "../mixable";
import { Canvas2DCanvasElement } from "./canvas";
export declare class C2DBase extends CustomHTMLElement {
    #private;
    /**
     * The element's custom HTML tag. This can be passed into document.createElement().
     */
    static tag: string;
    /**
     * The <c2d-canvas> element that is rendering this element. The <c2d-canvas>
     * will be an ancestor of this element.
     */
    get canvas(): Canvas2DCanvasElement;
    /**
     * Function called before rendering. The function has one parameter: the
     * current frame number.
     */
    get everyFrame(): Updater | null;
    set everyFrame(updater: Updater | null);
    remove(): void;
    /**
     * Scales a vector by the device's pixel ratio.
     */
    scaleByPixelRatio(vector: Vector2D): Vector2D;
}
