import { css, Theme } from "@emotion/react";
import {
    getComponentSizeStyles,
    getComponentVariantStyles,
    getFormattedStyles,
} from "../../theme";
import { IconButtonStyleProps } from "./IconButton.types";

export const root = () => () =>
    css`
        padding: 0;
        border: none;
        cursor: pointer;
        background: none;
    `;

export const icon =
    ({ variant, size }: IconButtonStyleProps) =>
    (theme: Theme) =>
        css`
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.0917013);
            border-style: solid;
            border-width: 2px;
            box-sizing: content-box;
            ${getComponentVariantStyles("IconButton", variant, theme)}

            ${getFormattedStyles(size, theme, (value: string) => {
                return `
                    border-radius: calc(
                        ${getComponentSizeStyles("Icon", value, theme)} * 2
                    );
                    padding: calc(
                        ${getComponentSizeStyles("Icon", value, theme)} * 2 / 3
                    );
        `;
            })}
        `;
