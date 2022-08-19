import { __assign } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Typography.styles";
var Typography = function (_a) {
    var children = _a.children, color = _a.color, className = _a.className, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, variant = _a.variant, as = _a.as;
    var commonStyles = useCommonStyles({
        mt: mt,
        mb: mb,
        ml: ml,
        mr: mr,
        m: m,
        mx: mx,
        my: my,
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
    });
    var Component = as;
    if (!as) {
        if (variant === "body") {
            Component = "p";
        }
        else if (variant === "caption" ||
            variant === "small" ||
            variant === "tiny") {
            Component = "span";
        }
        else {
            Component = variant;
        }
    }
    return Component ? (_jsx(Component, __assign({ className: cx(className, "ui-Typography"), css: [commonStyles, styles.root({ variant: variant, color: color, tag: Component })] }, { children: children }))) : null;
};
Typography.defaultProps = {
    variant: "body",
    m: 0,
};
export default Typography;
//# sourceMappingURL=Typography.js.map