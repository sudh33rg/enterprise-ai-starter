import PropTypes from 'prop-types';
import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { SelectOwnProps } from './select';
import './select.scss';
export interface ComboboxOwnProps<T> extends SelectOwnProps<T | string> {
    trigger?: ComboboxTrigger;
    onFilterChange?: (value: string) => void;
}
export type ComboboxProps<T> = ComboboxOwnProps<T> & Omit<InputHTMLAttributes<HTMLInputElement>, keyof ComboboxOwnProps<T>>;
export declare function Combobox<T>({ placeholder, dropdownPlacement, defaultValue, value, onValueChange, onChange, children, isOpen, onOpenChange, isDisabled, onFilterChange, displayWith, id, className, maxHeight, style, controllerRef, clearable, trigger, size, panelWidth, onScrolledToEnd, ...htmlProps }: PropsWithChildren<ComboboxProps<T>>): JSX.Element;
export declare namespace Combobox {
    var propTypes: {
        /** Define the selected value. */
        value: PropTypes.Requireable<any>;
        /** Emits whenever the selected item changes. */
        onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Define the placeholder text to display when no value is selected/ */
        placeholder: PropTypes.Requireable<string>;
        /** Define if the dropdown should be placed above or below the select. */
        dropdownPlacement: PropTypes.Requireable<string>;
        /** Define the open state of the dropdown. */
        isOpen: PropTypes.Requireable<boolean>;
        /** Emits whenever the open state of the dropdown changes */
        onOpenChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Disable the select component. */
        isDisabled: PropTypes.Requireable<boolean>;
        /** Emits whenever the filter text changes. */
        onFilterChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Function used to transform values to display strings. */
        displayWith: PropTypes.Requireable<(...args: any[]) => any>;
        /** The max height of the option panel. Accepts a number of pixels, or any CSS value with units */
        maxHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /** The initial value of the component. */
        defaultValue: PropTypes.Requireable<any>;
        /** Whether the select should show a clear button. */
        clearable: PropTypes.Requireable<boolean>;
        /** The trigger that will open the dropdown. */
        trigger: PropTypes.Requireable<string>;
        /** Emitted when the user scrolls to the end of the options list */
        onScrolledToEnd: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export type ComboboxTrigger = 'input' | 'focus';
