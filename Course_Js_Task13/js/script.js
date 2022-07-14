"use strict";

// 1
//const x = 10, y = 7;
//const result = (x > y) ? alert("x больше, чем y") : alert("x не больше, чем y");

// 2
/*
const num = +prompt("Enter the number")

if (num % 2 === 0 ) {
  alert("Even" + num + "Number")
} else {
  alert("odd" + num + "Number")
}
*/

// 3
/*
const a = prompt("Enter the number"); 

if (Math.sign(a) === 1) {
  console.log("«Number»" + a + "«Positive»");
  console.log("Number of digits:", a.length);
}else if(!!Math.sign(a)) {
  console.log("«Number»" + a + "«Negative»");
  console.log("Number of digits:", a.length);
}
*/

// 4
/*
const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");
const num3 = prompt("Enter third number: ");
let max;

if(num1 >= num2 && num1 >= num3) {
    max = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    max = num2;
}
else {
    max = num3;
}
alert("Maximum number is " + max);
*/

// 5
/*
function check(a, b, c)
{
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}
 
const a = +prompt("Enter first number");
const b = +prompt("Enter second number");
const c = +prompt("Enter third number");
    if (check(a, b, c))
        console.log("Valid");
    else
        console.log("Invalid"); 

    */
