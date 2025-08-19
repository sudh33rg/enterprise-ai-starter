import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { forwardRef } from 'react';
import { s as styleInject } from './style-inject.es.esm.js';

var css_248z = ".uxa-progress-bar,\n:host {\n  height: var(--uxa-progress-bar__height);\n  background: var(--uxa-progress-bar__background-color);\n  border: var(--uxa-progress-bar__border);\n  border-radius: var(--uxa-progress-bar__border-radius);\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n.uxa-progress-bar .uxa-progress-bar-track,\n:host .uxa-progress-bar-track {\n  height: 100%;\n  border-radius: var(--uxa-progress-bar-track__border-radius);\n  background: var(--uxa-progress-bar-track__background-color);\n}";
styleInject(css_248z);

const ProgressBar = forwardRef((_a, ref) => {
  var {
      value = 0,
      min = 0,
      max = 100
    } = _a,
    htmlProps = __rest(_a, ["value", "min", "max"]);
  return React.createElement("div", Object.assign({
    ref: ref,
    role: "progressbar",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value
  }, mergeProps({
    className: 'uxa-progress-bar'
  }, htmlProps)), React.createElement("div", {
    className: "uxa-progress-bar-track",
    style: {
      width: `${(value - min) / (max - min) * 100}%`
    }
  }));
});
/** Define the Prop Type information */
ProgressBar.propTypes = {
  /** The value the bar should represent. This will be compared to the min/max value to determine the width of the bar. */
  value: PropTypes__default.number.isRequired,
  /** The minimum allowed value for the control. */
  min: PropTypes__default.number,
  /** The maximum allowed value for the control. */
  max: PropTypes__default.number
};

export { ProgressBar };
