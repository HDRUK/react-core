import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Tag.styles";
var Tag = function (_a) {
    var children = _a.children, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, variant = _a.variant, size = _a.size, className = _a.className, outerProps = __rest(_a, ["children", "mt", "mb", "ml", "mr", "m", "mx", "my", "variant", "size", "className"]);
    var commonStyles = useCommonStyles({
        mt: mt,
        mr: mr,
        ml: ml,
        mb: mb,
        m: m,
        mx: mx,
        my: my,
    });
    return (_jsx("span", __assign({}, outerProps, { className: cx(className, "ui-Tag"), css: [
            commonStyles,
            styles.root({
                variant: variant,
                size: size,
            }),
        ] }, { children: children })));
};
Tag.defaultProps = {
    variant: "info",
    size: "medium",
};
export default Tag;
//# sourceMappingURL=Tag.js.map