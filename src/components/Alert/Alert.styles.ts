import { css, Theme } from "@emotion/react";
import {
  getComponentGlobalStyles,
  getComponentVariantStyles,
  getSize,
} from "../../theme";
import { AlertStyleProps } from "./Alert.types";

export const root =
  ({ variant }: AlertStyleProps) =>
  (theme: Theme) => {
    return css`
      border-width: 2px;
      border-style: solid;
      padding: ${getSize(3, theme)};
      display: flex;

      ${getComponentGlobalStyles("Alert", theme)}
      ${getComponentVariantStyles("Alert", variant, theme)}
    `;
  };

export const icon = (theme: Theme) => css`
  margin-top: 0;
  margin-right: ${getSize(2, theme)};
  position: relative;
  top: 1px;
`;

export const dismiss = () => css`
  position: relative;
  top: 3px;
  cursor: pointer;
`;

export const content = () => css`
  flex-grow: 1;
  display: flex;
  align-items: center;

  > *:last-child {
    margin-bottom: 0;
  }
`;
