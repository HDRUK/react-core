import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Icon.styles";
var Icon = function (_a) {
    var svg = _a.svg, size = _a.size, color = _a.color, fill = _a.fill, stroke = _a.stroke, className = _a.className, ml = _a.ml, mr = _a.mr, mb = _a.mb, mt = _a.mt, m = _a.m, mx = _a.mx, my = _a.my, outerProps = __rest(_a, ["svg", "size", "color", "fill", "stroke", "className", "ml", "mr", "mb", "mt", "m", "mx", "my"]);
    var commonStyles = useCommonStyles({ mt: mt, mb: mb, ml: ml, mr: mr, m: m, mx: mx, my: my });
    return (_jsx("span", __assign({}, outerProps, { className: cx("ui-Icon", className), css: [commonStyles, styles.root({ size: size, color: color, fill: fill, stroke: stroke })] }, { children: svg })));
};
Icon.defaultProps = {
    size: "md",
};
export default Icon;
//# sourceMappingURL=Icon.js.map