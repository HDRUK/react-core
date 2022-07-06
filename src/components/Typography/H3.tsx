import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H3: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="h3" />
);

export default H3;
