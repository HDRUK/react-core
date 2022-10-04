/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { useCallback, useEffect, useState } from "react";

import { Card } from "../Card";
import Dimmer from "../Dimmer";
import Cta from "../Cta";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import Box from "../Box";
import { ModalProps } from "./Modal.types";

const Modal = ({
    children,
    className,
    dismissable,
    open,
    contentAlignment,
    onClose,
    ...outerProps
}: ModalProps) => {
    const [show, setShow] = useState(true);

    const handleClose = useCallback(() => {
        setShow(false);

        if (onClose) onClose();
    }, [onClose]);

    useEffect(() => {
        console.log("Open");
        setShow(open);
    }, [open]);

    return show ? (
        <Dimmer onClick={handleClose} contentAlignment={contentAlignment}>
            <Card className={cx("ui-Modal", className)} {...outerProps}>
                {dismissable && (
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        position="absolute"
                        top="16px"
                        right="16px">
                        <Cta
                            iconRight={<CloseIcon />}
                            color="purple700"
                            fill="purple700"
                            onClick={handleClose}
                        />
                    </Box>
                )}
                {children}
            </Card>
        </Dimmer>
    ) : null;
};

Modal.defaultProps = {
    dismissable: true,
    width: "600px",
    contentAlignment: "top",
};

export default Modal;
