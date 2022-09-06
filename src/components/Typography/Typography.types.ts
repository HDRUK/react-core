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

export type VariantTags =
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

export type WeightTags = "light" | "normal" | "bold";

export interface TypographyProps
    extends Omit<React.HTMLProps<HTMLElement>, "color" | "width">,
        ComponentStyleProps {
    variant?: VariantTags;
    weight?: WeightTags;
    color?: keyof Theme["colors"];
    as?: keyof JSX.IntrinsicElements;
}

export interface TypographyStyleProps extends Pick<TypographyProps, "color"> {
    variant: VariantTags;
    weight: WeightTags;
    tag: keyof JSX.IntrinsicElements;
}
