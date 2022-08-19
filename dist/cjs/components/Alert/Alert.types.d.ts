import { ComponentProps, ReactNode } from "react";
import { ComponentStyleProps, MessageVariants } from "../../types";
export interface AlertProps extends ComponentProps<"div">, ComponentStyleProps {
    variant: MessageVariants;
    icon?: ReactNode;
    autoclose?: boolean;
    autocloseDuration?: number;
    dismissable?: boolean;
    onClose?(): void;
}
export declare type AlertStyleProps = Pick<AlertProps, "variant">;
