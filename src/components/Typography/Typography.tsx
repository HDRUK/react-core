/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import React from "react";
import useCommonStyles from "../../hooks/useCommonStyles";
import { TypographyProps } from "./Typography.types";
import * as styles from "./Typography.styles";

const Typography = ({
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
}: TypographyProps) => {
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

  let Component: keyof JSX.IntrinsicElements | undefined = as;

  if (!as) {
    if (variant === "body") {
      Component = "p";
    } else if (variant === "caption" || variant === "tiny") {
      Component = "span";
    } else {
      Component = variant;
    }
  }

  return Component ? (
    <Component
      className={cx(className, "ui-Typography")}
      css={[commonStyles, styles.root({ variant, color, tag: Component })]}
    >
      {children}
    </Component>
  ) : null;
};

Typography.defaultProps = {
  variant: "body",
  m: 0,
};

export default Typography;
