import { describe } from "vitest";

describe("Given a ProductCard component", () => {
  describe("When it receives 'TypeScript Course', quantity 4 and stock 5 ", () => {
    describe("And the user clicks on the 'Add' button", () => {
      test("Then user should see the Sold Out message", async () => {
        //ARRANGE
        // 💡You can use the following props: title: 'TypeScript Course', quantity: 4, stock: 5
        // ▶️ Call the `userEvent.setup` method to get the `user` object to simulate user interactions
        //
        //ACT
        // 🖌️Use the `render` function from `@testing-library/react` to render the `ProductCard` component
        //
        //🎯 Use the recommended method of `screen` from `@testing-library/react` to get the add button element
        //▶️ Simulate a user click on the add button using the `user.click` method
        //
        // 🎯Use the recommended method of `screen` from `@testing-library/react` to get the soldOut text element
        //  ASSERT that it the soldOutText is visible.
        // 💰 expect(soldOutText).toBeVisible()
      });
    });
  });
});
