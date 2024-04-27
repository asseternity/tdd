export default function analyzeArray(numberArray) {
  let arrayMax;
  let arrayMin;
  let arrayAverage;
  let arrayLength;

  arrayLength = numberArray.length;
  let sortedArray = numberArray.sort((a, b) => (a > b ? 1 : -1));
  arrayMin = sortedArray[0];
  arrayMax = sortedArray[sortedArray.length - 1];

  let sum = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    sum = sum + sortedArray[i];
  }
  arrayAverage = sum / arrayLength;
  return {
    average: arrayAverage,
    max: arrayMax,
    min: arrayMin,
    length: arrayLength,
  };
}
