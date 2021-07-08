exports.questionFour = () => {
  console.log("Question 4: Your task is to build a high-score class of the classic Frogger game. " +
    "Your task is to write methods that return the highest score from the list, the last added score and the three highest scores. " +
    "Instructions: Within the class called HighScores define a new property called scoresInput which is an array. " +
    "Then create the following methods: " +
    "scores (getter) returns the scoresInput. " +
    "latest (getter) returns the last score in the array. " +
    "personalBest (getter) returns the highest score from the scoresInput. " +
    "personalTopThree (getter) returns the top 3 scores");

  const scoresInput = [30, 50, 20, 70];
  const scores = new HighScores(scoresInput).scores; //expected result: [30, 50, 20, 70]
  console.log(scores);

  const latestInput = [100, 0, 90, 30];
  const latest = new HighScores(latestInput).latest; //expected result: 30
  console.log(latest);

  const pbInput = [40, 100, 70];
  const pb = new HighScores(pbInput).personalBest; //expected result: 100
  console.log(pb);

  const top3Input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
  const top3Result1 = new HighScores(top3Input).personalTopThree; //expected result: [ 100, 90, 70 ]
  console.log(top3Result1);

  const top3Input2 = [40, 20, 40, 30];
  const top3Result2 = new HighScores(top3Input2).personalTopThree; //expected result: [40, 40, 30]
  console.log(top3Result2);
}

class HighScores {
  //code here
  constructor(scoresInput){
    this.scoresInput = scoresInput;
  }

  get scores() {
    return this.scoresInput;
  }

  get latest() {
    return this.scoresInput[this.scoresInput.length-1];
  }

  get personalBest() {
    // let orderedScores = this.scoresInput;
    // orderedScores.sort((a,b)=>{return b-a;});
    // return orderedScores[0];

    return Math.max(...this.scoresInput);
  }

  get personalTopThree() {
    let orderedScores = this.scoresInput;
    orderedScores.sort((a,b)=>{return b-a;});
    return orderedScores.slice(0,3);
  }

}