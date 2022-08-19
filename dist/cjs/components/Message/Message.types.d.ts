import { ComponentProps } from "react";
import { ComponentStyleProps, MessageVariants } from "../../types";
export interface MessageProps extends Omit<ComponentProps<"div">, "color">, ComponentStyleProps {
    variant: MessageVariants;
}
export declare type MessageStyleProps = Pick<MessageProps, "variant">;
