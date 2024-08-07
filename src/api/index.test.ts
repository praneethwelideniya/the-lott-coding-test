import { getResults } from "../api";
import { DrawResultType } from "../types";

const resultObject = {
  DrawNumber: 1,
  PrimaryNumbers: [1, 2, 3, 4, 5, 6, 7],
  SecondaryNumbers: [4],
  DrawDisplayName: "Draw 1",
  DrawDate: "2024-01-01",
  ProductId: "PowerBall",
};

describe("getResults", () => {
  it("should return the latest draw result", async () => {
    // Mock the fetch function
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        Success: true,
        DrawResults: [resultObject],
      }),
    });
    global.fetch = mockFetch;

    // Call the getResults function
    const result: DrawResultType = await getResults();

    // Assertions
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.VITE_API_URL}/sales/vmax/web/data/lotto/latestresults`,
      {
        method: "POST",
        body: JSON.stringify({
          CompanyId: "GoldenCasket",
          MaxDrawCountPerProduct: 1,
          OptionalProductFilter: ["Powerball"],
        }),
      }
    );
    expect(result).toEqual(resultObject);
  });

  it("should throw an error if the API request fails", async () => {
    // Mock the fetch function to throw an error
    const mockFetch = jest
      .fn()
      .mockRejectedValue(new Error("API request failed"));
    global.fetch = mockFetch;

    // Call the getResults function and expect it to throw an error
    await expect(getResults()).rejects.toThrow("Failed to fetch");
  });

  it("should throw an error if the API returns an error response", async () => {
    // Mock the fetch function to return an error response
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        Success: false,
        ErrorInfo: { DisplayMessage: "API error message" },
      }),
    });
    global.fetch = mockFetch;

    // Call the getResults function and expect it to throw an error
    await expect(getResults()).rejects.toThrow("Failed to fetch");
  });
});
