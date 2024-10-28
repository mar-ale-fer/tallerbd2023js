/**
 * Using Fibonacci and stack
 * @param {number} n
 * @returns {number}
 */

/**
 * 0        0   1   2   3   4   5   6   7
 * output   0   1   2   3   5   8   13  21
 */

const climbingStairs = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let stack = [];
  stack.push(1);
  stack.push(2);
  let current_steps = 3;
  let current_combinations = 0;
  while (current_steps <= n) {
    let element_n_1 = stack.pop();
    let element_n_2 = stack.pop();
    //I have the new element based on the two previous ones
    current_combinations = element_n_1 + element_n_2;
    //I update the new n_1, n_2
    stack.push(element_n_1);
    stack.push(current_combinations);
    current_steps++;
  }
  return current_combinations;
};

console.log(climbingStairs(6)); //13
console.log(climbingStairs(7)); //21
