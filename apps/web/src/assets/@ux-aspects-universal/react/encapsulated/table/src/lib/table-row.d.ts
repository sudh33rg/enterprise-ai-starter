import * as React from 'react';
import { HTMLAttributes } from 'react';
export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
    isSelected?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLDivElement>>;
