import { PropsWithChildren } from 'react';
export interface MenuToggleItemControlOwnProps {
    isChecked?: boolean;
    isDisabled?: boolean;
}
export type MenuToggleItemControlProps = PropsWithChildren<MenuToggleItemControlOwnProps>;
