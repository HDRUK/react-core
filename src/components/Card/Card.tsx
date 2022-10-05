/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";

import * as styles from "./Card.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
import { CardProps } from "./Card.types";

const Card = ({
    children,
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
    height,
    minHeight,
    maxHeight,
    className,
    ...outerProps
}: CardProps) => {
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
        height,
        minHeight,
        maxHeight,
    });

    return (
        <div
            role="article"
            className={cx("ui-Card", className)}
            css={[commonStyles, styles.root()]}
            {...outerProps}>
            {children}
        </div>
    );
};

export default Card;
