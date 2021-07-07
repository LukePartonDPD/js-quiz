exports.questionThree = () => {
  console.log("Question 3: in the function named answerThree, return a string formatted as a list of names separated by commas except for the last two names." +
    "This function will pass in an array of objects, each object containing a name, " +
    "which should be separated by an ampersand.");

  //tests
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }, {
    name: "Maggie"
  }])); //expected result:: "Bart, Lisa & Maggie"
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }])); //expected result: "Bart & Lisa"
  console.log(answerThree([{
    name: "Bart"
  }])); //expected result: "Bart"
  console.log(answerThree([])); //expected result: ""
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }, {
    name: "Maggie"
  }, {name: "Greg"}, {name: "Luke"}])); //expected result:: "Bart, Lisa & Maggie"
}

const answerThree = (names) => {
  //code here
  if (names.length === 0){
    return '';
  } else if (names.length === 1){
    return names[0].name;
  } else if(names.length === 2){
    return names[0].name + ' & ' + names[1].name;
  } else {
    let firstPart = '';
    for (let i = 0; i <= names.length-3; i++){
      firstPart = firstPart + names[i].name + ', '
    }
    let secondPart = names[names.length-2].name + ' & ' + names[names.length-1].name
    return firstPart + secondPart;
  }
  
}