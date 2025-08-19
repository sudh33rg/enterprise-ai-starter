export interface UseActiveTheme {
    isMicroFocus: boolean;
    isOpenText: boolean;
    isJato: boolean;
}
/**
 * A utility hook to check if a MicroFocus or OpenText theme is being used.
 */
export declare function useThemeFamily(): UseActiveTheme;
