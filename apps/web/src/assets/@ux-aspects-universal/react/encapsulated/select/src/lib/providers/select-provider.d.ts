interface SelectProviderProps<T> {
    value?: T;
    onSelect?: (option: T) => void;
}
export declare const SelectProvider: import("react").Context<SelectProviderProps<any>>;
export declare function useSelect<T>(): SelectProviderProps<T>;
export {};
