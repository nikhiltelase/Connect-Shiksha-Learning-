// Task 1: JavaScript Environment and Console Output
console.log("Hello World!")

// Task 2: Using var, let, and const

// 1. var - is global scope varible;
// mean var ko hum block({}) 
// ke bahar define karnge to block ke ander bhi use kar sakte hai 
// aur chagnge bhi kar sakte hai per var ko block ke ander define
// karenge to block ke ander hi use kar sakte hai.
var num = 5     
console.log(num)

// 2. let - is block scope varible;
// mean let ko hum block ke ander define karnege to block ke ander 
// hi use kar sakte hai aur change kar sakte hai per block ke bahar use 
// aur chagnge nhi kar sakte.
let digit = 17;
console.log(digit)

// 3. const - is constant varible;
// mean const ko humne define kar diya to phir use change nhi kar sakte hai
const my_name = "nikhil"
// my_name = "siva"  //this is give a error
console.log(my_name)

// Task 3: Using prompt() to Collect User Input
console.log("---------------MY FIRST PROGRAM-------------")
let user_name = prompt("What is your name?")
console.log("Hello, ", user_name)

let user_age = prompt("What is youre age?")
console.log("Oh you are " + user_age + "years old.")

let work  = prompt("What can you do for leving?")
console.log("Wow your work " + work + " is so great.")

