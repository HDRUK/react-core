import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { Card, CardBody } from "../Card";
import * as styles from "./FeatureContentVertical.styles";
import FeatureContentBody from "../FeatureContent/FeatureContentBody";
import FeatureContentHeader from "../FeatureContent/FeatureContentHeader";
import FeatureContentActions from "../FeatureContent/FeatureContentActions";
var FeatureContentVertical = function (_a) {
    var media = _a.media, header = _a.header, body = _a.body, actions = _a.actions, outerProps = __rest(_a, ["media", "header", "body", "actions"]);
    return (_jsx(Card, __assign({}, outerProps, { className: "ui-FeatureContentVertical" }, { children: _jsx(CardBody, { children: _jsxs("div", __assign({ css: styles.root }, { children: [header && (_jsx(FeatureContentHeader, __assign({ mb: 3 }, { children: header }))), _jsx("div", __assign({ css: styles.media }, { children: media })), body && _jsx(FeatureContentBody, __assign({ mb: 4 }, { children: body })), actions && (_jsx(FeatureContentActions, __assign({ textAlign: "center" }, { children: actions })))] })) }) })));
};
export default FeatureContentVertical;
//# sourceMappingURL=FeatureContentVertical.js.map