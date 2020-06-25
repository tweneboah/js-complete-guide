//====NUMBER

/**
 * The number type represents both integer and floating point numbers.
 There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
 */
//======================

var age = 23;
var grade = 67.3;
var amount = -45;

var add = 4 + 12;

//=====STRINGS====
//A string in JavaScript must be surrounded by quotes.
//In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
//==================

var firstName = "Ben";
var firstName2 = "Ben2";
var firstName3 = `Ben 3`;

//====BOOLEAN====
//Boolean (logical type)
//The boolean type has only two values: true and false.
//=============

var paid = true;
var married = false;

//====NAN Not a Number=====
//This is associate to a computational error. It is a result of an incorrect or an undefined mathematical operation
//This is mostly occures when you are trying to operate mathematical operations on strings especially division
//--------------------

var divide = "country" / 2;
var add = "phone" + 3;

//====null======
//It’s just a special value which represents “nothing”, “empty” or “value unknown”.
//=====

var salary = null;

//====undefined====
//The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
//=========

var schoolName;

//====object
//object for more complex data structures.
//=================

//======TYPE OFF====
//The typeof operator
//This is use to check the type of data type

console.log(typeof "Ben");
console.log(typeof 34);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
