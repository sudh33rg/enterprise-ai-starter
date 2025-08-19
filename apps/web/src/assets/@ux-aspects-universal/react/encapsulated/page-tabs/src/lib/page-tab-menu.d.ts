import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import { PageTabProps } from './page-tab';
import './page-tab-menu.scss';
export type PageTabMenuProps = Props<'div', {
    tabs: React.ReactElement<PageTabProps>[];
    closeMenu: () => void;
}>;
export declare const PageTabMenu: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "tabs" | "closeMenu"> & {
    tabs: React.ReactElement<PageTabProps>[];
    closeMenu: () => void;
} & React.RefAttributes<HTMLDivElement>>;
