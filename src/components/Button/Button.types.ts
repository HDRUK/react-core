import { ComponentProps, ReactElement } from "react";
import { CommonVariants, CommonSizes, ComponentStyleProps } from "../../types";

export interface ButtonProps
  extends ComponentProps<"button">,
    ComponentStyleProps {
  variant: CommonVariants | "primaryAlt" | "secondaryAlt";
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "size">;
