import PropTypes__default from 'prop-types';
import * as React from 'react';
import { useRef, useCallback } from 'react';
import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import { u as useControlled } from './use-controllable.esm.js';
import clsx from 'clsx';
import { u as usePropEffect } from './use-prop-effect.esm.js';
import './reducer-provider.esm.js';
import { u as useUniqueId } from './use-unique-id.esm.js';
import { useFocusRing, getFocusableTreeWalker, focusSafely } from '@react-aria/focus';
import { u as useDirection } from './direction.esm.js';
import { END, HOME, LEFT_ARROW, RIGHT_ARROW } from './keycodes.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';
import './use-mutation-observer.esm.js';

const Tab = ({
  children
}) => {
  /* eslint-disable react/jsx-no-useless-fragment */
  return React.createElement(React.Fragment, null, children);
};
Tab.propTypes = {
  id: PropTypes__default.string,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
  isDisabled: PropTypes__default.bool
};

function useTabs(children) {
  var _a;
  const groupId = useUniqueId('uxa-tabs');
  return (_a = React.Children.map(children, (child, index) => {
    const _a = child.props,
      {
        id,
        label,
        isDisabled
      } = _a,
      props = __rest(_a, ["id", "label", "isDisabled"]);
    return {
      id: id !== null && id !== void 0 ? id : `${groupId}-tab-${index}`,
      label: label,
      isDisabled: isDisabled,
      tab: child,
      props
    };
  })) !== null && _a !== void 0 ? _a : [];
}

const TabButton = _a => {
  var {
      id,
      isActive,
      isDisabled,
      onActivate,
      label
    } = _a,
    props = __rest(_a, ["id", "isActive", "isDisabled", "onActivate", "label"]);
  const direction = useDirection();
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const ref = useRef(null);
  const onKeyDown = event => {
    const walker = getFocusableTreeWalker(ref.current.parentElement);
    let targetNode = null;
    switch (event.keyCode) {
      case RIGHT_ARROW:
        walker.currentNode = ref.current;
        targetNode = direction === 'ltr' ? walker.nextSibling() : walker.previousSibling();
        break;
      case LEFT_ARROW:
        walker.currentNode = ref.current;
        targetNode = direction === 'ltr' ? walker.previousSibling() : walker.nextSibling();
        break;
      case HOME:
        targetNode = direction === 'ltr' ? walker.firstChild() : walker.lastChild();
        break;
      case END:
        targetNode = direction === 'ltr' ? walker.lastChild() : walker.firstChild();
        break;
    }
    if (targetNode) {
      focusSafely(targetNode);
    }
  };
  // If an item receives focus and is not active we should activate the tab
  const onFocus = () => {
    if (!isActive) {
      onActivate();
    }
  };
  return React.createElement("button", Object.assign({
    ref: ref
  }, mergeProps(props, focusProps, {
    onFocus,
    onKeyDown,
    onClick: () => onActivate(),
    className: clsx('uxa-tab', {
      'uxa-selected': isActive && !isDisabled,
      'uxa-disabled': isDisabled,
      'uxa-focused': isFocusVisible
    })
  }), {
    type: "button",
    role: "tab",
    id: id + '-button',
    disabled: isDisabled,
    tabIndex: isActive ? 0 : -1,
    "aria-selected": isActive,
    "aria-controls": id
  }), label, React.createElement("div", {
    className: "uxa-tab-indicator",
    role: "presentation"
  }));
};

var css_248z = "/* Add focus outline and offset to an element */\n.uxa-tab-group,\n:host.uxa-tab-group {\n  display: flex;\n  flex-direction: column;\n  -moz-column-gap: var(--uxa-tab-group__column-gap);\n       column-gap: var(--uxa-tab-group__column-gap);\n  height: 100%;\n}\n.uxa-tab-group[data-variant=secondary],\n:host.uxa-tab-group[data-variant=secondary] {\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--secondary);\n  --uxa-tab-indicator__background-color--hover: var(\n    --uxa-tab-indicator__background-color--secondary-hover\n  );\n  --uxa-tab-indicator__background-color--selected: var(\n    --uxa-tab-indicator__background-color--secondary-selected\n  );\n  --uxa-tab-indicator__background-color--selected-hover: var(\n    --uxa-tab-indicator__background-color--secondary-selected-hover\n  );\n  --uxa-tab-indicator__background-color--active: var(\n    --uxa-tab-indicator__background-color--secondary-active\n  );\n  --uxa-tab-indicator__background-color--selected-active: var(\n    --uxa-tab-indicator__background-color--secondary-selected-active\n  );\n}\n.uxa-tab-group[data-size=small],\n:host.uxa-tab-group[data-size=small] {\n  --uxa-tab-list__height: var(--uxa-tab-list__height--small);\n  --uxa-tab__font-size: var(--uxa-tab__font-size--small);\n}\n.uxa-tab-group[data-size=medium],\n:host.uxa-tab-group[data-size=medium] {\n  --uxa-tab-list__height: var(--uxa-tab-list__height--medium);\n  --uxa-tab__font-size: var(--uxa-tab__font-size--medium);\n}\n.uxa-tab-group[data-orientation=vertical],\n:host.uxa-tab-group[data-orientation=vertical] {\n  flex-direction: row;\n  --uxa-tab__height: var(--uxa-tab__height--vertical);\n  --uxa-tab__padding-inline: 0.75rem;\n  --uxa-tab__padding-block: 0;\n  --uxa-tab__justify-content: flex-start;\n  --uxa-tab-list__flex-direction: column;\n  --uxa-tab-list__height: auto;\n  --uxa-tab-list__border-bottom-width: var(--uxa-tab-list__border-bottom-width--vertical);\n  --uxa-tab-list__border-inline-end-width: var(--uxa-tab-list__border-inline-end-width--vertical);\n  --uxa-tab-indicator__inset-inline-start: 0;\n  --uxa-tab-indicator__width--selected: 3px;\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--vertical);\n  --uxa-tab-indicator__transition: height 0.24s ease-out;\n  --uxa-tab-indicator__translate: translate(0, -50%);\n  --uxa-tab-indicator__top: 50%;\n  --uxa-tab-indicator__border-radius: var(--uxa-tab-indicator__border-radius--vertical);\n  --uxa-tab-indicator__height--hover: var(--uxa-tab-indicator__height--vertical-hover);\n  --uxa-tab-indicator__width--hover: var(--uxa-tab-indicator__width--vertical-hover);\n  --uxa-tab-indicator__width--selected-hover: var(\n    --uxa-tab-indicator__width--vertical-selected-hover\n  );\n  --uxa-tab-indicator__height--active: var(--uxa-tab-indicator__height--vertical-active);\n  --uxa-tab-indicator__width--active: var(--uxa-tab-indicator__width--vertical-active);\n  --uxa-tab-indicator__width--selected-active: var(\n    --uxa-tab-indicator__width--vertical-selected-active\n  );\n  --uxa-tab-indicator__height--selected-active: var(\n    --uxa-tab-indicator__height--vertical-selected-active\n  );\n}\n.uxa-tab-group[data-orientation=vertical] .uxa-tab.uxa-selected,\n:host.uxa-tab-group[data-orientation=vertical] .uxa-tab.uxa-selected {\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--vertical-selected);\n}\n\n.uxa-tab-list {\n  flex: none;\n  display: flex;\n  flex-direction: var(--uxa-tab-list__flex-direction, row);\n  -moz-column-gap: var(--uxa-tab-list__column-gap);\n       column-gap: var(--uxa-tab-list__column-gap);\n  height: var(--uxa-tab-list__height);\n  border-top-width: var(--uxa-tab-list__border-top-width);\n  border-bottom-width: var(--uxa-tab-list__border-bottom-width);\n  border-inline-start-width: var(--uxa-tab-list__border-inline-start-width);\n  border-inline-end-width: var(--uxa-tab-list__border-inline-end-width);\n  border-style: var(--uxa-tab-list__border-style);\n  border-color: var(--uxa-tab-list__border-color);\n}\n\n.uxa-tab {\n  position: relative;\n  display: inline-flex;\n  justify-content: var(--uxa-tab__justify-content);\n  align-items: center;\n  height: var(--uxa-tab__height);\n  text-decoration: none;\n  flex: none;\n  background-color: var(--uxa-tab__background-color);\n  margin-inline: var(--uxa-tab__margin-inline);\n  border: var(--uxa-tab__border);\n  padding-inline: var(--uxa-tab__padding-inline);\n  padding-block: var(--uxa-tab__padding-block);\n  font-family: var(--uxa-tab__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-tab__font-weight);\n  font-size: var(--uxa-tab__font-size);\n  color: var(--uxa-tab__color);\n  text-transform: var(--uxa-tab__text-transform);\n  cursor: var(--uxa-tab__cursor);\n  box-shadow: var(--uxa-tab__box-shadow);\n  min-width: var(--uxa-tab__min-width);\n  max-width: var(--uxa-tab__max-width);\n  white-space: var(--uxa-tab__white-space);\n  border-radius: var(--uxa-tab__border-radius);\n  outline: var(--uxa-tab__outline, none);\n  outline-offset: var(--uxa-tab__outline-offset, 0);\n  --uxa-icon__size: var(--uxa-tab-icon__size);\n}\n.uxa-tab:hover:not(.uxa-disabled) {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--hover);\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--hover);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--hover);\n}\n.uxa-tab:active:not(.uxa-disabled) {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--active);\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--active);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--active);\n}\n.uxa-tab.uxa-focused {\n  --uxa-tab__box-shadow: var(--uxa-tab__box-shadow--focused);\n}\n.uxa-tab.uxa-selected {\n  --uxa-tab__color: var(--uxa-tab__color--selected);\n  --uxa-tab__font-weight: var(--uxa-tab__font-weight--selected);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--selected);\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected);\n}\n.uxa-tab.uxa-selected:hover {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected-hover);\n  --uxa-tab-indicator__background-color: var(\n    --uxa-tab-indicator__background-color--selected-hover\n  );\n}\n.uxa-tab.uxa-selected:active {\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--selected-active);\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected-active);\n  --uxa-tab-indicator__background-color: var(\n    --uxa-tab-indicator__background-color--selected-active\n  );\n}\n.uxa-tab.uxa-disabled {\n  --uxa-tab__color: var(--uxa-tab__color--disabled);\n  --uxa-tab__cursor: var(--uxa-tab__cursor--disabled);\n}\n\n.uxa-tab-indicator,\n:host.uxa-tab-indicator {\n  position: absolute;\n  inset-inline-start: var(--uxa-tab-indicator__inset-inline-start);\n  bottom: 0;\n  width: var(--uxa-tab-indicator__width);\n  margin-inline: auto;\n  margin-block: 0;\n  height: var(--uxa-tab-indicator__height);\n  background-color: var(--uxa-tab-indicator__background-color);\n  transition: var(--uxa-tab-indicator__transition);\n  top: var(--uxa-tab-indicator__top);\n  transform: var(--uxa-tab-indicator__translate);\n  border-radius: var(--uxa-tab-indicator__border-radius);\n}\n\n.uxa-tab-panel {\n  display: none;\n  overflow: auto;\n  font-family: var(--uxa-typography-body__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body__font-weight);\n  font-size: var(--uxa-typography-body__font-size);\n  text-transform: var(--uxa-typography-body__text-transform);\n  color: var(--uxa-typography-body__color);\n  line-height: var(--uxa-typography-body__line-height);\n}\n.uxa-tab-panel:focus {\n  outline: none;\n}\n.uxa-tab-panel.uxa-selected {\n  display: block;\n  flex: 1;\n}";
styleInject(css_248z);

const TabPanel = ({
  tab,
  isActive,
  id
}) => {
  return React.createElement("div", {
    id: id,
    role: "tabpanel",
    "aria-labelledby": id + '-button',
    className: clsx('uxa-tab-panel', {
      'uxa-selected': isActive
    }),
    tabIndex: 0
  }, tab);
};

const TabGroup = _a => {
  var {
      activeId,
      onActiveIdChange,
      activeIndex,
      onActiveIndexChange,
      className,
      variant = 'secondary',
      children,
      size = variant === 'primary' ? 'medium' : 'small',
      orientation = 'horizontal'
    } = _a,
    props = __rest(_a, ["activeId", "onActiveIdChange", "activeIndex", "onActiveIndexChange", "className", "variant", "children", "size", "orientation"]);
  const tabs = useTabs(children);
  // select a tab
  const selectTab = useCallback(id => {
    const index = tabs.findIndex(tab => tab.id === id);
    if (activeId !== id) {
      onActiveIdChange === null || onActiveIdChange === void 0 ? void 0 : onActiveIdChange(id);
    }
    if (index !== activeIndex) {
      onActiveIndexChange === null || onActiveIndexChange === void 0 ? void 0 : onActiveIndexChange(index);
    }
  }, [activeId, activeIndex, onActiveIdChange, onActiveIndexChange, tabs]);
  // select the tab at a given index or fallback to the first available tab
  // if the desired tab is disabled
  const getTargetTab = useCallback(desiredId => {
    var _a, _b;
    const desiredIndex = desiredId ? tabs.findIndex(child => child.id === desiredId) : 0;
    return ((_a = tabs[desiredIndex]) === null || _a === void 0 ? void 0 : _a.isDisabled) ? (_b = tabs.find(child => !child.isDisabled)) === null || _b === void 0 ? void 0 : _b.id : tabs[desiredIndex].id;
  }, [tabs]);
  // store the current selected tab and emit whenever the tab changes
  [activeId, onActiveIdChange] = useControlled(activeId, onActiveIdChange, getTargetTab());
  usePropEffect(activeIndex, id => {
    var _a;
    // behind the scenes we use the id to determine the active tab, index was the old way of doing it.
    // as we want to retain backwards compatibility we will convert the index to an id if it is provided
    if (id !== undefined) {
      // resolve the id from the index
      const resolvedId = (_a = tabs[id]) === null || _a === void 0 ? void 0 : _a.id;
      selectTab(resolvedId);
    }
  });
  return React.createElement("div", Object.assign({
    "data-variant": variant,
    "data-size": size,
    "data-orientation": orientation
  }, mergeProps({
    className: 'uxa-tab-group'
  }, props)), React.createElement("div", {
    className: "uxa-tab-list",
    role: "tablist",
    "aria-orientation": orientation
  }, tabs.map((tab, index) => {
    return React.createElement(TabButton, Object.assign({
      key: index,
      id: tab.id,
      label: tab.label,
      isActive: activeId === tab.id,
      isDisabled: tab.isDisabled,
      onActivate: () => selectTab(tab.id)
    }, tab.props));
  })), tabs.map((tab, index) => {
    return React.createElement(TabPanel, {
      key: index,
      id: tab.id,
      tab: tab.tab,
      isActive: activeId === tab.id
    });
  }));
};
TabGroup.propTypes = {
  /** The id of the active tab. */
  activeId: PropTypes__default.string,
  /** The index of the active tab. */
  activeIndex: PropTypes__default.number,
  /** Emit whenever a new tab is active. */
  onActiveIdChange: PropTypes__default.func,
  /** Emit whenever a new tab is active. */
  onActiveIndexChange: PropTypes__default.func,
  /** Color variant for the tab group. */
  variant: PropTypes__default.oneOf(['primary', 'secondary']),
  /** The size of the tab buttons. */
  size: PropTypes__default.oneOf(['small', 'medium']),
  /** The orientation of the tab buttons. */
  orientation: PropTypes__default.oneOf(['vertical', 'horizontal'])
};

export { Tab, TabGroup };
