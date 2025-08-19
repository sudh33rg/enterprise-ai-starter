export { I as InputGroup, S as SearchButton, a as SearchClearButton } from './search-clear-button.esm.js';
import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import * as React from 'react';
import './textarea.esm.js';
import './focusable-option.esm.js';
import 'clsx';
import 'prop-types';
import './style-inject.es.esm.js';
import './validity-provider.esm.js';
import './reducer-provider.esm.js';
import './context.esm.js';
import './split-button-group.esm.js';
import '@react-aria/focus';

const LeadingAddon = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-leading-addon'
  }, props)), children);
};
const TrailingAddon = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-trailing-addon'
  }, props)), children);
};

export { LeadingAddon, TrailingAddon };
