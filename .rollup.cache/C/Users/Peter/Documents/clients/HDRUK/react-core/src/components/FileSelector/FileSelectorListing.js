import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import * as styles from "./FileSelector.styles";
import Box from "../Box";
import Icon from "../Icon";
import { ReactComponent as JsonIcon } from "../../images/icons/json.svg";
var FileSelectorListing = function (_a) {
    var onRemove = _a.onRemove, fileList = _a.fileList, actions = _a.actions;
    return (_jsxs("table", __assign({ css: styles.table }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "File" }), _jsx("th", { children: "Description" }), _jsx("th", { children: "Action" })] }) }), _jsx("tbody", { children: __spreadArray([], fileList, true).map(function (_a) {
                    var name = _a.name;
                    return (_jsxs("tr", { children: [_jsx("td", __assign({ css: styles.nameColumn }, { children: _jsxs(Box, __assign({ display: "flex", alignItems: "center", overflow: "hidden", width: "100px" }, { children: [_jsx(Icon, { svg: _jsx(JsonIcon, {}), size: "2xl", mr: 2 }), " ", name] })) })), _jsx("td", { children: name }), _jsx("td", __assign({ css: styles.actionsColumn }, { children: _jsx(Box, __assign({ display: "flex", justifyContent: "flex-end", gap: 1 }, { children: actions({ onRemove: function () { return onRemove(name); } }) })) }))] }, name));
                }) })] })));
};
FileSelectorListing.defaultProps = {
    fileList: [],
};
export default FileSelectorListing;
//# sourceMappingURL=FileSelectorListing.js.map