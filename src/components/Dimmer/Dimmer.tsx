/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import * as styles from "./Dimmer.styles";
import { DimmerProps } from "./Dimmer.types";

const Dimmer = ({
  children,
  className,
  contentAlignment,
  ...outerProps
}: DimmerProps) => {
  return (
    <div
      {...outerProps}
      className={cx(className, "ui-Dimmer")}
      css={styles.root({ contentAlignment })}
    >
      {children}
    </div>
  );
};

Dimmer.defaultProps = {
  contentAlignment: "center",
};

export default Dimmer;
