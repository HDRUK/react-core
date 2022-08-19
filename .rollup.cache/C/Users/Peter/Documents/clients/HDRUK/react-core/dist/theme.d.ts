import { Theme } from "@emotion/react";
import { CommonStyleProps, ThemeColors, ThemeComponents, ThemeFontSizes } from "./types";
export declare const getSize: (value: number | undefined, { base: { increment, unit } }: Theme) => string;
export declare const getColorStyle: (prop: string, value: keyof ThemeColors | undefined, theme: Theme) => string;
export declare const getSpacingStyle: (prop: string, value: number | undefined, theme: Theme) => string;
export declare const getCommonStyle: (prop: string, value: string | number | undefined) => string;
export declare const getStyle: (propParts: string[], value: keyof ThemeFontSizes, theme: Theme) => string;
export declare const getCommonStyles: (props: CommonStyleProps, theme: Theme) => string;
export declare const getComponentStylesFromTheme: (props: any, theme: Theme) => string;
export declare const getComponentVariantStyles: (component: keyof ThemeComponents, variant: string, theme: Theme) => string;
export declare const getComponentSizeStyles: (component: keyof ThemeComponents, size: string, theme: Theme) => string;
export declare const getComponentGlobals: (component: keyof ThemeComponents, theme: Theme) => any;
export declare const getComponentGlobalStyles: (component: keyof ThemeComponents, theme: Theme) => string;
export declare const getComponentFontSizeStyle: (fontSize: ThemeFontSizes, theme: Theme) => string;
export declare const THEME_INPUT: {
    sizes: {
        small: {
            height: string;
        };
        default: {
            height: string;
        };
        large: {
            height: string;
        };
    };
    variants: {
        primary: {
            background: string;
            borderColor: string;
        };
        secondary: {
            background: string;
            borderColor: string;
        };
    };
};
export declare const THEME_FONT_SIZES: ThemeFontSizes;
export declare const THEME_BUTTON: {
    sizes: {
        small: {
            fontSize: string;
            padding: string;
            height: string;
        };
        medium: {
            fontSize: string;
            padding: string;
            height: string;
        };
        large: {
            fontSize: string;
            padding: string;
            height: string;
        };
    };
    variants: {
        primary: {
            background: string;
            hoverBackground: string;
            disabledBackground: string;
            borderColor: string;
            hoverBorderColor: string;
            disabledBorderColor: string;
            disabledColor: string;
            color: string;
            fill: string;
        };
        primaryAlt: {
            background: string;
            hoverBackground: string;
            disabledBackground: string;
            borderColor: string;
            hoverBorderColor: string;
            disabledBorderColor: string;
            disabledColor: string;
            color: string;
            fill: string;
        };
        secondary: {
            background: string;
            hoverBackground: string;
            disabledBackground: string;
            borderColor: string;
            hoverBorderColor: string;
            disabledBorderColor: string;
            color: string;
            fill: string;
            hoverColor: string;
            disabledColor: string;
        };
        secondaryAlt: {
            background: string;
            hoverBackground: string;
            disabledBackground: string;
            borderColor: string;
            hoverBorderColor: string;
            disabledBorderColor: string;
            disabledColor: string;
            color: string;
            fill: string;
        };
        tertiary: {
            background: string;
            hoverBackground: string;
            disabledBackground: string;
            borderColor: string;
            hoverBorderColor: string;
            color: string;
            fill: string;
            disabledBorderColor: string;
            disabledColor: string;
        };
    };
};
export declare const DEFAULT_THEME: Theme;
