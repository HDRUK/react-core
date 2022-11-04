/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Ul.styles";
import { UlProps } from "./Ul.types";

const Ul = ({
    children,
    mt,
    mb,
    ml,
    mr,
    m,
    mx,
    my,
    className,
    listStyleType,
    ...outerProps
}: UlProps) => {
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
        <ul
            className={cx("ui-Ul", className)}
            css={[styles.root({ listStyleType }), commonStyles]}
            {...outerProps}>
            {children}
        </ul>
    );
};

export default Ul;
