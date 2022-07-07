import { css, Theme } from "@emotion/react";
import {
  getComponentSizeStyles,
  getComponentStylesFromTheme,
  getSize,
} from "../../theme";
import { CtaStyleProps } from "./Cta.types";

export const root =
  ({ color, fill, fontSize, iconSize }: CtaStyleProps) =>
  (theme: Theme) => {
    const size = getComponentSizeStyles("Icon", iconSize, theme);

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

      .ui-Icon,
      svg {
        width: ${size};
        height: ${size};
      }
    `;
  };
