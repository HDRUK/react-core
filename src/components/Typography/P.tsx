import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const P: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="body" />
);

export default P;
