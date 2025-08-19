import { _ as __rest } from './_tslib.esm.js';
import * as React from 'react';

/**
 * A utility function to create a context and provider. This is largely inspired by the
 * Radix UI utility function `createContext`.
 */
function createContext(defaultContext) {
  const Context = React.createContext(defaultContext);
  function Provider(_a) {
    var {
        children
      } = _a,
      context = __rest(_a, ["children"]);
    // memoize the context value
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = React.useMemo(() => context, Object.values(context));
    return React.createElement(Context.Provider, {
      value: value
    }, children);
  }
  function useContext() {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error('useContext must be used within a Provider');
    }
    return context;
  }
  return [Provider, useContext];
}

export { createContext as c };
