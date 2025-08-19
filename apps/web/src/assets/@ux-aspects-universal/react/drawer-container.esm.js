import PropTypes__default from 'prop-types';
import * as React from 'react';
import { createContext, useContext, useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { o as DragHandleIcon } from './zoom-out.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';
import { getSizeFromMouseMove, getDragOffset, getSizeFromKeyDown, DrawerAnimation } from '@ux-aspects-universal/core/drawer';
import { u as useDirection } from './direction.esm.js';
import clsx from 'clsx';
import { u as useIsomorphicEffect } from './use-isomorphic-effect.esm.js';
import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';

var css_248z$2 = "/* Add focus outline and offset to an element */\n:host,\n.uxa-drawer-resize-handle {\n  flex: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  --uxa-focus-outline__offset: 0;\n  --uxa-icon__size: var(--uxa-drawer-resize-handle-icon__size);\n  --uxa-icon__fill: var(--uxa-drawer-resize-handle-icon__fill);\n}\n:host:hover, :host.uxa-dragging,\n.uxa-drawer-resize-handle:hover,\n.uxa-drawer-resize-handle.uxa-dragging {\n  --uxa-icon__fill: var(--uxa-drawer-resize-handle-icon__fill--hover);\n}\n:host:focus,\n.uxa-drawer-resize-handle:focus {\n  z-index: 1;\n  outline-offset: var(--uxa-focus-outline__offset);\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n:host.uxa-placement-start,\n.uxa-drawer-resize-handle.uxa-placement-start {\n  flex-direction: row;\n  border-inline-start-width: var(--uxa-drawer-resize-handle__border-width);\n  border-inline-start-style: var(--uxa-drawer-resize-handle__border-style);\n  border-inline-start-color: var(--uxa-drawer-resize-handle__border-color);\n}\n:host.uxa-placement-start:hover, :host.uxa-placement-start.uxa-dragging,\n.uxa-drawer-resize-handle.uxa-placement-start:hover,\n.uxa-drawer-resize-handle.uxa-placement-start.uxa-dragging {\n  --uxa-drawer-resize-handle__border-color: var(--uxa-drawer-resize-handle__border-color--hover);\n}\n:host.uxa-placement-end,\n.uxa-drawer-resize-handle.uxa-placement-end {\n  flex-direction: row-reverse;\n  border-inline-end-width: var(--uxa-drawer-resize-handle__border-width);\n  border-inline-end-style: var(--uxa-drawer-resize-handle__border-style);\n  border-inline-end-color: var(--uxa-drawer-resize-handle__border-color);\n}\n:host.uxa-placement-end:hover, :host.uxa-placement-end.uxa-dragging,\n.uxa-drawer-resize-handle.uxa-placement-end:hover,\n.uxa-drawer-resize-handle.uxa-placement-end.uxa-dragging {\n  --uxa-drawer-resize-handle__border-color: var(--uxa-drawer-resize-handle__border-color--hover);\n}\n:host.uxa-placement-top,\n.uxa-drawer-resize-handle.uxa-placement-top {\n  flex-direction: column;\n  border-top-width: var(--uxa-drawer-resize-handle__border-width);\n  border-top-style: var(--uxa-drawer-resize-handle__border-style);\n  border-top-color: var(--uxa-drawer-resize-handle__border-color);\n}\n:host.uxa-placement-top:hover, :host.uxa-placement-top.uxa-dragging,\n.uxa-drawer-resize-handle.uxa-placement-top:hover,\n.uxa-drawer-resize-handle.uxa-placement-top.uxa-dragging {\n  --uxa-drawer-resize-handle__border-color: var(--uxa-drawer-resize-handle__border-color--hover);\n}\n:host.uxa-placement-bottom,\n.uxa-drawer-resize-handle.uxa-placement-bottom {\n  flex-direction: column-reverse;\n  border-bottom-width: var(--uxa-drawer-resize-handle__border-width);\n  border-bottom-style: var(--uxa-drawer-resize-handle__border-style);\n  border-bottom-color: var(--uxa-drawer-resize-handle__border-color);\n}\n:host.uxa-placement-bottom:hover, :host.uxa-placement-bottom.uxa-dragging,\n.uxa-drawer-resize-handle.uxa-placement-bottom:hover,\n.uxa-drawer-resize-handle.uxa-placement-bottom.uxa-dragging {\n  --uxa-drawer-resize-handle__border-color: var(--uxa-drawer-resize-handle__border-color--hover);\n}\n:host.uxa-placement-start, :host.uxa-placement-end,\n.uxa-drawer-resize-handle.uxa-placement-start,\n.uxa-drawer-resize-handle.uxa-placement-end {\n  width: var(--uxa-drawer-resize-handle__width--vertical);\n  cursor: ew-resize;\n}\n:host.uxa-placement-top, :host.uxa-placement-bottom,\n.uxa-drawer-resize-handle.uxa-placement-top,\n.uxa-drawer-resize-handle.uxa-placement-bottom {\n  height: var(--uxa-drawer-resize-handle__height--horizontal);\n  cursor: ns-resize;\n  --uxa-icon__transform: rotate(90deg);\n}";
styleInject(css_248z$2);

const DrawerContext = createContext(undefined);
function useDrawerContext() {
  return useContext(DrawerContext);
}

function useDrawerResizeHandle({
  ref,
  size,
  minSize,
  maxSize,
  placement,
  onSizeChange,
  unit,
  ariaLabel
}) {
  const direction = useDirection();
  const {
    drawerContainerRef
  } = useDrawerContext();
  /** @internal Whether a mouse drag is in progress. */
  const [isDragging, setIsDragging] = useState(false);
  /** Offset of the mousedown event from the edge of the drawer. */
  const dragOffsetPixels = useRef(0);
  const isRtl = useMemo(() => direction === 'rtl', [direction]);
  const onMouseMove = useCallback(event => {
    event.preventDefault();
    const newSize = getSizeFromMouseMove(event, drawerContainerRef.current.getBoundingClientRect(), unit, dragOffsetPixels.current, placement, isRtl, minSize, maxSize);
    onSizeChange === null || onSizeChange === void 0 ? void 0 : onSizeChange(newSize);
  }, [maxSize, minSize, onSizeChange, isRtl, placement, unit, drawerContainerRef, dragOffsetPixels]);
  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mouseleave', onMouseUp);
  }, [onMouseMove, setIsDragging]);
  const onDragStart = useCallback(event => {
    event.preventDefault();
    setIsDragging(true);
    dragOffsetPixels.current = getDragOffset(event.nativeEvent, placement, ref.current, direction === 'rtl');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, {
      once: true
    });
    // if the mouse leave s the window then stop dragging, otherwise if they
    // mouse up outside t he window dragging will continue even when the mouse
    // is up
    document.addEventListener('mouseleave', onMouseUp, {
      once: true
    });
  }, [onMouseMove, onMouseUp, setIsDragging, direction, ref, placement]);
  const onKeyDown = useCallback(event => {
    onSizeChange === null || onSizeChange === void 0 ? void 0 : onSizeChange(getSizeFromKeyDown(event.nativeEvent, size, placement, unit, drawerContainerRef.current.getBoundingClientRect(), isRtl, minSize, maxSize));
  }, [size, placement, unit, isRtl, minSize, maxSize, onSizeChange, drawerContainerRef]);
  return {
    drawerResizeHandleProps: {
      'aria-label': ariaLabel,
      role: 'seperator',
      tabIndex: 0,
      onMouseDown: onDragStart,
      onKeyDown: onKeyDown,
      className: clsx('uxa-drawer-resize-handle', {
        'uxa-placement-top': placement === 'top',
        'uxa-placement-bottom': placement === 'bottom',
        'uxa-placement-start': placement === 'start',
        'uxa-placement-end': placement === 'end',
        'uxa-dragging': isDragging
      })
    }
  };
}

const DrawerResizeHandle = ({
  size,
  minSize,
  maxSize,
  placement,
  onSizeChange,
  unit,
  ariaLabel
}) => {
  const ref = useRef(null);
  const {
    drawerResizeHandleProps
  } = useDrawerResizeHandle({
    ref,
    size,
    minSize,
    maxSize,
    placement,
    onSizeChange,
    unit,
    ariaLabel
  });
  return React.createElement("div", Object.assign({
    ref: ref
  }, drawerResizeHandleProps), React.createElement(DragHandleIcon, {
    "aria-hidden": "true",
    className: "uxa-drawer-resize-handle-icon",
    name: "dragHandle"
  }));
};

var css_248z$1 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:host,\n.uxa-drawer {\n  display: block;\n  position: relative;\n  width: var(--uxa-drawer__width, 100%);\n  height: var(--uxa-drawer__height, 100%);\n  animation-duration: var(--uxa-drawer__animation-duration);\n  animation-fill-mode: forwards;\n}\n:host.uxa-placement-start .uxa-drawer-content,\n.uxa-drawer.uxa-placement-start .uxa-drawer-content {\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-end .uxa-drawer-content,\n.uxa-drawer.uxa-placement-end .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-top .uxa-drawer-content,\n.uxa-drawer.uxa-placement-top .uxa-drawer-content {\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-bottom .uxa-drawer-content,\n.uxa-drawer.uxa-placement-bottom .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-opening.uxa-placement-start, :host.uxa-opening.uxa-placement-end,\n.uxa-drawer.uxa-opening.uxa-placement-start,\n.uxa-drawer.uxa-opening.uxa-placement-end {\n  animation-name: opening-horizontal;\n}\n:host.uxa-opening.uxa-placement-top, :host.uxa-opening.uxa-placement-bottom,\n.uxa-drawer.uxa-opening.uxa-placement-top,\n.uxa-drawer.uxa-opening.uxa-placement-bottom {\n  animation-name: opening-vertical;\n}\n:host.uxa-closing.uxa-placement-start, :host.uxa-closing.uxa-placement-end,\n.uxa-drawer.uxa-closing.uxa-placement-start,\n.uxa-drawer.uxa-closing.uxa-placement-end {\n  animation-name: closing-horizontal;\n}\n:host.uxa-closing.uxa-placement-top, :host.uxa-closing.uxa-placement-bottom,\n.uxa-drawer.uxa-closing.uxa-placement-top,\n.uxa-drawer.uxa-closing.uxa-placement-bottom {\n  animation-name: closing-vertical;\n}\n:host.uxa-closed,\n.uxa-drawer.uxa-closed {\n  display: none;\n}\n:host.uxa-placement-start,\n.uxa-drawer.uxa-placement-start {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-end: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--start);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--start);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--start\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--start);\n}\n:host.uxa-placement-end,\n.uxa-drawer.uxa-placement-end {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-start: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--end);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--end);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--end);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--end);\n}\n:host.uxa-placement-top,\n.uxa-drawer.uxa-placement-top {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__bottom: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--top);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--top);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--top);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--top);\n}\n:host.uxa-placement-bottom,\n.uxa-drawer.uxa-placement-bottom {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__top: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--bottom);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--bottom);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--bottom\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--bottom);\n}\n:host.uxa-drawer-overlay,\n.uxa-drawer.uxa-drawer-overlay {\n  position: absolute;\n}\n:host.uxa-drawer-overlay.uxa-placement-start,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-start {\n  inset-inline-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-end,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-end {\n  inset-inline-end: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-top,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-top {\n  inset-block-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-bottom,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-bottom {\n  inset-block-end: 0;\n}\n\n.uxa-drawer-wrapper {\n  display: flex;\n  position: absolute;\n  flex-direction: var(--uxa-drawer-wrapper__flex-direction);\n  top: var(--uxa-drawer-wrapper__top);\n  bottom: var(--uxa-drawer-wrapper__bottom);\n  inset-inline-start: var(--uxa-drawer-wrapper__inset-inline-start);\n  inset-inline-end: var(--uxa-drawer-wrapper__inset-inline-end);\n  width: var(--uxa-drawer-wrapper__width, 100%);\n  height: var(--uxa-drawer-wrapper__height, 100%);\n}\n\n.uxa-drawer-content {\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n  box-shadow: var(--uxa-drawer-content__box-shadow);\n  background-color: var(--uxa-drawer-content__background-color);\n  border-width: var(--uxa-drawer-content__border-width-top) var(--uxa-drawer-content__border-width-right) var(--uxa-drawer-content__border-width-bottom) var(--uxa-drawer-content__border-width-left);\n  border-style: var(--uxa-drawer-content__border-style);\n  border-color: var(--uxa-drawer-content__border-color);\n}\n\n@media screen and (prefers-reduced-motion) {\n  :host {\n    animation-duration: 0;\n  }\n}\n@keyframes opening-horizontal {\n  from {\n    width: 0;\n  }\n  to {\n    width: var(--uxa-drawer__width, 100%);\n  }\n}\n@keyframes closing-horizontal {\n  from {\n    width: var(--uxa-drawer__width, 100%);\n  }\n  to {\n    width: 0;\n  }\n}\n@keyframes opening-vertical {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--uxa-drawer__height, 100%);\n  }\n}\n@keyframes closing-vertical {\n  from {\n    height: var(--uxa-drawer__height, 100%);\n  }\n  to {\n    height: 0;\n  }\n}";
styleInject(css_248z$1);

function useDrawer({
  ref,
  isOpen,
  size,
  unit,
  mode,
  placement,
  resizable,
  onSizeChange
}) {
  const {
    setPlacement,
    setMode
  } = useDrawerContext();
  /** @internal Store the animation state. */
  const [animation, setAnimation] = useState(DrawerAnimation.Initial);
  // Store dimensions of the wrapper
  const [dimensions, setDimensions] = useState({
    width: '',
    height: ''
  });
  const cssSize = useMemo(() => {
    const un = unit === 'percent' ? '%' : 'px';
    const contentSize = `${size}${un}`;
    return resizable ? `calc(${contentSize} + var(--uxa-drawer-resize-handle__size))` : contentSize;
  }, [resizable, size, unit]);
  const drawerWidth = useMemo(() => placement === 'start' || placement === 'end' ? `${cssSize}` : undefined, [placement, cssSize]);
  const drawerHeight = useMemo(() => placement === 'top' || placement === 'bottom' ? `${cssSize}` : undefined, [placement, cssSize]);
  const setWrapperDimensions = useCallback(() => {
    if (ref.current) {
      setDimensions({
        width: `${ref.current.offsetWidth}px`,
        height: `${ref.current.offsetHeight}px`
      });
    }
  }, [ref]);
  useIsomorphicEffect(() => {
    // if the component is open when it is first loaded, don't animate it
    if (animation === DrawerAnimation.Initial) {
      setAnimation(DrawerAnimation.None);
    } else if (isOpen) {
      setAnimation(DrawerAnimation.Opening);
    } else {
      setAnimation(DrawerAnimation.Closing);
    }
  }, [isOpen]);
  const onAnimationEnd = () => {
    setAnimation(DrawerAnimation.None);
    setWrapperDimensions();
  };
  // on each re-render ensure that the context is updated with the latest props
  useIsomorphicEffect(() => {
    if (placement) {
      setPlacement(placement);
    }
    if (mode) {
      setMode(mode);
    }
  }, [placement, mode, setPlacement, setMode]);
  useEffect(() => {
    if (isOpen) {
      setWrapperDimensions();
    }
  }, [size, isOpen, setWrapperDimensions]);
  const onResize = useCallback(_size => {
    if (_size !== size) {
      onSizeChange === null || onSizeChange === void 0 ? void 0 : onSizeChange(_size);
    }
  }, [onSizeChange, size]);
  return {
    drawerProps: {
      onAnimationEnd,
      className: clsx('uxa-drawer', {
        'uxa-open': isOpen && animation === DrawerAnimation.None,
        'uxa-opening': animation === DrawerAnimation.Opening,
        'uxa-closed': !isOpen && animation === DrawerAnimation.None,
        'uxa-closing': animation === DrawerAnimation.Closing,
        'uxa-drawer-overlay': mode === 'overlay',
        'uxa-placement-top': placement === 'top',
        'uxa-placement-bottom': placement === 'bottom',
        'uxa-placement-start': placement === 'start',
        'uxa-placement-end': placement === 'end'
      }),
      style: {
        '--uxa-drawer__width': drawerWidth,
        '--uxa-drawer__height': drawerHeight
      }
    },
    drawerWrapperProps: {
      className: 'uxa-drawer-wrapper',
      style: {
        '--uxa-drawer-wrapper__width': animation === DrawerAnimation.Closing || animation === DrawerAnimation.Opening || !isOpen ? dimensions.width : undefined,
        '--uxa-drawer-wrapper__height': animation === DrawerAnimation.Closing || animation === DrawerAnimation.Opening || !isOpen ? dimensions.height : undefined
      }
    },
    onResize
  };
}

const Drawer = ({
  isOpen = false,
  size = 0,
  minSize = undefined,
  maxSize = undefined,
  unit = 'pixel',
  mode = 'adjacent',
  placement = 'start',
  resizable = false,
  children,
  onSizeChange,
  resizeHandleAriaLabel = 'Drawer resize handle'
}) => {
  const ref = useRef(null);
  const {
    drawerProps,
    drawerWrapperProps,
    onResize
  } = useDrawer({
    ref,
    isOpen,
    size,
    unit,
    mode,
    placement,
    resizable,
    onSizeChange
  });
  return React.createElement("div", Object.assign({}, drawerProps), React.createElement("div", Object.assign({
    ref: ref
  }, drawerWrapperProps), placement === 'top' || placement === 'start' ? React.createElement("div", {
    className: "uxa-drawer-content"
  }, children) : null, resizable && React.createElement(DrawerResizeHandle, {
    ariaLabel: resizeHandleAriaLabel,
    placement: placement,
    unit: unit,
    size: size,
    minSize: minSize,
    maxSize: maxSize,
    onSizeChange: onResize
  }), placement === 'bottom' || placement === 'end' ? React.createElement("div", {
    className: "uxa-drawer-content"
  }, children) : null));
};
/** Define the Prop Type information */
Drawer.propTypes = {
  /** Whether the drawer is open or not. */
  isOpen: PropTypes__default.bool,
  /** The size of the drawer panel. The CSS unit is determined by unit input. */
  size: PropTypes__default.number,
  /** The minimum height/width of the drawer panel. The CSS unit is determined by unit input. */
  minSize: PropTypes__default.number,
  /** The maximum height/width of the drawer panel. The CSS unit is determined by unit input. */
  maxSize: PropTypes__default.number,
  /** Selected CSS unit for the size of the drawer. Default to 'pixel'. */
  unit: PropTypes__default.oneOf(['pixel', 'percent']),
  /** The display mode of the drawer. */
  mode: PropTypes__default.oneOf(['adjacent', 'overlay']),
  /** Where the drawer is positioned relative to the window. */
  placement: PropTypes__default.oneOf(['top', 'bottom', 'start', 'end']),
  /** Whether the drawer is resizable. */
  resizable: PropTypes__default.bool,
  /** Emits when size value changes. */
  onSizeChange: PropTypes__default.func,
  /** `aria-label` for the resize handle. */
  resizeHandleAriaLabel: PropTypes__default.string
};

var css_248z = ":host,\n.uxa-drawer-container {\n  display: flex;\n  width: var(--uxa-drawer-container__width, 100%);\n  height: var(--uxa-drawer-container__height, 100%);\n  overflow: hidden;\n  background-color: var(--uxa-drawer-container__background-color);\n}\n:host.uxa-drawer-overlay,\n.uxa-drawer-container.uxa-drawer-overlay {\n  position: relative;\n}\n:host.uxa-placement-start, :host.uxa-placement-end,\n.uxa-drawer-container.uxa-placement-start,\n.uxa-drawer-container.uxa-placement-end {\n  flex-direction: row;\n}\n:host.uxa-placement-top, :host.uxa-placement-bottom,\n.uxa-drawer-container.uxa-placement-top,\n.uxa-drawer-container.uxa-placement-bottom {\n  flex-direction: column;\n}\n\n.uxa-drawer-container-main {\n  flex: 1;\n  overflow: auto;\n}";
styleInject(css_248z);

const DrawerContainer = _a => {
  var {
      drawer,
      children,
      id
    } = _a,
    props = __rest(_a, ["drawer", "children", "id"]);
  const drawerContainerRef = useRef(null);
  const [mode, setMode] = useState('adjacent');
  const [placement, setPlacement] = useState('start');
  return React.createElement(DrawerContext.Provider, {
    value: {
      drawerContainerRef,
      placement,
      setPlacement,
      mode,
      setMode
    }
  }, React.createElement("div", Object.assign({
    ref: drawerContainerRef
  }, mergeProps({
    className: clsx('uxa-drawer-container', {
      'uxa-placement-top': placement === 'top',
      'uxa-placement-bottom': placement === 'bottom',
      'uxa-placement-start': placement === 'start',
      'uxa-placement-end': placement === 'end',
      'uxa-drawer-overlay': mode === 'overlay'
    }),
    id
  }, props)), placement === 'top' || placement === 'start' ? drawer : null, React.createElement("div", {
    className: "uxa-drawer-container-main"
  }, children), placement === 'bottom' || placement === 'end' ? drawer : null));
};
/** Define the Prop Type information */
DrawerContainer.propTypes = {
  /** Whether the drawer is open or not. */
  drawer: PropTypes__default.element
};

export { Drawer as D, DrawerContainer as a, DrawerResizeHandle as b, useDrawer as u };
