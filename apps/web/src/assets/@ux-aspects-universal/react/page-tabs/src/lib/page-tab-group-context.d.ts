interface PageTabGroupContext {
    id: string;
    size: 'small' | 'medium';
    selectedTab?: string;
    selectTab: (id: string) => void;
    closeTab: (tab: string) => void;
    closeAllTabs: () => void;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuOpen: boolean;
}
export declare const PageTabGroupProvider: import("react").FC<import("react").PropsWithChildren<PageTabGroupContext>>, usePageTabGroup: () => PageTabGroupContext;
export {};
