import { FunctionComponentElement } from 'react';
import { BreadcrumbProps } from '../breadcrumb';
export interface ResponsiveBreadcrumbsState {
    leadingBreadcrumb?: FunctionComponentElement<BreadcrumbProps>;
    menuBreadcrumbs: FunctionComponentElement<BreadcrumbProps>[];
    trailingBreadcrumbs: FunctionComponentElement<BreadcrumbProps>[];
}
export declare const useResponsiveBreadcrumbs: (breadcrumbsRef: React.RefObject<HTMLDivElement>, children?: JSX.Element | JSX.Element[], maxBreadcrumbs?: number, isResponsive?: boolean) => ResponsiveBreadcrumbsState;
