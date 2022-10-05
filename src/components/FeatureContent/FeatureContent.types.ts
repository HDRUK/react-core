import { BoxProps } from "../Box/Box.types";
import { CardProps } from "../Card/Card.types";
import { TypographyProps } from "../Typography/Typography.types";
import { ReactNode } from "react";

export type FeatureContentProps = {
    media: ReactNode;
    variant: "vertical" | "horizontal";
    header?: ReactNode;
    body?: ReactNode;
    actions?: ReactNode;
} & CardProps;

export type FeatureContentHorizontalProps = Omit<
    FeatureContentProps,
    "variant"
>;

export type FeatureContentVerticalProps = Omit<FeatureContentProps, "variant">;

export type FeatureContentHeaderProps<C extends React.ElementType> = Omit<
    TypographyProps<C>,
    "variant"
>;
export type FeatureContentBodyProps = BoxProps;
export type FeatureContentActionsProps = BoxProps;
