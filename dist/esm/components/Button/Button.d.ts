import { ButtonProps } from "./Button.types";
declare const Button: {
    ({ variant, children, size, m, mt, mb, ml, mr, mx, my, width, minWidth, maxWidth, iconLeft, iconRight, className, ...outerProps }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
        variant: string;
        type: string;
        disabled: boolean;
    };
};
export default Button;
