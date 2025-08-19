import { UxaTreeControl } from '@ux-aspects-universal/react/tree';
import { FC } from 'react';
import { NavigationItem, NavigationItemProps, NavigationItemSize } from '../../components/navigation-item/navigation-item';
import { NavigationItemVariant } from '../../models/navigation-item';
export interface UseNavigation<TData> {
    /** The navigation tree control. */
    treeControl?: UxaTreeControl<TData>;
    /** Define the size for secondary items */
    secondaryItemSize?: NavigationItemSize;
    /** The secondary navigation item */
    SecondaryItem: FC<NavigationItemProps<TData>> | typeof NavigationItem;
    /** Callback that is fired whenever an item is navigated to */
    onNavigate: (item: NavigationItemVariant<TData>) => void;
    /** The function to check if an item is active */
    isItemActive?: (item: NavigationItemVariant<TData>) => boolean;
    /** Load children asynchronously */
    loadChildren?: (item: NavigationItemVariant<TData>) => Promise<void>;
    /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
    expandOn: 'item' | 'chevron';
    /** Whether the navigation tree is single level */
    isSingleLevel?: boolean;
}
export declare function createNavigationContext<TData = unknown>(): React.Context<UseNavigation<TData>>;
export declare function useNavigation<TData = unknown>(): UseNavigation<TData>;
