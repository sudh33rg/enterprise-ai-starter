import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './breadcrumb-link.scss';
export interface BreadcrumbButtonProps extends Props<'a'> {
    href?: string;
    icon: React.ReactNode;
    index: number;
    isLast: boolean;
    separator?: ((index: number) => React.ReactNode) | React.ReactNode;
}
export declare const BreadcrumbButton: React.ForwardRefExoticComponent<BreadcrumbButtonProps & React.RefAttributes<HTMLAnchorElement>>;
