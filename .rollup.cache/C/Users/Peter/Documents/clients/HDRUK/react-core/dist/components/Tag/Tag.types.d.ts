import { ComponentProps } from "react";
import { CommonSizes, ComponentMarginProps } from "../../types";
export interface TagProps extends ComponentProps<"span">, ComponentMarginProps {
    variant: "info" | "danger" | "warning" | "success";
    size: CommonSizes;
}
export declare type TagStyleProps = Pick<TagProps, "variant" | "size">;
