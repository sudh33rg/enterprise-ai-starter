import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import './split-button-group.esm.js';
import { a as ToggleButtonGroup, T as ToggleButton } from './toggle-button-group.esm.js';
import { u as useDateTimeAdapter } from './use-date-time-adapter.esm.js';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { createContext, useContext, useMemo, useCallback } from 'react';
import { formatHour, formatSecond, formatMinute } from '@ux-aspects-universal/core/date-time';
import { u as useControlled } from './use-controllable.esm.js';
import { u as useUniqueId } from './use-unique-id.esm.js';
import './reducer-provider.esm.js';
import { UxaDefaultTimePickerI18n } from '@ux-aspects-universal/core/i18n';
import { h as ChevronSmallUpIcon, d as ChevronSmallDownIcon } from './zoom-out.esm.js';
import { DOWN_ARROW, UP_ARROW } from './keycodes.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';
import { u as useStatefulProp } from './use-stateful-prop.esm.js';

const TimePickerI18nContext = createContext(new UxaDefaultTimePickerI18n());
function useTimePickerI18n() {
  return useContext(TimePickerI18nContext);
}

function useTimePicker({
  value,
  hourMode = 12,
  offsets,
  isDisabled,
  id,
  onValueChange
}) {
  const dateTimeAdapter = useDateTimeAdapter();
  const {
    hourPickerAriaLabel,
    minutePickerAriaLabel,
    secondPickerAriaLabel,
    offsetPickerAriaLabel
  } = useTimePickerI18n();
  const uniqueId = useUniqueId('time-picker');
  const hasValue = value !== undefined;
  [value, onValueChange] = useControlled(value, onValueChange, hasValue ? dateTimeAdapter.now() : dateTimeAdapter.set(dateTimeAdapter.now(), {
    minute: 0,
    hour: 0
  }));
  const meridiemIndex = useMemo(() => value ? dateTimeAdapter.getHour(value) < 12 ? 0 : 1 : 0, [dateTimeAdapter, value]);
  // Hour picker props
  const hourPickerId = useMemo(() => `${id || uniqueId}-hour-picker`, [id, uniqueId]);
  const hourValue = useMemo(() => value ? dateTimeAdapter.getHour(value) : undefined, [dateTimeAdapter, value]);
  const formatHourValue = useCallback(hour => formatHour(hour, hourMode), [hourMode]);
  const onHourChange = useCallback(newHour => {
    if (newHour > 23) {
      return;
    }
    const hour24 = hourMode === 24 ? newHour : get24HourValue(newHour, meridiemIndex);
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.set(value, {
      hour: hour24
    }));
  }, [dateTimeAdapter, hourMode, meridiemIndex, onValueChange, value]);
  const onHourIncrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.add(value, {
      hours: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  const onHourDecrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.subtract(value, {
      hours: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  // Minute picker props
  const minutePickerId = useMemo(() => `${id || uniqueId}-minute-picker`, [id, uniqueId]);
  const minuteValue = useMemo(() => value ? dateTimeAdapter.getMinute(value) : undefined, [dateTimeAdapter, value]);
  const onMinuteChange = useCallback(minute => {
    if (minute > 59) {
      minute = 59;
    }
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.set(value, {
      minute
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  const onMinuteIncrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.add(value, {
      minutes: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  const onMinuteDecrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.subtract(value, {
      minutes: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  // Second picker props
  const secondPickerId = useMemo(() => `${id || uniqueId}-second-picker`, [id, uniqueId]);
  const secondValue = useMemo(() => value ? dateTimeAdapter.getSecond(value) : undefined, [dateTimeAdapter, value]);
  const onSecondChange = useCallback(second => {
    if (second > 59) {
      second = 59;
    }
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.set(value, {
      second
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  const onSecondIncrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.add(value, {
      seconds: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  const onSecondDecrement = useCallback(() => {
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.subtract(value, {
      seconds: 1
    }));
  }, [dateTimeAdapter, onValueChange, value]);
  // Meridiem picker props
  const offsetPickerId = useMemo(() => `${id || uniqueId}-offset-picker`, [id, uniqueId]);
  const onMeridiemChange = newMeridiem => {
    const hour = dateTimeAdapter.getHour(value);
    if (newMeridiem === 0 && hour >= 12) {
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.subtract(value, {
        hours: 12
      }));
    } else if (newMeridiem === 1 && hour < 12) {
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.add(value, {
        hours: 12
      }));
    }
  };
  return {
    hourPickerProps: {
      id: hourPickerId,
      ariaLabel: hourPickerAriaLabel,
      className: 'uxa-hour-picker',
      value: hasValue ? hourValue : undefined,
      isDisabled,
      formatValue: formatHourValue,
      onValueChange: onHourChange,
      onIncrement: onHourIncrement,
      onDecrement: onHourDecrement
    },
    minutePickerProps: {
      id: minutePickerId,
      ariaLabel: minutePickerAriaLabel,
      className: 'uxa-minute-picker',
      value: hasValue ? minuteValue : undefined,
      isDisabled,
      formatValue: formatMinute,
      onValueChange: onMinuteChange,
      onIncrement: onMinuteIncrement,
      onDecrement: onMinuteDecrement
    },
    secondPickerProps: {
      id: secondPickerId,
      ariaLabel: secondPickerAriaLabel,
      className: 'uxa-second-picker',
      value: hasValue ? secondValue : undefined,
      isDisabled,
      formatValue: formatSecond,
      onValueChange: onSecondChange,
      onIncrement: onSecondIncrement,
      onDecrement: onSecondDecrement
    },
    meridiemPickerProps: {
      value: meridiemIndex,
      isDisabled,
      onValueChange: onMeridiemChange
    },
    timeOffsetPickerProps: {
      id: offsetPickerId,
      ariaLabel: offsetPickerAriaLabel,
      value: value,
      timeOffsets: offsets,
      isDisabled,
      onValueChange
    },
    id: id || uniqueId
  };
}
function get24HourValue(hour, meridiemIndex) {
  if (hour === 12) {
    hour = 0;
  }
  return meridiemIndex === 0 ? hour : hour + 12;
}

/** Hook applying main time offset picker functionality */
function useOffsetPicker({
  id,
  ariaLabel,
  value,
  timeOffsets: providedOffsets = [],
  isDisabled,
  onValueChange
}) {
  const dateTimeAdapter = useDateTimeAdapter();
  const offset = useMemo(() => dateTimeAdapter.getOffset(value), [dateTimeAdapter, value]);
  const timeOffsets = useMemo(() => {
    const result = providedOffsets;
    if (!result.find(timeOffset => timeOffset.offset === offset)) {
      result.push({
        display: dateTimeAdapter.getOffsetName(value),
        offset: offset
      });
    }
    return result;
  }, [dateTimeAdapter, offset, providedOffsets, value]);
  const currentIndex = useMemo(() => timeOffsets.findIndex(timeOffset => timeOffset.offset === offset), [timeOffsets, offset]);
  const offsetName = useMemo(() => timeOffsets[currentIndex].display, [currentIndex, timeOffsets]);
  const canStepUp = useMemo(() => currentIndex < timeOffsets.length - 1, [currentIndex, timeOffsets]);
  const canStepDown = useMemo(() => currentIndex > 0, [currentIndex]);
  const onChangeTimeOffset = useCallback(delta => {
    const newTimeOffset = timeOffsets[currentIndex + delta];
    if (newTimeOffset) {
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(dateTimeAdapter.set(value, {
        offset: newTimeOffset.offset
      }));
    }
  }, [currentIndex, dateTimeAdapter, onValueChange, timeOffsets, value]);
  const onKeyDown = useCallback(event => {
    if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
      onChangeTimeOffset(event.keyCode === DOWN_ARROW ? -1 : 1);
    }
  }, [onChangeTimeOffset]);
  const containerProps = {
    className: clsx('uxa-time-offset-picker', {
      'uxa-disabled': isDisabled
    })
  };
  // the input element props
  const inputProps = {
    id,
    'aria-label': ariaLabel,
    type: 'text',
    className: 'uxa-time-offset-picker-input',
    readOnly: true,
    disabled: isDisabled,
    value: offsetName,
    onKeyDown
  };
  // the props for the step up button
  const stepUpButtonProps = {
    className: clsx('uxa-time-offset-picker-button-up', {
      'uxa-disabled': !canStepUp
    }),
    onClick: () => onChangeTimeOffset(1)
  };
  // the props for the step down button
  const stepDownButtonProps = {
    className: clsx('uxa-time-offset-picker-button-down', {
      'uxa-disabled': !canStepDown
    }),
    onClick: () => onChangeTimeOffset(-1)
  };
  return {
    containerProps,
    inputProps,
    stepUpButtonProps,
    stepDownButtonProps
  };
}

var css_248z$2 = ".uxa-time-offset-picker,\n:host {\n  height: var(--uxa-time-offset-picker__height);\n  display: grid;\n  background-color: var(--uxa-time-offset-picker__background-color);\n  grid-template-columns: min-content;\n}\n.uxa-time-offset-picker .uxa-time-offset-picker-button-up,\n.uxa-time-offset-picker .uxa-time-offset-picker-button-down,\n:host .uxa-time-offset-picker-button-up,\n:host .uxa-time-offset-picker-button-down {\n  height: var(--uxa-time-offset-picker-button__height);\n}\n.uxa-time-offset-picker.uxa-disabled .uxa-time-offset-picker-input,\n:host.uxa-disabled .uxa-time-offset-picker-input {\n  cursor: var(--uxa-text-input__cursor--disabled);\n  color: var(--uxa-text-input__color--disabled);\n  border-color: var(--uxa-text-input__border-color--disabled);\n  background-color: var(--uxa-text-input__background-color--disabled);\n}\n.uxa-time-offset-picker.uxa-disabled .uxa-time-offset-picker-input::-moz-placeholder, :host.uxa-disabled .uxa-time-offset-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-time-offset-picker.uxa-disabled .uxa-time-offset-picker-input::placeholder,\n:host.uxa-disabled .uxa-time-offset-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-time-offset-picker.uxa-disabled .uxa-time-offset-picker-button-up,\n.uxa-time-offset-picker.uxa-disabled .uxa-time-offset-picker-button-down,\n:host.uxa-disabled .uxa-time-offset-picker-button-up,\n:host.uxa-disabled .uxa-time-offset-picker-button-down {\n  pointer-events: none;\n  color: var(--uxa-time-offset-picker-button__color--disabled);\n}\n\n.uxa-time-offset-picker-input {\n  font-family: var(--uxa-text-input__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-text-input__font-weight);\n  font-size: var(--uxa-text-input__font-size);\n  color: var(--uxa-text-input__color);\n  background-color: var(--uxa-text-input__background-color);\n  padding-inline: var(--uxa-text-input__padding-inline);\n  padding-block-start: var(--uxa-text-input__padding-block-start);\n  padding-block-end: var(--uxa-text-input__padding-block-end);\n  height: var(--uxa-text-input__height);\n  width: var(--uxa-text-input__width);\n  border-style: var(--uxa-text-input__border-style);\n  border-width: var(--uxa-text-input__border-width);\n  border-color: var(--uxa-text-input__border-color);\n  border-radius: var(--uxa-text-input__border-radius);\n  box-sizing: border-box;\n  width: var(--uxa-time-offset-picker__width);\n  text-align: var(--uxa-time-offset-picker-input__text-align);\n  padding-inline-start: var(--uxa-time-offset-picker-input__padding-inline-start);\n  padding-inline-end: var(--uxa-time-offset-picker-input__padding-inline-end);\n}\n.uxa-time-offset-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-time-offset-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-time-offset-picker-input:focus {\n  outline: none;\n  border-color: var(--uxa-text-input__border-color--focused);\n  box-shadow: var(--uxa-text-input__box-shadow--focused);\n}\n.uxa-time-offset-picker-input:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover);\n  background-color: var(--uxa-text-input__background-color--hover);\n  box-shadow: var(--uxa-text-input__box-shadow--hover);\n}\n.uxa-time-offset-picker-input.uxa-invalid {\n  border-color: var(--uxa-text-input__border-color--invalid);\n  background-color: var(--uxa-text-input__background-color--invalid);\n  box-shadow: none;\n}\n.uxa-time-offset-picker-input.uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover-invalid);\n  background-color: var(--uxa-text-input__background-color--hover-invalid);\n  box-shadow: var(--uxa-text-input__box-shadow--hover-invalid);\n}\n\n.uxa-time-offset-picker-button-up,\n.uxa-time-offset-picker-button-down {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--uxa-time-offset-picker-button__color);\n  --uxa-icon__size: var(--uxa-time-offset-picker-button-icon__size);\n}\n.uxa-time-offset-picker-button-up:hover,\n.uxa-time-offset-picker-button-down:hover {\n  background-color: var(--uxa-time-offset-picker-button__background-color--hover);\n}\n.uxa-time-offset-picker-button-up.uxa-disabled,\n.uxa-time-offset-picker-button-down.uxa-disabled {\n  pointer-events: none;\n  color: var(--uxa-time-offset-picker-button__color--disabled);\n}";
styleInject(css_248z$2);

function TimeOffsetPicker(props) {
  const {
    containerProps,
    inputProps,
    stepUpButtonProps,
    stepDownButtonProps
  } = useOffsetPicker(props);
  return React.createElement("div", Object.assign({}, containerProps), React.createElement("div", Object.assign({}, stepUpButtonProps), React.createElement(ChevronSmallUpIcon, null)), React.createElement("input", Object.assign({}, inputProps)), React.createElement("div", Object.assign({}, stepDownButtonProps), React.createElement(ChevronSmallDownIcon, null)));
}

var css_248z$1 = ":host,\n.uxa-time-picker {\n  align-items: center;\n  display: grid;\n  -moz-column-gap: var(--uxa-time-picker__column-gap);\n       column-gap: var(--uxa-time-picker__column-gap);\n  grid-auto-flow: column;\n  grid-auto-columns: min-content;\n  --uxa-number-picker__width: var(--uxa-time-picker-number-picker__width);\n  --uxa-toggle-button-group__border-color--single-select-secondary: var(\n    --uxa-text-input__border-color\n  );\n}\n:host.uxa-disabled,\n.uxa-time-picker.uxa-disabled {\n  --uxa-toggle-button-group__border-color--disabled: var(\n    --uxa-text-input__border-color--disabled\n  );\n}\n\n.uxa-time-picker-time-input {\n  display: grid;\n  -moz-column-gap: var(--uxa-time-picker-time-input__column-gap);\n       column-gap: var(--uxa-time-picker-time-input__column-gap);\n  grid-auto-flow: column;\n  grid-auto-columns: min-content;\n}";
styleInject(css_248z$1);

var css_248z = ".uxa-number-picker,\n:host.uxa-number-picker,\n.uxa-vertical-number-picker,\n:host.uxa-vertical-number-picker {\n  height: var(--uxa-number-picker__height);\n  display: inline-flex;\n  background-color: var(--uxa-number-picker__background-color);\n  width: var(--uxa-number-picker__width);\n}\n.uxa-number-picker.uxa-disabled .uxa-number-picker-input,\n:host.uxa-number-picker.uxa-disabled .uxa-number-picker-input,\n.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input,\n:host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input {\n  cursor: var(--uxa-text-input__cursor--disabled);\n  color: var(--uxa-text-input__color--disabled);\n  border-color: var(--uxa-text-input__border-color--disabled);\n  background-color: var(--uxa-text-input__background-color--disabled);\n}\n.uxa-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, :host.uxa-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n:host.uxa-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n:host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-number-picker.uxa-disabled .uxa-number-picker-up,\n.uxa-number-picker.uxa-disabled .uxa-number-picker-down,\n:host.uxa-number-picker.uxa-disabled .uxa-number-picker-up,\n:host.uxa-number-picker.uxa-disabled .uxa-number-picker-down,\n.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-up,\n.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-down,\n:host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-up,\n:host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-down {\n  pointer-events: none;\n  color: var(--uxa-number-picker-button__color--disabled);\n}\n.uxa-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n:host.uxa-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n.uxa-vertical-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n:host.uxa-vertical-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus) {\n  border-color: var(--uxa-number-picker-input__border-color--invalid);\n}\n.uxa-number-picker[data-size=small],\n:host.uxa-number-picker[data-size=small],\n.uxa-vertical-number-picker[data-size=small],\n:host.uxa-vertical-number-picker[data-size=small] {\n  --uxa-text-input__height: var(--uxa-number-picker-input__height--small);\n}\n.uxa-number-picker[data-size=large],\n:host.uxa-number-picker[data-size=large],\n.uxa-vertical-number-picker[data-size=large],\n:host.uxa-vertical-number-picker[data-size=large] {\n  --uxa-text-input__height: var(--uxa-number-picker-input__height--large);\n}\n\n.uxa-number-picker,\n:host.uxa-number-picker {\n  --uxa-number-picker-button__height: 50%;\n}\n.uxa-number-picker[data-size=small],\n:host.uxa-number-picker[data-size=small] {\n  --uxa-number-picker__height: var(--uxa-number-picker__height--small);\n}\n.uxa-number-picker[data-size=large],\n:host.uxa-number-picker[data-size=large] {\n  --uxa-number-picker__height: var(--uxa-number-picker__height--large);\n}\n\n.uxa-number-picker-input {\n  font-family: var(--uxa-text-input__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-text-input__font-weight);\n  font-size: var(--uxa-text-input__font-size);\n  color: var(--uxa-text-input__color);\n  background-color: var(--uxa-text-input__background-color);\n  padding-inline: var(--uxa-text-input__padding-inline);\n  padding-block-start: var(--uxa-text-input__padding-block-start);\n  padding-block-end: var(--uxa-text-input__padding-block-end);\n  height: var(--uxa-text-input__height);\n  width: var(--uxa-text-input__width);\n  border-style: var(--uxa-text-input__border-style);\n  border-width: var(--uxa-text-input__border-width);\n  border-color: var(--uxa-text-input__border-color);\n  border-radius: var(--uxa-text-input__border-radius);\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n  text-align: var(--uxa-number-picker-input__text-align);\n  padding-inline-start: var(--uxa-number-picker-input__padding-inline-start);\n  padding-inline-end: var(--uxa-number-picker-input__padding-inline-end);\n}\n.uxa-number-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-number-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-number-picker-input:focus {\n  outline: none;\n  border-color: var(--uxa-text-input__border-color--focused);\n  box-shadow: var(--uxa-text-input__box-shadow--focused);\n}\n.uxa-number-picker-input:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover);\n  background-color: var(--uxa-text-input__background-color--hover);\n  box-shadow: var(--uxa-text-input__box-shadow--hover);\n}\n.uxa-number-picker-input.uxa-invalid {\n  border-color: var(--uxa-text-input__border-color--invalid);\n  background-color: var(--uxa-text-input__background-color--invalid);\n  box-shadow: none;\n}\n.uxa-number-picker-input.uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover-invalid);\n  background-color: var(--uxa-text-input__background-color--hover-invalid);\n  box-shadow: var(--uxa-text-input__box-shadow--hover-invalid);\n}\n.uxa-number-picker-input:invalid {\n  border-color: var(--uxa-number-picker-input__border-color--invalid);\n  box-shadow: none;\n}\n\n.uxa-number-picker-buttons {\n  display: flex;\n  flex-direction: column;\n  flex: none;\n  height: 100%;\n}\n\n.uxa-number-picker-up,\n.uxa-number-picker-down {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: var(--uxa-number-picker-button__width);\n  color: var(--uxa-number-picker-button__color);\n  height: var(--uxa-number-picker-button__height);\n  --uxa-icon__size: var(--uxa-number-picker-button-icon__size);\n}\n.uxa-number-picker-up:hover,\n.uxa-number-picker-down:hover {\n  background-color: var(--uxa-number-picker-button__background-color--hover);\n}\n.uxa-number-picker-up.uxa-disabled,\n.uxa-number-picker-down.uxa-disabled {\n  pointer-events: none;\n  color: var(--uxa-number-picker-button__color--disabled);\n}\n.uxa-number-picker-up uxa-icon,\n.uxa-number-picker-down uxa-icon {\n  display: inline-flex;\n}\n\n.uxa-vertical-number-picker,\n:host.uxa-vertical-number-picker {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height);\n  --uxa-number-picker-input__text-align: var(--uxa-vertical-number-picker-input__text-align);\n  flex-wrap: wrap;\n}\n.uxa-vertical-number-picker .uxa-number-picker-up,\n.uxa-vertical-number-picker .uxa-number-picker-down,\n:host.uxa-vertical-number-picker .uxa-number-picker-up,\n:host.uxa-vertical-number-picker .uxa-number-picker-down {\n  height: var(--uxa-vertical-number-picker-button__height);\n}\n.uxa-vertical-number-picker[data-size=small],\n:host.uxa-vertical-number-picker[data-size=small] {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height--small);\n}\n.uxa-vertical-number-picker[data-size=large],\n:host.uxa-vertical-number-picker[data-size=large] {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height--large);\n}";
styleInject(css_248z);

const TimeValuePicker = ({
  id,
  ariaLabel,
  className,
  value,
  isDisabled,
  formatValue,
  onValueChange,
  onIncrement,
  onDecrement
}) => {
  const [inputValue, setInputValue] = useStatefulProp(value);
  const onInputKeyDown = useCallback(event => {
    if (event.keyCode === DOWN_ARROW) {
      onDecrement();
    }
    if (event.keyCode === UP_ARROW) {
      onIncrement();
    }
  }, [onDecrement, onIncrement]);
  const onInputChange = useCallback(event => {
    const numericValue = parseInt(event.target.value);
    if (!isNaN(numericValue)) {
      onValueChange(numericValue);
      setInputValue(numericValue);
      return;
    }
    setInputValue(undefined);
  }, [onValueChange, setInputValue]);
  const onUpClick = useCallback(() => {
    if (!isDisabled) {
      onIncrement();
    }
  }, [isDisabled, onIncrement]);
  const onDownClick = useCallback(() => {
    if (!isDisabled) {
      onDecrement();
    }
  }, [isDisabled, onDecrement]);
  return React.createElement("div", {
    className: clsx('uxa-vertical-number-picker', className, {
      'uxa-disabled': isDisabled
    })
  }, React.createElement("div", {
    className: "uxa-number-picker-up",
    onClick: onUpClick
  }, React.createElement(ChevronSmallUpIcon, null)), React.createElement("input", {
    id: id,
    type: "text",
    role: "spinbutton",
    "aria-label": ariaLabel,
    className: "uxa-number-picker-input",
    value: inputValue === undefined ? '' : formatValue(inputValue),
    pattern: "[0-9]*",
    autoComplete: "off",
    disabled: isDisabled,
    onClick: event => event.currentTarget.select(),
    onKeyDown: onInputKeyDown,
    onChange: onInputChange
  }), React.createElement("div", {
    className: "uxa-number-picker-down",
    onClick: onDownClick
  }, React.createElement(ChevronSmallDownIcon, null)));
};

/**
 * See the documentation for `DateTimeAdapterContext` for more information about configuring the date & time
 * implementation used by UX Aspects Universal components.
 */
function TimePicker(_a) {
  var {
      value,
      isDisabled,
      hourMode = 12,
      id: initialId,
      offsets = [],
      showOffset,
      showSeconds,
      onValueChange
    } = _a,
    props = __rest(_a, ["value", "isDisabled", "hourMode", "id", "offsets", "showOffset", "showSeconds", "onValueChange"]);
  const {
    hourPickerProps,
    minutePickerProps,
    secondPickerProps,
    meridiemPickerProps,
    timeOffsetPickerProps,
    id
  } = useTimePicker({
    value,
    hourMode,
    offsets,
    isDisabled,
    id: initialId,
    onValueChange
  });
  const dateTimeAdapter = useDateTimeAdapter();
  const meridiemNames = dateTimeAdapter.getMeridiemNames();
  return React.createElement("div", Object.assign({}, mergeProps({
    id
  }, props), {
    className: clsx('uxa-time-picker', {
      'uxa-disabled': isDisabled
    })
  }), React.createElement("div", {
    className: "uxa-time-picker-time-input"
  }, React.createElement(TimeValuePicker, Object.assign({}, hourPickerProps)), React.createElement(TimeValuePicker, Object.assign({}, minutePickerProps)), showSeconds && React.createElement(TimeValuePicker, Object.assign({}, secondPickerProps))), hourMode === 12 && React.createElement(ToggleButtonGroup, Object.assign({
    secondary: true,
    className: "uxa-time-picker-meridiem-selector"
  }, meridiemPickerProps), meridiemNames.map((meridiem, index) => React.createElement(ToggleButton, {
    key: index,
    value: value && index
  }, meridiem.toUpperCase()))), showOffset && React.createElement(TimeOffsetPicker, Object.assign({}, timeOffsetPickerProps)));
}
/** Define the Prop Type information */
TimePicker.propTypes = {
  /** The value of the control. */
  value: PropTypes__default.any,
  /** Whether to use 12-hour or 24-hour interface. */
  hourMode: PropTypes__default.oneOf([12, 24]),
  /** Whether to show the time offset selector. */
  showOffset: PropTypes__default.bool,
  /** Whether to show the seconds input. */
  showSeconds: PropTypes__default.bool,
  /** The list of time offsets that the user can choose from. */
  offsets: PropTypes__default.array,
  /** Emits when the user changes the value of the control. */
  onValueChange: PropTypes__default.func,
  /** Whether the component is disabled. */
  isDisabled: PropTypes__default.bool
};

export { TimePicker as T };
