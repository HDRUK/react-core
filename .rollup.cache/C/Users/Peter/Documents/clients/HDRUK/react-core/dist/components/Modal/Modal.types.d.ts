import { ComponentProps } from "react";
import { ComponentStyleProps, ComponentHeightProps } from "../../types";
export interface ModalProps extends ComponentProps<"div">, ComponentStyleProps, ComponentHeightProps {
    open: boolean;
    contentAlignment: "top" | "center";
    dismissable?: boolean;
    onClose?(): void;
}
export declare type MessageStyleProps = Pick<ModalProps, "contentAlignment">;
