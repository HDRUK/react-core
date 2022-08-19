import { MessageProps } from "./Message.types";
declare const Message: {
    ({ className, children, ml, mr, mb, mt, m, mx, my, width, minWidth, maxWidth, variant, ...outerProps }: MessageProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default Message;
