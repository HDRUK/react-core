import { css } from "@emotion/react";

export const root = () => {
    return css`
        display: flex;
        align-items: stretch;

        .ui-Button {
            height: auto;
        }

        .ui-Button:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .ui-Button:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        .ui-Button:not(:first-child):not(:last-child) {
            border-radius: 0;
        }

        .ui-Input:not(:first-child) input {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        .ui-Input:not(:last-child) input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    `;
};
