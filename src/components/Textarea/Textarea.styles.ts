import { css, Theme } from "@emotion/react";
import { getStyles } from "../../theme";
import { input } from "../Input/Input.styles";
import { TextAreaStyleProps } from "./TextArea.types";

export const root =
    ({ variant, minHeight, maxHeight, error }: TextAreaStyleProps) =>
    (theme: Theme) => {
        return css`
            width: 100%;
            flex-direction: column;
            flex: 0 0 100%;

            textarea {
                ${input({ variant, error })(theme)}
                ${getStyles("min-height", minHeight, theme)};
                ${getStyles("max-height", maxHeight, theme)};
            }
        `;
    };
