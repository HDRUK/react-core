import { css, Theme } from "@emotion/react";
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

                width: 100%;
                min-height: ${minHeight};
                max-height: ${maxHeight};
            }
        `;
    };
