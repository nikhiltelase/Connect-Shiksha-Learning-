function convert() {
    var input = document.querySelector("#input_value").value;
  
    input = parseFloat(input);
  
    var fromUnit = document.querySelector("#fromUnit").value;
    var toUnit = document.querySelector("#toUnit").value;
  
    var result;
  
    if (fromUnit === "c" && toUnit === "f") {
      result = (input * 9) / 5 + 32;
      
    } else if (fromUnit === "f" && toUnit === "c") {
      result = ((input - 32) * 5) / 9;
      
    } else if (fromUnit === "c" && toUnit === "k") {
      result = input + 273.15;
      
    } else if (fromUnit === "k" && toUnit === "c") {
      result = input - 273.15;
      
    } else if (fromUnit === "f" && toUnit === "k") {
      result = ((input - 32) * 5) / 9 + 273.15;
      
    } else if (fromUnit === "k" && toUnit === "f") {
      result = ((input - 273.15) * 9) / 5 + 32;
      
    } else {
      result = input;
      
    }
  
    var re = document.querySelector(".re");
    re.textContent = `${result.toFixed(2)} ${toUnit.toUpperCase()}`;
  }