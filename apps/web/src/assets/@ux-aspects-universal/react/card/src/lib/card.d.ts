import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './card.scss';
export type CardProps = Props<'div', {
    /** The image to present in the card */
    image?: React.ReactElement;
}>;
export declare const Card: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "image"> & {
    /** The image to present in the card */
    image?: React.ReactElement;
} & React.RefAttributes<HTMLDivElement>>;
