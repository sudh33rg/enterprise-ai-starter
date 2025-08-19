export interface TreeNodeModel<TData = unknown> {
    /** Title of the tree item. */
    title: string;
    /** Name of a loaded UX Aspects Universal icon, or a template to use as the icon. */
    icon?: React.ReactNode;
    /** Route to navigate to. */
    route?: string;
    /** Additional data, can be used in a custom template. */
    data?: TData;
    /** Children of the tree item. */
    children?: TreeNodeModel<TData>[];
    /** Whether the node has children that should be lazy loaded */
    hasChildren?: boolean;
}
export declare function isTreeNodeWithChildren(item: TreeNodeModel): boolean;
