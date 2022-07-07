import { css, Theme } from "@emotion/react";
import {
  getComponentSizeStyles,
  getComponentStylesFromTheme,
} from "../../theme";
import { IconStyleProps } from "./Icon.types";

export const root =
  ({ size, color, stroke, fill }: IconStyleProps) =>
  (theme: Theme) =>
    css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      height: ${getComponentSizeStyles("Icon", size, theme)};
      width: ${getComponentSizeStyles("Icon", size, theme)};

      ${getComponentStylesFromTheme({ stroke, color, fill }, theme)}

      svg,
      img {
        width: 100%;
        height: 100%;
      }
    `;
