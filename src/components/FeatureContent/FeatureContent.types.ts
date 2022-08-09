import { BoxProps } from "components/Box/Box.types";
import { CardProps } from "components/Card/Card.types";
import { TypographyProps } from "components/Typography/Typography.types";
import { ReactElement } from "react";

export type FeatureContentProps = {
  media: ReactElement;
  header: ReactElement;
  body: ReactElement;
  actions: ReactElement;
  variant: "vertical" | "horizontal";
} & CardProps;

export type FeatureContentHorizontalProps = Omit<
  FeatureContentProps,
  "variant"
>;

export type FeatureContentVerticalProps = Omit<FeatureContentProps, "variant">;

export type FeatureContentHeaderProps = Omit<TypographyProps, "variant">;
export type FeatureContentBodyProps = BoxProps;
export type FeatureContentActionsProps = BoxProps;
