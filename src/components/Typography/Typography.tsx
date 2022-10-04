/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import { TypographyProps } from "./Typography.types";
import * as styles from "./Typography.styles";

const Typography = <C extends React.ElementType = "span">({
    children,
    color,
    className,
    mt,
    mb,
    ml,
    mr,
    m = 0,
    mx,
    my,
    width,
    minWidth,
    maxWidth,
    variant = "body",
    weight = "normal",
    as,
    ...outerProps
}: TypographyProps<C>) => {
    const commonStyles = useCommonStyles({
        mt,
        mb,
        ml,
        mr,
        m,
        mx,
        my,
        width,
        minWidth,
        maxWidth,
    });

    let Component = as || "span";

    if (!as) {
        if (variant === "body") {
            Component = "p";
        } else if (
            variant === "caption" ||
            variant === "small" ||
            variant === "tiny"
        ) {
            Component = "span";
        } else {
            Component = variant;
        }
    }

    return Component ? (
        <Component
            className={cx("ui-Typography", className)}
            css={[
                commonStyles,
                styles.root({
                    variant,
                    color,
                    tag: Component as string,
                    weight,
                }),
            ]}
            {...outerProps}>
            {children}
        </Component>
    ) : null;
};

export default Typography;
