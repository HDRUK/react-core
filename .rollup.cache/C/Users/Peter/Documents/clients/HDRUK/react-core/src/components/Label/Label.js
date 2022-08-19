import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Label.styles";
var Label = function (_a) {
    var className = _a.className, children = _a.children, disabled = _a.disabled, ml = _a.ml, mr = _a.mr, mb = _a.mb, mt = _a.mt, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, outerProps = __rest(_a, ["className", "children", "disabled", "ml", "mr", "mb", "mt", "m", "mx", "my", "width", "minWidth", "maxWidth"]);
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
    return (_jsx("label", __assign({}, outerProps, { className: cx("ui-Label", className), css: [commonStyles, styles.root({ disabled: disabled })] }, { children: children })));
};
export default Label;
//# sourceMappingURL=Label.js.map