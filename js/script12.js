// Доповни код функції makeStringFromArray(array, delimiter)
// таким чином, щоб вона повертала у змінній string результат
// з'єднання елементів масиву array з роздільником delimiter - рядок.

//ТЕСТИ

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   // Change code above this line
//   return string;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter);

  // Change code above this line
  return string;
}

console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
