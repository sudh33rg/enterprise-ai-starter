function D(n) {
  return n === "x" ? "y" : "x";
}
function M(n) {
  return D(S(n));
}
function S(n) {
  return ["above", "below"].includes(n) ? "y" : "x";
}
function F(n) {
  return n === "y" ? "height" : "width";
}
function v(n, c, r) {
  return Math.max(n, Math.min(c, r));
}
function L(n, c, r, p, A, P) {
  const t = {
    trigger: n.getBoundingClientRect(),
    floating: c.getBoundingClientRect(),
    arrowBg: r.getBoundingClientRect(),
    arrowFg: p.getBoundingClientRect()
  }, a = { x: t.floating.x, y: t.floating.y }, o = M(A), e = F(o), d = o === "y", y = d ? "clientHeight" : "clientWidth", O = t.trigger[e] + t.trigger[o] - a[o] - t.floating[e], R = a[o] - t.trigger[o], l = r.offsetParent, g = l ? l[y] : 0, b = O / 2 - R / 2, u = g / 2 - t.arrowBg[e] / 2 - 1, h = Math.min(0, u), w = Math.min(0, u), s = h, x = g - t.arrowBg[e] - w, i = g / 2 - t.arrowBg[e] / 2 + b, f = v(s, i, x), m = P !== void 0 && i !== f && t.trigger[e] / 2 - (i < s ? h : w) - t.arrowBg[e] / 2 < 0 ? i < s ? i - s : i - x : 0, C = (t.arrowBg.width - t.arrowFg.width) / 2, B = d ? "top" : "left";
  return {
    arrowBgStyle: {
      [B]: f + m + "px"
    },
    arrowFgStyle: {
      [B]: f + m + C + "px"
    }
  };
}
export {
  L as getArrowPosition
};
