/**
 * Please write a simple script in a scripting language of your choice 
 * that prints the numbers from 1 to 100 on a new line. But for multiples 
 * of three print "Site" instead of the number and for the multiples of
 * five print "Host". For numbers which are multiples of both three
 * and five print "SiteHost".
 */

const numbersArray = Array.from({ length:100}, (_, index) => index+1)
const multipleOfX = (number, divider) => (number % divider === 0 )
const siteHostArray = numbersArray.map( number => {
    if (multipleOfX(number, 3) && multipleOfX(number,5)) return "SiteHost"
    if ( multipleOfX(number, 3)) return "Site"
    if ( multipleOfX(number, 5)) return "Host"
    return number
})
siteHostArray.forEach( element => {
    console.log(element)
})

Array.from({ length: 10 }, (first, index) => {
    console.log(first, index)
})