/** @jsxImportSource @emotion/react */
import { FileSelectorProps } from "./FileSelector.types";
declare const FileSelector: {
    ({ listing, fileTypes, maxFileSize, noFilesMessage, multiple, actions, mt, mb, ml, mr, m, mx, my, width, minWidth, maxWidth, className, onFilesUpdated, }: FileSelectorProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        fileTypes: string[];
        maxFileSize: number;
        noFilesMessage: null;
        multiple: boolean;
    };
};
export default FileSelector;
