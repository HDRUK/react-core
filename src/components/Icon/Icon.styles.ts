import { css, Theme } from "@emotion/react";
import {
    getComponentSizeStyles,
    getComponentStylesFromTheme,
    getFormattedStyles,
} from "../../theme";
import { ThemeFontSizes } from "../../types";
import { IconStyleProps } from "./Icon.types";

export const root =
    ({ size, color, stroke, fill }: IconStyleProps) =>
    (theme: Theme) => {
        return css`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;

            ${getFormattedStyles(size, theme, (value: keyof ThemeFontSizes) => {
                const dimension = getComponentSizeStyles("Icon", value, theme);

                return `
            width: ${dimension};
            height: ${dimension};
        `;
            })}

            ${getComponentStylesFromTheme({ stroke, color, fill }, theme)}

      svg,
      img {
                width: 100%;
                height: 100%;
            }
        `;
    };
