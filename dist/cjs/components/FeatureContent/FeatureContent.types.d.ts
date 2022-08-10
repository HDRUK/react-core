import { BoxProps } from "../Box/Box.types";
import { CardProps } from "../Card/Card.types";
import { TypographyProps } from "../Typography/Typography.types";
import { ReactNode } from "react";
export declare type FeatureContentProps = {
    media: ReactNode;
    variant: "vertical" | "horizontal";
    header?: ReactNode;
    body?: ReactNode;
    actions?: ReactNode;
} & CardProps;
export declare type FeatureContentHorizontalProps = Omit<FeatureContentProps, "variant">;
export declare type FeatureContentVerticalProps = Omit<FeatureContentProps, "variant">;
export declare type FeatureContentHeaderProps = Omit<TypographyProps, "variant">;
export declare type FeatureContentBodyProps = BoxProps;
export declare type FeatureContentActionsProps = BoxProps;
