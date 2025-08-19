import { ThemeName } from '@ux-aspects-universal/react/theming';
export type ThemeProps = Record<string, string | ((props: never) => string)>;
export declare function useStyledTheme(theme: ThemeName, userThemeProps?: ThemeProps): ThemeProps | undefined;
