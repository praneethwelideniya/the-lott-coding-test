import { render, screen } from "@testing-library/react";
import Circle from "./Circle";
import { ResultType } from "../constants";

describe("Circle", () => {
  test("render circle", async () => {
    render(<Circle />);
  });
  test("render with value", async () => {
    render(<Circle value="1" />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  test("render with fallback value", async () => {
    render(<Circle fallbackValue="PB" />);
    expect(screen.getByText("PB")).toBeInTheDocument();
  });

  test("render with value and fallback value", async () => {
    render(<Circle fallbackValue="PB" value="10" />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("render with primary type and value", async () => {
    render(<Circle type={ResultType.PRIMARY} value="10" />);
    expect(screen.getByText("10")).toHaveClass("circle primary value");
  });

  test("render with primary type without value", async () => {
    const { container } = render(<Circle type={ResultType.PRIMARY} />);
    expect(container.querySelector(".circle")).not.toHaveClass("primary value");
  });

  test("render with secondary type and value", async () => {
    render(<Circle type={ResultType.SECONDARY} value="10" />);
    expect(screen.getByText("10")).toHaveClass("circle secondary value");
  });

  test("render with secondary type without value", async () => {
    const { container } = render(<Circle type={ResultType.SECONDARY} />);
    expect(container.querySelector(".circle")).not.toHaveClass(
      "secondary value"
    );
  });
});
