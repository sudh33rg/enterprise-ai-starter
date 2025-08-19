import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { forwardRef } from 'react';
import { s as styleInject } from './style-inject.es.esm.js';

var css_248z = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n.uxa-panel,\n:host.uxa-panel {\n  display: block;\n  font-family: var(--uxa-panel__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-panel__font-size);\n  color: var(--uxa-panel__color);\n  background-color: var(--uxa-panel__background-color);\n  box-shadow: var(--uxa-panel__box-shadow);\n  border: var(--uxa-panel__border);\n  border-radius: var(--uxa-panel__border-radius);\n  padding-inline: var(--uxa-panel__padding-inline);\n  padding-block: var(--uxa-panel__padding-block);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--1);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--1);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--1);\n}";
styleInject(css_248z);

const Panel = forwardRef((_a, ref) => {
  var {
      is = 'div',
      children
    } = _a,
    htmlProps = __rest(_a, ["is", "children"]);
  const componentProps = mergeProps({
    ref,
    className: 'uxa-panel'
  }, htmlProps);
  return React.createElement(is || 'div', componentProps, children);
});
/** Define the Prop Type information */
Panel.propTypes = {
  /** Name of the element type to render the panel with. */
  is: PropTypes__default.string
};

export { Panel };
