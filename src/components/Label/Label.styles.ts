import { css, Theme } from "@emotion/react";
import {
    getColorStyle,
    getComponentGlobals,
    getComponentSerializableStyles,
} from "../../theme";
import { LabelStyleProps } from "./Label.types";

export const root =
    ({ disabled }: LabelStyleProps) =>
    (theme: Theme) => {
        const { disabledColor } = getComponentGlobals("Label", theme);

        return css`
            display: block;

            ${getComponentSerializableStyles("Label", theme)}
            ${disabled && getColorStyle("color", disabledColor, theme)}
        `;
    };
