function convertTemperature() {
    try {
        let temperature = parseFloat(document.getElementById("temperatureInput").value);
        let fromUnit = document.getElementById("fromUnit").value;
        let toUnit = document.getElementById("toUnit").value;

        if (isNaN(temperature)) {
            throw new Error("Please enter a valid temperature");
        }

        let result;

        switch (`${fromUnit}-${toUnit}`) {
            case "celsius-fahrenheit":
                result = (temperature * 9/5) + 32;
                break;
            case "celsius-kelvin":
                result = temperature + 273.15;
                break;
            case "fahrenheit-celsius":
                result = (temperature - 32) * 5/9;
                break;
            case "fahrenheit-kelvin":
                result = (temperature + 459.67) * 5/9;
                break;
            case "kelvin-celsius":
                result = temperature - 273.15;
                break;
            case "kelvin-fahrenheit":
                result = (temperature * 9/5) - 459.67;
                break;
            default:
                result = temperature; // If both units are same, no conversion needed
        }

        document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
    } catch (error) {
        document.getElementById("result").innerText = error.message;
    }
}
