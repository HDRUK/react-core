import isNil from "lodash-es/isNil";

export const getSize = (value, { base: { increment, unit } }) => {
  return `${value * increment}${unit}`;
};

export const getColorStyle = (prop, value, theme) => {
  return getCommonStyle(prop, theme.colors[value]);
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
		${getCommonStyle("width", width)}
		${getCommonStyle("max-width", maxWidth)}
		${getCommonStyle("min-width", minWidth)}
    ${getCommonStyle("height", height)}
		${getCommonStyle("max-Height", maxHeight)}
		${getCommonStyle("min-Height", minHeight)}
    ${getCommonStyle("display", display)}
		${getCommonStyle("align-items", alignItems)}
    ${getCommonStyle("justify-content", justifyContent)}
    ${getCommonStyle("flex-grow", flexGrow)}
    ${getCommonStyle("flex-shrink", flexShrink)}
    ${getCommonStyle("flex-direction", flexDirection)}
    ${getCommonStyle("flex-basis", flexBasis)}
    ${getCommonStyle("position", position)}
    ${getCommonStyle("top", top)}
    ${getCommonStyle("bottom", bottom)}
    ${getCommonStyle("left", left)}
    ${getCommonStyle("right", right)}
    ${getCommonStyle("overflow", overflow)}
    ${getCommonStyle("grid-template-columns", gridTemplateColumns)}
    ${getCommonStyle("grid-template-rows", gridTemplateRows)}
    ${getCommonStyle("grid-template-areas", gridTemplateAreas)}
    ${getCommonStyle("grid-column", gridColumn)}
    ${getCommonStyle("direction", direction)}
    ${getCommonStyle("text-align", textAlign)}
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

export const getComponentVariantStyles = (component, variant, theme) => {
  return getComponentStylesFromTheme(
    theme.components[component].variants[variant],
    theme
  );
};

export const getComponentSizeStyles = (component, size, theme) => {
  const themeSize = theme.components[component].sizes[size];

  if (typeof themeSize === "string") {
    return themeSize;
  }

  return getComponentStylesFromTheme(
    theme.components[component].sizes[size],
    theme
  );
};

export const getComponentGlobals = (component, theme) => {
  return theme.components[component].globals;
};

export const getComponentGlobalStyles = (component, theme) => {
  return getComponentStylesFromTheme(
    getComponentGlobals(component, theme),
    theme
  );
};

export const getComponentFontSizeStyle = (fontSize, theme) => {
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
  xxs: "10px",
  xs: "12px",
  sm: "13px",
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
      height: "34px",
    },
    medium: { fontSize: "md", padding: "8px 16px", height: "40px" },
    large: { fontSize: "lg", padding: "10px 20px", height: "46px" },
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
    Input: {
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
        error: {
          color: "red700",
        },
        description: {
          color: "grey700",
        },
      },
    },
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
