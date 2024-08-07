import { render, screen } from "@testing-library/react";
import Squre from "./Squre";
import { ThemedColors } from "../constants";

describe("Squre", () => {
  it("renders the value correctly", () => {
    const value = 5;
    render(<Squre value={value} isSelected={false} />);
    expect(screen.getByText(value.toString())).toBeInTheDocument();
  });

  it("renders as selected when isSelected is true", () => {
    render(<Squre value={3} isSelected={true} />);
    //applies background color when isSelected is true
    expect(screen.getByTestId("crossIcon")).toBeInTheDocument();
    //has the icon when isSelected is true
    expect(screen.getByTestId("squreContainer")).toHaveStyle(
      `background-color: ${ThemedColors.background_2}`
    );
  });

  it("renders as not selected when isSelected is false", () => {
    render(<Squre value={7} isSelected={false} />);
    //does not apply background color when isSelected is false
    expect(screen.getByTestId("squreContainer")).not.toHaveStyle(
      `background-color: ${ThemedColors.background_2}`
    );
    //does not have the icon when isSelected is false
    expect(screen.queryByTestId("crossIcon")).not.toBeInTheDocument();
  });
});
