export interface InputState {
    type?: string;
    setType: (type?: string) => void;
    value?: string;
    setValue: (value?: string) => void;
    focused?: boolean;
    setFocused: (focused: boolean) => void;
    onClear?: (callback: () => void) => () => void;
    onFocus?: (callback: () => void) => () => void;
    clear: () => void;
    focus: () => void;
    size: 'small' | 'medium' | 'large';
}
export declare const InputContext: import("react").Context<InputState | undefined>;
export declare function useInputState(): InputState;
