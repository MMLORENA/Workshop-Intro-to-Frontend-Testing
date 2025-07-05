import { userEvent } from "@testing-library/user-event";
import { ProductCard } from "../kata-1/ProductCard/ProductCard";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

describe("Given a ProductCard component", () => {
  describe("When it receives 'TypeScript Course', quantity 4 and stock 5 ", () => {
    describe("And the user clicks on the 'Add' button", () => {
      test("Then user should see the Sold Out message", async () => {
        const title = "TypeScript Course";
        const quantity = 4;
        const stock = 5;
        const buttonAddText = "Add";
        const soldOutText = "Sold Out";
        const user = userEvent.setup();

        render(
          <ProductCard
            productName={title}
            initialQuantity={quantity}
            stock={stock}
          />,
        );

        const button = screen.getByRole("button", { name: buttonAddText });

        await user.click(button);

        const soldOut = screen.getByText(soldOutText);

        expect(soldOut).toBeVisible();
      });
    });
  });
});
