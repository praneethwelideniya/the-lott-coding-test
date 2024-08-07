import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  PRIMARY_WINNING_NUMBERS,
  SECONDARY_WINNING_NUMBERS,
} from "./constants";

test("renders Powerball Results header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Powerball Results/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders primary numbers circles", () => {
  render(<App />);
  const primaryNumbers = screen.getAllByTestId("primary-circle");
  expect(primaryNumbers.length).toBe(PRIMARY_WINNING_NUMBERS);
});

test("renders secondary numbers circles", () => {
  render(<App />);
  const secondaryNumbers = screen.getAllByTestId("secondary-circle");
  expect(secondaryNumbers.length).toBe(SECONDARY_WINNING_NUMBERS);
});
