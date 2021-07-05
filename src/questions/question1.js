exports.questionOne = () => {
  console.log("Question 1: In the function named answerOne, return a reversed string of the value passed into the function. ");

  //tests below
  console.log(answerOne("I am hungry!")); //expected result: !yrgnuh ma I
  console.log(answerOne("reward!")); //expected result: drawer
  console.log(answerOne("Ramen")); //nemaR
  console.log(answerOne("robot")); //tobor
}

const answerOne = (str) => {
  //code here
  let newString = '';
  for (let i = str.length-1; i >= 0; i--){
    newString = newString + str[i];
  }
  return newString;
  
}