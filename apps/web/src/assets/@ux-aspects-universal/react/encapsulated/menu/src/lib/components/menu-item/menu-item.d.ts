import * as React from 'react';
import { FC, HTMLAttributes, ReactElement } from 'react';
import './menu-item.scss';
export interface MenuItemOwnProps {
    icon?: React.ReactNode;
    isDisabled?: boolean;
    subMenu?: ReactElement;
    onClick?: () => void;
}
export type MenuItemProps = MenuItemOwnProps & Omit<HTMLAttributes<HTMLButtonElement>, keyof MenuItemOwnProps>;
export declare const MenuItem: FC<MenuItemProps>;
