import { UxaSelectionManager } from '@ux-aspects-universal/react/selection';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { UxaTreeControl } from '../../hooks/use-tree-control/use-tree-control';
import { TreeNodeModel } from '../../models/tree-item';
import { TreeNodeProps } from '../tree-node/tree-node';
import './tree.scss';
export interface TreeProps<TData> {
    /** Custom component used to render nodes. */
    node?: FC<TreeNodeProps<TData>>;
    /** Provides data and can be used to programmatically expand/collapse nodes. */
    treeControl: UxaTreeControl<TData>;
    /** Load children asynchronously */
    loadChildren?: (item: TreeNodeModel<TData>) => Promise<void>;
    /** An instance of SelectionManager. If provided, nodes will be selectable. */
    selectionManager: UxaSelectionManager<TData> | undefined;
}
export declare function Tree<TData>({ treeControl, node, selectionManager, loadChildren, }: TreeProps<TData>): JSX.Element;
export declare namespace Tree {
    var propTypes: {
        /** Custom component used to render navigation items. */
        node: PropTypes.Requireable<(...args: any[]) => any>;
        /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
        treeControl: PropTypes.Validator<any>;
        /** Emits when activating a navigation item (click or keypress). */
        selectionManager: PropTypes.Requireable<any>;
        /** Load children asynchronously */
        loadChildren: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
