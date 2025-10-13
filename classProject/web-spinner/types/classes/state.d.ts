export declare class State<T> {
    #private;
    constructor(initialValue: T);
    addChangeListener(listener: ChangeListener<T>): ChangeListener<T>[];
    removeChangeListener(listener: ChangeListener<T>): ChangeListener<T>[];
    handleChange(): void;
    equals(other: T | State<T>): boolean;
    replace<O extends this>(other: O, changeListener: ChangeListener<T>): O;
    get value(): T;
    set value(newValue: T);
}
export declare function createState<T>(target: T): State<T>;
