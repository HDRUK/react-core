/** @jsxImportSource @emotion/react */
import Box from "../Box";
import { FeatureContentBodyProps } from "./FeatureContent.types";

const FeatureContentBody = ({
  children,
  ...outerProps
}: FeatureContentBodyProps) => {
  return <Box {...outerProps}>{children}</Box>;
};

export default FeatureContentBody;
