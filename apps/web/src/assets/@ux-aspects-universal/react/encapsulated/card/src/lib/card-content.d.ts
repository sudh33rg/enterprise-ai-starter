import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './card-content.scss';
export type CardContentProps = Props<'div', {
    /** The size of the content */
    size?: 'small' | 'medium';
}>;
export declare const CardContent: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "size"> & {
    /** The size of the content */
    size?: "small" | "medium";
} & React.RefAttributes<HTMLDivElement>>;
