import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Caption = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="caption" />;

export default Caption;
