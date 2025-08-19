import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './skip-link.scss';
export type SkipLinkProps = Props<'a', {
    /** Whether the skip link is disabled */
    isDisabled?: boolean;
}>;
export declare const SkipLink: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref">, "isDisabled"> & {
    /** Whether the skip link is disabled */
    isDisabled?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
