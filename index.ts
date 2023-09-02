//tuples in typescript

//a special type of array with some restrictions on it

let tuple : [string, number, boolean]

tuple = ["ateeba", 12, true] //this should return an error

console.log(tuple);

import inquirer from "inquirer";

let a = await inquirer.prompt([
  {
    name: "Myname",
    message: "Whats your name?",
    type: "string"
  }
])
console.log(a);