import { ComponentProps, ReactElement } from "react";
import {
    CommonVariants,
    ComponentStyleProps,
    Responsive,
    ThemeFontSizes,
} from "../../types";

export interface IconButtonProps
    extends ComponentProps<"button">,
        ComponentStyleProps {
    variant: CommonVariants;
    size: Responsive<keyof ThemeFontSizes>;
    svg: ReactElement;
}

export type IconButtonStyleProps = Pick<IconButtonProps, "variant" | "size">;
