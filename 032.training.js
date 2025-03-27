const numbers = Array.from(
    {length: 15},
    (_, index) => index+1
)
console.log(numbers)

const duplo = numbers.map( number => 2*number)
console.log(duplo)

const shift_spaces = 3

const shifted = [...numbers]
let current_step = 0
while ( current_step < shift_spaces) {
    const popped = shifted.pop()
    shifted.unshift(popped)
    current_step++
}

console.log(shifted)


const elementExists = shifted.find(element=> element ===133)
console.log(elementExists)

if (elementExists) {
    console.log("element exists")
} else {
    console.log("element does not exists")
}