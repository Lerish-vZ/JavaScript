// function sayHello(){
//     let you = prompt("What's your name?");
//     alert(`Hello ${you}!`);
// }

// sayHello();

//////////////////////////Practice Exercise 6.1///////////////////////////////

// function add(num1, num2){
//     answer = num1 + num2;
//     alert(`${num1} + ${num2} = ${answer} `);
// }

// let num1 = Number(prompt("What number would you like to add to?"));
// let num2 = Number(prompt(`How much would to add to ${num1}?`));

// add(num1, num2);

///////////////////////////Practice Exercise 6.2//////////////////////////////

// let arrAdjectives = ['Amazing', 'Wonderful', 'Friendly', 'Patient'];
// ask();
// function ask(){
//     let adjec = arrAdjectives[Math.floor(Math.random() * arrAdjectives.length)];
//     let name = prompt("What is your name?");
//     console.log("You are " + adjec + " " + name);
// }

///////////////////////////Practice Exercise 6.3//////////////////////////////

// let num1 = Number(prompt("What number would you like to use?"));
// let operator = prompt("Would you like to add (+) or subtract (-)?");
// let num2 = Number(prompt("What other number would you like to use?"));

// function sum(number1, number2, oper){
//     if (oper === "+"){
//         return number1 + number2;
//     } else if( oper === "-"){
//         return number1 - number2;
//     } else {
//         return number1 + number2;
//     }
// }

// console.log(`${num1} ${operator} ${num2} =`, sum(num1,num2,operator));

///////////////////////////////////////////////////////////////////////////////////

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
//     }

//     addTwoNumbers();
//     addTwoNumbers(8,5);

////////////////////////////////////////////////////////////////////////////////////

// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(5,3);

///////////////////////////////////////////////////////////////////////////////////

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

//////////////////////////////////////////////////////////////////////////////////

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

/////////////////////////////////////////////////////////////////////////////////

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
//     }
//     let arr = [5, 9];
//     let arr2 = [6, 7];
//     addFourNumbers(...arr, ...arr2);

/////////////////////////////////////////////////////////////////////////////////

// function someFunction(param1, param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

////////////////////////Practice Exercis 6.4/////////////////////////////////

// let arrValues = [];

// let calc = (num1, num2) => num1 + num2;

// for (let i = 0; i < 10; i++){
//     let value1 = i * 5;
//     let value2 = i * i;

//     let response = calc(value1, value2);

//     arrValues.push(response);
// }
// console.log(arrValues);

/////////////////////////////////////////////////////////////////////////////////

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//     }
//     let z = testAvailability();
//     console.log("Outside the function:", z);
//     console.log("Not available here:", y);

////////////////////////////////////////////////////////////////////////////////

// console.log("var");
// function doingStuff() {
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// console.log(" ");
// console.log("let");
// function doingStuff() {
//     if(true){
//         let x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

///////////////////////////////////////////////////////////////////////////////

// (function () {
//     console.log("IIFE!");
// }) ();

// (() => {
//     console.log("run right away");
// }) ();

// ((num1, num2) => {
//     console.log(`${num1} ${num2}`);
//     return console.log(num1 + num2);
// }) (5,3);

///////////////////////////Practise Exercise 6.5//////////////////////////////


// let str = "1000";
// console.log(str);

// (() => {
//     let str = "98";
//     console.log(str);
// }) ();

// console.log("");
// let result = (function () {
//     let result = 62;
//     return result;
// }) ();
// console.log(result);

// ((name) => {
//     console.log(name);
// }) ("Lerisha");

////////////////////////////////////////////////////////////////////////////

// function getRecursive (nr) {
//     console.log(nr); 
//     if (nr > 0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

/////////////////////////////////////////////////////////////////////////////

// function logRecursive(nr) {
//     console.log("Started function: ", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function: ", nr);
// }
// logRecursive(3);

///////////////////////Practise Exercise 6.6////////////////////////////////

// function factorial(num) {
//     if (num > 0){
//         console.log(num);
//         //??????
//         factorial(--num);
//     } else if(num = 0){
//         console.log("1");
//     }
//     }
// let number = Number(prompt("What numbers factorial would you like?"));
// factorial(number);

/////////////////////////////Practise 6.6 Answer//////////////////////////////

// function calcFactorial(nr) {
//     console.log(nr);
//     if (nr === 0) {
//         return 1;
//     }
//     else {
//         return nr * calcFactorial(--nr);
//     }
// }
// console.log(calcFactorial(2));

///////////////////////////////////////////////////////////////////////////

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//         }
// }
// doOuterFunctionStuff(2);

///////////////////////////////////////////////////////////////////////////

//Will throw ERROR
// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(2);

// //Will throw ERROR
// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
// }
// doInnerFunctionStuff(3);

/////////////////////Practise Exercise 6.7/////////////////////////////////

// let count = 10; 

// function countDown(start){
//     console.log(start);
//     // if (start < 1){
//     //     return countDown(--start);
//     // }
//     if (start > 0){
//         return countDown(--start);
//     }
// }
// countDown(count);

///////////////////////////////////////////////////////////////////////////

// let functionVariable = function (){
//     console.log("Not so secret though.");
// };
// //functionVariable();

// function doStuff (stuff) {
//     stuff();
//     console.log("Function doStuff");
// }

// doStuff(functionVariable);

///////////////////////Practise Exercise 6.8//////////////////////////////

// let something = function (words){
//     console.log(words);
// };
// something(prompt("What would you like to print?"));

//////////////////////////CHAPTER PROJECTS/////////////////////////////////// 

// const displayCount = function counter(i){
//     console.log(i);
//     if (i < 10){
//         return counter(i + 1);
//     }
//     return;
// }
// displayCount(Number(prompt("Where would you like to start counting?")));


// let printOne = () => console.log('One');
// let printTwo = () => console.log('Two');

// let printThree = () => {
//     console.log('Three');
//     printOne();
//     printTwo();
// }

// let printFour = () => {
//     console.log('Four');
//     setTimeout(printOne, 0);
//     setTimeout(printThree, 1000);
// }

// printOne();
// printTwo();
// printThree();
// printFour();

//////////////////////////////////////////////////////////////////////////////