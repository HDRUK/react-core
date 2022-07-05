/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import { CardBodyProps } from "./Card.types.js";

const CardBody: React.FC<CardBodyProps> = ({
  className,
  children,
  ...outerProps
}) => {
  return (
    <div
      {...outerProps}
      className={cx(className, "ui-CardBody")}
      css={styles.cardBody}
    >
      {children}
    </div>
  );
};

export default CardBody;
