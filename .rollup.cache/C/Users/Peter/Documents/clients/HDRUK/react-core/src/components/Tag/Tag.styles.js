import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentVariantStyles, getComponentSizeStyles } from "../../theme";
export var root = function (_a) {
    var variant = _a.variant, size = _a.size;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-flex;\n      align-items: center;\n      border-radius: 3px;\n      line-height: 1em;\n\n      ", "\n      ", "\n    "], ["\n      display: inline-flex;\n      align-items: center;\n      border-radius: 3px;\n      line-height: 1em;\n\n      ", "\n      ", "\n    "])), getComponentSizeStyles("Tag", size, theme), getComponentVariantStyles("Tag", variant, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Tag.styles.js.map