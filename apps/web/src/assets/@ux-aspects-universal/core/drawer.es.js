function g(t, r) {
  return r === "top" || r === "bottom" ? t.height : t.width;
}
function s(t, r, e) {
  return t / g(r, e) * 100;
}
function w(t, r, e, n) {
  switch (e) {
    case "top":
      return t.clientY - r.top;
    case "bottom":
      return r.bottom - t.clientY;
    case "start":
      return n ? r.right - t.clientX : t.clientX - r.left;
    case "end":
      return n ? t.clientX - r.left : r.right - t.clientX;
  }
}
function M(t, r, e, n) {
  const { top: c, left: o, bottom: u, right: i } = e.getBoundingClientRect();
  switch (r) {
    case "top":
      return t.clientY - c;
    case "bottom":
      return u - t.clientY;
    case "start":
      return n ? i - t.clientX : t.clientX - o;
    case "end":
      return n ? t.clientX - o : i - t.clientX;
  }
}
function O(t, r, e, n, c, o, u, i) {
  const f = w(t, r, c, o) - n;
  return p(
    e === "percent" ? s(f, r, c) : f,
    u,
    i
  );
}
function X(t, r, e) {
  return t / 100 * g(r, e);
}
function a(t, r, e, n, c) {
  const o = n === "percent" ? r : X(r, e, c);
  return t + o;
}
function l(t, r, e, n, c, o) {
  return o === "start" ? a(t, c ? -r : r, e, n, o) : o === "end" ? a(t, c ? r : -r, e, n, o) : t;
}
function h(t, r, e, n, c) {
  return c === "top" ? a(t, r, e, n, c) : c === "bottom" ? a(t, -r, e, n, c) : t;
}
function P(t, r, e, n, c, o, u, i) {
  let f = r;
  switch (t.key) {
    case "ArrowLeft":
      t.preventDefault(), f = l(r, -1, c, n, o, e);
      break;
    case "ArrowRight":
      t.preventDefault(), f = l(r, 1, c, n, o, e);
      break;
    case "ArrowUp":
      t.preventDefault(), f = h(r, -1, c, n, e);
      break;
    case "ArrowDown":
      t.preventDefault(), f = h(r, 1, c, n, e);
      break;
    case "Home":
      t.preventDefault(), f = u ?? 0;
      break;
    case "End":
      t.preventDefault(), f = i ?? (n === "percent" ? 100 : g(c, e));
      break;
  }
  return p(f, u, i);
}
function p(t, r = 0, e = 1 / 0) {
  return Math.min(Math.max(t, r), e);
}
var k = /* @__PURE__ */ ((t) => (t.None = "none", t.Opening = "opening", t.Closing = "closing", t.Initial = "initial", t))(k || {});
export {
  k as DrawerAnimation,
  p as clamp,
  M as getDragOffset,
  P as getSizeFromKeyDown,
  O as getSizeFromMouseMove
};
