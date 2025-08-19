import { ReactElement } from 'react';
import { WizardStepProps } from './wizard-step';
import './wizard-step-list.scss';
export interface WizardStepListProps<T extends string | number> {
    /** The steps to display */
    steps?: ReactElement<WizardStepProps<T>>[];
}
export declare function WizardStepList<T extends string | number>({ steps, }: WizardStepListProps<T>): JSX.Element;
