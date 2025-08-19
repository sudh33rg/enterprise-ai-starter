import { FC, RefObject } from 'react';
export interface SliderTick {
    value: number;
    label?: string;
}
interface SliderTickProps {
    slider: RefObject<HTMLDivElement>;
    tick: SliderTick;
    min: number;
    max: number;
}
export declare const SliderTicks: FC<SliderTickProps>;
export {};
