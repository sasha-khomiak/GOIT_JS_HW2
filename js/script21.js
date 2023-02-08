// Напиши функцію findLongestWord(string), яка приймає довільний рядок,
// що складається тільки зі слів, розділених пробілом(параметр string),
// і повертає найдовше слово в цьому рядку.

//ТЕСТИ

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function findLongestWord(string) {
//   // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function findLongestWord(string) {
  // Change code below this line

  let arr = string.split(" ");
  let longest = "";

  for (let i = 0; i < arr.length; i += 1) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }

  return longest;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
