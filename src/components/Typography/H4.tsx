import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H4: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="h4" />
);

export default H4;
