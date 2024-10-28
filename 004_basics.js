console.log("hello world");
const a = 3;
const b = 4;
const c = 3;

if (a == c) {
  console.log("equals");
} else {
  console.log("different");
}

const anArray = [3, 4, 5];
const doubleArray = anArray.map((element) => element * 2);
console.log(doubleArray); // [6, 8, 10]

//replace de second element
const replaceSecond = [...anArray];
const removedElement = replaceSecond.splice(1, 1, "new");
console.log(removedElement); //[4]
console.log(replaceSecond); // [3, 'new', 5]

//find to check if an element exists
const elementExists = anArray.find((element) => element === 5);
console.log(elementExists); //5
const elementExists2 = anArray.find((element) => element === 55);
console.log(elementExists2); //undefined
//length of the array
console.log(anArray.length); //3
//find index
const indexOf5 = anArray.findIndex((element) => element == 5);
console.log(indexOf5); //2
