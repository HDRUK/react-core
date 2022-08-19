import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Tiny = (props: Omit<TypographyProps, "variant">) => (
  <Typography {...props} variant="tiny" />
);

export default Tiny;
