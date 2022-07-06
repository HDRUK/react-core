import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { MarginStyleProps } from "../../types";

export type IconSizes =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "contained";
export interface IconProps
  extends Omit<ComponentProps<"span">, "color" | "fill" | "stroke">,
    MarginStyleProps {
  svg: ReactElement;
  size: IconSizes;
  color?: Theme["colors"];
  fill?: Theme["colors"];
  stroke?: Theme["colors"];
}

export type IconStyleProps = Pick<
  IconProps,
  "size" | "color" | "fill" | "stroke"
>;
