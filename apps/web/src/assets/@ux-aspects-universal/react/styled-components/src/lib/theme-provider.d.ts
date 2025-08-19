import { ThemeName } from '@ux-aspects-universal/react/theming';
import * as React from 'react';
import { ComponentProps, FC, HTMLProps } from 'react';
import { ThemeProps } from './hooks/use-styled-theme';
interface StyledThemeProviderOwnProps {
    /** The name of the selected theme */
    theme: ThemeName;
    /** Define the theme properties. If not defined the theme will be lazily loaded. */
    themeProps?: ThemeProps;
    /** Style overrides for the styled components */
    overrides?: ThemeProps;
}
type ThemeContainerProps = ComponentProps<'div'> & {
    isRoot: boolean;
};
declare const StyledThemeContainer: import("styled-components").StyledComponent<React.FunctionComponent<ThemeContainerProps>, any, {}, never>;
export type StyledThemeProviderProps = StyledThemeProviderOwnProps & React.ComponentProps<typeof StyledThemeContainer> & HTMLProps<HTMLDivElement>;
export declare const ThemeProvider: FC<StyledThemeProviderProps>;
export {};
