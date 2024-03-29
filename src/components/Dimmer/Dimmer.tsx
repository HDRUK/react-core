/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Dimmer.styles";
import { DimmerProps } from "./Dimmer.types";

const Dimmer = ({
    children,
    className,
    contentAlignment,
    ...outerProps
}: DimmerProps) => {
    return (
        <div
            className={cx("ui-Dimmer", className)}
            css={styles.root({ contentAlignment })}
            {...outerProps}>
            {children}
        </div>
    );
};

Dimmer.defaultProps = {
    contentAlignment: "center",
};

export default Dimmer;
