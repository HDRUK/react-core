import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { ComponentMarginProps } from "../../types";
export declare type IconSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "contained";
export interface IconProps extends Omit<ComponentProps<"span">, "color" | "fill" | "stroke">, ComponentMarginProps {
    svg: ReactElement;
    size: IconSizes;
    color?: keyof Theme["colors"];
    fill?: keyof Theme["colors"];
    stroke?: keyof Theme["colors"];
}
export declare type IconStyleProps = Pick<IconProps, "size" | "color" | "fill" | "stroke">;
