const axios = require("axios");

exports.questionFive = async () => {
  console.log("Question 5: Work are organising a seminar for those who are planning their retirement. In the function answerFive, " +
    "make a HTTP GET request using axios with the url listed below and return a filtered array of employees where their age is equal or greater than 50." +
    "(Hint: axios is a promised based library, consider how to handle this so the data is returned. ");
  console.log("axios docs can be found here: https://github.com/axios/axios, guide can be found here: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/");
  console.log(await answerFive());
}

const answerFive = () => {
  const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";

  //code here
  return axios.get(url)
    .then(response => {return response.data;})
    .then(getFilteredEmployees)
    .catch(error => {
      console.log('Something has gone wrong!');
      console.log(error);
    });
}


function getFilteredEmployees(employees) {
  try{
    let filteredEmployees = [];
    const secondsInFiftyYears = 50 * 365 * 24 * 60 * 60

    //filter employee list
    let employeeDate;
    let secondsAlive;
    employees.forEach(employee => {
      employeeDate = new Date(employee.dateOfBirth);
      secondsAlive = (Date.now()/1000) - (employeeDate.getTime()/1000);
      if (secondsAlive >= secondsInFiftyYears){
        filteredEmployees.push(employee);
      }
    })

    return Promise.resolve(filteredEmployees);
  } catch (err){
    return Promise.reject(new Error('Error while filtering!'));
  }
}