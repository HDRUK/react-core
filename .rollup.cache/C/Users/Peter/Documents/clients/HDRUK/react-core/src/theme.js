import isNil from "lodash-es/isNil";
export var getSize = function (value, _a) {
    var _b = _a.base, increment = _b.increment, unit = _b.unit;
    return !isNil(value) ? "".concat(value * increment).concat(unit) : "";
};
export var getColorStyle = function (prop, value, theme) {
    return !isNil(value) ? getCommonStyle(prop, theme.colors[value]) : "";
};
export var getSpacingStyle = function (prop, value, theme) {
    return !isNil(value) ? "".concat(prop, ": ").concat(getSize(value, theme), ";") : "";
};
export var getCommonStyle = function (prop, value) {
    return !isNil(value) ? "".concat(prop, ": ").concat(value, ";") : "";
};
export var getStyle = function (propParts, value, theme) {
    var styleProp = propParts.join("-").toLowerCase();
    if (styleProp === "font-size") {
        return "".concat(styleProp, ": ").concat(theme.font.size[value], ";");
    }
    return "".concat(styleProp, ": ").concat(value, ";");
};
export var getCommonStyles = function (props, theme) {
    var m = props.m, ml = props.ml, mr = props.mr, mb = props.mb, mt = props.mt, p = props.p, pr = props.pr, pt = props.pt, pb = props.pb, pl = props.pl, mx = props.mx, my = props.my, px = props.px, py = props.py, width = props.width, maxWidth = props.maxWidth, minWidth = props.minWidth, height = props.height, minHeight = props.minHeight, maxHeight = props.maxHeight, display = props.display, alignItems = props.alignItems, justifyContent = props.justifyContent, flexGrow = props.flexGrow, position = props.position, top = props.top, bottom = props.bottom, left = props.left, right = props.right, overflow = props.overflow, gap = props.gap, backgroundColor = props.backgroundColor, flexShrink = props.flexShrink, flexBasis = props.flexBasis, gridTemplateColumns = props.gridTemplateColumns, gridTemplateRows = props.gridTemplateRows, gridTemplateAreas = props.gridTemplateAreas, gridColumn = props.gridColumn, direction = props.direction, textAlign = props.textAlign, flexDirection = props.flexDirection;
    return "\n  ".concat(getColorStyle("background-color", backgroundColor, theme), "\n  ").concat(getSpacingStyle("margin", m, theme), "\n  ").concat(getSpacingStyle("margin-left", ml || mx, theme), "\n  ").concat(getSpacingStyle("margin-right", mr || mx, theme), "\n  ").concat(getSpacingStyle("margin-bottom", mb || my, theme), "\n  ").concat(getSpacingStyle("margin-top", mt || my, theme), "\n      ").concat(getSpacingStyle("padding", p, theme), "\n      ").concat(getSpacingStyle("padding-left", pl || px, theme), "\n  ").concat(getSpacingStyle("padding-right", pr || px, theme), "\n  ").concat(getSpacingStyle("padding-bottom", pb || py, theme), "\n  ").concat(getSpacingStyle("padding-top", pt || py, theme), "\n    ").concat(getSpacingStyle("gap", gap, theme), "\n\t\t").concat(getCommonStyle("width", width), "\n\t\t").concat(getCommonStyle("max-width", maxWidth), "\n\t\t").concat(getCommonStyle("min-width", minWidth), "\n    ").concat(getCommonStyle("height", height), "\n\t\t").concat(getCommonStyle("max-Height", maxHeight), "\n\t\t").concat(getCommonStyle("min-Height", minHeight), "\n    ").concat(getCommonStyle("display", display), "\n\t\t").concat(getCommonStyle("align-items", alignItems), "\n    ").concat(getCommonStyle("justify-content", justifyContent), "\n    ").concat(getCommonStyle("flex-grow", flexGrow), "\n    ").concat(getCommonStyle("flex-shrink", flexShrink), "\n    ").concat(getCommonStyle("flex-direction", flexDirection), "\n    ").concat(getCommonStyle("flex-basis", flexBasis), "\n    ").concat(getCommonStyle("position", position), "\n    ").concat(getCommonStyle("top", top), "\n    ").concat(getCommonStyle("bottom", bottom), "\n    ").concat(getCommonStyle("left", left), "\n    ").concat(getCommonStyle("right", right), "\n    ").concat(getCommonStyle("overflow", overflow), "\n    ").concat(getCommonStyle("grid-template-columns", gridTemplateColumns), "\n    ").concat(getCommonStyle("grid-template-rows", gridTemplateRows), "\n    ").concat(getCommonStyle("grid-template-areas", gridTemplateAreas), "\n    ").concat(getCommonStyle("grid-column", gridColumn), "\n    ").concat(getCommonStyle("direction", direction), "\n    ").concat(getCommonStyle("text-align", textAlign), "\n\t");
};
export var getComponentStylesFromTheme = function (props, theme) {
    var styles = Object.keys(props).map(function (prop) {
        var propParts = prop.replace(/([a-z])([A-Z])/g, "$1,$2").split(",");
        var isColor = Object.keys(theme.colors).includes(props[prop]);
        var value = isColor ? theme.colors[props[prop]] : props[prop];
        var pseudoSelector = propParts[0];
        if (pseudoSelector === "hover" ||
            pseudoSelector === "disabled" ||
            pseudoSelector === "focus") {
            propParts.shift();
            return "\n                :".concat(pseudoSelector, " {\n                   ").concat(getStyle(propParts, value, theme), "\n                }\n            ");
        }
        return getStyle(propParts, value, theme);
    });
    return styles.join("\n");
};
export var getComponentVariantStyles = function (component, variant, theme) {
    return getComponentStylesFromTheme(theme.components[component].variants[variant], theme);
};
export var getSubComponentVariantStyles = function (component, subComponent, variant, theme) {
    return getComponentStylesFromTheme(theme.components[component].elements[subComponent].variants[variant], theme);
};
export var getComponentSizeStyles = function (component, size, theme) {
    var themeSize = theme.components[component].sizes[size];
    if (typeof themeSize === "string") {
        return themeSize;
    }
    return getComponentStylesFromTheme(theme.components[component].sizes[size], theme);
};
export var getComponentGlobals = function (component, theme) {
    return theme.components[component].globals;
};
export var getComponentGlobalStyles = function (component, theme) {
    return getComponentStylesFromTheme(getComponentGlobals(component, theme), theme);
};
export var getComponentFontSizeStyle = function (fontSize, theme) {
    return getComponentStylesFromTheme({ fontSize: fontSize }, theme);
};
export var THEME_INPUT = {
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
            borderColor: "grey200",
        },
        secondary: {
            background: "grey100",
            borderColor: "grey100",
        },
    },
};
export var THEME_FONT_SIZES = {
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
export var THEME_ICON_BUTTON = {
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
};
export var THEME_BUTTON = {
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
};
export var DEFAULT_THEME = {
    base: {
        increment: 4,
        unit: "px",
    },
    font: {
        size: THEME_FONT_SIZES,
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
            globals: {
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
        Button: THEME_BUTTON,
        Card: {
            globals: {
                boxShadow: "1px 1px 3px 0 rgb(0 0 0 / 9%)",
                backgroundColor: "white",
                borderRadius: "2px",
            },
        },
        CardHeader: {
            globals: {
                borderColor: "grey200",
                fontSize: "xl",
                fontWeight: "500",
                padding: "24px",
            },
        },
        CardBody: {
            globals: {
                padding: "24px",
            },
        },
        CardFooter: {
            globals: {
                borderColor: "grey200",
                padding: "16px",
            },
        },
        Cta: {},
        Dimmer: {
            globals: {
                backgroundColor: "rgba(0,0,0,0.15)",
            },
        },
        FeatureContentHorizontal: {
            globals: {
                cardOffset: "-22px",
            },
        },
        FeatureContentVertical: {
            globals: {
                cardOffset: "-12px",
            },
        },
        FileSelector: {},
        FileSelectorButton: {
            globals: {
                fill: "purple500",
            },
        },
        FileSelectorListing: {
            globals: {
                actionsFill: "purple500",
            },
        },
        Icon: {
            sizes: THEME_FONT_SIZES,
        },
        IconButton: THEME_ICON_BUTTON,
        Input: {
            globals: {
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
        Label: {
            globals: {
                disabledColor: "grey500",
            },
        },
        Message: {
            globals: {
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
//# sourceMappingURL=theme.js.map