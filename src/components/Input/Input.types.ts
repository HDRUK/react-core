import { ComponentProps, ReactElement } from "react";

export interface InputProps extends ComponentProps<"input"> {
  iconLeft?: ReactElement;
  iconRight: ReactElement;
}

export interface InputStyleProps {
  offsetLeft?: number;
  offsetRight?: number;
}
