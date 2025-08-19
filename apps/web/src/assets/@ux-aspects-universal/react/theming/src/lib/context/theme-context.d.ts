import { ThemeName } from '@ux-aspects-universal/core/theming';
interface ThemeContextValue {
    theme: ThemeName;
    loading?: boolean;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue | null>;
export {};
