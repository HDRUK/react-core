import { css } from "@emotion/react";
import { getComponentSize, getComponentStylesFromTheme } from "../../theme";
import { Theme } from "../../types";
import { IconStyleProps } from "./Icon.types";

export const root =
  ({ size, color, stroke, fill }: IconStyleProps) =>
  (theme: Theme) =>
    css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      height: ${getComponentSize("Icon", size, theme)};
      width: ${getComponentSize("Icon", size, theme)};

      ${getComponentStylesFromTheme({ stroke, color, fill }, theme)}

      svg,
      img {
        width: 100%;
        height: 100%;
      }
    `;
