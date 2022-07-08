/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Icon.styles";
import { IconProps } from "./Icon.types";

const Icon = ({
  svg,
  size,
  color,
  fill,
  stroke,
  className,
  ml,
  mr,
  mb,
  mt,
  m,
  ...outerProps
}: IconProps) => {
  const commonStyles = useCommonStyles({ mt, mb, ml, mr, m });

  return (
    <span
      {...outerProps}
      className={cx("ui-Icon", className)}
      css={[commonStyles, styles.root({ size, color, fill, stroke })]}
    >
      {svg}
    </span>
  );
};

Icon.defaultProps = {
  size: "md",
};

export default Icon;
