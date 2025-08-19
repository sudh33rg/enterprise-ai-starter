import * as React from 'react';
import { HTMLAttributes } from 'react';
export interface RangeHandleProps extends HTMLAttributes<HTMLSpanElement> {
    isActive?: boolean;
    isDisabled?: boolean;
    isHovered?: boolean;
}
export declare const RangeHandle: React.ForwardRefExoticComponent<RangeHandleProps & React.RefAttributes<HTMLSpanElement>>;
