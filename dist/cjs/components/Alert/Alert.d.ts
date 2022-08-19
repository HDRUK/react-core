import { AlertProps } from "./Alert.types";
declare const Alert: {
    ({ icon, variant, onClose, children, className, mt, mb, ml, mr, m, mx, my, width, minWidth, maxWidth, dismissable, autoclose, autocloseDuration, ...outerProps }: AlertProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
    defaultProps: {
        variant: string;
        autocloseDuration: number;
    };
};
export default Alert;
