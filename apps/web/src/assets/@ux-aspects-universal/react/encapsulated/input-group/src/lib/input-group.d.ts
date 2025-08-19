import * as React from 'react';
import { HTMLAttributes } from 'react';
import './input-group.scss';
interface InputGroupOwnProps {
    /**
     * Define the disabled state of the input group.
     * @deprecated Use the isDisabled prop on the TextInput component instead.
     */
    isDisabled?: boolean;
    /** Define the size of the input group. */
    size?: 'small' | 'medium' | 'large';
    /** Define a leading addon. */
    leadingAddon?: React.ReactNode;
    /** Define a trailing addon. */
    trailingAddon?: React.ReactNode;
}
export type InputGroupProps = InputGroupOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const InputGroup: React.ForwardRefExoticComponent<InputGroupOwnProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export {};
