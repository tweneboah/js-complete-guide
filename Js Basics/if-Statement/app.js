//if statement

var amount = 120;

if (amount === 200) {
  console.log("Yeah it is");
} else if (amount === 300) {
  console.log("The amount is " + amount);
} else {
  console.log("Nothing matches");
}

//DEMO

//create an app that will add 20$ to totalAmount of 500$ if the persn's name is Joe otherwise add 10$

var totalAmount = 500;
var persnName = "Joe";

if (persnName === "Joe") {
  totalAmount = totalAmount + 20;
  console.log(totalAmount);
} else {
  totalAmount = totalAmount + 10;
  console.log(totalAmount);
}
