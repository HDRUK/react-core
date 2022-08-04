import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Small: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography {...props} variant="small" />
);

export default Small;
