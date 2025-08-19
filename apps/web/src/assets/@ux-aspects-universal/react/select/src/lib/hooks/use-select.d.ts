import { ActiveDescendantKeyManagerController } from '@ux-aspects-universal/react/a11y';
import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import { ChangeEventHandler, HTMLProps, RefObject } from 'react';
export interface SelectConfig<T> {
    id?: string;
    ariaLabelledBy?: string;
    value?: T;
    onValueChange?: (value?: T) => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    dropdownPlacement?: 'auto' | 'top' | 'bottom';
    isDisabled?: boolean;
    displayWith?: (value: T) => string;
    onPress?: (inputRef: RefObject<HTMLInputElement>) => void;
    onClose?: () => void;
    onScrolledToEnd?: () => void;
    onSelectOption?: (value: T | undefined, inputRef: RefObject<HTMLInputElement>) => void;
    maxHeight?: number | string;
    controllerRef?: RefObject<SelectController>;
    defaultValue?: SelectConfig<T>['value'];
    children: React.ReactNode;
    clearable?: boolean;
    panelWidth?: number | string;
}
export interface UseSelect<T> {
    triggerProps: TriggerProps;
    inputProps: InputProps;
    buttonProps: ButtonProps;
    listboxProps: ListboxProps;
    valueProps: HTMLProps<HTMLDivElement>;
    selectValue?: T | string;
    open: () => void;
    isDropdownOpen?: boolean;
    close: () => void;
    clear: (event?: React.MouseEvent | React.KeyboardEvent) => void;
    onSelect: (value: T) => void;
    isFocused: boolean;
    getValueAsString: (option?: T | string) => string;
    activeDescendantRef: RefObject<ActiveDescendantKeyManagerController>;
    showClearButton: boolean;
    panelWidth?: number | string;
}
export type TriggerProps = Props<'div'> & {
    ref: RefObject<HTMLDivElement>;
};
export type ButtonProps = Props<'div'>;
export type ListboxProps = Props<'div', {
    ref: RefObject<HTMLDivElement>;
    'data-overlay': boolean;
}>;
export type InputProps = Props<'input'> & {
    ref: RefObject<HTMLInputElement>;
};
export declare function useSelect<T>({ id, ariaLabelledBy, value, onValueChange, onChange, isOpen, onOpenChange, dropdownPlacement, isDisabled, onPress, onClose, onSelectOption, maxHeight, displayWith, controllerRef, defaultValue, children, clearable, panelWidth, onScrolledToEnd, }: SelectConfig<T>): UseSelect<T>;
export interface SelectController {
    activeDecendantRef: React.RefObject<ActiveDescendantKeyManagerController>;
    addOpenListener: (callback: () => void) => void;
    removeOpenListener: (callback: () => void) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    focus: () => void;
}
