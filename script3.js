const convertButton = document.getElementById("convert-button");

function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;

  let result;

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = temperature * 9 / 5 + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = (temperature - 32) * 5 / 9;
  } else {
    result = temperature;
  }

  document.getElementById("result").innerHTML = `${temperature.toFixed(2)} ${fromUnit.toUpperCase()} = ${result.toFixed(2)} ${toUnit.toUpperCase()}`;
}

convertButton.addEventListener("click", convertTemperature);
