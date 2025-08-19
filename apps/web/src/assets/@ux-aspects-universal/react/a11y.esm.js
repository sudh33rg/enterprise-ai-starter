import { s as skipLinkManager } from './focus-key-manager.esm.js';
export { b as ActiveDescendantKeyManagerContext, A as ActiveDescendantProvider, c as FocusKeyManager, F as FocusKeyManagerContext, L as LegacyActiveDescendantKeyManager, S as SkipLink, d as detectModality, f as focusWithModality, u as useActiveDescendant, a as useActiveDescendantItem } from './focus-key-manager.esm.js';
export { u as useLegacyActiveDescendantItem } from './use-active-descendant-item.esm.js';
export { u as useFocusManager, a as useFocusableRef, b as useTabbable } from './use-tabbable.esm.js';
import { useEffect } from 'react';
import '@react-aria/utils';
import 'clsx';
import './_tslib.esm.js';
import './use-unique-id.esm.js';
import './reducer-provider.esm.js';
import '@react-aria/focus';
import 'prop-types';
import './style-inject.es.esm.js';
import '@react-aria/interactions';
import 'react-dom';
import './direction.esm.js';
import './use-mutation-observer.esm.js';

function useSkipLinkTarget(ref, {
  tabIndex
} = {}) {
  useEffect(() => {
    // we store the ref in a variable to ensure capture in closure
    const target = ref.current;
    skipLinkManager.registerTarget(target);
    return () => skipLinkManager.unregisterTarget(target);
  }, [ref]);
  return {
    tabIndex: tabIndex !== null && tabIndex !== void 0 ? tabIndex : -1
  };
}

export { useSkipLinkTarget };
