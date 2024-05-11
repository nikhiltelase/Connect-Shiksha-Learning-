const bulb = document.getElementById('bulb-img');
const bulbSwitch = document.getElementById('switch');

var bulbOn = false;

bulbSwitch.addEventListener('click', function(){
    if (!bulbOn){
        // bulb.style.backgroundColor = "yellow";
        bulb.src = "on.jpg"
        bulbSwitch.innerHTML = "off"
        bulbOn = true;
    }else{
        // bulb.style.backgroundColor = "transparent"
        bulb.src = "off.jpg"
        bulbSwitch.innerHTML = "on"
        bulbOn = false;
    }
})