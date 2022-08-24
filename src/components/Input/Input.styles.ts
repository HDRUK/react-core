import { css, Theme } from "@emotion/react";
import {
    getColorStyle,
    getComponentGlobalStyles,
    getComponentVariantStyles,
    getSize,
} from "../../theme";
import { InputStyleProps } from "./Input.types";

export const mixins = {};

export const root =
    ({ offsetLeft = 0, offsetRight = 0 }: InputStyleProps) =>
    (theme: Theme) =>
        css`
            position: relative;

            input {
                height: 40px;

                padding-left: calc(
                    ${offsetLeft}px + ${getSize(offsetLeft ? 5 : 3, theme)}
                );

                padding-right: calc(
                    ${offsetRight}px + ${getSize(offsetRight ? 5 : 3, theme)}
                );

                box-sizing: border-box;
            }

            .ui-Icon,
            svg {
                height: 20px;
                width: 20px;
            }
        `;

export const input =
    ({ variant, error }: InputStyleProps) =>
    (theme: Theme) =>
        css`
            border-style: solid;
            border-width: 2px;

            ${getComponentGlobalStyles("Input", theme)}
            ${getComponentVariantStyles("Input", variant, theme)}
            ${error && getColorStyle("border-color", "red700", theme)}

            &:focus,
            &.focus,
            &:focus-within,
            &:focus-visible {
                outline: none;

                ${error && getColorStyle("border-color", "red700", theme)}
            }
        `;

export const icon = () => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    height: 100%;
`;

export const iconLeft = () => (theme: Theme) =>
    css`
        left: ${getSize(3, theme)};
    `;

export const iconRight = () => (theme: Theme) =>
    css`
        right: ${getSize(3, theme)};
    `;
