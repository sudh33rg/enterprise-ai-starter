import { RefObject } from 'react';
/**
 * Allows us to add an event handler to an element that is not part of the components JSX
 */
export declare function useEventListener<T extends Event>(ref: RefObject<HTMLElement>, type: keyof HTMLElementEventMap, listener: (event: T) => void): void;
