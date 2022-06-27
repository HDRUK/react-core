import React from "react";
import { render } from "@testing-library/react";
import Box from ".";

let wrapper;

const props = {
  children: "Component goes here",
  className: "additional-classname",
};

describe("Given the Box component", () => {
  describe("When it is rendered", () => {
    beforeAll(() => {
      wrapper = render(<Box {...props} />, { wrapper: Providers });
    });

    it("Then matches the previous snapshot", () => {
      expect(wrapper.container).toMatchSnapshot();
    });

    it("Then has the correct className", () => {
      expect(
        wrapper.container.querySelector(".additional-classname")
      ).toBeTruthy();
    });

    it("Then has the correct text", () => {
      expect(wrapper.getByText("Component goes here")).toBeTruthy();
    });
  });
});
