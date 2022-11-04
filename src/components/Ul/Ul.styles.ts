import { css } from "@emotion/react";
import { UlStyleProps } from "./Ul.types";

export const root =
    ({ listStyleType }: UlStyleProps) =>
    () => {
        return css`
            margin: 0;
            padding: 0;
            list-style-position: inside;
            ${listStyleType ? `list-style-type: ${listStyleType};` : ""}
        `;
    };
