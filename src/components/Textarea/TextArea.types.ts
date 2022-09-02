import { ReactNode, MutableRefObject } from "react";
import { TextareaAutosizeProps } from "react-textarea-autosize";
import { ComponentHeightProps, ComponentStyleProps } from "../../types";
import { InputVariants } from "../Input/Input.types";

export interface TextAreaProps
    extends ComponentStyleProps,
        ComponentHeightProps,
        Omit<TextareaAutosizeProps, "width" | "height" | "value"> {
    variant: InputVariants;
    autosize?: boolean;
    maxCharCount?: number;
    charCountDescription?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    label?: ReactNode;
    inputRef?: MutableRefObject<HTMLTextAreaElement | null>;
    value?: string;
}

export type TextAreaStyleProps = Pick<
    TextAreaProps,
    "variant" | "minHeight" | "maxHeight" | "error"
>;
