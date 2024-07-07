const button = document.getElementById("button");
const menu = document.getElementById("menu");

var menuButtonOn = false;
button.addEventListener('click', () => {
    if (!menuButtonOn){
        // button.className = "menu-button function";
        button.classList.add("function");
        menu.style.display = 'flex';
        menuButtonOn = true;
    }else{
        button.className = "menu-button";
        menu.style.display = 'none';
        menuButtonOn = false;
    }
    
})
