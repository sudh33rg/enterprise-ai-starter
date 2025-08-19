import * as React from 'react';
import { FC } from 'react';
import './navigation-header.scss';
export interface NavigationHeaderProps {
    /** The content to render in the header. */
    children?: React.ReactNode;
    /** Define a minimize button. */
    minimizeButton?: React.ReactNode;
}
export declare const NavigationHeader: FC<NavigationHeaderProps>;
