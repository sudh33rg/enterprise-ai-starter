import PropTypes from 'prop-types';
import * as React from 'react';
import { InputHTMLAttributes, PropsWithChildren, RefObject } from 'react';
import { SelectController } from './hooks/use-select';
import { SelectOptionProps } from './select-option';
import './select.scss';
export interface SelectOwnProps<T> {
    /** Value of the control. */
    value?: T;
    /** Text to show when no value is selected. */
    placeholder?: string | React.ReactElement;
    /** Where the dropdown should be aligned relative to the control. */
    dropdownPlacement?: 'auto' | 'top' | 'bottom';
    /** Whether the dropdown is visible. */
    isOpen?: boolean;
    /** Emitted when the user opens or closes the options panel */
    onOpenChange?: (isOpen: boolean) => void;
    /** Define a custom renderer for the selected value. */
    valueRender?: (value: T) => React.ReactNode;
    /** Whether the control is disabled. */
    isDisabled?: boolean;
    /** Emitted when the user modifies the value. */
    onValueChange?: (value: T | undefined) => void;
    /** The max height of the option panel. Accepts a number of pixels, or any CSS value with units. */
    maxHeight?: number | string;
    /** Whether the select should show a clear button. */
    clearable?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    displayWith?: (value: T) => string;
    controllerRef?: RefObject<SelectController>;
    defaultValue?: SelectOwnProps<T>['value'];
    size?: 'small' | 'medium' | 'large';
    panelWidth?: number | string;
    /** Emitted when the user scrolls to the end of the options list */
    onScrolledToEnd?: () => void;
}
export type SelectProps<T> = SelectOwnProps<T> & Omit<InputHTMLAttributes<HTMLInputElement>, keyof SelectOwnProps<T>>;
export declare function Select<T = string>({ placeholder, dropdownPlacement, defaultValue, value, onValueChange, onChange, valueRender, children, isOpen, onOpenChange, isDisabled, id, className, style, ariaLabelledBy, maxHeight, displayWith, controllerRef, clearable, size, panelWidth, onScrolledToEnd, ...htmlProps }: PropsWithChildren<SelectProps<T>>): JSX.Element;
export declare namespace Select {
    var propTypes: {
        /** Define the selected value. */
        value: PropTypes.Requireable<any>;
        /** Define the placeholder to display when no value is selected/ */
        placeholder: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>;
        /** Define if the dropdown should be placed above or below the select. */
        dropdownPlacement: PropTypes.Requireable<string>;
        /** Define the open state of the dropdown. */
        isOpen: PropTypes.Requireable<boolean>;
        /** Emits whenever the open state of the dropdown changes */
        onOpenChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Render the selected value */
        valueRender: PropTypes.Requireable<(...args: any[]) => any>;
        /** Disable the select component. */
        isDisabled: PropTypes.Requireable<boolean>;
        /** Emits whenever the selected item changes. */
        onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** The max height of the option panel. Accepts a number of pixels, or any CSS value with units */
        maxHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /** Function used to transform values to display strings. */
        displayWith: PropTypes.Requireable<(...args: any[]) => any>;
        /** The initial value of the component. */
        defaultValue: PropTypes.Requireable<any>;
        /** Whether the select should show a clear button. */
        clearable: PropTypes.Requireable<boolean>;
        /** Emitted when the user scrolls to the end of the options list */
        onScrolledToEnd: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export type SelectOptionInstance<T> = React.ReactElement<PropsWithChildren<SelectOptionProps<T>>>;
