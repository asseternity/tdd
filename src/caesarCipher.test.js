import caesarCipher from "./caesarCipher";

test("Happy path (1)", () => {
  expect(caesarCipher("abc")).toBe("bcd");
});

test("Happy path (2)", () => {
  expect(caesarCipher("bcd")).toBe("cde");
});

test("Wrapping", () => {
  expect(caesarCipher("xyz")).toBe("yza");
});

test("Spaces", () => {
  expect(caesarCipher("a b")).toBe("b c");
});

test("Punctuation", () => {
  expect(caesarCipher("a, b, c")).toBe("b, c, d");
});

test("Sentence", () => {
  expect(caesarCipher("Hello, my friend. You are awesome!")).toBe(
    "Ifmmp, nz gsjfoe. Zpv bsf bxftpnf!",
  );
});

test("Shift factor (2)", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});
