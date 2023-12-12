const conversor = require('./temperatureConverter');

var tempC = 25;

var tempF = conversor.celsiusToFahrenheit(tempC);

console.log('Temperatura em Fahrenheit: ',tempF);


console.log('------------------------')

var tempF = 77;

var tempC = conversor.FahrenheitToCelsius(tempF);

console.log('Temperatura em Celsius: ',tempC);