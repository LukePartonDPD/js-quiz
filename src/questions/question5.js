const axios = require("axios");
/**
 * I CHEATED BY MAKING ANSWER 5 ASYNC AND ADDED RELEVENT ASYNC AND WAIT STATEMENTS TO MODULE EXPORT
 * THIS IS ABOVE THE LINE TELLING ME TO WRITE STUFF
 * 
 */

exports.questionFive = async () => {
  console.log("Question 5: Work are organising a seminar for those who are planning their retirement. In the function answerFive, " +
    "make a HTTP GET request using axios with the url listed below and return a filtered array of employees where their age is equal or greater than 50." +
    "(Hint: axios is a promised based library, consider how to handle this so the data is returned. ");
  console.log("axios docs can be found here: https://github.com/axios/axios, guide can be found here: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/");
  console.log(await answerFive());
}

const answerFive = async () => {
  //code here
  const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees"
  //return await getFilteredEmployees("https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees");

  try{
    const response = await axios.get(url);
    return response.data.filter(employee => isDateFiftyYearsAgo(new Date(employee.dateOfBirth)));
  } catch (e){
    console.log('Something has gone wrong!');
    console.log(e);
  }
}

function isDateFiftyYearsAgo(inputDate){
  return ((Date.now()/1000) - (inputDate.getTime()/1000)) >= (50 * 365 * 24 * 60 * 60);
}

// async function getFilteredEmployees(url) {
//   try{
//     const response = await axios.get(url);
//     const employees = response.data;
//     let filteredEmployees = [];
//     const secondsInFiftyYears = 50 * 365 * 24 * 60 * 60

//     //filter employee list
//     let employeeDate;
//     let secondsAlive;
//     employees.forEach(employee => {
//       employeeDate = new Date(employee.dateOfBirth);
//       secondsAlive = (Date.now()/1000) - (employeeDate.getTime()/1000);
//       if (secondsAlive >= secondsInFiftyYears){
//         filteredEmployees.push(employee);
//       }
//     })

//     return filteredEmployees;
//   } catch (err){
//     console.log('Something has gone wrong');
//     console.log(err);
//   }
// }