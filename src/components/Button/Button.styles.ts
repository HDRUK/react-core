import { css } from "@emotion/react";
import { getComponentSize, getComponentVariant } from "../../theme";
import { getSize } from "../../theme";
import { Theme } from "../../types";
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

        .ui-Icon,
        svg {
            height: 1em;
            width: 1em;
        }
`,
};

export const root =
  ({ variant, size }: ButtonStyleProps) =>
  (theme: Theme) =>
    css`
      ${mixins.button()}
      ${getComponentVariant("Button", variant, theme)}
      ${getComponentSize("Button", size, theme)}

      border-radius: 4px;
      gap: ${getSize(1.5, theme)};
    `;
