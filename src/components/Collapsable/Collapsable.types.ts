import { ComponentProps, ReactElement } from "react";
import { ComponentMarginProps } from "../../types";

export interface CollapsableProps
  extends ComponentProps<"div">,
    ComponentMarginProps {
  open?: boolean;
  initialHeight?: string;
  toggle: ReactElement;
}

export type CollapsableStyleProps = Pick<
  CollapsableProps,
  "open" | "initialHeight"
>;
