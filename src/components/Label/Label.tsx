/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Label.styles";
import { LabelProps } from "./Label.types";

const Label = ({
  className,
  children,
  disabled,
  ml,
  mr,
  mb,
  mt,
  m,
  mx,
  my,
  width,
  minWidth,
  maxWidth,
  ...outerProps
}: LabelProps) => {
  const commonStyles = useCommonStyles({
    mt,
    mb,
    ml,
    mr,
    m,
    mx,
    my,
    width,
    minWidth,
    maxWidth,
  });

  return (
    <label
      {...outerProps}
      className={cx("ui-Label", className)}
      css={[commonStyles, styles.root({ disabled })]}
    >
      {children}
    </label>
  );
};

export default Label;
