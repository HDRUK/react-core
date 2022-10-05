/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./InputGroup.styles";
import { InputGroupProps } from "./InputGroup.types";

const InputGroup = ({
    children,
    mt,
    mb,
    ml,
    mr,
    m,
    mx,
    my,
    width,
    maxWidth,
    minWidth,
    className,
    ...outerProps
}: InputGroupProps) => {
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
        <div
            className={cx("ui-InputGroup", className)}
            css={[commonStyles, styles.root]}
            {...outerProps}>
            {children}
        </div>
    );
};

export default InputGroup;
