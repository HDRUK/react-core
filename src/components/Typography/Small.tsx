import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Small = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="small" />
);

export default Small;
