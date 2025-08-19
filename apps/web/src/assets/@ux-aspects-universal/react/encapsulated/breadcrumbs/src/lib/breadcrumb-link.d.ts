import * as React from 'react';
import './breadcrumb-link.scss';
export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    index: number;
    isLast: boolean;
    separator?: ((index: number) => React.ReactNode) | React.ReactNode;
    isOverflowing?: boolean;
}
export declare const BreadcrumbLink: React.ForwardRefExoticComponent<BreadcrumbLinkProps & React.RefAttributes<HTMLAnchorElement>>;
