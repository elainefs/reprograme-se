const prompt = require("prompt-sync")();

array1 = [];
array2 = [];
array3 = [];

console.log('Array 1');
for (i = 0; i < 5; i++) {
  array1.push(parseInt(prompt('Digite um número: ')));
}

console.log('Array 2');
for (i = 0; i < 5; i++) {
  array2.push(parseInt(prompt('Digite um número: ')));
}

for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    if (array1[i] == array2[j]) {
      array3.push(array1[i]);
    }
  }
}

console.log(array3);