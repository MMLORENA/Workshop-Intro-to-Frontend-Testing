describe("Given an AsyncButton", () => {
  describe("When user clicks on the button", () => {
    test("Then user should see text 'Fetched Data'", async () => {
      //ARRANGE
      // 💡You can define the buttonText as 'Fetch Data'
      //
      //ACT
      // 🖌️Use the `render` function from `@testing-library/react` to render the `AsyncButton` component
      //
      // 🎯 Use the proper method of `screen` from `@testing-library/react` to get the button element
      //▶️ Simulate a user click on the async button using the `user.click` method
      //
      // 🎯 Use the p `await screen.findByText` from `@testing-library/react` to get the Fetched Data message element
      //
      // ASSERT that it the product name, quantity and stock are visible.
      // 💰 expect(fetchDataMessage).toBeVisible()
    });
  });
});
