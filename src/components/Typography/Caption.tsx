import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Caption = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="caption" />
);

export default Caption;
