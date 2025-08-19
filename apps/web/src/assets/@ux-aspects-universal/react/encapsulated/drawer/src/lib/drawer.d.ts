import { DrawerMode, DrawerPlacement, DrawerUnit } from '@ux-aspects-universal/core/drawer';
import { FC, HTMLAttributes } from 'react';
import './drawer.scss';
export interface DrawerOwnProps {
    /** Whether the drawer is open or not. */
    isOpen?: boolean;
    /** The size of the drawer panel. The CSS unit is determined by unit input. */
    size?: number;
    /** The minimum height/width of the drawer panel. The CSS unit is determined by unit input. */
    minSize?: number;
    /** The maximum height/width of the drawer panel. The CSS unit is determined by unit input. */
    maxSize?: number;
    /** Selected CSS unit for the size of the drawer. Default to 'pixel'. */
    unit?: DrawerUnit;
    /** The display mode of the drawer. */
    mode?: DrawerMode;
    /** Where the drawer is positioned relative to the window. */
    placement?: DrawerPlacement;
    /** Whether the drawer is resizable. */
    resizable?: boolean;
    /** Emits when size value changes. */
    onSizeChange?: (size: number) => void;
    /** Aria label for the resize handle. */
    resizeHandleAriaLabel?: string;
}
export type DrawerProps = DrawerOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const Drawer: FC<DrawerProps>;
