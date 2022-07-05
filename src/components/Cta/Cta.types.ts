import { ComponentProps, ReactElement } from "react";
import { CommonSizes, ThemeFontSizes } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

export interface CtaProps extends ComponentProps<"button"> {
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  color?: string;
  fill?: string;
}

export interface CtaStyleProps {
  color?: string;
  fill?: string;
  fontSize: keyof ThemeFontSizes;
  iconSize: IconSizes;
}
