var menu = document.querySelector(".menu");
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var sidebar = document.querySelector(".sidebar");

var flag = 0;

menu.addEventListener("click", function () {
  if (flag == 0) {
    line1.classList.add("active");
    line2.classList.add("active");
    sidebar.style.transform = "translateX(0)";
    sidebar.style.borderTopLeftRadius = "0"
    sidebar.style.borderBottomLeftRadius = "0"
    flag = 1;
  } else {
    line1.classList.remove("active");
    line2.classList.remove("active");
    sidebar.style.transform = "translateX(100%)";
    sidebar.style.borderTopLeftRadius = "50%"
    sidebar.style.borderBottomLeftRadius = "50%"
    flag = 0;
  }
});