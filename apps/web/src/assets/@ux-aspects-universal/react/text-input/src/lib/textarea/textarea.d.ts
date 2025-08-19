import { ForwardRefExoticComponent, RefAttributes, TextareaHTMLAttributes } from 'react';
import './textarea.scss';
interface TextAreaOwnProps {
    isDisabled?: boolean;
    onValueChange?: (value: string) => void;
}
export type TextAreaProps = TextAreaOwnProps & RefAttributes<HTMLTextAreaElement> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof TextAreaOwnProps>;
export declare const TextArea: ForwardRefExoticComponent<TextAreaProps>;
export {};
