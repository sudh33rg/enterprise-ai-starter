import { UxaDefaultDatePickerI18n, isMonthFirst, UxaDefaultDateRangePickerI18n } from "@ux-aspects-universal/core/i18n";
export { UxaDatePickerI18n, UxaDateRangePickerI18n } from "@ux-aspects-universal/core/i18n";
import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import PropTypes__default from "prop-types";
import * as React from "react";
import { createContext, useState, useEffect, useContext, useMemo, useRef, useCallback } from "react";
import { c as FocusKeyManager } from "./focus-key-manager.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { setInteractionModality, useFocusWithin } from "@react-aria/interactions";
import clsx from "clsx";
import "./reducer-provider.esm.js";
import { u as useFocusManager, b as useTabbable } from "./use-tabbable.esm.js";
import { s as styleInject } from "./style-inject.es.esm.js";
import { u as useDateTimeAdapter } from "./use-date-time-adapter.esm.js";
import { getMonthOptions, getYearOptions } from "@ux-aspects-universal/core/date-time";
import { I as IconButton } from "./split-button-group.esm.js";
import { ai as ChevronSmallLeftIcon, aj as ChevronSmallRightIcon } from "./zoom-out.esm2.js";
import { as as ChevronLargeLeftIcon, at as ChevronLargeRightIcon, s as ArrowRightIcon } from "./zoom-out.esm.js";
import { c as Select, d as SelectOption } from "./select-group.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import { u as useThemeFamily } from "./use-active-theme.esm.js";
import { P as Popover } from "./tooltip.esm.js";
import { S as Show } from "./show.esm.js";
import { u as useSlots } from "./use-slots.esm.js";
import { T as TimePicker } from "./time-picker.esm2.js";
import { announce } from "@react-aria/live-announcer";
import "./use-unique-id.esm.js";
import "react-dom";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "./prop-types.esm.js";
import "@react-aria/ssr";
import "./use-wrapped-input-id.esm.js";
import "./focusable-option.esm.js";
import "./validity-provider.esm.js";
import "./context.esm.js";
import "./use-children.esm.js";
import "./react-element.esm.js";
import "./use-hidden-input-html-props.esm.js";
import "@react-aria/overlays";
import "./use-controllable.esm.js";
import "./use-isomorphic-effect.esm.js";
import "./use-active-descendant-item.esm.js";
import "./use-intersection-observer.esm.js";
import "@floating-ui/react";
import "./use-body-ref.esm.js";
import "./use-event-listener.esm.js";
import "./use-outside-click.esm.js";
import "./use-debounce.esm.js";
import "./toggle-button-group.esm.js";
import "./keycodes.esm.js";
import "./use-stateful-prop.esm.js";
function CalendarGridRow({ children }) {
    return React.createElement("tr", {
        className: "uxa-date-picker-calendar-row"
    }, children);
}
var css_248z$2 = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker {\n  display: inline-block;\n  box-sizing: border-box;\n  padding-inline: var(--uxa-date-picker__padding-inline);\n  padding-block: var(--uxa-date-picker__padding-block);\n  font-family: var(--uxa-date-picker__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-date-picker__font-weight);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-grid,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-next-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header-day,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: var(--uxa-date-picker-header__font-weight);\n  margin-block-end: var(--uxa-date-picker-header__margin-block-end);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select {\n  display: flex;\n  flex-direction: row;\n  --uxa-select__column-gap: var(--uxa-date-picker-dropdown__column-gap);\n  --uxa-select__width: var(--uxa-date-picker-dropdown__width);\n  --uxa-select__height: var(--uxa-date-picker-dropdown__height);\n  --uxa-select__padding-inline: var(--uxa-date-picker-dropdown__padding-inline);\n  --uxa-select__border-radius: var(--uxa-date-picker-dropdown__border-radius);\n  --uxa-select__border-color: var(--uxa-date-picker-dropdown__border-color);\n  --uxa-select__background-color--hover: var(--uxa-date-picker-dropdown__background-color--hover);\n  --uxa-select__border-color--hover: var(--uxa-date-picker-dropdown__border-color--hover);\n  --uxa-select__box-shadow--hover: var(--uxa-date-picker-dropdown__box-shadow--hover);\n  --uxa-select__background-color--active: var(--uxa-date-picker-dropdown__background-color--active);\n  --uxa-select__border-color--active: var(--uxa-date-picker-dropdown__border-color--active);\n  --uxa-select__border-color--focused: var(--uxa-date-picker-dropdown__border-color--focused);\n  --uxa-select__box-shadow--focused: var(--uxa-date-picker-dropdown__box-shadow--focused);\n  --uxa-select-value__color: var(--uxa-date-picker-dropdown-value__color);\n  --uxa-select-value__font-size: var(--uxa-date-picker-dropdown-value__font-size);\n  --uxa-select-value__font-weight: var(--uxa-date-picker-dropdown-value__font-weight);\n  --uxa-select-value__color--hover: var(--uxa-date-picker-dropdown-value__color--hover);\n  --uxa-select-value__color--active: var(--uxa-date-picker-dropdown-value__color--active);\n  --uxa-select-arrow__min-width: var(--uxa-date-picker-dropdown-arrow__min-width);\n  --uxa-select-arrow__font-size: var(--uxa-date-picker-dropdown-arrow__font-size);\n  --uxa-select-arrow__color: var(--uxa-date-picker-dropdown-arrow__color);\n  --uxa-select-arrow__color--hover: var(--uxa-date-picker-dropdown-arrow__color--hover);\n  --uxa-select-arrow__color--active: var(--uxa-date-picker-dropdown-arrow__color--active);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select-month {\n  min-width: var(--uxa-date-picker-select-month__min-width);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select-year {\n  min-width: var(--uxa-date-picker-select-year__min-width);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select-month.uxa-select:not(.uxa-disabled):focus-visible,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select-year.uxa-select:not(.uxa-disabled):focus-visible {\n  outline: var(--uxa-date-picker-select__outline--focus);\n  outline-offset: var(--uxa-date-picker-select__outline-offset--focus);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-select-separator {\n  min-width: var(--uxa-date-picker-select-separator__min-width);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-grid {\n  gap: var(--uxa-date-picker-grid__gap);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header {\n  flex-direction: row;\n  color: var(--uxa-date-picker-calendar-header__color);\n  margin-block-end: var(--uxa-date-picker-calendar-header__margin-block-end);\n  font-size: var(--uxa-date-picker-calendar-header__font-size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header-day {\n  font-weight: var(--uxa-date-picker-calendar-header-day__font-weight);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-header-day,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty {\n  height: var(--uxa-date-picker-grid-cell__height);\n  width: var(--uxa-date-picker-grid-cell__width);\n  min-width: var(--uxa-date-picker-grid-cell__min-width);\n  padding-inline: var(--uxa-date-picker-grid-cell__padding-inline);\n  padding-block: var(--uxa-date-picker-grid-cell__padding-block);\n  font-family: inherit;\n  text-decoration: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-calendar-row {\n  height: var(--uxa-date-picker-grid-cell__height);\n  display: flex;\n  margin-block-end: var(--uxa-date-picker-grid__column-gap);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty {\n  position: relative;\n  cursor: var(--uxa-button__cursor);\n  color: var(--uxa-date-picker-grid-cell__color);\n  background-color: var(--uxa-date-picker-grid-cell__background-color);\n  border: var(--uxa-date-picker-grid-cell__border);\n  border-radius: var(--uxa-date-picker-grid-cell__border-radius);\n  font-size: var(--uxa-date-picker-grid-cell__font-size);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn:hover:not(.uxa-disabled), :not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-date-picker-grid-cell-btn-selection-preview:not(.uxa-disabled), :not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty:hover:not(.uxa-disabled), :not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-date-picker-grid-cell-btn-selection-preview:not(.uxa-disabled) {\n  background-color: var(--uxa-date-picker-grid-cell__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn:active:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty:active:not(.uxa-disabled) {\n  background-color: var(--uxa-date-picker-grid-cell__background-color--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn:focus,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn:before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty:before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background: var(--uxa-date-picker-grid-cell__background-color--underlay, transparent);\n  border-radius: var(--uxa-date-picker-grid-cell__border-radius--underlay, 0);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-date-picker-today-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-date-picker-today-btn {\n  font-weight: var(--uxa-date-picker-grid-cell__font-weight--today);\n  color: var(--uxa-date-picker-grid-cell__color--today);\n  --uxa-date-picker-grid-cell__border: var(--uxa-date-picker-grid-cell__border--today);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled) {\n  background-color: var(--uxa-date-picker-grid-cell__background-color--selected);\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-between,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-between {\n  box-shadow: none;\n  --uxa-date-picker-grid-cell__border-radius: var(\n    --uxa-date-picker-grid-cell__border-radius--selection-between\n  );\n  color: var(--uxa-date-picker-grid-cell__color--selection-between);\n  background-color: var(--uxa-date-picker-grid-cell__background-color--selection-between);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-start,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-start {\n  background: var(--uxa-date-picker-grid-cell__background-color--selection-start);\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-start);\n  color: var(--uxa-date-picker-grid-cell__color--selection-start);\n  --uxa-date-picker-grid-cell__border-radius: var(\n    --uxa-date-picker-grid-cell__border-radius--selection-start\n  );\n  --uxa-date-picker-grid-cell__background-color--underlay: var(\n    --uxa-date-picker-grid-cell__background-color--underlay-start\n  );\n  --uxa-date-picker-grid-cell__border-radius--underlay: var(\n      --uxa-date-picker-grid-cell__border-radius--selection-start\n    )\n    0 0 var(--uxa-date-picker-grid-cell__border-radius--selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-start.uxa-active,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-start.uxa-active {\n  background: var(--uxa-date-picker-grid-cell__background-color--selection-start-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-end {\n  background: var(--uxa-date-picker-grid-cell__background-color--selection-end);\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-end);\n  color: var(--uxa-date-picker-grid-cell__color--selection-end);\n  --uxa-date-picker-grid-cell__border-radius: var(\n    --uxa-date-picker-grid-cell__border-radius--selection-end\n  );\n  --uxa-date-picker-grid-cell__background-color--underlay: var(\n    --uxa-date-picker-grid-cell__background-color--underlay-start\n  );\n  --uxa-date-picker-grid-cell__border-radius--underlay: 0\n    var(--uxa-date-picker-grid-cell__border-radius--selection-end)\n    var(--uxa-date-picker-grid-cell__border-radius--selection-end) 0;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-end.uxa-active,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-end.uxa-active {\n  background: var(--uxa-date-picker-grid-cell__background-color--selection-end-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-selection-start.uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-selection-start.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-start), var(--uxa-date-picker-grid-cell__box-shadow--selection-end);\n  --uxa-date-picker-grid-cell__border-radius--underlay: var(\n    --uxa-date-picker-grid-cell__border-radius\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-active,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-active {\n  font-weight: var(--uxa-date-picker-grid-cell__font-weight--selected);\n  color: var(--uxa-date-picker-grid-cell__color--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-selected:not(.uxa-disabled).uxa-date-picker-today-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-selected:not(.uxa-disabled).uxa-date-picker-today-btn {\n  color: var(--uxa-date-picker-grid-cell__color--today-selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled {\n  color: var(--uxa-date-picker-grid-cell__color--disabled);\n  pointer-events: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-selected,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-selected {\n  color: var(--uxa-date-picker-grid-cell__color--disabled-selected);\n  background-color: var(--uxa-date-picker-grid-cell__background-color--disabled-selected);\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--disabled-selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-selected.uxa-selection-between,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-selected.uxa-selection-between {\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-selected.uxa-selection-start,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-selected.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--disabled-selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-selected.uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-selected.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--disabled-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-selected.uxa-selection-start.uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-selected.uxa-selection-start.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--disabled-selection-start), var(--uxa-date-picker-grid-cell__box-shadow--disabled-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-disabled.uxa-outside-month,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-disabled.uxa-outside-month {\n  color: var(--uxa-date-picker-grid-cell__color--outside-of-month);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-focused:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused);\n  z-index: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-focused:not(.uxa-disabled).uxa-selected:not(.uxa-selection-start):not(.uxa-selection-end):not(.uxa-selection-between),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-focused:not(.uxa-disabled).uxa-selected:not(.uxa-selection-start):not(.uxa-selection-end):not(.uxa-selection-between) {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-focused:not(.uxa-disabled).uxa-selection-start,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-focused:not(.uxa-disabled).uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-focused:not(.uxa-disabled).uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-focused:not(.uxa-disabled).uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn.uxa-focused:not(.uxa-disabled).uxa-selection-between,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-grid-cell-btn-empty.uxa-focused:not(.uxa-disabled).uxa-selection-between {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-picker-next-month-btn {\n  --uxa-icon__size: var(--uxa-date-picker-header-control-icon__size);\n  border-radius: var(--uxa-date-picker-header-control__border-radius);\n  z-index: 1;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-next-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-next-month-btn {\n  --uxa-icon__transform: var(--uxa-date-picker-header-control-icon__transform--rtl);\n}\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-start,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-start,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-end,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-start);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-next-month-btn {\n  --uxa-icon__transform: var(--uxa-date-picker-header-control-icon__transform--rtl);\n}\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-start);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-prev-month-btn,\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-next-month-btn {\n  --uxa-icon__transform: var(--uxa-date-picker-header-control-icon__transform--rtl);\n}\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-grid-cell-btn.uxa-selected.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--selection-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-start {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-picker-grid-cell-btn.uxa-focused.uxa-selection-end {\n  box-shadow: var(--uxa-date-picker-grid-cell__box-shadow--focused-selection-start);\n}";
styleInject(css_248z$2);
// eslint-disable-next-line
const DateRangePickerContext = createContext(null);
function useDateRangePickerContext() {
    return useContext(DateRangePickerContext);
}
function useDateRangePicker({ start, end, min, max, isDisabled, isDateDisabled, onValueChange }) {
    const [activeHoverDate, setActiveHoverDate] = useState(undefined);
    const [activeStartDate, setActiveStartDate] = useState(start);
    const [activeEndDate, setActiveEndDate] = useState(end);
    const dateTimeAdapter = useDateTimeAdapter();
    useEffect(() => {
        setActiveStartDate(start);
    }, [start]);
    useEffect(() => {
        setActiveEndDate(end);
    }, [end]);
    const selectStartDate = date => {
        const startDate = dateTimeAdapter.create(dateTimeAdapter.getYear(date), dateTimeAdapter.getMonth(date), dateTimeAdapter.getDate(date), dateTimeAdapter.getHour(date), dateTimeAdapter.getMinute(date), dateTimeAdapter.getSecond(date), dateTimeAdapter.getMillisecond(date));
        setActiveStartDate(startDate);
        if (activeEndDate && dateTimeAdapter.compare(startDate, activeEndDate) > 0) {
            setActiveEndDate(undefined);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
                start: startDate,
                end: undefined
            });
        }
        else {
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
                start: startDate,
                end: activeEndDate
            });
        }
    };
    const selectEndDate = date => {
        const endDate = dateTimeAdapter.create(dateTimeAdapter.getYear(date), dateTimeAdapter.getMonth(date), dateTimeAdapter.getDate(date), dateTimeAdapter.getHour(date), dateTimeAdapter.getMinute(date), dateTimeAdapter.getSecond(date), dateTimeAdapter.getMillisecond(date));
        setActiveEndDate(endDate);
        if (activeStartDate && dateTimeAdapter.compare(activeStartDate, endDate) > 0) {
            setActiveStartDate(undefined);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
                start: undefined,
                end: endDate
            });
        }
        else {
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
                start: activeStartDate,
                end: endDate
            });
        }
    };
    return {
        start: activeStartDate,
        end: activeEndDate,
        min,
        max,
        isDisabled,
        isDateDisabled,
        activeHoverDate,
        selectStartDate,
        selectEndDate,
        setActiveHoverDate
    };
}
// eslint-disable-next-line
const DatePickerContext = createContext(null);
// Utility to get the date picker context but also allow us to define the generic type
function useDatePickerContext() {
    return useContext(DatePickerContext);
}
function useDatePicker({ value, min, max, isDisabled, isDateDisabled, onValueChange, autoFocus }) {
    var _a, _b;
    const dateTimeAdapter = useDateTimeAdapter();
    const dateRangePicker = useDateRangePickerContext();
    const [activeMonth, setActiveMonth] = useState((_b = (_a = value !== null && value !== void 0 ? value : dateRangePicker === null || dateRangePicker === void 0 ? void 0 : dateRangePicker.start) !== null && _a !== void 0 ? _a : dateRangePicker === null || dateRangePicker === void 0 ? void 0 : dateRangePicker.end) !== null && _b !== void 0 ? _b : dateTimeAdapter.now());
    const [activeDate, setActiveDate] = useState(value);
    useEffect(() => {
        setActiveDate(value);
        // if the date changes update the UI to show that date
        if (value && activeDate && dateTimeAdapter.compare(activeDate, value)) {
            setActiveMonth(value !== null && value !== void 0 ? value : activeMonth);
        }
        else if (value && !activeDate) {
            setActiveMonth(value);
        }
    }, [value, activeMonth, activeDate, dateTimeAdapter]);
    const startOfActiveMonth = useMemo(() => dateTimeAdapter.set(activeMonth, {
        date: 1
    }), [dateTimeAdapter, activeMonth]);
    const startOfNextMonth = useMemo(() => dateTimeAdapter.add(startOfActiveMonth, {
        months: 1
    }), [dateTimeAdapter, startOfActiveMonth]);
    const canGoToPreviousMonth = useMemo(() => min ? dateTimeAdapter.compare(min, startOfActiveMonth) < 0 : true, [dateTimeAdapter, min, startOfActiveMonth]);
    const canGoToNextMonth = useMemo(() => {
        return max ? dateTimeAdapter.compare(startOfNextMonth, max) < 0 : true;
    }, [dateTimeAdapter, max, startOfNextMonth]);
    // get date objects for all days in the current month
    const datesInMonth = useMemo(() => {
        const dayCount = dateTimeAdapter.getIntervalInDays(startOfActiveMonth, startOfNextMonth);
        return new Array(dayCount).fill(null).map((_, index) => dateTimeAdapter.set(activeMonth, {
            date: index + 1
        }));
    }, [dateTimeAdapter, startOfActiveMonth, startOfNextMonth, activeMonth]);
    const selectDate = date => {
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(date);
        setActiveDate(date);
    };
    const goToPreviousMonth = () => {
        if (canGoToPreviousMonth) {
            setActiveMonth(dateTimeAdapter.add(activeMonth, {
                months: -1
            }));
        }
    };
    const goToNextMonth = () => {
        if (canGoToNextMonth) {
            setActiveMonth(dateTimeAdapter.add(activeMonth, {
                months: 1
            }));
        }
    };
    const goToMonth = month => {
        setActiveMonth(dateTimeAdapter.set(activeMonth, {
            month
        }));
    };
    const goToYear = year => {
        setActiveMonth(dateTimeAdapter.set(activeMonth, {
            year
        }));
    };
    return {
        activeDate,
        min,
        max,
        isDisabled,
        isDateDisabled,
        dateTimeAdapter,
        dateRangePicker,
        activeMonth,
        canGoToPreviousMonth,
        canGoToNextMonth,
        datesInMonth,
        selectDate,
        goToPreviousMonth,
        goToNextMonth,
        goToMonth,
        goToYear,
        autoFocus
    };
}
function DateButton({ date }) {
    const { dateTimeAdapter, dateRangePicker, isDisabled, isDateDisabled, min, max, activeDate, selectDate, activeMonth } = useDatePickerContext();
    const { goToPreviousPage, goToNextPage, activeItemRef } = useFocusManager();
    const ref = useRef(null);
    const isToday = date && dateTimeAdapter.isSameDate(date, dateTimeAdapter.now());
    const { isFocusVisible, focusProps } = useFocusRing();
    const isSelected = useMemo(() => activeDate !== undefined && dateTimeAdapter.isSameDate(date, activeDate), [dateTimeAdapter, date, activeDate]);
    const isStart = useMemo(() => dateRangePicker && dateRangePicker.start !== undefined && dateTimeAdapter.isSameDate(date, dateRangePicker.start), [dateTimeAdapter, dateRangePicker, date]);
    const isEnd = useMemo(() => dateRangePicker && dateRangePicker.end !== undefined && dateTimeAdapter.isSameDate(date, dateRangePicker.end), [dateTimeAdapter, dateRangePicker, date]);
    const isBetween = useMemo(() => dateRangePicker && dateRangePicker.start !== undefined && dateRangePicker.end !== undefined && dateTimeAdapter.compare(date, dateRangePicker.start) > 0 && dateTimeAdapter.compare(date, dateRangePicker.end) < 0, [dateTimeAdapter, dateRangePicker, date]);
    const isHovered = useMemo(() => dateRangePicker && dateRangePicker.activeHoverDate !== undefined && (dateRangePicker.start !== undefined && dateRangePicker.end === undefined && dateTimeAdapter.compare(date, dateRangePicker.start) > 0 && dateTimeAdapter.compare(date, dateRangePicker.activeHoverDate) <= 0 || dateRangePicker.start === undefined && dateRangePicker.end !== undefined && dateTimeAdapter.compare(date, dateRangePicker.activeHoverDate) >= 0 && dateTimeAdapter.compare(date, dateRangePicker.end) < 0), [dateTimeAdapter, dateRangePicker, date]);
    const isOutOfMinRange = date && min !== undefined && dateTimeAdapter.compare(date, min) < 0;
    const isOutOfMaxRange = date && max !== undefined && dateTimeAdapter.compare(date, max) > 0;
    const isOutsideMonth = useMemo(() => !dateTimeAdapter.isSameMonth(date, activeMonth), [date, dateTimeAdapter, activeMonth]);
    const disabled = isDisabled || (isDateDisabled === null || isDateDisabled === void 0 ? void 0 : isDateDisabled(date)) || isOutOfMaxRange || isOutOfMinRange || isOutsideMonth;
    const { tabIndex, tabbableProps, setActive } = useTabbable(ref, {
        isDisabled: disabled,
        value: date
    });
    // if there is no tabbable item activate this item if it is selected
    useEffect(() => {
        if (isSelected && !activeItemRef.current && !disabled) {
            setActive();
        }
    }, [isSelected, setActive, disabled, activeItemRef]);
    return React.createElement("td", Object.assign({
        ref: ref
    }, mergeProps({
        className: clsx({
            "uxa-date-picker-grid-cell-btn": true,
            "uxa-date-picker-today-btn": isToday,
            "uxa-active": isSelected,
            "uxa-selected": isSelected || isStart || isEnd || isBetween,
            "uxa-selection-start": isStart,
            "uxa-selection-between": isBetween,
            "uxa-selection-end": isEnd,
            "uxa-date-picker-grid-cell-btn-selection-preview": isHovered,
            "uxa-focused": isFocusVisible,
            "uxa-disabled": disabled,
            "uxa-outside-month": isOutsideMonth
        }),
        "aria-label": dateTimeAdapter.getDateString(date),
        tabIndex: !disabled ? tabIndex : -1,
        "aria-hidden": isOutsideMonth ? true : null,
        "aria-selected": isSelected && tabIndex === 0 ? true : null,
        role: tabIndex === 0 ? "gridcell" : null,
        onClick: () => {
            if (disabled) {
                return;
            }
            selectDate(date);
            setActive();
        },
        onMouseOver: () => {
            if (dateRangePicker) {
                dateRangePicker.setActiveHoverDate(date);
            }
        },
        onMouseOut: () => {
            if (dateRangePicker) {
                dateRangePicker.setActiveHoverDate(undefined);
            }
        },
        onKeyDown: event => {
            if (event.key === "PageUp") {
                const lastMonth = dateTimeAdapter.subtract(date, {
                    months: 1
                });
                const days = Math.abs(dateTimeAdapter.getIntervalInDays(date, lastMonth));
                setInteractionModality("keyboard");
                goToPreviousPage(days);
                event.preventDefault();
            }
            if (event.key === "PageDown") {
                const nextMonth = dateTimeAdapter.add(date, {
                    months: 1
                });
                const days = Math.abs(dateTimeAdapter.getIntervalInDays(date, nextMonth));
                setInteractionModality("keyboard");
                goToNextPage(days);
                event.preventDefault();
            }
            if (event.key === "Enter") {
                selectDate(date);
                setActive();
            }
        }
    }, tabbableProps, focusProps)), dateTimeAdapter.getDate(date));
}
function useDays() {
    const { dateTimeAdapter, activeMonth } = useDatePickerContext();
    const days = [];
    // Get the first and last day of the month.
    let firstDay = dateTimeAdapter.set(activeMonth, {
        date: 1
    });
    // find the first and last day of visible in the grid.
    firstDay = dateTimeAdapter.subtract(firstDay, {
        days: dateTimeAdapter.getWeekDay(firstDay)
    });
    // there must always be 42 days in the grid
    const lastDay = dateTimeAdapter.add(firstDay, {
        days: 41
    });
    // collect all the days to display.
    while (firstDay <= lastDay) {
        days.push(firstDay);
        firstDay = dateTimeAdapter.add(firstDay, {
            days: 1
        });
    }
    return days;
}
function useWeeks() {
    const { dateTimeAdapter } = useDatePickerContext();
    const days = useDays();
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7).map(date => ({
            key: dateTimeAdapter.getDateString(date),
            date
        })));
    }
    return weeks;
}
function CalendarGrid() {
    const { dateTimeAdapter } = useDatePickerContext();
    const weeks = useWeeks();
    const calendarGridLayout = useMemo(() => {
        return weeks.map(weekdays => React.createElement(CalendarGridRow, {
            key: dateTimeAdapter.getDateString(weekdays[0].date)
        }, weekdays.map(({ date, key }) => React.createElement(DateButton, {
            date: date,
            key: key
        }))));
    }, [weeks, dateTimeAdapter]);
    return React.createElement("tbody", {
        className: "uxa-date-picker-calendar-grid"
    }, calendarGridLayout);
}
function WeekdayHeader() {
    const { activeDate, dateTimeAdapter } = useDatePickerContext();
    const weekDays = dateTimeAdapter.getWeekDayNames(activeDate);
    const weekDayAbbreviations = dateTimeAdapter.getWeekDayNarrowNames(activeDate);
    return React.createElement("thead", null, React.createElement("tr", {
        className: "uxa-date-picker-calendar-header"
    }, weekDays.map((day, index) => React.createElement("th", {
        className: "uxa-date-picker-calendar-header-day",
        key: day,
        title: day
    }, weekDayAbbreviations[index]))));
}
function Calendar() {
    const { goToNextMonth, goToPreviousMonth, dateTimeAdapter, canGoToPreviousMonth, canGoToNextMonth, autoFocus } = useDatePickerContext();
    const onGoToPreviousPage = useCallback((days, date) => {
        if (!canGoToPreviousMonth) {
            return;
        }
        goToPreviousMonth();
        return dateTimeAdapter.subtract(date, {
            days
        });
    }, [canGoToPreviousMonth, dateTimeAdapter, goToPreviousMonth]);
    const onGoToNextPage = useCallback((days, date) => {
        if (!canGoToNextMonth) {
            return date;
        }
        goToNextMonth();
        return dateTimeAdapter.add(date, {
            days
        });
    }, [canGoToNextMonth, goToNextMonth, dateTimeAdapter]);
    const comparator = useCallback((dateOne, dateTwo) => {
        if (dateOne && !dateTwo || !dateOne && dateTwo || !dateOne && !dateTwo) {
            return false;
        }
        return dateTimeAdapter.isSameDate(dateOne, dateTwo);
    }, [dateTimeAdapter]);
    return React.createElement("table", {
        className: "uxa-date-picker-calendar",
        role: "grid"
    }, React.createElement(WeekdayHeader, null), React.createElement(FocusKeyManager, {
        orientation: "grid",
        columns: 7,
        onGoToPreviousPage: onGoToPreviousPage,
        onGoToNextPage: onGoToNextPage,
        comparator: comparator,
        autoFocus: autoFocus
    }, React.createElement(CalendarGrid, null)));
}
const DatePickerI18nContext = createContext(new UxaDefaultDatePickerI18n());
function useDatePickerI18nContext() {
    const defaultI18n = new UxaDefaultDatePickerI18n();
    const i18n = useContext(DatePickerI18nContext);
    // Use the default where none have been defined
    return Object.assign(Object.assign({}, defaultI18n), i18n);
}
function DatePickerHeader({ min, max, nextMonthBtnAriaLabel, previousMonthBtnAriaLabel }) {
    const { isJato } = useThemeFamily();
    const { activeDate, activeMonth, dateTimeAdapter, goToPreviousMonth, goToNextMonth, isDisabled, canGoToPreviousMonth, canGoToNextMonth, goToMonth, goToYear, autoFocus } = useDatePickerContext();
    const { nextMonthBtnAriaLabel: defaultNextMonthBtnAriaLabel, previousMonthBtnAriaLabel: defaultPreviousMonthBtnAriaLabel, monthYearOrder } = useDatePickerI18nContext();
    const monthPickerRef = useRef(null);
    const showMonthFirst = isMonthFirst(monthYearOrder !== null && monthYearOrder !== void 0 ? monthYearOrder : ["month", "year"]);
    const currentMonth = dateTimeAdapter.getMonth(activeMonth);
    const currentYear = dateTimeAdapter.getYear(activeMonth);
    const monthOptions = useMemo(() => getMonthOptions(activeMonth, dateTimeAdapter, {
        max,
        min
    }), [activeMonth, dateTimeAdapter, max, min]);
    const yearOptions = useMemo(() => getYearOptions(activeMonth, dateTimeAdapter, {
        min,
        max
    }), [activeMonth, dateTimeAdapter, max, min]);
    const monthSelector = React.createElement(Select, {
        className: "uxa-date-picker-select-month",
        value: currentMonth,
        onValueChange: month => goToMonth(month),
        isDisabled: isDisabled,
        controllerRef: monthPickerRef,
        panelWidth: 112
    }, monthOptions.map(month => React.createElement(SelectOption, {
        key: month.value,
        value: month.value
    }, month.name)));
    const yearSelector = React.createElement(Select, {
        className: "uxa-date-picker-select-year",
        value: currentYear,
        onValueChange: year => goToYear(year),
        isDisabled: isDisabled,
        panelWidth: isJato ? 80 : 72
    }, yearOptions.map(yearOption => React.createElement(SelectOption, {
        key: yearOption,
        value: yearOption
    }, yearOption)));
    // check if the active date is out of range
    const isOutOfRange = useMemo(() => {
        if (activeDate) {
            if (min && dateTimeAdapter.compare(activeDate, min) < 0) {
                return true;
            }
            if (max && dateTimeAdapter.compare(activeDate, max) > 0) {
                return true;
            }
        }
        return false;
    }, [dateTimeAdapter, activeDate, min, max]);
    // on mount, if autoFocus is true if the active date is out of range, we want to focus the month picker as we can't focus the active date
    useEffect(() => {
        var _a;
        if (autoFocus && isOutOfRange) {
            (_a = monthPickerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return React.createElement("div", {
        className: "uxa-date-picker-header"
    }, React.createElement(IconButton, {
        flat: true,
        secondary: true,
        onClick: goToPreviousMonth,
        className: "uxa-date-picker-prev-month-btn",
        type: "button",
        "aria-label": previousMonthBtnAriaLabel !== null && previousMonthBtnAriaLabel !== void 0 ? previousMonthBtnAriaLabel : defaultPreviousMonthBtnAriaLabel,
        isDisabled: isDisabled || !canGoToPreviousMonth,
        icon: isJato ? React.createElement(ChevronSmallLeftIcon, null) : React.createElement(ChevronLargeLeftIcon, null)
    }), React.createElement("div", {
        "aria-live": "polite",
        "aria-atomic": "true",
        className: "uxa-date-picker-select"
    }, showMonthFirst ? monthSelector : yearSelector, React.createElement("div", {
        className: "uxa-date-picker-select-separator"
    }, " "), showMonthFirst ? yearSelector : monthSelector), React.createElement(IconButton, {
        flat: true,
        secondary: true,
        onClick: goToNextMonth,
        className: "uxa-date-picker-next-month-btn",
        type: "button",
        "aria-label": nextMonthBtnAriaLabel !== null && nextMonthBtnAriaLabel !== void 0 ? nextMonthBtnAriaLabel : defaultNextMonthBtnAriaLabel,
        isDisabled: isDisabled || !canGoToNextMonth,
        icon: isJato ? React.createElement(ChevronSmallRightIcon, null) : React.createElement(ChevronLargeRightIcon, null)
    }));
}
/**
 * See the documentation for `DateTimeAdapterContext` for more information about configuring the date & time
 * implementation used by UX Aspects Universal components.
 *
 * ## Localization
 *
 * Localization of date related content (date strings, weekday names, etc) is performed by the date & time
 * implementation; see [Intl (Luxon)](https://moment.github.io/luxon/#/intl) or
 * [i18n (Moment.js)](https://momentjs.com/docs/#/i18n/). By default, these should reflect the user's language choice as
 * reported by the browser.
 *
 * On top of this, the component uses several strings which must be localized. You can use `DatePickerI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <DatePickerI18nContext.Provider value={{ previousMonthBtnAriaLabel: 'Le mois précédent', ... }}>
 *   <DatePicker />
 * </DatePickerI18nContext.Provider>
 * ```
 *
 * See documentation for [DatePickerI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `DatePicker` in your application, it may be beneficial to
 * configure `DatePickerI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
function DatePicker(_a) {
    var { value, min, max, isDisabled, isDateDisabled, previousMonthBtnAriaLabel, nextMonthBtnAriaLabel, onValueChange, autoFocus } = _a, props = __rest(_a, ["value", "min", "max", "isDisabled", "isDateDisabled", "previousMonthBtnAriaLabel", "nextMonthBtnAriaLabel", "onValueChange", "autoFocus"]);
    const datePicker = useDatePicker({
        value,
        min,
        max,
        isDisabled,
        isDateDisabled,
        autoFocus,
        onValueChange
    });
    return React.createElement(DatePickerContext.Provider, {
        value: datePicker
    }, React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-date-picker"
    }, props)), React.createElement(DatePickerHeader, {
        min: min,
        max: max,
        previousMonthBtnAriaLabel: previousMonthBtnAriaLabel,
        nextMonthBtnAriaLabel: nextMonthBtnAriaLabel
    }), React.createElement(Calendar, null)));
}
/** Define the Prop Type information */
DatePicker.propTypes = {
    /** The value for the default Date. */
    value: PropTypes__default.any,
    /** The minimum range value for the calendar. */
    min: PropTypes__default.any,
    /** The maximum range value for the calendar. */
    max: PropTypes__default.any,
    /** Whether the control is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Whether a specific date is disabled. */
    isDateDisabled: PropTypes__default.func,
    /** The aria-label value for the previous month button. */
    previousMonthBtnAriaLabel: PropTypes__default.string,
    /** The aria-label value for the next month button. */
    nextMonthBtnAriaLabel: PropTypes__default.string
};
var css_248z$1 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-date-time-picker-popover {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-time-picker-divider {\n  align-self: stretch;\n  margin-inline: var(--uxa-date-time-picker-input-divider__margin-inline);\n  margin-block: var(--uxa-date-time-picker-input-divider__margin-block);\n  height: var(--uxa-date-time-picker-input-divider__height);\n  background: var(--uxa-date-time-picker-input-divider__color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-time-picker-divider.uxa-time-picker-divider {\n  margin-block-end: var(--uxa-date-time-picker-input-divider__margin-block-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-time-picker-divider.uxa-additional-content-divider {\n  margin-block-start: var(--uxa-date-time-picker-input-divider__margin-block-start);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-time-picker-additional-content:not(:empty) {\n  display: flex;\n  align-items: var(--uxa-date-time-picker-input-additional-content__align-items);\n  flex-direction: column;\n  margin-block-start: var(--uxa-date-time-picker-input-additional-content__margin-block-start);\n}";
styleInject(css_248z$1);
function DatePickerPopover(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [datePicker, timePicker, additionalContent] = useSlots(children, DatePicker, TimePicker);
    return React.createElement(Popover, Object.assign({}, props), React.createElement("div", {
        className: "uxa-date-time-picker-popover"
    }, datePicker, React.createElement(Show, {
        when: timePicker.length > 0
    }, React.createElement("div", {
        className: "uxa-date-time-picker-divider uxa-additional-content-divider"
    }), timePicker), React.createElement(Show, {
        when: additionalContent.length > 0
    }, React.createElement("div", {
        className: "uxa-date-time-picker-divider uxa-additional-content-divider"
    }))), React.createElement(Show, {
        when: additionalContent.length > 0
    }, React.createElement("div", {
        className: "uxa-date-time-picker-additional-content"
    }, additionalContent)));
}
function useDatePickerInput(options) {
    var _a;
    const inputGroupRef = useRef(null);
    const textInputRef = useRef(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [date, setDate] = useState(options.date);
    const [value, setValue] = useState(date ? options.toDateString(date) : "");
    const [shouldAutoFocus, setShouldAutoFocus] = useState(false);
    const onValueChange = useCallback(inputValue => {
        setValue(inputValue);
        const parsedDate = options.toDate(inputValue);
        if (inputValue === "" || parsedDate === null) {
            setDate(undefined);
        }
        if (parsedDate) {
            setDate(parsedDate);
        }
    }, [options]);
    const open = useCallback(origin => {
        setIsPopoverOpen(true);
        setShouldAutoFocus(origin === "keyboard");
    }, []);
    const inputGroupProps = {
        ref: inputGroupRef
    };
    const textInputProps = {
        ref: textInputRef,
        value,
        onValueChange,
        onMouseDown: () => setShouldAutoFocus(false),
        onKeyPress: event => {
            if (event.key === "Enter") {
                open("keyboard");
            }
        }
    };
    const toggleButtonProps = {
        type: "button",
        style: {
            pointerEvents: isPopoverOpen ? "none" : "auto"
        },
        flat: true,
        secondary: true,
        onClick: event => {
            // determine if the click was fired by the keyboard
            const origin = event.detail === 0 ? "keyboard" : "pointer";
            open(origin);
        },
        onKeyDown: event => {
            // close the popover when pressing escape
            if (event.key === "Escape") {
                setIsPopoverOpen(false);
            }
        }
    };
    const datePickerProps = {
        value: date,
        onValueChange: useCallback(newDate => {
            setDate(newDate);
            setValue(options.toDateString(newDate));
        }, [options]),
        autoFocus: shouldAutoFocus
    };
    const popoverProps = {
        isOpen: isPopoverOpen,
        onOpenChange: isOpen => setIsPopoverOpen(isOpen),
        placement: "below",
        triggerRef: inputGroupRef.current ? inputGroupRef : textInputRef,
        openTriggers: ["click"],
        closeTriggers: ["clickoutside", "escape"],
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    };
    const timePickerProps = {
        value: date,
        hourMode: (_a = options.hourMode) !== null && _a !== void 0 ? _a : 12,
        onValueChange: useCallback(newDate => {
            setDate(newDate);
            setValue(options.toDateString(newDate));
        }, [options])
    };
    return {
        date,
        setDate,
        textInputProps,
        toggleButtonProps,
        datePickerProps,
        popoverProps,
        timePickerProps,
        setIsPopoverOpen,
        inputGroupProps
    };
}
var css_248z = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker {\n  display: inline-flex;\n  flex-direction: column;\n  font-family: var(--uxa-date-range-picker__font-family, var(--uxa-typography__font-family));\n  --uxa-date-picker-grid-cell__color--outside-of-month: var(\n    --uxa-date-picker-grid-cell__color--outside-of-month-date-range\n  );\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-summary {\n  display: flex;\n  border-bottom: var(--uxa-date-range-picker-summary__border-bottom);\n  height: var(--uxa-date-range-picker-summary__height);\n  margin-inline: var(--uxa-date-range-picker-summary__margin-inline);\n  margin-block: var(--uxa-date-range-picker-summary__margin-block);\n  padding-inline: var(--uxa-date-range-picker-summary__padding-inline);\n  padding-block: var(--uxa-date-range-picker-summary__padding-block);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-content {\n  display: flex;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-summary-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-select-header,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-date-header {\n  margin-block-end: var(--uxa-date-range-picker-summary-section__margin-block-end);\n  font-weight: var(--uxa-date-range-picker-summary-section__font-weight);\n  font-size: var(--uxa-date-range-picker-summary-section__font-size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-select-header {\n  color: var(--uxa-date-range-picker-select-header__color);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-date-header {\n  color: var(--uxa-date-range-picker-date-header__color);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-time-header {\n  height: var(--uxa-date-range-picker-time-header__height);\n  visibility: hidden;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-summary-separator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: var(--uxa-date-range-picker-summary-separator__width);\n  flex: none;\n  color: var(--uxa-date-range-picker-summary-separator__color);\n  padding-block-start: var(--uxa-date-range-picker-summary-separator__padding-block-start);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-summary-duration {\n  text-align: center;\n  margin-inline: var(--uxa-date-range-picker-summary-duration__margin-inline);\n  margin-block: var(--uxa-date-range-picker-summary-duration__margin-block);\n  font-size: var(--uxa-date-range-picker-summary-duration__font-size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-date-range-picker-summary-icon {\n  --uxa-icon__size: var(--uxa-date-range-picker-summary-separator-icon__size);\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-date-range-picker-summary-icon,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-date-range-picker-summary-icon {\n  --uxa-icon__transform: var(--uxa-date-range-picker-summary-icon__transform--rtl);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-date-range-picker-summary-icon {\n  --uxa-icon__transform: var(--uxa-date-range-picker-summary-icon__transform--rtl);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-date-range-picker-summary-icon {\n  --uxa-icon__transform: var(--uxa-date-range-picker-summary-icon__transform--rtl);\n}";
styleInject(css_248z);
// eslint-disable-next-line
const DateRangePickerI18nContext = createContext(new UxaDefaultDateRangePickerI18n());
function useDateRangePickerI18nContext() {
    return useContext(DateRangePickerI18nContext);
}
function DateRangeCalendar() {
    const { start, end, min, max, isDisabled, isDateDisabled, selectStartDate, selectEndDate } = useDateRangePickerContext();
    const { startPickerAriaLabel, endPickerAriaLabel } = useDateRangePickerI18nContext();
    const { focusWithinProps: startFocusWithinProps } = useFocusWithin({
        onFocusWithin: () => announce(startPickerAriaLabel)
    });
    const { focusWithinProps: endFocusWithinProps } = useFocusWithin({
        onFocusWithin: () => announce(endPickerAriaLabel)
    });
    const startProps = {
        value: start,
        min,
        max,
        isDisabled,
        isDateDisabled,
        autoFocus: true,
        onValueChange: value => selectStartDate(value)
    };
    const endProps = {
        value: end,
        min,
        max,
        isDisabled,
        isDateDisabled,
        onValueChange: value => selectEndDate(value)
    };
    return React.createElement("div", {
        className: "uxa-date-range-picker-content"
    }, React.createElement("div", Object.assign({}, startFocusWithinProps), React.createElement(DatePicker, Object.assign({}, startProps))), React.createElement("div", Object.assign({}, endFocusWithinProps), React.createElement(DatePicker, Object.assign({}, endProps))));
}
function DateRangePickerSummary() {
    const { startTitle, endTitle, durationTitle } = useDateRangePickerI18nContext();
    const { start, end } = useDateRangePickerContext();
    const dateTimeAdapter = useDateTimeAdapter();
    const isStartDefined = start !== undefined;
    const isEndDefined = end !== undefined;
    const monthNames = dateTimeAdapter.getMonthNames();
    return React.createElement("div", {
        className: "uxa-date-range-picker-summary"
    }, React.createElement("div", {
        className: "uxa-date-range-picker-summary-section"
    }, React.createElement("div", {
        className: clsx({
            "uxa-date-range-picker-select-header": !isStartDefined,
            "uxa-date-range-picker-date-header": isStartDefined
        })
    }, "\u200E", isStartDefined ? `${dateTimeAdapter.getDate(start)} ${monthNames[dateTimeAdapter.getMonthIndex(start)]} ${dateTimeAdapter.getYear(start)}` : startTitle), React.createElement("div", {
        style: {
            visibility: "hidden"
        },
        className: "uxa-date-range-picker-time-header"
    })), React.createElement("div", {
        className: "uxa-date-range-picker-summary-separator"
    }, React.createElement("div", {
        className: "uxa-date-range-picker-summary-icon"
    }, React.createElement(ArrowRightIcon, null)), React.createElement("p", {
        className: "uxa-date-range-picker-summary-duration",
        style: {
            visibility: isStartDefined && isEndDefined ? "visible" : "hidden"
        }
    }, durationTitle === null || durationTitle === void 0 ? void 0 : durationTitle(isStartDefined && isEndDefined ? Math.max(dateTimeAdapter.getIntervalInDays(start, end), 1) : 0, start, end))), React.createElement("div", {
        className: "uxa-date-range-picker-summary-section"
    }, React.createElement("div", {
        className: clsx({
            "uxa-date-range-picker-select-header": !isEndDefined,
            "uxa-date-range-picker-date-header": isEndDefined
        })
    }, "\u200E", isEndDefined ? `${dateTimeAdapter.getDate(end)} ${monthNames[dateTimeAdapter.getMonthIndex(end)]} ${dateTimeAdapter.getYear(end)}` : endTitle), React.createElement("div", {
        style: {
            visibility: "hidden"
        },
        className: "uxa-date-range-picker-time-header"
    })));
}
/**
 * See the documentation for `DateTimeAdapterContext` for more information about configuring the date & time
 * implementation used by UX Aspects Universal components.
 *
 * ## Localization
 *
 * Localization of date related content (date strings, weekday names, etc) is performed by the date & time
 * implementation; see [Intl (Luxon)](https://moment.github.io/luxon/#/intl) or
 * [i18n (Moment.js)](https://momentjs.com/docs/#/i18n/). By default, these should reflect the user's language choice as
 * reported by the browser.
 *
 * On top of this, the component uses several strings which must be localized. You can use `DateRangePickerI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <DateRangePickerI18nContext.Provider value={{ startTitle: 'Dewiswch ddyddiad cychwyn', ... }}>
 *   <DateRangePicker />
 * </DateRangePickerI18nContext.Provider>
 * ```
 *
 * See documentation for [DateRangePickerI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `DateRangePicker` in your application, it may be beneficial to
 * configure `DateRangePickerI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
function DateRangePicker(_a) {
    var { start, end, min, max, isDisabled, isDateDisabled, showSummary, onValueChange } = _a, props = __rest(_a, ["start", "end", "min", "max", "isDisabled", "isDateDisabled", "showSummary", "onValueChange"]);
    const { isJato } = useThemeFamily();
    // on jato we should hide the summary by default
    showSummary !== null && showSummary !== void 0 ? showSummary : showSummary = !isJato;
    const dateRangePicker = useDateRangePicker({
        start,
        end,
        min,
        max,
        isDisabled,
        isDateDisabled,
        onValueChange
    });
    return React.createElement(DateRangePickerContext.Provider, {
        value: dateRangePicker
    }, React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-date-range-picker"
    }, props)), showSummary && React.createElement(DateRangePickerSummary, null), React.createElement(DateRangeCalendar, null)));
}
/** Define the Prop Type information */
DateRangePicker.propTypes = {
    /** The value for the default start Date. */
    start: PropTypes__default.any,
    /** The value for the default end Date. */
    end: PropTypes__default.any,
    /** The minimum range value for the calendar. */
    min: PropTypes__default.any,
    /** The maximum range value for the calendar. */
    max: PropTypes__default.any,
    /** Whether the control is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Whether a specific date is disabled. */
    isDateDisabled: PropTypes__default.func,
    /** Whether the summary is shown.*/
    showSummary: PropTypes__default.bool,
    /** Emits whenever the date range selection changes.*/
    onValueChange: PropTypes__default.func
};
export { DatePicker, DatePickerI18nContext, DatePickerPopover, DateRangePicker, DateRangePickerI18nContext, useDatePickerI18nContext, useDatePickerInput, useDateRangePickerI18nContext };
