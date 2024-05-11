//------------ Arrow Function----------------

//Traditional function 
// function add(a, b) {
//     return a + b;
//   }
// let result = add(2, 5);
// console.log(result)

//Arrow function
// const add = (a, b) => {
//     return a + b;
//   };

// let result = add(2, 5);
// console.log(result)
  

//-----------------Constructor functions in old javascript--------------
// class Person {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     // Getter method
//     get getAge() {
//         return `${this.name} is ${this.age} years old.`;
//     }

//     // Setter method
//     set setInfo(info) {
//         let { name, age } = info;
//         this.name = name;

//         if (age > 0) { 
//             this.age = age;
//         } else {
//             console.log("Age not a positive number.");
//         }
//     }
// }

// let person1 = new Person("ram", 20, "ram@example.com");
// let person2 = new Person("shyam", 30, "shyam@example.com");

// // Using getter methods to access values
// console.log(person1.getAge);

// // Using setter methods to modify values
// person1.setInfo = { "name": "nikhil", "age": 21 };
// console.log(person1);


//-----------------Constructor functions in New javascript--------------
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  
    // Getter 
    this.info = function() {
      return `${firstName} ${lastName} is ${this.age} years old`;
    }
  
    // Setter 
    this.setAge = function(newAge) {
      if (newAge > 0) {
        this.age = newAge;
      } else {
        console.log("Age not positive number.");
      }
    }
  }
  
let person1 = new Person("Ram", "Kumar", 25);
let person2 = new Person("Sita", "Dev", 30);

console.log(person1)
console.log(person2)
// Access age using getter
console.log(person1.info()); 
  
// Modify age using setter 
person2.setAge(-10);
person2.setAge(35);
console.log(person2)
  

  