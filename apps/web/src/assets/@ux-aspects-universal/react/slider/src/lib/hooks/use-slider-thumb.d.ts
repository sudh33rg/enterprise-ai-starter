import { RefObject } from 'react';
interface SliderThumbOptions {
    sliderRef: RefObject<HTMLDivElement>;
    value: number;
    min?: number;
    max?: number;
    lowerBound?: number;
    upperBound?: number;
    ariaDescribedby?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    isDisabled?: boolean;
    onValueChange?: (value: number) => void;
    onDragEnd?: () => void;
    onKeyUp?: (event: React.KeyboardEvent) => void;
}
interface SliderThumbProps {
    isFocusVisible: boolean;
    isDragging: boolean;
}
export declare function useSliderThumb({ sliderRef, value, min, max, lowerBound, upperBound, ariaDescribedby, ariaLabel, ariaLabelledby, isDisabled, onValueChange, onDragEnd, onKeyUp, }: SliderThumbOptions): SliderThumbProps & JSX.IntrinsicElements['span'] & {
    ref: RefObject<HTMLSpanElement>;
};
export declare function clamp(value: number, min?: number, max?: number): number;
export {};
