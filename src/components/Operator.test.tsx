import { render, fireEvent } from "@testing-library/react";
import Operator from "../components/Operator";

describe("Operator component", () => {
  it("should call getData when IoFlash icon is clicked", () => {
    const getDataMock = jest.fn();
    const resetDataMock = jest.fn();

    const { getByTestId } = render(
      <Operator getData={getDataMock} resetData={resetDataMock} />
    );

    const flashIcon = getByTestId("flash-icon");
    fireEvent.click(flashIcon);

    expect(getDataMock).toHaveBeenCalled();
    expect(resetDataMock).not.toHaveBeenCalled();
  });

  it("should call resetData when IoMdTrash icon is clicked", () => {
    const getDataMock = jest.fn();
    const resetDataMock = jest.fn();

    const { getByTestId } = render(
      <Operator getData={getDataMock} resetData={resetDataMock} />
    );

    const trashIcon = getByTestId("trash-icon");
    fireEvent.click(trashIcon);

    expect(getDataMock).not.toHaveBeenCalled();
    expect(resetDataMock).toHaveBeenCalled();
  });
});
