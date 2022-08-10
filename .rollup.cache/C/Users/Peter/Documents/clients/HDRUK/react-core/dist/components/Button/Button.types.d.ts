import { ComponentProps, ReactElement } from "react";
import { CommonVariants, CommonSizes, ComponentStyleProps } from "../../types";
export interface ButtonProps extends ComponentProps<"button">, ComponentStyleProps {
    variant: CommonVariants;
    size: CommonSizes;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
}
export declare type ButtonStyleProps = Pick<ButtonProps, "variant" | "size">;
