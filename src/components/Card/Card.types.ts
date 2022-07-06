import { ComponentProps } from "react";
import { ComponentStyleProps, HeightStyleProps } from "../../types";

export type CardProps = ComponentProps<"div"> &
  ComponentStyleProps &
  HeightStyleProps;
export type CardHeaderProps = ComponentProps<"div">;
export type CardBodyProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;
