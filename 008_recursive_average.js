//shift extracts the first element at the left
const recu = (sum, anArray) => {
  const arrayCopy = [...anArray];
  //   console.log(sum, anArray);
  if (anArray.length > 0) {
    const currentElement = arrayCopy.shift();
    return recu(sum + currentElement, arrayCopy);
  } else {
    // console.log("return", sum);
    return sum;
  }
};

const anArray = [3, 4, 5, 6, 7, 8];
const sumResult = recu(0, anArray);
console.log(anArray.length);
console.log(sumResult);
const average = recu(0, anArray) / anArray.length;

console.log(average);
