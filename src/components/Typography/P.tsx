import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const P = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="body" />
);

export default P;
