import { CommonStyleProps } from "../../types";

export interface LayoutBoxProps extends CommonStyleProps {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  css?: any;
}
