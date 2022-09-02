/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";

import { useMeasure } from "react-use";
import useCommonStyles from "../../hooks/useCommonStyles";
import { ReactComponent as ClearIcon } from "../../images/icons/clear.svg";
import Box from "../Box";
import Icon from "../Icon";
import { useField } from "../Field/FieldProvider";
import Label from "../Label";
import Message from "../Message";
import * as styles from "./Input.styles";
import { InputProps } from "./Input.types";

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
    inputRef,
    onClear,
    value,
    ...outerProps
}: InputProps) => {
    const decorated = useField();

    const [iconLeftRef, { width: offsetLeft }] = useMeasure<HTMLSpanElement>();
    const [iconRightRef, { width: offsetRight }] =
        useMeasure<HTMLSpanElement>();

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

    const errorMessage = error || decorated.error;

    return (
        <div
            className={cx(className, "ui-Input")}
            css={[
                commonStyles,
                styles.root({
                    offsetLeft,
                    offsetRight,
                    variant,
                    error: error || decorated.error,
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
                    css={[
                        styles.input({
                            variant,
                            error: error || decorated.error,
                        }),
                    ]}
                    ref={el => {
                        decorated.ref.current = el;
                        if (inputRef) inputRef.current = el;
                    }}
                    value={value}
                />
                {(iconRight || (onClear && value)) && (
                    <span
                        css={[styles.icon, styles.iconRight]}
                        ref={iconRightRef}>
                        {iconRight}
                        {onClear && value && (
                            <Icon
                                svg={<ClearIcon />}
                                fill="grey400"
                                onClick={onClear}
                                role="button"
                            />
                        )}
                    </span>
                )}
            </Box>
            {errorMessage && (
                <Message variant="danger" mt={1}>
                    {errorMessage}
                </Message>
            )}
        </div>
    );
};

Input.defaultProps = {
    variant: "primary",
};

export default Input;
