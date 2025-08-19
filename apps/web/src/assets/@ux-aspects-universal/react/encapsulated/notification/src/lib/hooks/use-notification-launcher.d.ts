import { NotificationConfig } from '@ux-aspects-universal/core/notification';
import { ReactNode } from 'react';
import { UxaNotificationRef } from '../models/notification-ref';
export declare function useNotificationLauncher(): NotificationLauncher;
export interface NotificationLauncher {
    notifications: UxaNotificationRef[];
    open: (component: ReactNode, config?: NotificationConfig) => UxaNotificationRef;
    openToast: (component: ReactNode, config?: NotificationConfig) => UxaNotificationRef;
    dismiss: (ref: UxaNotificationRef) => void;
    dismissAll: () => void;
    remove: (ref: UxaNotificationRef) => void;
}
