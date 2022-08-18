import { fireEvent, RenderResult, waitFor } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../testUtils";
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";

const props: AlertProps = {
  onClose: jest.fn(),
  variant: "success",
};

let wrapper: RenderResult;

describe("Given the Alert component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      wrapper = renderWithProviders(<Alert {...props}>Content</Alert>);
    });

    it("Then should match the snapshot", () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    describe("And it is dismissable", () => {
      beforeEach(() => {
        wrapper.rerender(
          <Alert {...props} dismissable>
            Content
          </Alert>
        );
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      describe("And it is closed", () => {
        beforeEach(() => {
          const close = wrapper.getByRole("button");

          fireEvent.click(close);
        });

        it("Then does not show anything", async () => {
          await waitFor(() => {
            expect(wrapper.queryByText("Content")).toBeNull();
          });
        });

        it("Then calls onClose", () => {
          expect(props.onClose).toHaveBeenCalled();
        });
      });
    });

    describe("And autoclose is set", () => {
      beforeEach(() => {
        wrapper.rerender(
          <Alert {...props} autoclose autocloseDuration={1000}>
            Content
          </Alert>
        );
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      it("Then does not show anything", async () => {
        await waitFor(() => expect(wrapper.queryByText("Content")).toBeNull());
      });

      it("Then calls onClose", () => {
        expect(props.onClose).toHaveBeenCalled();
      });
    });

    describe("And it has an icon specified", () => {
      beforeEach(() => {
        wrapper.rerender(
          <Alert {...props} icon="Icon">
            Content
          </Alert>
        );
      });

      it("Then does not show other icons", async () => {
        await waitFor(() => expect(wrapper.getByText("Icon")).toBeTruthy());
      });
    });
  });
});
