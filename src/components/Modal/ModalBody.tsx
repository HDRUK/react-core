/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import CardBody from "../Card/CardBody";
import { CardBodyProps } from "../Card/Card.types";

const ModalBody = ({ className, children, ...outerProps }: CardBodyProps) => {
  return (
    <CardBody {...outerProps} className={cx(className, "ui-ModalBody")}>
      {children}
    </CardBody>
  );
};

export default ModalBody;
