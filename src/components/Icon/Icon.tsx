/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import { MarginStyleProps } from "../../types";
import * as styles from "./Icon.styles";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps & MarginStyleProps> = ({
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
}) => {
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
  size: "default",
  color: "inherit",
  fill: "inherit",
  stroke: "none",
};

export default Icon;
