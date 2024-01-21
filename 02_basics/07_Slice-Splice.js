/* slice extract a section of an array and return a new array  */

let sliceArray = [1,2,3,4,5,6,7,8,9]
//let sliceArray = ["A","B","C","D","E","F","G"]

console.log(sliceArray) 
let sliced = sliceArray.slice(2,6);
console.log(sliced)


/* Splice change the contents of an array by removing, 
replacing, or adding elements.  */

let spliceArray =["suresh","suman","narendra","payal"];
spliceArray.splice(2,0, "Devendra", "Priyanka");
console.log(spliceArray);
