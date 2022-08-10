/** @jsxImportSource @emotion/react */
import Box from "../Box";
import { H5 } from "../Typography";
import { FeatureContentHeaderProps } from "./FeatureContent.types";

const FeatureContentHeader = ({
  children,
  ...outerProps
}: FeatureContentHeaderProps) => {
  return (
    <H5 {...outerProps}>
      <Box display="flex" alignItems="center">
        {children}
      </Box>
    </H5>
  );
};

export default FeatureContentHeader;
