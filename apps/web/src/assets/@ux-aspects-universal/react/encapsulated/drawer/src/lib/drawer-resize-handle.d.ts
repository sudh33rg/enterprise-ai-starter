import { DrawerPlacement, DrawerUnit } from '@ux-aspects-universal/core/drawer';
import { FC, HTMLAttributes } from 'react';
import './drawer-resize-handle.scss';
export interface DrawerResizeHandleOwnProps {
    placement: DrawerPlacement;
    unit: DrawerUnit;
    size: number;
    minSize?: number;
    maxSize?: number;
    onSizeChange?: (size: number) => void;
    ariaLabel?: string;
}
export type DrawerResizeHandleProps = DrawerResizeHandleOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const DrawerResizeHandle: FC<DrawerResizeHandleProps>;
