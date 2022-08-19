import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobals, getSize } from "../../theme";
export var root = function (theme) {
    var cardOffset = getComponentGlobals("FeatureContentVertical", theme).cardOffset;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: ", ";\n\n    > last-child {\n      margin-bottom: 0;\n    }\n  "], ["\n    margin: ", ";\n\n    > last-child {\n      margin-bottom: 0;\n    }\n  "])), cardOffset);
};
export var media = function (theme) {
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-bottom: ", ";\n\n    > * {\n      width: 100%;\n    }\n  "], ["\n    margin-bottom: ", ";\n\n    > * {\n      width: 100%;\n    }\n  "])), getSize(2, theme));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=FeatureContentVertical.styles.js.map