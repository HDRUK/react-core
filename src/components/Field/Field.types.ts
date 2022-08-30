import { ReactNode, ComponentProps } from "react";
import { ComponentStyleProps } from "../../types";

export interface FieldProps extends ComponentProps<"div">, ComponentStyleProps {
    error: ReactNode;
}

export type FieldStyleProps = Pick<FieldProps, "error"> & {
    focussed: boolean;
};
