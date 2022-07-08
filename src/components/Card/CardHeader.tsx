/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import { CardHeaderProps } from "./Card.types";

const CardHeader = ({
  className,
  children,
  ...outerProps
}: CardHeaderProps) => {
  return (
    <div
      {...outerProps}
      className={cx(className, "ui-CardHeader")}
      css={styles.cardHeader}
    >
      {children}
    </div>
  );
};

export default CardHeader;
