import { ComponentProps, ReactElement } from "react";
import { CommonVariants, ComponentStyleProps } from "../../types";
import { IconSizes } from "../Icon/Icon.types";

export interface IconButtonProps
	extends ComponentProps<"button">,
		ComponentStyleProps {
	variant: CommonVariants;
	size: IconSizes;
	svg: ReactElement;
}

export type IconButtonStyleProps = Pick<IconButtonProps, "variant" | "size">;
