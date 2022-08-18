/** @jsxImportSource @emotion/react */
import { useState, useCallback, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { ReactComponent as DangerIcon } from "../../images/icons/danger.svg";
import { ReactComponent as InfoIcon } from "../../images/icons/info.svg";
import { ReactComponent as CheckIcon } from "../../images/icons/check.svg";
import Icon from "../Icon";

import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Alert.styles";
import { AlertProps } from "./Alert.types";

const Alert = ({
  icon,
  variant,
  onClose,
  children,
  className,
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
  dismissable,
  autoclose,
  autocloseDuration,
  ...outerProps
}: AlertProps) => {
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

  const [show, setShow] = useState(true);

  const handleClose = useCallback(() => {
    setShow(false);

    if (onClose) onClose();
  }, []);

  useEffect(() => {
    if (show && autoclose) {
      const showTimeout = setTimeout(() => {
        handleClose();
      }, autocloseDuration);

      return () => {
        clearTimeout(showTimeout);
      };
    }
  }, [show, autoclose]);

  return show ? (
    <div
      className={cx(className, "ui-Alert")}
      css={[commonStyles, styles.root({ variant })]}
      {...outerProps}
    >
      <div css={styles.icon}>
        {icon}
        {!icon && variant === "success" && (
          <Icon svg={<CheckIcon fill="inherit" />} size="xl" />
        )}
        {!icon && variant === "danger" && (
          <Icon svg={<DangerIcon fill="inherit" />} size="xl" />
        )}
        {!icon && variant === "warning" && (
          <Icon svg={<DangerIcon fill="inherit" />} size="xl" />
        )}
        {!icon && variant === "info" && (
          <Icon svg={<InfoIcon fill="inherit" />} size="xl" />
        )}
      </div>
      <div css={styles.content}>{children}</div>
      {dismissable && (
        <div css={styles.dismiss}>
          <Icon
            svg={<CloseIcon fill="inherit" />}
            onClick={handleClose}
            role="button"
            size="lg"
          />
        </div>
      )}
    </div>
  ) : null;
};

Alert.defaultProps = {
  variant: "info",
  autocloseDuration: 10000,
};

export default Alert;
