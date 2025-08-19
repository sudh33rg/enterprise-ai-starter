import * as React from 'react';
import { HTMLAttributes } from 'react';
import './masthead-title.scss';
export interface MastheadTitleOwnProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the element type to render the masthead title with. */
    is?: string;
    variant?: 'primary' | 'secondary';
}
type HtmlProps = ({
    href?: never;
} & React.HTMLAttributes<HTMLDivElement>) | ({
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>);
export type MastheadTitleProps = MastheadTitleOwnProps & Omit<HtmlProps, keyof MastheadTitleOwnProps>;
export declare const MastheadTitle: React.ForwardRefExoticComponent<MastheadTitleOwnProps & Omit<HtmlProps, keyof MastheadTitleOwnProps> & React.RefAttributes<HTMLElement>>;
interface MastheadTitleSecondaryOwnProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the element type to render the masthead title with. */
    is?: string;
}
export type MastheadTitleSecondaryProps = MastheadTitleSecondaryOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof MastheadTitleSecondaryOwnProps>;
export declare const MastheadTitleSecondary: React.ForwardRefExoticComponent<MastheadTitleSecondaryOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof MastheadTitleSecondaryOwnProps> & React.RefAttributes<HTMLElement>>;
export {};
