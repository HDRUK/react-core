/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import { CardFooterProps } from "./Card.types";

const CardFooter = ({
  className,
  children,
  ...outerProps
}: CardFooterProps) => {
  return (
    <div
      {...outerProps}
      className={cx(className, "ui-CardFooter")}
      css={styles.cardFooter}
    >
      {children}
    </div>
  );
};

export default CardFooter;
