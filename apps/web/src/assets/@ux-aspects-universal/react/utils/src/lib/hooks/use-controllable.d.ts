/**
 * Props are often used as the source of truth, however we want the component to function if
 * the prop and on change are not defined. This will provide default state an onChange handlers
 * if they are not provided
 * @param prop The prop value
 * @param onChange The onChange callback
 * @param defaultProp The default prop value if none is specified
 *
 */
export declare function useControlled<TValue, TReturnValue = TValue>(prop?: TValue, onChange?: (value: TValue) => void, defaultProp?: TValue): [TReturnValue, (value: TReturnValue) => void];
export declare function useUncontrolled<T>(defaultProp?: T, onChange?: (value: T) => void): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];
