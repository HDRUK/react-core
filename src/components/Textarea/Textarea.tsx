/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import TextareaAutosize from "react-textarea-autosize";
import useCommonStyles from "../../hooks/useCommonStyles";
import Box from "../Box";
import { useField } from "../Field/FieldProvider";
import Label from "../Label";
import Message from "../Message";
import Typography from "../Typography";
import * as styles from "./Textarea.styles";
import { TextAreaProps } from "./TextArea.types";

const Textarea = ({
    className,
    autosize,
    label,
    maxCharCount,
    charCountDescription,
    variant,
    value,
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
    minHeight,
    maxHeight,
    height,
    inputRef,
    id,
    error,
    disabled,
    ...outerProps
}: TextAreaProps) => {
    const decorated = useField();

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
    });

    let valueLength = 0;

    const errorMessage = error || decorated.error;

    if (value) {
        if (maxCharCount && value.length > maxCharCount) {
            valueLength = maxCharCount;
        } else {
            valueLength = value.length;
        }
    }

    return (
        <div
            className={cx("ui-Textarea", className)}
            css={[
                commonStyles,
                styles.root({
                    variant,
                    minHeight,
                    maxHeight,
                    error: errorMessage,
                }),
            ]}>
            {label && (
                <Label htmlFor={id} mb={2} disabled={disabled}>
                    {label}
                </Label>
            )}
            <div>
                {!!maxCharCount && (
                    <Typography color="grey700Alt">
                        <Box mb={1} display="flex" data-testid="count">
                            {valueLength} {charCountDescription}
                            <Box textAlign="right" flexGrow="1">
                                {" "}
                                ({valueLength}/{maxCharCount})
                            </Box>
                        </Box>
                    </Typography>
                )}
                {autosize && (
                    <TextareaAutosize
                        value={value}
                        id={id}
                        disabled={disabled}
                        ref={el => {
                            decorated.ref.current = el;
                            if (inputRef) inputRef.current = el;
                        }}
                        maxLength={maxCharCount}
                        data-testid="autosize"
                        {...outerProps}
                    />
                )}
                {!autosize && (
                    <textarea
                        id={id}
                        disabled={disabled}
                        ref={el => {
                            decorated.ref.current = el;
                            if (inputRef) inputRef.current = el;
                        }}
                        maxLength={maxCharCount}
                        {...outerProps}
                    />
                )}
            </div>
            {errorMessage && (
                <Message variant="danger" mt={1}>
                    {errorMessage}
                </Message>
            )}
        </div>
    );
};

Textarea.defaultProps = {
    autosize: false,
    variant: "primary",
    charCountDescription: "character limit",
    value: "",
    minHeight: "80px",
};

export default Textarea;
