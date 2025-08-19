import { ThemeName } from '@ux-aspects-universal/core/theming';
import { MutableRefObject } from 'react';
import { ThemeFeature } from '../providers/features';
/**
 * Hook to set the theme on a given element
 * @param theme The theme to set
 */
export declare function useElementTheme(theme?: ThemeName, element?: MutableRefObject<HTMLElement | undefined> | null, features?: ThemeFeature[]): void;
