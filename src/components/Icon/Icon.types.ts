import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { ComponentMarginProps, Responsive, ThemeFontSizes } from "../../types";

export interface IconProps
    extends Omit<ComponentProps<"span">, "color" | "fill" | "stroke">,
        ComponentMarginProps {
    svg: ReactElement;
    size: Responsive<keyof ThemeFontSizes>;
    color?: keyof Theme["colors"];
    fill?: keyof Theme["colors"];
    stroke?: keyof Theme["colors"];
}

export type IconStyleProps = Pick<
    IconProps,
    "size" | "color" | "fill" | "stroke"
>;
