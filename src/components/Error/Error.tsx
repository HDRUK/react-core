/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Error.styles";
import { ErrorProps } from "./Error.types";

const Error: React.FC<ErrorProps> = ({
  className,
  children,
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
    <div
      {...outerProps}
      className={cx("ui-Error", className)}
      css={[commonStyles, styles.root]}
    >
      {children}
    </div>
  );
};

export default Error;
