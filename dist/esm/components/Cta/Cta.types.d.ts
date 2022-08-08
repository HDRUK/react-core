import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { CommonSizes, ComponentMarginProps, ThemeFontSizes } from "../../types";
export interface CtaProps extends Omit<ComponentProps<"button">, "color" | "fill">, ComponentMarginProps {
    size: CommonSizes;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    color: keyof Theme["colors"];
    fill: keyof Theme["colors"];
}
export declare type CtaStyleProps = Pick<CtaProps, "color" | "fill"> & {
    fontSize: keyof ThemeFontSizes;
};
