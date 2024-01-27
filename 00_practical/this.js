// this keyword is refer for current context.

let userDetails = {
name: "Narendra",
price: 999,

welcome: function(){
    console.log(`${this.name} welcome to our website`)
}
}
userDetails.welcome()