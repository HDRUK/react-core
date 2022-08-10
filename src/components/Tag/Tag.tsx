/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Tag.styles";
import { TagProps } from "./Tag.types";

const Tag = ({
  children,
  mt,
  mb,
  ml,
  mr,
  m,
  mx,
  my,
  variant,
  size,
  className,
  ...outerProps
}: TagProps) => {
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
    <span
      {...outerProps}
      className={cx(className, "ui-Tag")}
      css={[
        commonStyles,
        styles.root({
          variant,
          size,
        }),
      ]}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  variant: "info",
  size: "medium",
};

export default Tag;
