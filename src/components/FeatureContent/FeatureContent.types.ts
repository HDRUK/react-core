import { CardProps } from "components/Card/Card.types";
import { TypographyProps } from "components/Typography/Typography.types";
import { ComponentProps, ReactElement } from "react";

export type FeatureContentProps = {
  media: ReactElement;
  header: ReactElement;
  body: ReactElement;
  variant: "vertical" | "horizontal";
} & CardProps;

export type FeatureContentHorizontalProps = Omit<
  FeatureContentProps,
  "variant"
>;

export type FeatureContentVerticalProps = Omit<FeatureContentProps, "variant">;

export type FeatureContentHeaderProps = Omit<TypographyProps, "variant">;
export type FeatureContentBodyProps = ComponentProps<"div">;
