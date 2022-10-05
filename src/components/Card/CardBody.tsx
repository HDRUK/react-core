/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import * as styles from "./Card.styles";
import { CardBodyProps } from "./Card.types.js";

const CardBody = ({ className, children, ...outerProps }: CardBodyProps) => {
    return (
        <div
            {...outerProps}
            className={cx("ui-CardBody", className)}
            css={styles.cardBody}>
            {children}
        </div>
    );
};

export default CardBody;
