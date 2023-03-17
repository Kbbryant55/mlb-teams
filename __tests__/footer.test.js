import Footer from "../src/components/footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer copyrightLink="" linkLabel="" copyrightText="" />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders Footer unchanged", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
