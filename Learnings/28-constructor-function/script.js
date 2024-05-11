// Today's topic

// 1. Arrow function
// 2. Constructor function
// ======================= Arrow function =======================

// function sum(a, b, c){
//     console.log(a+b+c)
// }

// sum(2, 2, 2);

// arrow function ko hum varible ke ander store kar skate hai
// let sum = (a, b, c) => {
//   return console.log(a+b+c);
// };

// sum(2, 2, 2);

// let hello = () => {
//   console.log("hello")
//   console.log("jay shree ram")
// }

// hello()

// ========================= Constructor function old js =======================

// class Student{
//     constructor(mark, subject){
//         this.mark = mark;
//         this.subject = subject
//     }
// }

// let student1 = new Student(100,"Math")
// let student2 = new Student(32, "Science")
// console.log(student1)
// console.log(student2)

// getter

// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   get fullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// let person1 = new Person("Akshay", "Dangi", 21);
// console.log(person1);
// console.log(person1.fullName)

// setter

// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   set setPersonalInfo(data) {
//     let { age, fname } = data;
//     this.age = age;
//     this.fname = fname;
//   }
// }

// // let person1 = new Person("Akshay", "Dangi", 21);

// person1.setPersonalInfo = { age: 100, fname: "Ak" };
// console.log(person1);

// ========================= Constructor function new js =======================

// function Person(age, name) {
//   this.name = name;
//   this.age = age;

//   this.getName = function () {
//     return this.name + " " + this.age;
//   };

//   this.setName = function (name, age) {
//     this.name = name;
//     this.age = age;
//   };
// }

// let person1 = new Person(21, "Akshay");
// // console.log(person1)
// // console.log(person1.getName())
// person1.setName("AK", 100);
// console.log(person1);
