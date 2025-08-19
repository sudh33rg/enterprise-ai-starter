import * as React from 'react';
import { FC } from 'react';
import './tree-header.scss';
export interface TreeHeaderProps {
    /** The content to render in the header. */
    children?: React.ReactNode;
    /** Define a minimize button. */
    minimizeButton?: React.ReactNode;
}
export declare const TreeHeader: FC<TreeHeaderProps>;
