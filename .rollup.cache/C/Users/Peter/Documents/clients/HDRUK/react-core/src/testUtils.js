// @ts-nocheck
import { __assign } from "tslib";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";
import { DEFAULT_THEME } from "./theme";
export var Providers = function (_a) {
    var children = _a.children;
    return React.createElement(ThemeProvider, { theme: DEFAULT_THEME }, children);
};
export var renderWithProviders = function (ui, options) {
    return render(ui, __assign({ wrapper: Providers }, options));
};
//# sourceMappingURL=testUtils.js.map