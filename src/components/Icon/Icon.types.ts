import { ComponentProps, ReactElement } from "react";

export type IconSizes =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "default"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "contained";
export interface IconProps extends ComponentProps<"span"> {
  svg: ReactElement;
  size: IconSizes;
  color?: string;
  fill?: string;
  stroke?: string;
}

export type IconStyleProps = Pick<
  IconProps,
  "size" | "color" | "fill" | "stroke"
>;
