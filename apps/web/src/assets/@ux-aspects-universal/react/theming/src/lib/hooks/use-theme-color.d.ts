/**
 * A simple utility hook to get the name of a color variable
 * @param colorName - The name of the color
 * @param fallback - The fallback value
 */
export declare function useThemeColor(colorName: string | undefined): string | undefined;
/**
 * A simple utility hook to access a color's contrast variable name
 * @param colorName - The name of the color
 */
export declare function useThemeColorContrast(colorName: string | undefined): string | undefined;
/**
 * A utility hook to determine if a color variable is defined in the current theme
 * @param colorVariable - The name of the color variable
 * @param target - The element to check the variable on
 */
export declare function useThemeHasColor(colorVariable: string | undefined, target?: HTMLElement): boolean;
/**
 * Utility function to warn if a color is not defined in the current theme
 * @param colorName - The name of the color
 * @param target - The element to check the variable on
 */
export declare function useWarnIfColorNotDefined(colorName: string | undefined, target?: HTMLElement): void;
/**
 * Access the value of a CSS property
 * @param propertyName - The CSS property name
 * @param target - The element to access the property from
 */
export declare function useThemeProperty(propertyName: string, target?: HTMLElement): [string | undefined, (value: string) => void];
