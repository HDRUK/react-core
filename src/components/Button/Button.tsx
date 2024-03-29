/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Button.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
import { ButtonProps } from "./Button.types";

const Button = ({
    variant,
    children,
    size,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    width,
    minWidth,
    maxWidth,
    iconLeft,
    iconRight,
    className,
    ...outerProps
}: ButtonProps) => {
    const commonStyles = useCommonStyles({
        mt,
        mr,
        ml,
        mb,
        m,
        mx,
        my,
        width,
        maxWidth,
        minWidth,
    });

    return (
        <button
            css={[commonStyles, styles.root({ size, variant })]}
            className={cx("ui-Button", className)}
            {...outerProps}>
            {iconLeft} {children} {iconRight}
        </button>
    );
};

Button.defaultProps = {
    size: "medium",
    variant: "primary",
    type: "button",
    disabled: false,
};

export default Button;
