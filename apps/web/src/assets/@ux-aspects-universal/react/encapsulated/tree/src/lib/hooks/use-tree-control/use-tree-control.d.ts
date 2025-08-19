import { addReloadEventListenerSymbol, removeReloadEventListenerSymbol } from '../../internal/symbols';
import { TreeNodeModel } from '../../models/tree-item';
export interface UseTreeControlProps<TData> {
    items: TreeNodeModel<TData>[];
}
export interface UxaTreeControl<TData> {
    /** The root nodes in the tree */
    items: TreeNodeModel<TData>[];
    /** Whether there are only top level items in the list. */
    isSingleLevel: boolean;
    /** Collapse the specified navigation item. */
    collapse: (item: TreeNodeModel<TData>) => void;
    /** Collapse all navigation items. */
    collapseAll: () => void;
    /** Collapse the specified navigation item and all of its descendants. */
    collapseDescendants: (item: TreeNodeModel<TData>) => void;
    /** Expand the specified navigation item. */
    expand: (item: TreeNodeModel<TData>) => void;
    /** Expand all navigation items. */
    expandAll: () => void;
    /** Expand the specified navigation item and all of its descendants. */
    expandDescendants: (item: TreeNodeModel<TData>) => void;
    /** Whether the navigation item is expanded. */
    isExpanded: (item: TreeNodeModel<TData>) => boolean;
    /** Toggle the expanded state of the specified navigation item. */
    toggle: (item: TreeNodeModel<TData>) => void;
    /** Force the reloading of a node's children. */
    reload: (item: TreeNodeModel<TData>) => Promise<void>;
    /** @internal Subscribe to reload events */
    [addReloadEventListenerSymbol]: (item: TreeNodeModel<TData>, listener: () => Promise<void>) => void;
    /** @internal Unsubscribe from reload events */
    [removeReloadEventListenerSymbol]: (item: TreeNodeModel<TData>) => void;
}
export declare function useTreeControl<TData = unknown>({ items, }: UseTreeControlProps<TData>): UxaTreeControl<TData>;
