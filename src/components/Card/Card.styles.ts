import { css, Theme } from "@emotion/react";
import { getComponentGlobalStyles } from "../../theme";

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

    ${getComponentGlobalStyles("CardHeader", theme)}
  `;

export const cardBody = (theme: Theme) =>
  css`
    ${getComponentGlobalStyles("CardBody", theme)}
  `;

export const cardFooter = (theme: Theme) =>
  css`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid;

    ${getComponentGlobalStyles("CardFooter", theme)}
  `;
