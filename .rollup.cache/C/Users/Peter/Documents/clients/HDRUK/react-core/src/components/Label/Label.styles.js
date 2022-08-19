import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getColorStyle, getComponentGlobals } from "../../theme";
export var root = function (_a) {
    var disabled = _a.disabled;
    return function (theme) {
        var disabledColor = getComponentGlobals("Label", theme).disabledColor;
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: block;\n\n      ", "\n    "], ["\n      display: block;\n\n      ", "\n    "])), disabled && getColorStyle("color", disabledColor, theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Label.styles.js.map