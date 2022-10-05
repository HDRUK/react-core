/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";

import { useEffect, useRef, useState } from "react";
import useCommonStyles from "../../hooks/useCommonStyles";
import * as styles from "./Field.styles";
import { FieldProps } from "./Field.types";

import { InputDecoratorProvider } from "./FieldProvider";

const Field = ({
    className,
    error,
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
    children,
    ...outerProps
}: FieldProps) => {
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

    const ref = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

    const [focussed, setFocussed] = useState(false);

    useEffect(() => {
        const handleSetFocussed = () => {
            setFocussed(true);
        };

        const handleSetBlurred = () => {
            setFocussed(false);
        };

        if (ref?.current) {
            ref?.current.addEventListener("focus", handleSetFocussed);
            ref?.current.addEventListener("blur", handleSetBlurred);
        }

        return () => {
            if (ref?.current) {
                ref?.current.removeEventListener("focus", handleSetFocussed);
                ref?.current.addEventListener("blur", handleSetBlurred);
            }
        };
    }, [ref?.current]);

    return (
        <InputDecoratorProvider value={{ ref, error }}>
            <div
                className={cx("ui-Field", className)}
                css={[
                    commonStyles,
                    styles.root({
                        error,
                        focussed,
                    }),
                ]}
                {...outerProps}>
                {children}
            </div>
        </InputDecoratorProvider>
    );
};

export default Field;
