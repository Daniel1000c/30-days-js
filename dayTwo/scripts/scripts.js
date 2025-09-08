//Declare challenge variable
let challenge = "30 Days Of JavaScript";
console.log(challenge);

//Print length of challenge
console.log(challenge.length);

//Change string to all uppercase
console.log(challenge.toUpperCase());

//Change string to lowercase
console.log(challenge.toLowerCase());

//Using substr
console.log(challenge.substring(3));

//Slice out days from challenge prhase
console.log(challenge.slice(0, 3));

//Check to see if word has script in word
console.log(challenge.includes("Script"));

//Split word into array
console.log(challenge.split(" "));

//Split array by comma
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(","));

//Replace word javasacript
console.log(challenge.replace("Javascript", "Python"));

//What is the char index 15
console.log(challenge.charAt(15));

// What is teh character code of j
console.log(challenge.charCodeAt("J"));

//Use indexof to determine first occurence of a
console.log(challenge.indexOf("a"));

//Find the last occurence of a
console.log(challenge.lastIndexOf("a"));

//Find the first occurence of because
let anotherString =
  "You cannot end a sentence with because because because is a conjunction";
console.log(anotherString.indexOf("because"));

//Find the last occurence of because
console.log(anotherString.lastIndexOf("because"));

//Use search to find first occurence of because
console.log(anotherString.search("because"));

//Use trim to get rid of whitespace
let whiteSpace = " 30 Days Of JavaScript ";
console.log(whiteSpace.trim());

//Use start with
console.log(challenge.startsWith("30"));

//Use ends with
console.log(challenge.endsWith("Script"));

//Find all a in challenge string
console.log(challenge.matchAll("a"));

//Concat two strings
firstString = "30 Days of";
secondString = "JavaScript";
console.log(firstString.concat(" ", secondString));

//Repeat challenge phrase two times
console.log(challenge.repeat(2));

//////Level 2
console.log(
  "There is no exercise better for the heart than reaching down and lifting people up."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

//Check type of 10
console.log(typeof "10" == 10);

//Check parsefloat
console.log(typeof parseFloat("9.8") === 10);

//Generate random number between 100 and 0
console.log(Math.floor(Math.random() * 100)) + 1;

//Generate random number between 50 and 100
console.log(Math.floor(Math.random() * 255)) + 1;

//Create random string from javascript string
let randomString = "JavaScript";
let randomLetter = Math.floor(Math.random() * randomString.length);
console.log(randomString[randomLetter]);

//Create javascript pattern
console.log(`1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n  
    `);

//Slice becauase from string
console.log(anotherString.substring(30, 54));

///////Level 3

//Find the amounts of love in the sentence
let loveString =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(loveString.match("love"));
