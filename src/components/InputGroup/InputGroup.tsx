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
            {...outerProps}
            className={cx(className, "ui-InputGroup")}
            css={[commonStyles, styles.root]}>
            {children}
        </div>
    );
};

export default InputGroup;
