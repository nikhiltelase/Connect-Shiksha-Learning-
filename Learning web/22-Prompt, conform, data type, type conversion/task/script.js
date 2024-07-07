

console.log("------------Task-1------------")
// let num = 17;
// console.log(typeof num)

// let str = "nikhil"
// console.log(typeof str)

// let bool = true;
// console.log(typeof bool)

// let null_varible = null;
// console.log(typeof null_varible)

// let undefined_varible ;
// console.log(typeof undefined_varible)


console.log("------------Task-2--------------")
// let number = prompt("Enter a number: ")
// console.log(typeof number)
// number = Number(number)
// console.log(number)


console.log("------------Task-3-------------")
// let age = Number(prompt("What is your age?"));
// let conformation = confirm("Sure, are you above 18?");

// if(conformation){
//     console.log("You are eligibile for vote.")
// }else{
//     console.log("Sorry, you are not eligibile.")
// }

console.log("------------Task-4-------------")
// Number to string
let digit = 5;
console.log(typeof digit)
let str_digit = String(digit)
console.log(typeof str_digit)

// String to number
let str_num = "17"
console.log(typeof str_num)
let num_num = Number(str_num)
console.log(typeof num_num)

//automataclly conversion
console.log("15" + 5);
console.log("20" - "10");
console.log(10 + " apples " + 5 + " bananas");
console.log(10 + "5");
console.log("10" - 5);

console.log("------------Task-5------------")
//when usr enter crrect age than stop loop
while (true) {
    var age = Number(prompt("Enter your age: "))
    if (age > 1){
        break
    }    
  }

console.log("Your age is ", age)
