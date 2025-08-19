import { ThemeName } from '@ux-aspects-universal/core/theming';
import { ThemeStylesheets } from '../providers/theme-provider';
/**
 * A class that will load a stylesheet if it is not defined
 * and store all loaded stylesheets in memory.
 * It will concatenate all stylesheets into a single string so they are all available
 * when loaded.
 */
export declare class StylesheetLoader {
    /** Store the stylesheet loader functions */
    private static readonly _loaders;
    /** Store the loaded stylesheets */
    private static readonly _stylesheets;
    /**
     * Load the stylesheet for the given theme
     * @param theme The theme to load
     */
    static load(theme: ThemeName): Promise<string>;
    /**
     * Register a stylesheet loader function
     * @param theme The theme to load
     * @param loader The function to load the stylesheet
     */
    static register(theme: ThemeName, loader: () => Promise<string>): void;
    /**
     * Get the combined stylesheet for all themes
     */
    static getStyles(): string;
}
interface UseStylesheet {
    styles: string;
    loading: boolean;
}
export declare function useStylesheet(theme: ThemeName, stylesheets?: ThemeStylesheets): UseStylesheet;
export {};
