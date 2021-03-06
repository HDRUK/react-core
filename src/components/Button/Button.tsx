/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { cx } from "@emotion/css";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.styles";
import useCommonStyles from "../../hooks/useCommonStyles";

const Button = ({
  variant,
  children,
  size,
  m,
  mt,
  mb,
  ml,
  mr,
  width,
  minWidth,
  maxWidth,
  iconLeft,
  iconRight,
  className,
  ...outerProps
}: ButtonProps) => {
  const commonStyles = useCommonStyles({
    mt,
    mr,
    ml,
    mb,
    m,
    width,
    maxWidth,
    minWidth,
  });

  return (
    <button
      {...outerProps}
      css={[commonStyles, styles.root({ size, variant })]}
      className={cx("ui-Button", className)}
    >
      {iconLeft} {children} {iconRight}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  type: "button",
  disabled: false,
};

export default Button;
