import { render, screen } from "@testing-library/react";
import AsyncButton from "./AsyncButton/AsyncButton";
import { userEvent } from "@testing-library/user-event";

describe("Given an AsyncButton", () => {
  describe("When user clicks on the button", () => {
    test("Then user should see text 'Fetched Data'", async () => {
      const buttonText = "Get data";
      const fetchDataMessage = "Fetched Data";
      const user = userEvent.setup();

      render(<AsyncButton />);

      const button = screen.getByRole("button", { name: buttonText });
      await user.click(button);

      const fetchedDataMessage = await screen.findByText(fetchDataMessage);

      expect(fetchedDataMessage).toBeVisible();
    });
  });
});
