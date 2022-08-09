/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Box from "components/Box";
import { FeatureContentBodyProps } from "./FeatureContent.types";

const FeatureContentBody = ({
  children,
  ...outerProps
}: FeatureContentBodyProps) => {
  return <Box {...outerProps}>{children}</Box>;
};

export default FeatureContentBody;
