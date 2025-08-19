import * as React from 'react';
import { InputHTMLAttributes, RefAttributes } from 'react';
import './text-input.scss';
interface TextInputOwnProps {
    size?: 'small' | 'medium' | 'large';
    type?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
}
export type TextInputProps = TextInputOwnProps & RefAttributes<HTMLInputElement> & Omit<InputHTMLAttributes<HTMLInputElement>, keyof TextInputOwnProps>;
export declare const TextInput: React.ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
