import { css, Theme } from "@emotion/react";
import { getComponentSizeStyles, getComponentVariantStyles } from "../../theme";
import { IconButtonStyleProps } from "./IconButton.types";

export const root =
	({ variant, size }: IconButtonStyleProps) =>
	(theme: Theme) =>
		css`
			${getComponentVariantStyles("IconButton", variant, theme)}
			padding: 0;
			border-width: 2px;
			border-style: solid;
			border-radius: calc(${getComponentSizeStyles("Icon", size, theme)} * 2);
			cursor: pointer;
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.0917013);
		`;

export const icon =
	({ variant, size }: IconButtonStyleProps) =>
	(theme: Theme) =>
		css`
			${getComponentVariantStyles("IconButtonIcon", variant, theme)}
			padding: calc(${getComponentSizeStyles("Icon", size, theme)} * 2/3);
		`;
