import { css, Theme } from "@emotion/react";
import { getComponentGlobals } from "../../theme";

export const media = (theme: Theme) => {
  const padding = getComponentGlobals("CardBody", theme).padding;
  const offset = getComponentGlobals("FeatureContent", theme).offset;
  const calcOffset = `calc(-${padding} + ${offset})`;

  return css`
    top: ${calcOffset};
    bottom: ${calcOffset};
    width: 100%;
    position: absolute;
    right: ${calcOffset};
    line-height: 0;
    overflow: hidden;

    > * {
      height: 100%;
    }
  `;
};
