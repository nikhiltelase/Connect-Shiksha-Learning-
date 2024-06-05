// Todays's Topic

// 1. functions
// 2. Project 1

function abc(str, str2="kuch nhi aaya"){
    console.log(str)
    console.log(str2)
}

// // abc("hello from Akshay", "kdhdhi")
// abc("hello from Naman")

function sum(a, b = 100, c = 10) {
  let sum = a + b + c;
  console.log(sum);
}

// // sum(2); // 9
// // sum(2, 3); // 15
// sum(1, 1, 1)

function f(name) {
  console.log(name + " is a good boy");
  console.log(name + " is a engineer");
  console.log(name + " is programmer");
}

// f("Akshay");
// f("Priyansh");

// =================== Project 1 ==========================

// Returns a random integer from 0 to 10
let randomNumber = Math.floor(Math.random() * 11) ;
console.log(randomNumber);



// while(true){
//     let userNum = Number(prompt("Enter number between 1 to 10"))

//     if(userNum === randomNumber){
//         alert("You Win !!")
//         break
//     }else{
//         alert("you guessed it wrong, Please try again !!!")
//     }
// }
