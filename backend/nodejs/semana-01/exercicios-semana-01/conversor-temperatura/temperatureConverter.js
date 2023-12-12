function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}

function FahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

module.exports = {
  celsiusToFahrenheit, FahrenheitToCelsius
}