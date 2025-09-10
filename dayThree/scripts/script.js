//Create variables
const firstName = "Daniel";
const lastName = "Velez";
const country = "Puerto Rico";
let age = 22;
let isMarried = false;
let year = 2025;

//Check type of each variable
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/**
 //Check if '10' is equal to 10
console.log("10" == 10);
console.log("10" === 10);

//Check if parseint is equal to 10
console.log(parseInt("9.8") == 10);
console.log(parseInt("9.8") === 10);

//Write three truthy booleans
let positiveNumber = 2;
let negativeNumber = -3;
let string = "Hello I am truthy string";

//Write three falsy values
let number = 0;
let anotherString = "";
let isAtheltic = false;
* 
 */

/**
//Figure result out from comparison operators
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false
console.log("python" < "jargon"); //Make the statement falsy
 */

//Figure out the results of using logical operators
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true

//Date object
const now = new Date();

//Get year
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

/////Level 2

/**
//Prompt the user for base
let basePrompt = prompt("Enter base:");
console.log(basePrompt);

//Prompt the height
let heightPrompt = prompt("Enter Height");
console.log(heightPrompt20);
//Calculate result
let area = 0.5 * basePrompt * heightPrompt;

//Display to console
console.log(`The are of the triangle is ${area}`);


 */

/*
//Prompt the user for sides a b and c
let sideA = Number(prompt("Enter side A"))5;
let sideB = Number(prompt("Enter side B"))5;
let sideC = Number(prompt("Enter side C"))5;

//Calculate perimeter
let perimeter = sideA + sideB + sideC;

console.log(`The perimeter of the triangle is ${perimeter}`);
*/

//Prompt the length and width10

/**
let lengthPrompt = Number(prompt("What is the length"));
let widthPrompt = Number(prompt("What is the width"));

//Calculate the area
let area = lengthPrompt * widthPrompt;
let perimeter = 2 * (lengthPrompt + widthPrompt);

console.log(`The area is ${area}`);
console.log(`The perimeter is ${perimeter}`);
 */

/**
//Prompt the user for radius
const PI = 3.14;
let radius = Number(prompt("What is the radius"));

let area = PI * radius * radius;

let c = 2 * PI * radius;

console.log(`The area is ${area}`);
console.log(`The circumference is ${c}`);

 */

/*
//Prompt the user for hours and rate
let hourPrompt = Number(prompt("Enter hours:"));
let ratePerHour = Number(prompt("Enter rate per hour:"));

let weeklyEarning = hourPrompt * ratePerHour;
console.log(`Your weekly earning is ${weeklyEarning}`);

*/

/*
//Prompt the user for birth date
let birthYear = Number(prompt("Enter Birth Year:"));

//Calculate age
let currentYear = new Date().getFullYear();

let userAge = currentYear - birthYear;

if (userAge >= 18) {
  console.log(`You are ${userAge} and are able to drive`);
} else {
  console.log(`You are ${userAge} and allowed to drive yet`);
}
*/
//Get year, month, day hour and minutes
let newYear = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();

console.log(`${newYear}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${newYear} ${hour}:${minutes}`);
console.log(`${day}/${month}/${newYear} ${hour}:${minutes}`);

///Level 3

console.log(`${newYear}-${month}-${day} ${hour}:${minutes}`);
