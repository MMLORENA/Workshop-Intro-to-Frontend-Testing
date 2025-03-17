describe("Given a ProductCard component", () => {
  describe("When it receives 'TypeScript Course', quantity 4 and stock 5 ", () => {
    test("Then user should see the product title", () => {
      //ARRANGE
      // 💡You can use the following props: title: 'TypeScript Course', quantity: 4, stock: 5
      //
      //ACT
      // 🖌️Use the `render` function from `@testing-library/react` to render the `ProductCard` component
      //
      // 🎯 Use the method `screen.getByRole` from `@testing-library/react` to get the product title
      //🎯 Use the method `screen.getByText` to get the quantity and stock
      //
      // ASSERT that it the product name, quantity and stock are visible.
      // 💰 expect(productName).toBeVisible()
      // 💰 expect(quantityText).toBeVisible()
      // 💰 expect(stockText).toBeVisible()
    });
  });
});
