/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import * as styles from "./Card.styles.js";
import { CardFooterProps } from "./Card.types";

const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
  ...outerProps
}) => {
  return (
    <div
      {...outerProps}
      className={cx(className, "ui-CardFooter")}
      css={styles.cardFooter()}
    >
      {children}
    </div>
  );
};

export default CardFooter;
