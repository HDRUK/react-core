/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Collapsable.styles";
import { CollapsableProps } from "./Collapsable.types";
import useCommonStyles from "../../hooks/useCommonStyles";
import Box from "../Box";

const Collapsable = ({
  children,
  mt,
  mb,
  ml,
  mr,
  m,
  mx,
  my,
  className,
  toggle,
  initialHeight,
  open,
  ...outerProps
}: CollapsableProps) => {
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
    <Box
      {...outerProps}
      display="flex"
      className={cx(className, "ui-Collapsable")}
      css={[commonStyles, styles.root()]}
    >
      <Box
        css={[
          styles.content({ initialHeight }),
          open && styles.contentOpening({ height: "1000px" }),
        ]}
        flexGrow="1"
      >
        {children}
      </Box>
      <Box flexShrink="0" pl={4}>
        {toggle}
      </Box>
    </Box>
  );
};

Collapsable.defaultProps = {
  initialHeight: 0,
};

export default Collapsable;
