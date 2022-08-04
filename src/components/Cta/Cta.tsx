/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import * as styles from "./Cta.styles";
import { CtaProps } from "./Cta.types";
import useCommonStyles from "../../hooks/useCommonStyles";
import { CommonSizes, ThemeFontSizes } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

const iconSizes: Record<CommonSizes, IconSizes> = {
  small: "sm",
  medium: "xl",
  large: "3xl",
};

const fontSizes: Record<CommonSizes, keyof ThemeFontSizes> = {
  small: "xs",
  medium: "md",
  large: "xl",
};

const Cta = ({
  color,
  children,
  mt,
  mb,
  ml,
  mr,
  m,
  mx,
  my,
  iconLeft,
  iconRight,
  className,
  fill,
  size,
  ...outerProps
}: CtaProps) => {
  const commonStyles = useCommonStyles({
    mt,
    mr,
    ml,
    mb,
    m,
    mx,
    my,
  });

  return (
    <button
      {...outerProps}
      className={cx(className, "ui-Cta")}
      css={[
        commonStyles,
        styles.root({
          color,
          fill,
          fontSize: fontSizes[size],
          iconSize: iconSizes[size],
        }),
      ]}
    >
      {iconLeft} {children} {iconRight}
    </button>
  );
};

Cta.defaultProps = {
  size: "medium",
};

export default Cta;
