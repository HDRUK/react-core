/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import * as styles from "./Cta.styles";
import { CtaProps } from "./Cta.types";
import useCommonStyles from "../../hooks/useCommonStyles";
import { CommonSizes, MarginStyleProps, ThemeFontSizes } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

const iconSizes: Record<CommonSizes, IconSizes> = {
  small: "sm",
  medium: "lg",
  large: "2xl",
};

const fontSizes: Record<CommonSizes, keyof ThemeFontSizes> = {
  small: "xs",
  medium: "md",
  large: "2xl",
};

const Cta: React.FC<CtaProps & MarginStyleProps> = ({
  color,
  children,
  mt,
  mb,
  ml,
  mr,
  m,
  iconLeft,
  iconRight,
  className,
  fill,
  size,
  ...outerProps
}) => {
  const commonStyles = useCommonStyles({
    mt,
    mr,
    ml,
    mb,
    m,
  });

  return (
    <button
      {...outerProps}
      css={[
        commonStyles,
        styles.root({
          color,
          fill,
          fontSize: fontSizes[size],
          iconSize: iconSizes[size],
        }),
      ]}
      className={cx("ui-Cta", className)}
    >
      {iconLeft} {children} {iconRight}
    </button>
  );
};

Cta.defaultProps = {
  iconLeft: undefined,
  iconRight: undefined,
  size: "medium",
  fill: "inherit",
  color: "inherit",
  onClick: () => {},
};

export default Cta;
