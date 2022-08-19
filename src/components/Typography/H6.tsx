import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H6 = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="h6" />
);

export default H6;
