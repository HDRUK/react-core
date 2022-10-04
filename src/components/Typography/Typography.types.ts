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

interface Props<C extends React.ElementType> extends ComponentStyleProps {
    as?: C;
    variant?: VariantTags;
    weight?: WeightTags;
    color?: keyof Theme["colors"];
}

export type TypographyProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export interface TypographyStyleProps {
    color?: keyof Theme["colors"];
    variant: VariantTags;
    weight: WeightTags;
    tag: string;
}
