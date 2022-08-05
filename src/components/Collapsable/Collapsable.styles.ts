import { css, Theme, keyframes } from "@emotion/react";
import { getSize } from "../../theme";
import { AccordianStyleProps } from "./Accordian.types";

export const root = () => (theme: Theme) => {
  return css``;
};

export const content =
  ({ initialHeight }: AccordianStyleProps) =>
  (theme: Theme) => {
    return css`
      max-height: ${initialHeight};
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
      overflow: hidden;
    `;
  };

export const contentOpening =
  ({ height }) =>
  (theme: Theme) => {
    return css`
      max-height: ${height};
      transition: max-height 1s ease-in-out;
    `;
  };

export const toggle = () => (theme: Theme) => {
  return css`
    flex-shrink: 0;
    padding-left: ${getSize(1, theme)};
  `;
};
