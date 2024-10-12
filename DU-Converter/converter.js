function convertTemperature() {
let input = parseFloat(document.getElementById("inputNumber").value);
let resultField = document.getElementById("result");
let conversionType = document.getElementById("conversionType").value;

if (isNaN(input)) {
    resultField.value = "Invalid input";
    return;
}

if (conversionType === "CtoF") {
    let result = (input * 9/5) + 32;
    resultField.value = result.toFixed(2) + " °F";
} else if (conversionType === "FtoC") {
    let result = (input - 32) * 5/9;
    resultField.value = result.toFixed(2) + " °C";
} else {
    resultField.value = "";
}
}