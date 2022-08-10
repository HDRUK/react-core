/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
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
  px,
  py,
  mx,
  my,
  width,
  minWidth,
  maxWidth,
  height,
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
  overflow,
  gap,
  backgroundColor,
  flexShrink,
  flexBasis,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridColumn,
  direction,
  textAlign,
  flexDirection,
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
    px,
    py,
    mx,
    my,
    width,
    minWidth,
    maxWidth,
    height,
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
    overflow,
    gap,
    backgroundColor,
    flexShrink,
    flexBasis,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridColumn,
    direction,
    textAlign,
    flexDirection,
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
