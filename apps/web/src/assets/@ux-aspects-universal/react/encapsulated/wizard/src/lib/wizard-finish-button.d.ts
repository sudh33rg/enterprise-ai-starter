import { FC, ReactNode } from 'react';
export interface WizardFinishButtonProps {
    /** Whether to show the button. This overrides the default behavior. */
    visible?: boolean;
    children?: ReactNode;
}
export declare const WizardFinishButton: FC<WizardFinishButtonProps>;
