/** @jsxImportSource @emotion/react */

import { cx } from "@emotion/css";
import { filesize } from "humanize";
import { useCallback, useEffect, useRef, useState } from "react";

import * as styles from "./FileSelector.styles";
import { FileSelectorProps } from "./FileSelector.types";
import FileSelectorButton from "./FileSelectorButton";

import useCommonStyles from "../../hooks/useCommonStyles";
import { ReactComponent as UploadIcon } from "../../images/icons/upload.svg";
import Box from "../Box";
import Icon from "../Icon";
import Typography, { H5 } from "../Typography";
import Caption from "../Typography/Caption";

const FileSelector = ({
  listing,
  fileTypes,
  maxFileSize,
  noFilesMessage,
  multiple,
  actions,
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
  className,
  onFilesUpdated,
}: FileSelectorProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState([]);

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
  });

  const handleSelectClick = useCallback(() => {
    const { current } = fileRef;

    if (current) {
      current.click();
    }
  }, [fileRef.current]);

  const handleFileChange = useCallback((e) => {
    setFileList(e.target.files);
  }, []);

  const handleRemoveFile = useCallback(
    (name: string) => {
      const files = fileList.filter((file: any) => file.name !== name);

      if (fileRef.current) fileRef.current.value = "";

      setFileList(files);
    },
    [fileList]
  );

  const reset = useCallback(() => {
    if (fileRef.current) fileRef.current.value = "";

    setFileList([]);
  }, [fileRef]);

  const readAsText = async (file: any, encodingType = "UTF-8") => {
    const reader = new FileReader();
    reader.readAsText(file, encodingType);

    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        try {
          resolve(e.target?.result);
        } catch (err) {
          reject(err);
        }
      };
    });
  };

  useEffect(() => {
    if (onFilesUpdated) onFilesUpdated({ fileList, readAsText, reset });
  }, [fileList]);

  return (
    <div
      className={cx("ui-FileSelector", className)}
      css={[commonStyles, styles.root]}
    >
      <input
        type="file"
        ref={fileRef}
        accept={`.${fileTypes.join(", .")}`}
        onChange={handleFileChange}
        multiple={multiple}
      />
      <Box display="flex" alignItems="center" mb={10}>
        <FileSelectorButton
          onClick={handleSelectClick}
          iconLeft={<Icon svg={<UploadIcon />} fill="purple500" size="xl" />}
        >
          Select json
        </FileSelectorButton>
        <Box ml={2}>
          <div>
            <Caption color="grey600">
              File type(s):{" "}
              {fileTypes.join(", ").replace(/,([^,]*)$/, " and $1")}
            </Caption>
          </div>
          <div>
            <Caption color="grey600">
              Max size: {filesize(maxFileSize, 1000, 0)} per file
            </Caption>
          </div>
        </Box>
      </Box>
      {!fileList.length && (
        <Box display="flex" justifyContent="center">
          <Typography variant="caption">{noFilesMessage}</Typography>
        </Box>
      )}
      {!!fileList.length && (
        <>
          <H5 mb={5}>All Files</H5>
          {listing({ fileList, onRemove: handleRemoveFile })}
        </>
      )}
      {actions && (
        <Box display="flex" justifyContent="flex-end" gap={1} mt={3}>
          {actions({ fileList, readAsText, reset })}
        </Box>
      )}
    </div>
  );
};

FileSelector.defaultProps = {
  fileTypes: ["json"],
  maxFileSize: 10000000,
  noFilesMessage: null,
  multiple: false,
};

export default FileSelector;
