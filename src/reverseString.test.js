import reverseString from "./reverseString";

test("Happy path (1)", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Spaces", () => {
  expect(reverseString("hello and welcome")).toBe("emoclew dna olleh");
});

test("Uppercase", () => {
  expect(reverseString("HeLLo")).toBe("oLLeH");
});

test("Symbols", () => {
  expect(reverseString("123 @#$")).toBe("$#@ 321");
});
