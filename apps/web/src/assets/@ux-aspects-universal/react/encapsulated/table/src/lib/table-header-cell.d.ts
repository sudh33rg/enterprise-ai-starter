import * as React from 'react';
import { HTMLAttributes } from 'react';
interface TableHeaderCellOwnProps {
    align?: 'start' | 'center' | 'end';
    isSortable?: boolean;
    sortDirection?: TableHeaderCellSortDirection;
    onSortDirectionChange?: (direction: TableHeaderCellSortDirection) => void;
}
export type TableHeaderCellProps = TableHeaderCellOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TableHeaderCellOwnProps>;
export declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof TableHeaderCellOwnProps> & React.RefAttributes<HTMLDivElement>>;
export type TableHeaderCellSortDirection = 'ascending' | 'descending' | null;
export {};
