import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobalStyles } from "../../theme";
export var root = function () { return function (theme) {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    word-break: break-word;\n    position: relative;\n\n    ", "\n  "], ["\n    word-break: break-word;\n    position: relative;\n\n    ", "\n  "])), getComponentGlobalStyles("Card", theme));
}; };
export var cardHeader = function (theme) {
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-bottom: 1px solid;\n\n    ", "\n  "], ["\n    border-bottom: 1px solid;\n\n    ", "\n  "])), getComponentGlobalStyles("CardHeader", theme));
};
export var cardBody = function (theme) {
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), getComponentGlobalStyles("CardBody", theme));
};
export var cardFooter = function (theme) {
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: flex-end;\n    border-top: 1px solid;\n\n    ", "\n  "], ["\n    display: flex;\n    justify-content: flex-end;\n    border-top: 1px solid;\n\n    ", "\n  "])), getComponentGlobalStyles("CardFooter", theme));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Card.styles.js.map