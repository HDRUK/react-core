import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const P = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="body" />;

export default P;
