import { ComponentProps, ReactElement } from "react";
import { CommonVariants, ComponentStyleProps, ThemeFontSizes } from "../../types";
export interface IconButtonProps extends ComponentProps<"button">, ComponentStyleProps {
    variant: CommonVariants;
    size: keyof ThemeFontSizes;
    svg: ReactElement;
}
export declare type IconButtonStyleProps = Pick<IconButtonProps, "variant" | "size">;
