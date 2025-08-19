import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
export type TableCellProps = Props<'div', {
    align?: 'start' | 'center' | 'end';
}>;
export declare const TableCell: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "align"> & {
    align?: "start" | "center" | "end";
} & React.RefAttributes<HTMLDivElement>>;
