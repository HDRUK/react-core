/** @jsxImportSource @emotion/react */

import Button from "../Button";
import { FileSelectorButtonProps } from "./FileSelector.types";

const FileSelectorButton = ({
  onClick,
  iconLeft,
  children,
}: FileSelectorButtonProps) => {
  return (
    <Button variant="tertiary" onClick={onClick} iconLeft={iconLeft}>
      {children}
    </Button>
  );
};

FileSelectorButton.defaultProps = {
  children: "Select file",
};

export default FileSelectorButton;
