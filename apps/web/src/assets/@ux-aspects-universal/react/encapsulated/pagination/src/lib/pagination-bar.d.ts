import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import './pagination-bar.scss';
export type PaginationBarProps = Props<'div', {
    /** The alignment of the pagination bar. */
    alignment?: 'center' | 'end';
    /** The pagination page size dropdown. */
    dropdown?: ReactElement;
    /** The total item count. */
    itemCount?: ReactNode;
    /** The children to render. */
    children?: ReactNode;
}>;
export declare const PaginationBar: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "alignment" | "dropdown" | "itemCount"> & {
    /** The alignment of the pagination bar. */
    alignment?: "center" | "end";
    /** The pagination page size dropdown. */
    dropdown?: ReactElement;
    /** The total item count. */
    itemCount?: ReactNode;
    /** The children to render. */
    children?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
