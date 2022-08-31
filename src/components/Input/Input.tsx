/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";

import * as styles from "./Input.styles";
import { InputProps } from "./Input.types";
import { useEffect, useRef } from "react";
import useDOMAttributes from "../../hooks/useDOMAttributes/useDOMAttributes";
import useCommonStyles from "../../hooks/useCommonStyles";
import Label from "../Label";
import Message from "../Message";
import Box from "../Box";

const Input = ({
    className,
    iconLeft,
    iconRight,
    variant,
    label,
    disabled,
    description,
    error,
    id,
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
    ...outerProps
}: InputProps) => {
    const iconLeftRef = useRef(null);
    const iconRightRef = useRef(null);

    const commonStyles = useCommonStyles({
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
    });

    const {
        update: updateLeft,
        attributes: { offsetWidth: offsetLeft },
    } = useDOMAttributes(["offsetWidth"]);
    const {
        update: updateRight,
        attributes: { offsetWidth: offsetRight },
    } = useDOMAttributes(["offsetWidth"]);

    useEffect(() => {
        updateLeft(iconLeftRef.current);
    }, [updateLeft, iconLeftRef]);

    useEffect(() => {
        updateRight(iconRightRef.current);
    }, [updateRight, iconRightRef]);

    return (
        <div
            className={cx(className, "ui-Input")}
            css={[
                commonStyles,
                styles.root({
                    offsetLeft,
                    offsetRight,
                    variant,
                    error,
                }),
            ]}>
            {label && (
                <Label htmlFor={id} mb={2} disabled={disabled}>
                    {label}
                </Label>
            )}
            {description && <Message mb={2}>{description}</Message>}
            <Box position="relative" width="100%">
                {iconLeft && (
                    <span
                        css={[styles.icon, styles.iconLeft]}
                        ref={iconLeftRef}>
                        {iconLeft}
                    </span>
                )}
                <input
                    {...outerProps}
                    id={id}
                    disabled={disabled}
                    css={[styles.input({ variant, error })]}
                />
                {iconRight && (
                    <span
                        css={[styles.icon, styles.iconRight]}
                        ref={iconRightRef}>
                        {iconRight}
                    </span>
                )}
            </Box>
            {error && (
                <Message variant="danger" mt={2}>
                    {error}
                </Message>
            )}
        </div>
    );
};

Input.defaultProps = {
    variant: "primary",
};

export default Input;
