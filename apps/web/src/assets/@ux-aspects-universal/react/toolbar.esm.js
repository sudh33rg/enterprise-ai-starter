import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import * as React from 'react';
import { forwardRef } from 'react';
import 'clsx';
import { u as useSlots } from './use-slots.esm.js';
import './reducer-provider.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';
import './react-element.esm.js';

var css_248z = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:host,\n.uxa-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--uxa-toolbar__gap);\n  box-sizing: border-box;\n  height: var(--uxa-toolbar__height);\n  padding-inline: var(--uxa-toolbar__padding-inline);\n  padding-block: var(--uxa-toolbar__padding-block);\n  border: var(--uxa-toolbar__border);\n  border-radius: var(--uxa-toolbar__border-radius);\n  background-color: var(--uxa-toolbar__background-color);\n  box-shadow: var(--uxa-toolbar__box-shadow);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--1);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--1);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--1);\n}\n\n:host,\n.uxa-toolbar-button-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n:host,\n.uxa-toolbar-divider {\n  display: inline-flex;\n  justify-content: center;\n  height: var(--uxa-toolbar-divider__height);\n}\n:host:before,\n.uxa-toolbar-divider:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  background-color: var(--uxa-toolbar-divider__background-color);\n  width: var(--uxa-toolbar-divider__thickness);\n}\n\n:host,\n.uxa-toolbar-end,\n.uxa-toolbar-start {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--uxa-toolbar__gap);\n}";
styleInject(css_248z);

const ToolbarEnd = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-toolbar-end'
  }, props)), children);
};

const ToolbarStart = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-toolbar-start'
  }, props)), children);
};

const Toolbar = forwardRef((_a, ref) => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const [toolbarStart, toolbarEnd, defaultChildren] = useSlots(children, ToolbarStart, ToolbarEnd);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-toolbar'
  }, props)), toolbarStart.length === 0 ? React.createElement(ToolbarStart, null, defaultChildren) : toolbarStart, toolbarEnd);
});

const ToolbarButtonGroup = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-toolbar-button-group'
  }, props)), children);
};

const ToolbarDivider = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-toolbar-divider'
  }, props)), children);
};

export { Toolbar, ToolbarButtonGroup, ToolbarDivider, ToolbarEnd, ToolbarStart };
