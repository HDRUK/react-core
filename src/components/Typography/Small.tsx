import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Small = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="small" />;

export default Small;
