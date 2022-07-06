import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H5: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="h5" />
);

export default H5;
