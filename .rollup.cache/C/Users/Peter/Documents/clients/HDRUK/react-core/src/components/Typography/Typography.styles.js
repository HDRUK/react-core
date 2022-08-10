import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getColorStyle, getComponentVariantStyles } from "../../theme";
export var root = function (_a) {
    var color = _a.color, variant = _a.variant, tag = _a.tag;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", ";\n    "], ["\n      ", "\n      ", "\n      ", ";\n    "])), tag === "span" && "display: inline-block;", getColorStyle("color", color, theme), getComponentVariantStyles("Typography", variant, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Typography.styles.js.map