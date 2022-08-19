import { __assign, __rest } from "tslib";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Button.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
var Button = function (_a) {
    var variant = _a.variant, children = _a.children, size = _a.size, m = _a.m, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, iconLeft = _a.iconLeft, iconRight = _a.iconRight, className = _a.className, outerProps = __rest(_a, ["variant", "children", "size", "m", "mt", "mb", "ml", "mr", "mx", "my", "width", "minWidth", "maxWidth", "iconLeft", "iconRight", "className"]);
    var commonStyles = useCommonStyles({
        mt: mt,
        mr: mr,
        ml: ml,
        mb: mb,
        m: m,
        mx: mx,
        my: my,
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
    });
    return (_jsxs("button", __assign({}, outerProps, { css: [commonStyles, styles.root({ size: size, variant: variant })], className: cx("ui-Button", className) }, { children: [iconLeft, " ", children, " ", iconRight] })));
};
Button.defaultProps = {
    size: "medium",
    variant: "primary",
    type: "button",
    disabled: false,
};
export default Button;
//# sourceMappingURL=Button.js.map