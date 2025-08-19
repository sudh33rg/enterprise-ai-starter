import * as React from 'react';
import { ReactNode } from 'react';
import './button.scss';
export interface ButtonOwnProps {
    isDisabled?: boolean;
    negative?: boolean;
    primary?: boolean;
    secondary?: boolean;
    size?: 'small' | 'medium' | 'large';
    flat?: boolean;
    label?: string;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
}
type HtmlButtonProps = ({
    href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) | ({
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>);
export type ButtonProps = ButtonOwnProps & HtmlButtonProps;
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export {};
