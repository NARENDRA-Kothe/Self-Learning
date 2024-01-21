
/* Join all elements of an array into a string.  */

let joinArray = [1,2,3,4,5,6]
console.log(joinArray.join());
console.log(joinArray.join(""));
console.log(joinArray.join("-"));

/* Concat join two or more arrays and returs a new array.*/

let arrayOne = ["Devendra","Priyanka"]
let arrayTwo = ["Narendra","Payal"]
let arrayThree = ["Bhanu"]

console.log(arrayOne.concat(arrayTwo,arrayThree))