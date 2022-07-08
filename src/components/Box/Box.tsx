/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import React from "react";
import useCommonStyles from "../../hooks/useCommonStyles";
import { BoxProps } from "./Box.types";

const Box = ({
  as,
  children,
  className,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  width,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  alignItems,
  justifyContent,
  flexGrow,
  position,
  top,
  left,
  right,
  bottom,
  ...outerProps
}: BoxProps) => {
  const commonStyles = useCommonStyles({
    m,
    mt,
    mb,
    ml,
    mr,
    p,
    pt,
    pr,
    pb,
    pl,
    width,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display,
    alignItems,
    justifyContent,
    flexGrow,
    position,
    top,
    left,
    right,
    bottom,
  });

  const Component: keyof JSX.IntrinsicElements = (as ||
    "div") as keyof JSX.IntrinsicElements;

  return (
    <Component
      {...outerProps}
      className={cx(className, "ui-Box")}
      css={commonStyles}
    >
      {children}
    </Component>
  );
};

export default Box;
