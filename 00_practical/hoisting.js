
// Example link - https://www.youtube.com/watch?v=WooWDj9q188

a = 10; // defined 
console.log(a)
var a; // declared
// Ans.: a variable can be used before it has been declared.
// Hoisting not working for Let and const.

var a = 10;
console.log("Ans-1 ", a + " " + b)
var b = 20; // 10 undefined

// How to run hoisting check below code

//declraration only top me host hota hai or defined jaha ka vaha hi rahta hai
/*
var a;
var b;
a = 10;
console.log(a + " " + b);
b = 20;
*/

// *************--Example-2--*********************

a = 7;
console.log("Ans-2 ", a); // 7
var a

var d;
console.log("Ans-3 ", d); // undefined
d = 6;


// *************--Example-3--*********************

//var username = "narendra";

function hoist(){
    var username = "payal";
    console.log("Ans-4 ", username) // payal
}
hoist()

hoist1()
function hoist1(){
    var username = "Narendra";
    console.log("Ans-5 ", username) // narendra
}

function hoist2(){
    console.log("Ans-6 ",username) // undefined
    var username = "payal";
}
hoist2()


const hoist3 = function(num){
 return num + 2
}
console.log("Ans-7", hoist3(8)); // 10


hoist4(3);  // Cannot access 'hoist4' before initialization
const hoist4 = function(num){
 return num + 2
}
