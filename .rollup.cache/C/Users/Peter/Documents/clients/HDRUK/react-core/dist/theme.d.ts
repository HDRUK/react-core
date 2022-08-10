export function getSize(value: any, { base: { increment, unit } }: {
    base: {
        increment: any;
        unit: any;
    };
}): string;
export function getColorStyle(prop: any, value: any, theme: any): string;
export function getSpacingStyle(prop: any, value: any, theme: any): string;
export function getCommonStyle(prop: any, value: any): string;
export function getStyle(propParts: any, value: any, theme: any): string;
export function getCommonStyles(props: any, theme: any): string;
export function getComponentStylesFromTheme(props: any, theme: any): string;
export function getComponentVariantStyles(component: any, variant: any, theme: any): string;
export function getComponentSizeStyles(component: any, size: any, theme: any): string;
export function getComponentGlobals(component: any, theme: any): any;
export function getComponentGlobalStyles(component: any, theme: any): string;
export function getComponentFontSizeStyle(fontSize: any, theme: any): string;
export namespace THEME_INPUT {
    namespace sizes {
        export namespace small {
            const height: string;
        }
        namespace _default {
            const height_1: string;
            export { height_1 as height };
        }
        export { _default as default };
        export namespace large {
            const height_2: string;
            export { height_2 as height };
        }
    }
    namespace variants {
        namespace primary {
            const background: string;
            const borderColor: string;
        }
        namespace secondary {
            const background_1: string;
            export { background_1 as background };
            const borderColor_1: string;
            export { borderColor_1 as borderColor };
        }
    }
}
export const THEME_FONT_SIZES: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    default: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
};
export namespace THEME_BUTTON {
    export namespace sizes_1 {
        export namespace small_1 {
            export const fontSize: string;
            export const padding: string;
            const height_3: string;
            export { height_3 as height };
        }
        export { small_1 as small };
        export namespace medium {
            const fontSize_1: string;
            export { fontSize_1 as fontSize };
            const padding_1: string;
            export { padding_1 as padding };
            const height_4: string;
            export { height_4 as height };
        }
        export namespace large_1 {
            const fontSize_2: string;
            export { fontSize_2 as fontSize };
            const padding_2: string;
            export { padding_2 as padding };
            const height_5: string;
            export { height_5 as height };
        }
        export { large_1 as large };
    }
    export { sizes_1 as sizes };
    export namespace variants_1 {
        export namespace primary_1 {
            const background_2: string;
            export { background_2 as background };
            export const hoverBackground: string;
            export const disabledBackground: string;
            const borderColor_2: string;
            export { borderColor_2 as borderColor };
            export const hoverBorderColor: string;
            export const disabledBorderColor: string;
            export const disabledColor: string;
            export const color: string;
            export const fill: string;
        }
        export { primary_1 as primary };
        export namespace secondary_1 {
            const background_3: string;
            export { background_3 as background };
            const hoverBackground_1: string;
            export { hoverBackground_1 as hoverBackground };
            const disabledBackground_1: string;
            export { disabledBackground_1 as disabledBackground };
            const borderColor_3: string;
            export { borderColor_3 as borderColor };
            const hoverBorderColor_1: string;
            export { hoverBorderColor_1 as hoverBorderColor };
            const disabledBorderColor_1: string;
            export { disabledBorderColor_1 as disabledBorderColor };
            const color_1: string;
            export { color_1 as color };
            const fill_1: string;
            export { fill_1 as fill };
            export const hoverColor: string;
            const disabledColor_1: string;
            export { disabledColor_1 as disabledColor };
        }
        export { secondary_1 as secondary };
        export namespace tertiary {
            const background_4: string;
            export { background_4 as background };
            const hoverBackground_2: string;
            export { hoverBackground_2 as hoverBackground };
            const disabledBackground_2: string;
            export { disabledBackground_2 as disabledBackground };
            const borderColor_4: string;
            export { borderColor_4 as borderColor };
            const hoverBorderColor_2: string;
            export { hoverBorderColor_2 as hoverBorderColor };
            const color_2: string;
            export { color_2 as color };
            const fill_2: string;
            export { fill_2 as fill };
            const disabledBorderColor_2: string;
            export { disabledBorderColor_2 as disabledBorderColor };
            const disabledColor_2: string;
            export { disabledColor_2 as disabledColor };
        }
    }
    export { variants_1 as variants };
}
export namespace DEFAULT_THEME {
    namespace base {
        const increment: number;
        const unit: string;
    }
    namespace font {
        export { THEME_FONT_SIZES as size };
    }
    namespace colors {
        const white: string;
        const transparent: string;
        const inherit: string;
        const purple500: string;
        const platinum50: string;
        const platinum600: string;
        const platinum700: string;
        const green50: string;
        const green200: string;
        const green400: string;
        const grey500: string;
        const green600: string;
        const green700: string;
        const grey: string;
        const grey100: string;
        const grey200: string;
        const grey300: string;
        const grey400: string;
        const grey600: string;
        const grey700: string;
        const grey700Alt: string;
        const grey800: string;
        const grey900: string;
        const red50: string;
        const red600: string;
        const red700: string;
        const purple: string;
        const purple100: string;
        const purple200: string;
        const purple700: string;
        const teal: string;
        const yellow700: string;
        const yellow50: string;
        const brown900: string;
        const gold50: string;
        const none: string;
    }
    namespace components {
        export { THEME_BUTTON as Button };
        export namespace Card {
            namespace globals {
                const boxShadow: string;
                const backgroundColor: string;
                const borderRadius: string;
            }
        }
        export namespace CardHeader {
            export namespace globals_1 {
                const borderColor_5: string;
                export { borderColor_5 as borderColor };
                const fontSize_3: string;
                export { fontSize_3 as fontSize };
                export const fontWeight: string;
                const padding_3: string;
                export { padding_3 as padding };
            }
            export { globals_1 as globals };
        }
        export namespace CardBody {
            export namespace globals_2 {
                const padding_4: string;
                export { padding_4 as padding };
            }
            export { globals_2 as globals };
        }
        export namespace CardFooter {
            export namespace globals_3 {
                const borderColor_6: string;
                export { borderColor_6 as borderColor };
                const padding_5: string;
                export { padding_5 as padding };
            }
            export { globals_3 as globals };
        }
        export namespace Dimmer {
            export namespace globals_4 {
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            export { globals_4 as globals };
        }
        export namespace FeatureContentHorizontal {
            export namespace globals_5 {
                const cardOffset: string;
            }
            export { globals_5 as globals };
        }
        export namespace FeatureContentVertical {
            export namespace globals_6 {
                const cardOffset_1: string;
                export { cardOffset_1 as cardOffset };
            }
            export { globals_6 as globals };
        }
        export namespace FileSelectorButton {
            export namespace globals_7 {
                const fill_3: string;
                export { fill_3 as fill };
            }
            export { globals_7 as globals };
        }
        export namespace FileSelectorListing {
            export namespace globals_8 {
                const actionsFill: string;
            }
            export { globals_8 as globals };
        }
        export namespace Icon {
            export { THEME_FONT_SIZES as sizes };
        }
        export namespace Input {
            export namespace sizes_2 {
                export namespace small_2 {
                    const height_6: string;
                    export { height_6 as height };
                }
                export { small_2 as small };
                namespace _default_1 {
                    const height_7: string;
                    export { height_7 as height };
                }
                export { _default_1 as default };
                export namespace large_2 {
                    const height_8: string;
                    export { height_8 as height };
                }
                export { large_2 as large };
            }
            export { sizes_2 as sizes };
            export namespace variants_2 {
                export namespace primary_2 {
                    const background_5: string;
                    export { background_5 as background };
                    const borderColor_7: string;
                    export { borderColor_7 as borderColor };
                    const disabledBorderColor_3: string;
                    export { disabledBorderColor_3 as disabledBorderColor };
                    export const focusBorderColor: string;
                }
                export { primary_2 as primary };
                export namespace secondary_2 {
                    const background_6: string;
                    export { background_6 as background };
                    const borderColor_8: string;
                    export { borderColor_8 as borderColor };
                    const disabledBorderColor_4: string;
                    export { disabledBorderColor_4 as disabledBorderColor };
                    const focusBorderColor_1: string;
                    export { focusBorderColor_1 as focusBorderColor };
                }
                export { secondary_2 as secondary };
            }
            export { variants_2 as variants };
        }
        export namespace Label {
            export namespace globals_9 {
                const disabledColor_3: string;
                export { disabledColor_3 as disabledColor };
            }
            export { globals_9 as globals };
        }
        export namespace Message {
            export namespace globals_10 {
                const fontSize_4: string;
                export { fontSize_4 as fontSize };
            }
            export { globals_10 as globals };
            export namespace variants_3 {
                namespace error {
                    const color_3: string;
                    export { color_3 as color };
                }
                namespace description {
                    const color_4: string;
                    export { color_4 as color };
                }
            }
            export { variants_3 as variants };
        }
        export namespace Tag {
            export namespace sizes_3 {
                export namespace small_3 {
                    const fontSize_5: string;
                    export { fontSize_5 as fontSize };
                    const padding_6: string;
                    export { padding_6 as padding };
                }
                export { small_3 as small };
                export namespace medium_1 {
                    const fontSize_6: string;
                    export { fontSize_6 as fontSize };
                    const padding_7: string;
                    export { padding_7 as padding };
                    const height_9: string;
                    export { height_9 as height };
                }
                export { medium_1 as medium };
                export namespace large_3 {
                    const fontSize_7: string;
                    export { fontSize_7 as fontSize };
                    const padding_8: string;
                    export { padding_8 as padding };
                    const height_10: string;
                    export { height_10 as height };
                }
                export { large_3 as large };
            }
            export { sizes_3 as sizes };
            export namespace variants_4 {
                namespace success {
                    const background_7: string;
                    export { background_7 as background };
                    const color_5: string;
                    export { color_5 as color };
                }
                namespace info {
                    const background_8: string;
                    export { background_8 as background };
                    const color_6: string;
                    export { color_6 as color };
                }
                namespace warning {
                    const background_9: string;
                    export { background_9 as background };
                    const color_7: string;
                    export { color_7 as color };
                }
                namespace danger {
                    const background_10: string;
                    export { background_10 as background };
                    const color_8: string;
                    export { color_8 as color };
                }
            }
            export { variants_4 as variants };
        }
        export namespace Typography {
            export namespace variants_5 {
                export namespace h1 {
                    const fontSize_8: string;
                    export { fontSize_8 as fontSize };
                    const fontWeight_1: string;
                    export { fontWeight_1 as fontWeight };
                    const color_9: string;
                    export { color_9 as color };
                }
                export namespace h2 {
                    const fontSize_9: string;
                    export { fontSize_9 as fontSize };
                    const fontWeight_2: string;
                    export { fontWeight_2 as fontWeight };
                    const color_10: string;
                    export { color_10 as color };
                }
                export namespace h3 {
                    const fontSize_10: string;
                    export { fontSize_10 as fontSize };
                    const fontWeight_3: string;
                    export { fontWeight_3 as fontWeight };
                    const color_11: string;
                    export { color_11 as color };
                }
                export namespace h4 {
                    const fontSize_11: string;
                    export { fontSize_11 as fontSize };
                    const fontWeight_4: string;
                    export { fontWeight_4 as fontWeight };
                    const color_12: string;
                    export { color_12 as color };
                }
                export namespace h5 {
                    const fontSize_12: string;
                    export { fontSize_12 as fontSize };
                    const fontWeight_5: string;
                    export { fontWeight_5 as fontWeight };
                    const color_13: string;
                    export { color_13 as color };
                }
                export namespace h6 {
                    const fontSize_13: string;
                    export { fontSize_13 as fontSize };
                    const fontWeight_6: string;
                    export { fontWeight_6 as fontWeight };
                    const color_14: string;
                    export { color_14 as color };
                }
                export namespace body {
                    const fontSize_14: string;
                    export { fontSize_14 as fontSize };
                    export const lineHeight: string;
                }
                export namespace caption {
                    const fontSize_15: string;
                    export { fontSize_15 as fontSize };
                    const lineHeight_1: string;
                    export { lineHeight_1 as lineHeight };
                }
                export namespace small_4 {
                    const fontSize_16: string;
                    export { fontSize_16 as fontSize };
                    const lineHeight_2: string;
                    export { lineHeight_2 as lineHeight };
                }
                export { small_4 as small };
                export namespace tiny {
                    const fontSize_17: string;
                    export { fontSize_17 as fontSize };
                    const lineHeight_3: string;
                    export { lineHeight_3 as lineHeight };
                }
            }
            export { variants_5 as variants };
        }
    }
}
