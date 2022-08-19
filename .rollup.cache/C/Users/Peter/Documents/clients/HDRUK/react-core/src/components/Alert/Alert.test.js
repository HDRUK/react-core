import { __assign, __awaiter, __generator } from "tslib";
import { fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Alert from "./Alert";
var props = {
    onClose: jest.fn(),
    variant: "success",
};
var wrapper;
describe("Given the Alert component", function () {
    describe("When it is rendered", function () {
        beforeEach(function () {
            wrapper = renderWithProviders(React.createElement(Alert, __assign({}, props), "Content"));
        });
        it("Then should match the snapshot", function () {
            expect(wrapper.asFragment()).toMatchSnapshot();
        });
        describe("And it is dismissable", function () {
            beforeEach(function () {
                wrapper.rerender(React.createElement(Alert, __assign({}, props, { dismissable: true }), "Content"));
            });
            afterEach(function () {
                jest.clearAllMocks();
            });
            describe("And it is closed", function () {
                beforeEach(function () {
                    var close = wrapper.getByRole("button");
                    fireEvent.click(close);
                });
                it("Then does not show anything", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, waitFor(function () {
                                    expect(wrapper.queryByText("Content")).toBeNull();
                                })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("Then calls onClose", function () {
                    expect(props.onClose).toHaveBeenCalled();
                });
            });
        });
        describe("And autoclose is set", function () {
            beforeEach(function () {
                wrapper.rerender(React.createElement(Alert, __assign({}, props, { autoclose: true, autocloseDuration: 1000 }), "Content"));
            });
            afterAll(function () {
                jest.clearAllMocks();
            });
            it("Then does not show anything", function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, waitFor(function () { return expect(wrapper.queryByText("Content")).toBeNull(); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Then calls onClose", function () {
                expect(props.onClose).toHaveBeenCalled();
            });
        });
        describe("And it has an icon specified", function () {
            beforeEach(function () {
                wrapper.rerender(React.createElement(Alert, __assign({}, props, { icon: "Icon" }), "Content"));
            });
            it("Then does not show other icons", function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, waitFor(function () { return expect(wrapper.getByText("Icon")).toBeTruthy(); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
//# sourceMappingURL=Alert.test.js.map