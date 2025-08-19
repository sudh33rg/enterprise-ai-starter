import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { SliderTick } from './slider-tick';
import './slider.scss';
interface SliderOwnProps {
    /** The slider value. */
    value?: number;
    /** The minimum slider value. */
    min?: number;
    /** The maximum slider value. */
    max?: number;
    /** The disabled state of the slider. */
    isDisabled?: boolean;
    /** The initial value of the component. */
    defaultValue?: SliderOwnProps['value'];
    /** Show the drag handle tooltip when dragged and on hover. */
    tooltip?: boolean;
    /** Ticks shown beneath the slider bar. */
    ticks?: SliderTick[];
    /** Define a custom renderer for the tooltip value. */
    tooltipRender?: (value: number) => React.ReactNode;
    /** Emits whenever the value changes. */
    onValueChange?: (value: number) => void;
}
export type SliderProps = SliderOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof SliderOwnProps>;
export declare const Slider: React.ForwardRefExoticComponent<SliderOwnProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof SliderOwnProps> & React.RefAttributes<HTMLDivElement>>;
export {};
