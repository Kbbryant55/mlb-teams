import Header from "../src/components/header";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders a Header", () => {
    render(<Header />);
    const { getByText } = within(screen.getByTestId("header"));
    expect(getByText("Major League Baseball")).toBeInTheDocument();
  });

  it("renders Header unchanged", () => {


    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
