# KATA: WHAT TO TEST

## OBJECTIVE

This exercise is to think before writing any test. Consist into make a list of the use cases that we want to test.

It is more important to develop the skill of knowing what to test and why than to write tests because that can be
consulted in any guide.

What tests would you write for the `ProductCard` component from user's perspective?

## COMPONENT INFORMATION:

It receives as props:

- The initial quantity to display in `quantity`.
- The available `stock` of that product.
- The `name` of the product.

When the quantity is equal to the available stock, a `Sold Out` message is displayed.
The `Remove` and `Add` buttons are disabled:

- **Remove**: when the quantity is equal to 0.
- **Add**: when the stock is equal to 0.

![/assets/product-card.png](../../../public/assets/product-card.png)

### STEPS TO FOLLOW:

- Describe the use cases in pseudo code.:

```
Example:
    WHEN IT RECEIVES BOOTCAMP FULL-STACK AS PRODUCT NAME 
      THEN THE USER SHOULD SEE THE PRODUCT NAME FULL-STACK BOOTCAMP
```

- Remember, we do not test implementation details and we test from the user's perspective.

### HINT🔎:

What are the responsibilities of the `ProductCard` component?
What are the possible interactions with the `ProductCard` component?
