import { ComponentProps } from "react";
import { ComponentStyleProps } from "../../types";

export type ErrorProps = Omit<ComponentProps<"div">, "color"> &
  ComponentStyleProps;
