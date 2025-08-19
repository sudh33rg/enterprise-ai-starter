import { Theme } from "@ux-aspects-universal/core/theming";
import { u as useTheme } from "./theme-region.esm.js";
/**
 * A utility hook to check if a MicroFocus or OpenText theme is being used.
 */
function useThemeFamily() {
    const theme = useTheme();
    return {
        isMicroFocus: theme === Theme.MicroFocus || theme === Theme.MicroFocusDark || theme === Theme.WhiteLabel,
        isOpenText: theme === Theme.OpenTextStage1 || theme === Theme.OpenTextStage1Dark,
        isJato: theme === Theme.JatoLight || theme === Theme.JatoDark
    };
}
export { useThemeFamily as u };
