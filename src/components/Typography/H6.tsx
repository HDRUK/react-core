import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H6 = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="h6" />;

export default H6;
