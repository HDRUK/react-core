import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentSizeStyles, getComponentStylesFromTheme, } from "../../theme";
export var root = function (_a) {
    var size = _a.size, color = _a.color, stroke = _a.stroke, fill = _a.fill;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      flex-shrink: 0;\n      height: ", ";\n      width: ", ";\n\n      ", "\n\n      svg,\n      img {\n        width: 100%;\n        height: 100%;\n      }\n    "], ["\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      flex-shrink: 0;\n      height: ", ";\n      width: ", ";\n\n      ", "\n\n      svg,\n      img {\n        width: 100%;\n        height: 100%;\n      }\n    "])), getComponentSizeStyles("Icon", size, theme), getComponentSizeStyles("Icon", size, theme), getComponentStylesFromTheme({ stroke: stroke, color: color, fill: fill }, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Icon.styles.js.map