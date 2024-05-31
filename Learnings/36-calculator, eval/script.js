var input = document.querySelector("input");
var buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var btnText = e.target.innerText;

    if (btnText === "AC") {
      input.value = "";
    } else if (btnText === "DEL") {
      input.value = input.value.slice(0, -1);
    }
    else if(btnText === "="){
      try {
        input.value = eval(input.value)
      } catch (error) {
        alert("Invalid Expression")
        input.value = ""
      }
    }
    else {
      input.value += btnText;
    }
  });
});