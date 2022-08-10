import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Message.styles";
var Message = function (_a) {
    var className = _a.className, children = _a.children, ml = _a.ml, mr = _a.mr, mb = _a.mb, mt = _a.mt, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, variant = _a.variant, outerProps = __rest(_a, ["className", "children", "ml", "mr", "mb", "mt", "m", "mx", "my", "width", "minWidth", "maxWidth", "variant"]);
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
    return (_jsx("div", __assign({}, outerProps, { className: cx("ui-Message", className), css: [commonStyles, styles.root({ variant: variant })] }, { children: children })));
};
Message.defaultProps = {
    variant: "description",
};
export default Message;
//# sourceMappingURL=Message.js.map