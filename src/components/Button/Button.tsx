/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import { cx } from "@emotion/css";
import LayoutBox from "../LayoutBox/LayoutBox";
import { LayoutBoxProps } from "../LayoutBox/LayoutBox.types";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.styles";

const Button: React.FC<ButtonProps & LayoutBoxProps> = ({
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
}) => {
  return (
    <LayoutBox
      {...outerProps}
      as="button"
      mt={mt}
      mr={mr}
      ml={ml}
      mb={mb}
      m={m}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      css={styles.root({ size, variant })}
      className={cx("ui-Button", className)}
    >
      {iconLeft} {children} {iconRight}
    </LayoutBox>
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  type: "input",
  disabled: false,
};

export default Button;
