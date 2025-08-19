/**
 * A utility hook similar to use state, however that doesn't require a render to get the latest values.
 */
export declare function useStateRef<T>(initialValue: T): [() => T, (value: T) => void];
