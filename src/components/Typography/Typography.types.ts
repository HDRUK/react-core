import { Theme } from "@emotion/react";
import { ComponentStyleProps } from "../../types";

export type TypographyTags =
  | "div"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface TypographyProps
  extends Omit<React.HTMLProps<HTMLElement>, "color" | "width">,
    ComponentStyleProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "small"
    | "tiny";
  color?: keyof Theme["colors"];
  as?: keyof JSX.IntrinsicElements;
}

export interface TypographyStyleProps
  extends Pick<TypographyProps, "color" | "variant"> {
  tag: keyof JSX.IntrinsicElements;
}