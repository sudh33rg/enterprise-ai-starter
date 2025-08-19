class s {
}
class d extends s {
  constructor() {
    super(...arguments), this.overflowMenuButtonAriaLabel = "Breadcrumb overflow menu";
  }
}
class n {
}
class g extends n {
  constructor() {
    super(...arguments), this.clearButtonAriaLabel = "Clear selection";
  }
}
class r {
}
class m extends r {
  constructor() {
    super(...arguments), this.previousMonthBtnAriaLabel = "Previous month", this.nextMonthBtnAriaLabel = "Next month", this.monthYearOrder = ["month", "year"];
  }
}
class i {
}
class L extends i {
  constructor() {
    super(...arguments), this.startTitle = "Select start date", this.endTitle = "Select end date", this.startPickerAriaLabel = "Selecting the start date", this.endPickerAriaLabel = "Selecting the end date", this.monthYearOrder = ["month", "year"], this.durationTitle = (t) => `${t} ${t > 1 ? "days" : "day"}`;
  }
}
class l {
}
class I extends l {
  constructor() {
    super(...arguments), this.editButtonAriaLabel = "Edit", this.resetButtonAriaLabel = "Reset", this.saveButtonAriaLabel = "Save", this.cancelButtonAriaLabel = "Cancel", this.placeholder = "No value";
  }
}
class u {
}
class f extends u {
  constructor() {
    super(...arguments), this.dismissButtonAriaLabel = "Dismiss inline notification";
  }
}
class c {
}
class p extends c {
  constructor() {
    super(...arguments), this.menuButtonAriaLabel = "Open page tab menu", this.closeAllButtonLabel = "Close all", this.searchPlaceholder = "Search";
  }
}
class o {
}
class A extends o {
  constructor() {
    super(...arguments), this.previousButtonAriaLabel = "Previous page", this.nextButtonAriaLabel = "Next page", this.firstButtonAriaLabel = "First page", this.lastButtonAriaLabel = "Last page";
  }
  getPageAriaLabel(t) {
    return `Page ${t}`;
  }
  getRangeLabel(t, a) {
    return `Page ${t} of ${a}`;
  }
}
class h {
}
class P extends h {
  constructor() {
    super(...arguments), this.clearButtonAriaLabel = "Clear selection";
  }
}
class x {
}
class U extends x {
  constructor() {
    super(...arguments), this.hourPickerAriaLabel = "Hour", this.minutePickerAriaLabel = "Minute", this.secondPickerAriaLabel = "Second", this.offsetPickerAriaLabel = "Time offset";
  }
}
function B(e) {
  return e[0] === "month" && e[1] === "year";
}
class b {
}
class S extends b {
  constructor() {
    super(...arguments), this.successStatusLabel = "Status: success", this.warningStatusLabel = "Status: warning", this.errorStatusLabel = "Status: error", this.activeStatusLabel = "Status: active", this.pendingStatusLabel = "Status: pending";
  }
}
export {
  s as UxaBreadcrumbsI18n,
  n as UxaComboboxI18n,
  r as UxaDatePickerI18n,
  i as UxaDateRangePickerI18n,
  d as UxaDefaultBreadcrumbsI18n,
  g as UxaDefaultComboboxI18n,
  m as UxaDefaultDatePickerI18n,
  L as UxaDefaultDateRangePickerI18n,
  I as UxaDefaultInlineEditI18n,
  f as UxaDefaultInlineNotificationI18n,
  p as UxaDefaultPageTabsI18n,
  A as UxaDefaultPaginationI18n,
  P as UxaDefaultSelectI18n,
  U as UxaDefaultTimePickerI18n,
  S as UxaDefaultWizardI18n,
  l as UxaInlineEditI18n,
  u as UxaInlineNotificationI18n,
  c as UxaPageTabsI18n,
  o as UxaPaginationI18n,
  h as UxaSelectI18n,
  x as UxaTimePickerI18n,
  b as UxaWizardI18n,
  B as isMonthFirst
};
