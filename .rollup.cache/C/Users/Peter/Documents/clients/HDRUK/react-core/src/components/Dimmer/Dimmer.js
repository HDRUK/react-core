import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Dimmer.styles";
var Dimmer = function (_a) {
    var children = _a.children, className = _a.className, contentAlignment = _a.contentAlignment, outerProps = __rest(_a, ["children", "className", "contentAlignment"]);
    return (_jsx("div", __assign({}, outerProps, { className: cx(className, "ui-Dimmer"), css: styles.root({ contentAlignment: contentAlignment }) }, { children: children })));
};
Dimmer.defaultProps = {
    contentAlignment: "center",
};
export default Dimmer;
//# sourceMappingURL=Dimmer.js.map