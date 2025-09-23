//Create empty array
const friends = ["Bob", "Mary", "Phil", "Mark", "Bruce"];

//Find length of array
console.log(friends.length);

//Get first item, middle item, and last item of array
console.log(friends[0]);
console.log(friends[2]);
let lastIndex = friends.length - 1;
console.log(friends[lastIndex]);

//Create mixdatatypes array
const mixedDataTypes = [
  "String",
  25,
  true,
  {
    skill: ["html", "javascript", "css"],
  },
  undefined,
  null,
  "Bob",
];

//Create companies array
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Print out array
console.log(companies);

//Find out length of array
console.log(companies.length);

//Print out first, middle and last company
console.log(companies[0]);
console.log(companies[3]);
let lastArrayIndex = companies.length - 1;
console.log(companies[lastArrayIndex]);

//Print out each company
console.log(companies[0]);
console.log(companies[1]);
console.log(companies[2]);
console.log(companies[3]);
console.log(companies[4]);
console.log(companies[5]);
console.log(companies[lastArrayIndex]);

//Change each company name to uppercase
console.log(companies[0].toUpperCase());
console.log(companies[1].toUpperCase());
console.log(companies[2].toUpperCase());
console.log(companies[3].toUpperCase());
console.log(companies[4].toUpperCase());
console.log(companies[5].toUpperCase());
console.log(companies[lastArrayIndex].toUpperCase());

//Print out array like a sentence
console.log(
  `${companies[0]}, ${companies[1]}, ${companies[2]}, ${companies[3]}, ${companies[4]}, ${companies[5]}, ${companies[lastArrayIndex]} are big it companies`
);

//Check to see if company exists in array
arrayIndex = companies.indexOf("Amazon");

if (arrayIndex === -1) {
  console.log("Company does not exist");
} else {
  console.log(arrayIndex);
}

/*
//Sort array using sort method
console.log(companies.sort());

//Reverse array
console.log(companies.reverse());
*/

//Slice out first three companies from array
console.log(companies);
console.log(companies.slice(3, 7));

//Slice out last three from array
console.log(companies);
console.log(companies.slice(0, 4));

//Slice out middle company from array
console.log(companies);
console.log(companies.slice(2, 3));

//Remove first company from array
console.log(companies);
console.log(companies.shift());
console.log(companies);

//Remove last item from array
console.log(companies);
console.log(companies.pop());
console.log(companies);

//Remove all items from array
companies.length = 0;
console.log(companies);

//////level 2
//Remove all punctuations from text
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.split(" ");

console.log(words);

//Check array length
console.log(words.length);

//Create shopping list array
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//Add meat to beginning to array
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);

//Add sugar to end of array
shoppingCart.push("sugar");
console.log(shoppingCart);

//Modify tea to green tea
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
