import { screen, RenderResult } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Ul from "./Ul";

let wrapper: RenderResult;

describe("Given the Ul component", () => {
    describe("When it is rendered", () => {
        beforeEach(() => {
            wrapper = renderWithProviders(<Ul>Content</Ul>);
        });

        it("Then should match the snapshot", () => {
            expect(wrapper.asFragment()).toMatchSnapshot();
        });

        it("Then should have the corretc content", () => {
            expect(screen.queryByText("Content")).toBeTruthy();
        });
    });
});
