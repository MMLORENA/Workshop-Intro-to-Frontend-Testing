import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then user should see a welcome title", () => {
      const titleText =
        /Intro to Frontend Testing: Writing Your First Tests with Testing Library/i;

      render(<App />);

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeVisible();
    });
  });
});
