import { FC, HTMLAttributes } from 'react';
import { MenuToggleItemControlType } from '../../types/menu-toggle-item-control-type';
import { MenuItemOwnProps } from '../menu-item/menu-item';
import './menu-toggle-item.scss';
export interface MenuToggleItemOwnProps {
    /** Whether to use a checkbox or a toggle switch appearance. */
    controlType?: MenuToggleItemControlType;
    /** The state of the toggle. */
    isChecked?: boolean;
    /** Whether the menu item is disabled. */
    isDisabled?: boolean;
    /** Emits when the user changes the state of the toggle. */
    onCheckedChange?: (isChecked: boolean) => void;
}
export type MenuToggleItemProps = MenuToggleItemOwnProps & Omit<HTMLAttributes<HTMLButtonElement>, keyof MenuItemOwnProps>;
export declare const MenuToggleItem: FC<MenuToggleItemProps>;
