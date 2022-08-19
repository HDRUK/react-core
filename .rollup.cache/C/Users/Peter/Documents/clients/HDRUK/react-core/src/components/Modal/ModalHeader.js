import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import CardHeader from "../Card/CardHeader";
var ModalHeader = function (_a) {
    var className = _a.className, children = _a.children, outerProps = __rest(_a, ["className", "children"]);
    return (_jsx(CardHeader, __assign({}, outerProps, { className: cx(className, "ui-ModalHeader") }, { children: children })));
};
export default ModalHeader;
//# sourceMappingURL=ModalHeader.js.map