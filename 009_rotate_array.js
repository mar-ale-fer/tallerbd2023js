//rotate k elements
const rotate = (k, anArray) => {
  const newArray = [...anArray];
  let i = 0;
  while (i < k) {
    const element = newArray.pop();
    newArray.unshift(element);
    i++;
  }
  return newArray;
};

const k = 3;
const anArray = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(k, anArray));
