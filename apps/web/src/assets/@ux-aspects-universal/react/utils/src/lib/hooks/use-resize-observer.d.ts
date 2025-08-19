/**
 * A hook that uses the ResizeObserver API to observe changes to the size of an element.
 * React Aria does provide a useResizeObserver hook, but it is does not expose the ResizeObserverEntry.
 */
export declare function useResizeObserver<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, callback: ResizeObserverCallback): void;
interface UseResizeOptions {
    /** The debounce time in milliseconds. */
    debounce?: number;
}
/**
 * A resize observer that observes changes to the size of an element, and allows for a callback to be executed when the size changes.
 * Unlike the useResizeObserver hook, this hook allows a debounce and only emits when the dimensions change.
 */
export declare function useResize<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, callback: (dimensions: {
    width: number;
    height: number;
}) => void, options?: UseResizeOptions): void;
export {};
