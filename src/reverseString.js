export default function reverseString(string) {
  let reverseString = "";
  for (let i = 0; i <= string.length; i++) {
    reverseString = reverseString + string.charAt(string.length - i);
  }
  return reverseString;
}
