/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";
import CardHeader from "../Card/CardHeader";
import { CardHeaderProps } from "../Card/Card.types";

const ModalHeader = ({
  className,
  children,
  ...outerProps
}: CardHeaderProps) => {
  return (
    <CardHeader {...outerProps} className={cx(className, "ui-ModalHeader")}>
      {children}
    </CardHeader>
  );
};

export default ModalHeader;
