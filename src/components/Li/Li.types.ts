import { ComponentProps, ReactNode } from "react";

export interface LiProps extends ComponentProps<"li"> {
    icon?: ReactNode;
}

export type LiStyleProps = Pick<LiProps, "icon">;
