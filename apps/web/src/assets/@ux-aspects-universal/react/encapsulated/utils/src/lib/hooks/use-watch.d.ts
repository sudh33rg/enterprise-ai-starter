/**
 * This is a utility hook that will get triggered whenever a value changes.
 * This is similar to useEffect, but useEffect gets triggered when any one
 * of it's dependencies changes which makes it impossible to know which
 * value changed that caused it to fire.
 *
 * @param value The current value
 * @param callback The callback that will be triggered when the value changes
 */
export declare function useWatch<T>(value: T, callback: (newValue: T, oldValue: T) => void): void;
