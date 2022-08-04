import { Theme } from "@emotion/react";
import { ButtonStyleProps } from "./Button.types";
export declare const mixins: {
    button: () => string;
};
export declare const root: ({ variant, size }: ButtonStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
