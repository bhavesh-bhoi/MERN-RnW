// 1) What is the value of each variable in each line of the following code?
let num = 5; // num = 5 - initializes num with the value 5
let newNum = num++; //  newNum = 5, num = 6 - stores the current value of num, then increments num by 1
newNum = ++num; // newNum = 7, num = 7 - increments num by 1, then stores the new value of num in newNum

// 2) Find Errors in following code
// let 1age = 16; // Error: Variable names cannot start with a digit

let marks = 45;
// let isMarks = True; // Error: 'True' should be 'true' (lowercase)

let isPass = "true"; // Error: Boolean values should not be in quotes

// 3) Find length of the string
let name = "Bhavesh Bhoi";
let len = name.length;
console.log(len);

// 4) Find the first letter of the string

let nm = "Bhavesh";
console.log(nm[0]); // 'B' - Accesses the first character of the string

// 5) Find the last letter of the string

let nme = "Bhavesh";
console.log(nme[nme.length - 1]); // 'h' - Accesses the last character of the string

// 6) what is the output of the following code

console.log("Bhavesh" + 7);

// 7) what are the lengths empty string & string with space

let emptyString = "";
let stringWithSpace = " ";
console.log(emptyString.length); // 0
console.log(stringWithSpace.length); // 1

// 8) Write a javascript program to find whether the string is good or not

let str = "apple";
if (str[0] === "a" && str.length >= 3) {
  console.log("Good String");
} else {
  console.log("Bad String");
}

// METHOD CHAINING
let result = "  Javascript Revision  ";
let newResult = result.trim().toUpperCase();
console.log(newResult); // "HELLO WORLD"

// TEMPLATE LITERALS
let firstName = "Bhavesh";
let lastName = "Bhoi";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // "Bhavesh Bhoi"

// ARRAYS
let cars = ["Audi", "BMW", "Mercedes"];
cars.push("Tata"); // Adds at the end
cars.pop(); // Removes from the end
cars.shift(); // Removes from the beginning
cars.unshift("Aston Martin"); // Adds at the beginning

let start = ["january", "july", "march", "august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
// console.log(start); // ['july', 'june', 'march', 'august']

let colors = ["red", "green", "blue", "yellow"];
let length = colors.length; // returns length of array

// returns index of value if found else -1
colors.indexOf("red"); // 0
colors.indexOf("purple"); // -1
// returns true if value found else false
colors.includes("green"); // true
colors.includes("black"); // false

colors.reverse(); // Reverses the array[it will change origional array]

colors.sort(); // Sorts the array in ascending order[it will change origional array]

// let newColors = colors.slice(); // returns a shallow copy of array[it will not change origional array]
// let newColors = colors.slice(2); // returns new array from index 2 to end [it will not change origional array]
// let newColors = colors.slice(1, 4); // returns new array from index 2 to 3 [it will not change origional array]
let newColors = colors.slice(-2); // returns new array from last two elements [it will not change origional array]

let primaryColors = ["red", "blue", "yellow", "green", "purple"];
let secondaryColors = ["orange", "violet", "indigo"];
let allColors = primaryColors.concat(secondaryColors); // combines two arrays[it will not change origional array]

// Splice - modifies the original array by removing or replacing existing elements and/or adding new elements in place.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let removedFruits = fruits.splice(2); // removes elements from index 2 to end [it will change origional array]

fruits.splice(0, 2); // removes 2 elements from index 0 [it will change origional array]
fruits.splice(1, 1, "blueberry", "cantaloupe"); // removes 1 element from index 1 and adds two new elements [it will change origional array]