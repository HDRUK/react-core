import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import FeatureContentHorizontal from "../FeatureContentHorizontal";
import FeatureContentVertical from "../FeatureContentVertical";
var FeatureContent = function (_a) {
    var variant = _a.variant, outerProps = __rest(_a, ["variant"]);
    return (_jsxs(_Fragment, { children: [variant === "horizontal" && _jsx(FeatureContentHorizontal, __assign({}, outerProps)), variant === "vertical" && _jsx(FeatureContentVertical, __assign({}, outerProps))] }));
};
FeatureContent.defaultProps = {
    variant: "vertical",
};
export default FeatureContent;
//# sourceMappingURL=FeatureContent.js.map