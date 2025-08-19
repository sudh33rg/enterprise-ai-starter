import { RadioGroupState } from '@react-stately/radio';
import { ChangeEventHandler } from 'react';
interface RadioContextValue {
    state: RadioGroupState;
    isDisabled?: boolean;
    isReadonly?: boolean;
    onChange?: ChangeEventHandler;
}
export declare const RadioProvider: import("react").FC<import("react").PropsWithChildren<RadioContextValue>>, useRadioContext: () => RadioContextValue;
export {};
