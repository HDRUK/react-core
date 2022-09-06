import { Theme } from "@emotion/react";
import { get } from "lodash-es";
import isNil from "lodash-es/isNil";
import {
    CommonStyleProps,
    Responsive,
    ThemeBreakpoints,
    ThemeColors,
    ThemeComponents,
    ThemeFontSizes,
    ThemeFontWeights,
} from "./types";

export const getSize = (
    value: number | undefined,
    { base: { increment, unit } }: Theme
) => {
    return !isNil(value) ? `${value * increment}${unit}` : "";
};

export const getColorStyle = (
    prop: string,
    value: keyof ThemeColors | undefined,
    theme: Theme
) => {
    return !isNil(value)
        ? getStyles(prop, value, theme, (value: string) => {
              return theme.colors[value];
          })
        : "";
};

export const getFontWeight = (
    prop: string,
    value: keyof ThemeFontWeights | undefined,
    theme: Theme
) => {
    return !isNil(value)
        ? getStyles(prop, value, theme, (value: keyof ThemeFontWeights) => {
              return theme.font.weight[value];
          })
        : "";
};

export const getSpacingStyle = (
    prop: string,
    value: Responsive<number | undefined>,
    theme: Theme
) => {
    return !isNil(value)
        ? getStyles(prop, value, theme, (value: number | undefined) => {
              return getSize(value, theme);
          })
        : "";
};

export const getCommonStyle = (
    prop: string,
    value: Responsive<string | number | undefined>,
    theme: Theme
) => {
    return !isNil(value) ? getStyles(prop, value, theme) : "";
};

export const getStyles = (
    propParts: string[] | string,
    value: any,
    theme: Theme,
    formatter?: (value: any) => string | number
) => {
    const styleProp = Array.isArray(propParts)
        ? propParts.join("-").toLowerCase()
        : propParts;
    let styles = ``;

    if (typeof value === "object") {
        const keys = Object.keys(value) as (keyof ThemeBreakpoints)[];

        styles = keys
            .map((breakpoint: keyof ThemeBreakpoints) => {
                return `@media (min-width: ${theme.breakpoints[breakpoint]}) {
                ${getStyle(
                    styleProp,
                    formatter
                        ? formatter(value[breakpoint])
                        : value[breakpoint],
                    theme
                )}
              }`;
            })
            .join("\n");
    } else {
        styles = getStyle(
            styleProp,
            formatter ? formatter(value) : value,
            theme
        );
    }

    return styles;
};

export const getStyle = (styleProp: string, value: any, theme: Theme) => {
    if (styleProp === "font-size") {
        return `${styleProp}: ${
            theme.font.size[value as keyof ThemeFontSizes]
        };`;
    } else {
        return `${styleProp}: ${value};`;
    }
};

export const getCommonStyles = (props: CommonStyleProps, theme: Theme) => {
    const {
        m,
        ml,
        mr,
        mb,
        mt,
        p,
        pr,
        pt,
        pb,
        pl,
        mx,
        my,
        px,
        py,
        width,
        maxWidth,
        minWidth,
        height,
        minHeight,
        maxHeight,
        display,
        alignItems,
        justifyContent,
        flexGrow,
        position,
        top,
        bottom,
        left,
        right,
        overflow,
        gap,
        backgroundColor,
        flexShrink,
        flexBasis,
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas,
        gridColumn,
        direction,
        textAlign,
        flexDirection,
    } = props;

    return `
  ${getColorStyle("background-color", backgroundColor, theme)}
  ${getSpacingStyle("margin", m, theme)}
  ${getSpacingStyle("margin-left", ml || mx, theme)}
  ${getSpacingStyle("margin-right", mr || mx, theme)}
  ${getSpacingStyle("margin-bottom", mb || my, theme)}
  ${getSpacingStyle("margin-top", mt || my, theme)}
      ${getSpacingStyle("padding", p, theme)}
      ${getSpacingStyle("padding-left", pl || px, theme)}
  ${getSpacingStyle("padding-right", pr || px, theme)}
  ${getSpacingStyle("padding-bottom", pb || py, theme)}
  ${getSpacingStyle("padding-top", pt || py, theme)}
    ${getSpacingStyle("gap", gap, theme)}
		${getCommonStyle("width", width, theme)}
		${getCommonStyle("max-width", maxWidth, theme)}
		${getCommonStyle("min-width", minWidth, theme)}
    ${getCommonStyle("height", height, theme)}
		${getCommonStyle("max-Height", maxHeight, theme)}
		${getCommonStyle("min-Height", minHeight, theme)}
    ${getCommonStyle("display", display, theme)}
		${getCommonStyle("align-items", alignItems, theme)}
    ${getCommonStyle("justify-content", justifyContent, theme)}
    ${getCommonStyle("flex-grow", flexGrow, theme)}
    ${getCommonStyle("flex-shrink", flexShrink, theme)}
    ${getCommonStyle("flex-direction", flexDirection, theme)}
    ${getCommonStyle("flex-basis", flexBasis, theme)}
    ${getCommonStyle("position", position, theme)}
    ${getCommonStyle("top", top, theme)}
    ${getCommonStyle("bottom", bottom, theme)}
    ${getCommonStyle("left", left, theme)}
    ${getCommonStyle("right", right, theme)}
    ${getCommonStyle("overflow", overflow, theme)}
    ${getCommonStyle("grid-template-columns", gridTemplateColumns, theme)}
    ${getCommonStyle("grid-template-rows", gridTemplateRows, theme)}
    ${getCommonStyle("grid-template-areas", gridTemplateAreas, theme)}
    ${getCommonStyle("grid-column", gridColumn, theme)}
    ${getCommonStyle("direction", direction, theme)}
    ${getCommonStyle("text-align", textAlign, theme)}
	`;
};

export const replaceThemeVarsInProp = (value: string, theme: Theme) => {
    const themeVars = value ? value.match(/%theme.[^%]+%/g) : [];

    (themeVars || []).forEach((item: string) => {
        value = value.replace(item, get(theme, item.replace(/%|theme\./g, "")));
    });

    return value;
};

export const getComponentStylesFromTheme = (props: any, theme: Theme) => {
    const styles = Object.keys(props).map(prop => {
        const propParts = prop.replace(/([a-z])([A-Z])/g, "$1,$2").split(",");
        const isColor = Object.keys(theme.colors).includes(props[prop]);
        const pseudoSelector = propParts[0];
        let value = isColor ? theme.colors[props[prop]] : props[prop];

        value = replaceThemeVarsInProp(value, theme);

        if (
            pseudoSelector === "hover" ||
            pseudoSelector === "disabled" ||
            pseudoSelector === "focus"
        ) {
            propParts.shift();

            return `
                :${pseudoSelector} {
                   ${getStyles(propParts, value, theme)}
                }
            `;
        }

        return getStyles(propParts, value, theme);
    });

    return styles.join("\n");
};

export const getComponentVariantStyles = (
    component: keyof ThemeComponents,
    variant: string,
    theme: Theme
) => {
    return getComponentStylesFromTheme(
        theme.components[component].variants[variant],
        theme
    );
};

export const getComponentWeightStyles = (
    component: keyof ThemeComponents,
    weight: string,
    theme: Theme
) => {
    return getComponentStylesFromTheme(
        theme.components[component].weights[weight],
        theme
    );
};

export const getSubComponentVariantStyles = (
    component: keyof ThemeComponents,
    subComponent: keyof ThemeComponents,
    variant: string,
    theme: Theme
) => {
    return getComponentStylesFromTheme(
        theme.components[component].elements[subComponent].variants[variant],
        theme
    );
};

export const getComponentSizeStyles = (
    component: keyof ThemeComponents,
    size: string,
    theme: Theme
) => {
    const themeSize = theme.components[component].sizes[size];

    if (typeof themeSize === "string") {
        return themeSize;
    }

    return getComponentStylesFromTheme(
        theme.components[component].sizes[size],
        theme
    );
};

export const getComponentSerializable = (
    component: keyof ThemeComponents,
    theme: Theme
) => {
    return theme.components[component].serializable;
};

export const getComponentGlobals = (
    component: keyof ThemeComponents,
    theme: Theme
) => {
    return theme.components[component].globals;
};

export const getComponentSerializableStyles = (
    component: keyof ThemeComponents,
    theme: Theme
) => {
    return getComponentStylesFromTheme(
        getComponentSerializable(component, theme),
        theme
    );
};

export const getComponentFontSizeStyle = (
    fontSize: ThemeFontSizes,
    theme: Theme
) => {
    return getComponentStylesFromTheme({ fontSize }, theme);
};

export const THEME_FONT_SIZES: ThemeFontSizes = {
    xxs: "10px",
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "40px",
};

export const DEFAULT_THEME: Theme = {
    breakpoints: {
        xxs: "0",
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
    },
    base: {
        increment: 4,
        unit: "px",
    },
    font: {
        size: THEME_FONT_SIZES,
        weight: {
            light: 300,
            normal: 500,
            bold: 700,
        },
    },
    colors: {
        white: "#fff",
        transparent: "transparent",
        inherit: "inherit",
        purple500: "#475DA7",
        platinum50: "#E3F4FB",
        platinum600: "#4E95C8",
        platinum700: "#4682B4",
        green50: "#E2F3F0",
        green100: "#B8E2D8",
        green200: "#8CD1BF",
        green300: "#61BEA6",
        green400: "#3DB28C",
        grey500: "#B3B8BD",
        green600: "#329276",
        green700: "#2c8267",
        green900: "#1C553F",
        grey: "#F6F7F8",
        grey100: "#F6F7F8",
        grey200: "#EEE",
        grey300: "#E2E2E2",
        grey400: "#D0D3D4",
        grey600: "#868E96",
        grey700: "#53575A",
        grey700Alt: "#848E97",
        grey800: "#3C3C3B",
        grey900: "#262626",
        red50: "#FFECF1",
        red600: "#EF3F4B",
        red700: "#DC3645",
        purple: "#475da7",
        purple100: "#C6CEE5",
        purple200: "#A2AED3",
        purple700: "#384B91",
        teal: "#3db28c",
        yellow700: "#F0BB24",
        yellow50: "#FDFCE6",
        brown900: "#856505",
        gold50: "#FFF8E1",
        none: "none",
    },
    components: {
        Alert: {
            globals: {},
            serializable: {
                borderRadius: "4px",
            },
            variants: {
                success: {
                    background: "green50",
                    color: "green400",
                    fill: "green400",
                    borderColor: "green400",
                },
                info: {
                    background: "platinum50",
                    color: "platinum700",
                    fill: "platinum700",
                    borderColor: "platinum700",
                },
                description: {
                    background: "grey200",
                    color: "grey700",
                    fill: "grey700",
                    borderColor: "grey700",
                },
                warning: {
                    background: "gold50",
                    color: "brown900",
                    fill: "yellow700",
                    borderColor: "yellow700",
                },
                danger: {
                    background: "red50",
                    color: "red700",
                    fill: "red700",
                    borderColor: "red700",
                },
            },
        },
        Button: {
            globals: {
                borderRadius: "4px",
            },
            sizes: {
                small: {
                    fontSize: "sm",
                    padding: "4px 6px",
                    height: "30px",
                },
                medium: { fontSize: "md", padding: "8px 12px", height: "40px" },
                large: { fontSize: "lg", padding: "12px 18px", height: "50px" },
            },
            variants: {
                primary: {
                    background: "purple500",
                    hoverBackground: "purple700",
                    disabledBackground: "purple100",
                    borderColor: "purple500",
                    hoverBorderColor: "purple700",
                    disabledBorderColor: "purple100",
                    disabledColor: "purple200",
                    color: "white",
                    fill: "white",
                },
                primaryAlt: {
                    background: "green700",
                    hoverBackground: "green900",
                    disabledBackground: "green100",
                    borderColor: "green700",
                    hoverBorderColor: "green900",
                    disabledBorderColor: "green100",
                    disabledColor: "green300",
                    color: "white",
                    fill: "white",
                },
                secondary: {
                    background: "white",
                    hoverBackground: "green400",
                    disabledBackground: "white",
                    borderColor: "green400",
                    hoverBorderColor: "green400",
                    disabledBorderColor: "green200",
                    color: "grey800",
                    fill: "grey800",
                    hoverColor: "white",
                    disabledColor: "grey500",
                },
                secondaryAlt: {
                    background: "white",
                    hoverBackground: "white",
                    disabledBackground: "white",
                    borderColor: "white",
                    hoverBorderColor: "white",
                    disabledBorderColor: "white",
                    disabledColor: "grey300",
                    color: "grey800",
                    fill: "grey800",
                },
                tertiary: {
                    background: "grey200",
                    hoverBackground: "grey300",
                    disabledBackground: "grey200",
                    borderColor: "grey200",
                    hoverBorderColor: "grey300",
                    color: "grey800",
                    fill: "grey800",
                    disabledBorderColor: "grey200",
                    disabledColor: "grey500",
                },
            },
        },
        Card: {
            globals: {},
            serializable: {
                boxShadow: "1px 1px 3px 0 rgb(0 0 0 / 9%)",
                backgroundColor: "white",
                borderRadius: "2px",
            },
        },
        CardHeader: {
            globals: {},
            serializable: {
                borderColor: "grey200",
                fontSize: "xl",
                fontWeight: "500",
                padding: "24px",
            },
        },
        CardBody: {
            globals: {},
            serializable: {
                padding: "24px",
            },
        },
        CardFooter: {
            globals: {},
            serializable: {
                borderColor: "grey200",
                padding: "16px",
            },
        },
        Cta: {},
        Dimmer: {
            globals: {},
            serializable: {
                backgroundColor: "rgba(0,0,0,0.15)",
            },
        },
        FeatureContentHorizontal: {
            globals: { cardOffset: "-22px" },
        },
        FeatureContentVertical: {
            globals: {
                cardOffset: "-12px",
            },
        },
        FileSelector: {},
        FileSelectorButton: {
            globals: {},
            serializable: {
                fill: "purple500",
            },
        },
        FileSelectorListing: {
            globals: {},
            serializable: {
                actionsFill: "purple500",
            },
        },
        Icon: {
            sizes: THEME_FONT_SIZES,
        },
        IconButton: {
            variants: {
                primary: {
                    background: "white",
                    hoverBackground: "purple500",
                    fill: "purple500",
                    hoverFill: "white",
                    borderColor: "purple500",
                },
                secondary: {
                    background: "white",
                    hoverBackground: "green400",
                    borderColor: "green400",
                    fill: "green400",
                    hoverFill: "white",
                },
                tertiary: {
                    background: "white",
                    hoverBackground: "grey400",
                    borderColor: "grey400",
                    fill: "grey400",
                    hoverFill: "white",
                },
            },
        },
        Input: {
            globals: {},
            serializable: {
                borderRadius: "4px",
            },
            sizes: {
                small: {
                    height: "30px",
                },
                default: {
                    height: "40px",
                },
                large: {
                    height: "50px",
                },
            },
            variants: {
                primary: {
                    background: "white",
                    borderColor: "grey400",
                    disabledBorderColor: "grey400",
                    focusBorderColor: "green400",
                },
                secondary: {
                    background: "grey100",
                    borderColor: "grey100",
                    disabledBorderColor: "grey100",
                    focusBorderColor: "green400",
                },
            },
        },
        Field: {
            globals: {
                focus: {
                    boxShadowColor: "green400",
                },
            },
            serializable: {
                backgroundColor: "grey100",
                padding: "8px 24px",
            },
        },
        Label: {
            globals: { disabledColor: "grey500" },
        },
        Message: {
            globals: {},
            serializable: {
                fontSize: "sm",
            },
            variants: {
                success: {
                    color: "green400",
                },
                info: {
                    color: "platinum700",
                },
                warning: {
                    color: "brown900",
                },
                danger: {
                    color: "red700",
                },
                description: {
                    color: "grey700",
                },
            },
        },
        Modal: {},
        Tag: {
            sizes: {
                small: {
                    fontSize: "xs",
                    padding: "2px 4px",
                },
                medium: {
                    fontSize: "sm",
                    padding: "2px 8px",
                    height: "22px",
                },
                large: {
                    fontSize: "lg",
                    padding: "4px 12px",
                    height: "30px",
                },
            },
            variants: {
                success: {
                    background: "green400",
                    color: "white",
                },
                info: {
                    background: "platinum600",
                    color: "white",
                },
                warning: {
                    background: "yellow700",
                    color: "white",
                },
                danger: {
                    background: "red700",
                    color: "white",
                },
            },
        },
        Typography: {
            variants: {
                h1: {
                    fontSize: "5xl",
                    fontWeight: "700",
                    color: "grey900",
                },
                h2: {
                    fontSize: "4xl",
                    fontWeight: "700",
                    color: "grey900",
                },
                h3: {
                    fontSize: "3xl",
                    fontWeight: "700",
                    color: "grey900",
                },
                h4: {
                    fontSize: "2xl",
                    fontWeight: "700",
                    color: "grey900",
                },
                h5: {
                    fontSize: "xl",
                    fontWeight: "700",
                    color: "grey900",
                },
                h6: {
                    fontSize: "lg",
                    fontWeight: "400",
                    color: "grey900",
                },
                body: {
                    fontSize: "md",
                    lineHeight: "20px",
                },
                caption: {
                    fontSize: "sm",
                    lineHeight: "16px",
                },
                small: {
                    fontSize: "xs",
                    lineHeight: "14px",
                },
                tiny: {
                    fontSize: "xxs",
                    lineHeight: "14px",
                },
            },
        },
    },
};
