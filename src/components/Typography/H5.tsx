import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const H5 = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="h5" />;

export default H5;
