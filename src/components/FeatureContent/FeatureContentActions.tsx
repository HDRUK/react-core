/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Box from "components/Box";
import { FeatureContentActionsProps } from "./FeatureContent.types";

const FeatureContentActions = ({
  children,
  ...outerProps
}: FeatureContentActionsProps) => {
  return <Box {...outerProps}>{children}</Box>;
};

export default FeatureContentActions;
