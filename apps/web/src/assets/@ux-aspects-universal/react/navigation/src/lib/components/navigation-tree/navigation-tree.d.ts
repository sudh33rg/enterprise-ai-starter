import { UxaTreeControl } from '@ux-aspects-universal/react/tree';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { NavigationTreeItem } from '../../models/navigation-item';
import { NavigationItemProps } from '../navigation-item/navigation-item';
import './navigation-tree.scss';
export interface NavigationTreeProps<TData> {
    /** A function which determines whether a navigation item is currently active. */
    isItemActive?: (item: NavigationTreeItem<TData>) => boolean;
    /** Custom component used to render navigation items. */
    node?: FC<NavigationItemProps<TData>>;
    /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
    treeControl: UxaTreeControl<TData>;
    /** The size of the tree items. Default to 'medium'. */
    itemSize?: 'small' | 'medium' | 'large';
    /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
    expandOn?: 'item' | 'chevron';
    /** Emits when activating a navigation item (click or keypress). */
    onNavigate?: (item: NavigationTreeItem<TData>) => void;
    /** Load children asynchronously */
    loadChildren?: (node: NavigationTreeItem<TData>) => Promise<void>;
}
export declare function NavigationTree<TData>({ treeControl, node, itemSize, isItemActive, onNavigate, loadChildren, expandOn, }: NavigationTreeProps<TData>): JSX.Element;
export declare namespace NavigationTree {
    var propTypes: {
        /** A function which determines whether a navigation item is currently active. */
        isItemActive: PropTypes.Requireable<(...args: any[]) => any>;
        /** Custom component used to render navigation items. */
        node: PropTypes.Requireable<(...args: any[]) => any>;
        /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
        expandOn: PropTypes.Requireable<string>;
        /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
        treeControl: PropTypes.Validator<any>;
        /** The size of the tree items. Default to 'medium'. */
        itemSize: PropTypes.Requireable<string>;
        /** Emits when activating a navigation item (click or keypress). */
        onNavigate: PropTypes.Requireable<(...args: any[]) => any>;
        /** Load children asynchronously */
        loadChildren: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
