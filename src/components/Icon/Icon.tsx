/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";

import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Icon.styles";
import { IconProps } from "./Icon.types";

const Icon = ({
    svg,
    size,
    color,
    fill,
    stroke,
    className,
    ml,
    mr,
    mb,
    mt,
    m,
    mx,
    my,
    ...outerProps
}: IconProps) => {
    const commonStyles = useCommonStyles({ mt, mb, ml, mr, m, mx, my });

    return (
        <span
            className={cx("ui-Icon", className)}
            css={[commonStyles, styles.root({ size, color, fill, stroke })]}
            {...outerProps}>
            {svg}
        </span>
    );
};

Icon.defaultProps = {
    size: "md",
};

export default Icon;
