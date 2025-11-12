import { State } from "./state";
declare const NumberAnimation_base: {
    new ({ from, to, interpolation, durationMS, }: {
        from: number;
        to: number;
        interpolation: "linear";
        durationMS: number;
    }): {
        "__#214880@#playTime": number;
        "__#214880@#playValue": number;
        "__#214880@#from": number;
        "__#214880@#to": number;
        "__#214880@#interpolation": "linear";
        "__#214880@#durationMS": number;
        "__#214880@#animationRequestID": number | null;
        "__#214880@#paused": boolean;
        "__#214880@#queueAnimation"(now: number): void;
        "__#214880@#animate"(now: number): void;
        "__#214880@#interpolate"(kind: "linear", amount: number): number;
        play(): void;
        pause(): void;
        readonly paused: boolean;
        rewind(): void;
        toggle(): void;
        "__#1@#listeners": Set<ChangeListener<number>>;
        "__#1@#value": number;
        addChangeListener(listener: ChangeListener<number>): ChangeListener<number>[];
        removeChangeListener(listener: ChangeListener<number>): ChangeListener<number>[];
        _handleChange(): void;
        equals(other: number | State<number>): boolean;
        replace<O extends /*elided*/ any>(other: O, changeListener: ChangeListener<number>): O;
        value: number;
    };
};
export declare class NumberAnimation extends NumberAnimation_base {
}
export {};
