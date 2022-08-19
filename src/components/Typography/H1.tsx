import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H1 = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="h1" />
);

export default H1;
