import { HTMLAttributes } from 'react';
import { DrawerResizeHandleOwnProps } from '../drawer-resize-handle';
interface DrawerResizeHandleState {
    drawerResizeHandleProps: HTMLAttributes<HTMLDivElement>;
}
export interface UseDrawerResizeHandleProps extends DrawerResizeHandleOwnProps {
    ref: React.RefObject<HTMLDivElement>;
}
export declare function useDrawerResizeHandle({ ref, size, minSize, maxSize, placement, onSizeChange, unit, ariaLabel, }: UseDrawerResizeHandleProps): DrawerResizeHandleState;
export {};
