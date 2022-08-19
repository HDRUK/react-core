import React from "react";
import { RenderOptions } from "@testing-library/react";
export declare const Providers: React.FC<{
    children: React.ReactNode;
}>;
export declare const renderWithProviders: (ui: React.ReactElement, options?: RenderOptions) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
