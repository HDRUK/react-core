import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobals } from "../../theme";
export var root = function () {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    > :last-child {\n      margin-bottom: 0;\n    }\n  "], ["\n    > :last-child {\n      margin-bottom: 0;\n    }\n  "])));
};
export var media = function (theme) {
    var cardOffset = getComponentGlobals("FeatureContentHorizontal", theme).cardOffset;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 100%;\n    top: ", ";\n    bottom: ", ";\n    width: 100%;\n    position: absolute;\n    right: ", ";\n    line-height: 0;\n    overflow: hidden;\n\n    > * {\n      height: 100%;\n    }\n  "], ["\n    max-width: 100%;\n    top: ", ";\n    bottom: ", ";\n    width: 100%;\n    position: absolute;\n    right: ", ";\n    line-height: 0;\n    overflow: hidden;\n\n    > * {\n      height: 100%;\n    }\n  "])), cardOffset, cardOffset, cardOffset);
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=FeatureContentHorizontal.styles.js.map