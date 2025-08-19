function isReactElementType(node, target) {
  return isReactElement(node) && node.type === target;
}
function isReactElement(node) {
  var _a;
  return (_a = typeof node === 'object' && (node === null || node === void 0 ? void 0 : node.hasOwnProperty('type'))) !== null && _a !== void 0 ? _a : false;
}

export { isReactElementType as a, isReactElement as i };
