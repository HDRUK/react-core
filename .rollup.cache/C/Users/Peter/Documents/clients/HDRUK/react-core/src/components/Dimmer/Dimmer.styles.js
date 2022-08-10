import { __makeTemplateObject } from "tslib";
import { css } from "@emotion/react";
import { getComponentGlobalStyles } from "../../theme";
export var root = function (_a) {
    var contentAlignment = _a.contentAlignment;
    return function (theme) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      overflow: visible;\n      opacity: 1;\n      width: 100%;\n      height: 100%;\n      z-index: 9999;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      justify-content: center;\n\n      ", "\n\n      ", "\n\n            ", "\n    "], ["\n      overflow: visible;\n      opacity: 1;\n      width: 100%;\n      height: 100%;\n      z-index: 9999;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      justify-content: center;\n\n      ", "\n\n      ", "\n\n            ", "\n    "])), contentAlignment === "center" &&
            "\n                align-items: center;\n            ", contentAlignment === "top" &&
            "\n      align-items: flex-start;\n                padding-top: 137px;\n            ", getComponentGlobalStyles("Dimmer", theme));
    };
};
var templateObject_1;
//# sourceMappingURL=Dimmer.styles.js.map