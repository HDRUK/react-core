import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentStylesFromTheme, getSize } from "../../theme";
export var root = function (_a) {
    var color = _a.color, fill = _a.fill, fontSize = _a.fontSize;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      gap: ", ";\n      background: none;\n      border: none;\n      display: flex;\n      align-items: center;\n\n      ", ";\n\n      &:hover {\n        cursor: pointer;\n      }\n    "], ["\n      gap: ", ";\n      background: none;\n      border: none;\n      display: flex;\n      align-items: center;\n\n      ", ";\n\n      &:hover {\n        cursor: pointer;\n      }\n    "])), getSize(2, theme), getComponentStylesFromTheme({
            color: color,
            fill: fill,
            fontSize: fontSize,
        }, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Cta.styles.js.map