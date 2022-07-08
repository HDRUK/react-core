import { ComponentProps } from "react";
import { ComponentStyleProps } from "../../types";

export interface MessageProps
  extends Omit<ComponentProps<"div">, "color">,
    ComponentStyleProps {
  variant?: "error" | "description";
}

export type MessageStyleProps = Pick<MessageProps, "variant">;
