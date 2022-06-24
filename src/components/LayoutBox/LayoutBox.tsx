import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import React from "react";
import useCommonStyles from "../../hooks/useCommonStyles";
import { LayoutBoxProps } from "./LayoutBox.types";

const LayoutBox: React.FC<LayoutBoxProps> = ({
  as = "div",
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
  css,
  ...outerProps
}) => {
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
  });

  return React.createElement(
    as,
    {
      ...outerProps,
      className: cx("ui-LayoutBox", className, commonStyles),
      css,
    },
    children
  );
};

export default LayoutBox;
