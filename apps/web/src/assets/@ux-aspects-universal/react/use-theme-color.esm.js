import { useMemo, useEffect, useState, useCallback } from 'react';
import { u as useTheme } from './theme-region.esm.js';

/**
 * A simple utility hook to get the name of a color variable
 * @param colorName - The name of the color
 * @param fallback - The fallback value
 */
function useThemeColor(colorName) {
  if (!colorName) {
    return undefined;
  }
  return `--uxa-color__${colorName}`;
}
/**
 * A simple utility hook to access a color's contrast variable name
 * @param colorName - The name of the color
 */
function useThemeColorContrast(colorName) {
  if (!colorName) {
    return undefined;
  }
  return `--uxa-color__${colorName}--contrast`;
}
/**
 * A utility hook to determine if a color variable is defined in the current theme
 * @param colorVariable - The name of the color variable
 * @param target - The element to check the variable on
 */
function useThemeHasColor(colorVariable, target = document.body) {
  // get the current theme
  const theme = useTheme();
  // determine if the variable exists - also update if the theme changes
  return useMemo(() => {
    return colorVariable ? getComputedStyle(target).getPropertyValue(colorVariable) !== '' : false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorVariable, theme, target]);
}
/**
 * Utility function to warn if a color is not defined in the current theme
 * @param colorName - The name of the color
 * @param target - The element to check the variable on
 */
function useWarnIfColorNotDefined(colorName, target = document.body) {
  // determine if the color exists
  const colorExists = useThemeHasColor(colorName, target);
  // warn the user if the color they have specified does not exist in the theme
  useEffect(() => {
    if (!colorExists && colorName) {
      console.warn(`The color "${colorName}" does not exist in the theme.`);
    }
  }, [colorExists, colorName, target]);
}
/**
 * Access the value of a CSS property
 * @param propertyName - The CSS property name
 * @param target - The element to access the property from
 */
function useThemeProperty(propertyName, target = document.body) {
  // access the current active theme
  const theme = useTheme();
  // store the theme value
  const [themeValue, setThemeValue] = useState('');
  // update the theme value whenever the property name or active theme changes
  useEffect(() => {
    setThemeValue(getComputedStyle(target).getPropertyValue(propertyName));
  }, [propertyName, target, theme]);
  const setThemeValueFn = useCallback(value => {
    target.style.setProperty(propertyName, value);
    setThemeValue(value);
  }, [propertyName, target]);
  return [themeValue, setThemeValueFn];
}

export { useThemeColorContrast as a, useThemeHasColor as b, useWarnIfColorNotDefined as c, useThemeProperty as d, useThemeColor as u };
