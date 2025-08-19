import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import './tree-item-link.scss';
export interface TreeItemLinkProps extends HTMLAttributes<HTMLSpanElement> {
    icon?: React.ReactNode;
}
export declare const TreeItemLink: FC<TreeItemLinkProps>;
