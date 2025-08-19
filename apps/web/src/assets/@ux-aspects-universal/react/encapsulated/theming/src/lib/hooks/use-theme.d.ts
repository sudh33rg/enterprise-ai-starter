/**
 * Access the currently active theme
 */
import { ThemeName } from '@ux-aspects-universal/core/theming';
/**
 * A simple utility hook to expose the active theme
 */
export declare function useTheme(): ThemeName | null;
/**
 * Determine if the theme is currently loading
 */
export declare function useThemeLoading(): boolean;
