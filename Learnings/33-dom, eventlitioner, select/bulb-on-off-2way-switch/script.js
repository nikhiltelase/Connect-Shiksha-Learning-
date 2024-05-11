const bulb1 = document.getElementById('bulb1');
const bulb2 = document.getElementById('bulb2');
const bulbSwitch = document.getElementById('switch');

// var bulbOn = false;

// bulbSwitch.addEventListener('click', function(){
//     if (!bulbOn){
//         bulb.style.backgroundColor = "yellow";
//         bulbSwitch.innerHTML = "off"
//         bulbOn = true;
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         bulbSwitch.innerHTML = "on"
//         bulbOn = false;
//     }
// })


// bulb-1 ka bg-yellow set hai pahle se

var bulb1On = true;
var bulb2On = false;

// switch logic
bulbSwitch.addEventListener('click', () => {
    if(bulb1On){
        // off bulb-1
        bulb1.style.backgroundColor = 'transparent';
        bulb1On = false;
        // on bulb-2
        bulb2.style.backgroundColor = 'yellow';
        bulb2On = true;
        // changing switch text
        bulbSwitch.innerHTML = "Switch on Bulb-1"
    }
    else if(bulb2On){
        // off bulb-2
        bulb2.style.backgroundColor = 'transparent';
        bulb2On = false;
        // on bulb-1
        bulb1.style.backgroundColor = 'yellow';
        bulb1On = true;
        // changing switch text
        bulbSwitch.innerHTML = "Switch on Bulb-2"
    }
})

