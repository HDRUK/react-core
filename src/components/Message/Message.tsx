/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";

import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Message.styles";
import { MessageProps } from "./Message.types";

const Message = ({
    className,
    children,
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
    variant,
    ...outerProps
}: MessageProps) => {
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
        <div
            className={cx("ui-Message", className)}
            css={[commonStyles, styles.root({ variant })]}
            {...outerProps}>
            {children}
        </div>
    );
};

Message.defaultProps = {
    variant: "description",
};

export default Message;
