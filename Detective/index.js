console.clear();
const prompt = require("prompt-sync")();

/* No array version */
let positiveAnswers = 0;

console.log("")

let firstQuestion = prompt("Do you live here at this building? ").toUpperCase().replace(/ /g, "");
while (firstQuestion != 'YES' && firstQuestion != 'NO'){
  firstQuestion = prompt("Do you live here at this building? ").toUpperCase().replace(/ /g, "");
}
if (firstQuestion === "YES") {
  positiveAnswers += 1;
}

let secondQuestion = prompt("Were you here last night? ").toUpperCase().replace(/ /g, "");
while (secondQuestion != 'YES' && secondQuestion != 'NO'){
  secondQuestion = prompt("Were you here last night? ").toUpperCase().replace(/ /g, "");
}''
if (secondQuestion === "YES") {
  positiveAnswers += 1;
}

let thirdQuestion = prompt("Can anyone confirm your alibi? ").toUpperCase().replace(/ /g, "");
while (thirdQuestion != 'YES' && thirdQuestion != 'NO'){
  thirdQuestion = prompt("Can anyone confirm your alibi? ").toUpperCase().replace(/ /g, "");
}
if (thirdQuestion == "YES") {
  positiveAnswers += 1;
}

let fourthQuestion = prompt("Did you know the victim? ").toUpperCase().replace(/ /g, "");
while (fourthQuestion != 'YES' && fourthQuestion != 'NO'){
  fourthQuestion = prompt("Did you know the victim? ").toUpperCase().replace(/ /g, "");
}
if (fourthQuestion == "YES") {
  positiveAnswers += 1;
}
let fivethQuestion = "";
if (fourthQuestion == "YES") {
  fivethQuestion = prompt("Were you more than friends? ").toUpperCase().replace(/ /g, "");
  while (fivethQuestion != 'YES' && fivethQuestion != 'NO'){
    fivethQuestion = prompt("Were you more than friends? ").toUpperCase().replace(/ /g, "");
  }
  if (fivethQuestion == "YES") {
    positiveAnswers += 1;
  }
} else {
  fivethQuestion = prompt("Heve you ever seen or listened anything strange here? ").toUpperCase().replace(/ /g, "");
  while (fivethQuestion != 'YES' && fivethQuestion != 'NO'){
    fivethQuestion = prompt("Heve you ever seen or listened anything strange here? ").toUpperCase().replace(/ /g, "");
  }
  if (fivethQuestion == "YES") {
    positiveAnswers += 1;
  }
}

console.log(positiveAnswers);

if (positiveAnswers < 3) {
  console.log("Innocent") ;
} else if (positiveAnswers === 3) {
  console.log("Suspect")
} else {
  console.log("Guilty")
}
