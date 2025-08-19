import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import './app-layout.scss';
export interface AppContentLayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** The content to display in the secondary masthead region */
    secondaryMasthead?: React.ReactNode;
    /** @deprecated The content to display in the side navigation region */
    sideNavigation?: React.ReactNode;
}
/**
 * The `<AppContentLayout>` component provides the ability to allow secondary navigation and/or side menu to appear on some routes
 * or have different items depending on the active route.
 */
export declare const AppContentLayout: FC<AppContentLayoutProps>;
