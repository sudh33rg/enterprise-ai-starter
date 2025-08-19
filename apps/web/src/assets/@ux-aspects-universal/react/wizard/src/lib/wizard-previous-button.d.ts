import { FC, ReactNode } from 'react';
export interface WizardPreviousButtonProps {
    /** Whether to show the button. This overrides the default behavior. */
    visible?: boolean;
    children?: ReactNode;
}
export declare const WizardPreviousButton: FC<WizardPreviousButtonProps>;
