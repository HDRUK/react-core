import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Input.styles";
import { useEffect, useRef } from "react";
import useDOMAttributes from "../../hooks/useDOMAttributes/useDOMAttributes";
import useCommonStyles from "../../hooks/useCommonStyles";
import Label from "../Label";
import Message from "../Message";
var Input = function (_a) {
    var className = _a.className, iconLeft = _a.iconLeft, iconRight = _a.iconRight, variant = _a.variant, label = _a.label, disabled = _a.disabled, description = _a.description, error = _a.error, id = _a.id, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, outerProps = __rest(_a, ["className", "iconLeft", "iconRight", "variant", "label", "disabled", "description", "error", "id", "mt", "mb", "ml", "mr", "m", "mx", "my"]);
    var iconLeftRef = useRef(null);
    var iconRightRef = useRef(null);
    var commonStyles = useCommonStyles({ mt: mt, mb: mb, ml: ml, mr: mr, m: m, mx: mx, my: my });
    var _b = useDOMAttributes(["offsetWidth"]), updateLeft = _b.update, offsetLeft = _b.attributes.offsetWidth;
    var _c = useDOMAttributes(["offsetWidth"]), updateRight = _c.update, offsetRight = _c.attributes.offsetWidth;
    useEffect(function () {
        updateLeft(iconLeftRef.current);
    }, [updateLeft, iconLeftRef]);
    useEffect(function () {
        updateRight(iconRightRef.current);
    }, [updateRight, iconRightRef]);
    return (_jsxs("div", __assign({ className: cx(className, "ui-Input"), css: [
            commonStyles,
            styles.root({ offsetLeft: offsetLeft, offsetRight: offsetRight, variant: variant, disabled: disabled, error: error }),
        ] }, { children: [label && _jsx(Label, __assign({ htmlFor: id }, { children: label })), description && _jsx(Message, __assign({ mb: 2 }, { children: description })), iconLeft && (_jsx("span", __assign({ css: [styles.icon, styles.iconLeft], ref: iconLeftRef }, { children: iconLeft }))), _jsx("input", __assign({}, outerProps, { id: id, disabled: disabled })), iconRight && (_jsx("span", __assign({ css: [styles.icon, styles.iconRight], ref: iconRightRef }, { children: iconRight }))), error && (_jsx(Message, __assign({ variant: "error", mt: 2 }, { children: error })))] })));
};
Input.defaultProps = {
    variant: "primary",
};
export default Input;
//# sourceMappingURL=Input.js.map