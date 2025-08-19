import type { NotificationConfig } from '@ux-aspects-universal/core/notification';
import { ReactNode, RefObject } from 'react';
export declare class UxaNotificationRef {
    readonly content: ReactNode;
    readonly configuration: NotificationConfig;
    private readonly _dismissFn;
    /** Whether the notification is open */
    open: boolean;
    /** @internal A unique key for each notification */
    readonly _id: number;
    /** @internal Store the dismiss event listeners */
    readonly _callbacks: (() => void)[];
    /** @internal Store the current notification state, used for animations */
    _state: NotificationState;
    /** @internal store the ref */
    _ref?: RefObject<HTMLDivElement | null>;
    constructor(content: ReactNode, configuration: NotificationConfig, _dismissFn: (ref: UxaNotificationRef) => void);
    dismiss(): void;
    onDismiss(callback: () => void): void;
}
export declare enum NotificationState {
    Enter = 0,
    Shown = 1,
    Exit = 2
}
