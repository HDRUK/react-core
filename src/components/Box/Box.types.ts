import { CommonStyleProps } from "../../types";

export interface BoxProps extends CommonStyleProps {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  css?: any;
}
