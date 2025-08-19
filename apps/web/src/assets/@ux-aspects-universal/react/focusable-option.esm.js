import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { forwardRef, useEffect } from 'react';
import { s as styleInject } from './style-inject.es.esm.js';
import { V as ValidityProvider, u as useValidity } from './validity-provider.esm.js';
import './reducer-provider.esm.js';
import { c as createContext } from './context.esm.js';

var css_248z$7 = ".uxa-form,\n:host.uxa-form {\n  display: grid;\n  align-items: top;\n  gap: var(--uxa-form__gap);\n}\n.uxa-form.uxa-horizontal,\n:host.uxa-form.uxa-horizontal {\n  grid-template-columns: [labels] var(--uxa-form__grid-template-columns--labels, max-content) [controls] var(--uxa-form__grid-template-columns--controls, auto);\n  --uxa-form-field__display: contents;\n  --uxa-form-field-label__grid-column: labels;\n  --uxa-form-field-label__margin-block-end: var(\n    --uxa-form-field-label__margin-block-end--horizontal\n  );\n  --uxa-form-field-label__line-height: var(--uxa-text-input__height);\n  --uxa-form-field-control__grid-column: controls;\n  --uxa-form-field-feedback__grid-column: controls;\n  --uxa-form-field-feedback__margin-block-start: var(\n    --uxa-form-field-feedback__margin-block-start--horizontal\n  );\n  --uxa-form-field-group__display--with-labels: contents;\n  --uxa-form-field-group__grid-column: 1 / 3;\n  --uxa-form-field-group-label__grid-column: 1 / -1;\n  --uxa-form-action-group__grid-column: 1 / 3;\n}";
styleInject(css_248z$7);

const Form = _a => {
  var {
      orientation = 'vertical',
      labelsColumnWidth,
      controlsColumnWidth,
      children
    } = _a,
    props = __rest(_a, ["orientation", "labelsColumnWidth", "controlsColumnWidth", "children"]);
  return React.createElement("form", Object.assign({}, mergeProps({
    className: clsx('uxa-form', {
      'uxa-horizontal': orientation === 'horizontal'
    }),
    style: {
      '--uxa-form__grid-template-columns--labels': labelsColumnWidth,
      '--uxa-form__grid-template-columns--controls': controlsColumnWidth
    }
  }, props)), children);
};
/** Define the Prop Type information */
Form.propTypes = {
  /** Layout of the form, default is 'vertical'. */
  orientation: PropTypes__default.oneOf(['vertical', 'horizontal']),
  /** Width of the labels column in the horizontal orientation. CSS length units. */
  labelsColumnWidth: PropTypes__default.string,
  /** Width of the controls column in the horizontal orientation. CSS length units. */
  controlsColumnWidth: PropTypes__default.string
};

var css_248z$6 = ".uxa-form-action-group,\n:host.uxa-form-action-group {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: var(--uxa-form-action-group__justify-content, flex-end);\n  gap: var(--uxa-form-action-group__gap);\n  grid-column: var(--uxa-form-action-group__grid-column, auto);\n  margin-block-start: var(--uxa-form-action-group__margin-block-start);\n}";
styleInject(css_248z$6);

var css_248z$5 = ".uxa-form-field,\n:host.uxa-form-field {\n  display: var(--uxa-form-field__display, block);\n}\n.uxa-form-field:has(uxa-inline-edit.uxa-small):has(.uxa-inline-edit-control), .uxa-form-field:has(.uxa-inline-edit.uxa-small):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(uxa-inline-edit.uxa-small):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(.uxa-inline-edit.uxa-small):has(.uxa-inline-edit-control) {\n  --uxa-form-field-feedback__margin-block-end: var(\n    --uxa-form-field-feedback__margin-block-end--small\n  );\n}\n.uxa-form-field:has(uxa-inline-edit.uxa-medium):has(.uxa-inline-edit-control), .uxa-form-field:has(.uxa-inline-edit.uxa-medium):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(uxa-inline-edit.uxa-medium):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(.uxa-inline-edit.uxa-medium):has(.uxa-inline-edit-control) {\n  --uxa-form-field-feedback__margin-block-end: var(\n    --uxa-form-field-feedback__margin-block-end--medium\n  );\n}\n.uxa-form-field:has(uxa-inline-edit.uxa-large):has(.uxa-inline-edit-control), .uxa-form-field:has(.uxa-inline-edit.uxa-large):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(uxa-inline-edit.uxa-large):has(.uxa-inline-edit-control),\n:host.uxa-form-field:has(.uxa-inline-edit.uxa-large):has(.uxa-inline-edit-control) {\n  --uxa-form-field-feedback__margin-block-end: var(\n    --uxa-form-field-feedback__margin-block-end--large\n  );\n}";
styleInject(css_248z$5);

const FormField = _a => {
  var {
      isValid = true,
      children
    } = _a,
    props = __rest(_a, ["isValid", "children"]);
  return React.createElement(ValidityProvider.Provider, {
    value: {
      isValid
    }
  }, React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-form-field', {
      'uxa-invalid': !isValid
    })
  }, props)), children));
};
/** Define the Prop Type information */
FormField.propTypes = {
  /** Whether the field is valid. */
  isValid: PropTypes__default.bool
};

var css_248z$4 = "/* Add focus outline and offset to an element */\n.uxa-form-field-feedback,\n:host.uxa-form-field-feedback {\n  grid-column: var(--uxa-form-field-feedback__grid-column, auto);\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  -moz-column-gap: var(--uxa-form-field-feedback__column-gap);\n       column-gap: var(--uxa-form-field-feedback__column-gap);\n  margin-block-start: var(--uxa-form-field-feedback__margin-block-start);\n  margin-inline-end: var(--uxa-form-field-feedback__margin-block-end, 0);\n  box-shadow: var(--uxa-form-field-feedback__box-shadow);\n  border-radius: var(--uxa-form-field-feedback__border-radius);\n  border-top-width: var(--uxa-form-field-feedback__border-width-top);\n  border-right-width: var(--uxa-form-field-feedback__border-width-right);\n  border-bottom-width: var(--uxa-form-field-feedback__border-width-bottom);\n  border-left-width: var(--uxa-form-field-feedback__border-width-left);\n  border-style: solid;\n  padding-inline: var(--uxa-form-field-feedback__padding-inline);\n  padding-block: var(--uxa-form-field-feedback__padding-block);\n  box-sizing: border-box;\n  --uxa-icon__size: var(--uxa-form-field-feedback-icon__size);\n}\n.uxa-form-field-feedback.uxa-error,\n:host.uxa-form-field-feedback.uxa-error {\n  background: var(--uxa-form-field-feedback__background--error);\n  border-color: var(--uxa-form-field-feedback__border-color--error);\n  --uxa-icon__fill: var(--uxa-form-field-feedback-icon__color--error);\n}\n.uxa-form-field-feedback.uxa-success,\n:host.uxa-form-field-feedback.uxa-success {\n  background: var(--uxa-form-field-feedback__background--success);\n  border-color: var(--uxa-form-field-feedback__border-color--success);\n  --uxa-icon__fill: var(--uxa-form-field-feedback-icon__color--success);\n}\n\n.uxa-form-field-feedback-content {\n  font-size: var(--uxa-form-field-feedback-content__font-size);\n  line-height: var(--uxa-form-field-feedback-content__line-height);\n  font-weight: var(--uxa-form-field-feedback-content__font-weight);\n  color: var(--uxa-form-field-feedback-content__color);\n}\n\n.uxa-form-field-feedback-icon {\n  display: flex;\n}";
styleInject(css_248z$4);

const FormFieldFeedback = _a => {
  var {
      icon,
      status = 'error',
      whenInvalid,
      children
    } = _a,
    props = __rest(_a, ["icon", "status", "whenInvalid", "children"]);
  const {
    isValid
  } = useValidity();
  return !whenInvalid || !isValid ? React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-form-field-feedback', {
      'uxa-error': status === 'error',
      'uxa-success': status === 'success'
    })
  }, props)), icon, React.createElement("span", {
    className: "uxa-form-field-feedback-content"
  }, children)) : null;
};
/** Define the Prop Type information */
FormFieldFeedback.propTypes = {
  /** Content to display as an icon alongside the feedback message. */
  icon: PropTypes__default.element,
  /** The status of the feedback. */
  status: PropTypes__default.oneOf(['error', 'success']),
  /** If true, display the contents only when the parent `FormField` is marked invalid. */
  whenInvalid: PropTypes__default.bool
};

var css_248z$3 = ".uxa-form-field-group,\n:host.uxa-form-field-group {\n  grid-column: var(--uxa-form-field-group__grid-column, auto);\n  display: var(--uxa-form-field-group__display, grid);\n  gap: var(--uxa-form-field-group__gap);\n}\n.uxa-form-field-group.uxa-with-labels,\n:host.uxa-form-field-group.uxa-with-labels {\n  --uxa-form-field-group__display: var(--uxa-form-field-group__display--with-labels, grid);\n}";
styleInject(css_248z$3);

var css_248z$2 = ".uxa-form-field-group-label,\n:host.uxa-form-field-group-label {\n  font-family: var(--uxa-form-field-group-label__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-form-field-group-label__font-weight);\n  font-size: var(--uxa-form-field-group-label__font-size);\n  color: var(--uxa-form-field-group-label__color);\n  grid-column: var(--uxa-form-field-group-label__grid-column);\n}";
styleInject(css_248z$2);

var css_248z$1 = "/* Add focus outline and offset to an element */\n.uxa-form-field-label,\n:host.uxa-form-field-label {\n  font-family: var(--uxa-typography-label__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-label__font-weight);\n  font-size: var(--uxa-typography-label__font-size);\n  text-transform: var(--uxa-typography-label__text-transform);\n  color: var(--uxa-typography-label__color);\n  line-height: var(--uxa-typography-label__line-height);\n  display: block;\n  position: relative;\n  grid-column: var(--uxa-form-field-label__grid-column, auto);\n  margin-block-end: var(--uxa-form-field-label__margin-block-end);\n  line-height: var(--uxa-form-field-label__line-height);\n}";
styleInject(css_248z$1);

var css_248z = ".uxa-required-indicator,\n:host.uxa-required-indicator {\n  position: var(--uxa-required-indicator__position, static);\n  inset-inline-start: var(--uxa-required-indicator__inset-inline-start, auto);\n  transform: var(--uxa-required-indicator__transform, none);\n  color: var(--uxa-required-indicator__color);\n  width: var(--uxa-required-indicator__width);\n}";
styleInject(css_248z);

const RequiredIndicator = props => {
  return React.createElement("span", Object.assign({
    "aria-hidden": true
  }, mergeProps({
    className: 'uxa-required-indicator'
  }, props)), "*");
};

const FormFieldLabel = forwardRef((_a, ref) => {
  var {
      isRequired,
      children
    } = _a,
    props = __rest(_a, ["isRequired", "children"]);
  return React.createElement("label", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-form-field-label'
  }, props)), isRequired && React.createElement(RequiredIndicator, null, "*"), children);
});

/* eslint-disable @typescript-eslint/no-empty-function */
const [FocusableControlProvider, useFocusableControlContext] = createContext({
  setOnFocus: () => {}
});
function useFocusableControl({
  onFocus
} = {}) {
  const {
    setOnFocus
  } = useFocusableControlContext();
  // Update the focus callback when the onFocus prop changes
  useEffect(() => setOnFocus(onFocus), [onFocus, setOnFocus]);
}

export { FormField as F, RequiredIndicator as R, Form as a, FormFieldFeedback as b, FormFieldLabel as c, FocusableControlProvider as d, useFocusableControl as e, useFocusableControlContext as u };
