import * as React from 'react';
import { HTMLProps } from 'react';
import './checkbox-group.scss';
interface CheckboxGroupOwnProps {
    /** Disables all checkboxes. */
    isDisabled?: boolean;
    /** Whether the checkbox group is readonly */
    isReadonly?: boolean;
    /** The orientation of the checkbox buttons. */
    orientation?: 'horizontal' | 'vertical';
    /** The space between checkboxes. */
    density?: 'compact' | 'regular' | 'spacious';
    /** The currently selected checkboxes. */
    value?: string[];
    /** Function for handling updates to the selected checkboxes. */
    onValueChange?: (value: string[]) => void;
}
export type CheckboxGroupProps = CheckboxGroupOwnProps & HTMLProps<HTMLDivElement>;
export declare const CheckboxGroup: React.ForwardRefExoticComponent<Omit<CheckboxGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
