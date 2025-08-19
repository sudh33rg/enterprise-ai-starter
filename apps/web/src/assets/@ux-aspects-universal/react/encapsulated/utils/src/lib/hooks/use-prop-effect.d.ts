/**
 * A utility to watch for changes to a prop.
 * @param prop The props to watch for changes
 * @param callback The callback to call when the prop changes
 */
export declare function usePropEffect<T>(prop: T, callback: (newValue: T | undefined, oldValue: T | undefined) => void): void;
