import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        breakpoints: import("./types").ThemeBreakpoints;
        base: {
            increment: number;
            unit: string;
        };
        font: {
            size: import("./types").ThemeFontSizes;
        };
        colors: import("./types").ThemeColors;
        components: import("./types").ThemeComponents;
    }
}
