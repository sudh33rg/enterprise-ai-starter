import { Modality } from '@react-aria/interactions';
/** Sets the focus of a element with the given modality */
export declare function focusWithModality(elementRef: HTMLElement, modality: Modality): void;
export declare const detectModality: (event: React.MouseEvent) => Modality;
