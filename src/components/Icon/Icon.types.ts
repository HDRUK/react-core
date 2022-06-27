import { ReactElement } from "react";

export interface IconProps extends React.ComponentProps<"span"> {
  svg: ReactElement;
  size:
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
  color: string;
  fill: string;
  stroke: string;
}

export type IconStyleProps = Pick<
  IconProps,
  "size" | "color" | "fill" | "stroke"
>;
