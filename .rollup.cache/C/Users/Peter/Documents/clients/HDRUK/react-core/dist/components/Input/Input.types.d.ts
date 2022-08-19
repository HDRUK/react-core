import { ComponentProps, ReactElement } from "react";
import { ComponentStyleProps } from "../../types";
export declare type InputVariants = "primary" | "secondary";
export interface InputProps extends Omit<ComponentProps<"input">, "width">, ComponentStyleProps {
    variant: InputVariants;
    description?: ReactElement;
    error?: ReactElement;
    label?: ReactElement;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
}
export interface InputStyleProps extends Pick<InputProps, "variant" | "disabled" | "error"> {
    offsetLeft?: number;
    offsetRight?: number;
}
