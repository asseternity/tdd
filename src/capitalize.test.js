import capitalize from "./capitalize";

test("Happy path (1)", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Happy path (2)", () => {
  expect(capitalize("goodbye")).toBe("Goodbye");
});

test("String with spaces", () => {
  expect(capitalize("me and you")).toBe("Me and you");
});
