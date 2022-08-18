import { ComponentProps, ReactNode } from "react";
import { ComponentStyleProps } from "../../types";

export type AlertTypes = "success" | "warning" | "info" | "danger";

export interface AlertProps extends ComponentProps<"div">, ComponentStyleProps {
  variant: AlertTypes;
  icon?: ReactNode;
  autoclose?: boolean;
  autocloseDuration?: number;
  dismissable?: boolean;
  onClose?(): void;
}

export type AlertStyleProps = Pick<AlertProps, "variant">;
