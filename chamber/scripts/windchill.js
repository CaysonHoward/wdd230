function calculateWindChill() {
    var temperatureInput = document.getElementById("temperature");
    var windSpeedInput = document.getElementById("windSpeed");
    var resultDisplay = document.getElementById("result");

    var temperature = parseFloat(temperatureInput.value);
    var windSpeed = parseFloat(windSpeedInput.value);

    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        resultDisplay.textContent = "Wind Chill Factor: " + windChill.toFixed(2);
    } else {
        resultDisplay.textContent = "N/A";
    }
}