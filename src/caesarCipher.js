function caesarCipher(string, shiftFactor) {
  if (shiftFactor == undefined) {
    shiftFactor = 1;
  }
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let originalCharacter = string.charAt(i);
    if (IsItALetter(originalCharacter)) {
      let lowercaseCharacter = originalCharacter.toLowerCase();
      let letterIndex = alphabet.findIndex(
        (sentry) => sentry == lowercaseCharacter,
      );
      if (letterIndex == 25) {
        letterIndex = -1;
      }
      let correctLetter = alphabet[letterIndex + shiftFactor];
      if (originalCharacter == lowercaseCharacter) {
        newString = newString + correctLetter;
      } else {
        newString = newString + correctLetter.toUpperCase();
      }
    } else {
      newString = newString + originalCharacter;
    }
  }
  return newString;
}

function IsItALetter(letterString) {
  if (
    (letterString >= "a" && letterString <= "z") ||
    (letterString >= "A" && letterString <= "Z")
  ) {
    return true;
  } else {
    return false;
  }
}

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default caesarCipher;
