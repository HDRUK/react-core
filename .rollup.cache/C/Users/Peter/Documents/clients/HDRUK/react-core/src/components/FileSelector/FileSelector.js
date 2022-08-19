import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { filesize } from "humanize";
import { useCallback, useEffect, useRef, useState } from "react";
import * as styles from "./FileSelector.styles";
import FileSelectorButton from "./FileSelectorButton";
import useCommonStyles from "../../hooks/useCommonStyles";
import { ReactComponent as UploadIcon } from "../../images/icons/upload.svg";
import Box from "../Box";
import Icon from "../Icon";
import Typography, { H5 } from "../Typography";
import Caption from "../Typography/Caption";
var FileSelector = function (_a) {
    var listing = _a.listing, fileTypes = _a.fileTypes, maxFileSize = _a.maxFileSize, noFilesMessage = _a.noFilesMessage, multiple = _a.multiple, actions = _a.actions, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, m = _a.m, mx = _a.mx, my = _a.my, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, className = _a.className, onFilesUpdated = _a.onFilesUpdated;
    var fileRef = useRef(null);
    var _b = useState([]), fileList = _b[0], setFileList = _b[1];
    var commonStyles = useCommonStyles({
        mt: mt,
        mb: mb,
        ml: ml,
        mr: mr,
        m: m,
        mx: mx,
        my: my,
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
    });
    var handleSelectClick = useCallback(function () {
        var current = fileRef.current;
        if (current) {
            current.click();
        }
    }, [fileRef.current]);
    var handleFileChange = useCallback(function (e) {
        setFileList(e.target.files);
    }, []);
    var handleRemoveFile = useCallback(function (name) {
        var files = fileList.filter(function (file) { return file.name !== name; });
        if (fileRef.current)
            fileRef.current.value = "";
        setFileList(files);
    }, [fileList]);
    var reset = useCallback(function () {
        if (fileRef.current)
            fileRef.current.value = "";
        setFileList([]);
    }, [fileRef]);
    var readAsText = function (file, encodingType) {
        if (encodingType === void 0) { encodingType = "UTF-8"; }
        return __awaiter(void 0, void 0, void 0, function () {
            var reader;
            return __generator(this, function (_a) {
                reader = new FileReader();
                reader.readAsText(file, encodingType);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        reader.onload = function (e) {
                            var _a;
                            try {
                                resolve((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
                            }
                            catch (err) {
                                reject(err);
                            }
                        };
                    })];
            });
        });
    };
    useEffect(function () {
        if (onFilesUpdated)
            onFilesUpdated({ fileList: fileList, readAsText: readAsText, reset: reset });
    }, [fileList]);
    return (_jsxs("div", __assign({ className: cx("ui-FileSelector", className), css: [commonStyles, styles.root] }, { children: [_jsx("input", { type: "file", ref: fileRef, accept: ".".concat(fileTypes.join(", .")), onChange: handleFileChange, multiple: multiple }), _jsxs(Box, __assign({ display: "flex", alignItems: "center", mb: 10 }, { children: [_jsx(FileSelectorButton, __assign({ onClick: handleSelectClick, iconLeft: _jsx(Icon, { svg: _jsx(UploadIcon, {}), fill: "purple500", size: "xl" }) }, { children: "Select json" })), _jsxs(Box, __assign({ ml: 2 }, { children: [_jsx("div", { children: _jsxs(Caption, __assign({ color: "grey600" }, { children: ["File type(s):", " ", fileTypes.join(", ").replace(/,([^,]*)$/, " and $1")] })) }), _jsx("div", { children: _jsxs(Caption, __assign({ color: "grey600" }, { children: ["Max size: ", filesize(maxFileSize, 1000, 0), " per file"] })) })] }))] })), !fileList.length && (_jsx(Box, __assign({ display: "flex", justifyContent: "center" }, { children: _jsx(Typography, __assign({ variant: "caption" }, { children: noFilesMessage })) }))), !!fileList.length && (_jsxs(_Fragment, { children: [_jsx(H5, __assign({ mb: 5 }, { children: "All Files" })), listing({ fileList: fileList, onRemove: handleRemoveFile })] })), actions && (_jsx(Box, __assign({ display: "flex", justifyContent: "flex-end", gap: 1, mt: 3 }, { children: actions({ fileList: fileList, readAsText: readAsText, reset: reset }) })))] })));
};
FileSelector.defaultProps = {
    fileTypes: ["json"],
    maxFileSize: 10000000,
    noFilesMessage: null,
    multiple: false,
};
export default FileSelector;
//# sourceMappingURL=FileSelector.js.map