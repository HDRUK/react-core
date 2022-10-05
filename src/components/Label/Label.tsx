/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";

import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Label.styles";
import { LabelProps } from "./Label.types";

const Label = ({
    className,
    children,
    disabled,
    ml,
    mr,
    mb,
    mt,
    m,
    mx,
    my,
    width,
    minWidth,
    maxWidth,
    ...outerProps
}: LabelProps) => {
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

    return (
        <label
            className={cx("ui-Label", className)}
            css={[commonStyles, styles.root({ disabled })]}
            {...outerProps}>
            {children}
        </label>
    );
};

export default Label;
