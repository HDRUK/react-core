/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Message.styles";
import { MessageProps } from "./Message.types";

const Message = ({
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
  variant,
  ...outerProps
}: MessageProps) => {
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
      className={cx("ui-Message", className)}
      css={[commonStyles, styles.root({ variant })]}
    >
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "description",
};

export default Message;
