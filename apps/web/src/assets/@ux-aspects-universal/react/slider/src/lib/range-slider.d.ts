import * as React from 'react';
import { HTMLProps } from 'react';
import './range-slider.scss';
import { SliderTick } from './slider-tick';
export interface RangeSliderOwnProps {
    /** The low range value. */
    low?: number;
    /** The high range value. */
    high?: number;
    /** The minimum slider value. */
    min?: number;
    /** The maximum slider value. */
    max?: number;
    /** The disabled state of the slider. */
    isDisabled?: boolean;
    /** The aria-label value for the low slider thumb. */
    ariaLabelLow?: string;
    /** The aria-labelled value for the high slider thumb. */
    ariaLabelledbyLow?: string;
    /** The aria-labelled value for the low slider thumb. */
    ariaLabelHigh?: string;
    /** The aria-labelledby value for the high slider thumb. */
    ariaLabelledbyHigh?: string;
    /** Ticks shown beneath the slider bar. */
    ticks?: SliderTick[];
    /** Show the drag handle tooltip when dragged and on hover. */
    tooltip?: boolean;
    /** Define a custom renderer for the low tooltip value. */
    lowTooltipRender?: (value: number) => React.ReactNode;
    /** Define a custom renderer for the high tooltip value. */
    highTooltipRender?: (value: number) => React.ReactNode;
    /** Emits whenever the low value changes. */
    onLowChange?: (low: number) => void;
    /** Emits whenever the high value changes. */
    onHighChange?: (high: number) => void;
}
export type RangeSliderProps = RangeSliderOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof RangeSliderOwnProps>;
export declare const RangeSlider: React.ForwardRefExoticComponent<Omit<RangeSliderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
