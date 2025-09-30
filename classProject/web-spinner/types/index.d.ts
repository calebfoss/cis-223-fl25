import { Canvas2DCanvasElement } from "./elements/visual/canvas";
import { Canvas2DRectangle, Canvas2DShapeRectangle } from "./elements/visual/rectangle";
import { Color } from "./classes/color";
import { Vector2D } from "./classes/vector2d";
import { Angle } from "./classes/angle";
import { Canvas2DText } from "./elements/visual/text";
import { Units } from "./classes/units";
import { State, createState } from "./classes/state";
import { Canvas2DLine, Canvas2DShapeLine } from "./elements/visual/line";
import { Canvas2DShape } from "./elements/visual/shape";
import { Canvas2DEllipse, Canvas2DShapeEllipse } from "./elements/visual/ellipse";
import { Canvas2DBezier, Canvas2DShapeBezier } from "./elements/visual/bezier";
import { Canvas2DImage } from "./elements/visual/image";
import { Canvas2DVideo } from "./elements/visual/video";
import { ConicalGradient, LinearGradient, RadialGradient } from "./classes/gradient";
import { C2DBase } from "./elements/visual/c2dBase";
import { Shadow } from "./classes/shadow";
import { createRoot } from "./elements/document/domBase";
import { BorderRadius } from "./classes/borderRadius";
import { Random } from "./classes/random";
export type CSSLengthUnit = (typeof Units.size)[keyof typeof Units.size];
declare function createMultiple<R extends Node>(count: number, generator: (index: number) => R): R[];
declare global {
    interface CustomElementRegistry {
        define<E extends typeof C2DBase>(tag: E["tag"], ElementClass: E): void;
    }
}
export type WebSpinnerElement = {
    Canvas2DCanvasElement: Canvas2DCanvasElement;
    Canvas2DBezier: Canvas2DBezier;
    Canvas2DEllipse: Canvas2DEllipse;
    Canvas2DImage: Canvas2DImage;
    Canvas2DLine: Canvas2DLine;
    Canvas2DRectangle: Canvas2DRectangle;
    Canvas2DShape: Canvas2DShape;
    Canvas2DShapeBezier: Canvas2DShapeBezier;
    Canvas2DShapeEllipse: Canvas2DShapeEllipse;
    Canvas2DShapeLine: Canvas2DShapeLine;
    Canvas2DShapeRectangle: Canvas2DShapeRectangle;
    Canvas2DText: Canvas2DText;
    Canvas2DVideo: Canvas2DVideo;
};
export { createMultiple, BorderRadius, Color, Vector2D, Angle, State, ConicalGradient, LinearGradient, RadialGradient, Random, Shadow, createState, createRoot, };
