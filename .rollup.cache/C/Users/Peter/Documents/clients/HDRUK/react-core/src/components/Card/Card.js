import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
var Card = function (_a) {
    var children = _a.children, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, className = _a.className, outerProps = __rest(_a, ["children", "mt", "mb", "ml", "mr", "m", "mx", "my", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "className"]);
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
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
    });
    return (_jsx("div", __assign({ role: "article" }, outerProps, { className: cx(className, "ui-Card"), css: [commonStyles, styles.root()] }, { children: children })));
};
export default Card;
//# sourceMappingURL=Card.js.map