import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import { ReactElement, Ref } from 'react';
import './inline-edit.scss';
export type InlineEditProps<T> = Props<'div', {
    /** The current value of the underlying control. */
    value?: T;
    /** The placeholder text to display when no value is present. */
    placeholder?: string;
    /** The size of the inline edit component. */
    size?: 'small' | 'medium' | 'large';
    /** Whether the control is currently in an editable state. */
    isEditing?: boolean;
    /** Whether the control can be saved. */
    canSave?: boolean;
    /** Whether the control can be reset. */
    canReset?: boolean;
    /** Format the value for display */
    formatter?: (value?: T) => string | string[];
    /** Event emitted when the editing state changes. */
    onEditingChange?: (editing: boolean) => void;
    /** Event emitted when the value should be reset. */
    onReset?: () => void;
    /** Event emitted when the value should be saved. */
    onSave?: () => void;
    /** Event emitted when the value should be cancelled. */
    onCancel?: (value: T) => void;
    /** The aria label for the edit button. */
    editButtonAriaLabel?: string;
    /** The aria label for the save button. */
    saveButtonAriaLabel?: string;
    /** The aria label for the cancel button. */
    cancelButtonAriaLabel?: string;
    /** The aria label for the reset button. */
    resetButtonAriaLabel?: string;
    /** Customize the save button. */
    saveButton?: () => React.ReactNode;
    /** Customize the cancel button. */
    cancelButton?: () => React.ReactNode;
    /** Customize the reset button. */
    resetButton?: () => React.ReactNode;
    /** Customize the edit button. */
    editButton?: () => React.ReactNode;
}>;
declare function InlineEditFn<T>({ value, isEditing, canSave, canReset, size, placeholder, formatter, editButtonAriaLabel, saveButtonAriaLabel, cancelButtonAriaLabel, resetButtonAriaLabel, onEditingChange, onReset, onSave, onCancel, children, saveButton, cancelButton, resetButton, editButton, ...props }: InlineEditProps<T>, ref: Ref<HTMLDivElement>): ReactElement;
export declare const InlineEdit: <T>(props: InlineEditProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => ReturnType<typeof InlineEditFn>;
export {};
