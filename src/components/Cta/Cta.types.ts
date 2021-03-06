import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { CommonSizes, ComponentMarginProps, ThemeFontSizes } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

export interface CtaProps
  extends Omit<ComponentProps<"button">, "color" | "fill">,
    ComponentMarginProps {
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  color: keyof Theme["colors"];
  fill: keyof Theme["colors"];
}

export type CtaStyleProps = Pick<CtaProps, "color" | "fill"> & {
  fontSize: keyof ThemeFontSizes;
  iconSize: IconSizes;
};
