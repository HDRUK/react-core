import { css, Theme } from "@emotion/react";
import {
  getColorStyle,
  getComponentVariantStyles,
  getSize,
  getSpacingStyle,
} from "../../theme";
import { InputStyleProps } from "./Input.types";

export const root =
  ({
    offsetLeft = 0,
    offsetRight = 0,
    variant,
    disabled,
    error,
  }: InputStyleProps) =>
  (theme: Theme) =>
    css`
      position: relative;

      label {
        display: block;
        ${disabled && getColorStyle("color", "grey500", theme)}
        ${getSpacingStyle("margin-bottom", 2, theme)};
      }

      input {
        border-style: solid;
        border-width: 2px;
        border-radius: 4px;
        height: 40px;

        ${getComponentVariantStyles("Input", variant, theme)}

        ${error && getColorStyle("border-color", "red700", theme)}

        &:focus,
        &.focus,
        &:focus-within,
        &:focus-visible {
          outline: none;

          ${error && getColorStyle("border-color", "red700", theme)}
        }

        &: {
          disabled
        }

        width: 100%;
        padding-left: calc(${offsetLeft}px + ${getSize(
      offsetLeft ? 5 : 3,
      theme
    )});
        padding-right: calc(${offsetRight}px + ${getSize(
      offsetRight ? 5 : 3,
      theme
    )});
        box-sizing: border-box;
      }

      .ui-Icon,
      svg {
        height: 20px;
        width: 20px;
      }
    `;

export const icon = (theme: Theme) => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  height: 100%;
`;

export const iconLeft = () => (theme: Theme) =>
  css`
    left: ${getSize(3, theme)};
  `;

export const iconRight = () => (theme: Theme) =>
  css`
    right: ${getSize(3, theme)};
  `;
