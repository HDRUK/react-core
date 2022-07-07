import { css, Theme } from "@emotion/react";
import { getComponentGlobalStyles } from "../../theme";

export const root = (theme: Theme) =>
  css`
    ${getComponentGlobalStyles("Error", theme)}
  `;
