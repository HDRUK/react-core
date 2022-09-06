export type Responsive<T> = T | ThemeBreakpoints;

export type CommonVariants = "primary" | "secondary" | "tertiary";

export type CommonSizes = "small" | "medium" | "large";

export interface CommonStyleProps
    extends MarginStyleProps,
        WidthStyleProps,
        HeightStyleProps {
    overflow?: Responsive<string>;
    display?: Responsive<string>;
    alignItems?: Responsive<string>;
    justifyContent?: Responsive<string>;
    p?: Responsive<number>;
    pl?: Responsive<number>;
    pb?: Responsive<number>;
    pt?: Responsive<number>;
    pr?: Responsive<number>;
    py?: Responsive<number>;
    px?: Responsive<number>;
    flexGrow?: Responsive<string>;
    flexShrink?: Responsive<string>;
    flexBasis?: Responsive<string>;
    position?: Responsive<string>;
    top?: Responsive<string>;
    bottom?: Responsive<string>;
    left?: Responsive<string>;
    right?: Responsive<string>;
    gap?: Responsive<number>;
    backgroundColor?: string;
    gridTemplateColumns?: Responsive<string>;
    gridTemplateRows?: Responsive<string>;
    gridTemplateAreas?: Responsive<string>;
    gridColumn?: Responsive<string>;
    direction?: Responsive<string>;
    textAlign?: Responsive<string>;
    flexDirection?: Responsive<string>;
}

export type ComponentStyleProps = MarginStyleProps & WidthStyleProps;

export type ComponentMarginProps = MarginStyleProps;

export type ComponentWidthProps = WidthStyleProps;

export type ComponentHeightProps = HeightStyleProps;

export interface ThemeBreakpoints {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

export interface MarginStyleProps {
    m?: Responsive<number>;
    ml?: Responsive<number>;
    mb?: Responsive<number>;
    mt?: Responsive<number>;
    mr?: Responsive<number>;
    mx?: Responsive<number>;
    my?: Responsive<number>;
}

export interface WidthStyleProps {
    width?: Responsive<string>;
    minWidth?: Responsive<string>;
    maxWidth?: Responsive<string>;
}

export interface HeightStyleProps {
    height?: Responsive<string>;
    minHeight?: Responsive<string>;
    maxHeight?: Responsive<string>;
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

export type ThemeColors = Record<string, string>;

export type MessageVariants =
    | "success"
    | "warning"
    | "info"
    | "danger"
    | "description";
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
    IconButton: any;
    Input: any;
    Label: any;
    Tag: any;
    Typography: any;
}

export interface Theme {
    breakpoints: ThemeBreakpoints;
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
