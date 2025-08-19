import { _ as __rest } from './_tslib.esm.js';

/**
 * Force a change event to be emitted by the specified element.
 * This can be used whenever an input element is updated programmatically,
 * if it is necessary to forward the `onChange` event.
 */
function emitChangeOnElement(element, value) {
  setNativeValue(element, value !== null && value !== void 0 ? value : '');
  element.dispatchEvent(new Event('input', {
    bubbles: true
  }));
}
function setNativeValue(element, value) {
  var _a, _b;
  const valueSetter = (_a = Object.getOwnPropertyDescriptor(element, 'value')) === null || _a === void 0 ? void 0 : _a.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = (_b = Object.getOwnPropertyDescriptor(prototype, 'value')) === null || _b === void 0 ? void 0 : _b.set;
  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}

/** Extract HTML props that only apply to an `input` element. */
function useHiddenInputHtmlProps(props) {
  const {
      accept,
      alt,
      autoComplete,
      autoFocus,
      capture,
      checked,
      disabled,
      enterKeyHint,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      height,
      list,
      max,
      maxLength,
      min,
      minLength,
      multiple,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      src,
      step,
      type,
      value,
      width,
      onChange
    } = props,
    wrapperHtmlProps = __rest(props, ["accept", "alt", "autoComplete", "autoFocus", "capture", "checked", "disabled", "enterKeyHint", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "height", "list", "max", "maxLength", "min", "minLength", "multiple", "name", "pattern", "placeholder", "readOnly", "required", "size", "src", "step", "type", "value", "width", "onChange"]);
  return {
    inputHtmlProps: {
      accept,
      alt,
      autoComplete,
      autoFocus,
      capture,
      checked,
      disabled,
      enterKeyHint,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      height,
      list,
      max,
      maxLength,
      min,
      minLength,
      multiple,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      src,
      step,
      type,
      value,
      width,
      onChange
    },
    wrapperHtmlProps
  };
}

export { emitChangeOnElement as e, useHiddenInputHtmlProps as u };
