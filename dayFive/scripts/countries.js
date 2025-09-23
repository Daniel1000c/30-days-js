//Create countries array
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//Check if Ethiopia is in array
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  //Add country to array
  countries.push("Ethiopia");
}

//Create ages array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort array
ages.sort();

console.log(ages);

//Find min and max of array
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min);
console.log(max);

//Find median age
let median = ages[4] / 2;

console.log(median);

//Find average
let average = ages.sum / ages.length;
console.log(average);
