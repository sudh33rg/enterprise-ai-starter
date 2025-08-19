import * as React from 'react';
import { FC, RefObject } from 'react';
interface SliderTooltipProps {
    isDisabled?: boolean;
    value: number;
    triggerRef: RefObject<HTMLSpanElement>;
    range: {
        min: number;
        max: number;
    };
    tooltipRender?: (value: number) => React.ReactNode;
    offset?: number;
}
export declare const SliderTooltip: FC<SliderTooltipProps>;
export {};
