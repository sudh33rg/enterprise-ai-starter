import * as React from 'react';
import { createContext, forwardRef, useState, useRef, useCallback, useMemo, useImperativeHandle, useContext, useEffect } from 'react';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';
import { _ as __rest } from './_tslib.esm.js';
import { u as useUniqueId } from './use-unique-id.esm.js';
import './reducer-provider.esm.js';
import { useFocusRing, focusSafely } from '@react-aria/focus';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { setInteractionModality, getInteractionModality } from '@react-aria/interactions';
import { flushSync } from 'react-dom';

/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActiveDescendantContext = createContext(null);
function useActiveDescendant() {
  const ctx = useContext(ActiveDescendantContext);
  if (!ctx) {
    throw new Error('useActiveDescendantContext must be used within ActiveDescendantProvider');
  }
  return ctx;
}
function ActiveDescendantProviderFn({
  children,
  onEnter,
  loop = false
}, ref) {
  const [activeId, setActiveId] = useState();
  const itemsRef = useRef([]);
  const listeners = useRef([]);
  const activeIdRef = useRef(undefined);
  const updateActiveId = useCallback(id => {
    activeIdRef.current = id;
    setActiveId(id);
    for (const listener of listeners.current) {
      listener(id);
    }
  }, []);
  const addActiveDescendantListener = useCallback(fn => listeners.current.push(fn), []);
  const removeActiveDescendantListener = useCallback(fn => listeners.current = listeners.current.filter(l => l !== fn), []);
  const ensureActiveItem = useCallback(() => {
    var _a;
    if (itemsRef.current.length === 0) {
      updateActiveId(undefined);
    } else if (activeIdRef.current === undefined || !itemsRef.current.find(i => i.id === activeIdRef.current)) {
      updateActiveId(findFirstEnabled());
    } else {
      // scroll the active item into view
      const activeItem = itemsRef.current.find(i => i.id === activeIdRef.current);
      if (activeItem) {
        (_a = activeItem.ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
          block: 'nearest'
        });
      }
    }
  }, [updateActiveId]);
  const registerItem = useCallback(item => {
    itemsRef.current.push(item);
    itemsRef.current.sort((a, b) => a.ref.current && b.ref.current ? a.ref.current.compareDocumentPosition(b.ref.current) === Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1 : 0);
    ensureActiveItem();
  }, [ensureActiveItem]);
  const unregisterItem = useCallback(id => {
    itemsRef.current = itemsRef.current.filter(i => i.id !== id);
    ensureActiveItem();
  }, [ensureActiveItem]);
  const setActiveItem = useCallback(item => {
    var _a;
    if (item === undefined) {
      return updateActiveId(undefined);
    }
    const target = itemsRef.current.find(i => i.id === item);
    if (target) {
      updateActiveId(target.id);
      (_a = target.ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [updateActiveId]);
  const findNextItem = useCallback(dir => {
    const items = itemsRef.current;
    let index = itemsRef.current.findIndex(i => i.id === activeIdRef.current);
    for (let attempts = 0; attempts < items.length; attempts++) {
      index += dir;
      if (loop) {
        if (index < 0) {
          index = items.length - 1;
        }
        if (index >= items.length) {
          index = 0;
        }
      } else {
        if (index < 0 || index >= items.length) {
          return undefined;
        }
      }
      if (!items[index].disabled) {
        return items[index].id;
      }
    }
    return undefined;
  }, [loop]);
  const findFirstEnabled = () => {
    var _a, _b;
    return (_b = (_a = itemsRef.current.find(item => !item.disabled)) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : undefined;
  };
  const findLastEnabled = () => {
    const indexFromEnd = [...itemsRef.current].reverse().findIndex(item => !item.disabled);
    return indexFromEnd !== -1 ? itemsRef.current[itemsRef.current.length - 1 - indexFromEnd].id : undefined;
  };
  const onKeyDown = useCallback(e => {
    var _a, _b;
    const items = itemsRef.current;
    if (items.length === 0) {
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = findNextItem(1);
      if (next !== undefined) {
        setActiveItem(next);
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = findNextItem(-1);
      if (prev !== undefined) {
        setActiveItem(prev);
      }
    }
    if (e.key === 'Home') {
      e.preventDefault();
      const first = findFirstEnabled();
      if (first !== undefined) {
        setActiveItem(first);
      }
    }
    if (e.key === 'End') {
      e.preventDefault();
      const last = findLastEnabled();
      if (last !== undefined) {
        setActiveItem(last);
      }
    }
    if (e.key === 'Enter' && activeIdRef.current !== undefined && !((_a = itemsRef.current.find(i => i.id === activeIdRef.current)) === null || _a === void 0 ? void 0 : _a.disabled)) {
      onEnter === null || onEnter === void 0 ? void 0 : onEnter(activeIdRef.current, (_b = itemsRef.current.find(i => i.id === activeIdRef.current)) === null || _b === void 0 ? void 0 : _b.value);
    }
  }, [findNextItem, onEnter, setActiveItem]);
  const context = useMemo(() => ({
    activeId,
    registerItem,
    unregisterItem,
    setActiveItem,
    onKeyDown,
    addActiveDescendantListener,
    removeActiveDescendantListener
  }), [activeId, registerItem, unregisterItem, setActiveItem, onKeyDown, addActiveDescendantListener, removeActiveDescendantListener]);
  useImperativeHandle(ref, () => context, [context]);
  return React.createElement(ActiveDescendantContext.Provider, {
    value: context
  }, typeof children === 'function' ? children(context) : children);
}
// We have to cast the return type to ReturnType<typeof ActiveDescendantProvider> because the forwardRef function
// does not allow generic types to be passed to the component.
const ActiveDescendantProvider = forwardRef(ActiveDescendantProviderFn);
function useActiveDescendantItem({
  id,
  disabled = false,
  value
}) {
  id = useUniqueId('uxa-active-descendant-item', id);
  const ref = useRef(null);
  const {
    registerItem,
    unregisterItem,
    activeId,
    setActiveItem
  } = useActiveDescendant();
  useEffect(() => {
    registerItem({
      id,
      disabled,
      ref,
      value
    });
    return () => unregisterItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onMouseEnter = useCallback(() => {
    if (disabled) {
      return;
    }
    setActiveItem(id);
  }, [disabled, id, setActiveItem]);
  return {
    isActive: activeId === id,
    itemProps: {
      id,
      ref,
      'aria-disabled': disabled || undefined,
      'aria-selected': activeId === id,
      className: activeId === id ? 'uxa-active' : '',
      onMouseEnter
    }
  };
}

const ActiveDescendantKeyManagerContext = createContext({});

const LegacyActiveDescendantKeyManager = React.forwardRef(({
  isOpen,
  children,
  listRef
}, ref) => {
  const [activeDescendant, _setActiveDescendant] = useState();
  const descendantsRef = useRef([]);
  // store any active item listeners
  const activeItemListeners = useRef([]);
  const addActiveItemListener = useCallback(listener => {
    // if the listener is already registered, do nothing
    if (!activeItemListeners.current.includes(listener)) {
      activeItemListeners.current.push(listener);
    }
  }, []);
  const removeActiveItemListener = useCallback(listener => {
    const index = activeItemListeners.current.indexOf(listener);
    if (index > -1) {
      activeItemListeners.current.splice(index, 1);
    }
  }, []);
  const notifyActiveItemListeners = useCallback(id => {
    activeItemListeners.current.forEach(listener => listener(id !== null && id !== void 0 ? id : ''));
  }, []);
  const setActiveDescendant = useCallback(({
    id,
    origin
  }) => {
    _setActiveDescendant({
      id,
      origin
    });
    notifyActiveItemListeners(id);
  }, [notifyActiveItemListeners]);
  const getDescendants = useCallback(() => {
    var _a, _b;
    const currentDescendants = Array.from((_b = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('[data-descendant]')) !== null && _b !== void 0 ? _b : []);
    if (descendantsRef.current.length === currentDescendants.length && descendantsRef.current.every((item, index) => item === currentDescendants[index])) {
      return descendantsRef.current;
    } else {
      descendantsRef.current = currentDescendants;
      return currentDescendants;
    }
  }, [listRef]);
  const getActiveItem = useCallback(() => getDescendants().find(item => item.id === (activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id)), [activeDescendant, getDescendants]);
  const setActiveItem = useCallback((item, origin) => {
    // We use RAF here to ensure that the active item is set after the list has initially been rendered.
    // If we don't there is a race condition between setting the first item as active and a selected option
    // telling the ActiveDescendantKeyManager that it should be the initially active item.
    requestAnimationFrame(() => {
      var _a;
      return setActiveDescendant({
        id: (_a = item.current) === null || _a === void 0 ? void 0 : _a.id,
        origin
      });
    });
  }, [setActiveDescendant]);
  const getDescendantAtIndex = useCallback(index => getDescendants()[index], [getDescendants]);
  const activeDescendantIndex = useCallback(() => getDescendants().findIndex(item => item.id === (activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id)), [activeDescendant, getDescendants]);
  const activateFirstItem = useCallback(origin => {
    var _a;
    return setActiveDescendant({
      id: (_a = getDescendants()[0]) === null || _a === void 0 ? void 0 : _a.id,
      origin
    });
  }, [setActiveDescendant, getDescendants]);
  const activateLastItem = useCallback(origin => {
    var _a;
    setActiveDescendant({
      id: (_a = getDescendants()[getDescendants().length - 1]) === null || _a === void 0 ? void 0 : _a.id,
      origin
    });
  }, [setActiveDescendant, getDescendants]);
  const activateNextItem = useCallback(origin => {
    const item = getDescendantAtIndex(activeDescendantIndex() + 1);
    item ? setActiveDescendant({
      id: item.id,
      origin
    }) : activateFirstItem(origin);
  }, [activeDescendantIndex, activateFirstItem, getDescendantAtIndex, setActiveDescendant]);
  const activatePreviousItem = useCallback(origin => {
    const item = getDescendantAtIndex(activeDescendantIndex() - 1);
    item ? setActiveDescendant({
      id: item.id,
      origin
    }) : activateLastItem(origin);
  }, [activeDescendantIndex, activateLastItem, getDescendantAtIndex, setActiveDescendant]);
  const onKeyDown = useCallback(event => {
    var _a;
    // the keyboard functionality may conditionally be disabled if the list is hidden
    if (isOpen === false) {
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        activateNextItem('keyboard');
        break;
      case 'ArrowUp':
        activatePreviousItem('keyboard');
        break;
      case 'Home':
        activateFirstItem('keyboard');
        break;
      case 'End':
        activateLastItem('keyboard');
        break;
      case 'Enter':
        (_a = getActiveItem()) === null || _a === void 0 ? void 0 : _a.click();
        break;
    }
  }, [activateFirstItem, activateLastItem, activateNextItem, activatePreviousItem, getActiveItem, isOpen]);
  // ensure there is an active item
  const ensureActiveItem = useCallback(() => {
    if (!activeDescendant) {
      activateFirstItem('program');
    }
    // if there is an active item ensure that it still exists in the DOM
    if (activeDescendant && !getActiveItem()) {
      activateFirstItem('program');
    }
  }, [activeDescendant, getActiveItem, activateFirstItem]);
  // if the open state changes and there are no active items we should focus the first item
  useEffect(() => {
    if (isOpen !== false && !(activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id)) {
      activateFirstItem('program');
    }
    if (isOpen === false && activeDescendant) {
      setActiveDescendant({
        id: undefined,
        origin: 'program'
      });
    }
    // we must exclude the `activeDescendant` object here as it can cause
    // an infinite loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id, activateFirstItem, setActiveDescendant]);
  // expose the API to a parent component
  useImperativeHandle(ref, () => ({
    addActiveItemListener,
    removeActiveItemListener,
    setActiveItem,
    getActiveItem,
    getDescendants,
    getDescendantAtIndex,
    activateFirstItem,
    activateLastItem,
    activateNextItem,
    activatePreviousItem,
    ensureActiveItem,
    onKeyDown
  }), [addActiveItemListener, removeActiveItemListener, setActiveItem, getActiveItem, getDescendants, getDescendantAtIndex, activateFirstItem, activateLastItem, activateNextItem, activatePreviousItem, ensureActiveItem, onKeyDown]);
  return React.createElement(ActiveDescendantKeyManagerContext.Provider, {
    value: {
      activeDescendant,
      setActiveItem
    }
  }, children({
    'aria-activedescendant': activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id,
    onKeyDown
  }));
});

class UxaSkipLinkManager {
  constructor() {
    /** The element to skip to. */
    this._target = null;
  }
  /** Whether there is a target to skip to. */
  get hasTarget() {
    return !!this._target;
  }
  /** The element to skip to. */
  registerTarget(target) {
    if (!target) {
      return;
    }
    this._target = target;
  }
  /** Unset the target when the target is destroyed. */
  unregisterTarget(target) {
    if (this._target === target) {
      this._target = null;
    }
  }
  /** Focus the target element. */
  focusTarget() {
    var _a;
    (_a = this._target) === null || _a === void 0 ? void 0 : _a.focus();
  }
}
const skipLinkManager = new UxaSkipLinkManager();

var css_248z = ":host,\n.uxa-skip-link {\n  display: inline-flex;\n  position: fixed;\n  inset-inline-start: var(--uxa-skip-link__inset-inline-start);\n  inset-block-start: var(--uxa-skip-link__inset-block-start);\n  padding-inline: var(--uxa-skip-link__padding-inline);\n  padding-block: var(--uxa-skip-link__padding-block);\n  background: var(--uxa-skip-link__background);\n  border: var(--uxa-skip-link__border);\n  box-shadow: var(--uxa-skip-link__box-shadow);\n  color: var(--uxa-skip-link__color);\n  border-radius: var(--uxa-skip-link__border-radius);\n  -webkit-text-decoration: var(--uxa-skip-link__text-decoration);\n          text-decoration: var(--uxa-skip-link__text-decoration);\n  box-sizing: border-box;\n  font-weight: var(--uxa-skip-link__font-weight);\n  font-size: var(--uxa-skip-link__font-size);\n  line-height: var(--uxa-skip-link__line-height);\n  cursor: var(--uxa-skip-link__cursor);\n  z-index: var(--uxa-skip-link__z-index);\n  transform: var(--uxa-skip-link__transform);\n  opacity: var(--uxa-skip-link__opacity);\n  transition: var(--uxa-skip-link__transition);\n}\n:host:hover,\n.uxa-skip-link:hover {\n  background: var(--uxa-skip-link__background--hover);\n  box-shadow: var(--uxa-skip-link__box-shadow--hover);\n}\n:host:active,\n.uxa-skip-link:active {\n  background: var(--uxa-skip-link__background--active);\n  box-shadow: var(--uxa-skip-link__box-shadow--active);\n}\n:host:focus,\n.uxa-skip-link:focus {\n  outline: none;\n}\n:host:not(.uxa-focused),\n.uxa-skip-link:not(.uxa-focused) {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n  opacity: var(--uxa-skip-link__opacity--unfocused);\n  transform: var(--uxa-skip-link__transform--unfocused);\n}";
styleInject(css_248z);

const SkipLink = forwardRef((_a, ref) => {
  var {
      isDisabled,
      href,
      tabIndex = 0
    } = _a,
    props = __rest(_a, ["isDisabled", "href", "tabIndex"]);
  const {
    focusProps,
    isFocused
  } = useFocusRing();
  const hasTarget = skipLinkManager.hasTarget || href !== undefined;
  const focusTarget = () => {
    // if there is an href then just let the browser handle the navigation
    if (href || isDisabled) {
      return;
    }
    // determine the origin of the focus
    skipLinkManager.focusTarget();
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", Object.assign({
      ref: ref
    }, mergeProps(props, focusProps, {
      className: clsx('uxa-skip-link', {
        'uxa-focused': isFocused
      }),
      href,
      tabIndex: isDisabled ? -1 : tabIndex,
      onClick: focusTarget,
      hidden: !hasTarget,
      onKeyDown: event => {
        if (event.key === 'Enter' || event.key === ' ') {
          focusTarget();
        }
      }
    })))
  );
});
/** Define the Prop Type information */
SkipLink.propTypes = {
  /** Whether the skip link is disabled */
  isDisabled: PropTypes__default.bool
};

/** Sets the focus of a element with the given modality */
function focusWithModality(elementRef, modality) {
  setInteractionModality(modality);
  focusSafely(elementRef);
}
const detectModality = event => event.detail === 1 ? 'pointer' : 'keyboard';

/** eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line
const FocusKeyManagerContext = createContext(null);
function FocusKeyManager(_a) {
  var {
      inheritFocusManager = false
    } = _a,
    props = __rest(_a, ["inheritFocusManager"]);
  const context = useContext(FocusKeyManagerContext);
  // If there is no parent context, create a new focus key manager at this point in the tree.
  // If there is a parent context then we are a child focus key manager and we don't need to do anything.
  return !context || !inheritFocusManager ? React.createElement(InternalFocusKeyManager, Object.assign({}, props)) : props.children;
}
// The default sort function that sorts items by their order in the DOM.
const defaultSort = (a, b) => {
  if (!a.ref.current || !b.ref.current) {
    return 0;
  }
  const position = a.ref.current.compareDocumentPosition(b.ref.current);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING) {
    return 1;
  }
  return 0;
};
function InternalFocusKeyManager({
  wrap,
  autoFocus,
  orientation,
  columns,
  onGoToNextPage,
  onGoToPreviousPage,
  comparator = (a, b) => a === b,
  children,
  sort = defaultSort,
  controller
}) {
  const items = useRef([]);
  const isPendingAutoFocus = useRef(autoFocus);
  const disabledItems = useRef(new Map());
  const activeItemChangeCallbacks = useRef([]);
  // an item may be activated by not updated in state until the subsequent render
  // which can result in a race condition as to whether to initially select the first item or a item externally activated
  const activeItem = useRef();
  const isActiveItem = useCallback(id => {
    var _a;
    return id === ((_a = activeItem.current) === null || _a === void 0 ? void 0 : _a.id);
  }, []);
  const setActiveItem = useCallback(id => {
    activeItem.current = items.current.find(i => i.id === id);
    // call all the active item change callbacks
    activeItemChangeCallbacks.current.forEach(cb => cb(activeItem.current));
  }, [items]);
  // if there is no item that can be focused load the previous page if pagination is enabled
  const goToPreviousPage = useCallback(delta => {
    if (!wrap && onGoToPreviousPage) {
      let newActiveItemData;
      flushSync(() => {
        var _a;
        newActiveItemData = onGoToPreviousPage === null || onGoToPreviousPage === void 0 ? void 0 : onGoToPreviousPage(delta, (_a = activeItem.current) === null || _a === void 0 ? void 0 : _a.value);
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (newActiveItemData) {
        const item = items.current.find(i => comparator(i.value, newActiveItemData));
        setActiveItem(item === null || item === void 0 ? void 0 : item.id);
        if (item) {
          focusItem(item.ref.current);
        }
      }
    }
  }, [wrap, onGoToPreviousPage, setActiveItem, comparator]);
  // if there is no item that can be focused load the next page if pagination is enabled
  const goToNextPage = useCallback(delta => {
    if (!wrap && onGoToNextPage) {
      let newActiveItemData;
      flushSync(() => {
        var _a;
        newActiveItemData = onGoToNextPage === null || onGoToNextPage === void 0 ? void 0 : onGoToNextPage(delta, (_a = activeItem.current) === null || _a === void 0 ? void 0 : _a.value);
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (newActiveItemData) {
        const item = items.current.find(i => comparator(i.value, newActiveItemData));
        setActiveItem(item === null || item === void 0 ? void 0 : item.id);
        if (item) {
          focusItem(item.ref.current);
        }
      }
    }
  }, [wrap, onGoToNextPage, setActiveItem, comparator]);
  const getActiveItemIndex = useCallback((list = items.current) => list.findIndex(item => isActiveItem(item.id)), [isActiveItem, items]);
  // add an element to the list of items
  const addItem = useCallback(focusableItem => {
    items.current = [...items.current, focusableItem].sort(sort);
  }, [sort]);
  // remove the element from the list of items
  const removeItem = useCallback(focusableItem => {
    items.current = items.current.filter(item => item !== focusableItem).sort(sort);
  }, [sort]);
  const focusItem = node => {
    var _a;
    focusWithModality(node, (_a = getInteractionModality()) !== null && _a !== void 0 ? _a : 'pointer');
  };
  // find the first item in the list that is not disabled
  const focusFirst = useCallback(() => {
    for (const item of items.current) {
      if (!item.disabled) {
        focusItem(item.ref.current);
        return;
      }
    }
  }, [items]);
  // find the last item in the list that is not disabled
  const focusLast = useCallback(() => {
    for (const item of [...items.current].reverse()) {
      if (!item.disabled) {
        focusItem(item.ref.current);
        return;
      }
    }
  }, [items]);
  // focus the next item in the list that isn't disabled
  const focusNext = useCallback(() => {
    if (!activeItem) {
      return focusFirst();
    }
    // search nodes after the active one to find a tabbable item
    for (const item of items.current.slice(getActiveItemIndex() + 1)) {
      if (!item.disabled) {
        focusItem(item.ref.current);
        return;
      }
    }
    // if there are no focusable items after the current node then focus the first
    // tabbable node if wrapping is enabled
    if (wrap) {
      focusFirst();
      return;
    }
    goToNextPage(1);
  }, [items, activeItem, focusFirst, wrap, getActiveItemIndex, goToNextPage]);
  // focus the item above in the list that isn't disabled
  const focusAbove = useCallback(() => {
    if (!activeItem) {
      return focusFirst();
    }
    // find the node that is above the active item
    const item = items.current[getActiveItemIndex() - columns];
    if (item && !item.disabled) {
      focusItem(item.ref.current);
      return;
    }
    if (!item || item && item.disabled) {
      goToPreviousPage(orientation === 'grid' ? columns : 1);
    }
  }, [items, activeItem, focusFirst, columns, getActiveItemIndex, goToPreviousPage, orientation]);
  // focus the item below in the list that isn't disabled
  const focusBelow = useCallback(() => {
    if (!activeItem) {
      return focusFirst();
    }
    // find the node that is below the active item
    const item = items.current[getActiveItemIndex() + columns];
    if (item && !item.disabled) {
      focusItem(item.ref.current);
      return;
    }
    if (!item || item && item.disabled) {
      return goToNextPage(orientation === 'grid' ? columns : 1);
    }
  }, [items, activeItem, focusFirst, columns, orientation, getActiveItemIndex, goToNextPage]);
  // focus the previous item in the list that isn't disabled
  const focusPrevious = useCallback(() => {
    if (!activeItem) {
      return focusLast();
    }
    // reverse the items so we iterate backwards
    const nodes = [...items.current].reverse();
    // search nodes after the active one to find a tabbable item
    for (const item of nodes.slice(getActiveItemIndex(nodes) + 1)) {
      if (!item.disabled) {
        focusItem(item.ref.current);
        return;
      }
    }
    // if there are no focusable items before the current node then focus the last
    // tabbable node if wrapping is enabled
    if (wrap) {
      focusLast();
      return;
    }
    goToPreviousPage(1);
  }, [items, focusLast, wrap, activeItem, getActiveItemIndex, goToPreviousPage]);
  const setDisabled = useCallback((focusableItem, isItemDisabled) => {
    // only perform the update if the disabled state has actually changed
    const disabled = disabledItems.current.get(focusableItem.ref.current);
    if (disabled === isItemDisabled) {
      return;
    }
    // update the disabled state
    disabledItems.current.set(focusableItem.ref.current, isItemDisabled);
  }, [disabledItems]);
  // find the nearest sibling to activate
  const findNearestSibling = useCallback(item => {
    if (!item) {
      return undefined;
    }
    const index = items.current.indexOf(item);
    // get the items before and after the active item
    const before = items.current.slice(0, index);
    const after = items.current.slice(index + 1);
    // if the current item is after the half way point then we should search backwards, otherwise forwards
    const search = index > items.current.length / 2 ? [...before, ...after].reverse() : [...after, ...before];
    // find the nearest sibling that isn't disabled
    return search.find(i => !i.disabled);
  }, [items]);
  // register a callback to be called when the active item changes
  const onFocusItemChange = useCallback(callback => {
    activeItemChangeCallbacks.current.push(callback);
    // return a function to remove the callback
    return () => {
      activeItemChangeCallbacks.current = activeItemChangeCallbacks.current.filter(cb => cb !== callback);
    };
  }, []);
  // validate the active item
  useEffect(() => {
    var _a;
    // if there are no items in the list then clear the active item
    if (items.current.length === 0) {
      return setActiveItem(undefined);
    }
    // if there is a focusable item without an associated element then we have changed page
    // and are waiting to focus the item
    if (activeItem.current && !activeItem.current.ref) {
      const itemToActivate = items.current.find(item => isActiveItem(item.id));
      if (itemToActivate && itemToActivate.ref.current) {
        setActiveItem(itemToActivate.id);
        focusItem(itemToActivate.ref.current);
      }
      return;
    }
    // find the item that is currently active - we cant use activeItem as it is a partial
    const currentActiveItem = items.current.find(item => isActiveItem(item.id));
    const nearestSibling = findNearestSibling(currentActiveItem);
    // if the active item is no longer present in the list then we should activate the closest sibling
    if (activeItem && (!currentActiveItem || !currentActiveItem.ref.current) && nearestSibling) {
      setActiveItem(nearestSibling.id);
      // if the current item was focused then we should focus the nearest sibling
      if ((currentActiveItem === null || currentActiveItem === void 0 ? void 0 : currentActiveItem.isFocused) && (nearestSibling === null || nearestSibling === void 0 ? void 0 : nearestSibling.ref.current)) {
        setInteractionModality('keyboard');
        focusItem(nearestSibling.ref.current);
      }
      return;
    }
    // if there is no active item then we should activate the first non-disabled item
    if (!currentActiveItem) {
      return setActiveItem((_a = items.current.find(item => !item.disabled)) === null || _a === void 0 ? void 0 : _a.id);
    }
    // if the active item is disabled then we should activate the closest sibling
    if (currentActiveItem.disabled) {
      if (currentActiveItem.isFocused && nearestSibling) {
        setActiveItem(nearestSibling.id);
        setInteractionModality('keyboard');
        focusItem(nearestSibling.ref.current);
      }
      return;
    }
  }, [findNearestSibling, isActiveItem, items, setActiveItem, disabledItems]);
  // Handle autofocus
  useEffect(() => {
    var _a, _b;
    if (isPendingAutoFocus.current && items.current.length > 0) {
      isPendingAutoFocus.current = false;
      // if there is an active item then focus it, otherwise focus the first item
      if (activeItem.current && ((_a = activeItem.current) === null || _a === void 0 ? void 0 : _a.ref) && !((_b = activeItem.current) === null || _b === void 0 ? void 0 : _b.disabled)) {
        focusItem(activeItem.current.ref.current);
      } else {
        focusFirst();
      }
    }
  }, [items, focusFirst, activeItem]);
  useImperativeHandle(controller, () => ({
    setActiveItem
  }));
  return React.createElement(FocusKeyManagerContext.Provider, {
    value: {
      addItem,
      removeItem,
      activeItem: activeItem.current,
      activeItemRef: activeItem,
      setActiveItem,
      setDisabled,
      focusFirst,
      focusNext,
      focusLast,
      focusPrevious,
      focusAbove,
      focusBelow,
      goToPreviousPage,
      goToNextPage,
      onFocusItemChange,
      orientation: orientation !== null && orientation !== void 0 ? orientation : 'vertical'
    }
  }, children);
}

export { ActiveDescendantProvider as A, FocusKeyManagerContext as F, LegacyActiveDescendantKeyManager as L, SkipLink as S, useActiveDescendantItem as a, ActiveDescendantKeyManagerContext as b, FocusKeyManager as c, detectModality as d, focusWithModality as f, skipLinkManager as s, useActiveDescendant as u };
