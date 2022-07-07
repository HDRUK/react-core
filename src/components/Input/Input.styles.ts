import { css, Theme } from "@emotion/react";
import { getSize } from "../../theme";
import { InputStyleProps } from "./Input.types";

export const root =
  ({ offsetLeft = 0, offsetRight = 0 }: InputStyleProps) =>
  (theme: Theme) => {
    return css`
      position: relative;

      input {
        width: 100%;
        padding: ${getSize(2, theme)} 0;
        padding-left: calc(${offsetLeft}px + ${getSize(5, theme)});
        padding-right: calc(${offsetRight}px + ${getSize(5, theme)});
        box-sizing: border-box;
      }

      .ui-Icon,
      svg {
        height: calc(1em + 4px);
        width: calc(1em + 4px);
      }
    `;
  };

export const icon = (theme: Theme) => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  height: 100%;
`;

export const iconLeft = () => (theme: Theme) => {
  return css`
    left: ${getSize(3, theme)};
  `;
};

export const iconRight = () => (theme: Theme) => {
  return css`
    right: ${getSize(3, theme)};
  `;
};
