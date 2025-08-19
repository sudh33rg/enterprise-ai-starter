export interface SubMenuProviderProps {
    onClose?: () => void;
}
export declare const SubMenuProvider: import("react").Context<SubMenuProviderProps>;
export declare function useSubMenu(): SubMenuProviderProps;
