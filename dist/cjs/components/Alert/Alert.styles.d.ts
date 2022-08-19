import { Theme } from "@emotion/react";
import { AlertStyleProps } from "./Alert.types";
export declare const root: ({ variant }: AlertStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const icon: (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const dismiss: () => import("@emotion/utils").SerializedStyles;
export declare const content: () => import("@emotion/utils").SerializedStyles;
