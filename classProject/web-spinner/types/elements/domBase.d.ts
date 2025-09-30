import { Canvas2DCanvasElement } from "./canvas";
import { SVGSVGController } from "./svgSVG";
export declare function createHTMLElementWrapperConstructor<T extends keyof HTMLElementTagNameMap>(tag: T): {
    new (...args: any[]): {
        "__#40@#controller": HTMLElementController<T, /*elided*/ any>;
        "__#40@#element": HTMLElementTagNameMap[T];
        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
        readonly controller: HTMLElementController<T, /*elided*/ any>;
        createChild<T_1 extends keyof HTMLElementTagNameMap>(tag: T_1): HTMLElementController<T_1, {
            "__#40@#controller": HTMLElementController<T_1, /*elided*/ any>;
            "__#40@#element": HTMLElementTagNameMap[T_1];
            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
            readonly controller: HTMLElementController<T, /*elided*/ any>;
            createChild<T_2 extends keyof HTMLElementTagNameMap>(tag: T_2): HTMLElementController<T_2, {
                "__#40@#controller": HTMLElementController<T_2, /*elided*/ any>;
                "__#40@#element": HTMLElementTagNameMap[T_2];
                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                readonly controller: HTMLElementController<T_1, /*elided*/ any>;
                createChild<T_3 extends keyof HTMLElementTagNameMap>(tag: T_3): HTMLElementController<T_3, {
                    "__#40@#controller": HTMLElementController<T_3, /*elided*/ any>;
                    "__#40@#element": HTMLElementTagNameMap[T_3];
                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                    readonly controller: HTMLElementController<T_2, /*elided*/ any>;
                    createChild<T_4 extends keyof HTMLElementTagNameMap>(tag: T_4): HTMLElementController<T_4, {
                        "__#40@#controller": HTMLElementController<T_4, /*elided*/ any>;
                        "__#40@#element": HTMLElementTagNameMap[T_4];
                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                        readonly controller: HTMLElementController<T_3, /*elided*/ any>;
                        createChild<T_5 extends keyof HTMLElementTagNameMap>(tag: T_5): HTMLElementController<T_5, {
                            "__#40@#controller": HTMLElementController<T_5, /*elided*/ any>;
                            "__#40@#element": HTMLElementTagNameMap[T_5];
                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                            readonly controller: HTMLElementController<T_4, /*elided*/ any>;
                            createChild<T_6 extends keyof HTMLElementTagNameMap>(tag: T_6): HTMLElementController<T_6, {
                                "__#40@#controller": HTMLElementController<T_6, /*elided*/ any>;
                                "__#40@#element": HTMLElementTagNameMap[T_6];
                                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                readonly controller: HTMLElementController<T_5, /*elided*/ any>;
                                createChild<T_7 extends keyof HTMLElementTagNameMap>(tag: T_7): HTMLElementController<T_7, {
                                    "__#40@#controller": HTMLElementController<T_7, /*elided*/ any>;
                                    "__#40@#element": HTMLElementTagNameMap[T_7];
                                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                    readonly controller: HTMLElementController<T_6, /*elided*/ any>;
                                    createChild<T_8 extends keyof HTMLElementTagNameMap>(tag: T_8): HTMLElementController<T_8, {
                                        "__#40@#controller": HTMLElementController<T_8, /*elided*/ any>;
                                        "__#40@#element": HTMLElementTagNameMap[T_8];
                                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                        readonly controller: HTMLElementController<T_7, /*elided*/ any>;
                                        createChild<T_9 extends keyof HTMLElementTagNameMap>(tag: T_9): HTMLElementController<T_9, {
                                            "__#40@#controller": HTMLElementController<T_9, /*elided*/ any>;
                                            "__#40@#element": HTMLElementTagNameMap[T_9];
                                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                            readonly controller: HTMLElementController<T_8, /*elided*/ any>;
                                            createChild<T_10 extends keyof HTMLElementTagNameMap>(tag: T_10): HTMLElementController<T_10, {
                                                "__#40@#controller": HTMLElementController<T_10, /*elided*/ any>;
                                                "__#40@#element": HTMLElementTagNameMap[T_10];
                                                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                                readonly controller: HTMLElementController<T_9, /*elided*/ any>;
                                                createChild<T_11 extends keyof HTMLElementTagNameMap>(tag: T_11): HTMLElementController<T_11, /*elided*/ any>;
                                                readonly element: HTMLElementTagNameMap[T_9];
                                                svg(options?: Options<SVGSVGController>): SVGSVGController;
                                            }>;
                                            readonly element: HTMLElementTagNameMap[T_8];
                                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                                        }>;
                                        readonly element: HTMLElementTagNameMap[T_7];
                                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                                    }>;
                                    readonly element: HTMLElementTagNameMap[T_6];
                                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                                }>;
                                readonly element: HTMLElementTagNameMap[T_5];
                                svg(options?: Options<SVGSVGController>): SVGSVGController;
                            }>;
                            readonly element: HTMLElementTagNameMap[T_4];
                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                        }>;
                        readonly element: HTMLElementTagNameMap[T_3];
                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                    }>;
                    readonly element: HTMLElementTagNameMap[T_2];
                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                }>;
                readonly element: HTMLElementTagNameMap[T_1];
                svg(options?: Options<SVGSVGController>): SVGSVGController;
            }>;
            readonly element: HTMLElementTagNameMap[T];
            svg(options?: Options<SVGSVGController>): SVGSVGController;
        }>;
        readonly element: HTMLElementTagNameMap[T];
        svg(options?: Options<SVGSVGController>): SVGSVGController;
    };
};
export type HTMLElementWrapperConstructor<T extends keyof HTMLElementTagNameMap> = ReturnType<typeof createHTMLElementWrapperConstructor<T>>;
export type TemplateApplier<T extends keyof HTMLElementTagNameMap, W extends InstanceType<HTMLElementWrapperConstructor<T>>> = (strings: TemplateStringsArray, ...values: any[]) => HTMLElementController<T, W>;
export type HTMLElementController<T extends keyof HTMLElementTagNameMap, W extends InstanceType<HTMLElementWrapperConstructor<T>>> = HTMLElementTagNameMap[T] & W & TemplateApplier<T, W>;
export declare function createRoot(rootParent?: HTMLElement): HTMLElementController<"div", {
    "__#40@#controller": HTMLElementController<"div", /*elided*/ any>;
    "__#40@#element": HTMLDivElement;
    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
    readonly controller: HTMLElementController<T, {
        "__#40@#controller": HTMLElementController<T, /*elided*/ any>;
        "__#40@#element": HTMLElementTagNameMap[T];
        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
        readonly controller: HTMLElementController<T, /*elided*/ any>;
        createChild<T_1 extends keyof HTMLElementTagNameMap>(tag: T_1): HTMLElementController<T_1, {
            "__#40@#controller": HTMLElementController<T_1, /*elided*/ any>;
            "__#40@#element": HTMLElementTagNameMap[T_1];
            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
            readonly controller: HTMLElementController<T, /*elided*/ any>;
            createChild<T_2 extends keyof HTMLElementTagNameMap>(tag: T_2): HTMLElementController<T_2, {
                "__#40@#controller": HTMLElementController<T_2, /*elided*/ any>;
                "__#40@#element": HTMLElementTagNameMap[T_2];
                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                readonly controller: HTMLElementController<T_1, /*elided*/ any>;
                createChild<T_3 extends keyof HTMLElementTagNameMap>(tag: T_3): HTMLElementController<T_3, {
                    "__#40@#controller": HTMLElementController<T_3, /*elided*/ any>;
                    "__#40@#element": HTMLElementTagNameMap[T_3];
                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                    readonly controller: HTMLElementController<T_2, /*elided*/ any>;
                    createChild<T_4 extends keyof HTMLElementTagNameMap>(tag: T_4): HTMLElementController<T_4, {
                        "__#40@#controller": HTMLElementController<T_4, /*elided*/ any>;
                        "__#40@#element": HTMLElementTagNameMap[T_4];
                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                        readonly controller: HTMLElementController<T_3, /*elided*/ any>;
                        createChild<T_5 extends keyof HTMLElementTagNameMap>(tag: T_5): HTMLElementController<T_5, {
                            "__#40@#controller": HTMLElementController<T_5, /*elided*/ any>;
                            "__#40@#element": HTMLElementTagNameMap[T_5];
                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                            readonly controller: HTMLElementController<T_4, /*elided*/ any>;
                            createChild<T_6 extends keyof HTMLElementTagNameMap>(tag: T_6): HTMLElementController<T_6, {
                                "__#40@#controller": HTMLElementController<T_6, /*elided*/ any>;
                                "__#40@#element": HTMLElementTagNameMap[T_6];
                                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                readonly controller: HTMLElementController<T_5, /*elided*/ any>;
                                createChild<T_7 extends keyof HTMLElementTagNameMap>(tag: T_7): HTMLElementController<T_7, {
                                    "__#40@#controller": HTMLElementController<T_7, /*elided*/ any>;
                                    "__#40@#element": HTMLElementTagNameMap[T_7];
                                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                    readonly controller: HTMLElementController<T_6, /*elided*/ any>;
                                    createChild<T_8 extends keyof HTMLElementTagNameMap>(tag: T_8): HTMLElementController<T_8, {
                                        "__#40@#controller": HTMLElementController<T_8, /*elided*/ any>;
                                        "__#40@#element": HTMLElementTagNameMap[T_8];
                                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                        readonly controller: HTMLElementController<T_7, /*elided*/ any>;
                                        createChild<T_9 extends keyof HTMLElementTagNameMap>(tag: T_9): HTMLElementController<T_9, {
                                            "__#40@#controller": HTMLElementController<T_9, /*elided*/ any>;
                                            "__#40@#element": HTMLElementTagNameMap[T_9];
                                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                            readonly controller: HTMLElementController<T_8, /*elided*/ any>;
                                            createChild<T_10 extends keyof HTMLElementTagNameMap>(tag: T_10): HTMLElementController<T_10, /*elided*/ any>;
                                            readonly element: HTMLElementTagNameMap[T_8];
                                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                                        }>;
                                        readonly element: HTMLElementTagNameMap[T_7];
                                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                                    }>;
                                    readonly element: HTMLElementTagNameMap[T_6];
                                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                                }>;
                                readonly element: HTMLElementTagNameMap[T_5];
                                svg(options?: Options<SVGSVGController>): SVGSVGController;
                            }>;
                            readonly element: HTMLElementTagNameMap[T_4];
                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                        }>;
                        readonly element: HTMLElementTagNameMap[T_3];
                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                    }>;
                    readonly element: HTMLElementTagNameMap[T_2];
                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                }>;
                readonly element: HTMLElementTagNameMap[T_1];
                svg(options?: Options<SVGSVGController>): SVGSVGController;
            }>;
            readonly element: HTMLElementTagNameMap[T];
            svg(options?: Options<SVGSVGController>): SVGSVGController;
        }>;
        readonly element: HTMLElementTagNameMap[T];
        svg(options?: Options<SVGSVGController>): SVGSVGController;
    }>;
    createChild<T extends keyof HTMLElementTagNameMap>(tag: T): HTMLElementController<T, {
        "__#40@#controller": HTMLElementController<T, /*elided*/ any>;
        "__#40@#element": HTMLElementTagNameMap[T];
        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
        readonly controller: HTMLElementController<"div", /*elided*/ any>;
        createChild<T_1 extends keyof HTMLElementTagNameMap>(tag: T_1): HTMLElementController<T_1, {
            "__#40@#controller": HTMLElementController<T_1, /*elided*/ any>;
            "__#40@#element": HTMLElementTagNameMap[T_1];
            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
            readonly controller: HTMLElementController<T, /*elided*/ any>;
            createChild<T_2 extends keyof HTMLElementTagNameMap>(tag: T_2): HTMLElementController<T_2, {
                "__#40@#controller": HTMLElementController<T_2, /*elided*/ any>;
                "__#40@#element": HTMLElementTagNameMap[T_2];
                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                readonly controller: HTMLElementController<T_1, /*elided*/ any>;
                createChild<T_3 extends keyof HTMLElementTagNameMap>(tag: T_3): HTMLElementController<T_3, {
                    "__#40@#controller": HTMLElementController<T_3, /*elided*/ any>;
                    "__#40@#element": HTMLElementTagNameMap[T_3];
                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                    readonly controller: HTMLElementController<T_2, /*elided*/ any>;
                    createChild<T_4 extends keyof HTMLElementTagNameMap>(tag: T_4): HTMLElementController<T_4, {
                        "__#40@#controller": HTMLElementController<T_4, /*elided*/ any>;
                        "__#40@#element": HTMLElementTagNameMap[T_4];
                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                        readonly controller: HTMLElementController<T_3, /*elided*/ any>;
                        createChild<T_5 extends keyof HTMLElementTagNameMap>(tag: T_5): HTMLElementController<T_5, {
                            "__#40@#controller": HTMLElementController<T_5, /*elided*/ any>;
                            "__#40@#element": HTMLElementTagNameMap[T_5];
                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                            readonly controller: HTMLElementController<T_4, /*elided*/ any>;
                            createChild<T_6 extends keyof HTMLElementTagNameMap>(tag: T_6): HTMLElementController<T_6, {
                                "__#40@#controller": HTMLElementController<T_6, /*elided*/ any>;
                                "__#40@#element": HTMLElementTagNameMap[T_6];
                                canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                readonly controller: HTMLElementController<T_5, /*elided*/ any>;
                                createChild<T_7 extends keyof HTMLElementTagNameMap>(tag: T_7): HTMLElementController<T_7, {
                                    "__#40@#controller": HTMLElementController<T_7, /*elided*/ any>;
                                    "__#40@#element": HTMLElementTagNameMap[T_7];
                                    canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                    readonly controller: HTMLElementController<T_6, /*elided*/ any>;
                                    createChild<T_8 extends keyof HTMLElementTagNameMap>(tag: T_8): HTMLElementController<T_8, {
                                        "__#40@#controller": HTMLElementController<T_8, /*elided*/ any>;
                                        "__#40@#element": HTMLElementTagNameMap[T_8];
                                        canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                        readonly controller: HTMLElementController<T_7, /*elided*/ any>;
                                        createChild<T_9 extends keyof HTMLElementTagNameMap>(tag: T_9): HTMLElementController<T_9, {
                                            "__#40@#controller": HTMLElementController<T_9, /*elided*/ any>;
                                            "__#40@#element": HTMLElementTagNameMap[T_9];
                                            canvas2D(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
                                            readonly controller: HTMLElementController<T_8, /*elided*/ any>;
                                            createChild<T_10 extends keyof HTMLElementTagNameMap>(tag: T_10): HTMLElementController<T_10, /*elided*/ any>;
                                            readonly element: HTMLElementTagNameMap[T_8];
                                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                                        }>;
                                        readonly element: HTMLElementTagNameMap[T_7];
                                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                                    }>;
                                    readonly element: HTMLElementTagNameMap[T_6];
                                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                                }>;
                                readonly element: HTMLElementTagNameMap[T_5];
                                svg(options?: Options<SVGSVGController>): SVGSVGController;
                            }>;
                            readonly element: HTMLElementTagNameMap[T_4];
                            svg(options?: Options<SVGSVGController>): SVGSVGController;
                        }>;
                        readonly element: HTMLElementTagNameMap[T_3];
                        svg(options?: Options<SVGSVGController>): SVGSVGController;
                    }>;
                    readonly element: HTMLElementTagNameMap[T_2];
                    svg(options?: Options<SVGSVGController>): SVGSVGController;
                }>;
                readonly element: HTMLElementTagNameMap[T_1];
                svg(options?: Options<SVGSVGController>): SVGSVGController;
            }>;
            readonly element: HTMLElementTagNameMap[T];
            svg(options?: Options<SVGSVGController>): SVGSVGController;
        }>;
        readonly element: HTMLDivElement;
        svg(options?: Options<SVGSVGController>): SVGSVGController;
    }>;
    readonly element: HTMLElementTagNameMap[T];
    svg(options?: Options<SVGSVGController>): SVGSVGController;
}>;
export type Test = number | string;
