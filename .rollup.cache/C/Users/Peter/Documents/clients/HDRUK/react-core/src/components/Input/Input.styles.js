import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getColorStyle, getComponentVariantStyles, getSize, getSpacingStyle, } from "../../theme";
export var root = function (_a) {
    var _b = _a.offsetLeft, offsetLeft = _b === void 0 ? 0 : _b, _c = _a.offsetRight, offsetRight = _c === void 0 ? 0 : _c, variant = _a.variant, disabled = _a.disabled, error = _a.error;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n\n      label {\n        display: block;\n        ", "\n        ", ";\n      }\n\n      input {\n        border-style: solid;\n        border-width: 2px;\n        border-radius: 4px;\n        height: 40px;\n\n        ", "\n\n        ", "\n\n        &:focus,\n        &.focus,\n        &:focus-within,\n        &:focus-visible {\n          outline: none;\n\n          ", "\n        }\n\n        &: {\n          disabled\n        }\n\n        width: 100%;\n        padding-left: calc(", "px + ", ");\n        padding-right: calc(", "px + ", ");\n        box-sizing: border-box;\n      }\n\n      .ui-Icon,\n      svg {\n        height: 20px;\n        width: 20px;\n      }\n    "], ["\n      position: relative;\n\n      label {\n        display: block;\n        ", "\n        ", ";\n      }\n\n      input {\n        border-style: solid;\n        border-width: 2px;\n        border-radius: 4px;\n        height: 40px;\n\n        ", "\n\n        ", "\n\n        &:focus,\n        &.focus,\n        &:focus-within,\n        &:focus-visible {\n          outline: none;\n\n          ", "\n        }\n\n        &: {\n          disabled\n        }\n\n        width: 100%;\n        padding-left: calc(", "px + ", ");\n        padding-right: calc(", "px + ", ");\n        box-sizing: border-box;\n      }\n\n      .ui-Icon,\n      svg {\n        height: 20px;\n        width: 20px;\n      }\n    "])), disabled && getColorStyle("color", "grey500", theme), getSpacingStyle("margin-bottom", 2, theme), getComponentVariantStyles("Input", variant, theme), error && getColorStyle("border-color", "red700", theme), error && getColorStyle("border-color", "red700", theme), offsetLeft, getSize(offsetLeft ? 5 : 3, theme), offsetRight, getSize(offsetRight ? 5 : 3, theme));
    };
};
export var icon = function () { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n"]))); };
export var iconLeft = function () { return function (theme) {
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    left: ", ";\n  "], ["\n    left: ", ";\n  "])), getSize(3, theme));
}; };
export var iconRight = function () { return function (theme) {
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    right: ", ";\n  "], ["\n    right: ", ";\n  "])), getSize(3, theme));
}; };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Input.styles.js.map