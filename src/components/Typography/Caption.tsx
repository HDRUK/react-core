import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Caption: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="caption" />
);

export default Caption;
