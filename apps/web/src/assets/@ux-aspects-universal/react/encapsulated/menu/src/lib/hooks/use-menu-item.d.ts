import { ButtonHTMLAttributes, RefAttributes, RefObject } from 'react';
import { SubMenuProps } from '../components/submenu/submenu';
import { SubMenuProviderProps } from '../providers/submenu-provider';
export interface MenuItemConfig {
    /** Whether the menu item should be disabled. */
    isDisabled?: boolean;
    /** Whether the menu item triggers a submenu. */
    hasSubMenu?: boolean;
    /** Action to take on user click or enter keypress. By default, closes the menu. */
    onClick?: () => void;
}
export interface MenuItemProps {
    ref: RefObject<HTMLButtonElement>;
    buttonProps: ButtonProps;
    subMenuProps: SubMenuProps;
    subMenuProviderProps: SubMenuProviderProps;
}
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>;
export declare function useMenuItem({ isDisabled, hasSubMenu, onClick: customOnClick, }: MenuItemConfig): MenuItemProps;
