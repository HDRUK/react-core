export declare type CommonVariants = "primary" | "secondary" | "tertiary";
export declare type CommonSizes = "small" | "medium" | "large";
export interface CommonStyleProps {
    overflow?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    p?: number;
    pl?: number;
    pb?: number;
    pt?: number;
    pr?: number;
    py?: number;
    px?: number;
    m?: number;
    ml?: number;
    mb?: number;
    mt?: number;
    mr?: number;
    mx?: number;
    my?: number;
    flexGrow?: string;
    flexShrink?: string;
    flexBasis?: string;
    position?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    gap?: number;
    backgroundColor?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    gridColumn?: string;
    direction?: string;
    textAlign?: string;
    flexDirection?: string;
}
export declare type ComponentStyleProps = MarginStyleProps & WidthStyleProps;
export declare type ComponentMarginProps = MarginStyleProps;
export declare type ComponentWidthProps = WidthStyleProps;
export declare type ComponentHeightProps = HeightStyleProps;
export interface MarginStyleProps {
    m?: number;
    ml?: number;
    mb?: number;
    mt?: number;
    mr?: number;
    mx?: number;
    my?: number;
}
export interface WidthStyleProps {
    width?: string;
    minWidth?: string;
    maxWidth?: string;
}
export interface HeightStyleProps {
    height?: string;
    minHeight?: string;
    maxHeight?: string;
}
export interface ThemeFontSizes {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
}
export declare type ThemeColors = Record<string, string>;
export interface ThemeComponents {
    Alert: any;
    Button: any;
    Card: any;
    CardHeader: any;
    CardBody: any;
    CardFooter: any;
    Cta: any;
    Dimmer: any;
    FeatureContentHorizontal: any;
    FeatureContentVertical: any;
    FileSelector: any;
    FileSelectorButton: any;
    FileSelectorListing: any;
    Message: any;
    Modal: any;
    Icon: any;
    Input: any;
    Label: any;
    Tag: any;
    Typography: any;
}
export interface Theme {
    base: {
        increment: number;
        unit: string;
    };
    font: {
        size: ThemeFontSizes;
    };
    colors: ThemeColors;
    components: ThemeComponents;
}
