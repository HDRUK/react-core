import { __assign } from "tslib";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import Button from "../Button";
var FileSelectorButton = function (_a) {
    var onClick = _a.onClick, iconLeft = _a.iconLeft, children = _a.children;
    return (_jsx(Button, __assign({ variant: "tertiary", onClick: onClick, iconLeft: iconLeft }, { children: children })));
};
FileSelectorButton.defaultProps = {
    children: "Select file",
};
export default FileSelectorButton;
//# sourceMappingURL=FileSelectorButton.js.map