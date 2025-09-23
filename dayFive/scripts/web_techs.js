const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Check if Sass exists in array
if (webTechs.includes("Sass")) {
  console.log("Sass is a css preprocess");
} else {
  //Add to array
  webTechs.push("Scss");
  console.log(webTechs);
}

//Concat string
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
