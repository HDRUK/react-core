import { css, Theme } from "@emotion/react";
import {
    getColorStyle,
    getComponentVariantStyles,
    getFontWeight,
} from "../../theme";
import { TypographyStyleProps } from "./Typography.types";

export const root =
    ({ color, variant, tag, weight }: TypographyStyleProps) =>
    (theme: Theme) => {
        return css`
            ${tag === "span" && "display: inline-block;"}
            ${getComponentVariantStyles("Typography", variant, theme)};
            ${getFontWeight("font-weight", weight, theme)};
            ${getColorStyle("color", color, theme)}
        `;
    };
