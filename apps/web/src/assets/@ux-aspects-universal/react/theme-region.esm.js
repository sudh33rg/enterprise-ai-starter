import { a as __awaiter, _ as __rest } from './_tslib.esm.js';
import * as React from 'react';
import { useEffect, createContext, useContext, useState, useRef, forwardRef } from 'react';
import PropTypes__default from 'prop-types';

/**
 * An enum representing the optional features that can be enabled.
 */
var ThemeFeature;
(function (ThemeFeature) {
  ThemeFeature[ThemeFeature["InterFont"] = 0] = "InterFont";
  ThemeFeature[ThemeFeature["RobotoFont"] = 1] = "RobotoFont";
})(ThemeFeature || (ThemeFeature = {}));

/**
 * Hook to set the theme on a given element
 * @param theme The theme to set
 */
function useElementTheme(theme, element, features = []) {
  // update the class on the body element
  useEffect(() => {
    const domElement = element === null || element === void 0 ? void 0 : element.current;
    if (!domElement || !theme) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }
    // remove any previous theme class
    domElement.classList.forEach(className => {
      if (className.startsWith('uxa-theme-')) {
        domElement.classList.remove(className);
      }
    });
    // add the class to the body
    domElement.classList.add(`uxa-theme-${theme}`);
    // add any theme features
    for (const feature of features) {
      domElement.classList.add(themeFeatures[feature]);
    }
    return () => {
      // remove the theme class
      domElement.classList.remove(`uxa-theme-${theme}`);
      // remove any theme features
      for (const feature of features) {
        domElement.classList.remove(themeFeatures[feature]);
      }
    };
  }, [element, theme, features]);
}
/**
 * A map of theme features and their associated classes
 */
const themeFeatures = {
  [ThemeFeature.InterFont]: 'uxa-feature-inter-font',
  [ThemeFeature.RobotoFont]: 'uxa-feature-roboto-font'
};

const ThemeContext = createContext(null);

/**
 * A simple utility hook to expose the active theme
 */
function useTheme() {
  const context = useContext(ThemeContext);
  return context ? context.theme : null;
}
/**
 * Determine if the theme is currently loading
 */
function useThemeLoading() {
  var _a;
  const context = useContext(ThemeContext);
  return context ? (_a = context.loading) !== null && _a !== void 0 ? _a : false : false;
}

/**
 * A class that will load a stylesheet if it is not defined
 * and store all loaded stylesheets in memory.
 * It will concatenate all stylesheets into a single string so they are all available
 * when loaded.
 */
class StylesheetLoader {
  /**
   * Load the stylesheet for the given theme
   * @param theme The theme to load
   */
  static load(theme) {
    return __awaiter(this, void 0, void 0, function* () {
      // if the stylesheet has already been loaded then return it
      if (this._stylesheets.hasOwnProperty(theme)) {
        return this.getStyles();
      }
      // if the stylesheet has not been loaded then load it
      if (this._loaders.hasOwnProperty(theme)) {
        const stylesheet = yield this._loaders[theme]();
        this._stylesheets[theme] = stylesheet;
        return this.getStyles();
      }
      return this.getStyles();
    });
  }
  /**
   * Register a stylesheet loader function
   * @param theme The theme to load
   * @param loader The function to load the stylesheet
   */
  static register(theme, loader) {
    this._loaders[theme] = loader;
  }
  /**
   * Get the combined stylesheet for all themes
   */
  static getStyles() {
    return Object.values(this._stylesheets).join('');
  }
}
/** Store the stylesheet loader functions */
StylesheetLoader._loaders = {};
/** Store the loaded stylesheets */
StylesheetLoader._stylesheets = {};
function useStylesheet(theme, stylesheets) {
  const [styles, setStyles] = useState('');
  const [loading, setLoading] = useState(false);
  // if stylesheets are provided then register them - this is cheap so can be done on every render
  if (stylesheets) {
    Object.entries(stylesheets).forEach(([name, loader]) => StylesheetLoader.register(name, loader));
  }
  // load the stylesheet for the given theme
  useEffect(() => {
    if (!theme) {
      return;
    }
    setLoading(true);
    StylesheetLoader.load(theme).then(stylesheet => {
      // set the stylesheet if it has changed
      if (stylesheet !== styles) {
        setStyles(stylesheet);
      }
      setLoading(false);
    });
  }, [theme, stylesheets, styles]);
  return {
    styles,
    loading
  };
}

function ThemeProvider({
  theme,
  stylesheets,
  features,
  children
}) {
  // check if this is the root theme provider
  const isRoot = !useTheme();
  // create a ref to the document body
  const bodyRef = useRef();
  // we must use a ref to the body element as the body element is not available in an SSR environment
  // until after the first render
  useEffect(() => {
    if (isRoot) {
      bodyRef.current = document.body;
    }
  }, [isRoot]);
  // update the class on the body element if this is the root ThemeProvider
  useElementTheme(theme, bodyRef, features);
  // fetch the CSS for the active theme if applicable
  const {
    styles,
    loading
  } = useStylesheet(theme, stylesheets);
  return React.createElement(ThemeContext.Provider, {
    value: {
      theme,
      loading
    }
  }, children, React.createElement("style", null, styles));
}
ThemeProvider.propTypes = {
  theme: PropTypes__default.oneOfType([PropTypes__default.oneOf(['micro-focus', 'micro-focus-dark', 'white-label', 'opentext', 'opentext-stage-1', 'opentext-stage-1-dark', 'jato-light', 'jato-dark']), PropTypes__default.string]).isRequired
};

const ThemeRegion = forwardRef((_a, ref) => {
  var _b;
  var {
      theme
    } = _a,
    rest = __rest(_a, ["theme"]);
  // get the parent theme
  const parentTheme = useTheme();
  // if there is no parent them throw an error
  if (!parentTheme) {
    throw new Error('ThemeRegion must be used within a ThemeProvider');
  }
  // a ref is required even if one is not provided
  const defaultRef = useRef(null);
  // use the useElementTheme hook to apply the theme to the element
  useElementTheme(theme, (_b = ref) !== null && _b !== void 0 ? _b : defaultRef);
  // return the element with the theme applied
  return React.createElement(ThemeProvider, {
    theme: theme !== null && theme !== void 0 ? theme : parentTheme
  }, React.createElement("div", Object.assign({
    ref: ref !== null && ref !== void 0 ? ref : defaultRef
  }, rest)));
});

export { ThemeRegion as T, ThemeContext as a, useThemeLoading as b, ThemeProvider as c, ThemeFeature as d, useTheme as u };
