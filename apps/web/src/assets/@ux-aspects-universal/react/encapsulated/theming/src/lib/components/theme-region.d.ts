import { ThemeName } from '@ux-aspects-universal/core/theming';
import * as React from 'react';
import { HTMLAttributes } from 'react';
export interface ThemeRegionProps extends HTMLAttributes<HTMLDivElement> {
    /** The theme to apply to the region */
    theme: ThemeName | undefined;
}
export declare const ThemeRegion: React.ForwardRefExoticComponent<ThemeRegionProps & React.RefAttributes<HTMLDivElement>>;
