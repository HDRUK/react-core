import { ComponentProps, MouseEvent, ReactElement } from "react";
import { ComponentStyleProps, ComponentHeightProps } from "../../types";
import { ButtonProps } from "../Button/Button.types";
export interface FileSelectorActionsHelpers {
    fileList: any[];
    readAsText(file: any, encodingType: string): Promise<any>;
    reset(): void;
}
export interface FileSelectorListingActionsHelpers {
    onRemove(name: string): void;
}
export interface FileSelectorButtonProps extends Omit<ButtonProps, "variant" | "size"> {
    onClick(e: MouseEvent<HTMLButtonElement>): void;
}
export interface FileSelectorListingProps {
    fileList: any[];
    actions(props: FileSelectorListingActionsHelpers): ReactElement;
    onRemove(name: string): void;
}
export interface FileSelectorProps extends ComponentProps<"div">, ComponentStyleProps, ComponentHeightProps {
    fileTypes: string[];
    maxFileSize: number;
    multiple: boolean;
    listing(props: Omit<FileSelectorListingProps, "actions">): ReactElement;
    actions(props: FileSelectorActionsHelpers): ReactElement;
    noFilesMessage?: ReactElement;
    onFilesUpdated?(props: FileSelectorActionsHelpers): void;
}
