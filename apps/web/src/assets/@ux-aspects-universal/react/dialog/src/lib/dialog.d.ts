import { OverlayProps } from '@react-aria/overlays';
import type { DialogConfig, DialogStatus } from '@ux-aspects-universal/core/dialog';
import { ThemeName } from '@ux-aspects-universal/react/theming';
import * as React from 'react';
import { FC, HTMLProps } from 'react';
import './dialog.scss';
export interface DialogOwnProps {
    onClose?: () => void;
    icon?: React.ReactElement;
    status?: DialogStatus;
    emphasize?: boolean;
    theme?: ThemeName;
    isOpen?: boolean;
}
type DialogAriaProps = DialogConfig & Partial<OverlayProps>;
export type DialogProps = DialogOwnProps & DialogAriaProps & Omit<Omit<HTMLProps<HTMLDivElement>, keyof DialogOwnProps>, keyof DialogAriaProps>;
export declare const Dialog: FC<DialogProps>;
export {};
