///////////////////////////Practice Exercise 5.1//////////////////////////////

// let max = 10;
// let guessNum = Number(prompt("What number do you guess between 1 and 10?"));
// let num = Math.floor(Math.random() * (max + 1) + 1);
// console.log(num);

// let correct = false;

// while(!correct){
//     if (guessNum > num){
//         alert("You guessed too high.");
//         guessNum = Number(prompt("What number do you guess between 1 and 10?"));
//     } else if(guessNum < num){
//         alert("Your guess is too low.");
//         guessNum = Number(prompt("What number do you guess between 1 and 10?"));
//     } else if(guessNum === num){
//         correct = true;
//         alert("Congrats, you guessed correct. The secret number was " + num + '.');
//     }
// }

/////////////////////////Practice Exercise 5.2///////////////////////////////

// let counter = 0;
// let step = 5;

// do {
//     console.log(counter+= step);
// } while (counter < 100);

////////////////////////Practice Exercise 5.3/////////////////////////////////

// let myWork = [];

// for(let i = 1; i < 10; i++){
//     let status = i % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${i}`, status: status
//     };
//     myWork.push(temp);
// }
// console.log(myWork);

/////////////////////////Practice Exercise 5.4///////////////////////////////

// const myTable = [];
// const columns = Number(prompt("Input the amount of columns:"));
// const rows = Number(prompt("Input the amount of rows:"));
// let count = 0;

// for (let i = 0; i < rows; i++){
//     let tempTable = [];

//     for(let j = 0; j < columns; j++){
//         count++;
//         tempTable.push(count);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

////////////////////////Practice Exercise 5.5//////////////////////////////////

// const arrGrid = [];
// const cells  = 64;
// let count = 0;
// let rows;

// for( let i = 0; i < (cells + 1); i++){
//     if(count % 4 === 0){
//         if(rows != undefined){
//             arrGrid.push(rows);
//         }
//         rows = [];
//     }
//     count++;
//     let temp = count;
//     rows.push(temp);
// }
// console.table(arrGrid);

//////////////////////////Practice Exercise 5.6///////////////////////////////

// const myArray = [];

// for (let x = 0; x < 10; x++) {
//   myArray.push(x + 1);
// }

// console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for (let val of myArray) {
//   console.log(val);
// }

/////////////////////////////////////////////////////////////////////////////

//Break p108
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//         break;
//     }
// }

////////////////////////////Practice Exercise 5.7//////////////////////////////

// let book = {
//     title: "Hello",
//     author: "Devin Gin",
//     price: 250
// }

// console.log("Only temp:");
// for (let temp in book){
//     console.log(temp);
// }

// console.log(" ");
// console.log("book[temp]:");
// for (let temp in book){
//     console.log(book[temp]);
// }

// console.log(" ");
// console.log("temp, book[temp]: ");
// for (let temp in book){
//     console.log(temp, book[temp]);
// }

//////////////////////////////////////////////////////////////////////////////

// let cars = [
//     {
//         model: "Golf",
//         make: "Volkswagen",
//         year: 1999,
//         color: "black",
//     },
//     {
//         model: "Picanto",
//         make: "Kia",
//         year: 2020,
//         color: "red",
//     },
//     {
//         model: "Peugeot",
//         make: "208",
//         year: 2021,
//         color: "black",
//     },
//     {
//         model: "Fiat",
//         make: "Punto",
//         year: 2020,
//         color: "black",
//     }
// ];

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//         if (cars[i].color === "black") {
//             console.log("I have found my new car: ", cars[i]);
//             break;
//         }
//     }
// }

// for (let car of cars) {
//     if (car.color !== "black"){
//         continue;
//     }
//     if (car.year >= 2020) {
//         console.log( "We Could get this one: ", car);
//     }
// }

// let i = 1;
// while (i < 50) {
//     i++;
//     if ((i-1)%2 === 0) {
//         continue;
//     }
//     console.log(i-1);
// }

//////////////////////////Practice Exercise 5.8////////////////////////////////

// let output = "";
// let number = Number(prompt("Give the number you would like to skip."));

// for (let i = 1; i <= 10; i++){
//     if (i === number){
//         continue;
//     }
//     output += i;
// }
// console.log(output);

// let output = "";
// let number = Number(prompt("Give the number you would like to skip."));

// for (let i = 1; i <= 10; i++){
//     if (i === number){
//         break;
//     }
//     output += i;
// }
// console.log(output);

//////////////////////////////////////////////////////////////////////////////

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
//     ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;

//     for (let j = 0; j< groups[i].length; j++){
//         if (groups[i][j].startsWith("M")){
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2){
//             console.log("Found a group with two names starting with an M: ");
//             console.log(groups[i]);
//             break;

//         }
//     }
// }

// for (let group of groups){
//     for (let member of group){
//         if (member.startsWith("M")){
//             console.log("Found one starting with M: ", member);
//             break;
//         }
//     }
// }

// outer:
// for (let group of groups){
//     inner:
//     for (let member of group){
//         if (member.startsWith("M")){
//             console.log("Found one starting with M: ", member);
//             break outer;
//         }
//     }
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };

// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// console.log(" ");

// for (let prop in car){
//     console.log(prop);
// }

// console.log(" ");

// for(let key of Object.keys(car)){
//     console.log(key);
// }

///////////////////////////CHAPTER PROJECTS///////////////////////////////////

// let multiTable = [];
// let value = 10;

// for(let i = 0; i < value; i++){
//     const tempArr = [];
//     for(let j = 0; j < value; j++){
//         tempArr.push(i*j);
//     }
//     multiTable.push(tempArr);
// }
// console.table(multiTable);

//////////////////////////////////////////////////////////////////////////////