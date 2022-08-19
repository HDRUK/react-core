import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import Box from "../Box";
import { Card, CardBody } from "../Card";
import * as styles from "./FeatureContentHorizontal.styles";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";
import FeatureContentActions from "../FeatureContent/FeatureContentActions";
var FeatureContentHorizontal = function (_a) {
    var media = _a.media, header = _a.header, body = _a.body, actions = _a.actions, outerProps = __rest(_a, ["media", "header", "body", "actions"]);
    return (_jsx(Card, __assign({}, outerProps, { className: "ui-FeatureContentHorizontal" }, { children: _jsx(CardBody, { children: _jsxs(Box, __assign({ display: "grid", gridTemplateColumns: "1fr 200px", gridTemplateRows: "1fr" }, { children: [_jsxs(Box, __assign({ m: -2, gridColumn: "1", css: styles.root, display: "flex", flexDirection: "column" }, { children: [_jsxs(Box, __assign({ flexGrow: "1" }, { children: [header && (_jsx(FeatureContentHeader, __assign({ mb: 3 }, { children: header }))), body && _jsx(FeatureContentBody, __assign({ mb: 3 }, { children: body }))] })), actions && (_jsx(FeatureContentActions, { children: actions }))] })), media && (_jsx(Box, __assign({ gridColumn: "2", position: "relative", minHeight: "254px", maxWidth: "200px" }, { children: _jsx("div", __assign({ css: styles.media }, { children: media })) })))] })) }) })));
};
export default FeatureContentHorizontal;
//# sourceMappingURL=FeatureContentHorizontal.js.map