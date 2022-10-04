import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H3 = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography href="fgdfg" {...props} variant="h3" />;

export default H3;
