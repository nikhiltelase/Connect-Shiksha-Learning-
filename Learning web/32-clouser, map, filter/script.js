// Topic

// 1. Closure
// 2. Map
// 3. Filter
// 4. Reduce

// ==================== Closure =================

// let a = 10;
// function abc() {
//   console.log(a * a);
// }

// abc();

// let counter = 0;
// function add() {
//   return (counter = counter + 1);
// }
// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// function add() {
//   let counter = 0;

//   return function () {
//     return (counter = counter + 1);
//   };
// }

// let anotherFunc = add();

// console.log(anotherFunc());
// console.log(anotherFunc());
// console.log(anotherFunc());

// let anotherFunc = (function add() {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// })();

// console.log(anotherFunc());
// console.log(anotherFunc());
// console.log(anotherFunc());

// let anotherFunc = (() => {
//   let counter = 0;

//   return () => {
//     return (counter += 1);
//   };
// })();

// console.log(anotherFunc());
// console.log(anotherFunc());
// console.log(anotherFunc());

// ================================= MAP =============================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const dblnum = numbers.map((number) => {
//   console.log(number);
//   return number * 2;
// });

// console.log(dblnum);

// const strings = ["1", "2", "3", "4"];

// const stringsToNumber = strings.map((str) => {
//   return Number(str);
// });

// console.log(stringsToNumber);

// ================================= FILTER =============================

// const number = [1, 2, 3, 4, 5];

// const evenNumber = number.filter(function (number) {
//   return number % 2 == 0;
// });

// console.log(evenNumber);

// const number = [1, 2, 3, 4, 5];

// const temp = number.filter(function (number) {
//   return number > 2;
// });

// console.log(temp);

const users = [
    {
      userName: "akuu",
      name: "Akshay",
      age: 22,
      email: "hdangi224@gmail.com",
    },
    {
      userName: "abhi",
      name: "Abhishek",
      age: 19,
      email: "abhi23@gmail.com",
    },
    {
      userName: "nikuuu",
      name: "Nikhil",
      age: 19,
      email: "nikhil45@gmail.com",
    },
    {
      userName: "nidhi",
      name: "Nidhi",
      age: 19,
      email: "nidhi57@gmail.com",
    },
  ];
  
  const name = users.filter((user) => {
    return user.age > 18;
  });
  
  console.log(name);