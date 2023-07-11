// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg");

////////////////////////////////////////////////////////////////////////////////////

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
//     }

//     let p = new Person("Maaike", "van Putten");
//     console.log("Hi", p.firstname);

///////////////////////////Practice Exercise 7.1//////////////////////////////////////

// class Person  {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// let friend1 = new Person ("John", "Doe");
// let friend2 = new Person("Joan","Sur");
// console.log("Hello",friend1.firstName, friend1.lastName);
// console.log("Hello", friend2.firstName, friend2.lastName);

/////////////////////////////////////////////////////////////////////////////////////

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstName);
//     }
// }
// let p = new Person("Maaike", "van Putten");
// p.greet();

/////////////////////////////////////////////////////////////////////////////////////

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstName);
//     }
//     compliment(name, object){
//         return "That's a wonderful " + object + "," + name;
//     }
// }
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

//////////////////////Practice Exercise 7.2///////////////////////////////////////////

// class Person  {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName(){
//         return this.firstName.concat(" ",this.lastName);
//     }
// }
// let friend1 = new Person("Jen", "Wendin");
// let friend2 = new Person("John", "Doe");
// console.log(friend1.fullName());
// console.log(friend2.fullName());

////////////////////////////////////////////////////////////////////////////////////

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

///////////////////////////////////////////////////////////////////////////////////

// class Person {
//     #firstName; /* always mention the private fields with the # in front before you type the constructor */ 
//     #lastName;  
//     constructor(firstName, lastName) {
//         if(firstName.length > 1){
//             this.#firstName = firstName;
//         } else {
//             alert("Your name is too short!");
//         }
//         if(lastName.length > 1){
//             this.#lastName = lastName;
//         } else {
//             alert("Your surname is too short!");
//         }
//     }
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(firstName) {
//         if(firstName.length > 1){
//             this.#firstName = firstName;
//         } else {
//             alert("Your name is too short!");
//         }
//     }
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(lastName) {
//         if(lastName.length > 1){
//             this.#lastName = this.lastName;
//         } else {
//             alert("Your surname is too short!");
//         }
//     }
// }

// let p = new Person("Jen", "Soren");
// console.log(p.firstName, p.lastName);

///////////////////////////////////////////////////////////////////////////////////

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move(){
//         console.log("Moving at", this.currentSpeed);
//     }

//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

////////////////////////////////////////////////////////////////////////////////////

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }

// Person.prototype.introduce = function() {
//     console.log("Hi, I'm", this.firstname);
// };

// Person.prototype.favoriteColor = "green";

// let p = new Person("Maria", "Saga");
// p.introduce();
// console.log(`I like the color ${p.favoriteColor}`);

////////////////////////////Practice Exercise 7.3///////////////////////////////////

// class Animal{
//     #species;
//     constructor (species) {
//         this.#species = species;
//     }
// }

// let animal = new Animal ("snake");

// Animal.prototype.sound = function() {
//     console.log("Ssssss");
// };

// Animal.prototype.climbTree = function() {
//     console.log(true); 
// };

// Animal.prototype.coldBlooded = function() {
//     console.log("Yes");
// };

// animal.sound();
// animal.climbTree();
// animal.coldBlooded();

/////////////////////////////////////////////////////////////////////////////////////

// let s= "Hello";
// console.log(
//     s.concat(" there!")
//     .toUpperCase()
//     .replace("THERE","you!")
//     .concat(" You're amazing!")
// )

////////////////////////////Chapter Projects////////////////////////////////////////

// class Employee {
//     constructor (firstName, lastName, numYears) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.numYears = numYears;
        
//     }
// }

// const emp1 = new Employee("John", "Doe", 5);
// const emp2 = new Employee("Jane", "Doe", 12);
// const workers = [emp1, emp2];

// Employee.prototype.Info = function (){
//     return(this.firstName + " " + this.lastName + 
//     " is an employee who has worked here for " + this.numYears + " years.");
// }

// workers.forEach((person) => {
//     console.log(person.Info());
// });


// class Menue {
//     #menueIt1 = 12;
//     #menueIt2 = 20;
//     constructor(price1, price2) {
//         this.price1 = price1;
//         this.price2 = price2;
//     }

//     calc(){
//         return (this.price1 * this.#menueIt1) + (this.price2 * this.#menueIt2 * 10);
//     }

//     get total(){
//         return this.calc();
//     }
// }

// const amount1 = new Menue(5, 2);
// const amount2 = new Menue(0,6);
// console.log(amount1.total);
// console.log(amount2.total);
