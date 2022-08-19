import { __makeTemplateObject } from "tslib";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { getCommonStyles } from "../../theme";
var useCommonStyles = function (props) {
    var theme = useTheme();
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), getCommonStyles(props, theme));
};
export default useCommonStyles;
var templateObject_1;
//# sourceMappingURL=useCommonStyles.js.map