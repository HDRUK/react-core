import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
export var content = function (_a) {
    var initialHeight = _a.initialHeight;
    return function () {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      max-height: ", ";\n      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n      overflow: hidden;\n    "], ["\n      max-height: ", ";\n      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n      overflow: hidden;\n    "])), initialHeight);
    };
};
export var contentOpening = function (_a) {
    var height = _a.height;
    return function () {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      max-height: ", ";\n      transition: max-height 1s ease-in-out;\n    "], ["\n      max-height: ", ";\n      transition: max-height 1s ease-in-out;\n    "])), height);
    };
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Collapsable.styles.js.map