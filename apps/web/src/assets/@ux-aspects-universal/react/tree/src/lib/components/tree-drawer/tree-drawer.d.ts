import { DrawerProps } from '@ux-aspects-universal/react/drawer';
import { FC } from 'react';
import './tree-drawer.scss';
export interface TreeDrawerProps extends DrawerProps {
    /** Whether the drawer is minimized or not. */
    isMinimized?: boolean;
    /** Emit when the drawer's minimized state changes. */
    onMinimizedChange?: (isMinimized: boolean) => void;
}
export declare const TreeDrawer: FC<TreeDrawerProps>;
