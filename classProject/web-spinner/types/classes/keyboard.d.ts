export declare class KeyboardTracker {
    #private;
    constructor();
    advanceFrame(): void;
    get down(): boolean;
    get last(): string;
    keyHeld(key: string): boolean;
    keyPreviouslyHeld(key: string): boolean;
}
