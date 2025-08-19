import * as React from 'react';
import './icon-button.scss';
export interface IconButtonOwnProps {
    isDisabled?: boolean;
    isCircular?: boolean;
    negative?: boolean;
    primary?: boolean;
    secondary?: boolean;
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    flat?: boolean;
    icon: React.ReactNode;
}
type HtmlIconButtonProps = ({
    href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) | ({
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>);
export type IconButtonProps = IconButtonOwnProps & HtmlIconButtonProps;
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export {};
