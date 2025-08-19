import { ReactElement } from 'react';
import { WizardStepProps } from './wizard-step';
export interface WizardStepButtonProps<T extends string | number> {
    /** The step to display */
    step: ReactElement<WizardStepProps<T>>;
    /** The index of the step */
    index?: number;
}
export declare function WizardStepButton<T extends string | number>({ step, }: WizardStepButtonProps<T>): JSX.Element;
