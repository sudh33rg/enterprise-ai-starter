import { FC, ReactNode } from 'react';
import './login-page.scss';
export interface LoginPageProps {
    /** Width of the container as a CSS value. Default: 100vw. */
    width?: string;
    /** Height of the container as a CSS value. Default: 100vh. */
    height?: string;
    /** The backdrop to display behind the login panel. */
    backdrop?: ReactNode;
    /** The leading footer content. */
    leadingFooter?: ReactNode;
    /** The trailing footer content. */
    trailingFooter?: ReactNode;
    children?: ReactNode;
}
export declare const LoginPage: FC<LoginPageProps>;
