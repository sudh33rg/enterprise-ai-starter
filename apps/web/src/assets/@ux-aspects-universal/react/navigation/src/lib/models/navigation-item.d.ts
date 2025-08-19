export interface NavigationSecondaryItem<TData = unknown> {
    /** Title of the navigation item. */
    title: string;
    /** Name of a loaded UX Aspects Universal icon, or a template to use as the icon. */
    icon?: React.ReactNode;
    /** Route to navigate to. */
    route?: string;
    /** Additional data, can be used in a custom template. */
    data?: TData;
}
export interface NavigationPrimaryItem<TData = unknown> extends NavigationSecondaryItem<TData> {
    /** Children of the navigation item. */
    children?: NavigationSecondaryItem<TData>[];
    /** Whether the node has children that should be lazy loaded */
    hasChildren?: boolean;
}
export interface NavigationTreeItem<TData = unknown> extends NavigationSecondaryItem<TData> {
    /** Children of the navigation tree item. */
    children?: NavigationTreeItem<TData>[];
    /** Whether the node has children that should be lazy loaded */
    hasChildren?: boolean;
}
export type NavigationItemVariant<TData = unknown> = NavigationPrimaryItem<TData> | NavigationSecondaryItem<TData> | NavigationTreeItem<TData>;
export declare function isNavigationItemWithChildren(item: NavigationItemVariant): item is NavigationPrimaryItem | NavigationTreeItem;
