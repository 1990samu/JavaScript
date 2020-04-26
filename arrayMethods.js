let fruits = [ 'Apple', 'Banana', 'Grapes']

// fruits.unshift('Papaya')  //unshift is used to add the element in the starting of the array
// console.log(fruits)

// delete fruits[1]; // deletes the array element from the given index and creates an empty space at that index position 

// fruits[1] = 'WaterMelon'
// console.log(fruits)

// fruits.splice(1,2) // stat from position 1 and delete two elements from that position
// console.log(fruits)


// fruits.splice(2,0,'Lemon','Guava'); // it says start from position 2, remove 0 element and then added Lemon, Guava
// console.log(fruits)

// fruits.splice(1,1,'Water Melon') // start from position 1 and remove one element and add 'Water Meon' in place of the removed element
// console.log(fruits)


// let myFavFruits = fruits.slice(1,2); // take elements from 1 to 2(excluding the 2) and put them in the array myFavFruits
// console.log(myFavFruits)

let evenNumbers = [2,4,6,8];
let oddNumbers = [1,3,5,7];
let primeNumbers = [2,3,5]
let numbers = evenNumbers.concat(oddNumbers, primeNumbers)
console.log(numbers)
console.log(numbers.length)