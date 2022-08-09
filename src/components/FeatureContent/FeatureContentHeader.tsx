/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { H5 } from "components/Typography";
import { FeatureContentHeaderProps } from "./FeatureContent.types";

const FeatureContentHeader = ({
  children,
  ...outerProps
}: FeatureContentHeaderProps) => {
  return <H5 {...outerProps}>{children}</H5>;
};

export default FeatureContentHeader;
