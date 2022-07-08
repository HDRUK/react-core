/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";

import * as styles from "./Card.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
import { CardProps } from "./Card.types";

const Card = ({
  children,
  mt,
  mb,
  ml,
  mr,
  m,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  className,
  ...outerProps
}: CardProps) => {
  const commonStyles = useCommonStyles({
    mt,
    mb,
    ml,
    mr,
    m,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  });

  return (
    <div
      role="article"
      {...outerProps}
      className={cx(className, "ui-Card")}
      css={[commonStyles, styles.root()]}
    >
      {children}
    </div>
  );
};

export default Card;
