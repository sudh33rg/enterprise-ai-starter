import * as React from 'react';
import { FC, ReactNode } from 'react';
export interface AlertI18n {
    dismissButtonAriaLabel?: string;
}
export declare const defaultAlertI18n: AlertI18n;
export declare const AlertI18nContext: React.Context<AlertI18n>;
interface AlertI18nProviderProps {
    value: AlertI18n;
    children: ReactNode;
}
export declare const AlertI18nProvider: FC<AlertI18nProviderProps>;
export declare const useAlertI18n: () => AlertI18n;
export {};
