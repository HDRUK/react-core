import { ComponentProps } from "react";
export interface DimmerProps extends ComponentProps<"div"> {
    contentAlignment: "top" | "center";
}
export declare type DimmerStyleProps = Pick<DimmerProps, "contentAlignment">;
