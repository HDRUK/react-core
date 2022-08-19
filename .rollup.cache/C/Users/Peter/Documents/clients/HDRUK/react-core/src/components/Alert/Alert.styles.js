import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobalStyles, getComponentVariantStyles, getSize, } from "../../theme";
export var root = function (_a) {
    var variant = _a.variant;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-width: 2px;\n      border-style: solid;\n      padding: ", ";\n      display: flex;\n\n      ", "\n      ", "\n    "], ["\n      border-width: 2px;\n      border-style: solid;\n      padding: ", ";\n      display: flex;\n\n      ", "\n      ", "\n    "])), getSize(3, theme), getComponentGlobalStyles("Alert", theme), getComponentVariantStyles("Alert", variant, theme));
    };
};
export var icon = function (theme) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 0;\n  margin-right: ", ";\n  position: relative;\n  top: 1px;\n"], ["\n  margin-top: 0;\n  margin-right: ", ";\n  position: relative;\n  top: 1px;\n"])), getSize(2, theme)); };
export var dismiss = function () { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  top: 3px;\n  cursor: pointer;\n"], ["\n  position: relative;\n  top: 3px;\n  cursor: pointer;\n"]))); };
export var content = function () { return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n\n  > *:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n\n  > *:last-child {\n    margin-bottom: 0;\n  }\n"]))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Alert.styles.js.map