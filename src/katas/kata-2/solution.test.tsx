import { render, screen } from "@testing-library/react";
import { ProductCard } from "../kata-1/ProductCard/ProductCard";

describe("Given a ProductCard component", () => {
  describe("When it receives 'TypeScript Course', quantity 4 and stock 5 ", () => {
    test("Then user should see the product title", () => {
      const title = "TypeScript Course";
      const quantity = 4;
      const stock = 5;

      render(
        <ProductCard
          productName={title}
          initialQuantity={quantity}
          stock={stock}
        />,
      );

      const productName = screen.getByRole("heading", { name: title });
      const quantityText = screen.getByText(`Quantity: ${quantity}`);
      const stockText = screen.getByText(`Stock available: ${stock}`);

      expect(productName).toBeVisible();
      expect(quantityText).toBeVisible();
      expect(stockText).toBeVisible();
    });
  });
});
