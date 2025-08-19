import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './card-footer.scss';
export type CardFooterProps = Props<'div', {
    /** Whether the footer should appear stacked. */
    isStacked?: boolean;
    /** The leading footer content. */
    leading?: React.ReactNode;
    /** The trailing footer content. */
    trailing?: React.ReactNode;
}>;
export declare const CardFooter: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "isStacked" | "leading" | "trailing"> & {
    /** Whether the footer should appear stacked. */
    isStacked?: boolean;
    /** The leading footer content. */
    leading?: React.ReactNode;
    /** The trailing footer content. */
    trailing?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
