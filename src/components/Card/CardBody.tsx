/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import { CardBodyProps } from "./Card.types.js";

const CardBody = ({ className, children, ...outerProps }: CardBodyProps) => {
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
