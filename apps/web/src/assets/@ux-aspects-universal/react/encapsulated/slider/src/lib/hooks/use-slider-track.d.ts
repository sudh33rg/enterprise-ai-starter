import * as React from 'react';
interface UseSliderTrack {
    ref: React.RefObject<HTMLDivElement>;
    min: number;
    max: number;
    isDisabled?: boolean;
    onChange: (value: number) => void;
    thumbRefLow?: React.RefObject<HTMLDivElement>;
    thumbRefHigh?: React.RefObject<HTMLDivElement>;
}
export declare function useSliderTrack({ ref, min, max, isDisabled, onChange, thumbRefLow, thumbRefHigh, }: UseSliderTrack): void;
export {};
