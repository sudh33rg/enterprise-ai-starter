import { useRef, useState, useEffect } from 'react';
import '@react-aria/utils';
import 'clsx';
import './_tslib.esm.js';
import { u as useStateRef } from './use-state-ref.esm.js';
import './reducer-provider.esm.js';

function useSelection({
  mode
}) {
  const [selection, setSelection] = useStateRef([]);
  const select = (...items) => {
    if (mode === 'single') {
      setSelection(items);
    } else {
      setSelection(Array.from(new Set([...selection(), ...items])));
    }
  };
  const deselect = item => {
    setSelection(selection().filter(selectedItem => selectedItem !== item));
  };
  const isSelected = item => selection().includes(item);
  const toggle = item => {
    if (isSelected(item)) {
      deselect(item);
    } else {
      select(item);
    }
  };
  const clear = () => {
    setSelection([]);
  };
  return {
    select,
    deselect,
    isSelected,
    toggle,
    clear,
    mode: () => mode,
    selection: selection()
  };
}
/**
 * Hook to determine if an item is selected. It also handles reference changes and triggers a re-render.
 * @param item The item to check.
 */
function useIsSelected(item, selectionManager) {
  const ref = useRef(item);
  const [isSelected, setIsSelected] = useState(selectionManager.isSelected(item));
  // retain the selection state even if the item reference changes
  if (ref.current !== item) {
    // if the previous reference was selected, deselect it and reselect it with the new reference
    if (isSelected) {
      selectionManager.deselect(ref.current);
      selectionManager.select(item);
    }
    ref.current = item;
  }
  const latestSelectionState = selectionManager.isSelected(item);
  // check if the selection state has changed
  // if so, update the state to trigger a re-render
  useEffect(() => {
    if (latestSelectionState !== isSelected) {
      setIsSelected(latestSelectionState);
    }
  }, [isSelected, latestSelectionState]);
  return isSelected;
}

export { useIsSelected as a, useSelection as u };
