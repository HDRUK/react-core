import { css } from "@emotion/react";
import { UlStyleProps } from "./Ul.types";

export const root =
    ({ listStyleType }: UlStyleProps) =>
    () => {
        return css`
            ${listStyleType ? `list-style-type: ${listStyleType};` : ""}
            ${listStyleType === "none" ? "padding-left: 0;" : ""}
        `;
    };
