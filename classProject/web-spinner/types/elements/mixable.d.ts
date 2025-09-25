export declare class CustomHTMLElement extends HTMLElement {
    static observedAttributes: string[];
    static tag: string;
    constructor(...args: any[]);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * @private
     */
    createChild<E extends typeof CustomHTMLElement>(ElementClass: E, options?: Options<InstanceType<E>>): InstanceType<E>;
    /**
     * @private
     */
    registerChange<P extends keyof Writeable<this>>(propertyName: P, newValue: this[P]): void;
}
export declare function createCustomElement<E extends typeof CustomHTMLElement>(ElementClass: E, options?: Options<InstanceType<E>>): InstanceType<E>;
