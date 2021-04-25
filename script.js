function fahrenheitConverter() {
    var fromfah = document.getElementById("inputFahrenheit").value;
    document.getElementById("outputFahrenheit").innerHTML = fromfah + "°F";

    var countfahtocel = (fromfah-32)/1.8;
    var fahtocel = countfahtocel.toFixed(2);
    document.getElementById("outputCelcius").innerHTML = parseFloat(fahtocel) + "°C";

    var countfahtokel = ((fromfah-32)/1.8) + 273.15;
    var fahtokel = countfahtokel.toFixed(2);
    document.getElementById("outputKelvin").innerHTML = parseFloat(fahtokel) + " K";

    if ( fromfah == "") {
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
}
function celciusConverter() {
    var fromcel = document.getElementById("inputCelcius").value;
    document.getElementById("outputCelcius").innerHTML = fromcel + "°C";

    var countceltofah = (fromcel*1.8)+32;
    var celtofah = countceltofah.toFixed(2);
    document.getElementById("outputFahrenheit").innerHTML = parseFloat(celtofah) + "°F";

    var countceltokel = parseFloat(fromcel)+273.15;
    var celtokel = countceltokel.toFixed(2);
    document.getElementById("outputKelvin").innerHTML = celtokel + " K";

    if ( fromcel == "") {
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
}
function kelvinConverter() {
    var fromkel = document.getElementById("inputKelvin").value;
    document.getElementById("outputKelvin").innerHTML = fromkel + " K";

    var countkeltofah = ((fromkel-273.15)*1.8)+32;
    var keltofah = countkeltofah.toFixed(2);
    document.getElementById("outputFahrenheit").innerHTML = parseFloat(keltofah) + "°F";

    var countkeltocel = fromkel - 273.15;
    var keltocel = countkeltocel.toFixed(2);
    document.getElementById("outputCelcius").innerHTML = parseFloat(keltocel) + "°C";

    if ( fromkel == "" ) {
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
}
function clearInput() {
    var fromkel = document.getElementById("inputKelvin").value;
    var fromcel = document.getElementById("inputCelcius").value;
    var fromfah = document.getElementById("inputFahrenheit").value;

    if ( fromkel != "" ) {
        document.getElementById('inputFahrenheit').value = '0°F';
        document.getElementById('inputCelcius').value = '0°C';
        document.getElementById('inputKelvin').value = '0 K';
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
    else if ( fromcel != ""){
        document.getElementById('inputFahrenheit').value = '0°F';
        document.getElementById('inputCelcius').value = '0°C';
        document.getElementById('inputKelvin').value = '0 K';
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
    else if ( fromfah != ""){
        document.getElementById('inputFahrenheit').value = '0°F';
        document.getElementById('inputCelcius').value = '0°C';
        document.getElementById('inputKelvin').value = '0 K';
        document.getElementById('outputFahrenheit').innerHTML = '0°F';
        document.getElementById('outputCelcius').innerHTML = '0°C';
        document.getElementById('outputKelvin').innerHTML = '0 K';
    }
}