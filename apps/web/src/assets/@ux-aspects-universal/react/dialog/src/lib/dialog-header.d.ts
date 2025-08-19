import { FC, HTMLAttributes, ReactNode } from 'react';
import './dialog-header.scss';
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement> & {
    dismissButton?: ReactNode;
    leadingButton?: ReactNode;
    subtitle?: ReactNode;
};
export declare const DialogHeader: FC<DialogHeaderProps>;
