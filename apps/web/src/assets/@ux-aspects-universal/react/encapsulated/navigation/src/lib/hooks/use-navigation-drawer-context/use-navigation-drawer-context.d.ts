export interface UseNavigationDrawerContext {
    /** The minimized state of the drawer */
    isMinimized: boolean;
    /** Toggle the minimized state of the drawer */
    toggleMinimized: () => void;
    /** The navigation type */
    navigationType: NavigationType;
    /** Set the navigation type */
    setNavigationType: (type: NavigationType) => void;
    /** Inform the drawer if there is only a single level of navigation items */
    setSingleLevel: (singleLevel: boolean) => void;
}
export declare const NavigationDrawerContext: import("react").Context<UseNavigationDrawerContext | undefined>;
export declare function useNavigationDrawer(): UseNavigationDrawerContext;
export declare enum NavigationType {
    List = 0,
    Tree = 1
}
