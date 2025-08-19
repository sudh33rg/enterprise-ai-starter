import { _ as __rest } from './_tslib.esm.js';
import { mergeRefs, mergeProps } from '@react-aria/utils';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { forwardRef, useRef, useEffect, useState, useCallback } from 'react';
import './reducer-provider.esm.js';
import { c as createContext } from './context.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';

const [AvatarConfiguration, useAvatarConfig] = createContext({
  size: 'medium',
  color: 'raspberry'
});

var AvatarState;
(function (AvatarState) {
  AvatarState[AvatarState["Idle"] = 0] = "Idle";
  AvatarState[AvatarState["Loading"] = 1] = "Loading";
  AvatarState[AvatarState["Loaded"] = 2] = "Loaded";
  AvatarState[AvatarState["Error"] = 3] = "Error";
})(AvatarState || (AvatarState = {}));
const [AvatarProvider, useAvatarContext] = createContext();

var css_248z$1 = ":host,\n.uxa-avatar-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n:host.uxa-hidden,\n.uxa-avatar-image.uxa-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  left: 0;\n}\n:host.uxa-hidden [dir=rtl],\n.uxa-avatar-image.uxa-hidden [dir=rtl] {\n  left: auto;\n  right: 0;\n}";
styleInject(css_248z$1);

const AvatarImage = forwardRef((props, ref) => {
  const {
    state,
    setState
  } = useAvatarContext();
  const internalRef = useRef(null);
  useEffect(() => {
    var _a, _b;
    // on mount mark the avatar as loading
    setState(AvatarState.Loading);
    // if there is no src then mark the avatar as errored
    if (((_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.src) === '') {
      setState(AvatarState.Error);
    }
    // if loading has already completed then mark the avatar as loaded
    if ((_b = internalRef.current) === null || _b === void 0 ? void 0 : _b.complete) {
      setState(AvatarState.Loaded);
    }
  }, [setState]);
  // if the image has errored then do not render it
  if (state === AvatarState.Error) {
    return null;
  }
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", Object.assign({
      ref: mergeRefs(internalRef, ref)
    }, mergeProps({
      onLoad: () => setState(AvatarState.Loaded),
      onError: () => setState(AvatarState.Error),
      className: clsx('uxa-avatar-image', {
        'uxa-hidden': state !== AvatarState.Loaded
      })
    }, props)))
  );
});

var css_248z = ":host,\n.uxa-avatar {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: var(--uxa-avatar__border-radius);\n  cursor: default;\n  color: var(--uxa-avatar__color);\n  box-sizing: border-box;\n}\n:host.uxa-bordered,\n.uxa-avatar.uxa-bordered {\n  border: var(--uxa-avatar__border-width) solid var(--uxa-avatar__border-color--bordered);\n}\n:host.uxa-interactive:hover,\n.uxa-avatar.uxa-interactive:hover {\n  box-shadow: 0 0 0 var(--uxa-avatar__border-width) var(--uxa-avatar__border-color--hover);\n}\n:host.uxa-interactive:active,\n.uxa-avatar.uxa-interactive:active {\n  box-shadow: 0 0 0 var(--uxa-avatar__border-width) var(--uxa-avatar__border-color--active);\n}\n:host:focus-visible, :host.uxa-focused,\n.uxa-avatar:focus-visible,\n.uxa-avatar.uxa-focused {\n  outline: var(--uxa-avatar__outline--focused);\n  outline-offset: var(--uxa-avatar__outline-offset--focused);\n}\n:host.uxa-extra-small,\n.uxa-avatar.uxa-extra-small {\n  width: var(--uxa-avatar__size--xs);\n  height: var(--uxa-avatar__size--xs);\n  font-size: var(--uxa-avatar__font-size--xs);\n  line-height: var(--uxa-avatar__line-height--xs);\n  font-weight: var(--uxa-avatar__font-weight--xs);\n  --uxa-avatar__border-width: var(--uxa-avatar__border-width--xs);\n}\n:host.uxa-small,\n.uxa-avatar.uxa-small {\n  width: var(--uxa-avatar__size--sm);\n  height: var(--uxa-avatar__size--sm);\n  font-size: var(--uxa-avatar__font-size--sm);\n  line-height: var(--uxa-avatar__line-height--sm);\n  font-weight: var(--uxa-avatar__font-weight--sm);\n  --uxa-avatar__border-width: var(--uxa-avatar__border-width--sm);\n}\n:host.uxa-medium,\n.uxa-avatar.uxa-medium {\n  width: var(--uxa-avatar__size--md);\n  height: var(--uxa-avatar__size--md);\n  font-size: var(--uxa-avatar__font-size--md);\n  line-height: var(--uxa-avatar__line-height--md);\n  font-weight: var(--uxa-avatar__font-weight--md);\n  --uxa-avatar__border-width: var(--uxa-avatar__border-width--md);\n}\n:host.uxa-large,\n.uxa-avatar.uxa-large {\n  width: var(--uxa-avatar__size--lg);\n  height: var(--uxa-avatar__size--lg);\n  font-size: var(--uxa-avatar__font-size--lg);\n  line-height: var(--uxa-avatar__line-height--lg);\n  font-weight: var(--uxa-avatar__font-weight--lg);\n  --uxa-avatar__border-width: var(--uxa-avatar__border-width--lg);\n}\n:host.uxa-raspberry,\n.uxa-avatar.uxa-raspberry {\n  background-color: var(--jato-avatar-background-pink);\n}\n:host.uxa-plum,\n.uxa-avatar.uxa-plum {\n  background-color: var(--jato-avatar-background-purple);\n}\n:host.uxa-blue,\n.uxa-avatar.uxa-blue {\n  background-color: var(--jato-avatar-background-blue);\n}\n:host.uxa-cerulean,\n.uxa-avatar.uxa-cerulean {\n  background-color: var(--jato-avatar-background-cerulean);\n}\n:host.uxa-teal,\n.uxa-avatar.uxa-teal {\n  background-color: var(--jato-avatar-background-teal);\n}\n:host.uxa-navy,\n.uxa-avatar.uxa-navy {\n  background-color: var(--jato-avatar-background-navy);\n}\n:host.uxa-steel,\n.uxa-avatar.uxa-steel {\n  background-color: var(--jato-avatar-background-steel);\n}\n:host:has(.uxa-avatar-image), :host:has([uxa-avatar-image]),\n.uxa-avatar:has(.uxa-avatar-image),\n.uxa-avatar:has([uxa-avatar-image]) {\n  background-color: transparent;\n}";
styleInject(css_248z);

const Avatar = forwardRef((_a, ref) => {
  var {
      size,
      color,
      initials,
      isBordered,
      isInteractive,
      src,
      alt
    } = _a,
    props = __rest(_a, ["size", "color", "initials", "isBordered", "isInteractive", "src", "alt"]);
  const config = useAvatarConfig();
  const [state, setState] = useState(AvatarState.Idle);
  // we want to avoid re-rendering the AvatarProvider
  const updateState = useCallback(newState => setState(newState), []);
  // determine whether we should show the initials
  const showInitials = !state || state !== AvatarState.Loaded;
  return React.createElement(AvatarProvider, {
    state: state,
    setState: updateState
  }, React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: clsx('uxa-avatar', {
      [`uxa-${size !== null && size !== void 0 ? size : config.size}`]: true,
      [`uxa-${color !== null && color !== void 0 ? color : config.color}`]: true,
      'uxa-bordered': isBordered,
      'uxa-interactive': isInteractive
    }),
    tabIndex: isInteractive ? 0 : undefined,
    role: isInteractive ? 'button' : undefined
  }, props)), showInitials && React.createElement("span", {
    className: "uxa-avatar-initials"
  }, initials), src && React.createElement(AvatarImage, {
    src: src,
    alt: alt
  })));
});
/** Define the Prop Type information */
Avatar.propTypes = {
  /** The size of the avatar */
  size: PropTypes__default.oneOf(['extra-small', 'small', 'medium', 'large']),
  /** The color of the avatar */
  color: PropTypes__default.oneOf(['raspberry', 'plum', 'blue', 'teal', 'cerulean', 'navy', 'steel']),
  /** The initials to display */
  initials: PropTypes__default.string,
  /** Whether the avatar should have a border */
  isBordered: PropTypes__default.bool,
  /** Whether the avatar should be interactive */
  isInteractive: PropTypes__default.bool
};

export { Avatar as A, AvatarConfiguration as a };
