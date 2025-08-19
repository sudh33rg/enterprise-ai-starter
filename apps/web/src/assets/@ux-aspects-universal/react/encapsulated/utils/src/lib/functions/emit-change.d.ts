/**
 * Force a change event to be emitted by the specified element.
 * This can be used whenever an input element is updated programmatically,
 * if it is necessary to forward the `onChange` event.
 */
export declare function emitChangeOnElement(element: HTMLInputElement, value?: string): void;
