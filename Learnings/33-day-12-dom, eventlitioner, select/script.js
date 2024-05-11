// var h1 = document.querySelector(".title")

// console.log(h1.innerHTML);

// h1.innerHTML = "Changed!!"

// h1.style.color = "red"
// h1.style.= backgroundColor = "green"
// h1.style.fontSize "200px"

// Event Listener

// var h1 = document.querySelector(".title")

// console.log(h1);

// h1.addEventListener("click", function(){
//    h1.innerHTML = "Changed !!"
//    h1.style.color = "red"
//    h1.style.fontSize = "60px"
// })

var bulb = document.querySelectorAll(".bulb");
var btn = document.querySelector("button");

// var flag = 0;

// btn.addEventListener("click", function () {
//   if ((flag == 0)) {
//     bulb.style.backgroundColor = "yellow";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     flag = 0;
//   }
// });

bulb.forEach((b) => {
  var flag = 0;
  btn.addEventListener("click", function () {
    if (flag == 0) {
      b.style.backgroundColor = "yellow";
      flag = 1;
    } else {
      b.style.backgroundColor = "transparent";
      flag = 0;
    }
  });
});