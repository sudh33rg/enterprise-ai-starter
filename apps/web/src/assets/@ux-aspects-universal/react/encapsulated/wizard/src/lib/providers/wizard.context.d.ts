export interface WizardContextProps<T extends string | number> {
    isFirstStep: boolean;
    isLastStep: boolean;
    activeStep?: T;
    goToPreviousStep: () => void;
    goToNextStep: () => void;
    goToStep: (step: T) => void;
    onFinish?: () => void;
    isStepVisited: (step: T) => boolean;
}
export declare const WizardContext: import("react").Context<WizardContextProps<any> | undefined>;
export declare function useWizardContext<T extends string | number>(): WizardContextProps<T>;
