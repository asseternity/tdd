import calculator from "./calculator";

test("Addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtraction", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Multiply", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("Divide", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
