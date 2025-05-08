const fullName = require("./names");
const hobbies = require("./hobbies");

/*
function freeTimeEnjoyers() {
  const name = "Sergio";
  const surname = "Madre";
  const hobby1 = "sport";
  const hobby2 = "cibo";
  const hobby3 = "vino";

  return {
    fullName: fullName(name, surname),
    hobbies: hobbies(hobby1, hobby2, hobby3),
  };
}
*/

const freeTimeEnjoyers = () => ({
  fullName: fullName("Sergio", "Madre"),
  hobbies: hobbies("sport", "cibo", "vino")
});

console.log(freeTimeEnjoyers());
