import { RenderResult } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Button from "../Button";
import Input from "../Input";
import InputGroup from "./InputGroup";

let wrapper: RenderResult;

describe("Given the InputGroup component", () => {
    describe("When it is rendered", () => {
        beforeEach(() => {
            wrapper = renderWithProviders(
                <InputGroup>
                    <Button>Before</Button>
                    <Input />
                    <Button>After</Button>
                </InputGroup>
            );
        });

        it("Then should match the snapshot", () => {
            expect(wrapper.asFragment()).toMatchSnapshot();
        });
    });
});
