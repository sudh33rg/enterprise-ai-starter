import { Modality } from '@react-aria/interactions';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavigationItemVariant } from '../../models/navigation-item';
import './navigation-item.scss';
export type NavigationItemSize = 'small' | 'medium' | 'large';
type NavigationItemContentFn = (metadata: {
    item: NavigationItemVariant;
    isLoading: boolean;
    isFocused: boolean;
    isActive?: boolean;
    reload: () => Promise<void>;
    focus: (origin?: Modality) => void;
}) => React.ReactNode;
export interface NavigationItemProps<TData = unknown> {
    /** The object to render as navigation item. */
    item: NavigationItemVariant<TData>;
    /** Whether the navigation item is active. */
    isActive?: boolean;
    /** The navigation item's primary icon. This will remain visible when the navigation drawer is minimized. */
    icon?: React.ReactNode;
    /** Custom component which renders the title and any other content needed for the navigation item. */
    content?: React.ReactNode;
    /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
    expander?: React.ReactNode;
    /** The size of the navigation item. */
    size?: NavigationItemSize;
    /** Define a custom loading indicator */
    loadingIndicator?: React.ReactNode;
    /** Custom trailing action. */
    trailingAction?: React.ReactNode | NavigationItemContentFn;
    /** Whether the navigation item is selectable */
    isSelectable?: boolean;
}
export declare function NavigationItem<TData = unknown>({ item, isActive, expander, size, icon, content, loadingIndicator, trailingAction, isSelectable, }: NavigationItemProps<TData>): JSX.Element;
export declare namespace NavigationItem {
    var propTypes: {
        /** The object to render as navigation item. */
        item: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            title: PropTypes.Validator<string>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            data: PropTypes.Requireable<any>;
            children: PropTypes.Requireable<(PropTypes.InferProps<{}> | null | undefined)[]>;
        }>>>;
        /** Whether the navigation item is active. */
        isActive: PropTypes.Requireable<boolean>;
        /** The navigation item's primary icon. This will remain visible when the navigation drawer is minimized. */
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Custom component which renders the title and any other content needed for the navigation item. */
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
        expander: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Whether the navigation item is selectable */
        isSelectable: PropTypes.Requireable<boolean>;
    };
}
export {};
