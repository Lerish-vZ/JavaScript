// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

////////////////////////////////////////////////////////////////////////////////////

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//////////////////////Practice Exercise 8.1///////////////////////////////////

// let uri = "How's%20it%20going%3F"
// let decodeduri = decodeURIComponent(uri);
// console.log(`Decode: ${decodeduri}`);

// let encodeduri = encodeURIComponent(decodeduri);
// console.log(`Encoded: ${encodeduri}`);

// let string = "http://www.basescripts.com?=Hello World";
// let encodedString = encodeURIComponent(string);
// console.log(`Encoded: ${encodedString}`);

//////////////////////////////Parsing Numbers/////////////////////////////////

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of", str_int, "is", typeof str_int);
// console.log("Type of", int_int, "is", typeof int_int);

////////////////////////////////////////////////////////////////////////////

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

///////////////////////////////////////////////////////////////////////////

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of ", float_float, "is", typeof float_float);*/

///////////////////////////////////////////////////////////////////////////

// function go(e){
//     eval(e.value);
// }

///////////////////////Array Methods (more)//////////////////////////////////

// let arr = ["Hello", "There", "How", "Is", "Your", 2023, "Going"];

// function printStuff(elem){
//     console.log(elem);
// }

// arr.forEach(printStuff);

////////////////////////////////////////////////////////////////////////////

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

//my Array

// let myArr = [78, 69, "nothing", 120, 36, "hello", 22, 51, 97, 2,"small", 56];

// function largeNum(element){
//     return ((typeof element === "number") && (element > 50))
// }

// let numArr = myArr.filter(largeNum);
// console.log(numArr);

///////////////////////////////////////////////////////////////////////////////

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// console.log(arr.every(checkString));

/////////////////////////////////////////////////////////////////////////////

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr);

// arr.copyWithin(0,3,4);
// console.log(arr);

// //omitting the last argument

// let arr2 = ["grapefruit", 4, "hello", 5.6, true, false];
// console.log(arr2);

// arr2.copyWithin(0,3);
// console.log(arr2);

/////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4];
// console.log("Original:" , arr)

// let mapped_arr = arr.map(x => x+1);
// console.log("Mapped:", mapped_arr);


// let arrFriends = ["Jean", "Kate", "Montie", "Zander"];
// console.log(arrFriends);

// let arrCompFriends = arrFriends.map(x => "My Friend " + x);
// let arrCompFriends = arrFriends.map(function (x) {return "My Friend " + x});
// console.log(`Who will be there? ${arrCompFriends}.`);

////////////////////////////////////////////////////////////////////////////

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye")); //note that it will display 2. Shows where last occurence of element that is repeated is.

/////////////////////////Practice Exercise 8.2/////////////////////////////

// const arrNames = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"];

// const arrUniqueNames = arrNames.filter((value, index, array) => { 
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arrUniqueNames);

/*//you send it the arrNames array as 'array' and with that it checks the 
index of the current value but indexof only finds the first occurence and 
thus the current values (if it is repeated) index will not be the same 
as the array.IndexOf(value) (because it only finds the first index of 
the occurence of the value.)*/

///////////////////////Practice Exercise 8.3/////////////////////////////////

// let arrNum = [60, 8, 56, 70, 85, 21, 14, 90];
// console.log(arrNum);

// let arrNewNum = arrNum.map(x => x*2);
// console.log(arrNewNum);

// let arrNewNum = arrNum.map(function (x) {return x*2});
// console.log(arrNewNum);

///////////////////////Converting a String to Array//////////////////////////////////

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

///////////////////////Converting an Array to String////////////////////////////////

// let letters = ['a', 'b', 'c'];
// let x = letters.join();
// console.log(x);

// let letters = ['a', 'b', 'c'];
// let x = letters.join('-'); //how to specify what comes between the elements
// console.log(x);

////////////////////////////////////////////////////////////////////////////

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

////////////////////What is a string at index///////////////////////////////

// let poem = "Roses are red, violets are blue, if I can do JS, so can you!";
// let pos1 = poem.charAt(10);
// console.log(pos1);

// //////////////////////////////////////////////////////////////////////////

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

////////////////////////////////////////////////////////////////////////////

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

//////////////////////////Practice Exercise 8.4//////////////////////////////////////

// const randomStr = "taKe thE bOoK to tHe stoRe anD tElL tHeM i sEnt yOU.";
// console.log(changeStr(randomStr));

// function changeStr(s) {    
//     s = s.toLowerCase();
//     let array = s.split(' ');
//     let newArray = [];

//     array.forEach(e => {
//         let word = e.slice(0,1).toUpperCase() + e.slice(1);
//         newArray.push(word);
//     });
//     return newArray.join(' ');
// }

/////////////////////Practice Exercise 8.5////////////////////////////////

// let str = "I love JavaScript";
// let arrVowels = ["a", "e", "i", "o", "u"];

// str = str.toLowerCase();

// arrVowels.forEach((letter, index) =>{
//     console.log(letter);
//     str = str.replaceAll(letter, index);
// })
// console.log(str);

///////////////////////////////////////////////////////////////////////////
////////////////////////////MATH METHODS///////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// let result = Math.sqrt(64);
// console.log(result);

// let result1 = Math.pow(5,3);
// console.log(result1);

/////////////////////////////////////////////////////////////////////////////

// let x = 6.78;
// let y = 5.34;

// console.log("X (round):", x, "becomes", Math.round(x));
// console.log("Y (round):", y, "becomes", Math.round(y));

// console.log("X (ceil):", x, "becomes", Math.ceil(x));
// console.log("Y (ceil):", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX (ceil):", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY (ceil):", negativeY, "becomes", Math.ceil(negativeY));

// console.log("X (floor):", x, "becomes", Math.floor(x));
// console.log("Y (floor):", y, "becomes", Math.floor(y));

// console.log("negativeX (floor):", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY (floor):", negativeY, "becomes", Math.floor(negativeY));

// console.log("X (trunc):", x, "becomes", Math.trunc(x));
// console.log("Y (trunc):", y, "becomes", Math.trunc(y));

////////////////////////Practice Exercise 8.6/////////////////////////////////

// console.log(Math.PI);

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*11));
// console.log(Math.floor(Math.random()*10 +1));
// console.log(Math.floor(Math.random()*100+1));

// console.log("Random Numbers: ")
// function randNum (min, max) {
//     return (Math.floor(Math.random()*(max - min) + min));
// }

// for (let i = 1; i < 100; i++){
//     console.log(randNum(1, 100));
// }

//////////////////////Practice Exercise 8.7/////////////////////////////////

// let d = new Date("July 2, 2004");
// console.log(d);

// let arrMonths = ['January', 'Feburary', 'March', 'April', 'May', 'June', 
//                 'July', 'August', 'September', 'October', 'November', 'December'];

// let day = d.getDay();
// console.log(day);

// let year = d.getFullYear();
// console.log(year);

// let month = d.getMonth();
// console.log(month);

// console.log(d.toDateString());

// console.log(arrMonths[month]);

////////////////////////////////////////////////////////////////////////////////
//              CHAPTER 8 PROJECTS                          //

// let word = prompt("What word would you like to scramble?").toLocaleLowerCase();

// function scramble(str){
//     let temp = '';
//     let cStr = str;
//     for (let i = 0; i <= str.length; i++){
//         let randNum = (Math.floor(Math.random() * cStr.length));
//         temp = temp + cStr.charAt(randNum);
//         cStr = cStr.replace(cStr.charAt(randNum), '');
//         console.log(`${i} Original = ${cStr} Scramble = ${temp}`);
//     }
// return console.log(temp);
// }

// scramble(word);


// const endDate = "Sept 1 2022";

// function countdown() {
//     const total = Date.parse(endDate) - new Date();
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const mins = Math.floor((total / 1000 / 60) % 60);
//     const secs = Math.floor((total / 1000) % 60);
//     return {
//         days,
//         hrs,
//         mins,
//         secs
//     };
// }

// function update() {
//     const temp = countdown();
//     let output = "";
//     for (const property in temp) {
//         output += (`${property}: ${temp[property]} `);
//     }
//     console.log(output);
//     setTimeout(update, 1000);
// }

// update();

////////////////////////////////////////////////////////////////////////