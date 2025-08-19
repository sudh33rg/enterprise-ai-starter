import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import './app-layout.scss';
export interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** The content to display in the masthead region */
    masthead?: React.ReactNode;
    /** The content to display in the secondary masthead region */
    secondaryMasthead?: React.ReactNode;
    /** @deprecated The content to display in the side navigation region */
    sideNavigation?: React.ReactNode;
    /** The content to display in the alerts region */
    alerts?: React.ReactNode;
}
export declare const AppLayout: FC<AppLayoutProps>;
