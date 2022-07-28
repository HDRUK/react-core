import { css } from "@emotion/react";
import { getColorStyle, getSpacingStyle } from "../../theme";

export const root = () => css`
  input {
    visibility: hidden;
    position: absolute;
    z-index: 0;
  }

  .loader {
    width: 24px;
    height: 24px;
    border: 5px solid #4682b4;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const table = (theme) => {
  return css`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      vertical-align: middle;
      border-bottom: 1px solid;
      ${getSpacingStyle("padding", 3, theme)};
      ${getColorStyle("border-color", "grey300", theme)}
    }

    tr td:last-child {
      padding-right: 0;
      min-width: 100px;
    }
  `;
};

export const nameColumn = () => css`
  width: 100px;
  white-space: nowrap;
`;

export const actionsColumn = () => css`
  width: 1px;
  white-space: nowrap;
`;
