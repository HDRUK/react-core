export type CommonVariants = "primary" | "secondary" | "tertiary";

export type CommonSizes = "small" | "medium" | "large";

export interface CommonStyleProps {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  p?: number;
  pl?: number;
  pb?: number;
  pt?: number;
  pr?: number;
  m?: number;
  ml?: number;
  mb?: number;
  mt?: number;
  mr?: number;
  flexGrow?: string;
  position?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

export type ComponentStyleProps = MarginStyleProps & WidthStyleProps;

export interface MarginStyleProps {
  m?: number;
  ml?: number;
  mb?: number;
  mt?: number;
  mr?: number;
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

export interface ThemeColors {
  [key: string]: string;
}

export interface ThemeComponents {
  [key: string]: string;
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
