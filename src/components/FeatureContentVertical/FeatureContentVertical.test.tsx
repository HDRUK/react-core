import { RenderResult, screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Button from "../Button";
import FeatureContentVertical from "../FeatureContentVertical";

let wrapper: RenderResult;

describe("Given the FeatureContentVertical component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      wrapper = renderWithProviders(
        <FeatureContentVertical
          header="Header"
          body="Body"
          actions={<Button>View</Button>}
          media="Image"
        />
      );
    });

    it("Then should match the snapshot", async () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it("Then should have the correct header", async () => {
      const header = await screen.findByText(/Header/);

      expect(header).toBeTruthy();
    });

    it("Then should have the correct body", async () => {
      const body = await screen.findByText(/Body/);

      expect(body).toBeTruthy();
    });

    it("Then should have the correct actions", async () => {
      const actions = await screen.findByText(/View/);

      expect(actions).toBeTruthy();
    });

    it("Then should containg the correct image", async () => {
      const media = await screen.findByText(/Image/);

      expect(media).toBeTruthy();
    });
  });
});
