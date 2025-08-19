import { FC, ReactNode } from 'react';
import './login-panel.scss';
export interface LoginPanelProps {
    /** The product icon. */
    icon?: ReactNode;
    /** The product title. */
    productTitle?: ReactNode;
    /** The brand logo. */
    brandImage?: ReactNode;
    /** The language selector. */
    languageSelect?: ReactNode;
    /** Informational links. */
    links?: ReactNode;
    children?: ReactNode;
}
export declare const LoginPanel: FC<LoginPanelProps>;
