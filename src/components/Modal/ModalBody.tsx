/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";
import CardBody from "../Card/CardBody";
import { CardBodyProps } from "../Card/Card.types";

const ModalBody = ({ className, children, ...outerProps }: CardBodyProps) => {
    return (
        <CardBody className={cx("ui-ModalBody", className)} {...outerProps}>
            {children}
        </CardBody>
    );
};

export default ModalBody;
