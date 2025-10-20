export declare class State<T> {
    #private;
    constructor(initialValue: T);
    /**
     * Adds a listener function to be called when the value changes.
     *
     * @param listener Function with 1 parameter: the changed value
     * @returns Array of listeners currently registered
     */
    addChangeListener(listener: ChangeListener<T>): ChangeListener<T>[];
    /**
     * Removes a listener function so that it is no longer called when the value
     * changes
     *
     * @param listener Listener function to remove
     * @returns Array of listeners currently registered
     */
    removeChangeListener(listener: ChangeListener<T>): ChangeListener<T>[];
    protected handleChange(): void;
    /**
     * Checks if another State represents the same value.
     *
     * @param other State of same type
     * @returns
     */
    equals(other: T | State<T>): boolean;
    /**
     * This method moves a listener from one State to another and returns the
     * other state.
     *
     * @param other Another State of the same type
     * @param changeListener
     * @returns
     */
    replace<O extends this>(other: O, changeListener: ChangeListener<T>): O;
    /**
     * Current value stored by this State.
     */
    get value(): T;
    set value(newValue: T);
}
export declare function createState<T>(target: T): State<T>;
