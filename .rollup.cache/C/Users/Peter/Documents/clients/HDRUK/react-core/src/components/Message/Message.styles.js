import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobalStyles, getComponentVariantStyles, } from "../../theme";
export var root = function (_a) {
    var variant = _a.variant;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n    "])), getComponentGlobalStyles("Message", theme), getComponentVariantStyles("Message", variant, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Message.styles.js.map