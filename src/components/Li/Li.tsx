/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Li.styles";
import { LiProps } from "./Li.types";

const Li = ({ children, className, icon, ...outerProps }: LiProps) => {
    return (
        <li
            className={cx("ui-Li", className)}
            css={[styles.root({ icon })]}
            {...outerProps}>
            {icon} {children}
        </li>
    );
};

export default Li;
