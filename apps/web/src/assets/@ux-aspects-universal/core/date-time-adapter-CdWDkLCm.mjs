class r {
  constructor(e = {}) {
    e.defaultLocale && this.setDefaultLocale(e.defaultLocale);
  }
  /** Determine whether `dt1` is after `dt2`. */
  isAfter(e, t) {
    return this.compare(e, t) > 0;
  }
  /** Determine whether `dt1` is before `dt2`. */
  isBefore(e, t) {
    return this.compare(e, t) < 0;
  }
}
export {
  r as U
};
