import { ReactElement } from "react";
import { CommonVariants, CommonSizes } from "../../types";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  variant: CommonVariants;
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "size">;
