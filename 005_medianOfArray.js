/**
 * The Median is the "middle" of a sorted list of numbers
 */

function getMedian(anArray) {
  const arrayLength = anArray.length;
  const arrayOrdered = anArray.sort();

  const middlePosition = Math.floor(arrayLength / 2);
  console.log({
    arrayLength,
    arrayOrdered,
    middlePosition,
  });
  return arrayOrdered[middlePosition];
}

const anArray = [6, 7, 5, 4, 2, 8, 1];
console.log("Median:", getMedian(anArray));
