//  Topic

// 1. Call
// 2. Apply
// 3. Bind

// ================================= Call ===========================

// const person = {
//   getPercentage: function () {
//     return console.log(
//       (this.sub1 + this.sub2 + this.sub3 + this.sub4 + this.sub5) / 5
//     );
//   },
// };

// const person1 = {
//   sub1: 34,
//   sub2: 56,
//   sub3: 78,
//   sub4: 98,
//   sub5: 100,
// };

// const person2 = {
//   sub1: 34,
//   sub2: 45,
//   sub3: 78,
//   sub4: 98,
//   sub5: 34,
// };

// person.getPercentage.call(person2);

// const person = {
//   fullName: function (age, clg) {
//     return console.log(this.fName + " " + this.lName + " " + age + " " + clg);
//   },
// };

// const person1 = {
//   fName: "Akshay",
//   lName: "Dangi",
// };

// person.fullName.call(person1, 22, "NRI");

// ================================= Apply ===========================

// const student = {
//   totalNumber: function (age, name, lName, fr) {
//     return (
//       this.num1 +
//       this.num2 +
//       this.num3 +
//       " " +
//       age +
//       " " +
//       name +
//       " " +
//       lName +
//       " " +
//       fr
//     );
//   },
// };

// const student1 = {
//   num1: 67,
//   num2: 78,
//   num3: 99,
// };

// const student2 = {
//   num1: 78,
//   num2: 56,
//   num3: 76,
// };

// student.totalNumber.apply(student2, [22, "Akshay", "Dangi", "Ravi"]);

// console.log(
//   student.totalNumber.apply(student2, [22, "Akshay", "Dangi", "Ravi"])
// );

// ================================= Bind ===========================

const person = {
    fname: "Akshay",
    lname: "Dangi",
  
    getFullName: function () {
     return this.fname + " " + this.lname
    },
  };
  
  const person1 = {
    fname: "Abhishek",
    lname: "Meena",
  };
  
  const person2 = {
    fname: "nikhil",
    lname: "telase",
  };
  
  var getname = person.getFullName.bind(person2);
  
  console.log(getname());
  
  console.log(person.getFullName());