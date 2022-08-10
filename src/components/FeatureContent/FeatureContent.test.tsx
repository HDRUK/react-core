import { RenderResult, screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import FeatureContent from "./FeatureContent";

let wrapper: RenderResult;

describe("Given the FeatureContent component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      wrapper = renderWithProviders(<FeatureContent media="Image" />);
    });

    it("Then should have the correct variant", async () => {
      const element = await screen.getByRole("article");
      expect(element).toContainClass("ui-FeatureContentVertical");
    });

    describe("And it is horzontal", () => {
      it("Then should have the correct variant", async () => {
        wrapper.rerender(<FeatureContent variant="horizontal" media="Image" />);

        const element = await screen.getByRole("article");
        expect(element).toContainClass("ui-FeatureContentHorizontal");
      });
    });
  });
});
