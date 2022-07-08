import { css, Theme } from "@emotion/react";
import { getComponentGlobalStyles, getSize } from "../../theme";

export const root = () => (theme: Theme) => {
  return css`
    word-break: break-word;
    position: relative;

    ${getComponentGlobalStyles("Card", theme)}
  `;
};

export const cardHeader = (theme: Theme) =>
  css`
    border-bottom: 1px solid;
    padding: ${getSize(6, theme)};

    ${getComponentGlobalStyles("CardHeader", theme)}
  `;

export const cardBody = (theme: Theme) =>
  css`
    padding: ${getSize(6, theme)};
  `;

export const cardFooter = (theme: Theme) =>
  css`
    display: flex;
    justify-content: flex-end;
    padding: ${getSize(4, theme)};
    border-top: 1px solid;

    ${getComponentGlobalStyles("CardFooter", theme)}
  `;
