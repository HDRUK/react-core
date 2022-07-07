/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Label.styles";
import { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = ({
  className,
  children,
  disabled,
  ml,
  mr,
  mb,
  mt,
  m,
  width,
  minWidth,
  maxWidth,
  ...outerProps
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
