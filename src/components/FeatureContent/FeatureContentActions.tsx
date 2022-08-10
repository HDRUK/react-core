/** @jsxImportSource @emotion/react */
import Box from "../Box";
import { FeatureContentActionsProps } from "./FeatureContent.types";

const FeatureContentActions = ({
  children,
  ...outerProps
}: FeatureContentActionsProps) => {
  return <Box {...outerProps}>{children}</Box>;
};

export default FeatureContentActions;
