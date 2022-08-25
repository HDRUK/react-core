import { Theme } from "@emotion/react";
import { InputStyleProps } from "./Input.types";
export declare const mixins: {};
export declare const root: ({ offsetLeft, offsetRight }: InputStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const input: ({ variant, error }: InputStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const icon: () => import("@emotion/utils").SerializedStyles;
export declare const iconLeft: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const iconRight: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
