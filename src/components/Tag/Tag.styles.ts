import { css, Theme } from "@emotion/react";
import { getComponentVariantStyles, getComponentSizeStyles } from "../../theme";
import { TagStyleProps } from "./Tag.types";

export const root =
  ({ variant, size }: TagStyleProps) =>
  (theme: Theme) => {
    return css`
      display: inline-flex;
      align-items: center;
      border-radius: 3px;
      line-height: 1em;
      box-sizing: border-box;

      ${getComponentSizeStyles("Tag", size, theme)}
      ${getComponentVariantStyles("Tag", variant, theme)}
    `;
  };
