import PropTypes from 'prop-types';
import { HTMLProps, PropsWithChildren } from 'react';
import './select-option.scss';
interface SelectOptionOwnProps<T> {
    value?: T;
    isDisabled?: boolean;
}
export type SelectOptionProps<T> = SelectOptionOwnProps<T> & Omit<HTMLProps<HTMLDivElement>, keyof SelectOptionOwnProps<T>>;
export declare function SelectOption<T>({ value, children, ...htmlProps }: PropsWithChildren<SelectOptionProps<T>>): JSX.Element;
export declare namespace SelectOption {
    var propTypes: {
        /** The value this option represents. */
        value: PropTypes.Requireable<any>;
        /** The disabled state of the item */
        isDisabled: PropTypes.Requireable<boolean>;
    };
}
export {};
