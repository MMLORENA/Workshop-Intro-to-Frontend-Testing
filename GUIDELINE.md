# Hands-on: Write Your First Frontend Test

## Why Testing Matters

Testing provides confidence and security when making changes to code, ensuring that it behaves as expected. In frontend
development, testing is particularly crucial because there are two types of users to consider: developers and end-users.

## Types of Tests and Why Testing Library

There are different types of tests, each serving a different purpose:

- **Static:** Analyze code, catch typos, errors...
- **Unit Tests:** Verify isolated parts of the code.
- **Integration Tests:** Validate how multiple pieces work together.
- **End-to-End (E2E) Tests:** Simulate real user interactions across the full application.

For this workshop, we focus on **unit and component tests** because they have a lower cost and provide fast feedback.
Unlike Cypress or Playwright, which are designed for higher-level E2E testing, we use **Testing Library** to write
lightweight tests that simulate user interactions within isolated components.

## The Uniqueness of Frontend Testing

Unlike backend testing, frontend testing includes component testing, which ensures that UI components:

- Are displayed correctly.
- Allow user interaction.

A component is an independent UI piece that contains its own HTML, CSS, and JavaScript. Our tests should focus on
interacting with component props and verifying rendered output rather than implementation details.

> *"Think less about the code you are testing and more about the use cases that code supports."* - Kent C. Dodds

## Introduction to Testing Library

Kent C. Dodds helped develop Testing Library, a library that simulates the DOM in a Node environment, making it easier
to test UI interactions without focusing on implementation details. The primary utilities allow querying nodes similarly
to how users would find them.

## What to Test

- Focus on what the end user can see and do.
- Write semantic tests that describe real use cases.
- Avoid testing implementation details.
- If a test fails after a refactor without changing behavior, it likely tests implementation details.

## What *Not* to Test

- Implementation details: Elements not visible or interacted with by the user.
- Internal component logic that does not affect behavior.

> *"The more your tests resemble the way your software is used, the more confidence they can give you."* - Kent C. Dodds

## Test Structure

**Follow the `Given, When, Then` pattern:**

```text
Given [a <Component || Page>]
When  [it is rendered || the user interacts with it]
Then  [the user should see...]
```

**Use the AAA (Arrange-Act-Assert) pattern:**

- **Arrange**: Set up initial state, props, and dependencies.
- **Act**: Render the component/page and simulate interactions.
- **Assert**: Verify that the expected outcome occurs.

## Writing Your First Test with Testing Library

1. **Describe the test case**
2. **Render the component** using `render` from Testing Library
3. **Query elements** using `screen` from Testing Library
4. **Assert expectations** using jest-dom matchers

## Querying and Asserting Elements

### Query Types

Docs: [Testing Library Queries](https://testing-library.com/docs/queries/about/#priority)

| Query Type             | Use Case                                      | Notes                                 |
|------------------------|-----------------------------------------------|---------------------------------------|
| `getByRole`            | Accessible elements like buttons and headings | Preferred method                      |
| `getByLabelText`       | Form fields                                   | Ensures accessibility                 |
| `getByPlaceholderText` | Forms without labels                          | Backup method                         |
| `getByText`            | Non-interactive elements                      | For elements without accessible roles |
| `getByAltText`         | Images and icons                              | Use when applicable                   |
| `getByTestId`          | Last resort                                   | Only if no other method works         |

### Asserting Element Presence

Docs: [Custom jest dom Matchers](https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers)

| Matcher               | Description                              |
|-----------------------|------------------------------------------|
| `toBeInTheDocument()` | Ensures an element exists in the DOM     |
| `toBeVisible()`       | Checks if an element is visible to users |

## Simulating User Interactions with `userEvent`

Frontend testing requires simulating real user interactions using `userEvent`, which:

- Supports mouse hover, tab navigation, and keyboard interactions.
- Respects accessibility conditions (e.g., disabling buttons when necessary).
- Mimics natural user timing (e.g., typing speed).
- Handles asynchronous events effectively.

## Common Testing Mistakes and Pitfalls

1. **Testing implementation details** → Leads to brittle tests that break with refactors.
2. **Overusing `getByTestId`** → Prefer user-centric queries like `getByRole`.
3. **Not cleaning up between tests** → Can lead to unexpected test failures.
4. **Skipping accessibility checks** → Ensuring usability for all users is part of good testing.
5. **Ignoring async behavior** → Always use `findBy...` for elements that appear dynamically.


