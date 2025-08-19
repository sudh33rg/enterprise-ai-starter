export interface UseTreeItem {
    level: number;
    /** Allow a child to collapse its parent */
    collapseParent: () => void;
    /** Allow a child to toggle its parent */
    toggleParent: () => void;
}
export declare const TreeItemContext: import("react").Context<UseTreeItem>;
export declare function useTreeItem(): UseTreeItem;
