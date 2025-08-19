import { FC, HTMLAttributes } from 'react';
import './dialog-footer.scss';
export interface DialogFooterOwnProps {
    hasDivider?: boolean;
}
export type DialogFooterProps = DialogFooterOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof DialogFooterOwnProps>;
export declare const DialogFooter: FC<DialogFooterProps>;
