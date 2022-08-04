import { Theme } from "@emotion/react";
import { InputStyleProps } from "./Input.types";
export declare const root: ({ offsetLeft, offsetRight, variant, disabled, error, }: InputStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const icon: (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const iconLeft: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const iconRight: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
