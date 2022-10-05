import React from "react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const Tiny = <C extends React.ElementType>(
    props: Omit<TypographyProps<C>, "variant">
) => <Typography {...props} variant="tiny" />;

export default Tiny;
