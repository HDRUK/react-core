import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H3 = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="h3" />
);

export default H3;
