/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FeatureContentBodyProps } from "./FeatureContent.types";

const FeatureContentBody = ({
  children,
  ...outerProps
}: FeatureContentBodyProps) => {
  return <div {...outerProps}>{children}</div>;
};

export default FeatureContentBody;
