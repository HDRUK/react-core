import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useState, useCallback, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { ReactComponent as DangerIcon } from "../../images/icons/danger.svg";
import { ReactComponent as InfoIcon } from "../../images/icons/info.svg";
import { ReactComponent as CheckIcon } from "../../images/icons/check.svg";
import Icon from "../Icon";
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Alert.styles";
var Alert = function (_a) {
    var icon = _a.icon, variant = _a.variant, onClose = _a.onClose, children = _a.children, className = _a.className, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, dismissable = _a.dismissable, autoclose = _a.autoclose, autocloseDuration = _a.autocloseDuration, outerProps = __rest(_a, ["icon", "variant", "onClose", "children", "className", "mt", "mb", "ml", "mr", "m", "mx", "my", "width", "minWidth", "maxWidth", "dismissable", "autoclose", "autocloseDuration"]);
    var commonStyles = useCommonStyles({
        mt: mt,
        mb: mb,
        ml: ml,
        mr: mr,
        m: m,
        mx: mx,
        my: my,
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
    });
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleClose = useCallback(function () {
        setShow(false);
        if (onClose)
            onClose();
    }, []);
    useEffect(function () {
        if (show && autoclose) {
            var showTimeout_1 = setTimeout(function () {
                handleClose();
            }, autocloseDuration);
            return function () {
                clearTimeout(showTimeout_1);
            };
        }
    }, [show, autoclose]);
    return show ? (_jsxs("div", __assign({ className: cx(className, "ui-Alert"), css: [commonStyles, styles.root({ variant: variant })] }, outerProps, { children: [_jsxs("div", __assign({ css: styles.icon }, { children: [icon, !icon && variant === "success" && (_jsx(Icon, { svg: _jsx(CheckIcon, { fill: "inherit" }), size: "xl" })), !icon && variant === "danger" && (_jsx(Icon, { svg: _jsx(DangerIcon, { fill: "inherit" }), size: "xl" })), !icon && variant === "warning" && (_jsx(Icon, { svg: _jsx(DangerIcon, { fill: "inherit" }), size: "xl" })), !icon && variant === "info" && (_jsx(Icon, { svg: _jsx(InfoIcon, { fill: "inherit" }), size: "xl" }))] })), _jsx("div", __assign({ css: styles.content }, { children: children })), dismissable && (_jsx("div", __assign({ css: styles.dismiss }, { children: _jsx(Icon, { svg: _jsx(CloseIcon, { fill: "inherit" }), onClick: handleClose, role: "button", size: "lg" }) })))] }))) : null;
};
Alert.defaultProps = {
    variant: "info",
    autocloseDuration: 10000,
};
export default Alert;
//# sourceMappingURL=Alert.js.map