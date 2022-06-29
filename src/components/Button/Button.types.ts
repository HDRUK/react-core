import { ComponentProps, ReactElement } from "react";
import { CommonVariants, CommonSizes } from "../../types";

export interface ButtonProps extends ComponentProps<"button"> {
  variant: CommonVariants;
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "size">;
