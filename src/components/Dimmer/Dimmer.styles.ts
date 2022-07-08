import { css, Theme } from "@emotion/react";
import { getComponentGlobalStyles } from "../../theme";
import { DimmerStyleProps } from "./Dimmer.types";

export const root =
  ({ contentAlignment }: DimmerStyleProps) =>
  (theme: Theme) => {
    return css`
      overflow: visible;
      opacity: 1;
      width: 100%;
      height: 100%;
      z-index: 9999;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;

      ${contentAlignment === "center" &&
      `
                align-items: center;
            `}

      ${contentAlignment === "top" &&
      `
      align-items: flex-start;
                padding-top: 137px;
            `}

            ${getComponentGlobalStyles("Dimmer", theme)}
    `;
  };
