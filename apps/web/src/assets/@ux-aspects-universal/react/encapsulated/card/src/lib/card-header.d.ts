import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './card-header.scss';
export type CardHeaderProps = Props<'div', {
    /** The avatar to present in the card header */
    avatar?: React.ReactElement;
    /** The thumbnail to present in the card header */
    thumbnail?: React.ReactElement;
}>;
export declare const CardHeader: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "avatar" | "thumbnail"> & {
    /** The avatar to present in the card header */
    avatar?: React.ReactElement;
    /** The thumbnail to present in the card header */
    thumbnail?: React.ReactElement;
} & React.RefAttributes<HTMLDivElement>>;
