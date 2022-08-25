import { fireEvent, RenderResult } from "@testing-library/react";
import React from "react";
import Textarea from ".";
import { renderWithProviders } from "../../testUtils";
import { TextAreaProps } from "./TextArea.types";

const props: TextAreaProps = {
    variant: "primary",
    label: "Sample label",
    charCountDescription: "sample description",
    onChange: jest.fn(),
};

let wrapper: RenderResult;

describe("Given the Textarea component", () => {
    describe("When it is rendered", () => {
        beforeEach(() => {
            wrapper = renderWithProviders(<Textarea {...props} />);
        });

        it("Then should match the snapshot", () => {
            expect(wrapper.asFragment()).toMatchSnapshot();
        });

        it("Then has the correct label", async () => {
            expect(wrapper.getByText("Sample label")).toBeTruthy();
        });

        describe("And it is countable", () => {
            beforeEach(() => {
                wrapper.rerender(<Textarea {...props} maxCharCount={5} />);
            });

            it("Then should match the snapshot", () => {
                expect(wrapper.asFragment()).toMatchSnapshot();
            });

            it("Then has the correct count text", async () => {
                expect(wrapper.getByTestId("count")).toHaveTextContent(
                    "0 sample description (0/5)"
                );
            });

            describe("And the value is changed", () => {
                beforeEach(() => {
                    wrapper.rerender(
                        <Textarea {...props} maxCharCount={5} value="1234" />
                    );

                    const close = wrapper.getByRole("textbox");

                    fireEvent.change(close, { target: { value: "value" } });
                });

                it("Then calls onChange", async () => {
                    expect(props.onChange).toHaveBeenCalled();
                });

                it("Then has the correct count text", async () => {
                    expect(wrapper.getByTestId("count")).toHaveTextContent(
                        "4 sample description (4/5)"
                    );
                });

                describe("And it is too long", () => {
                    beforeEach(() => {
                        wrapper.rerender(
                            <Textarea
                                {...props}
                                maxCharCount={5}
                                value="123456"
                            />
                        );
                    });

                    it("Then has the correct count text", async () => {
                        expect(wrapper.getByTestId("count")).toHaveTextContent(
                            "5 sample description (5/5)"
                        );
                    });
                });
            });
        });

        describe("And it has autosize", () => {
            beforeEach(() => {
                wrapper.rerender(<Textarea {...props} autosize />);
            });

            it("Then should match the snapshot", () => {
                expect(wrapper.asFragment()).toMatchSnapshot();
            });
        });
    });
});
