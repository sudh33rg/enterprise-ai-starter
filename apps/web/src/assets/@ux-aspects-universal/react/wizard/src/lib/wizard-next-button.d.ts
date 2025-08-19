import { FC, ReactNode } from 'react';
export interface WizardNextButtonProps {
    /** Whether to show the button. This overrides the default behavior. */
    visible?: boolean;
    children?: ReactNode;
}
export declare const WizardNextButton: FC<WizardNextButtonProps>;
