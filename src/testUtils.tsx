import React from "react";
import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";
import { DEFAULT_THEME } from "./theme";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  return render(ui, { wrapper: Providers, ...options });
};
