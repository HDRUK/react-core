import { ComponentProps } from "react";
import { ComponentStyleProps } from "../../types";
export interface LabelProps extends Omit<ComponentProps<"label">, "color">, ComponentStyleProps {
    disabled?: boolean;
}
export declare type LabelStyleProps = Pick<LabelProps, "disabled">;
