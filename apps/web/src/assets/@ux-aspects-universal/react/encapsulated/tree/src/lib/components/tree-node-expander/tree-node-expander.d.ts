import { FC, HTMLAttributes } from 'react';
import './tree-node-expander.scss';
interface TreeNodeExpanderProps extends HTMLAttributes<HTMLButtonElement> {
    isExpanded: boolean;
}
export declare const TreeNodeExpander: FC<TreeNodeExpanderProps>;
export {};
