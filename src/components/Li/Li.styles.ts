import { css, Theme } from "@emotion/react";
import { getSize } from "../../theme";
import { LiStyleProps } from "./Li.types";

export const root =
    ({ icon }: LiStyleProps) =>
    (theme: Theme) => {
        return css`
            margin-bottom: ${getSize(2, theme)};

            ${icon
                ? `
                display: flex;
                align-items: center;
                gap: ${getSize(1, theme)};
            `
                : ""};
        `;
    };
