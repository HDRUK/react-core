import { ModalProps } from "./Modal.types";
declare const Modal: {
    ({ children, className, dismissable, open, contentAlignment, onClose, ...outerProps }: ModalProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
    defaultProps: {
        dismissable: boolean;
        width: string;
        contentAlignment: string;
    };
};
export default Modal;
