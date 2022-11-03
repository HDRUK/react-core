import { ComponentProps } from "react";
import { ComponentMarginProps } from "../../types";

export interface UlProps extends ComponentProps<"ul">, ComponentMarginProps {
    listStyleType?: string;
}

export type UlStyleProps = Pick<UlProps, "listStyleType">;
