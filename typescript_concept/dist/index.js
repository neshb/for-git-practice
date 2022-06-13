"use strict";
let greeting = "hello world";
const integerArray = [1, 2, 3, 4, 5];
const num = 10;
console.log(greeting, integerArray, num);
const addNumber = (n1, n2) => {
    return n1 + n2;
};
console.log("addNumber", addNumber(2, 3));
// there are data types
// number -> all type like integer and float
// string -> ""
// boolean -> true, false
// object 
// array
// enum 
// union 
const personName = "John";
const score = '50';
const score1 = score;
const score2 = 42.50;
const sum = score1 + score2;
console.log("name " + personName);
console.log("first score: " + typeof score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
