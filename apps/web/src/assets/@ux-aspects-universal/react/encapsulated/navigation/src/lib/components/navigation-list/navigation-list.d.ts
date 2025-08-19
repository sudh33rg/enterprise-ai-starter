import { UxaTreeControl } from '@ux-aspects-universal/react/tree';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { NavigationItemVariant, NavigationPrimaryItem, NavigationSecondaryItem } from '../../models/navigation-item';
import { NavigationItemSize } from '../navigation-item/navigation-item';
import './navigation-list.scss';
export interface NavigationListProps<TData> {
    /** A function which determines whether a navigation item is currently active. */
    isItemActive?: (item: NavigationItemVariant<TData>) => boolean;
    /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
    treeControl: UxaTreeControl<TData>;
    /** Custom component used to render primary navigation items. */
    primary?: FC<{
        item: NavigationPrimaryItem<TData>;
    }>;
    /** Custom component used to render secondary navigation items. */
    secondary?: FC<{
        item: NavigationSecondaryItem<TData>;
    }>;
    /** The size of the primary navigation items. Defaults to 'large'. */
    primaryItemSize?: NavigationItemSize;
    /** The size of the secondary navigation items. Defaults to 'medium'. */
    secondaryItemSize?: NavigationItemSize;
    /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
    expandOn?: 'item' | 'chevron';
    /** Emits when activating a navigation item (click or keypress). */
    onNavigate?: (item: NavigationItemVariant<TData>) => void;
    /** Load children asynchronously */
    loadChildren?: (node: NavigationItemVariant<TData>) => Promise<void>;
}
export declare function NavigationList<TData>({ isItemActive, treeControl, primaryItemSize, secondaryItemSize, primary, secondary, onNavigate, loadChildren, expandOn, }: NavigationListProps<TData>): JSX.Element;
export declare namespace NavigationList {
    var propTypes: {
        /** A function which determines whether a navigation item is currently active. */
        isItemActive: PropTypes.Requireable<(...args: any[]) => any>;
        /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
        treeControl: PropTypes.Validator<any>;
        /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
        expandOn: PropTypes.Requireable<string>;
        /** Custom component used to render primary navigation items. */
        primary: PropTypes.Requireable<(...args: any[]) => any>;
        /** Custom component used to render secondary navigation items. */
        secondary: PropTypes.Requireable<(...args: any[]) => any>;
        /** The size of the primary navigation items. Defaults to 'large'. */
        primaryItemSize: PropTypes.Requireable<string>;
        /** The size of the secondary navigation items. Defaults to 'medium'. */
        secondaryItemSize: PropTypes.Requireable<string>;
        /** Load children asynchronously */
        loadChildren: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
