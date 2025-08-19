import { useContext } from 'react';
import { b as ActiveDescendantKeyManagerContext } from './focus-key-manager.esm.js';

function useLegacyActiveDescendantItem(ref) {
  var _a;
  const {
    activeDescendant,
    setActiveItem
  } = useContext(ActiveDescendantKeyManagerContext);
  return {
    activeDescendantProps: {
      className: activeDescendant && (activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id) && (activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id) === ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.id) ? 'uxa-active' : undefined,
      'data-descendant': true,
      // this attribute is used to identify children that can be activated
      onMouseEnter: () => setActiveItem === null || setActiveItem === void 0 ? void 0 : setActiveItem(ref, 'mouse')
    },
    activeDescendantOrigin: activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.origin
  };
}

export { useLegacyActiveDescendantItem as u };
