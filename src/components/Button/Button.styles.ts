import { css, Theme } from "@emotion/react";
import {
    getComponentGlobalStyles,
    getComponentSizeStyles,
    getComponentVariantStyles,
    getSize,
} from "../../theme";
import { ButtonStyleProps } from "./Button.types";

export const mixins = {
    button: () =>
        `
        border-width: 2px;
        border-style: solid;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1em;
        cursor: pointer;

        &:disabled {
          cursor: default;
        }
`,
};

export const root =
    ({ variant, size }: ButtonStyleProps) =>
    (theme: Theme) =>
        css`
            ${mixins.button()}

            ${getComponentGlobalStyles("Button", theme)}
      ${getComponentVariantStyles("Button", variant, theme)}
      ${getComponentSizeStyles("Button", size, theme)}

      gap: ${getSize(1.5, theme)};
        `;
