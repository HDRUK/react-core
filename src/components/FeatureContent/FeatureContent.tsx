/** @jsxImportSource @emotion/react */

import { FeatureContentProps } from "./FeatureContent.types";
import FeatureContentHorizontal from "../FeatureContentHorizontal";
import FeatureContentVertical from "../FeatureContentVertical";

const FeatureContent = ({ variant, ...outerProps }: FeatureContentProps) => {
  return (
    <>
      {variant === "horizontal" && <FeatureContentHorizontal {...outerProps} />}
      {variant === "vertical" && <FeatureContentVertical {...outerProps} />}
    </>
  );
};

FeatureContent.defaultProps = {
  variant: "vertical",
};

export default FeatureContent;
