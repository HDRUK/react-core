import isNil from "lodash/isNil";
import merge from "lodash/merge";

export const getSize = (value, { base: { increment, unit } }) => {
  return `${value * increment}${unit}`;
};

export const getSpacingStyle = (prop, value, theme) => {
  return typeof value === "number" ? `${prop}: ${getSize(value, theme)};` : "";
};

export const getCommonStyle = (prop, value) => {
  return !isNil(value) ? `${prop}: ${value};` : "";
};

export const getStyle = (propParts, value, theme) => {
  const styleProp = propParts.join("-").toLowerCase();

  if (styleProp === "font-size") {
    return `${styleProp}: ${theme.font.size[value]};`;
  }

  return `${styleProp}: ${value};`;
};

export const getCommonStyles = (props, theme) => {
  const {
    ml,
    mr,
    mb,
    mt,
    p,
    pr,
    pt,
    pb,
    pl,
    width,
    maxWidth,
    minWidth,
    display,
    alignItems,
    justifyContent,
    flexGrow,
    position,
  } = props;

  return `
		${getSpacingStyle("margin-left", ml, theme)}
		${getSpacingStyle("margin-right", mr, theme)}
		${getSpacingStyle("margin-bottom", mb, theme)}
		${getSpacingStyle("margin-top", mt, theme)}
    ${getSpacingStyle("padding", p, theme)}
    ${getSpacingStyle("padding-left", pl, theme)}
		${getSpacingStyle("padding-right", pr, theme)}
		${getSpacingStyle("padding-bottom", pb, theme)}
		${getSpacingStyle("padding-top", pt, theme)}
		${getCommonStyle("width", width)}
		${getCommonStyle("max-width", maxWidth)}
		${getCommonStyle("min-width", minWidth)}
    ${getCommonStyle("display", display)}
		${getCommonStyle("align-items", alignItems)}
    ${getCommonStyle("justify-content", justifyContent)}
    ${getCommonStyle("flex-grow", flexGrow)}
    ${getCommonStyle("position", position)}
	`;
};

export const getComponentStylesFromTheme = (props, theme) => {
  const styles = Object.keys(props).map((prop) => {
    const propParts = prop.replace(/([a-z])([A-Z])/g, "$1,$2").split(",");
    const isColor = Object.keys(theme.colors).includes(props[prop]);
    const value = isColor ? theme.colors[props[prop]] : props[prop];
    const pseudoSelector = propParts[0];

    if (
      pseudoSelector === "hover" ||
      pseudoSelector === "disabled" ||
      pseudoSelector === "focus"
    ) {
      propParts.shift();

      return `
                :${pseudoSelector} {
                   ${getStyle(propParts, value, theme)}
                }
            `;
    }

    return getStyle(propParts, value, theme);
  });

  return styles.join("\n");
};

export const getComponentVariant = (component, variant, theme) => {
  return getComponentStylesFromTheme(
    theme.components[component].variants[variant],
    theme
  );
};

export const getComponentSize = (component, size, theme) => {
  return getComponentStylesFromTheme(
    theme.components[component].sizes[size],
    theme
  );
};

export const getFontSizeStyle = (fontSize, theme) => {
  return getComponentStylesFromTheme({ fontSize }, theme);
};

export const THEME_INPUT = {
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

export const THEME_FONT_SIZES = {
  xxs: "8px",
  xs: "10px",
  sm: "12px",
  md: "14px",
  default: "14px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "32px",
  "5xl": "40px",
};

export const THEME_BUTTON = {
  sizes: {
    small: {
      fontSize: "md",
      padding: "8px 12px",
    },
    medium: { fontSize: "md", padding: "11px 16px" },
    large: { fontSize: "lg", padding: "14px 20px" },
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

export const DEFAULT_THEME = {
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
    platinum700: "#4682B4",
    green50: "#E2F3F0",
    green200: "#8CD1BF",
    green400: "#3DB28C",
    grey500: "#B3B8BD",
    green600: "#329276",
    green700: "#2c8267",
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
    Cta: {
      sizes: {
        small: {
          fontSize: "sm",
        },
        medium: {
          fontSize: "md",
        },
        large: {
          fontSize: "xl",
        },
      },
    },
    IconButton: merge({}, THEME_BUTTON, {
      sizes: {
        small: {
          padding: "6px",
        },
        medium: { padding: "10px" },
        large: { padding: "14px" },
      },
      variants: {
        primary: {
          fill: "purple500",
          color: "purple500",
          background: "none",
          borderColor: "transparent",
          hoverColor: "white",
          hoverFill: "white",
          disabledFill: "purple500",
        },
        secondary: {
          fill: "purple500",
          color: "purple500",
          background: "none",
          borderColor: "transparent",
          hoverFill: "white",
          disabledFill: "purple500",
        },
        tertiary: {
          fill: "purple500",
          color: "purple500",
          background: "none",
          borderColor: "transparent",
        },
      },
    }),
    Checkbox: {
      height: "20px",
      width: "20px",
      fontSize: THEME_FONT_SIZES.md,
      disabledColor: "grey600",
      variants: {
        primary: {
          borderColor: "grey200",
          checkedBackground: "green700",
          hoverBackground: "grey200",
          disabledBackground: "grey100",
        },
        secondary: {
          borderColor: "grey200",
          checkedBackground: "grey700",
          hoverBackground: "grey200",
          disabledBackground: "grey100",
        },
      },
    },
    Icon: {
      sizes: THEME_FONT_SIZES,
    },
    Input: THEME_INPUT,
    Dropdown: THEME_INPUT,
    Textarea: THEME_INPUT,
    Typeahead: THEME_INPUT,
    Typography: {
      variants: {
        h1: {
          fontSize: THEME_FONT_SIZES["5xl"],
          fontWeight: "700",
          color: "grey900",
        },
        h2: {
          fontSize: THEME_FONT_SIZES["4xl"],
          fontWeight: "500",
          color: "grey900",
        },
        h3: {
          fontSize: THEME_FONT_SIZES["3xl"],
          fontWeight: "500",
          color: "grey900",
        },
        h4: {
          fontSize: THEME_FONT_SIZES["2xl"],
          fontWeight: "500",
          color: "grey900",
        },
        h5: {
          fontSize: THEME_FONT_SIZES.xl,
          fontWeight: "500",
          color: "grey900",
        },
        h6: {
          fontSize: THEME_FONT_SIZES.lg,
          fontWeight: "500",
          color: "grey900",
        },
        body: {
          fontSize: THEME_FONT_SIZES.md,
          lineHeight: "20px",
        },
        caption: {
          fontSize: THEME_FONT_SIZES.sm,
          lineHeight: "16px",
        },
        tiny: {
          fontSize: THEME_FONT_SIZES.xs,
          lineHeight: "14px",
        },
      },
    },
  },
};
