/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import React from "react";
import useCommonStyles from "../../hooks/useCommonStyles";
import { TypographyProps } from "./Typography.types";
import * as styles from "./Typography.styles";

const Typography: React.FC<TypographyProps> = ({
  children,
  color,
  className,
  mt,
  mb,
  ml,
  mr,
  m,
  width,
  minWidth,
  maxWidth,
  variant,
  as,
}) => {
  const commonStyles = useCommonStyles({
    mt,
    mb,
    ml,
    mr,
    m,
    width,
    minWidth,
    maxWidth,
  });

  let Component: keyof JSX.IntrinsicElements = as;

  if (!as) {
    if (variant === "body") {
      Component = "p";
    } else if (variant === "caption" || variant === "tiny") {
      Component = "span";
    } else {
      Component = variant;
    }
  }

  return (
    <Component
      className={cx("ui-Typography", className)}
      css={[commonStyles, styles.root({ variant, color, tag: Component })]}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: "body",
  m: 0,
};

export default Typography;
