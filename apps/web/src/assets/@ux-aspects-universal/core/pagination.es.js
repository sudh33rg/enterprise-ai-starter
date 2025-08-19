function n(l, e, h) {
  const o = [];
  if (e <= h) {
    for (let r = 1; r <= e; r++)
      o.push(r);
    return o;
  }
  let f = l - Math.floor(h / 2), t = l + Math.floor(h / 2);
  f < 1 && (t = t + (1 - f), f = 1), t > e && (f = f - (t - e), t = e);
  for (let r = f; r <= t; r++)
    o.push(r);
  return o;
}
export {
  n as getPageRange
};
