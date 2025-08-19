import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './checkbox.scss';
export type CheckboxProps = Props<'input', {
    /** Whether the checkbox is checked. */
    checked?: boolean;
    /** Whether the checkbox is checked. */
    isChecked?: boolean;
    /** Whether the checkbox is indeterminate. */
    isIndeterminate?: boolean;
    /** Whether the checkbox is disabled. */
    isDisabled?: boolean;
    /** Whether the checkbox is readonly. */
    isReadonly?: boolean;
    /** The value associated with this checkbox */
    value?: string;
    /** Emits whenever the selection state changes. */
    onCheckedChange?: (isChecked: boolean) => void;
    /** The initial value of the component. */
    defaultChecked?: boolean;
    /** Workaround for missing `inert` attribute in React types: https://github.com/facebook/react/issues/17157 */
    inert?: boolean;
}>;
/**
 * The `<Checkbox>` component provides the same functionality as a native `<input type="checkbox">`
 * enhanced with Micro Focus Design styling.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "checked" | "value" | "defaultChecked" | "isChecked" | "isIndeterminate" | "isDisabled" | "isReadonly" | "onCheckedChange" | "inert"> & {
    /** Whether the checkbox is checked. */
    checked?: boolean;
    /** Whether the checkbox is checked. */
    isChecked?: boolean;
    /** Whether the checkbox is indeterminate. */
    isIndeterminate?: boolean;
    /** Whether the checkbox is disabled. */
    isDisabled?: boolean;
    /** Whether the checkbox is readonly. */
    isReadonly?: boolean;
    /** The value associated with this checkbox */
    value?: string;
    /** Emits whenever the selection state changes. */
    onCheckedChange?: (isChecked: boolean) => void;
    /** The initial value of the component. */
    defaultChecked?: boolean;
    /** Workaround for missing `inert` attribute in React types: https://github.com/facebook/react/issues/17157 */
    inert?: boolean;
} & React.RefAttributes<HTMLLabelElement>>;
