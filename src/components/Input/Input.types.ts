import { ComponentProps, ReactNode, MutableRefObject } from "react";
import { ComponentStyleProps } from "../../types";

export type InputVariants = "primary" | "secondary";
export interface InputProps
    extends Omit<ComponentProps<"input">, "width">,
        ComponentStyleProps {
    variant: InputVariants;
    description?: ReactNode;
    error?: ReactNode;
    label?: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    onClear?(): void;
}

export interface InputStyleProps extends Pick<InputProps, "variant" | "error"> {
    offsetLeft?: number;
    offsetRight?: number;
}
