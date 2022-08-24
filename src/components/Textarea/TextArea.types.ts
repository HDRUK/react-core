import { ReactNode, RefObject } from "react";
import { TextareaAutosizeProps } from "react-textarea-autosize";
import { ComponentHeightProps, ComponentStyleProps } from "../../types";
import { InputVariants } from "../Input/Input.types";

export interface TextAreaProps
    extends ComponentStyleProps,
        ComponentHeightProps,
        Omit<TextareaAutosizeProps, "width" | "height" | "value"> {
    autosize: boolean;
    maxCharCount: number;
    charCountDescription: ReactNode;
    variant: InputVariants;
    description?: ReactNode;
    error?: ReactNode;
    label?: ReactNode;
    inputRef?: RefObject<HTMLTextAreaElement>;
    value?: string;
}

export type TextAreaStyleProps = Pick<
    TextAreaProps,
    "variant" | "minHeight" | "maxHeight" | "error"
>;
