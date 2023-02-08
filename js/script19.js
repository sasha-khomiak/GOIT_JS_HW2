// Доповни код циклу for таким чином, щоб він послідовно логував
// усі елементи масиву fruits.

//ТЕСТИ

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = ;) { // Change this line
//   const fruit = fruits[]; // Change this line
//   console.log(fruit);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
