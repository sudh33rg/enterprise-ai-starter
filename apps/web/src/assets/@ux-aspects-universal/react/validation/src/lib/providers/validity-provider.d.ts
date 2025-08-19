interface ValidityProviderProps {
    isValid?: boolean;
}
export declare const ValidityProvider: import("react").Context<ValidityProviderProps>;
export declare function useValidity(): ValidityProviderProps;
export {};
