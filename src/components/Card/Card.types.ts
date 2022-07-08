import { ComponentProps } from "react";
import { ComponentStyleProps, ComponentHeightProps } from "../../types";

export type CardProps = ComponentProps<"div"> &
  ComponentStyleProps &
  ComponentHeightProps;
export type CardHeaderProps = ComponentProps<"div">;
export type CardBodyProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;
