function isPalindrome(word) {
  const cleanWord = word.toLowerCase();
  const reversedWord = cleanWord.split("").reverse().join("");
  return cleanWord === reversedWord;
}

const wordsToTest = [
  "arara",
  "banana",
  "radar",
  "javascript",
  "reconocer",
  "palindrome",
];

wordsToTest.forEach((word) => {
  const result = isPalindrome(word) ? "é um palíndromo" : "não é um palíndromo";
  console.log(`A palavra "${word}" ${result}.`);
});
