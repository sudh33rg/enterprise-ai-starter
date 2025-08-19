import { FC, HTMLProps } from 'react';
interface StepButtonOwnProps {
    direction: 'up' | 'down';
    isDisabled: boolean;
    stepperType: 'chevron' | 'plus-minus';
}
export type StepButtonProps = StepButtonOwnProps & HTMLProps<HTMLDivElement>;
export declare const StepButton: FC<StepButtonProps>;
export {};
