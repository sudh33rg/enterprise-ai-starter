import { FC, HTMLAttributes, RefObject } from 'react';
import './submenu.scss';
export interface SubMenuOwnProps {
    isOpen?: boolean;
    onClose?: () => void;
    triggerRef: RefObject<HTMLElement>;
}
export type SubMenuProps = SubMenuOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof SubMenuOwnProps>;
export declare const SubMenu: FC<SubMenuProps>;
