import { css, Theme } from "@emotion/react";
import { getColorStyle, getComponentVariantStyles } from "../../theme";
import { TypographyStyleProps } from "./Typography.types";

export const root =
  ({ color, variant, tag }: TypographyStyleProps) =>
  (theme: Theme) => {
    return css`
      ${tag === "span" && "display: inline-block;"}
      ${getColorStyle("color", color, theme)}
      ${getComponentVariantStyles("Typography", variant, theme)};
    `;
  };
