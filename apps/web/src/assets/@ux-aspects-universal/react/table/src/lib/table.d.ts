import * as React from 'react';
import { HTMLAttributes } from 'react';
import './table.scss';
export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'medium' | 'large' | 'extra-large';
    isEmbedded?: boolean;
    isStriped?: boolean;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>;
