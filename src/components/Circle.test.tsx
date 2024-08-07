import { render, screen } from "@testing-library/react";
import Circle from "./Circle";
import { ResultType } from "../constants";

describe("Circle", () => {
  it("render circle", async () => {
    render(<Circle />);
  });
  it("render with value", async () => {
    render(<Circle value="1" />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("render with fallback value", async () => {
    render(<Circle fallbackValue="PB" />);
    expect(screen.getByText("PB")).toBeInTheDocument();
  });

  it("render with value and fallback value", async () => {
    render(<Circle fallbackValue="PB" value="10" />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("render with primary type and value", async () => {
    render(<Circle type={ResultType.PRIMARY} value="10" />);
    expect(screen.getByText("10")).toHaveClass("circle primary value");
  });

  it("render with primary type without value", async () => {
    const { container } = render(<Circle type={ResultType.PRIMARY} />);
    expect(container.querySelector(".circle")).not.toHaveClass("primary value");
  });

  it("render with secondary type and value", async () => {
    render(<Circle type={ResultType.SECONDARY} value="10" />);
    expect(screen.getByText("10")).toHaveClass("circle secondary value");
  });

  it("render with secondary type without value", async () => {
    const { container } = render(<Circle type={ResultType.SECONDARY} />);
    expect(container.querySelector(".circle")).not.toHaveClass(
      "secondary value"
    );
  });
});
