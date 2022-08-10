import { __awaiter, __generator } from "tslib";
import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Button from "../Button";
import FeatureContentHorizontal from "../FeatureContentHorizontal";
var wrapper;
describe("Given the FeatureContentHorizontal component", function () {
    describe("When it is rendered", function () {
        beforeEach(function () {
            wrapper = renderWithProviders(React.createElement(FeatureContentHorizontal, { header: "Header", body: "Body", actions: React.createElement(Button, null, "View"), media: "Image" }));
        });
        it("Then should match the snapshot", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(wrapper.asFragment()).toMatchSnapshot();
                return [2 /*return*/];
            });
        }); });
        it("Then should have the correct header", function () { return __awaiter(void 0, void 0, void 0, function () {
            var header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Header/)];
                    case 1:
                        header = _a.sent();
                        expect(header).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Then should have the correct body", function () { return __awaiter(void 0, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Body/)];
                    case 1:
                        body = _a.sent();
                        expect(body).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Then should have the correct actions", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/View/)];
                    case 1:
                        actions = _a.sent();
                        expect(actions).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Then should containg the correct image", function () { return __awaiter(void 0, void 0, void 0, function () {
            var media;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Image/)];
                    case 1:
                        media = _a.sent();
                        expect(media).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=FeatureContentHorizontal.test.js.map