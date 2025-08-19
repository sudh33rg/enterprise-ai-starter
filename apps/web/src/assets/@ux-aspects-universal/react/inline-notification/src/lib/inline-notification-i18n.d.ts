import { UxaInlineNotificationI18n } from '@ux-aspects-universal/core/i18n';
import * as React from 'react';
import { FC, ReactNode } from 'react';
export declare const InlineNotificationI18nContext: React.Context<UxaInlineNotificationI18n>;
interface InlineNotificationI18nProviderProps {
    value: UxaInlineNotificationI18n;
    children: ReactNode;
}
export declare const InlineNotificationI18nProvider: FC<InlineNotificationI18nProviderProps>;
export declare const useInlineNotificationI18n: () => UxaInlineNotificationI18n;
export {};
