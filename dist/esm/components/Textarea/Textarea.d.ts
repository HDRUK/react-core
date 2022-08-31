import { TextAreaProps } from "./TextArea.types";
declare const Textarea: {
    ({ className, autosize, label, maxCharCount, charCountDescription, variant, value, mt, mb, ml, mr, m, mx, my, width, minWidth, maxWidth, minHeight, maxHeight, height, inputRef, id, error, disabled, ...outerProps }: TextAreaProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        autosize: boolean;
        variant: string;
        charCountDescription: string;
        value: string;
        minHeight: string;
    };
};
export default Textarea;
