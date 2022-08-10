import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
var CardBody = function (_a) {
    var className = _a.className, children = _a.children, outerProps = __rest(_a, ["className", "children"]);
    return (_jsx("div", __assign({}, outerProps, { className: cx(className, "ui-CardBody"), css: styles.cardBody }, { children: children })));
};
export default CardBody;
//# sourceMappingURL=CardBody.js.map