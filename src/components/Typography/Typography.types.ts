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
    | "tiny";
  as: keyof JSX.IntrinsicElements;
  color: Theme["colors"];
}

export interface TypographyStyleProps
  extends Pick<TypographyProps, "color" | "variant"> {
  tag: keyof JSX.IntrinsicElements;
}
