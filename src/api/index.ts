import { DrawResultType, ResultResponse } from "../types";

/**
 * Retrieves the latest draw result for the Powerball game from the API.
 * @returns A promise that resolves to the latest draw result.
 * @throws An error if the API request fails or returns an error response.
 */
export const getResults = async (): Promise<DrawResultType> => {
  try {
    const response = await fetch(
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
    const data: ResultResponse = await response.json();
    if (data.Success) {
      return data.DrawResults[0];
    } else {
      throw new Error(data.ErrorInfo.DisplayMessage);
    }
  } catch (error) {
    throw new Error("Failed to fetch");
  }
};
