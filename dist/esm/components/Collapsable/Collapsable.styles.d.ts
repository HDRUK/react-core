import { Theme } from "@emotion/react";
export declare const root: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const content: ({ initialHeight }: AccordianStyleProps) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const contentOpening: ({ height }: {
    height: any;
}) => (theme: Theme) => import("@emotion/utils").SerializedStyles;
export declare const toggle: () => (theme: Theme) => import("@emotion/utils").SerializedStyles;
