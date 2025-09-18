/*
//Prompt the user for age
let userAge = Number(prompt("Enter your Age:"));
*/

/*
if (userAge >= 18) {
  console.log("You are old enough to drive");
} else {
  //Subtract from current year
  let minimiumAge = 18;

  yearsLeft = minimiumAge - userAge;

  console.log(`You are left with ${yearsLeft} 15 years to drive.`);
}
*/

/*
//Create my age variable
myAge = 22;

if (userAge > myAge) {
  //Substract to find year difference
  let yearDifference = userAge - myAge;

  console.log(`You are ${yearDifference} older than me.`);
} else if (userAge < myAge) {
  yearDifference = myAge - userAge;

  console.log(`You are ${yearDifference} younger than me`);
} else {
  console.log("Put a real number");
}
*/

/**
let a = 4;
let b = 5;

//Create if statement
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//Prompt the user for a number
let number = Number(prompt("Enter a number:"));

//Create if statement
if (number % 2 == 0) {
  2;
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}



 */

/********Level 2 */
let grade = 50;
if (grade >= 80 && grade <= 100) {
  grade = "A";
  console.log(grade);
} else if (grade >= 70 && grade <= 89) {
  grade = "B";
  console.log(grade);
} else if (grade >= 60 && grade <= 69) {
  grade = "C";
  console.log(grade);
} else if (grade >= 50 && grade <= 59) {
  grade = "D";
  console.log(grade);
} else if (grade >= 0 && grade <= 49) {
  grade = "F";
  console.log(grade);
}

/**
//Prompt the user for season
let season = prompt("Enter a season:");

//Put season input to lowercase
let seasonInput = season.toLowerCase();
console.log(seasonInput);

//Create switch statement
switch (seasonInput) {
  case "september":
  case "october":
  case "november":
    console.log("Season is Autumn");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is summer");
    break;
  default:
    console.log("Please enter a month");
    break;
}
 
 */

/**

//Prompt user for day of the week
let dayOfTheWeek = prompt("What is the day today?");

let day = dayOfTheWeek.toLowerCase();

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${day} is a working day`);
    break;
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend`);
    break;
  default:
    console.log("Please input a day of th week");
    break;
}
 */
