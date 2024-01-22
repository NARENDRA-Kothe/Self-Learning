//Below Example for Second Largest Number

let secondLarge= [12,10,48,21,34,66,90,71,5,8];

secondLarge.sort((a,b) => a-b);

console.log("Second Large Number" +" " + secondLarge[secondLarge.length-2]);


//Below Example for largest Number

let largeValue= [12,10,48,21,34,66,90,71,5,8];

largeValue.sort((a,b) => a-b);

console.log("Large Number" +" " + largeValue[largeValue.length-1]);


//Below Example for Small Number

let smallValue= [12,10,48,21,34,66,90,71,5,8];

smallValue.sort((a,b) => a-b);

console.log("Small Number" +" " + smallValue[0]);