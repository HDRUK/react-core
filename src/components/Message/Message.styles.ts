import { css, Theme } from "@emotion/react";
import {
    getComponentSerializableStyles,
    getComponentVariantStyles,
} from "../../theme";
import { MessageStyleProps } from "./Message.types";

export const root =
    ({ variant }: MessageStyleProps) =>
    (theme: Theme) =>
        css`
            ${getComponentSerializableStyles("Message", theme)}
            ${getComponentVariantStyles("Message", variant, theme)}
        `;
