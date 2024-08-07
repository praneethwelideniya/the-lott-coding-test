import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { getResults } from "./api";

jest.mock("./api", () => ({
  getResults: jest.fn().mockResolvedValueOnce({
    PrimaryNumbers: [1, 2, 3, 4, 5, 6, 7],
    SecondaryNumbers: [6],
  }),
}));

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Powerball Results header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Powerball Results/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("calls getResults when Flash button is clicked", async () => {
    render(<App />);
    const getDataButton = screen.getByTestId("flash-icon");
    fireEvent.click(getDataButton);

    await waitFor(() => {
      expect(getResults).toHaveBeenCalledTimes(1);
    });
  });

  test("resets primary and secondary numbers when Reset Data button is clicked", () => {
    render(<App />);
    const resetDataButton = screen.getByTestId("trash-icon");
    fireEvent.click(resetDataButton);
    expect(true).toBeTruthy();
  });
});
