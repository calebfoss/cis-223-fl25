import { Canvas2DCanvasElement } from "../visual/canvas";
import { DocumentContainerWrapper } from "./container";
import { SVGSVGController } from "../visual/svgSVG";
export declare function createHTMLElementWrapperConstructor<T extends keyof HTMLElementTagNameMap>(tag: T): {
    new (...args: any[]): {
        "__#39@#element": HTMLElementTagNameMap[T];
        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
        createWrappedChild<T_1 extends keyof HTMLElementTagNameMap, W extends HTMLElementWrapperConstructor<T_1>>(WrapperConstructor: W, options?: Options<HTMLElementController<T_1, InstanceType<W>>>): HTMLElementController<T_1, InstanceType<W>>;
        readonly element: HTMLElementTagNameMap[T];
        style: CSSStyleDeclaration;
        svg(options?: Options<SVGSVGController>): SVGSVGController;
    };
};
export type HTMLElementWrapperConstructor<T extends keyof HTMLElementTagNameMap> = ReturnType<typeof createHTMLElementWrapperConstructor<T>>;
export type TemplateApplier<T extends keyof HTMLElementTagNameMap, W extends InstanceType<HTMLElementWrapperConstructor<T>>> = (strings: TemplateStringsArray, ...values: any[]) => HTMLElementController<T, W>;
export type HTMLElementController<T extends keyof HTMLElementTagNameMap, W extends InstanceType<HTMLElementWrapperConstructor<T>>> = HTMLElementTagNameMap[T] & W & TemplateApplier<T, W>;
export declare function createWrappedController<T extends keyof HTMLElementTagNameMap, W extends HTMLElementWrapperConstructor<T>>(WrapperConstructor: W): HTMLElementController<T, InstanceType<W>>;
export declare function createRoot(rootParent?: HTMLElement): HTMLElementController<keyof HTMLElementTagNameMap, DocumentContainerWrapper>;
