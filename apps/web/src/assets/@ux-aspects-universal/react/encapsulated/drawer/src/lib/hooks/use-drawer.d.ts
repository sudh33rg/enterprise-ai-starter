import { HTMLAttributes } from 'react';
import { DrawerOwnProps } from '../drawer';
interface DrawerState {
    drawerProps: HTMLAttributes<HTMLDivElement>;
    drawerWrapperProps: HTMLAttributes<HTMLDivElement>;
    onResize: (size: number) => void;
}
export interface UseDrawerProps extends DrawerOwnProps {
    ref: React.RefObject<HTMLDivElement>;
}
export declare function useDrawer({ ref, isOpen, size, unit, mode, placement, resizable, onSizeChange, }: UseDrawerProps): DrawerState;
export {};
