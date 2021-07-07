exports.questionTwo = () => {
  console.log("Question 2: In the function named answerTwo, return the number of vowels in the given string. " +
    "The input string will only consist of lowercase letters and/or spaces");

  //tests below
  console.log(answerTwo("abracadabra")); //expected result: 5
  console.log(answerTwo("pear tree")); //expected result: 4
  console.log(answerTwo("o a kak ushakov lil vo kashu kakao")); //expected result: 13
  console.log(answerTwo("my pyx")); //expected result: 0
}

const answerTwo = (str) => {
  //code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++){
    if (vowels.includes(lowerStr[i])){
      vowelCount++;
    }
  }
  return vowelCount;
  
}