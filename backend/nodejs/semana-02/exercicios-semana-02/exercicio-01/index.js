function generateMessage(name, age, city) {
  const message = `Olá, meu nome é ${name}, tenho ${age} anos e moro em ${city}.`;
  return message;
}

const personName = "João";
const personAge = 25;
const personCity = "São Paulo";
const formattedMessage = generateMessage(personName, personAge, personCity);
console.log(formattedMessage);