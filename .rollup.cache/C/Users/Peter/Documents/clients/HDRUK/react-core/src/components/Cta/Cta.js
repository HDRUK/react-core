import { __assign, __rest } from "tslib";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Cta.styles";
var fontSizes = {
    small: "xs",
    medium: "md",
    large: "xl",
};
var Cta = function (_a) {
    var color = _a.color, children = _a.children, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, iconLeft = _a.iconLeft, iconRight = _a.iconRight, className = _a.className, fill = _a.fill, size = _a.size, outerProps = __rest(_a, ["color", "children", "mt", "mb", "ml", "mr", "m", "mx", "my", "iconLeft", "iconRight", "className", "fill", "size"]);
    var commonStyles = useCommonStyles({
        mt: mt,
        mr: mr,
        ml: ml,
        mb: mb,
        m: m,
        mx: mx,
        my: my,
    });
    return (_jsxs("button", __assign({}, outerProps, { className: cx(className, "ui-Cta"), css: [
            commonStyles,
            styles.root({
                color: color,
                fill: fill,
                fontSize: fontSizes[size],
            }),
        ] }, { children: [iconLeft, " ", children, " ", iconRight] })));
};
Cta.defaultProps = {
    size: "medium",
};
export default Cta;
//# sourceMappingURL=Cta.js.map