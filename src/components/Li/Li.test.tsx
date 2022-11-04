import { RenderResult, screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Ul from "../Ul";
import Li from "./Li";

let wrapper: RenderResult;

describe("Given the Li component", () => {
    describe("When it is rendered", () => {
        beforeEach(() => {
            wrapper = renderWithProviders(
                <Ul>
                    <Li>List item</Li>
                </Ul>
            );
        });

        it("Then should match the snapshot", () => {
            expect(wrapper.asFragment()).toMatchSnapshot();
        });

        it("Then should have the correct content", async () => {
            expect(
                screen.getByRole("listitem", {
                    hidden: true,
                })
            ).toHaveTextContent(/List item/);
        });

        describe("And it has icons", () => {
            beforeEach(() => {
                wrapper.rerender(
                    <Ul>
                        <Li icon="Icon">List item</Li>
                    </Ul>
                );
            });

            it("Then should have the correct content", async () => {
                expect(
                    screen.getByRole("listitem", {
                        hidden: true,
                    })
                ).toHaveTextContent(/Icon List item/);
            });
        });
    });
});
