import * as React from 'react';
import { FC, HTMLAttributes, RefObject } from 'react';
import { MenuAlignment } from '../../types/menu-alignment';
import { MenuPlacement } from '../../types/menu-placement';
import './menu.scss';
interface MenuOwnProps {
    isOpen?: boolean;
    placement?: MenuPlacement;
    alignment?: MenuAlignment;
    hasArrow?: boolean;
    onClose?: (event?: MouseEvent | React.FocusEvent) => void;
    triggerRef: RefObject<HTMLElement>;
    anchorRef?: RefObject<HTMLElement>;
    offsetX?: number;
    offsetY?: number;
    closeOnBlur?: boolean;
}
export type MenuProps = MenuOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof MenuOwnProps>;
export declare const Menu: FC<MenuProps>;
export {};
