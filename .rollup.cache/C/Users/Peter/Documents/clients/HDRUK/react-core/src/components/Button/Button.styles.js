import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobalStyles, getComponentSizeStyles, getComponentVariantStyles, getSize, } from "../../theme";
export var mixins = {
    button: function () {
        return "\n        border-width: 2px;\n        border-style: solid;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        line-height: 1em;\n        cursor: pointer;\n\n        &:disabled {\n          cursor: default;\n        }\n";
    },
};
export var root = function (_a) {
    var variant = _a.variant, size = _a.size;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            ", "\n\n            ", "\n      ", "\n      ", "\n\n      gap: ", ";\n        "], ["\n            ", "\n\n            ", "\n      ", "\n      ", "\n\n      gap: ", ";\n        "])), mixins.button(), getComponentGlobalStyles("Button", theme), getComponentVariantStyles("Button", variant, theme), getComponentSizeStyles("Button", size, theme), getSize(1.5, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Button.styles.js.map