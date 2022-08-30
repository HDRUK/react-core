import { css, Theme } from "@emotion/react";
import {
    getComponentGlobals,
    getComponentSerializableStyles,
    getComponentStylesFromTheme,
} from "../../theme";
import { FieldStyleProps } from "./Field.types";

export const root =
    ({ error, focussed }: FieldStyleProps) =>
    (theme: Theme) => {
        const {
            focus: { boxShadowColor },
        } = getComponentGlobals("Field", theme);

        let color;
        if (focussed) color = boxShadowColor;
        if (error && focussed) color = "red700";

        return css`
            ${getComponentSerializableStyles("Field", theme)}

            ${color &&
            `
            ${getComponentStylesFromTheme(
                {
                    boxShadow: `2px 0px 0px 0px %theme.colors.${color}%`,
                },
                theme
            )}
            `}
        `;
    };
