import { UxaSelectionManager } from '@ux-aspects-universal/react/selection';
import { FC } from 'react';
import { TreeNode, TreeNodeProps } from '../../components/tree-node/tree-node';
import { TreeNodeModel } from '../../models/tree-item';
import { UxaTreeControl } from '../use-tree-control/use-tree-control';
type TreeItemNode = {
    title: string;
    id?: string;
    children?: TreeItemNode[];
};
export interface TreeContextData<TData> {
    /** The navigation tree control. */
    treeControl?: UxaTreeControl<TData>;
    /** The secondary navigation item */
    SecondaryItem: FC<TreeNodeProps<TData>> | typeof TreeNode;
    /** Callback that is fired whenever an item is navigated to */
    onNavigate?: (item: TreeNodeModel<TData>) => void;
    /** The function to check if an item is active */
    isItemActive?: (item: TreeNodeModel<TData>) => boolean;
    /** The selection manager */
    selectionManager?: UxaSelectionManager<TData>;
    /** The selected tree items */
    selected?: TreeItemNode[];
    /** The function to control single and multiple selection */
    selections?: (item: TreeNodeModel<TData>, hasChildren: boolean, isSelected?: boolean, mode?: string) => void;
    /** The document direction */
    isRtl?: boolean;
    /** The function to load children */
    loadChildren?: (item: TreeNodeModel<TData>) => Promise<void>;
}
export declare function createTreeContext<TData = unknown>(): React.Context<TreeContextData<TData>>;
export declare function useTreeContext<TData = unknown>(): TreeContextData<TData>;
export {};
