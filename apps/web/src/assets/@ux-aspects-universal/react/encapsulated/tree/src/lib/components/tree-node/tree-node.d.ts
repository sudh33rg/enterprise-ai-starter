import { Modality } from '@react-aria/interactions';
import PropTypes from 'prop-types';
import * as React from 'react';
import { TreeNodeModel } from '../../models/tree-item';
import './tree-node.scss';
type TreeNodeContentFn = (metadata: {
    model: TreeNodeModel;
    isLoading: boolean;
    isFocused: boolean;
    isSelected: boolean;
    reload: () => Promise<void>;
    focus: (origin?: Modality) => void;
}) => React.ReactNode;
export interface TreeNodeProps<TData = unknown> {
    /** The object to render as navigation item. */
    model: TreeNodeModel<TData> & {
        id?: string;
    };
    /** The tree nodes item's primary icon. */
    icon?: React.ReactNode;
    /** Custom component which renders the title and any other content needed for the node. */
    content?: React.ReactNode | TreeNodeContentFn;
    /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
    expander?: React.ReactNode;
    /** Whether the node is clickable/focusable to allow selection. */
    isSelectable?: boolean;
    /** Define a custom loading indicator */
    loadingIndicator?: React.ReactNode;
    className?: string;
    /** Custom trailing action. */
    trailingAction?: React.ReactNode | TreeNodeContentFn;
}
export interface TreeItemNode {
    title: string;
    id?: string;
    children?: TreeItemNode[];
}
export declare function TreeNode<TData = unknown>({ icon, expander, content, model, isSelectable, loadingIndicator, trailingAction, className, ...props }: TreeNodeProps<TData>): JSX.Element;
export declare namespace TreeNode {
    var propTypes: {
        /** The tree node id. */
        id: PropTypes.Requireable<string>;
        /** The Tree nodes primary icon. This will remain visible when the drawer is minimized. */
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
        expander: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** The object to render as tree node. */
        model: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            id: PropTypes.Requireable<string>;
            title: PropTypes.Validator<string>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            data: PropTypes.Requireable<any>;
            children: PropTypes.Requireable<(PropTypes.InferProps<{}> | null | undefined)[]>;
        }>>>;
        /** Custom component which renders the title and any other content needed for the navigation item. */
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export {};
