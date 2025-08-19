import type { NotificationConfig } from '@ux-aspects-universal/core/notification';
import { ReactNode } from 'react';
import { UxaNotificationRef } from './notification-ref';
export interface NotificationContext {
    /** Dismiss all notifications. */
    dismissAll: () => void;
    /** Display a component as a notification. */
    open(component: ReactNode, config?: NotificationConfig): UxaNotificationRef;
    /** Display a component as a toast notification. */
    openToast(component: ReactNode, config?: NotificationConfig): UxaNotificationRef;
}
