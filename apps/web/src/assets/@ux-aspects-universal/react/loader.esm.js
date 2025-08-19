import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import '@ux-aspects-universal/core/theming';
import './theme-region.esm.js';
import { u as useThemeFamily } from './use-active-theme.esm.js';
import * as React from 'react';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';

var css_248z = ".uxa-loader,\n:host {\n  display: inline-flex;\n  width: var(--uxa-loader__width);\n  justify-content: space-between;\n  align-items: center;\n  gap: calc(var(--uxa-loader-block__size) / 2);\n}\n.uxa-loader.uxa-primary,\n:host.uxa-primary {\n  --uxa-loader-block__background-color: var(--uxa-loader-block__background-color--primary);\n}\n.uxa-loader.uxa-secondary,\n:host.uxa-secondary {\n  --uxa-loader-block__background-color: var(--uxa-loader-block__background-color--secondary);\n}\n.uxa-loader.uxa-loader-bounce .uxa-loader-block,\n:host.uxa-loader-bounce .uxa-loader-block {\n  animation-name: uxa-loader-bounce-animation;\n}\n.uxa-loader.uxa-loader-scale .uxa-loader-block,\n:host.uxa-loader-scale .uxa-loader-block {\n  animation-name: uxa-loader-scale-animation;\n}\n\n.uxa-loader-block {\n  height: var(--uxa-loader-block__size);\n  width: var(--uxa-loader-block__size);\n  border-radius: var(--uxa-loader-block__border-radius);\n  background-color: var(--uxa-loader-block__background-color);\n  opacity: var(--uxa-loader-block__opacity);\n  transform-origin: center;\n  animation-duration: var(--uxa-loader-block__animation-duration);\n  animation-iteration-count: infinite;\n  animation-timing-function: var(--uxa-loader-block__animation-timing-function);\n}\n.uxa-loader-block:nth-child(1) {\n  animation-delay: calc(var(--uxa-loader-block__animation-delay) * 0);\n}\n.uxa-loader-block:nth-child(2) {\n  animation-delay: calc(var(--uxa-loader-block__animation-delay) * 1);\n}\n.uxa-loader-block:nth-child(3) {\n  animation-delay: calc(var(--uxa-loader-block__animation-delay) * 2);\n}\n\n@keyframes uxa-loader-bounce-animation {\n  0%, 70%, 100% {\n    transform: translateY(0);\n  }\n  5%, 10% {\n    transform: translateY(25%);\n  }\n  25%, 30% {\n    transform: translateY(-75%);\n  }\n  50%, 55% {\n    transform: translateY(50%);\n  }\n}";
styleInject(css_248z);

const Loader = _a => {
  var {
      size,
      variant = 'primary',
      style
    } = _a,
    htmlProps = __rest(_a, ["size", "variant", "style"]);
  const {
    isJato
  } = useThemeFamily();
  // the divisor differs based on the active theme
  const divisor = isJato ? 4.5 : 4;
  return React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-loader', {
      'uxa-primary': variant === 'primary',
      'uxa-secondary': variant === 'secondary',
      'uxa-loader-bounce': !isJato,
      'uxa-loader-scale': isJato
    }),
    style: Object.assign(Object.assign({}, style), {
      '--uxa-loader__width': typeof size === 'number' ? `${size}px` : size,
      '--uxa-loader-block__size': `calc(var(--uxa-loader__width) / ${divisor})`
    })
  }, htmlProps)), React.createElement("div", {
    className: "uxa-loader-block"
  }), React.createElement("div", {
    className: "uxa-loader-block"
  }), React.createElement("div", {
    className: "uxa-loader-block"
  }));
};
/** Define the Prop Type information */
Loader.propTypes = {
  /** Define the width of the loader. */
  size: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  /** Define the color variant of the loader. */
  variant: PropTypes__default.oneOf(['primary', 'secondary'])
};

export { Loader };
