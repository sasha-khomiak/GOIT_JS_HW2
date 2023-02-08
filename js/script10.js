// Доповни код функції splitMessage(message, delimiter) таким чином,
// щоб вона повертала у змінній words результат поділу рядка
// message за роздільником delimiter - масив рядків.

//ТЕСТИ

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   // Change code above this line
//   return words;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line

  words = message.split(delimeter);

  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));
