import { __awaiter, __generator } from "tslib";
import { screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { renderWithProviders } from "../../testUtils";
var wrapper;
describe("Given the Card component", function () {
    describe("When it is rendered", function () {
        beforeEach(function () {
            wrapper = renderWithProviders(React.createElement(Card, null,
                React.createElement(CardHeader, { className: "cardHeader" }, "Header"),
                React.createElement(CardBody, { className: "cardBody" }, "Body"),
                React.createElement(CardFooter, { className: "cardFooter" }, "Footer")));
        });
        it("Then should match the snapshot", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(wrapper.asFragment()).toMatchSnapshot();
                return [2 /*return*/];
            });
        }); });
        it("Then should have the correct header class", function () { return __awaiter(void 0, void 0, void 0, function () {
            var cardHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Header/)];
                    case 1:
                        cardHeader = _a.sent();
                        expect(cardHeader).toContainClass("cardHeader");
                        return [2 /*return*/];
                }
            });
        }); });
        it("Then should have the correct body class", function () { return __awaiter(void 0, void 0, void 0, function () {
            var cardBody;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Body/)];
                    case 1:
                        cardBody = _a.sent();
                        expect(cardBody).toContainClass("cardBody");
                        return [2 /*return*/];
                }
            });
        }); });
        it("Then should have the correct footer class", function () { return __awaiter(void 0, void 0, void 0, function () {
            var cardFooter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screen.findByText(/Footer/)];
                    case 1:
                        cardFooter = _a.sent();
                        expect(cardFooter).toContainClass("cardFooter");
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=Card.test.js.map