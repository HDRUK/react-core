import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Collapsable.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
import Box from "../Box";
var Collapsable = function (_a) {
    var children = _a.children, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, className = _a.className, toggle = _a.toggle, initialHeight = _a.initialHeight, open = _a.open, outerProps = __rest(_a, ["children", "mt", "mb", "ml", "mr", "m", "mx", "my", "className", "toggle", "initialHeight", "open"]);
    var commonStyles = useCommonStyles({
        mt: mt,
        mr: mr,
        ml: ml,
        mb: mb,
        m: m,
        mx: mx,
        my: my,
    });
    return (_jsxs(Box, __assign({}, outerProps, { display: "flex", className: cx(className, "ui-Collapsable"), css: [commonStyles] }, { children: [_jsx(Box, __assign({ css: [
                    styles.content({ initialHeight: initialHeight }),
                    open && styles.contentOpening({ height: "1000px" }),
                ], flexGrow: "1" }, { children: children })), _jsx(Box, __assign({ flexShrink: "0", pl: 4 }, { children: toggle }))] })));
};
Collapsable.defaultProps = {
    initialHeight: 0,
};
export default Collapsable;
//# sourceMappingURL=Collapsable.js.map