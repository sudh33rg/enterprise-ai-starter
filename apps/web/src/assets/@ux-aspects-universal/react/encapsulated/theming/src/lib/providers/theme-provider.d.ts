import { ThemeName } from '@ux-aspects-universal/core/theming';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { ThemeFeature } from './features';
/**
 * An object with a list of themes and the function required to import them
 */
export type ThemeStylesheets = Record<ThemeName, () => Promise<string>>;
export interface ThemeProviderProps {
    /** The selected theme */
    theme: ThemeName;
    /** The stylesheets associated with the available themes */
    stylesheets?: ThemeStylesheets;
    /** The features to enable for the theme */
    features?: ThemeFeature[];
    /** The children to apply the theme to */
    children?: ReactNode;
}
export declare function ThemeProvider({ theme, stylesheets, features, children, }: ThemeProviderProps): JSX.Element;
export declare namespace ThemeProvider {
    var propTypes: {
        theme: PropTypes.Validator<string>;
    };
}
