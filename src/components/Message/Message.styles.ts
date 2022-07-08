import { css, Theme } from "@emotion/react";
import {
  getComponentGlobalStyles,
  getComponentVariantStyles,
} from "../../theme";
import { MessageStyleProps } from "./Message.types";

export const root =
  ({ variant }: MessageStyleProps) =>
  (theme: Theme) =>
    css`
      ${getComponentGlobalStyles("Message", theme)}
      ${getComponentVariantStyles("Message", variant, theme)}
    `;
