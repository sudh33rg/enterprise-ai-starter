import { DrawerProps } from '@ux-aspects-universal/react/drawer';
import { FC } from 'react';
import './navigation-drawer.scss';
export interface NavigationDrawerProps extends DrawerProps {
    /** Whether the drawer is minimized or not. */
    isMinimized?: boolean;
    /** Emit when the drawer's minimized state changes. */
    onMinimizedChange?: (isMinimized: boolean) => void;
}
export declare const NavigationDrawer: FC<NavigationDrawerProps>;
