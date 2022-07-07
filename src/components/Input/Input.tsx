/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";

import * as styles from "./Input.styles";
import { InputProps } from "./Input.types";
import { useEffect, useRef, useState } from "react";
import useDOMAttributes from "../../hooks/useDOMAttributes/useDOMAttributes";

const Input: React.FC<InputProps> = ({
  className,
  iconLeft,
  iconRight,
  ...outerProps
}) => {
  const iconLeftRef = useRef(null);
  const iconRightRef = useRef(null);

  const {
    update: updateLeft,
    attributes: { offsetWidth: offsetLeft },
  } = useDOMAttributes(["offsetWidth"]);
  const {
    update: updateRight,
    attributes: { offsetWidth: offsetRight },
  } = useDOMAttributes(["offsetWidth"]);

  useEffect(() => {
    updateLeft(iconLeftRef.current);
  }, [updateLeft, iconLeftRef]);

  useEffect(() => {
    updateRight(iconRightRef.current);
  }, [updateRight, iconRightRef]);

  return (
    <div
      className={cx(className, "ui-Input")}
      css={styles.root({ offsetLeft, offsetRight })}
    >
      {iconLeft && (
        <span css={[styles.icon, styles.iconLeft]} ref={iconLeftRef}>
          {iconLeft}
        </span>
      )}
      <input {...outerProps} />
      {iconRight && (
        <span css={[styles.icon, styles.iconRight]} ref={iconRightRef}>
          {iconRight}
        </span>
      )}
    </div>
  );
};

export default Input;
