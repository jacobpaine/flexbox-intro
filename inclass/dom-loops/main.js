"use strict";

const ageCheck = (age) => {
  if (age < 21) {
    console.log("Restricted");
  } else {
    console.log("Enter");
  }
};

ageCheck(21);

const quoteFinder = (testString) => {
  console.log("quote finder");
  return "some string".indexOf(testString);
};

console.log(quoteFinder("string"));

const employee = {
  firstName: "Jacob",
  lastName: "Paine",
  role: "Junior Instructor",
  accountNumber: "123456789",
  isManager: false,
  titles: ["Developer", "Barn Janitor"],
  accolade: {
    title: "?",
    isCool: true,
    expires: "today",
  },
};

console.log(employee.firstName);
const keyToCheck = "accolade";
console.log("iscool? ", employee[keyToCheck].isCool);

// const findPeasents = (employee) => {
//   if (employee.firstName.slice(0, 1).toUpperCase() !== "M") {
//     employee.status = "peasent";
//   } else {
//     employee.status = "vip";
//   }
//   return employee;
// };

// console.log(findPeasents(employee));
console.log(employee.firstName[0]);
