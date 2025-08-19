interface CheckboxGroupContextValue {
    values?: string[];
    isDisabled?: boolean;
    isReadonly?: boolean;
    name?: string;
    select: (value: string) => void;
    deselect: (value: string) => void;
}
export declare const CheckboxGroupContext: import("react").Context<CheckboxGroupContextValue | null>;
export declare function useCheckboxGroupContext(): CheckboxGroupContextValue | null;
export {};
