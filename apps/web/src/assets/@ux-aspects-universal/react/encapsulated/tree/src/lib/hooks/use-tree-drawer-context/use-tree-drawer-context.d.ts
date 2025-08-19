export interface UseTreeDrawerContext {
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
export declare enum NavigationType {
    List = 0,
    Tree = 1
}
export declare const TreeDrawerContext: import("react").Context<UseTreeDrawerContext>;
export declare function useTreeDrawer(): UseTreeDrawerContext;
