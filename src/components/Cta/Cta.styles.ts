import { css, Theme } from "@emotion/react";
import { getComponentStylesFromTheme, getSize } from "../../theme";
import { CtaStyleProps } from "./Cta.types";

export const root =
  ({ color, fill, fontSize }: CtaStyleProps) =>
  (theme: Theme) => {
    return css`
      gap: ${getSize(2, theme)};
      background: none;
      border: none;
      display: flex;
      align-items: center;

      ${getComponentStylesFromTheme(
        {
          color,
          fill,
          fontSize,
        },
        theme
      )};

      &:hover {
        cursor: pointer;
      }
    `;
  };
