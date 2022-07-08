import { CommonStyleProps } from "../../types";

export interface BoxProps extends CommonStyleProps {
  as?: JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  css?: any;
}
