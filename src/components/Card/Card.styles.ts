import { css, Theme } from "@emotion/react";
import { getComponentSerializableStyles } from "../../theme";

export const root = () => (theme: Theme) => {
    return css`
        word-break: break-word;
        position: relative;

        ${getComponentSerializableStyles("Card", theme)}
    `;
};

export const cardHeader = (theme: Theme) =>
    css`
        border-bottom: 1px solid;

        ${getComponentSerializableStyles("CardHeader", theme)}
    `;

export const cardBody = (theme: Theme) =>
    css`
        ${getComponentSerializableStyles("CardBody", theme)}
    `;

export const cardFooter = (theme: Theme) =>
    css`
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid;

        ${getComponentSerializableStyles("CardFooter", theme)}
    `;
