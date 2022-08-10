import { css } from "@emotion/react";
import { CollapsableStyleProps } from "./Collapsable.types";

export const content =
  ({ initialHeight }: CollapsableStyleProps) =>
  () => {
    return css`
      max-height: ${initialHeight};
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
      overflow: hidden;
    `;
  };

export const contentOpening =
  ({ height }: { height: string }) =>
  () => {
    return css`
      max-height: ${height};
      transition: max-height 1s ease-in-out;
    `;
  };
