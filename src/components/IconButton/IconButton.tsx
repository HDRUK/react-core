/** @jsxImportSource @emotion/react */
import * as styles from "./IconButton.styles";
import useCommonStyles from "../../hooks/useCommonStyles";
import { IconButtonProps } from "./IconButton.types";
import Icon from "../Icon";

const IconButton = ({
    variant = "primary",
    size = "md",
    svg,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    ...outerProps
}: IconButtonProps) => {
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
        <button
            css={[commonStyles, styles.root({ size, variant })]}
            {...outerProps}>
            <Icon
                size={size}
                css={[styles.icon({ size, variant })]}
                svg={svg}
            />
        </button>
    );
};

export default IconButton;
