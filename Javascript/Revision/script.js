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
let len =  name.length;
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

