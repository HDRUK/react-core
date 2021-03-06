/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";

import * as styles from "./Input.styles";
import { InputProps } from "./Input.types";
import { useEffect, useRef } from "react";
import useDOMAttributes from "../../hooks/useDOMAttributes/useDOMAttributes";
import useCommonStyles from "../../hooks/useCommonStyles";
import Label from "../Label";
import Message from "../Message";

const Input = ({
  className,
  iconLeft,
  iconRight,
  variant,
  label,
  disabled,
  description,
  error,
  id,
  mt,
  mb,
  ml,
  mr,
  m,
  ...outerProps
}: InputProps) => {
  const iconLeftRef = useRef(null);
  const iconRightRef = useRef(null);

  const commonStyles = useCommonStyles({ mt, mb, ml, mr, m });

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
      css={[
        commonStyles,
        styles.root({ offsetLeft, offsetRight, variant, disabled, error }),
      ]}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      {description && <Message mb={2}>{description}</Message>}
      {iconLeft && (
        <span css={[styles.icon, styles.iconLeft]} ref={iconLeftRef}>
          {iconLeft}
        </span>
      )}
      <input {...outerProps} id={id} disabled={disabled} />
      {iconRight && (
        <span css={[styles.icon, styles.iconRight]} ref={iconRightRef}>
          {iconRight}
        </span>
      )}
      {error && (
        <Message variant="error" mt={2}>
          {error}
        </Message>
      )}
    </div>
  );
};

Input.defaultProps = {
  variant: "primary",
};

export default Input;
