import { css, Theme } from "@emotion/react";
import { getComponentGlobals, getSize } from "../../theme";

export const root = (theme: Theme) => {
  const cardOffset = getComponentGlobals(
    "FeatureContentVertical",
    theme
  ).cardOffset;

  return css`
    margin: ${cardOffset};

    > last-child {
      margin-bottom: 0;
    }
  `;
};

export const media = (theme: Theme) => {
  return css`
    margin-bottom: ${getSize(2, theme)};

    > * {
      width: 100%;
    }
  `;
};
