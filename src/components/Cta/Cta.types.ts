import { Theme } from "@emotion/react";
import { ComponentProps, ReactElement } from "react";
import { ComponentMarginProps } from "../../types";

export interface CtaProps
    extends Omit<ComponentProps<"button">, "color" | "fill">,
        ComponentMarginProps {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    color: keyof Theme["colors"];
    fill: keyof Theme["colors"];
}

export type CtaStyleProps = Pick<CtaProps, "color" | "fill">;
