import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H1: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="h1" />
);

export default H1;
