import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { CommonSizes, MarginStyleProps, ThemeFontSizes } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

export interface CtaProps
  extends Omit<ComponentProps<"button">, "color" | "fill">,
    MarginStyleProps {
  size: CommonSizes;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  color?: Theme["colors"];
  fill?: Theme["colors"];
}

export type CtaStyleProps = Pick<CtaProps, "color" | "fill"> & {
  fontSize: keyof ThemeFontSizes;
  iconSize: IconSizes;
};
