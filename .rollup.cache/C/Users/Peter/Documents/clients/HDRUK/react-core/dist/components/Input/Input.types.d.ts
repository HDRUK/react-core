import { ComponentProps, ReactNode } from "react";
import { ComponentStyleProps } from "../../types";
export declare type InputVariants = "primary" | "secondary";
export interface InputProps extends Omit<ComponentProps<"input">, "width">, ComponentStyleProps {
    variant: InputVariants;
    description?: ReactNode;
    error?: ReactNode;
    label?: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}
export interface InputStyleProps extends Pick<InputProps, "variant" | "error"> {
    offsetLeft?: number;
    offsetRight?: number;
}
