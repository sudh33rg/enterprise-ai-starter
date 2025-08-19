import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import './navigation-item-link.scss';
export interface NavigationItemLinkProps extends HTMLAttributes<HTMLSpanElement> {
    icon?: React.ReactNode;
}
export declare const NavigationItemLink: FC<NavigationItemLinkProps>;
