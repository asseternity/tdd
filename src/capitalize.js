export default function capitalize(string) {
  let first = string.charAt(0).toUpperCase();
  let rest = string.slice(1, string.length);
  return first + rest;
}
