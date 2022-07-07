import { ThemeProvider } from "@emotion/react";
import { DEFAULT_THEME } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { hidden: true },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Story />
    </ThemeProvider>
  ),
];
