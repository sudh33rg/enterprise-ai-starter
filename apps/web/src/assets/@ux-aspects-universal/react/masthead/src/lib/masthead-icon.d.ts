import { ProductColor } from '@ux-aspects-universal/react/common';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import './masthead-icon.scss';
export interface MastheadIconProps extends HTMLAttributes<HTMLDivElement> {
    color?: ProductColor;
}
export declare const MastheadIcon: React.ForwardRefExoticComponent<MastheadIconProps & React.RefAttributes<HTMLDivElement>>;
