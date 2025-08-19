interface FocusableControlContext {
    setOnFocus: (onFocus?: () => void) => void;
}
export declare const FocusableControlProvider: import("react").FC<import("react").PropsWithChildren<FocusableControlContext>>, useFocusableControlContext: () => FocusableControlContext;
interface UseFocusableControlProps {
    onFocus?: () => void;
}
export declare function useFocusableControl({ onFocus }?: UseFocusableControlProps): void;
export {};
