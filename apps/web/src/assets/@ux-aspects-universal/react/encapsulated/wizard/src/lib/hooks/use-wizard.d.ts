import { ReactElement } from 'react';
import { WizardContextProps } from '../providers/wizard.context';
import { WizardStepProps } from '../wizard-step';
interface UseWizardConfig<T extends number | string> {
    activeStep?: T;
    steps?: ReactElement<WizardStepProps<T>>[];
    onActiveStepChange?: (id: T) => void;
    onFinish?: () => void;
}
export declare function useWizard<T extends number | string>({ steps, activeStep, onFinish, onActiveStepChange, }: UseWizardConfig<T>): WizardContextProps<T>;
export {};
