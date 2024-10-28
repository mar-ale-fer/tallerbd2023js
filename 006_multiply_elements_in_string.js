const solution = (cant_services, durations) => {
  const arrayOfStrings = durations.split(" ");
  console.log(arrayOfStrings);
  //parseInt: convert string to int
  const arrayOfNumbers = arrayOfStrings.map((element) => parseInt(element));
  console.log(arrayOfNumbers);
  //reduce
  const multiplication = arrayOfNumbers.reduce(
    (previousNum, currentNum) => previousNum * currentNum
  );
  return multiplication;
};

const cant_services = 4;
const durations = "1 3 4 2";
console.log(solution(cant_services, durations));
