import { __awaiter, __generator } from "tslib";
import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import FeatureContent from "./FeatureContent";
var wrapper;
describe("Given the FeatureContent component", function () {
    describe("When it is rendered", function () {
        beforeEach(function () {
            wrapper = renderWithProviders(React.createElement(FeatureContent, { media: "Image" }));
        });
        it("Then should have the correct variant", function () { return __awaiter(void 0, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.getByRole("article")];
                    case 1:
                        element = _a.sent();
                        expect(element).toContainClass("ui-FeatureContentVertical");
                        return [2 /*return*/];
                }
            });
        }); });
        describe("And it is horzontal", function () {
            it("Then should have the correct variant", function () { return __awaiter(void 0, void 0, void 0, function () {
                var element;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            wrapper.rerender(React.createElement(FeatureContent, { variant: "horizontal", media: "Image" }));
                            return [4 /*yield*/, screen.getByRole("article")];
                        case 1:
                            element = _a.sent();
                            expect(element).toContainClass("ui-FeatureContentHorizontal");
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
//# sourceMappingURL=FeatureContent.test.js.map