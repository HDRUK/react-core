import { RenderResult, screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { renderWithProviders } from "../../testUtils";

let wrapper: RenderResult;

describe("Given the Card component", () => {
  beforeEach(() => {
    wrapper = renderWithProviders(
      <Card>
        <CardHeader className="cardHeader">Header</CardHeader>
        <CardBody className="cardBody">Body</CardBody>
        <CardFooter className="cardFooter">Footer</CardFooter>
      </Card>
    );
  });

  it("should match the snapshot", async () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it("should have the correct header class", async () => {
    const cardHeader = await screen.findByText(/Header/);

    expect(cardHeader).toContainClass("cardHeader");
  });

  it("should have the correct body class", async () => {
    const cardBody = await screen.findByText(/Body/);

    expect(cardBody).toContainClass("cardBody");
  });

  it("should have the correct footer class", async () => {
    const cardFooter = await screen.findByText(/Footer/);

    expect(cardFooter).toContainClass("cardFooter");
  });
});
