
console.log("-----------Task-1-----------")

// let num1 = Number(prompt("Enter fist number: "))
// let num2 = Number(prompt("Enter second number: "))

// if (num1>num2){
//     alert(num1 + " is gratter")
// }
// else if(num2>num1){
//     alert(num2 + " is gretter")
// }
// else{
//     alert("Is equal")
// }



console.log("-----------Task-2-----------")

// getting usre input as number and store in a list
let list = [Number(prompt("num1")), 
            Number(prompt("num2")), 
            Number(prompt("num3")), 
            Number(prompt("num4")), 
            Number(prompt("num5")),
        ]

console.log("list of nums: ", list)

var max_num = 0;

for (let i = 0; i < list.length; i++) {
    // jo bhi big num hoga wo max_num ho jayega
    if (list[i] > max_num){ 
        max_num = list[i]          //i mean index of num
    }
}

console.log("max number : ", max_num)



 



// console.log("-----------Task-4-----------")
// for (let i = 1; i < 6; i++){
//     // console.log(i)
//     console.log(" * ".repeat(i))
// }

