//synthax
//created
// function greeting() {
//   //make your logic
//   console.log("Hi everyone");
// }

// //make use of the function = invoke/calling
// greeting();

//====funtion wth parameters====

// function message() {
//   console.log("Am not for messaging");
// }

//parameter are values that we passed into our function to make flexible/dynamic

//Parameter can be any variable

//Parameter must be used in your logic

//Arguments: These are values we passed into the function upon calling it.

//Remeber the parameters gives a way to pass in argument

//With  parameters
// function addTwoNumbers(a) {
//   console.log(a);
// }

// addTwoNumbers();

//=====FUNCTION RETURN KEYWORD===

function sayHello(name, message) {
  var myMsg = `${name} ${message}`;
  return myMsg;
}
var result = sayHello("Joe", "Good afternoon");
console.log(result);
