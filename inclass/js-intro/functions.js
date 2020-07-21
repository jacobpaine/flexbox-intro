const friends = ["Dave", "Phil", "Bob", "Greg"];
const notGreg = ["Dave", "Phil", "Bob"];

const checkForGreg = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Greg") {
      return "Greg is here.";
    } else {
      return "no Greg";
    }
  }
};

console.log("friends!:", checkForGreg(friends));
console.log("Not Greg!:", checkForGreg(notGreg));
