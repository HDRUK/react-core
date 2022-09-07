/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Cta.styles";
import { CtaProps } from "./Cta.types";

const Cta = ({
    color,
    children,
    mt,
    mb,
    ml,
    mr,
    m,
    mx,
    my,
    iconLeft,
    iconRight,
    className,
    fill,
    ...outerProps
}: CtaProps) => {
    const commonStyles = useCommonStyles({
        mt,
        mr,
        ml,
        mb,
        m,
        mx,
        my,
    });

    return (
        <button
            {...outerProps}
            className={cx(className, "ui-Cta")}
            css={[
                commonStyles,
                styles.root({
                    color,
                    fill,
                }),
            ]}>
            {iconLeft} {children} {iconRight}
        </button>
    );
};

Cta.defaultProps = {
    size: "medium",
};

export default Cta;
