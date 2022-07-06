import { ComponentProps } from "react";

export interface DimmerProps extends ComponentProps<"div"> {
  contentAlignment: "top" | "center";
}

export type DimmerStyleProps = Pick<DimmerProps, "contentAlignment">;
