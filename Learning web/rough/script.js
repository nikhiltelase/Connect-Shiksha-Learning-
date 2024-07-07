// let array = [1, 2, 3, 4, 5]

// function dubualArray(num){
//     console.log(num*2)
// }

// array.forEach(dubualArray)

var button = document.querySelector("button");
var text = document.querySelector("h1");
console.log(button);
console.log(text);

button.addEventListener("click",(event) =>{
    console.log(event.target.innerText)
})