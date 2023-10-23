const prompt = require("prompt-sync")();

array1 = [];
array2 = [];
array3 = [];

console.log('Array 1');
for (i = 0; i < 4; i++) {
  array1.push(parseInt(prompt('Digite um número (0 a 9): ')));
}

console.log('Array 2');
for (i = 0; i < 4; i++) {
  array2.push(parseInt(prompt('Digite um número (0 a 9): ')));
}

for (i = 0; i < 4; i++) {
  array3.push(array1[i] + array2[i]);
}

console.log(array3);