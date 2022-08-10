import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../Card";
import Dimmer from "../Dimmer";
import Cta from "../Cta";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import Box from "../Box";
var Modal = function (_a) {
    var children = _a.children, className = _a.className, dismissable = _a.dismissable, open = _a.open, contentAlignment = _a.contentAlignment, onClose = _a.onClose, outerProps = __rest(_a, ["children", "className", "dismissable", "open", "contentAlignment", "onClose"]);
    var _b = useState(true), show = _b[0], setShow = _b[1];
    var handleClose = useCallback(function () {
        setShow(false);
        if (onClose)
            onClose();
    }, [onClose]);
    useEffect(function () {
        console.log("Open");
        setShow(open);
    }, [open]);
    return show ? (_jsx(Dimmer, __assign({ onClick: handleClose, contentAlignment: contentAlignment }, { children: _jsxs(Card, __assign({}, outerProps, { className: cx(className, "ui-Modal") }, { children: [dismissable && (_jsx(Box, __assign({ display: "flex", justifyContent: "flex-end", position: "absolute", top: "16px", right: "16px" }, { children: _jsx(Cta, { iconRight: _jsx(CloseIcon, {}), color: "purple700", fill: "purple700", onClick: handleClose }) }))), children] })) }))) : null;
};
Modal.defaultProps = {
    dismissable: true,
    width: "600px",
    contentAlignment: "top",
};
export default Modal;
//# sourceMappingURL=Modal.js.map