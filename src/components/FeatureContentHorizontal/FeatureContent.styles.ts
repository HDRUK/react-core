import { css, Theme } from "@emotion/react";
import { getComponentGlobals } from "../../theme";

export const root = (theme: Theme) => {
  return css`
    > :last-child {
      margin-bottom: 0;
    }
  `;
};

export const media = (theme: Theme) => {
  const cardOffset = getComponentGlobals(
    "FeatureContentHorizontal",
    theme
  ).cardOffset;

  return css`
    max-width: 100%;
    top: ${cardOffset};
    bottom: ${cardOffset};
    width: 100%;
    position: absolute;
    right: ${cardOffset};
    line-height: 0;
    overflow: hidden;

    > * {
      height: 100%;
    }
  `;
};
