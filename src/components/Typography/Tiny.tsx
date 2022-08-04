import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Tiny: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="tiny" />
);

export default Tiny;
