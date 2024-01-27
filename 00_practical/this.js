
// this keyword is refer for current context.

// this keyword does not work for arrow function.

//***********-below example-1-**********

// let userDetails = {
// name: "Narendra",
// price: 999,

// welcome: function(){
//     console.log(`${this.name} welcome to our website`)
// }
// }
// userDetails.welcome()


//***********-below example-2-**********

/* When used in an object method, this refers to the object.
In the example on below of this page, this refers to the person object.
Because the fullName method is a method of the person object. */

const person = {
    firstName   : "Narendra",
    lastName    : "Kothe",
    phone       : 1234567890,
    getFullName : function() {
      return ' First Name:' + this.firstName + ', Last Name:' + this.lastName + ', Phone: ' + this.phone;
    }
};

console.log('this in object method', person.getFullName());

//***********-below example-3-**********

// if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword: 
const user = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: () => this.name + ' ' + this.surname
}

console.log(user.sayName());