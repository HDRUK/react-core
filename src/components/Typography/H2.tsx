import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H2: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="h2" />
);

export default H2;
