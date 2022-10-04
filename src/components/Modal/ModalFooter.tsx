/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";
import CardFooter from "../Card/CardFooter";
import { CardFooterProps } from "../Card/Card.types";

const ModalFooter = ({
    className,
    children,
    ...outerProps
}: CardFooterProps) => {
    return (
        <CardFooter className={cx("ui-ModalFooter", className)} {...outerProps}>
            {children}
        </CardFooter>
    );
};

export default ModalFooter;
