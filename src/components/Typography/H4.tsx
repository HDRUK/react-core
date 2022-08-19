import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H4 = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="h4" />
);

export default H4;
