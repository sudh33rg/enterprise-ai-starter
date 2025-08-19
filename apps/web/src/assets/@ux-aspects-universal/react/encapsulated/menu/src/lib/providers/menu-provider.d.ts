interface MenuProviderProps {
    onClose?: () => void;
}
export declare const MenuProvider: import("react").Context<MenuProviderProps>;
export declare function useMenu(): MenuProviderProps;
export {};
