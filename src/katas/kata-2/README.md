# KATA: YOUR FIRST TEST

## OBJECTIVE

This exercise consists of creating your first test. The goal is to test that the productName, quantity, and stock are
visible to the user in the `ProductsCard`.

![/assets/product-card.png](../../../public/assets/product-card.png)

### STEPS TO FOLLOW:

- Follow the instructions described within the test body.
- Import the necessary functions to perform the test.
  - Run the test with the script ```npm run test:kata-2```
  - Output the test results:
    - ❌ If the test fails, read the error message and try to understand what is failing. Fix the error and run the test
      again.
    - ✅ If the test passes, congratulations! However, if it passed on the first try, you should check if it was a false
      positive, so you should break the test. That is, make it fail for the reason you expect.

#### File to edit in the kata 👇:

- [Product Card Test](../../../src/katas/kata-2/ProductCard.test.tsx)

Extra work:

- Add a new test to check if the `Sold Out` message is displayed when the quantity is equal to the stock.
- Add a new test to check if the `Sold Out` message is not displayed when the quantity is less than the stock.

