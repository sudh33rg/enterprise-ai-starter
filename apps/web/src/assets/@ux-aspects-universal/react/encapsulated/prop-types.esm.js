import { _ as __rest } from "./_tslib.esm.js";
import { u as useDirection } from "./direction.esm.js";
import "react";
import "@react-aria/utils";
import "clsx";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
function useIconProps(_a) {
    var { size, mirror, style, label, role, mirrorInRtl } = _a, props = __rest(_a, ["size", "mirror", "style", "label", "role", "mirrorInRtl"]);
    const dir = useDirection();
    const iconId = useUniqueId("uxa-icon-id");
    const titleId = useUniqueId("uxa-icon-svg-title");
    let shouldMirror = mirror;
    if (mirrorInRtl) {
        shouldMirror = dir === "rtl" ? !shouldMirror : shouldMirror;
    }
    return {
        label,
        titleId,
        getId: id => id.replace(/uxa-icon-id-(\d+)/g, `${iconId}-$1`),
        style: Object.assign({
            transform: shouldMirror ? "scaleX(-1)" : "var(--uxa-icon__transform, none)",
            width: size !== null && size !== void 0 ? size : "var(--uxa-icon__size, 1em)",
            height: size !== null && size !== void 0 ? size : "var(--uxa-icon__size, 1em)",
            fill: "var(--uxa-icon__fill, currentColor)",
            flex: "none"
        }, style),
        iconProps: Object.assign({
            "aria-labelledby": label ? titleId : undefined,
            "aria-hidden": label ? undefined : true,
            role: role !== null && role !== void 0 ? role : "img"
        }, props)
    };
}
const iconPropTypes = {
    size: PropTypes__default.string,
    mirror: PropTypes__default.bool,
    label: PropTypes__default.string,
    role: PropTypes__default.string
};
export { iconPropTypes as i, useIconProps as u };
