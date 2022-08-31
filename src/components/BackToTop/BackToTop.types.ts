import { CommonVariants, ThemeFontSizes } from "../../types";

export interface BackToTopProps {
    scrollOffset?: number;
    variant: CommonVariants;
    size: keyof ThemeFontSizes;
    className: string;
}
