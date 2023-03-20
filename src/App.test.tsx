import { fireEvent, render, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should open Modal when click on open modal button and close when click on close button", async () => {
    const { getByText, findByText } = render(<App />);
    const openModalButton = getByText("Open Modal");
    fireEvent.click(openModalButton);
    await findByText("Modal Title");
    const closeModalButton = getByText("Close");
    fireEvent.click(closeModalButton);
    waitFor(() => {
      expect(getByText("Modal Title")).not.toBeInTheDocument();
    });
  });
});
